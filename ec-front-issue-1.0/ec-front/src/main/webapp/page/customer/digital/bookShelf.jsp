<%@page pageEncoding="UTF-8"%><%@include file="../../snippets/tags.jsp"%>
<%@page import="java.util.Random"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
   response.setHeader("P3P","CP=CAO PSA OUR");
%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>我的数字馆- 我的书架 - 文轩网</title>
<jsp:include page="../../snippets/version2/meta.jsp">
<jsp:param name="type" value="my_acc_order" />
</jsp:include>
</head>
<body>
  <%@include file="../../snippets/version2/header.jsp" %>

<div class="layout">
  <div class="your_path cl">你现在的位置： <span><a href="http://www.winxuan.com/" class="link3">文轩网</a> &gt; 我的数字馆  &gt; 我的书架</span></div>
<jsp:include page="/page/left_menu.jsp">
	<jsp:param name="id" value="5_1" />
</jsp:include>
  <div class="right_box">
    <h3 class="myfav_tit margin10">我的书架</h3>
    <iframe frameborder="0" width="100%" id="bookFrame" height="1200" src="http://www.9yue.com/winxuan/mybookshelf.html?userId=${userId}&token=${token}"></iframe>

  </div>
  <div class="hei10"></div>
</div>
<%@include file="../../snippets/footer.jsp"%>
<script type="text/javascript" src="${serverPrefix}js/customer/messenger.js?${version}"></script>
</body>

</html>
