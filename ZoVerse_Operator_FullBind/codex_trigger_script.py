# Codex trigger for chaining automation tasks
def trigger_automation_chain(task):
    if task == "notarize":
        return "Run: AutoNotarize_Documents.py"
    elif task == "iplog":
        return "Run: IP_Log_Registrar.py"
    elif task == "inject_contract":
        return "Run: Contract_Injector_Agent.js"
    else:
        return "Unknown task"
