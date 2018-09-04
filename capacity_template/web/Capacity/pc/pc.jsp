<%@ page language="java" contentType="text/html; charset=UTF-8" session="false"%>
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
<link rel="stylesheet" href="<%=RES_HOST%>/fe_components/iview2/styles/iview.css">
<link rel="stylesheet" href="<%=RES_HOST%>/fe_components/turing-form/wisedu-vue.pc.min.css">
<link rel="stylesheet" href="./pc/style.css">

<script type="text/javascript">
    var contextPath = "<%=request.getContextPath()%>";
    window.apiPath = APP_PATH + "/Capacity/pc/";
    window.TG_CONFIG = {
        resServer: "<%=RES_HOST%>",
		router : {
		},
		components : [],
		cacheToken : "",
		header : {
			getConfig: contextPath + "/getPermission.do"
		}
	}
</script>

</head>

<body>
	<div id="page"></div>
</body>
<script src="<%=RES_HOST%>/fe_components/iview2/iview.min.js"></script>
<script type="text/javascript" src="<%=RES_HOST%>/fe_components/turing-form/wisedu-vue.pc.min.js"></script>
<script id="turingBoot" src="<%=RES_HOST%>/fe_components/turing-form/turing_loader_Capacity.js" source></script>
</html>