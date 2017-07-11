/**
 * Created by syk on 17/5/28.
 */
(function (w) {
    function jQuery() {
        return new jQuery.fn.init();
    }

    jQuery.fn = jQuery.prototype = {

    };

    var init = jQuery.fn.init = function () {

    }
    init.prototype = jQuery.fn;

    w.jQuery = w.$ = jQuery;
}(window));