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
	<title>空模板</title>
	<script type="text/javascript">
		var pageMeta = <e:page/>;
	</script>
</head>
<body>
	<t-空模板></t-空模板>
</body>
<script id="turningBoot" src="<%=RES_PATH%>/fe_components/turing-form/turing_loader_v2.js" modules="空模板" res-server="<%=RES_PATH%>" api-path="<%=APP_PATH%>"></script>
</html>