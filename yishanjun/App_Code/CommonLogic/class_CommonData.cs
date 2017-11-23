using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using iKCoder_Platform_SDK_Kit;
using System.Xml;
using System.Data;

/// <summary>
/// Summary description for Common_Data
/// </summary>
public class class_CommonData
{

    public const string Const_DESKey = "IKCODER2007";

    public const string Const_PlatformDBSymbol = "iKCoderDB";
    public const string Const_OperationQueryString = "AllowPlatformOperation";

    public delegate void addErrMsgFunction(string header, string message, string link, enum_MessageType activeType);
    public delegate void addMsgFunction(string header, string code, string message, string link);

    public string APPLICATION_SYMBOL_SPSLIST = "IKCODER_SPS_LIST";
    public string APPLICATION_SYMBOL_SPSWRTIME = "IKCODER_SPS_WRITETIME";
    public string APPLICATION_SYMBOL_SPSFLUSH = "IKCODER_SPS_FLUSH";

    public bool isExecutedConnectedDB
    {
        set;
        get;
    }

    public string SPS_FlushMark
    {
        set
        {
            _refApplicationContainer[APPLICATION_SYMBOL_SPSFLUSH] = value;
        }
    }

    public class_Base_Config Object_BaseConfig
    {
        set;
        get;
    }

    public class_Data_SqlConnectionHelper Object_SqlConnectionHelper
    {
        set;
        get;
    }


    public class_Data_SqlHelper Object_SqlHelper
    {
        set;
        get;
    }

    public class_Security_DES Object_DES
    {
        set;
        get;
    }

    public string dbServer
    {
        set;
        get;
    }

    public string dbuid
    {
        set;
        get;
    }

    public string dbpwd
    {
        set;
        get;
    }

    public string dbdata
    {
        set;
        get;
    }

    public XmlNodeList productBenchmarkNodes
    {
        set;
        get;
    }

    public Dictionary<string, Dictionary<string, class_Data_SqlSPEntry>> storeProceduresList
    {
        set;
        get;
    }

    public int maxCountOfLoginedAccount
    {
        set;
        get;
    }

    public int expiredPeriodOfLoginedAccount
    {
        set;
        get;
    }

    public enum_DatabaseType dataBaseType
    {
        set;
        get;
    }

    protected HttpApplicationState _refApplicationContainer;

    public class_CommonData(HttpApplicationState refApplicationContainer)
    {
        _refApplicationContainer = refApplicationContainer;
    }

    public class_Data_SqlSPEntry GetActiveSP(string dbServer, string SPName)
    {
        if (_refApplicationContainer[APPLICATION_SYMBOL_SPSLIST] != null)
            storeProceduresList = (Dictionary<string, Dictionary<string, class_Data_SqlSPEntry>>)_refApplicationContainer[APPLICATION_SYMBOL_SPSLIST];
        if (storeProceduresList != null)
        {
            if (storeProceduresList.ContainsKey(dbServer))
            {
                if (storeProceduresList[dbServer].ContainsKey(SPName))
                    return (class_Data_SqlSPEntry)storeProceduresList[dbServer][SPName].Clone();
                else
                    return null;
            }
            else
            {
                return null;
            }
        }
        else
            return null;
    }

    public bool InitServices(class_Base_Config ref_ActiveObjectConfig, string rootPath)
    {
        if (ref_ActiveObjectConfig == null)
            return false;
        Object_BaseConfig = ref_ActiveObjectConfig;
        XmlNode platformDBConfig = Object_BaseConfig.GetSessionNode("iKCoderDB");
        XmlNode applicationConfig = Object_BaseConfig.GetSessionNode("appConfig");
        XmlNode rsDomain = Object_BaseConfig.GetSessionNode("RSDomain");
        Object_BaseConfig.SwitchToDESModeON(Const_DESKey);
        Object_DES = new class_Security_DES(Const_DESKey);
        this.dbServer = Object_BaseConfig.GetAttrValue(platformDBConfig, "dbserver");
        this.dbuid = Object_BaseConfig.GetAttrValue(platformDBConfig, "uidname");
        this.dbpwd = Object_BaseConfig.GetAttrValue(platformDBConfig, "password");
        this.dbdata = Object_BaseConfig.GetAttrValue(platformDBConfig, "db");
        this.dataBaseType = Object_BaseConfig.GetAttrValue(platformDBConfig, "dbtype") == "mysql" ? enum_DatabaseType.MySql : enum_DatabaseType.SqlServer;       
        Object_SqlHelper = new class_Data_SqlHelper();
        return true;
    }

