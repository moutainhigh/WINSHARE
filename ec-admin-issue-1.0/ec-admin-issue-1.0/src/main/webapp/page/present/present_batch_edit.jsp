<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.winxuan.com/tag/token"  prefix="token"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<html>
<head>
<title>修改礼券批次</title>

<style type="text/css">
.selectStyle{
	width: 100;
}
.buttonstyle {
	width: 85px;
	height: 25px;
  }
.textareaStyle{width: 350px; height: 60px; padding:0px;}

#add-body {
	margin-top: 30px;
	margin-left:30px;
	width: 620px;
	height: 450px;
	border:2px solid #DFDFDF;
	
 }
label.error {
	padding:0.1em;
}
#presentBatchForm input.error {
	padding:0px;
	border: 2px solid red;
}
</style>
<%@include file="../snippets/meta.jsp"%>
</head>
<body>
<div class="frame">
		<!-- 引入top部分 -->
		<%@include file="../snippets/frame-top.jsp"%>
		<!-- 引入left菜单列表部分 -->
		<%@include file="../snippets/frame-left-website.jsp"%>
		<div class="frame-main">
			<!-- 核心内容部分div -->
			<div class="frame-main-inner" id="content">
	 
					<div id="add-body">
					<h4>修改礼券批次</h4>
						<form:form commandName="presentBatchForm"
							action="${contextPath}/presentbatch/createorupdate" method="post">
							 <token:token></token:token>
							<table class="list-table1">
							<tr>
							<td align="right"><input type="hidden" name="flag" value="edit"/>礼券批次：</td>
							<td align="left">${presentBatchForm.id}</td>
							<td align="right"  style="padding: 0 0 0 90;">礼券面额<span style="color: red;">*</span>：</td>
							<td align="left"><form:input path="value" maxlength="15" size="15" /><span style="color: red;"><form:errors path="value"></form:errors></span></td>
							</tr>	 
							<tr>
							<td align="right">生成数量<span style="color: red;">*</span>：</td>
							<td align="left"><form:input path="num" maxlength="15" size="15" /><span style="color: red;"><form:errors path="num"></form:errors></span></td>
							</tr>
							<tr>
							<td align="right">是否通用<span style="color: red;">*</span>：</td>
							<td align="left" >
							<form:select path="isGeneral" cssClass="selectStyle"> 
							<form:option value="true" label="是"></form:option>
							<form:option value="false" label="否"></form:option>
							</form:select>
						    </td>
						    <td align="right"  style="padding: 0 0 0 90;">通用码：</td>
							<td align="left">${presentBatchForm.generalCode}</td>
							</tr>	 
							<tr>
							<td align="right">订单额基准金额<span style="color: red;">*</span>：</td>
							<td align="left" colspan="3"><form:input path="orderBaseAmount" maxlength="15" size="15" /><span style="color: red;"><form:errors path="orderBaseAmount"></form:errors></span></td>
							</tr>
							<tr>
							<td align="right">针对商品类别<span style="color: red;">*</span>：</td>
							<td align="left" colspan="3">
                            <form:checkbox value="B" path="productType"/>图书  <form:checkbox value="V" path="productType"/>影像 <form:checkbox value="G" path="productType"/>百货
							<label for="productType" generated="true" class="error" style="display: none;"></label> <span style="color: red;"><form:errors path="productType"></form:errors></span></td>
							</tr>
							<tr> 
							<td align="right">礼券生效开始日期<span style="color: red;">*</span>：</td>
							<td align="left">
							<form:input path="presentStartDateString" readonly="true" size="15" bind="datepicker" /><span style="color: red;"><form:errors path="presentStartDateString"></form:errors></span>
  							 </td>
							</tr>
							<tr>
							<td align="right">礼券有效截止期<span style="color: red;">*</span>：</td>
							<td align="left"><form:input path="presentEndDateString"  size="15"  bind="datepicker" />  </td>
							<td align="right">礼券有效期<span style="color: red;">*</span>：</td>
							<td align="left"><form:input path="presentEffectiveDay" maxlength="15" size="15"/>日<label for="presentEffectiveDay" generated="true" class="error" id="date" style="display: none;"></label></td>
							</tr>
							<tr>
							<td align="right">单用户最多申领数量<span style="color: red;">*</span>：</td>
							<td align="left" colspan="3">
							<form:input path="maxQuantity" size="15"/><span style="color: red;"><form:errors path="maxQuantity"></form:errors></span>
 							 </td>
							</tr>
							<tr>
							<tr>
							<td></td>
							<td align="left" colspan="3">
                            <form:checkbox value="Y" path="isRebate"/>是否参与联盟  <form:checkbox value="Y" path="isPloy"/>是否参与活动 </td>
							</tr>
							<td align="right">批次标题<span style="color: red;">*</span>：</td>
							<td align="left" colspan="3">
		               		<form:input path="batchTitle"  size="57"/><span style="color: red;"><form:errors path="batchTitle"></form:errors></span>
  							 </td>
							</tr>
 							<tr>
							<td align="right"><form:hidden path="id"/>批次描述：</td>
							<td align="left" colspan="3"><form:textarea path="description" cssClass="textareaStyle"/> </td>
							</tr>
		     				<tr>
							<td align="center" colspan="4"><input type="submit" id="sbm" class="buttonstyle" value="修改"/>  <input type="reset" class="buttonstyle" value="重置"/> </td>
							</tr>
							</table>	
  						</form:form>
					</div>
					</div>
					</div>
					</div>
	<%@include file="../snippets/scripts.jsp"%>
	<script type="text/javascript"
		src="${contextPath}/js/presentbatch/present_batch_add.js"></script>
    <script type="text/javascript" 
		src="${contextPath}/js/jquery.validate.min.js"></script>
	<script type="text/javascript" 
		src="${contextPath}/js/jquery.validate.defaults.js"></script>
	<script type="text/javascript" 
		src="${contextPath}/js/jquery.validate.methods.min.js"></script>
    <script type="text/javascript"
		src="${contextPath}/js/presentbatch/presentbatch_validate.js"></script>
</body>
</html>