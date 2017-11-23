using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;

public partial class Sys_api_iKCoder_Sys_Set_AutoBuildSPS : class_WebBase_IKCoderAPI_NUA
{
    protected override void ExtendedAction()
    {
        switchResponseMode(enumResponseMode.text);
        if (Object_CommonData.ConnectToDatabase())
        {
            class_Data_SqlHelper objectSqlHelper = new class_Data_SqlHelper();
            if (objectSqlHelper.ActionAutoCreateSPS(Object_CommonData.Object_SqlConnectionHelper.Get_ActiveConnection(Object_CommonData.dbServer)))
                AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + "execute_buildALLSPS", class_CommonDefined.enumExecutedCode.executed.ToString(), "true", "");
            else
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + "api_buildALLSPS", "false", "");
            Object_CommonData.CloseDBConnection();
        }
        else
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + "api_buildALLSPS", "Can not connect to Data Center.", "");
        }
    }
}