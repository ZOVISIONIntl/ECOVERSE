// Inject pre-built contract templates into target docs
function injectContract(template, targetDocument) {
    return targetDocument.replace("{{CONTRACT_CLAUSE}}", template);
}
