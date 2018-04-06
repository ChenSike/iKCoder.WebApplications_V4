using System;
using System.IO;
using System.Text;

public partial class api_medialibtheme : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            string tmpPath = Request.QueryString["t"];
            string filePath = Context.Server.MapPath(tmpPath) + ".json";
            StreamReader sr = new StreamReader(filePath, Encoding.Default);
            String dataStr = sr.ReadToEnd();
            sr.Close();
            Response.ContentType = "application/json";
            Response.Write(dataStr);
            //Response.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.ToString());
        }
    }
}