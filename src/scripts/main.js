var jQuery = require('jquery');
window.$ = window.jQuery = jQuery;

global.views = require('./views');

module.exports = (function() {

    global.$win = $(window);
    global.$doc = $(document);
    global.$bod = $('body');

    require('livereload-js');

    // var favicon = new views.regions.favicon();
    var home = new views.pages.home();

})();
