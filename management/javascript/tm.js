'use strict';

function initPage() {
    _gRoleObj = _roleValue.tm;
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
    buildDataHTML_Class();
    initEvents();
};

function initEvents() {
    $('#menu_Class_All').on('click', function () {
        buildDataHTML_Class();
    });

    $('#menu_Course_All').on('click', function () {
    });

    $('#menu_UpdatePWD').on('click', function () {
        _showChgPWDPopup();
    });

    $('#lbtn_Logout').on('click', function () {
        _logout();
    });
};

function buildUserInfoHTML(data) {
    $('#label_UserName').text('欢迎你, ' + data.name);
    $('#label_LastLoginTime').text('上次登录时间: ' + data.last);
    //$('#image_User_Header').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
};

function showCreateNewClassPopup() {
    if ($('#modal_Class_New').length <= 0) {
        buildCreateNewClassPopup(null);
        $('#modal_Class_New').on('show.bs.modal', function (e) {
            fillNewClassSymbol();
            fillRoomList();
            fillTeacherList();
        });

        $('#btn_NewRoom_Class_New').on('click', function () {
            $('#modal_Class_New').modal('hide');
            if ($('#modal_NewRoom').length <= 0) {
                buildCreateNewRoomPopup();
            }

            $('#modal_NewRoom').modal('show');
        });
    }

    $('#modal_Class_New').modal('show');
}

function formatData_TeacherList(rspXML) {
    var data = [
        { name: '教员 1', id: '1' },
        { name: '教员 2', id: '2' },
        { name: '教员 3', id: '3' }
    ];

    return data;
}

function formatData_RoomList(rspXML) {
    var data = [{ name: '教室 1', id: '1' }, { name: '教室 2', id: '2' }, { name: '教室 3', id: '3' }];
    return data;
}

function buildCreateNewClassPopup(rspXML) {
    var tmpHTMLStr = '<div class="modal fade" id="modal_Class_New" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
    '    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">' +
    '        <div class="modal-content">' +
    '            <div class="modal-header">' +
    '                <h5 class="modal-title" id="exampleModalLabel">创建班级</h5>' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '                    <span aria-hidden="true">&times;</span>' +
    '                </button>' +
    '            </div>' +
    '            <div class="modal-body">' +
    '                <form>' +
    '                    <div class="form-group row">' +
    '                        <label for="sel_Level_Class_New" class="col-3 col-form-label class-create">级别</label>' +
    '                        <div class="col-9">' +
    '                            <select class="form-control form-control-sm" id="sel_Level_Class_New">' +
    '                                <option value="1">初级</option>' +
    '                                <option value="2">中级</option>' +
    '                                <option value="3">高级</option>' +
    '                                <option value="4">拓展</option>' +
    '                                <option value="5">课程包</option>' +
    '                            </select>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Symbol_Class_New" class="col-3 col-form-label class-create">编号</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control form-control-sm" type="text" value="" id="txt_Symbol_Class_New" readonly>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Teacher_Class_New`" class="col-3 col-form-label class-create">教员</label>' +
    '                        <div class="col-9">' +
    '                            <select class="form-control form-control-sm" value="" id="sel_Teacher_Class_New"></select>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Room_Class_New" class="col-3 col-form-label class-create">教室</label>' +
    '                        <div class="col-6">' +
    '                            <select class="form-control form-control-sm" value="" id="sel_Room_Class_New"></select>' +
    '                        </div>' +
    '                        <div class="col-2">' +
    '                            <button class="btn btn-sm btn-primary" id="btn_NewRoom_Class_New" type="button">添加</button>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Start_Class_New" class="col-3 col-form-label class-create">开学时间</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control form-control-sm" type="date" value="' + (new Date()).toLocaleDateString().replace(/\//g, '-') + '" id="txt_Start_Class_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Amount_Class_New" class="col-3 col-form-label class-create">人数</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control form-control-sm" type="number" value="10" id="txt_Amount_Class_New">' +
    '                        </div>' +
    '                    </div>' +
    '                </form>' +
    '            </div>' +
    '            <div class="modal-footer">' +
    '                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>' +
    '                <button type="button" class="btn btn-sm btn-primary">确定</button>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('body').append($(tmpHTMLStr));
}

function fillRoomList() {
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
    var data = formatData_RoomList(null);
    var tmpOptHTML = '';
    for (var i = 0; i < data.length; i++) {
        tmpOptHTML += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
    }

    $('#sel_Room_Class_New').empty();
    $('#sel_Room_Class_New').append($(tmpOptHTML));
}

function fillTeacherList() {
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
    var data = formatData_TeacherList(null);
    var tmpOptHTML = '';
    for (var i = 0; i < data.length; i++) {
        tmpOptHTML += '<option value="' + data[i].id + '">' + data[i].name + '</option>';
    }

    $('#sel_Teacher_Class_New').empty();
    $('#sel_Teacher_Class_New').append($(tmpOptHTML));
};

function fillNewClassSymbol() {
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

    $('#txt_Symbol_Class_New').val('C-01-001');
};

function buildCreateNewRoomPopup() {
    var tmpHTMLStr = '<div class="modal fade" id="modal_NewRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
    '    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">' +
    '        <div class="modal-content">' +
    '            <div class="modal-header">' +
    '                <h5 class="modal-title" id="exampleModalLabel">添加教室</h5>' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '                    <span aria-hidden="true">&times;</span>' +
    '                </button>' +
    '            </div>' +
    '            <div class="modal-body">' +
    '                <form>' +
    '                    <div class="form-group">' +
    '                        <label for="recipient-name" class="form-control-label">教室名称:</label>' +
    '                        <input type="text" class="form-control form-control-sm" id="recipient-name">' +
    '                    </div>' +
    '                </form>' +
    '            </div>' +
    '            <div class="modal-footer">' +
    '                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>' +
    '                <button type="button" class="btn btn-sm btn-primary">添加</button>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('body').append($(tmpHTMLStr));
    $('#modal_NewRoom').on('hidden.bs.modal', function (e) {
        $('#modal_Class_New').modal('show');
    })
}

function formatData_Class() {
    var data = [
        {
            symbol: 'B_01_001',
            level: {
                id: '1',
                name: '初级'
            },
            teacher: {
                id: '1',
                name: '教员 1'
            },
            room: {
                id: '1',
                name: '教室 1'
            },
            startdate: '2017/10/10 ',
            amount: '10'
        }, {
            symbol: 'B_02_002',
            level: {
                id: '2',
                name: '中级'
            },
            teacher: {
                id: '3',
                name: '教员 3'
            },
            room: {
                id: '3',
                name: '教室 3'
            },
            startdate: '2017/12/12 ',
            amount: '12'
        }, {
            symbol: 'B_03_003',
            level: {
                id: '3',
                name: '高级'
            },
            teacher: {
                id: '2',
                name: '教员 2'
            },
            room: {
                id: '2',
                name: '教室 2'
            },
            startdate: '2017/11/11 ',
            amount: '13'
        }
    ];

    return data;
};

function buildDataHTML_Class() {
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
    var rspXML = "";
    var data = formatData_Class(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Class();
    buildDataHeaderHTML_Class();
    buildDataTableHTML_Class(data);
};

function buildDataTopHTML_Class() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Class() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">班级总览</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons_Class();
    //buildDataHeaderFields_Class();
};

function buildDataHeaderButtons_Class() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_NewClass_DataTB">创建班级</button>'));
    //$('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-warning" id="btn_DelClasses_DataTB" style="margin-left:10px;">批量删除</button>'));
    $('#btn_NewClass_DataTB').on('click',function(){
        showCreateNewClassPopup();
    })
};

