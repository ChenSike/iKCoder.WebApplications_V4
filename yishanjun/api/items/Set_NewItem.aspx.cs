using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using iKCoder_Platform_SDK_Kit;
using System.Xml;
using System.Data;

public partial class api_items_Set_NewItem : class_WebBase_IKCoderAPI_NUA
{
    protected override void ExtendedAction()
    {
        string key = GetQuerystringParam("key");
        if(key=="01070624")
        {
            string title = GetQuerystringParam("title");
            XmlDocument doc = new XmlDocument();
            doc.LoadXml("<root></root>");
            XmlNode rootNode = doc.SelectSingleNode("/root");
            Object_CommonData.PrepareDataOperation();
            class_Data_SqlSPEntry activeSPEntry = Object_CommonData.GetActiveSP(Object_CommonData.dbServer, class_SPSMap.SP_OPERATION_ITEMS);
            activeSPEntry.ClearAllParamsValues();
            activeSPEntry.ModifyParameterValue("@status", "1");
            DataTable activeDataTable = Object_CommonData.Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
            List<string> lst_ids = new List<string>();
            foreach(DataRow activeRow in activeDataTable.Rows)
            {
                string data_id = string.Empty;
                class_Data_SqlDataHelper.GetColumnData(activeRow, "id", out data_id);
                if (!lst_ids.Contains(data_id))
                    lst_ids.Add(data_id);
            }
            activeSPEntry.ClearAllParamsValues();
            activeSPEntry.ModifyParameterValue("@status", "0");
            foreach(string tmpid in lst_ids)
            {
                activeSPEntry.ModifyParameterValue("@id", tmpid);
                Object_CommonData.Object_SqlHelper.ExecuteUpdateSP(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
            }
            for(int i=1;i<=6;i++)
            {
                XmlNode newGradeNode = class_XmlHelper.CreateNode(doc, "grade", "");
                class_XmlHelper.SetAttribute(newGradeNode, "value", i.ToString());
                rootNode.AppendChild(newGradeNode);
                for (int c=1;c<=6;c++)
                {
                    XmlNode newClassNode = class_XmlHelper.CreateNode(doc, "class", "");
                    class_XmlHelper.SetAttribute(newClassNode, "value", c.ToString());
                    newGradeNode.AppendChild(newClassNode);
                }                
            }
            activeSPEntry.ClearAllParamsValues();
            activeSPEntry.ModifyParameterValue("@title", title);
            activeSPEntry.ModifyParameterValue("@date", DateTime.Now.ToString("yyyy-MM-dd"));
            activeSPEntry.ModifyParameterValue("@doc", class_CommonUtil.Encoder_Base64(doc.OuterXml));
            activeSPEntry.ModifyParameterValue("@status", "1");
            Object_CommonData.Object_SqlHelper.ExecuteInsertSP(activeSPEntry, Object_CommonData.Object_SqlConnectionHelper, Object_CommonData.dbServer);
            AddResponseMessageToResponseDOC(class_CommonDefined._Executed_Api + this.GetType().FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "Ture->New Items Inserted", "");
        }
        else
        {
            AddErrMessageToResponseDOC(class_CommonDefined._Faild_Execute_Api + this.GetType().FullName,"Err Key.No Access.", "");

        }
    }
}