using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Xml;

public partial class api_users_Set_Reg : class_WebBase_IKCoderAPI_NUA
{
    protected override void ExtendedAction()
    {
        switchResponseMode(enumResponseMode.text);
        if (REQUESTDOCUMENT != null)
        {
            string symbol = string.Empty;
            string pwd = string.Empty;
            string pid = string.Empty;
            string student_name = string.Empty;
            string name = string.Empty;
            string grade = string.Empty;
            string classlevel = string.Empty;
            XmlNode symbolNode = REQUESTDOCUMENT.SelectSingleNode("/root/symbol");
            XmlNode pwdNode = REQUESTDOCUMENT.SelectSingleNode("/root/pwd");
            XmlNode pidNode = REQUESTDOCUMENT.SelectSingleNode("/root/pid");
            XmlNode student_nameNode = REQUESTDOCUMENT.SelectSingleNode("/root/student_name");
            XmlNode nameNode = REQUESTDOCUMENT.SelectSingleNode("/root/name");
            XmlNode gradeNode = REQUESTDOCUMENT.SelectSingleNode("/root/grade");
            XmlNode classlevelNode = REQUESTDOCUMENT.SelectSingleNode("/root/class");
            symbol = class_XmlHelper.GetNodeValue(symbolNode);
            if (string.IsNullOrEmpty(symbol))
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Reg_Symbol"), "");
                return;
            }
            pwd = class_XmlHelper.GetNodeValue(pwdNode);
            if (string.IsNullOrEmpty(pwd))
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Reg_Password"), "");
                return;
            }
            pid = class_XmlHelper.GetNodeValue(pidNode);
            if (string.IsNullOrEmpty(pid))
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Reg_Checkcode"), "");
                return;
            }
            student_name = class_XmlHelper.GetNodeValue(student_nameNode);
            if (string.IsNullOrEmpty(student_name))
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "Empty_Param_Reg_StudentName"), "");
                return;
            }
            name = class_XmlHelper.GetNodeValue(nameNode);
            if (string.IsNullOrEmpty(name))
            {
                return;
            }
            grade = class_XmlHelper.GetNodeValue(gradeNode);
            if (string.IsNullOrEmpty(grade))
            {
                return;
            }
            classlevel = class_XmlHelper.GetNodeValue(classlevelNode);
            if (string.IsNullOrEmpty(classlevel))
            {
                return;
            }
            Object_CommonData.PrepareDataOperation();
            class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_USERS);
            activeSPEntry.ClearAllParamsValues();
                activeSPEntry.ModifyParameterValue("@symbol",symbol);
                activeSPEntry.ModifyParameterValue("@pwd", pwd);
            activeSPEntry.ModifyParameterValue("@pid", pid);
            activeSPEntry.ModifyParameterValue("@student_name", student_name);
            activeSPEntry.ModifyParameterValue("@name", name);
            activeSPEntry.ModifyParameterValue("@grade", grade);
            activeSPEntry.ModifyParameterValue("@class", classlevel);
            Object_CommonData.Object_SqlHelper.ExecuteInsertSP(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
            AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), Object_LabelController.GetString("message", "SC_Param_Reg_Account"), "");

        }
        else
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, "Invalidated Input Document", "", enum_MessageType.Exception);

    }

}