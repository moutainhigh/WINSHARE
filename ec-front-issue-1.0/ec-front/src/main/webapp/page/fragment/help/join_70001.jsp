<%@page pageEncoding="UTF-8"%>
<%@include file="../../snippets/tags.jsp"%>
<!DOCTYPE>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>文轩网_加入文轩_社会招聘</title>
		<jsp:include page="/page/snippets/version2/meta.jsp"><jsp:param value="company" name="type"/></jsp:include>
	</head>
	<body>
		<jsp:include page="/page/snippets/version2/header.jsp"></jsp:include>
			<div class="layout">
				<div class="your_path cl">你现在的位置： <span><a class="link4" title="文轩网" href="http://www.winxuan.com">文轩网</a> > 公司信息 > 加入文轩 > 社会招聘 > 销售中心</span></div>
				    <div class="left_box">
				        <div class="about_us">
				            <h2>公司信息</h2>
				        <ul class="about_menu">
				                <li><a href="http://www.winxuan.com/company/about_us.html">关于文轩</a></li>
				                <li><a href="http://www.winxuan.com/company/history.html">大事记</a></li>
				                <li><a href="http://www.winxuan.com/company/awards.html">文轩荣誉</a></li>
				                <li><a href="http://www.winxuan.com/company/news.html">文轩动态</a></li>
				                <li><a href="http://www.winxuan.com/company/contact_us.html">联系文轩</a></li>
				                <li><a href="http://www.winxuan.com/company/partner.html">合作伙伴</a></li>
				                <li class="cur_info"><a href="http://www.winxuan.com/company/job.html">加入文轩</a>
				                	<dl class="join" id="resume_model"><dt class="cur_red"><a href="http://www.winxuan.com/company/society_join.html">社会招聘</a></dt><dt class="school"><a href="http://www.winxuan.com/company/school_join.html">校园招聘</a></dt></dl>				                					                	
				                </li>
				                <li><a href="http://union.xinhuabookstore.com/Customer/ClientMain.html">联盟合作</a></li>
				                <li><a href="http://api.xinhuabookstore.com/">文轩API</a></li>
				            </ul>
				            <p class="margin_t20 txt_center"><a href="mailto:ask@winxuan.com"><img src="http://static.winxuancdn.com/images/ads/wenxuan-call.jpg" /></a></p>
				            <p class="hei10"> </p>
				        </div>
				    </div>
				    
					<cache:fragmentPageCache idleSeconds="86400" key="FRAGMENT_${fragment.id}">
					<div class="right_box margin10" fragment="${fragment.id}" cachekey="${cacheKey}">
					   	<c:forEach items="${contentList}" var="content" varStatus="status">
							${content.content }
						</c:forEach>
					</div>
					</cache:fragmentPageCache>
					
					<div class="hei10"> </div>
		</div>
		
		<jsp:include page="/page/snippets/version2/footer.jsp"></jsp:include>
	</body>
</html>