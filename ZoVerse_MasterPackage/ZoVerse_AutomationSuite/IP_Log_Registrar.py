# Register IP using a simple ledger format
def register_ip(title, creator, content_type, date_created):
    entry = {
        "title": title,
        "creator": creator,
        "type": content_type,
        "date_created": date_created,
        "registered_by": "Dawn & Dust AI"
    }
    return entry
