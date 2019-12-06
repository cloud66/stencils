// adds consistent annotations to all components deployed to the cluster for better identification
$$.forEach(function($) {
    if ($.annotations == null) {
        $.annotations = {}
    }

    $.annotations["cloud66.com/formation-uuid"] = "${formation.uuid}"
    $.annotations["cloud66.com/stencil-uuid"] = "${stencil.uuid}"
    $.annotations["cloud66.com/snapshot-uid"] = "${snapshot.uuid}"
    $.annotations["cloud66.com/snapshot-gitref"] = "${snapshot.gitref}"
});
