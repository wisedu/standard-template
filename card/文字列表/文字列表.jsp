<%@page import="com.wisedu.emap.mvc.CurrentInfo"%>
<%@page import="com.wisedu.emap.base.core.EmapContext"%>
<%@ page import="java.util.*"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="/WEB-INF/tags/emap.tld" prefix="e"%>
<%
String RES_PATH = EmapContext.getStaticResourceRoot();
String APP_PATH = request.getContextPath() + "/sys/" + CurrentInfo.getInfo().getAppName();
%>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
	<meta charset="UTF-8">
	<meta name="renderer" content="webkit">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>文字列表_CN</title>
	<script type="text/javascript">
		var pageMeta = <e:page/>;
	</script>
</head>
<!-- 美化滚动条nicescroll需要尽早隐藏掉真实的滚动条 -->
<body style="overflow: hidden">
	<文字列表></文字列表>
</body>
<script id="turingBoot" src="<%=RES_PATH%>/fe_components/turing-form/turing_loader_v2.js" card-modules="文字列表" res-server="<%=RES_PATH%>" api-path="<%=APP_PATH%>/cards/" cache-token="" theme="default" after-js=""></script>
</html>