var _ = require('lodash');
var percent = require("percent-value");

module.exports = function me() {

    var $me  = $('#me');
    var $was = $('.was', $me);
    var $now = $('.now', $me);

    var win_width  = $win.width();
    var win_height = $win.height();
    var me_width   = $me.width();
    var me_height  = $me.height();
    var me_top     = $me.offset().top;

    $win.on('scroll.me', function() {

        var scrolled   = $doc.scrollTop();
        var start      = me_top - win_height;
        var end        = me_top + me_height + win_height;
        var percentage = _.clamp(percent(end).is(scrolled - start), 0, 100);

        $was.css({
            width: (100 - percentage) + '%'
        });

        $now.css({
            width: percentage + '%'
        });
    });

    // Sets new contextual position data
    $win.on('resize.me', _.throttle(function(event) {
        win_width  = $win.width();
        win_height = $win.height();
        me_width   = $me.width();
        me_height  = $me.height();
        me_top     = $me.offset().top;
    }, 100));
}

