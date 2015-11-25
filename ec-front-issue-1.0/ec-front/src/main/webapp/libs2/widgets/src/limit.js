define(function(require){
    var $ = require("jQuery"), conf = require("config");
    function Item(el){
        this.el = el;
        this.hourEl = el.find("[bind='hour']");
        this.minEl = el.find("[bind='min']");
        this.secEl = el.find("[bind='sec']");
        this.end = parseInt(el.attr("end"));
        this.current = window.limitCurrentTime;
        if (isNaN(this.end)) {
            this.end = new Date().getTime() + 10000000;
        }
        if (isNaN(this.current)) {
            this.current = new Date().getTime();
        }
        this.distance = this.end - this.current;
        this.init();
    };
    Item.prototype = {
        init: function(){
            var obj = this;
            this.timer = setTimeout(function(){
                obj.refresh();
            }, 1000);
        },
        refresh: function(){
            if (this.distance - 1000 > 0) {
                this.distance = this.distance - 1000;
                var date = this.parse(), obj = this, day = 24 * (date.getDate()-1);
                this.hourEl.html(date.getHours() + day);
                this.minEl.html(date.getMinutes());
                this.secEl.html(date.getSeconds());
                this.timer = setTimeout(function(){
                    obj.refresh();
                }, 1000);
            }
            else {
                this.hourEl.html("00");
                this.minEl.html("00");
                this.secEl.html("00");
                try {
                    this.el.remove();
                    this.el.trigger("reload");
                } 
                catch (e) {
                    return;
                }
            }
        },
        parse: function(){
            var utc = new Date(new Date(1970, 1, 1, 0, 0, 0, 0).getTime() + this.distance);
            return utc;
        },
        clearTimer: function(){
            clearTimeout(this.timer);
        }
    };
    function Limit(cfg){
        if (window == this) 
            return new Limit(cfg);
        this.opt = {};
        this.items = [];
        $.extend(this.opt, cfg);
        this.init();
    };
    Limit.prototype = {
        init: function(){
            var obj = this;
            this.limit = this.opt.context.find("[bind='limit']");
            if ((window.limitCurrentTime)) {
                this.limit.each(function(){
                    obj.items.push(new Item($(this)));
                });
            }
            else {
                if (!window.currentTimeLoading) {
                    window.currentTimeLoading = true;
                    $.getJSON(conf.portalServer + "/current.jsp?callback=?", function(data){
                        window.limitCurrentTime = data.current;
                        obj.limit.each(function(){
                            obj.items.push(new Item($(this)));
                        });
                    });
                }
                else {
                    var timer = setInterval(function(){
                        if (window.limitCurrentTime) {
                            obj.limit.each(function(){
                                obj.items.push(new Item($(this)));
                            });
                            clearInterval(timer);
                        }
                    }, 200);
                }
            }
            this.opt.context.bind("refresh", function(){
                obj.refresh();
            });
            this.opt.context.bind("reload", function(){
                obj.reload();
            });
        },
        refresh: function(){
            var obj = this;
            this.limit = this.opt.context.find("[bind='limit']");
            $.each(this.items, function(){
                this.clearTimer();
                obj.items = null;
            });
            this.limit.each(function(){
                obj.items = [];
                obj.items.push(new Item($(this)));
            });
        },
        reload: function(){
            var fragments = this.opt.context.find("[fragment]"), obj = this;
            fragments.each(function(){
                obj.load($(this));
            });
        },
        load: function(el){
            var obj = this, id = el.attr("fragment");
            $.get(conf.portalServer + "/fragment/" + id, function(data){
                var data = $(data);
                if (data.attr("fragment") != id) {
                    var el = data.find("[fragment='" + id + "']");
                    if (el.length > 0) {
                        el.html(data.find("[fragment='" + id + "']").html());
                    }
                    else {
                        el.html(data.filter("[fragment='" + id + "']").html());
                    }
                }
                else {
                    el.html(data.html());
                }
                el.trigger("refresh");
            });
        }
    };
    return Limit;
});
