using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using iKCoder_Platform_SDK_Kit;
using System.Data;


/// <summary>
/// Summary description for class_BusBase
/// </summary>
public class class_BusBase
{
    protected class_CommonData Object_CommonData;

    public class_BusBase(class_CommonData refObjectCommonData)
    {
        Object_CommonData = refObjectCommonData;
    }
}