module.exports = function(grunt) {

    // A very basic default task.
    grunt.registerTask('default', 'Log some stuff.', [
        'clean',
        'static',
        'browserify',
        'sass',
        'watch'
    ]);
};
