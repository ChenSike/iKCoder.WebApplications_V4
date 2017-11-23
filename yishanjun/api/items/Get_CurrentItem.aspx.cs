using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Xml;
using System.Data;

public partial class api_items_Get_CurrentItem : class_WebBase_IKCoderAPI_UA
{
    protected override void ExtendedAction()
    {
        switchResponseMode(enumResponseMode.text);
        Object_CommonData.PrepareDataOperation();
        class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_ITEMS);
        activeSPEntry.ClearAllParamsValues();
        activeSPEntry.ModifyParameterValue("@status", "1");
        DataTable activeDataTable = Object_CommonData.Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
        XmlDocument result = new XmlDocument();
        result.LoadXml("<root></root>");
        if(activeDataTable!=null && activeDataTable.Rows.Count>0)
        {
            DataRow activeDataRow = activeDataTable.Rows[0];
            string data_id = string.Empty;
            string data_title = string.Empty;
            string data_date = string.Empty;
            XmlDocument data_doc = new XmlDocument();
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "id", out data_id);
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "title", out data_title);
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "date", out data_date);
            string tmp_b64_doc = string.Empty;
            string tmp_doc = string.Empty;
            class_Data_SqlDataHelper.GetArrByteColumnDataToString(activeDataTable.Rows[0], "doc", out tmp_b64_doc);
            tmp_doc = class_CommonUtil.Decoder_Base64(tmp_b64_doc);
            data_doc.LoadXml(tmp_doc);
            string grade = Session["logined_grade"].ToString();
            string classLevel = Session["logined_class"].ToString();
            string name = Session["logined_user_name"].ToString();
            string id = Session["logined_user_id"].ToString();
            XmlNode gradeNode = data_doc.SelectSingleNode("/root/grade[@value='" + grade + "']");
            if (gradeNode != null)
            {
                XmlNode classNode = gradeNode.SelectSingleNode("class[@value='" + classLevel + "']");
                if (classNode != null)
                {
                    XmlNode itemNode = classNode.SelectSingleNode("item[@symbol='" + name + "' and signed='1']");
                    if(itemNode!=null)
                    {
                        AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "ERR_Msg_Signed"), "");
                    }
                    else
                    {
                        Dictionary<string, string> attrs = new Dictionary<string, string>();
                        attrs.Add("title", data_title);
                        attrs.Add("id", data_id);
                        attrs.Add("date", data_date);
                        AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), attrs);
                    }
                }
                else
                {
                    AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "ERR_NO_CLASSDATA"), "");
                }
            }
            else
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "ERR_NO_GRADEDATA"), "");
            }
        }
        else
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, Object_LabelController.GetString("message", "ERR_NO_DATA"), "");
        }
    }
}