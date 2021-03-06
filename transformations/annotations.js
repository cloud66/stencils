// adds consistent annotations to all components deployed to the cluster for better identification
// this transformer must be added to a Formation if you'd like to track it's deployment progress
$$.forEach(function($) {
    if ($.metadata == null) {
        $.metadata = {}
    }

    if ($.metadata.annotations == null) {
        $.metadata.annotations = {}
    }

    $.metadata.annotations["cloud66.com/formation-uuid"] = "${formation.uuid}"
    $.metadata.annotations["cloud66.com/stencil-uuid"] = "${stencil.uuid}"
    $.metadata.annotations["cloud66.com/snapshot-uid"] = "${snapshot.uuid}"
    $.metadata.annotations["cloud66.com/snapshot-gitref"] = "${snapshot.gitref}"
});
