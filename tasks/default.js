module.exports = function(g) {

    // A very basic default task.
    g.registerTask('default', 'Log some stuff.', [
        'clean',
        'handlebars_to_static',
        'browserify',
        'sass',
        'copy',
        'watch'
    ]);
};
