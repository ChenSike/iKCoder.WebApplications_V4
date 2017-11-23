using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Sys_api_iKCoder_Sys_Set_ReloadApplicationPool : class_WebBase_IKCoderAPI
{
    protected override void ExtendedAction()
    {
        Application.Clear();
    }
}