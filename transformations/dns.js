// this amends ingress configuration to create a ZoneDNS record for them
// it relies on the service being called SERVICE_NAME-svc (see the value for serviceName) and having
// nginx ingress controller installed on the cluster
// it also requires the service to have an http port defined (usually in service.yml)
$$.forEach(function($) {
    // Only apply this to Ingress
    if ($.kind != "Ingress") {
        return
    }
    if ($.annotations == null) {
        $.annotations = {}
    }
    $.annotations["kubernetes.io/ingress.class"] = "nginx"
    if ($.spec == null) {
        $.spec = {}
    }
    if ($.spec.rules == null)
    {
        $.spec.rules = []
    }

    $.spec.rules.push({
        host: "${endpoint(service.name)}",
        http: {
            paths: [
                {
                    backend: {
                        serviceName: "${concat(service.name, \"-svc\")}",
                        servicePort: "${service.port.http}"
                    }
                }
            ]
        }
    })
})
