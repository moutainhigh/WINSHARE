define("http://static.winxuancdn.com/libs/module/mall-menu.js",["jQuery","./mall-data"],function(a){function d(a){this.opt={menu:"dl.goods_leftmenu",menuItem:"dd",itemList:"ul.pop",hover:"hover"},b.extend(this.opt,a),this.init()}var b=a("jQuery"),c=a("./mall-data");return d.prototype={init:function(){this.menu=b(this.opt.menu),this.menuItem=this.menu.find(this.opt.menuItem),this.bind()},bind:function(){var a=this;this.menuItem.mouseover(function(b){a.over(this),b.stopPropagation()}),this.menu.mouseover(function(a){a.stopPropagation()}),b(document).mouseover(function(b){a.hide(b)})},over:function(a){var a=b(a),d=a.data("id");a.data("showing")||(this.menuItem.removeClass(this.opt.hover),a.addClass(this.opt.hover),this.menuItem.find(this.opt.itemList).remove(),this.menuItem.data("showing",!1),this.load(a,c[d]),a.data("showing",!0),this.showing=!0)},hide:function(a){this.showing&&(this.menuItem.data("showing",!1).removeClass(this.opt.hover).find(this.opt.itemList).remove(),this.showing=!1)},load:function(a,c){if(c&&c.items&&c.items.length>0){var d=["<ul class='pop'>"];b.each(c.items,function(){d.push("<li><a href='"+this.href+"' title='"+this.title+"'>"+this.name+"</a>")}),d.push("</ul>"),a.append(d.join(""))}}},d});
define("http://static.winxuancdn.com/libs/module/mall-data.js",[],function(a){var b={20110699:{title:"箱包",items:[{title:"女包",name:"女包",href:"http://list.winxuan.com/20110700"},{title:"男包",name:"男包",href:"http://list.winxuan.com/20110701"},{title:"户外旅行包",name:"户外旅行包",href:"http://list.winxuan.com/20110702"},{title:"功能箱包",name:"功能箱包",href:"http://list.winxuan.com/20110703"}]},20110733:{title:"手表",items:[{title:"时尚品牌",name:"时尚品牌",href:"http://list.winxuan.com/20110735"},{title:"瑞士品牌",name:"瑞士品牌",href:"http://list.winxuan.com/20110742"},{title:"欧美品牌",name:"欧美品牌",href:"http://list.winxuan.com/20110737"},{title:"日韩品牌",name:"日韩品牌",href:"http://list.winxuan.com/20110738"},{title:"配件工具",name:"配件工具",href:"http://list.winxuan.com/20110739"}]},519:{title:"数码产品",items:[{title:"手机",name:"手机",href:"http://list.winxuan.com/20110619"},{title:"电脑",name:"电脑",href:"http://list.winxuan.com/20110659"},{title:"摄影摄像",name:"摄影摄像",href:"http://list.winxuan.com/521"},{title:"娱乐视听",name:"娱乐视听",href:"http://list.winxuan.com/522"},{title:"数码相框",name:"数码相框",href:"http://list.winxuan.com/527"},{title:"录音笔",name:"录音笔",href:"http://list.winxuan.com/528"},{title:"移动存储",name:"移动存储",href:"http://list.winxuan.com/529"},{title:"照片打印机",name:"照片打印机",href:"http://list.winxuan.com/530"}]},539:{title:"生活家电",items:[{title:"厨卫电器",name:"厨卫电器",href:"http://list.winxuan.com/540"},{title:"个人护理",name:"个人护理",href:"http://list.winxuan.com/541"},{title:"家居电器",name:"家居电器",href:"http://list.winxuan.com/542"}]},543:{title:"家居用品",items:[]},567:{title:"茶叶",items:[]},569:{title:"美妆",items:[{title:"美容护肤",name:"美容护肤",href:"http://list.winxuan.com/574"},{title:"个人护理用品",name:"个人护理用品",href:"http://list.winxuan.com/575"}]},572:{title:"食品",items:[]},573:{title:"母婴",items:[{title:"纸类用品",name:"纸类用品",href:"http://list.winxuan.com/584"},{title:"洗护",name:"洗护",href:"http://list.winxuan.com/585"},{title:"奶粉",name:"奶粉",href:"http://list.winxuan.com/586"},{title:"婴儿用具",name:"婴儿用具",href:"http://list.winxuan.com/587"},{title:"辅食",name:"辅食",href:"http://list.winxuan.com/588"}]},589:{title:"围巾/帽子",items:[]},597:{title:"玩具",items:[]}};return b});