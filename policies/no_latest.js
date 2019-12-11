// this bans use of any image with the latest tag
$$.forEach(function($) {
    if ($.kind === 'Deployment') {
        $.spec.template.spec.containers.forEach(function(container) {
            var image = new DockerImage(container.image);
            if (image.tag === 'latest') {
                errors.add_error('no_latest',"latest is used in " + $.metadata.name, 1)
            }
        });
    }
})
