var _ = require('lodash');
var async = require('async');
var anime = require('animejs');

module.exports = function() {

    // Setup
    var $wrap = $('#preload');
    var $lines = $('.line', $wrap);
    var $cmds = $('.cmd', $wrap);
    var $prev;

    buildCmdMarkup($cmds);


    // Process each line
    async.eachOfSeries($lines, function(val, index, nextLine) {

        console.log('$lines', val, index);

        var $line      = $lines.eq(index);
        var $cmd       = $line.find('.cmd');
        var $cmd_chars = $('i', $cmd);
        var speed_attr = $line.attr('data-speed') || '';
        var speed      = !speed_attr ? 1 : parseFloat(speed_attr);
        var delay      = index * _.random(25, 35);

        $line.removeClass('hide');

        if ($prev) $prev.addClass('done');
        $prev = $line;

        if (!$cmd_chars.length)
            return window.setTimeout(nextLine, index * _.random(80, 160));

        $('.typing', $wrap).removeClass('typing');

        // Process each cmd
        async.eachOfSeries($cmd_chars, function(_val, _index, nextCmd) {

            // console.log('$cmd_chars', _val, _index);

            var $cmd_char   = $cmd_chars.eq(_index);
            var start_delay = !_index ? _.random(400, 900) : 0;
            var delay       = _index * _.random(50, 70);

            window.setTimeout(function() {

                $cmd_char.css('display', 'inline-block');
                $cmd.addClass('typing');

                window.setTimeout(nextCmd, delay);

            }, start_delays);

        }, function cmdsDone(error) {

            if (error) return nextLine(error);
            nextLine();
        });

    }, function(error) {
        // if (error) return console.error(err.message);
        // console.log('linesDone > success');
    });

}


function buildCmdMarkup($cmds) {

    // Wraps each cmd string's characters
    // to be later animated individually
    $cmds.each(function() {

        var $cmd = $(this);
        var cmd_str = $cmd.attr('data-cmd') || '';

        $cmd.html(cmd_str.split('').map(function(char) {
            return '<i>'+char+'</i>';
        }));
    });
}
