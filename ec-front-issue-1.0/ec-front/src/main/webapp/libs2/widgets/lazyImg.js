define("http://static.winxuancdn.com/libs/widgets/lazyImg.js", ["jQuery", "../jQuery/plugin/lazyload"],
function(a) {
    var b = a("jQuery").sub();
    return a("../jQuery/plugin/lazyload")(b),
    lazy = {
        run: function() {
            b(function() {
                var a = b("[fragment]");
                a.mouseover(function() {
                    var a = b(this);
                    a.data("loaded") || (a.find("img").trigger("imgload"), a.data("loaded", "loaded"));
                }),
                a.find("img:hidden").lazyload({
                    event: "imgload"
                });
                var c = b("img[data-lazy!='false']:visible,#list img,#grid img");
                c.lazyload();
            });
        }
    },
    lazy;
});
define("http://static.winxuancdn.com/libs/jQuery/plugin/lazyload.js", [],
function(a) {
    return function(a) { (function(a) {
            a.fn.lazyload = function(b) {
                var c = {
                    threshold: 50,
                    failure_limit: 100,
                    event: "scroll",
                    effect: "show",
                    container: window,
                    skip_invisible: !0
                };
                b && (null !== b.failurelimit && (b.failure_limit = b.failurelimit, delete b.failurelimit), a.extend(c, b));
                var d = this;
                return 0 == c.event.indexOf("scroll") && a(c.container).bind(c.event,
                function(b) {
                    var e = 0;
                    d.each(function() {
                        if (c.skip_invisible && !a(this).is(":visible")) return;
                        if (!a.abovethetop(this, c) && !a.leftofbegin(this, c)) if (!a.belowthefold(this, c) && !a.rightoffold(this, c)) a(this).trigger("appear");
                        else if (++e > c.failure_limit) return ! 1
                    });
                    var f = a.grep(d,
                    function(a) {
                        return ! a.loaded
                    });
                    d = a(f)
                }),
                this.each(function() {
                    var b = this;
                    b.loaded = !1,
                    a(b).one("appear",
                    function() {
                        this.loaded || a("<img />").bind("load",
                        function() {
                            a(b).hide().attr("src", a(b).data("original"))[c.effect](c.effectspeed),
                            b.loaded = !0
                        }).attr("src", a(b).data("original"))
                    }),
                    0 != c.event.indexOf("scroll") && a(b).bind(c.event,
                    function(c) {
                        b.loaded || a(b).trigger("appear")
                    })
                }),
                a(c.container).trigger(c.event),
                this
            },
            a.belowthefold = function(b, c) {
                if (c.container === undefined || c.container === window) var d = a(window).height() + a(window).scrollTop();
                else var d = a(c.container).offset().top + a(c.container).height();
                return d <= a(b).offset().top - c.threshold
            },
            a.rightoffold = function(b, c) {
                if (c.container === undefined || c.container === window) var d = a(window).width() + a(window).scrollLeft();
                else var d = a(c.container).offset().left + a(c.container).width();
                return d <= a(b).offset().left - c.threshold
            },
            a.abovethetop = function(b, c) {
                if (c.container === undefined || c.container === window) var d = a(window).scrollTop();
                else var d = a(c.container).offset().top;
                return d >= a(b).offset().top + c.threshold + a(b).height()
            },
            a.leftofbegin = function(b, c) {
                if (c.container === undefined || c.container === window) var d = a(window).scrollLeft();
                else var d = a(c.container).offset().left;
                return d >= a(b).offset().left + c.threshold + a(b).width()
            },
            a.extend(a.expr[":"], {
                "below-the-fold": function(b) {
                    return a.belowthefold(b, {
                        threshold: 0,
                        container: window
                    })
                },
                "above-the-fold": function(b) {
                    return ! a.belowthefold(b, {
                        threshold: 0,
                        container: window
                    })
                },
                "right-of-fold": function(b) {
                    return a.rightoffold(b, {
                        threshold: 0,
                        container: window
                    })
                },
                "left-of-fold": function(b) {
                    return ! a.rightoffold(b, {
                        threshold: 0,
                        container: window
                    })
                }
            })
        })(a)
    }
});