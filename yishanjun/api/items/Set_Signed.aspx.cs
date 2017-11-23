using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Data;
using System.Xml;

public partial class api_items_Set_Signed : class_WebBase_IKCoderAPI_UA
{
    protected override void ExtendedAction()
    {
        Object_CommonData.PrepareDataOperation();
        class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_ITEMS);
        activeSPEntry.ClearAllParamsValues();
        activeSPEntry.ModifyParameterValue("@status", "1");
        DataTable activeDataTable = Object_CommonData.Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
        if(activeDataTable!=null && activeDataTable.Rows.Count>=1)
        {
            string data_id = string.Empty;
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "id", out data_id);
            XmlDocument tmpDoc = new XmlDocument();
            string tmpB64StrDoc = string.Empty;
            class_Data_SqlDataHelper.GetColumnData(activeDataTable.Rows[0], "doc", out tmpB64StrDoc);
            tmpDoc.LoadXml(class_CommonUtil.Decoder_Base64(tmpB64StrDoc));
            XmlNode gradeNode = tmpDoc.SelectSingleNode("/root/grade[@value='" + Session["logined_grade"].ToString() + "']");
            if(gradeNode!=null)
            {
                XmlNode classNode = gradeNode.SelectSingleNode("class[@value='" + Session["logined_class"].ToString() + "']");
                if(classNode!=null)
                {
                    XmlNode itemNode = classNode.SelectSingleNode("item[@symbol='" + logined_user_name + "' and signed='1']");
                    if(itemNode==null)
                    {
                        itemNode = class_XmlHelper.CreateNode(tmpDoc, "item", "");
                        class_XmlHelper.SetAttribute(itemNode, "symbol", logined_user_name);
                        class_XmlHelper.SetAttribute(itemNode, "signed", "1");
                        classNode.AppendChild(itemNode);
                    }
                    else
                    {
                        class_XmlHelper.SetAttribute(itemNode, "signed", "1");
                    }
                    activeSPEntry.ClearAllParamsValues();
                    activeSPEntry.ModifyParameterValue("@id", data_id);
                    activeSPEntry.ModifyParameterValue("@doc", class_CommonUtil.Encoder_Base64(tmpDoc.OuterXml));
                    Object_CommonData.Object_SqlHelper.ExecuteUpdateSP(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
                    AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), Object_LabelController.GetString("message", "SC_Param_Accepted"), "");
                }
            }
            else
            {
                AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, "Err:Data error.", "");
            }
        }
        else
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName, "Err:Data error.", "");
        }
    }
}