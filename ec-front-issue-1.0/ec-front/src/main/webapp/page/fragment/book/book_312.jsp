<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/page/snippets/tags.jsp"%>
<ul class="hotpro_list" fragment="${fragment.id }" content="new_onsale" style="display: none;">
<jsp:include page="../null.jsp"/>
<c:forEach items="${contentList}" var="content" varStatus="status">
	<li>
		<p>
			<a title="<c:out value="${content.name }"/>"    target="_blank"  href="${content.url }"><img src="${content.imageUrl }" alt="<c:out value="${content.name}" /> ">
			</a>
		</p> <strong><a title="<c:out value="${content.name }"/>"   target="_blank"  href="${content.url }"><winxuan-string:substr length="16" content="${content.name}"/></a>
	</strong> <b class="red fb">￥${content.effectivePrice }</b> <del>￥${content.listPrice}</del>
	</li>
</c:forEach>
</ul>