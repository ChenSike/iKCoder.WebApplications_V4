using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Xml;
using System.Data;

public partial class api_users_Set_Login : class_WebBase_IKCoderAPI_NUA
{
    protected override void ExtendedAction()
    {
        switchResponseMode(enumResponseMode.text);
        string symbol = "";
        string password = "";
        symbol = GetQuerystringParam("symbol");
        password = GetQuerystringParam("password");
        Session.Clear();
        XmlNode codeNameNode = REQUESTDOCUMENT.SelectSingleNode("/root/codename");
        XmlNode codeValueNode = REQUESTDOCUMENT.SelectSingleNode("/root/codevalue");
        if (string.IsNullOrEmpty(symbol))
        {
            XmlNode symbolNode = REQUESTDOCUMENT.SelectSingleNode("/root/symbol");
            XmlNode passwordNode = REQUESTDOCUMENT.SelectSingleNode("/root/password");
            symbol = class_XmlHelper.GetNodeValue(symbolNode);
            password = class_XmlHelper.GetNodeValue(passwordNode);
        }
        if (string.IsNullOrEmpty(symbol))
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Sign_Symbol"), "");
            return;
        }
        if (string.IsNullOrEmpty(password))
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Sign_Password"), "");
            return;
        }
        Object_CommonData.PrepareDataOperation();
        class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_USERS);
        activeSPEntry.ClearAllParamsValues();
        activeSPEntry.ModifyParameterValue("@symbol", symbol);
        activeSPEntry.ModifyParameterValue("@pwd", password);
        DataTable activeDataTable = Object_CommonData.Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
        bool isLogined = false;
        string user_id = string.Empty;
        string user_grade = string.Empty;
        string user_class = string.Empty;
        if (activeDataTable != null && activeDataTable.Rows.Count > 0)
        {
            isLogined = true;
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "id", out user_id);
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "grade", out user_grade);
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "class", out user_class);
        }
        if (isLogined)
        {
            Session["logined_user_name"] = symbol;
            Session["logined_user_id"] = user_id;
            Session["logined_marked"] = "1";
            Session["logined_grade"] = user_grade;
            Session["logined_class"] = user_class;
            Session.Timeout = Session_TimeOutMinutes;
            AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "true","");
        }
        else
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "ERR_Param_Sign_UnSigned"), "");
        }
    }
}