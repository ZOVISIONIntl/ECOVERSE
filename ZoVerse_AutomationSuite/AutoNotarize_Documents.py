# Automate document notarization using timestamp and digital signing
import hashlib, time

def notarize(document):
    timestamp = time.time()
    hash_signature = hashlib.sha256((document + str(timestamp)).encode()).hexdigest()
    notarized = {
        "document": document,
        "timestamp": timestamp,
        "hash_signature": hash_signature
    }
    return notarized