    public Dictionary<string, Dictionary<string, class_Data_SqlSPEntry>> LoadStoreProcedureList()
    {
        this.storeProceduresList = new Dictionary<string, Dictionary<string, class_Data_SqlSPEntry>>();
        if (Object_SqlConnectionHelper == null || Object_SqlConnectionHelper.ActiveSqlConnectionCollection.Count == 0)
            return this.storeProceduresList;
        foreach (string activeKeyName in Object_SqlConnectionHelper.ActiveSqlConnectionCollection.Keys)
        {
            Dictionary<string, class_Data_SqlSPEntry> resuleList = this.Object_SqlHelper.ActionAutoLoadingAllSPS(Object_SqlConnectionHelper.Get_ActiveConnection(activeKeyName), "*");
            this.storeProceduresList.Add(activeKeyName, resuleList);
        }
        return this.storeProceduresList;
    }
       
    public void LoadStoreProcedureIntoApplicationPool()
    {       
        if (_refApplicationContainer[APPLICATION_SYMBOL_SPSLIST] == null)
        {
            _refApplicationContainer.Add(APPLICATION_SYMBOL_SPSLIST, LoadStoreProcedureList());
            _refApplicationContainer.Add(APPLICATION_SYMBOL_SPSWRTIME, DateTime.Now.ToString());
            _refApplicationContainer.Add(APPLICATION_SYMBOL_SPSFLUSH, "0");
        }
        else
        {
            DateTime dtWriten = DateTime.Parse(_refApplicationContainer[APPLICATION_SYMBOL_SPSWRTIME].ToString());
            if((DateTime.Now-dtWriten).Minutes>=120 || _refApplicationContainer[APPLICATION_SYMBOL_SPSFLUSH].ToString()=="1")
            {
                _refApplicationContainer[APPLICATION_SYMBOL_SPSLIST] = LoadStoreProcedureList();
                _refApplicationContainer[APPLICATION_SYMBOL_SPSWRTIME] = DateTime.Now.ToString();
                _refApplicationContainer[APPLICATION_SYMBOL_SPSFLUSH] = "0";
            }
        }
    }
    
    public void PrepareDataOperation()
    {
        ConnectToDatabase();
        LoadStoreProcedureIntoApplicationPool();
    }

    
    public bool ConnectToDatabase()
    {
        Object_SqlConnectionHelper = new class_Data_SqlConnectionHelper();
        if(Object_SqlConnectionHelper.Set_NewConnectionItem(this.dbServer, this.dbServer, dbuid, dbpwd, dbdata, dataBaseType))
            isExecutedConnectedDB = true;
        return true;
    }

