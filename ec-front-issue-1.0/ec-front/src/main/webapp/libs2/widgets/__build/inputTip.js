define("http://static.winxuancdn.com/libs/widgets/inputTip.js",[],function(a){return function(a){a.fn.inputTip=function(b){function e(){d.data("isNull",c)}var c=!0,d=a(this);e(),d.val(b),d.focusout(function(){c=a(this).val()!=""?!1:!0,e(),c&&a(this).val(b)}),d.focusin(function(){c=a(this).val()!=""?a(this).val()!=b?!1:!0:!0,e(),c&&a(this).val("")}),d.parents("form").each(function(){a(this).submit(function(){d.val("")})})}}});