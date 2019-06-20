'use strict';

function initPage() {
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'GET',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.bus.getworkspace, { symbol: getQueryString() }),
    //    data: '<root></root>',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Input_OldPWD');
    //            return;
    //        }
    //        var data = initData(response);
    //        buildUserInfoHTML(data);
    //        buildMenuHTML(data);
    //        buildDataHTML(data);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    var dataXML = StringToXML('<root>' +
        '   <basic>' +
        '		<usr id="001" nickname="Aaron" last="2017-09-30 12:01:02"/>' +
        '	</basic>' +
        '</root>');
    var data = {
        id: '001',
        name: "Aaron",
        last: "2017-09-30 12:01:02"
    };
    buildUserInfoHTML(data);
    buildDataHTML_Upload_History();
    initEvents();
};

function initEvents() {
    $('#menu_Upload').on('click', function () {
        buildDataHTML_Upload();
    });

    $('#menu_Upload_History').on('click', function () {
        buildDataHTML_Upload_History();
    });

    $('#menu_DataSearch').on('click', function () {
        buildDataHTML_Search();
    });
};

function buildUserInfoHTML(data) {
    $('#label_UserName').text('欢迎你, ' + data.name);
    $('#label_LastLoginTime').text('上次登录时间: ' + data.last);
    //$('#image_User_Header').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
};

function buildDataTopHTML() {
    var tmpHTMLStr = '<div class="row justify-content-end" style="background-color:#F1F1F1;">' +
        '    <div class="col" style="height:50px;">' +
        '       <img src="image/logo-new-gray.png" style="width:120px; height:35px; background-color:transparent; border:none; right: 10px; top: 8px; position: absolute;" alt="">' +
        '    </div>' +
        '</div>';
    $('#container_Datas').append($(tmpHTMLStr));
};

/*Upload*/
function formatData_Upload_History() {
    var data = [{
        id: '1',
        filename: 'Tsdfafom',
        uploaddate: '2010-01-01 12:12:12'
    }, {
        id: '2',
        filename: 'jdafsdkfj',
        uploaddate: '2010-01-01 11:11:11'
    }, {
        id: '3',
        filename: 'jdafsdkfj',
        uploaddate: '2010-01-01 10:10:10'
    }];

    return data;
};

function buildDataHTML_Upload_History() {
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'GET',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.bus.getUploadList, { }),
    //    data: '<root></root>',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_getUploadList');
    //            return;
    //        }
    //        var data = formatData_Upload_History(response);
    //        buildDataTableHTML_Upload_History(data);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    var rspXML = "";
    var data = formatData_Upload_History(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Upload_History();
    buildDataTableHTML_Upload_History(data);
};

function buildDataHeaderHTML_Upload_History() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
        '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
        '        <div class="container-fluid">' +
        '            <div class="row justify-content-around">' +
        '                <div class="col-2 data-panel-title" style="line-height:40px;">上传历史</div>' +
        '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
        '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_Upload_History(data) {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 150px;"></th>');
    tmpHTMLStr.push('                   <th>文件名</th>');
    tmpHTMLStr.push('                   <th>上传时间</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-danger btn-upload-item-delete" data-target="' + data[i].id + '">删除</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-upload-item-open" data-target="' + data[i].id + '">打开</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].filename + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].uploaddate + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('.btn-upload-item-delete').on('click', function () {
        deleteUploadItem($(arguments[0].target).attr('data-target'), 1);
    });

    $('.btn-upload-item-open').on('click', function () {
        openUploadItem($(arguments[0].target).attr('data-target'), 1);
    });
};

function deleteUploadItem(itemId){

}

function openUploadItem(itemId){

}

function buildDataHTML_Upload() {
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Upload();
    buildDataTableHTML_Upload();
};

function buildDataHeaderHTML_Upload() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
        '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
        '        <div class="container-fluid">' +
        '            <div class="row justify-content-around">' +
        '                <div class="col-2 data-panel-title" style="line-height:40px;">上传文件</div>' +
        '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
        '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_Upload() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <form id="form" action="upload/insert" method="post" enctype="multipart/form-data">');
    tmpHTMLStr.push('                <div class="row form-group">');
    tmpHTMLStr.push('                   <label class="col-md-4">图片上传:</label>');
    tmpHTMLStr.push('                   <div class="col-sm-12">');
    tmpHTMLStr.push('                       <input id="fileUpload_Input" name="file" multiple type="file" data-show-caption="true">');
    tmpHTMLStr.push('                   </div>');
    tmpHTMLStr.push('               </div>');
    tmpHTMLStr.push('            </form>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    initFileInput("fileUpload_Input");
};

