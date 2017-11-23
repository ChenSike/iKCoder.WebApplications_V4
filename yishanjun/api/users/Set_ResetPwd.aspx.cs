using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Data;

public partial class api_users_Set_ResetPwd : class_WebBase_IKCoderAPI_NUA
{
    protected override void ExtendedAction()
    {
        Object_CommonData.PrepareDataOperation();
        string symbol = GetQuerystringParam("symbol");
        string pid = GetQuerystringParam("pid");
        string pwd = GetQuerystringParam("newpwd");
        class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_USERS);
        activeSPEntry.ClearAllParamsValues();
        activeSPEntry.ModifyParameterValue("@symbol", symbol);
        activeSPEntry.ModifyParameterValue("@pid", pid);
        DataTable activeDataTable = Object_CommonData.Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
        if (activeDataTable != null && activeDataTable.Rows.Count > 0)
        {
            string userid = string.Empty;
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "id", out userid);
            activeSPEntry.ClearAllParamsValues();
            activeSPEntry.ModifyParameterValue("@id", userid);
            activeSPEntry.ModifyParameterValue("@pwd", pwd);
            Object_CommonData.Object_SqlHelper.ExecuteUpdateSP(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
            AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "true", "");
        }
        else
        {
            AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), Object_LabelController.GetString("message", "Empty_Account"), "");
        }
    }
}