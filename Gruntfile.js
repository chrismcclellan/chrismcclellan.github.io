var _ = require('lodash');

var taskpath = require('path').resolve(__dirname, './tasks');

var tasks = require('include-all')({
    dirname: taskpath,
    filter: /(.+)\.js$/,
});

module.exports = function(grunt) {

    var g = grunt || new Error("Missing grunt");

    g.option('prod', false);
    g.option('dev', !g.option('prod'));
    g.option('src', 'src');
    g.option('dest', 'build');

    for (var key in tasks)
        if (_.isFunction(tasks[key])) tasks[key](g);

    g.registerTask('build', [
        'handlebars_to_static',
        'browserify',
        'sass'
    ]);

    g.registerTask('server', [
        'clean',
        'build',
        'copy',
        'connect:server',
        'watch'
    ]);

    if (!g.task.exists('default'))
        g.registerTask('default', ['server']);
};