function initFileInput(ctrlName) {
    //https://blog.csdn.net/y19910825/article/details/80227950
    var control = $('#' + ctrlName);
    control.fileinput({
        language: 'zh', //设置语言
        uploadUrl: "upload/insert", //上传的地址
        allowedFileExtensions: ['pdf', 'doc', 'docx'], //接收的文件后缀
        uploadAsync: true, //默认异步上传
        showUpload: true, //是否显示上传按钮
        showRemove: true, //显示移除按钮
        showPreview: true, //是否显示预览
        showCaption: true, //是否显示标题
        browseClass: "btn btn-primary", //按钮样式
        dropZoneEnabled: true, //是否显示拖拽区域
        //minImageWidth: 50, //图片的最小宽度
        //minImageHeight: 50,//图片的最小高度
        //maxImageWidth: 1000,//图片的最大宽度
        //maxImageHeight: 1000,//图片的最大高度
        //maxFileSize: 0,//单位为kb，如果为0表示不限制文件大小
        //minFileCount: 0,
        //maxFileCount: 10, //表示允许同时上传的最大文件个数
        //showPreview：是否显示文件的预览图。默认值true。
        //showRemove：是否显示删除/清空按钮。默认值true。
        showUpload: true, //是否显示文件上传按钮。默认是submit按钮，除非指定了uploadUrl属性。默认值true。
        showCancel: true, //是否显示取消文件上传按钮。只有在AJAX上传线程中该属性才可见可用。默认值true。
        //captionClass：在标题容器上额外的class。类型string。
        //previewClass：在预览区域容器上的额外的class。类型string。
        //mainClass：添加在文件上传主容器。类型string。
        //initialDelimiter：在initialPreview属性中用于上传多个文件时的分隔符。默认值：’$$‘。
        //initialPreview：类型string或array。显示的初始化预览内容。你可以传入一个简单的HTML标签用于显示图片、文本或文件。
        //如果设置一个字符串，会在初始化预览图中显示一个文件。你可以在initialDelimiter属性中设置分隔符用于显示多个预览图。
        //如果设置为数组，初始化预览图中会显示数组中所有的文件。
        enctype: 'multipart/form-data',
        validateInitialCount: true,
        previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}！",

    }).on('filepreupload', function (event, data, previewId, index) { //上传中
        var form = data.form,
            files = data.files,
            extra = data.extra,
            response = data.response,
            reader = data.reader;
        console.log('文件正在上传');
    }).on("fileuploaded", function (event, data, previewId, index) { //一个文件上传成功
        console.log('文件上传成功！' + data.id);

    }).on('fileerror', function (event, data, msg) { //一个文件上传失败
        console.log('文件上传失败！' + data.id);
    })
}
/*Search*/
function formatData_Search(response){
    var data = [{
        id: '1',
        filename: 'Tsdfafom',
        uploaddate: '2010-01-01 12:12:12'
    }, {
        id: '2',
        filename: 'jdafsdkfj',
        uploaddate: '2010-01-01 11:11:11'
    }, {
        id: '3',
        filename: 'jdafsdkfj',
        uploaddate: '2010-01-01 10:10:10'
    }];

    return data;
}

function buildDataHTML_Search() {
    var rspXML = "";
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Search();
    buildDataTableHTML_Search([]);
};

function buildDataHeaderHTML_Search() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('               <div class="col-2 data-panel-title" style="line-height:40px;">数据检索</div>');
    tmpHTMLStr.push('               <div class="col" id="container_DataHeader_Button" style="padding-top:5px">');
    tmpHTMLStr.push('                   <form>');
    tmpHTMLStr.push('                       <div class="row">');
    tmpHTMLStr.push('                           <div class="form-group col-8">');
    tmpHTMLStr.push('                               <input type="text" class="form-control form-control-sm" id="txt_Search_FindValue">');
    tmpHTMLStr.push('                           </div>');
    tmpHTMLStr.push('                           <div class="form-group col-2">');
    tmpHTMLStr.push('                               <button type="button" class="btn btn-sm btn-success form-control" id="btn_Data_Search">查询</button>');
    tmpHTMLStr.push('                           </div>');
    tmpHTMLStr.push('                       </div>');
    tmpHTMLStr.push('                   </form>');
    tmpHTMLStr.push('               </div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#btn_Data_Search').on('click', function () {        
        var findValue = $('#txt_Search_FindValue').val();
        loadSearchResult();
    });

};

function loadSearchResult(){
    var findValue = $('#txt_Search_FindValue').val();
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.bus.search, { findvalue: findValue }),
    //    data: '<root></root>',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_search');
    //            return;
    //        }
    //        var data = formatData_Search(response);
    //        buildDataTableHTML_Search(data);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    var rspXML = "";
    var data = formatData_Search(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Search();
    buildDataTableHTML_Search(data);
}

function buildDataTableHTML_Search(data) {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 150px;"></th>');
    tmpHTMLStr.push('                   <th>文件名</th>');
    tmpHTMLStr.push('                   <th>上传时间</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-danger btn-upload-item-delete" data-target="' + data[i].id + '">删除</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-upload-item-open" data-target="' + data[i].id + '">打开</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].filename + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].uploaddate + '</td>');
        tmpHTMLStr.push('               </tr>');
    }
    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};