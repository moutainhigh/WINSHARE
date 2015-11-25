<%@page pageEncoding="UTF-8"%><%@include file="../../snippets/tags.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Pragma" content="no-cache"/>
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<title>确认您的订单</title>
<jsp:include page="/page/snippets/version2/meta.jsp">
	<jsp:param value="v1" name="type"/>
</jsp:include>
<style>
	div.anonym{padding:10px 40px;}
	div.anonym p{padding-left:100px;}
	div.anonym p.log-tip{color:#707070;}
	div.anonym p.reg-tip{color:#FF0000;visibility:hidden;}
	div.anonym input.email{width:300px;font-weight:bold;}
	.info_bg p{margin:4px 0;}
	.addressForm input{border:1px solid #808990;padding:4px;}
	.addressForm select{border:1px solid #808990;padding:2px;margin:0;}
	.addressForm p{height:30px;line-height:30px;clear:both;}
	.addressForm label{display:block;float:left;width:80px;text-align:right;margin:0 10px;}
	.addressForm ul{height:30px;clear:both;}
	.addressForm ul li{float:left;}
	.addressForm li span{margin:0 -20px 0 10px;color:#707070;}
	.addressForm .loading{display:none;}
	input.address{width:580px;}
	p.reg-tip{margin:0 14px;}
	input.wider_input{width:580px;}
	/*input.consigneeName,input.address,input.zipCode,input.mobile{width:400px;}
	input.phone{width:338px;}input.areaNo{width:40px;}*/
	div.btn-wrap{padding:20px 0 0 100px;}
	.addressForm label.error{display:inline;float:none;width:auto;color:#FF0000;}
	.form-message{display:none}#anonym-info{display:none;}
	div.inform{position:absolute;top:50%;left:50%;height:60px;width:300px;margin:-30px -150px;border:1px solid #ccc;background:#f0f0f0;display:none;padding:1px;z-index:1000000;}
	div.inform p{line-height:58px;font-weight:bold;background:#f7f7f7;text-align:center;}
</style>
</head>
<body id="order-confirm" seller="${seller.id}">
<div class="header other_header">
	<p class="service-tel">客服热线：400-702-0808</p>
    <div class="logo_box"><a title="文轩网,新华书店" href="http://www.winxuan.com/"><img src="${serverPrefix}images/logo.gif" alt="文轩网" width="188" height="46"></a></div>
</div>
<div class="layout">
    <div class="progress atf-progress" style="display:none;"><span class="step3"></span></div>
    <div class="progress"><span class="step3"></span></div>
    <p class="promotions">请填写如下信息，然后提交订单！</p>
    <div class="order_border">
    	<div class="new" step="consignee">
	    <h4 class="info_title">收货人信息</h4>
	    <div class="info_bg" id="anonym-info">
	    		<div class="form-info"><p class="new"></p><p class="reg-tip">(您的默认登录帐号：<b class="red">{email}</b>，您初始化的默认密码：<b class="red">{password}</b>,您可以使用此帐号和密码登录文轩网查询相关订单信息)</p></div>
	    </div>
	    <form action="${contextPath}/customer/address" method="POST" class="addressForm">
	    	<input type="hidden" name="id" value=""/>
	    	<div class="anonym">
	    		<p class="log-tip" style="display:none">(已有帐户请点<a href="http://passport.winxuan.com/signin" class="pop">登录</a>，登录后将自动读取已有地址记录)</p>
   				<div><label>邮箱：</label><input type="text" value="" name="email" class="required email" minlength="6" maxlength="100" title="请按Email格式输入,6-60个字符"/></div>
	    	</div>
	    	<div class="info_bg">
    			<fieldset>
    				<div>
    					<p><label>收货人姓名：</label><input name="consignee" type="text" class="consigneeName"/></p>
    					<p><label>所在地区：</label><select areaLevel ="country" name="country.id"><option value="-1">请选择国家</option></select>
				            <select areaLevel ="province" name="province.id"><option value="-1">请选择省份</option></select>
				            <select areaLevel="city" name="city.id"><option value="-1">请选择城市</option></select>
				            <select areaLevel="district" name="district.id" class="district"><option value="-1">请选择区县</option></select>
				            <select areaLevel="town" name="town.id"><option value="-1">请选择乡镇</option></select>
				        </p>
				        <p><label>详细地址：</label><input type="text" name="address" class="wider_input required" minlength="4" maxlength="200" title="街道地址由4-200字符组成"/></p>
				        <p><label>邮政编码：</label><input class="zipCode" name="zipCode" type="text"></p>
						<p><label>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机：</label><input class="mobile" name="mobile" type="text"> <b class="gray">&nbsp;&nbsp;或者&nbsp;&nbsp;</b> <span>固定电话：</span><input class="phone" name="phone" type="text" minlength="7" maxlength="20"></p>	
						<p class="form-message"></p>			        	
    				</div>
    				<div class="btn-wrap"><button class="confirm_but" type="submit">确认收货人信息</button><span class="loading">正在保存请稍候...</span></div>
    			</fieldset>
	    	</div>
	    	</form>
        </div>
        <div class="step" step="delivery">
		<h4 class="info_title">送货方式</h4>
      		<div class="info_bg">
	      		<div class="form-info">
		         	<p></p>			
		        </div>
		        <div class="deliveryTable"></div>
			</div>
        </div>
        <div class="step" step="payment">
        	<h4 class="info_title">付款方式</h4>
	        <div class="info_bg">
		        <div class="form-info">
			         <p></p>			
		        </div>
	        	<div class="paylist">
	        		<ul class="fill_out">
		        		<li><input name="paymentType" type="radio" value="22" checked="checked"> <b class="fb">网上支付</b> <b class="gray">您需要先用有一张已经开通网上支付功能的银行卡</b>
	           				<div class="banks">
	           					<p>文轩网支持以下银行机构在线支付，订单提交后即可选择：</p>
	           					<p><img  src="${serverPrefix}images/bank_list.gif" alt="支持的银行"/></p>
	           					<p>文轩网支持以下平台机构在线支付，订单提交后即可选择：</p>
	           					<p><img  src="${serverPrefix}images/bank_list2.gif" alt="支持的机构"/></p>
	           					<%--
	           					<p>文轩网支持以下国际信用卡在线支付，订单提交后即可选择：</p>
	           					<p><img  src="${serverPrefix}images/bank_list3.gif" alt="支持的国际信用卡"/></p>
	           					--%>
	           				</div>
	           			</li>
	         		</ul>
	        	</div>
	        </div>
        </div>
        <div class="step" step="goods-list">
        	<div class="tableList">
        		<h4 class="info_title">商品清单</h4>
			    <div class="info_bg">
			        <p class="shippers"><a class="fr" href="${contextPath}/shoppingcart">[返回修改购物车]</a>发货商：${shop.shopName}<span class="promotion"></span></p>
			        <table class="order_goods" width="100%" border="0" cellspacing="0" cellpadding="0">
			        	<tr><th align="left">商品名称</th><th>现价</th><th>优惠</th><th>数量</th><th>小计</th></tr>
					    <c:forEach var="item" items="${shoppingcartlist}">
					    	<tr>
					    	<td><p class="txt_left">${item.productSale.sellName}
					    		<c:if test="${not empty item.gifts}">
									<span class="gift">赠:		
									<c:forEach items="${item.gifts}" var="gift">
										<a href="http://www.winxuan.com/product/${gift.giftId}">${gift.giftName}</a>(x ${gift.sendNum})
									</c:forEach>
									</span>
								</c:if>
					    	</p></td>
					    	<td>${item.salePrice}</td>
					    	<td>减${item.savePrice}</td>
					    	<td>${item.quantity}</td>
					    	<td>${item.totalSalePrice}</td>
					    	</tr>
					    </c:forEach>
					</table>
				    <ul class="amount_info">
				      <li bind="salePrice">商品金额总计:￥0.00</li>
				      <li bind="deliveryFee"><span class="freight">运费:￥0.00</span></li>
				      <li bind="presentCardMoney" style="display:none;">礼品卡：￥0.00</li>
				      <li bind="presentMoney" style="display:none;">礼券：￥0.00</li>
				      <li bind="accountMoney" style="display:none;">暂存款：￥0.00</li>
				      <li class="hei10"></li>
				      <li class="black">您共需支付:  <b class="red amount_no">￥31.80</b></li>
				      <li><input class="checkout_but" id="submitOrder" type="button" value="提交订单"></li>
				      <li class="invoice" needValue="0" id="needInvoice">
				      	<p id="askFor" class="black fb cursor_pointer"><input type="checkbox" name="invoiceCheckbox"/>索取发票</p><p class="black" id="invoiceForm">发票抬头：<input name="type" type="radio" id="geren" value="3460" checked="checked"/> <label for="geren">个人</label> <input name="type" type="radio" id="danwei" value="3461"/> <label for="danwei">单位</label> <input class="company_name" name="title" type="text" value="请填写单位名称" default="请填写单位名称,长度在2-40个字符之间" min="2" maxlength="40" style="display:none;"/></p>
				      	<c:if test="${(not empty customer.channel)&&(customer.channel.id==6)}">
			      		<p id="otherInvoiceInfo" style="display:none;">
							<label for="invoiceValue">开票金额：</label>
				      		<input class="invoice_money" name="invoiceValue" type="text" default="${submitOrderForm.invoiceValue}" value="${submitOrderForm.invoiceValue}" min="2" maxlength="20" title="开票金额界于0和商品总码洋之间，不能超过商品总码洋（￥${submitOrderForm.invoiceValue}）"/>
				      	</p>
				      	</c:if>
				      	<p>注：商家可以开具的发票内容请根据商家经营范围选择<br/>（礼券、礼品卡不开具发票）</p>
				      </li>
				    </ul>
		    	</div>
        	</div>
        </div>
    </div>  
</div>
<div style="display:none;">
	<form action="${contextPath}/customer/checkout" method="POST" name="order" target="_self">
		<input type="hidden" name="shopId" value="${shop.id}"/>
		<input type="hidden" name="supplyTypeId" value="${supplyType.id}"/>
		<input type="hidden" name="areaId" value=""/>
		<input type="hidden" name="addressId" value=""/>
		<input type="hidden" name="deliveryTypeId" value=""/>
		<input type="hidden" name="deliveryoption" value=""/>
		<input type="hidden" name="paymentId" value=""/>
		<input type="hidden" name="useAccount" value="false"/>
		<input type="hidden" name="usePresent" value="false"/>
		<input type="hidden" name="usePresentCard" value="false"/>
		<input type="hidden" name="needInvoice" value="0"/>
		<input type="hidden" name="invoiceTitle" value=""/>
		<input type="hidden" name="invoiceType" value=""/>
		<input type="hidden" name="payPassword" value=""/>
		<c:if test="${(not empty customer.channel)&&(customer.channel.id==6)}">
		<input type="hidden" name="invoiceValue" value="${submitOrderForm.invoiceValue}"/>
		</c:if>
	</form>
</div>
<div class="inform">
	<p>正在加载地址信息，请稍候...</p>
</div>
<%@include file="../../snippets/footer.jsp" %>
<script src="${serverPrefix}js/checkout_anonym.js?${version}"></script>
</body>
</html>
