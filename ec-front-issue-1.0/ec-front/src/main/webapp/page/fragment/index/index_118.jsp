<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.winxuan.com/tag/winxuan-string" prefix="winxuan"%>
<ul class="hot_books" fragment="${fragment.id }"  content="hot">
<jsp:include page="../null.jsp"/>
		<c:forEach items="${contentList}" var="content" varStatus="status">
            <li>
                <h3><a target="_blank" href="http://list.winxuan.com/${content.product.category.id }" title="${content.product.category.name }">${content.product.category.name}</a></h3>
                <div class="have_pro">
                    <p><c:if test="${content.hasPromotion}"><img src="images/ads/pro_icon1.png"></c:if></p>				
                    <a title="<c:out value="${content.name} ${content.subheading }" /> "   target="_blank"  href="${content.url}"><img class="book_img" alt="<c:out value="${content.name}" /> " src="${content.imageUrl}" ></a></div>
                <h4><a title="<c:out value="${content.name} ${content.subheading }" /> "   target="_blank"  href="${content.url}"><winxuan:substr length="16" content="${content.name}"></winxuan:substr> </a></h4>
                <b class="red fb">￥${content.effectivePrice}</b> <del>￥${content.product.listPrice}</del> </li>
        </c:forEach>
</ul>
