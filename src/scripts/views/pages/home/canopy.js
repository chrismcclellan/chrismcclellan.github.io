var _ = require('lodash');
var percent = require("percent-value");

module.exports = function canopy() {

    var $canopy = $('#canopy');
    var $objective = $('.objective', $canopy);

    $win.on('scroll.canopy', function() {
        $objective.removeClass('init');

    //     var scrolled   = $doc.scrollTop();
    //     var threshold  = $win.height();
    //     var percentage = _.clamp(percent(threshold).is(scrolled), 0, 100);

    //     var top = percentage + 50;

    //     $canopy.css({
    //         transform: 'translate(0%, -' + top +'%)'
    //     });
    });
}

