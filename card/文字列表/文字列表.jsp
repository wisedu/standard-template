<%@page import="com.wisedu.emap.mvc.CurrentInfo"%>
<%@page import="com.wisedu.emap.base.core.EmapContext"%>
<%@ page import="java.util.*"%>
<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session="false"%>
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
		window.apiPath="<%=APP_PATH%>/cards/";
		window.TG_CONFIG = {
			pageName: "文字列表",
			resServer: "<%=RES_PATH%>",
			niceScroll: {},
			theme: "default",
			inject: false,
			router: {
				'/': '文字列表'
			},
			cacheToken:"",
			afterJS:[]
		}
	</script>
</head>
<!-- 美化滚动条nicescroll需要尽早隐藏掉真实的滚动条 -->
<body style="overflow: hidden">
	<div id="page">
		<router-view></router-view>
	</div>
</body>
<script id="turingBoot" src="<%=RES_PATH%>/fe_components/turing-form/turing_loader_v2.js"></script>
</html>