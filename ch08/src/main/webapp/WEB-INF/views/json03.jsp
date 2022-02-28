<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
$(function(){
	$("button").click(function(){
		var vo = {
			name: '둘리',
			password: '1234',
			message: '호이~'
		};
		$.ajax({
			url: "${pageContext.request.contextPath }/api/post01",
			async: true,
			type: 'post', 		// 요청 method
			dataType: 'json',	// 응답 포맷
			contentType: 'application/x-www-form-urlencoded', // default
			data: $.param(vo),
			success:function(response){
				if(response.result !== "success"){
					console.log(response.message);
					return;
				}
				
				// data rendering
				var html = "";
				html += ("<h1>" + response.data.no + "</h1>");
				html += ("<h2>" + response.data.name + "</h2>");
				html += ("<h3>" + response.data.message + "</h3>");
				
				$("#data").append(html);
			}
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test : JSON Format Data : $.ajax 함수 사용하기(post, form data)</h1>

	<button>데이터 가져오기</button>
	<div id="data"></div>
</body>
</html>