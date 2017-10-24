'use strict';

function initPage() {
    _gRoleObj = _roleValue.admin;
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
    var data = initData(dataXML);
    buildUserInfoHTML(data);
    //buildMenuHTML(data);
    //buildDataHTML(data);
    initEvents();
};

function initData(xml) {
    var data = {
        id: '001',
        name: $.cookie("logined_user_name"),
        last: "2017-09-30 12:01:02"
    };

    return data;
};

function buildUserInfoHTML(data) {
    $('#label_UserName').text('欢迎你, ' + data.name);
    $('#label_LastLoginTime').text('上次登录时间: ' + data.last);
    //$('#image_User_Header').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
};

function buildMenuHTML() {

};

function buildDataHTML() {
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML();
    buildDataTableHTML();
};

function buildDataTopHTML() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:80px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderButtons() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">添加教员</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">批量删除</button>'));
}

function buildDataHeaderFields() {
    var tmpHTMLStr = '<form class="form-inline">' +
    '   <div class="input-group">' +
    '       <input type="text" class="form-control  form-control-sm" id="data_" placeholder="Username">' +
    '       <button type="button" class="btn btn-sm btn-success">搜索</button>' +
    '   </div>' +
    '</form>';
    $('#container_DataHeader_Fields').append($(tmpHTMLStr));
}

function buildDataHeaderHTML(dataTitle) {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">' + dataTitle + '</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons();
    buildDataHeaderFields();
};

function buildDataTableColHeaderHTML() {
    var tmpHTMLStr = '<th style="width: 50px;"></th>' +
    '<th style="width: 60px;text-align: center;">' +
    '   <label class="custom-control custom-checkbox">' +
    '       <input type="checkbox" class="custom-control-input">' +
    '       <span class="custom-control-indicator"></span>' +
    '   </label>' +
    '</th>' +
    '<th style="width: 180px;">操作</th>' +
    '<th>姓名</th>' +
    '<th>职称</th>' +
    '<th>信息</th>';
    $('#container_DataTable_Header').append($(tmpHTMLStr));
};

function buildDataTableDataRowsHTML() {
    var count = 1;
    for (var i = 0; i < count; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">1</th>' +
        '   <td style="text-align: center;">' +
        '       <label class="custom-control custom-checkbox">' +
        '           <input type="checkbox" class="custom-control-input">' +
        '           <span class="custom-control-indicator"></span>' +
        '       </label>' +
        '   </td>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-danger">删除</button>' +
        '       <button type="button" class="btn btn-sm btn-success">编辑</button>' +
        '       <button type="button" class="btn btn-sm btn-warning">锁定</button>' +
        '   </td>' +
        '   <td>Mark</td>' +
        '   <td>Otto</td>' +
        '   <td>@mdo</td>' +
        '</tr>';
        $('#container_DataTable_Rows').append($(tmpHTMLStr));
    }
}

function buildDataTableHTML() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="padding-top:10px;">' +
    '        <table class="table table-striped">' +
    '            <thead>' +
    '                <tr id="container_DataTable_Header"></tr>' +
    '            </thead>' +
    '            <tbody id="container_DataTable_Rows"></tbody>' +
    '        </table>' +
    '    </div>' +
    '</div>';
    $('#container_Datas').append($(tmpHTMLStr));
    buildDataTableColHeaderHTML();
    buildDataTableDataRowsHTML();
};

function initEvents() {
    $('#menu_TM_All').on('click', function () {
        alert('Show All Teacher');
    });

    $('#menu_TM_Complain').on('click', function () {
        alert('Show All Complain');
    });

    $('#menu_MarketData').on('click', function () {
        alert('Show All Market Data');
    });

    $('#lbtn_Logout').on('click', function () {
        _logout();
    });

    $('#menu_UpdatePWD').on('click', function () {
        _showChgPWDPopup();
    });    
};