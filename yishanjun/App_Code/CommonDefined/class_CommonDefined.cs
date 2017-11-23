using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// class_CommonDefined 的摘要说明
/// </summary>
public class class_CommonDefined
{
    public const string _Faild_Execute_Api = "Faild to execute api : ";
    public const string _Executed_Api = "Executed api : ";
    public const string _AllowSysOperation = "AllowedOperation";
    public static int CountOfLoginedAccount = 5000;
    public static int ExperiedPeriodOfLoginedAccount = 180;

    public enum enumExecutedCode
    {
        executed = 1001,
        failedExecuted = 4001
    }

    public enum enumDataItemType
    {
        text = 2001,
        bin = 2002
    }

    public enum enumDataOperaqtionType
    {
        insert = 3001,
        update = 3002,
        delete = 3003,
        select = 3004,
        selectkey = 3005,
        selectcondition = 3006,
        selectmixed = 3007,
        deletecondition = 3008,
        deletemixed = 3009
    }

    public enum enumDevices
    {
        pc = 4001,
        mobil = 4002,
        pad = 4003,
        other = 4004
    }

    public enum enumSenceType
    {
        primer = 5001,
        primary = 5002,
        middle = 5003,
        senior = 5004,
        advanced = 5005
    }

    public enum enumSTEMLType
    {
        science = 6001,
        technology = 6002,
        engineering = 6003,
        math = 6004,
        language = 6005
    }

    public enum enumProfileDoc
    {
        doc_basic = 7001,
        doc_studystatus = 7002,
        doc_commnunication = 7003,
        doc_payment = 7004,
        doc_datastore = 7005,
        doc_recored = 7006,
        doc_message = 7007
    }

    public enum enumProfileType
    {
        profile_type_educenter = 0,
        profile_type_teacher = 1,
        profile_type_advisor = 2,
        profile_type_student = 3        
    }

    public enum enumLoginedMark
    {
       mark_educenter = 1,
       mark_teacher = 2,
       mark_student = 3,
       mark_advisor = 4,
       mark_tm = 5
    }

    public static class_CommonDefined.enumSenceType GetSenceType(string typeValue)
    {
        if (typeValue=="5001")
            return class_CommonDefined.enumSenceType.primer;
        else if (typeValue=="5002")
            return class_CommonDefined.enumSenceType.primary;
        else if (typeValue=="5003")
            return class_CommonDefined.enumSenceType.middle;
        else if (typeValue=="5004")
            return class_CommonDefined.enumSenceType.senior;
        else if (typeValue=="5005")
            return class_CommonDefined.enumSenceType.advanced;
        return class_CommonDefined.enumSenceType.primer;
    }

    public static string GetSymbolStartChar(string typeValue)
    {
        if (typeValue == "5001")
            return "a";
        else if (typeValue == "5002")
            return "b";
        else if (typeValue == "5003")
            return "c";
        else if (typeValue == "5004")
            return "d";
        else if (typeValue == "5005")
            return "e";
        return "a";
    }

    public static string GetTypeValue(string symbol)
    {
        if (symbol.StartsWith("a") || symbol.StartsWith("A"))
            return "5001";
        else if (symbol.StartsWith("b") || symbol.StartsWith("B"))
            return "5002";
        else if (symbol.StartsWith("c") || symbol.StartsWith("C"))
            return "5003";
        else if (symbol.StartsWith("d") || symbol.StartsWith("D"))
            return "5004";
        else if (symbol.StartsWith("e") || symbol.StartsWith("E"))
            return "5005";
        return "5001";
    }

    public static int GetLoginedMarkType(enumLoginedMark loginedMark)
    {
        switch(loginedMark)
        {
            case enumLoginedMark.mark_educenter:
                return 1;
            case enumLoginedMark.mark_teacher:
                return 2;
            case enumLoginedMark.mark_student:
                return 3;
            case enumLoginedMark.mark_advisor:
                return 4;
            case enumLoginedMark.mark_tm:
                return 5;
            default:
                return 3;
        }
    }

}