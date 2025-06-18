# Flask or FastAPI routes to bind AI services to UI
from flask import Flask, request, jsonify
import time, hashlib

app = Flask(__name__)

@app.route('/notarize', methods=['POST'])
def notarize():
    content = request.json['document']
    timestamp = time.time()
    hash_signature = hashlib.sha256((content + str(timestamp)).encode()).hexdigest()
    return jsonify({ "timestamp": timestamp, "hash_signature": hash_signature })

@app.route('/register-ip', methods=['POST'])
def register_ip():
    data = request.json
    entry = {
        "title": data['title'],
        "creator": data['creator'],
        "type": data['type'],
        "date_created": data['date_created'],
        "registered_by": "Dawn & Dust AI"
    }
    return jsonify(entry)

if __name__ == '__main__':
    app.run(port=5050)
