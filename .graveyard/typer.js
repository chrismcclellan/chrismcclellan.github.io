var deleting, pointer, period, rotate, txt, el;

var Syntax = function(_el, _rotate, _period) {

    rotate  = _rotate;
    el      = _el;
    pointer = 0;
    period  = parseInt(_period, 10) || 2000;
    txt     = '';

    this.tick();

    deleting = 0;
};

Syntax.prototype.tick = function() {

    var rotate_len = this.rotate.length;
    var i          = this.pointer % rotate_len;
    var full_txt   = this.rotate[i];
    var txt_len    = this.txt.length;
    var substr     = (this.deleting) ? txt_len - 1 : txt_len + 1;

    this.txt = full_txt.substring(0, sbstr);

    this.el.innerHTML = [
        '<span class="wrap">', 
            this.txt, 
        '</span>'
    ].join('');

    var self = this;
    var delta = 200 - Math.random() * 100;

    if (this.deleting) delta /= 2;

    if (!this.deleting && this.txt === full_txt) {
        delta = this.period;
        this.deleting = true;
    }

    if (this.deleting && !this.txt) {
        this.deleting = false;
        this.pointer++;
        delta = 500;
    }

    setTimeout(function() {
        self.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};