    public void CommonSPOperation(addErrMsgFunction refAddErrMsgFunction, addMsgFunction refAddMsgFunction, ref XmlDocument responseDoc, class_Data_SqlSPEntry activeSPEntry, string operation, Type activeType)
    {
        if (string.IsNullOrEmpty(operation))
            operation = class_CommonDefined.enumDataOperaqtionType.select.ToString();
        if (class_CommonDefined.enumDataOperaqtionType.insert.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteInsertSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), activeType.FullName, "");
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : insert.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.select.ToString() == operation)
        {
            DataTable selectResultDT = Object_SqlHelper.ExecuteSelectSPForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (selectResultDT != null)
            {
                string strXMLResult = class_Data_SqlDataHelper.ActionConvertDTtoXMLString(selectResultDT);
                responseDoc.LoadXml(strXMLResult);
            }
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select.", "", enum_MessageType.Exception);

        }
        else if (class_CommonDefined.enumDataOperaqtionType.delete.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteDeleteSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "Delete action complete.", "");
        }
        else if (class_CommonDefined.enumDataOperaqtionType.update.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteUpdateSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "Update action complete.", "");
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : update.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectkey.ToString() == operation)
        {
            DataTable selectResultDT = Object_SqlHelper.ExecuteSelectSPKeyForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (selectResultDT != null)
            {
                string strXMLResult = class_Data_SqlDataHelper.ActionConvertDTtoXMLString(selectResultDT);
                responseDoc.LoadXml(strXMLResult);
            }
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectcondition.ToString() == operation)
        {
            DataTable selectResultDT = Object_SqlHelper.ExecuteSelectSPConditionForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (selectResultDT != null)
            {
                string strXMLResult = class_Data_SqlDataHelper.ActionConvertDTtoXMLString(selectResultDT);
                responseDoc.LoadXml(strXMLResult);
            }
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectkey.ToString() == operation)
        {
            DataTable selectResultDT = Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (selectResultDT != null)
            {
                string strXMLResult = class_Data_SqlDataHelper.ActionConvertDTtoXMLString(selectResultDT);
                responseDoc.LoadXml(strXMLResult);
            }
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.deletecondition.ToString() == operation)
        {
            bool result = Object_SqlHelper.ExecuteDeleteConditionSP(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (!result)
            {
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
            }
        }
        else if (class_CommonDefined.enumDataOperaqtionType.deletemixed.ToString() == operation)
        {
            bool result = Object_SqlHelper.ExecuteDeleteConditionSP(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (!result)
            {
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
            }
        }
    }

    public void CommonSPOperation(addErrMsgFunction refAddErrMsgFunction, addMsgFunction refAddMsgFunction, ref DataTable responseDataTable, class_Data_SqlSPEntry activeSPEntry, string operation, Type activeType)
    {
        if (string.IsNullOrEmpty(operation))
            operation = class_CommonDefined.enumDataOperaqtionType.select.ToString();
        if (class_CommonDefined.enumDataOperaqtionType.insert.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteInsertSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), activeType.FullName, "");
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : insert.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.select.ToString() == operation)
        {
            responseDataTable = Object_SqlHelper.ExecuteSelectSPForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (responseDataTable == null)
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select.", "", enum_MessageType.Exception);

        }
        else if (class_CommonDefined.enumDataOperaqtionType.delete.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteDeleteSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "Delete action complete.", "");
        }
        else if (class_CommonDefined.enumDataOperaqtionType.update.ToString() == operation)
        {
            if (Object_SqlHelper.ExecuteUpdateSP(activeSPEntry, Object_SqlConnectionHelper, dbServer))
                refAddMsgFunction(class_CommonDefined._Executed_Api + activeType.FullName, class_CommonDefined.enumExecutedCode.executed.ToString(), "Update action complete.", "");
            else
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : update.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectkey.ToString() == operation)
        {
            responseDataTable = Object_SqlHelper.ExecuteSelectSPKeyForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (responseDataTable == null)
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectcondition.ToString() == operation)
        {
            responseDataTable = Object_SqlHelper.ExecuteSelectSPConditionForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (responseDataTable == null)
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
        }
        else if (class_CommonDefined.enumDataOperaqtionType.selectkey.ToString() == operation)
        {
            responseDataTable = Object_SqlHelper.ExecuteSelectSPMixedConditionsForDT(activeSPEntry, Object_SqlConnectionHelper, dbServer);
            if (responseDataTable == null)
                refAddErrMsgFunction(class_CommonDefined._Faild_Execute_Api + activeType.FullName, "failed to do action : select condition.", "", enum_MessageType.Exception);
        }
    }

    public void CloseDBConnection()
    {
        Object_SqlConnectionHelper.Action_CloseAllActionConnection();
    }
}