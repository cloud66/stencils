// this transformer updates an annotation on all deployments which forces them to "bounce"
// ie restart without changing their image
// it's best to use this as part of a filter
$$.forEach(function($) {
    if ($.kind != "Deployment") {
        return
    }
    if ($.spec == null) {
        return
    }
    if ($.spec.template == null) {
        $.spec.template = {}
    }
    if ($.spec.template.metadata == null) {
        $.spec.template.metadata = {}
    }
    if ($.spec.template.metadata.labels == null) {
        $.spec.template.metadata.labels = {}
    }

    $.spec.template.metadata.annotations = { "cloud66.com/bouncer-timestamp": "" + Date.now() + "" }
});