function buildDataHeaderFields_Class() {
    var tmpHTMLStr = '<form class="form-inline">' +
    '   <div class="input-group">' +
    '       <input type="text" class="form-control  form-control-sm" id="data_" placeholder="Username">' +
    '       <button type="button" class="btn btn-sm btn-success">搜索</button>' +
    '   </div>' +
    '</form>';
    $('#container_DataHeader_Fields').append($(tmpHTMLStr));
};

function buildDataTableHTML_Class(data) {
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
    buildDataTableColHeaderHTML_Class();
    buildDataTableDataRowsHTML_Class(data);
};

function buildDataTableColHeaderHTML_Class() {
    var tmpHTMLStr = '<th style="width: 50px;"></th>' +
    '<th style="width: 80px;">操作</th>' +
    '<th>编号</th>' +
    '<th>级别</th>' +
    '<th>教员</th>' +
    '<th>教室</th>' +
    '<th>人数</th>' +
    '<th>开学时间</th>';
    $('#container_DataTable_Header').append($(tmpHTMLStr));
};

function buildDataTableDataRowsHTML_Class(data) {
    var count = data.length;
    var status = '';
    for (var i = 0; i < count; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-success btn-Class-Detail" data-target="' + data[i].symbol + '">明细</button>' +
        //'       <button type="button" class="btn btn-sm btn-warning btn-Class-Delete" data-target="' + data[i].symbol + '">删除</button>' +
        '   </td>' +
        '   <td>' + data[i].symbol + '</td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + data[i].teacher.name + '</td>' +
        '   <td>' + data[i].room.name + '</td>' +
        '   <td>' + data[i].amount + '</td>' +
        '   <td>' + data[i].startdate + '</td>'
        '</tr>';
        $('#container_DataTable_Rows').append($(tmpHTMLStr));
    }

    //$('.btn.btn-sm.btn-success.btn-Class-doc').on('click', openClassDoc);
    //$('.btn.btn-sm.btn-warning.btn-Class-wp').on('click', openWorkplatform);
};