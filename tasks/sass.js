/**
 *
 *   Compass (SCSS)
 *
 *   For usage docs see: https://github.com/gruntjs/grunt-contrib-compass
 *
 */

module.exports = function(grunt) {

    grunt.config.set('sass', {

        build: {
            options: {
                style: 'nested',
                require: ['sass-globbing'],
                loadPath: [
                    'node_modules/foundation-sites/scss'
                ]
            },
            files: [{
                expand: true,
                cwd: 'src/styles',
                src: ['*.scss'],
                dest: 'build/styles',
                ext: '.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
}
