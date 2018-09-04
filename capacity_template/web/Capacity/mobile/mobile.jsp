<%@ page language="java" contentType="text/html; charset=UTF-8" session="false"%>
<%@ page import="com.wisedu.emap.mvc.CurrentInfo"%>
<%@ taglib prefix="e" uri="/WEB-INF/etags/emap.tld"%>
<!DOCTYPE html>
<html lang="zh-CN">
<% 
String RES_HOST = com.wisedu.emap.base.core.EmapContext.getStaticResourceRoot();
String APP_PATH = request.getContextPath() + "/sys/" + CurrentInfo.getInfo().getAppName();
%>
<head>
<title>首页</title>
<meta charset="UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
<link rel="stylesheet" href="./mobile/style.css">

<script type="text/javascript">
	var contextPath = "<%=request.getContextPath()%>";
	window.apiPath = "<%= APP_PATH %>/Capacity/mobile/";
	window.TG_CONFIG = {
	    resServer: "<%=RES_HOST%>",
		router : {
		},
		components : [],
		cacheToken : "",
		header : {
			//getConfig: contextPath + "/getPermission.do"
		}
	}
</script>

</head>

<body>
	<div id="page">
		<router-view></router-view>
	</div>
</body>
<script type="text/javascript" src="<%=RES_HOST%>/fe_components/turing-form/wisedu-vue.mobile.min.js"></script>
<script id="turingBoot" src="<%=RES_HOST%>/fe_components/turing-form/turing_loader_Capacity.js"></script>
</html>