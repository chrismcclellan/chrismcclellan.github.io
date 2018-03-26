/**
 *
 *   Clean
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-clean
 *
 */

module.exports = function(grunt) {

    grunt.config.set('clean', {
        build: [
            'build/**/*'
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
