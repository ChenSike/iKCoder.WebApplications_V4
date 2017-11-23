using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using iKCoder_Platform_SDK_Kit;
using System.Net;
using System.Xml;

/// <summary>
/// Summary description for class_WebBase_IKcoderAPI
/// </summary>
public class class_WebBase_IKCoderAPI : class_Base_WebBaseclass
{

    //protected string Server_API = "http://ikcoder.iok.la:24525/";
    protected string Server_API = "http://localhost/";
    protected string Virtul_Folder_API = "PlatformAPI";
    protected string Produce_Name = "iKCoder";
    protected string Produce_Code = "12345678";
    protected string CookieContainer_Name = "CommonCookieContainer";
    protected string ApplicationAttrs = "ApplicationAttrs";
    protected class_Net_RemoteRequest Object_NetRemote;
    protected class_Base_Config Object_BaseConfig;
    protected class_Util_LabelsController Object_LabelController;
    protected class_CommonData Object_CommonData;   
    protected int Session_TimeOutMinutes = 180;
    protected int Cookie_TimeOutHour = 3;

    protected string logined_user_id;
    protected string logined_user_name;
    protected string logined_centersymbol;

    public class_WebBase_IKCoderAPI()
    {
        Object_CommonData = new class_CommonData(Application);
    }

    protected override void CheckRegDomain()
    {
        bool mark_flushconfig = false;
        if (GetSessionValue("BaseConfig") != null)
        {
            if ((DateTime.Now - ((DateTime)GetSessionValue("WRITETIME_BaseConfig"))).Minutes >= 60)
                mark_flushconfig = true;
            Object_BaseConfig = (class_Base_Config)GetSessionValue("BaseConfig");
        }
        else
            mark_flushconfig = true;
        if(mark_flushconfig)
        { 
            Object_BaseConfig = new class_Base_Config();
            if (!Object_BaseConfig.DoOpen(APPFOLDERPATH + "\\" + "normaldata.xml"))
                return;
            Session["BaseConfig"] = Object_BaseConfig;
            Session["WRITETIME_BaseConfig"] = DateTime.Now;
        }
        if (GetApplicationData("LabelController") != null)
        {
            if ((DateTime.Now - (DateTime)(Application["WRITETIME_LabelController"])).Days > 1)
            {
                Application["LabelController"] = Object_LabelController = class_Util_LabelsController.CreateInstance(APPFOLDERPATH + "\\" + "labels.xml");
                Application["WRITETIME_LabelController"] = DateTime.Now;
            }
            Object_LabelController = (class_Util_LabelsController)Application["LabelController"];
        }
        else
        {
            Application["LabelController"] = Object_LabelController = class_Util_LabelsController.CreateInstance(APPFOLDERPATH + "\\" + "labels.xml");
            Application["WRITETIME_LabelController"] = DateTime.Now;
        }
        if ((Object_LabelController = class_Util_LabelsController.CreateInstance(APPFOLDERPATH + "\\" + "labels.xml")) == null)
            return;
        Object_CommonData.InitServices(Object_BaseConfig, APPFOLDERPATH);
        XmlNodeList RSDomainItems = Object_BaseConfig.GetItemNodes("RSDomain");
        Object_BaseConfig.SwitchToDESModeOFF();
        if(GetSessionValue("RSDomain")!=null)
        {
            string perinstanceDomain = GetSessionValue("RSDomain").ToString();
            foreach (XmlNode activeDomainItem in RSDomainItems)
            {
                string itemName = Object_BaseConfig.GetAttrValue(activeDomainItem, "name");
                string domainValue = Object_BaseConfig.GetAttrValue(activeDomainItem, "domain");
                if (perinstanceDomain.Contains(domainValue))
                {
                    RSDoamin = domainValue;
                    break;
                }
            }
        }       
    }

    protected override void InitAction()
    {
        Object_CommonData = new class_CommonData(Application);
    }

    protected virtual bool BeforeExtenedAction()
    {
        return false;
    }

    protected override void DoAction()
    {
        
        CookieContainer activeCookieContainerObject = new CookieContainer();
        if (GetSessionValue(CookieContainer_Name) == null)
            Session[CookieContainer_Name] = activeCookieContainerObject;        
        else
            activeCookieContainerObject = (CookieContainer)GetSessionValue(CookieContainer_Name);
        Object_NetRemote = new class_Net_RemoteRequest(ref activeCookieContainerObject);
        ISRESPONSEDOC = true;
        //if (regToken())
        //{
            if (BeforeExtenedAction())
            {                
                ExtendedAction();
            }
        //}
        if (Object_CommonData.isExecutedConnectedDB)
            Object_CommonData.CloseDBConnection();
    }

    protected void regDomain()
    {
        string requestURL = Server_API + Virtul_Folder_API + "/Domain/api_RegDomain.aspx?domain=" + Server_API;
        Object_NetRemote.getRemoteRequestByGet(requestURL);
    }
 

    protected bool regToken()
    {
        if (GetSessionValue("token") == null)
        {
            string getTokenDoc = "<root><name>" + Produce_Name + "</name><code>" + Produce_Code + "</code></root>";
            string requestURL = Server_API + Virtul_Folder_API + "/Token/api_getToken.aspx";
            string strResultDoc = Object_NetRemote.getRemoteRequestToStringWithCookieHeader(getTokenDoc, requestURL, 1000 * 20, 1000 * 50);
            XmlDocument resultDoc = new XmlDocument();
            resultDoc.LoadXml(strResultDoc);
            XmlNode msgNode = resultDoc.SelectSingleNode("/root/msg");
            string tokenValue = class_XmlHelper.GetAttrValue(msgNode, "msg");
            Session["token"] = tokenValue;
            if (string.IsNullOrEmpty(tokenValue))
                return false;
            else
                return true;
        }
        else
            return true;
    }

    protected virtual void ExtendedAction()
    {

    }
}