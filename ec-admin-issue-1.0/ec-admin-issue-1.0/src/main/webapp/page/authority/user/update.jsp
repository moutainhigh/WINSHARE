<%@page pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.winxuan.com/tag/page" prefix="winxuan"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@include file="../../snippets/tags.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>用户修改密码</title>
	<meta content="text/html; charset=utf-8" http-equiv="content-type"/>
	<%@include file="../../snippets/meta.jsp"%>
	<link type="text/css"
	href="${pageContext.request.contextPath}/css/authority/authority.css"
	rel="stylesheet" />
</head>
<body>
	<div class="frame" >
		<!-- 引入top部分 -->
		<%@include file="../../snippets/frame-top.jsp"%>
		<!-- 引入left菜单列表部分 -->
		<%@include file="../../snippets/frame-left-system.jsp"%>
		<div class="frame-main">
			<div class="frame-main-inner" id="content">
			<div>
		 		 <form:form action="/user/update" method="post" commandName="modifyUserForm">
			        <input name="_method" type="hidden" value="post"/>
				    <table class="view" width="100%" border="0" cellspacing="0">
				      <tr>
				        <td class="txt_right" style="width: 255px;">旧密码：</td>
				        <td>
				            <form:input path="oldPassword" class="input_txt" value="${modifyUserForm.oldPassword}" autocomplete="off"/>
				            <form:errors path="oldPassword" cssStyle="color: red;" />
				        </td>
				      </tr>
				      <tr>
				        <td class="txt_right" style="width: 255px;">新密码：</td>
				        <td>
				            <form:password path="newPassword" class="input_txt" value="${modifyUserForm.newPassword}" autocomplete="off"/>
				            <form:errors path="newPassword" cssStyle="color: red;" />
						</td>
				      </tr>
				      <tr>
				        <td class="txt_right" style="width: 255px;">确认新密码：</td>
				        <td >
				            <form:password path="confirmNewPassword" class="input_txt" value="${modifyUserForm.confirmNewPassword}" autocomplete="off"/>
				            <form:errors path="confirmNewPassword" cssStyle="color: red;" />
						</td>
				      </tr>
				      <tr>
				        <td>&nbsp;</td>
				        <td>
				        <button class="save" name="save_but" id="save_but" type="submit">保		存</button>
				        <button class="cancel" name="cancel" type="reset">重		置</button>
				        </td>
				      </tr>
				    </table>
			    </form:form>
			</div>
 		</div>
 		</div>
 	</div>
 	<%@include file="../../snippets/scripts.jsp"%>
</body>
</html>