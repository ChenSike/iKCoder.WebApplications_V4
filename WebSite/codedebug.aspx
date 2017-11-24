<%@ Page Language="C#" AutoEventWireup="false" %>

<%@ Import Namespace="System" %>
<%@ Import Namespace="System.Collections.Generic" %>
<%@ Import Namespace="System.Linq" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="System.Web.UI" %>
<%@ Import Namespace="System.Web.UI.WebControls" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link href="image/logotop.ico" rel="shortcut icon" type="image/x-icon" />
    <link rel="stylesheet" href="style/jquery-ui.min.css">
    <script src="javascript/common/jquery-3.2.1.min.js"></script>
    <script src="javascript/common/jquery-ui.min.js"></script>
</head>
<body>
    <script type="text/javascript">
        <%
        Response.Write(Request.Form["field_Code_Debug"].ToString());
        %>
    </script>
</body>
</html>
