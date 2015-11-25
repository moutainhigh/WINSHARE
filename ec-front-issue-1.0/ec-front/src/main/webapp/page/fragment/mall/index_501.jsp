<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="limit_buy goods_pro" fragment="501">
      <dl class="buy_top">
        <dt>限时抢购</dt>
      </dl>
      
      <c:forEach items="${contentList}" var="content" varStatus="status">
     <c:if test="${content.currentPromotion[1]>0}">
      <dl class="goods_rush" bind="limit" current="${content.currentPromotion[0]}" end="${content.currentPromotion[1]}">
      <dd>
				剩余:<b class="fb red" bind="hour">00</b>小时<b class="fb red"
					bind="min">00</b>分<b class="fb red" bind="sec">00</b>秒
			</dd>
        <dt> <a href="${content.url}" title="${content.sellName}"><img data-lazy="false" class="book_img" src="${content.imageUrl}" alt="${content.sellName}"></a></dt>
        <dd class="goods_tit"><a href="${content.url}" title="${content.sellName}">${content.sellName} <b class="orange">${content.subheading}</b></a></dd>
        <dd><del class="l_gray">定价：￥${content.listPrice}</del><br>
          商城价：<b class="red fb">￥${content.effectivePrice}</b></dd>
      </dl>
      </c:if>
      </c:forEach>
    </div>

<script type="text/javascript" charset="utf-8">
    seajs.use(['jQuery','limit'],function($,Limit){
    	var context=$("div.limit_buy");
    	Limit({context:context});
    	var list=context.find("div.other_pro dd");
    	list.mouseover(function(){list.removeClass("dt");$(this).addClass("dt");});
    });
</script>