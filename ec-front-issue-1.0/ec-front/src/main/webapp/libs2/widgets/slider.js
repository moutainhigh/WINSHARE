define("http://static.winxuancdn.com/libs/widgets/slider.js",["jQuery"],function(a){function c(a){if(window==this)return new c(a);var d={index:0,selector:{container:"div.shopads_box",pages:"ul.rotation2 li",ads:"ul.shop_ads",sort:"div.ads_sort",dl:"div.ads_sort dl",nav:"div.ads_sort dd",leftArrow:"a.left_arrow",rightArrow:"a.right_arrow"},className:{pageSelected:"current_ad",sortSelected:"now_theme"}};b.extend(this,d,a),this.el=b(this.selector.container),this.container||(this.container=this.el.parent()),this.init()}var b=a("jQuery");return c.prototype={init:function(){this.pages=this.el.find(this.selector.pages),this.ads=this.el.find(this.selector.ads),this.height=this.ads.find("li").outerHeight(),this.sort=this.container.find(this.selector.sort),this.navContainer=this.container.find(this.selector.dl),this.nav=this.container.find(this.selector.nav),this.navWidth=this.nav.innerWidth(),this.navContainer.css({width:this.navWidth*this.nav.length}),this.leftArrow=this.container.find(this.selector.leftArrow),this.rightArrow=this.container.find(this.selector.rightArrow),this.initList(),this.bind(),this.rotate()},initList:function(){var a=this.ads.find("li");this.size=a.length,a.each(function(a){var c=b(this);c.attr("index",a)}),this.nav.length>0&&this.nav.each(function(a){b(this).attr("index",a)})},bind:function(){var a=this;this.container.delegate(this.selector.leftArrow,"click",function(){a.prev()}),this.container.delegate(this.selector.rightArrow,"click",function(){a.next()}),this.container.delegate(this.selector.pages,"click",function(){a.pageGo(this)}),this.container.delegate(this.selector.nav,"mouseover",function(){a.navGo(this)}),this.container.delegate(this.selector.nav,"click",function(){a.navGo(this)}),this.container.mouseover(function(){a.isHover=!0}).mouseout(function(){a.isHover=!1}),this.container.delegate(this.selector.sort,"mouseover",function(){a.isHover=!0}),this.container.delegate(this.selector.sort,"mouseout",function(){a.isHover=!1}),b(window).focus(function(){a.focus()}).blur(function(){a.blur()})},prev:function(){this.refresh(-1)},next:function(){this.refresh(1)},pageGo:function(a){var b=this.pages.index(a);this.index!=b&&!this.locking&&this.refresh(0,b)},navGo:function(a){var c=parseInt(b(a).attr("index"));this.index!=c&&!this.locking&&this.refresh(0,c)},getIndex:function(a){return this.index==0?a==-1?this.index=this.size-1:a==+1&&this.index++:this.index==this.size-1?a==+1?this.index=0:a==-1&&this.index--:this.index=this.index+a,this.index},refresh:function(a,b){var c;typeof b!="undefined"&&a==0?c=this.index=b:c=this.getIndex(a),this.animate(c),this.changePage(),this.changeNav()},animate:function(a){var b=this;isNaN(a)||this.container.find(this.selector.ads).animate({marginTop:-(this.height*a)},400,function(){b.running=!1})},changePage:function(){var a=this.className.pageSelected;this.container.find(this.selector.pages).removeClass(a).eq(this.index).addClass(a)},changeNav:function(){var a=this,b,c;if(this.navContainer.length>0){var d=this.className.sortSelected;c=this.container.find(this.selector.nav),c.removeClass(d).eq(this.index).addClass(d),page=parseInt((this.index+1)/3),(this.index+1)%3>0&&(page+=1),this.locking=!0,b=this.container.find(this.selector.dl),b.css({width:this.navWidth*c.length}).animate({marginLeft:-(this.navWidth*3*(page-1))},400,function(){a.locking=!1})}},rotate:function(){var a=this;a.timer||(a.timer=setInterval(function(){!a.isHover&&!a.locking&&a.next()},3e3))},focus:function(){var a=this;a.timer||(a.timer=setInterval(function(){!a.isHover&&!a.locking&&a.next()},3e3))},blur:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},c});