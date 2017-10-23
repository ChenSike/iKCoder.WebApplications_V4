﻿'use strict';

function initPage() {
    _gRoleObj = _roleValue.teacher;
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
        '		<usr id="001" nickname="陈思克" last="2017-09-30 12:01:02"/>' +
        '	</basic>' +
        '</root>');
    var data = {
        id: '001',
        name: "陈思克",
        last: "2017-09-30 12:01:02"
    };
    buildUserInfoHTML(data);
    buildDataHTML_Lesson();
    initEvents();
};

function initEvents() {
    $('#menu_ClassBegin').on('click', function () {
        buildDataHTML_ClassBegin();
    });

    $('#menu_Lesson_All').on('click', function () {
        buildDataHTML_Lesson();
    });

    $('#menu_Lesson_Doc').on('click', function () {
        buildDataHTML_Docs();
    });

    $('#menu_Lesson_Scene').on('click', function () {
        buildDataHTML_Scene();
    });

    $('#menu_Homework').on('click', function () {
        buildDataHTML_HW();
    });

    $('#menu_Exam').on('click', function () {
        buildDataHTML_Exam();
    });

    $('#menu_Q_A').on('click', function () {
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

/*ClassBegin*/
function formatData_ClassBegin() {
    var data = [
        {
            datetime: '2017-10-10 10:00',
            room: 'Room 1',
            content: '变量 1 ',
            status: '0',
            symbol: 'B_01_001',
            grade: { id: 1, name: '初级1班' },
            custome: 1
        }, {
            datetime: '2017-10-10 14:00',
            room: 'Room 2',
            content: '变量 2',
            status: '1',
            symbol: 'B_01_001',
            grade: { id: 1, name: '中级2班' }
        }
    ];

    return data;
};

function buildDataHTML_ClassBegin() {
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
    var data = formatData_ClassBegin(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_ClassBegin();
    buildDataHeaderHTML_ClassBegin();
    buildDataTableHTML_ClassBegin(data);
};

function buildDataTopHTML_ClassBegin() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_ClassBegin() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">课程表</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_ClassBegin(data) {
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
    buildDataTableColHeaderHTML_ClassBegin();
    buildDataTableDataRowsHTML_ClassBegin(data);
};

function buildDataTableColHeaderHTML_ClassBegin() {
    var tmpHTMLStr = '<th style="width: 45px;"></th>' +
    '<th style="width: 260px;">操作</th>' +
    '<th>时间</th>' +
    '<th>班级</th>' +
    '<th>教室</th>' +
    '<th>编号</th>' +
    '<th>内容</th>' +
    '<th>上课</th>';
    $('#container_DataTable_Header').append($(tmpHTMLStr));
};

function buildDataTableDataRowsHTML_ClassBegin(data) {
    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-classbegin-doc" data-target="' + data[i].symbol + '">教案</button>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-warning btn-classbegin-wp" data-target="' + data[i].symbol + '">课件</button>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-info btn-classbegin-signin" data-target="' + data[i].symbol + '">签到</button>');
        if (typeof (data[i].custome) != 'undefined' && data[i].custome > 0) {
            tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-primary btn-classbegin-custom" data-target="' + data[i].symbol + '">自定义教案</button>');
        }

        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data[i].datetime + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].grade.name + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].room + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].content + '</td>');
        tmpHTMLStr.push('   <td><button type="button" class="btn btn-sm btn-primary btn-classbegin-begin" data-target="' + data[i].symbol + '">上课</button></td>');
        tmpHTMLStr.push('</tr>');
        $('#container_DataTable_Rows').append($(tmpHTMLStr.join('')));
    }

    $('.btn.btn-sm.btn-success.btn-classbegin-doc').on('click', openLessonDoc);
    $('.btn.btn-sm.btn-warning.btn-classbegin-wp').on('click', openWorkplatform);
    $('.btn.btn-sm.btn-info.btn-classbegin-signin').on('click', showStudentsSignIn);
    $('.btn.btn-sm.btn-primary.btn-classbegin-begin').on('click', function () {
        var parentTd = $(arguments[0].target).parent();
        parentTd.empty();
        parentTd.append($('<span>已开始</span>'));
    });
};

function showStudentsSignIn() {
    var tmpHTMLStr = [];
    if ($('#modal_ClassBegin_SignIn').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_ClassBegin_SignIn" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">签到情况</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <div class="row">');
        tmpHTMLStr.push('                       <div class="col-12">');
        tmpHTMLStr.push('                           <table class="table table-striped">');
        tmpHTMLStr.push('                               <thead>');
        tmpHTMLStr.push('                                   <tr id="th_DataTable_Header_ClassBegin_SignIn">');
        tmpHTMLStr.push('                                       <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                                       <th>学员</th>');
        tmpHTMLStr.push('                                       <th style="width: 60px;">签到</th>');
        tmpHTMLStr.push('                                   </tr>');
        tmpHTMLStr.push('                               </thead>');
        tmpHTMLStr.push('                               <tbody id="tb_DataTable_Body_ClassBegin_SignIn"></tbody>');
        tmpHTMLStr.push('                           </table>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    var data = [
        { id: '1', name: '学员 1', signin: 1 },
        { id: '2', name: '学员 2', signin: 1 },
        { id: '3', name: '学员 3', signin: 1 },
        { id: '4', name: '学员 4', signin: 1 },
        { id: '5', name: '学员 5', signin: 0 },
        { id: '6', name: '学员 6', signin: 1 },
        { id: '7', name: '学员 7', signin: 0 },
        { id: '8', name: '学员 8', signin: 1 },
        { id: '9', name: '学员 9', signin: 1 },
        { id: '10', name: '学员 10', signin: 0 }
    ];

    $('#tb_DataTable_Body_ClassBegin_SignIn').empty();
    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td style="text-align: center;">');
        tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
        if (data[i].signin == 1) {
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-success"></span>');
        } else {
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-warning"></span>');
        }

        tmpHTMLStr.push('       </label>');
        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('</tr>');
        $('#tb_DataTable_Body_ClassBegin_SignIn').append($(tmpHTMLStr.join('')));
    }

    $('#modal_ClassBegin_SignIn').modal('show');
};

/*Lesson*/
function formatData_Lesson() {
    var data = [
        {
            datetime: '2017-10-10 10:00',
            room: 'Room 1',
            content: '变量 1 ',
            status: '0',
            symbol: 'B_01_001',
            custome: 1
        }, {
            datetime: '2017-10-11 11:00',
            room: 'Room 2',
            content: '变量 2',
            status: '1',
            symbol: 'B_01_001'
        }, {
            datetime: '2017-10-12 12:00',
            room: 'Room 3',
            content: '变量 3',
            status: '0',
            symbol: 'B_01_001',
            custome: 2
        }, {
            datetime: '2018-01-10 13:00',
            room: 'Room 4',
            content: '变量 4',
            status: '1',
            symbol: 'B_01_001'
        }, {
            datetime: '2018-01-12 14:00',
            room: 'Room 5',
            content: '变量 5',
            status: '0',
            symbol: 'B_01_001'
        }
    ];

    return data;
};

function buildDataHTML_Lesson() {
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
    var data = formatData_Lesson(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Lesson();
    buildDataHeaderHTML_Lesson();
    buildDataTableHTML_Lesson(data);
};

function buildDataTopHTML_Lesson() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Lesson() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">课程表</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    //buildDataHeaderButtons_Lesson();
    //buildDataHeaderFields_Lesson();
};

function buildDataHeaderButtons_Lesson() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">添加教员</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">批量删除</button>'));
};

function buildDataHeaderFields_Lesson() {
    var tmpHTMLStr = '<form class="form-inline">' +
    '   <div class="input-group">' +
    '       <input type="text" class="form-control  form-control-sm" id="data_" placeholder="Username">' +
    '       <button type="button" class="btn btn-sm btn-success">搜索</button>' +
    '   </div>' +
    '</form>';
    $('#container_DataHeader_Fields').append($(tmpHTMLStr));
};

function buildDataTableHTML_Lesson(data) {
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
    buildDataTableColHeaderHTML_Lesson();
    buildDataTableDataRowsHTML_Lesson(data);
};

function buildDataTableColHeaderHTML_Lesson() {
    var tmpHTMLStr = '<th style="width: 50px;"></th>' +
    '<th style="width: 210px;">操作</th>' +
    '<th>时间</th>' +
    '<th>教室</th>' +
    '<th>编号</th>' +
    '<th>内容</th>' +
    '<th>状态</th>';
    $('#container_DataTable_Header').append($(tmpHTMLStr));
};

function buildDataTableDataRowsHTML_Lesson(data) {
    var count = data.length;
    var status = '';
    for (var i = 0; i < count; i++) {
        status = (data[i].status == '0' ? '未完成' : '已完成');
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-lesson-doc" data-target="' + data[i].symbol + '">教案</button>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-warning btn-lesson-wp" data-target="' + data[i].symbol + '">课件</button>');
        if (typeof (data[i].custome) != 'undefined' && data[i].custome > 0) {
            tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-primary btn-lesson-custom" data-target="' + data[i].symbol + '">自定义教案</button>');
        }

        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data[i].datetime + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].room + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].content + '</td>');
        tmpHTMLStr.push('   <td>' + status + '</td>');
        tmpHTMLStr.push('</tr>');
        $('#container_DataTable_Rows').append($(tmpHTMLStr.join('')));
    }

    $('.btn.btn-sm.btn-success.btn-lesson-doc').on('click', openLessonDoc);
    $('.btn.btn-sm.btn-warning.btn-lesson-wp').on('click', openWorkplatform);
};

/*DOC*/
var _currentDocsData = [];
function formatData_Doc() {
    _currentDocsData = [
        {
            id: '1',
            level: '初级',
            items: [
                {
                    id: '01',
                    content: '初级 1 ',
                    symbol: 'B_01_001',
                    custome: 1
                }, {
                    id: '02',
                    content: '初级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '03',
                    content: '初级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '04',
                    content: '初级 4',
                    symbol: 'B_01_001'
                }, {
                    id: '05',
                    content: '初级 5',
                    symbol: 'B_01_001',
                    custome: 1
                }
            ]
        }, {
            id: '2',
            level: '中级',
            items: [
                {
                    id: '06',
                    content: '中级 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '07',
                    content: '中级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '08',
                    content: '中级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '09',
                    content: '中级 4',
                    symbol: 'B_01_001'
                }
            ]
        }, {
            id: '3',
            level: '高级',
            items: [
                {
                    id: '10',
                    content: '高级 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '12',
                    content: '高级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '13',
                    content: '高级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '14',
                    content: '高级 4',
                    symbol: 'B_01_001'
                }
            ]
        }, {
            id: '4',
            level: '拓展',
            items: [
                {
                    id: '21',
                    content: '拓展 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '22',
                    content: '拓展 2',
                    symbol: 'B_01_001'
                }, {
                    id: '23',
                    content: '拓展 3',
                    symbol: 'B_01_001'
                }, {
                    id: '24',
                    content: '拓展 4',
                    symbol: 'B_01_001'
                }, {
                    id: '25',
                    content: '拓展 5',
                    symbol: 'B_01_001'
                }
            ]
        }
    ];
};

function buildDataHTML_Docs() {
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
    formatData_Doc(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Doc();
    buildDataHeaderHTML_Doc();
    buildDataTableHTML_Doc();
};

function buildDataTopHTML_Doc() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Doc() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">教案库</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons_Doc();
};

function buildDataHeaderButtons_Doc() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_DOC_Create_Custom">自定义教案</button>'));
    $('#btn_DOC_Create_Custom').on('click', function () {
        showCreateCustomDocPopup();
    });
};

function buildDataTableHTML_Doc() {
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_Doc_Level" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    for (var i = 0; i < _currentDocsData.length; i++) {
        headerId = 'hd_Doc_Level_' + _currentDocsData[i].id;
        collapseId = 'collapse_Doc_Level_' + _currentDocsData[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('            <h5 class="mb-0">');
        tmpHTMLStr.push('                <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + _currentDocsData[i].level + '</a>');
        tmpHTMLStr.push('            </h5>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse show" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Doc_Level">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('               <table class="table table-striped">');
        tmpHTMLStr.push('                   <thead>');
        tmpHTMLStr.push('                       <tr id="container_DataTable_Header">');
        tmpHTMLStr.push('                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                           <th style="width: 200px;">操作</th>');
        tmpHTMLStr.push('                           <th>编号</th>');
        tmpHTMLStr.push('                           <th>内容</th>');
        tmpHTMLStr.push('                       </tr>');
        tmpHTMLStr.push('                   </thead>');
        tmpHTMLStr.push('                   <tbody id="container_DataTable_Rows">');
        buildDataTableDataRowsHTML_Doc(_currentDocsData[i].items, tmpHTMLStr);
        tmpHTMLStr.push('                   </tbody>');
        tmpHTMLStr.push('               </table>');

        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#container_Datas').css('overflow', 'auto');
    $('#container_Datas').height($('#wrap_LeftBar').height());
    $('.btn.btn-sm.btn-success.btn-doc-open').on('click', openLessonDoc);
};

function buildDataTableDataRowsHTML_Doc(data, tmpHTMLStr) {
    var count = data.length;
    for (var i = 0; i < count; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-doc-open" data-target="' + data[i].id + '">打开</button>');
        if (typeof (data[i].custome) != 'undefined' && data[i].custome > 0) {
            tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-info btn-doc-custome" data-target="' + data[i].id + '">自定义教案</button>');
        }

        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].content + '</td>');
        tmpHTMLStr.push('</tr>');
    }
};

function showCreateCustomDocPopup() {
    var tmpHTMLStr = [];
    if ($('#modal_DOC_CreateCustom').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_DOC_CreateCustom" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">自定义教案</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="sel_DOC_Create_Course" class="col-form-label">对应课程</label>');
        tmpHTMLStr.push('                               <select class="form-control form-control-sm" id="sel_DOC_Create_Course"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="sel_DOC_Create_Template" class="col-form-label">教案模板</label>');
        tmpHTMLStr.push('                               <select class="form-control form-control-sm" id="sel_DOC_Create_Template"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="btn_DOC_Create_Progress" class="col-form-label">&nbsp;</label>');
        tmpHTMLStr.push('                               <button type="button" class="btn btn-primary btn-sm form-control" id="btn_DOC_Create_Progress">流程指引</button>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('                   <div class="row">');
        tmpHTMLStr.push('                       <div class="form-group col-12">');
        tmpHTMLStr.push('                           <div class="file-loading">');
        tmpHTMLStr.push('                               <label for="input-b9" class="col-form-label">上传教案</label>');
        tmpHTMLStr.push('                               <input id="input-b9" name="input-b9[]" multiple type="file">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $("#input-b9").fileinput({
            uploadUrl: "index.html",
            allowedFileExtensions: ["jpg", "png", "gif"],
            maxImageWidth: 2000,
            maxFileCount: -1,
            resizeImage: true
        }).on('filepreupload', function () {
            $('#kv-success-box').html('');
        }).on('fileuploaded', function (event, data) {
            $('#kv-success-box').append(data.response.link);
            $('#kv-success-modal').modal('show');
        });
    }

    $('#modal_DOC_CreateCustom').modal('show');
};
/*Scene*/
var _currentSceneData = [];
function formatData_Scene() {
    _currentSceneData = [
        {
            id: '1',
            level: '初级',
            items: [
                {
                    id: '01',
                    content: '初级 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '02',
                    content: '初级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '03',
                    content: '初级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '04',
                    content: '初级 4',
                    symbol: 'B_01_001'
                }, {
                    id: '05',
                    content: '初级 5',
                    symbol: 'B_01_001'
                }
            ]
        }, {
            id: '2',
            level: '中级',
            items: [
                {
                    id: '06',
                    content: '中级 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '07',
                    content: '中级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '08',
                    content: '中级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '09',
                    content: '中级 4',
                    symbol: 'B_01_001'
                }
            ]
        }, {
            id: '3',
            level: '高级',
            items: [
                {
                    id: '10',
                    content: '高级 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '12',
                    content: '高级 2',
                    symbol: 'B_01_001'
                }, {
                    id: '13',
                    content: '高级 3',
                    symbol: 'B_01_001'
                }, {
                    id: '14',
                    content: '高级 4',
                    symbol: 'B_01_001'
                }
            ]
        }, {
            id: '4',
            level: '拓展',
            items: [
                {
                    id: '21',
                    content: '拓展 1 ',
                    symbol: 'B_01_001'
                }, {
                    id: '22',
                    content: '拓展 2',
                    symbol: 'B_01_001'
                }, {
                    id: '23',
                    content: '拓展 3',
                    symbol: 'B_01_001'
                }, {
                    id: '24',
                    content: '拓展 4',
                    symbol: 'B_01_001'
                }, {
                    id: '25',
                    content: '拓展 5',
                    symbol: 'B_01_001'
                }
            ]
        }
    ];
};

function buildDataHTML_Scene() {
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
    formatData_Scene(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Scene();
    buildDataHeaderHTML_Scene();
    buildDataTableHTML_Scene();
};

function buildDataTopHTML_Scene() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Scene() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">课件库</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    //buildDataHeaderButtons_Lesson();
    //buildDataHeaderFields_Lesson();
};

function buildDataHeaderButtons_Scene() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">添加教员</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success">批量删除</button>'));
};

function buildDataHeaderFields_Scene() {
    var tmpHTMLStr = '<form class="form-inline">' +
    '   <div class="input-group">' +
    '       <input type="text" class="form-control  form-control-sm" id="data_" placeholder="Username">' +
    '       <button type="button" class="btn btn-sm btn-success">搜索</button>' +
    '   </div>' +
    '</form>';
    $('#container_DataHeader_Fields').append($(tmpHTMLStr));
};

function buildDataTableHTML_Scene() {
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_Scene_Level" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    for (var i = 0; i < _currentSceneData.length; i++) {
        headerId = 'hd_Scene_Level_' + _currentSceneData[i].id;
        collapseId = 'collapse_Scene_Level_' + _currentSceneData[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('            <h5 class="mb-0">');
        tmpHTMLStr.push('                <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + _currentSceneData[i].level + '</a>');
        tmpHTMLStr.push('            </h5>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse show" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Scene_Level">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('               <table class="table table-striped">');
        tmpHTMLStr.push('                   <thead>');
        tmpHTMLStr.push('                       <tr id="container_DataTable_Header">');
        tmpHTMLStr.push('                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                           <th style="width: 120px;">操作</th>');
        tmpHTMLStr.push('                           <th>编号</th>');
        tmpHTMLStr.push('                           <th>内容</th>');
        tmpHTMLStr.push('                       </tr>');
        tmpHTMLStr.push('                   </thead>');
        tmpHTMLStr.push('                   <tbody id="container_DataTable_Rows">');
        buildDataTableDataRowsHTML_Scene(_currentSceneData[i].items, tmpHTMLStr);
        tmpHTMLStr.push('                   </tbody>');
        tmpHTMLStr.push('               </table>');

        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#container_Datas').css('overflow', 'auto');
    $('#container_Datas').height($('#wrap_LeftBar').height());
    $('.btn.btn-sm.btn-success.btn-scene-open').on('click', openWorkplatform);
};

function buildDataTableDataRowsHTML_Scene(data, tmpHTMLStr) {
    var count = data.length;
    for (var i = 0; i < count; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-scene-open" data-target="' + data[i].symbol + '">打开</button>');
        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].content + '</td>');
        tmpHTMLStr.push('</tr>');
    }
};

/*Homework*/
function formatData_HW() {
    var data = [
        {
            id: '1',
            name: '初级1班'
        }, {
            id: '2',
            name: '初级2班'
        }, {
            id: '3',
            name: '中级1班'
        }, {
            id: '4',
            name: '高级1班'
        }
    ];

    return data;
};

function buildDataHTML_HW() {
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
    var data = formatData_HW(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_HW();
    buildDataHeaderHTML_HW();
    buildDataTableHTML_HW(data);
};

function buildDataTopHTML_HW() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_HW() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">作业管理</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons_HW();
};

function buildDataHeaderButtons_HW() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_HW_ShowByClass" style="margin-right: 10px;">按班级查看</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_HW_ShowByDate">按日期查看</button>'));
    $('#btn_HW_ShowByClass').on('click', function () {
        alert('按班级分组显示作业');
    });

    $('#btn_HW_ShowByDate').on('click', function () {
        alert('按日期分组显示作业');
    });
};

function buildDataTableHTML_HW(data) {
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_HW_Class" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    var cardblockId = '';
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_HW_Class_' + data[i].id;
        collapseId = 'collapse_HW_Class_' + data[i].id;
        cardblockId = 'cardblock_HW_Class_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('            <h5 class="mb-0">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-success btn-HW-class-assign-homework" style="margin-right: 20px;" data-target="' + data[i].id + '">布置作业</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-info btn-HW-class-assign-experiment" style="margin-right: 20px;" data-target="' + data[i].id + '">实验作业</button>');
        tmpHTMLStr.push('                <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">');
        tmpHTMLStr.push(data[i].name);
        tmpHTMLStr.push('                </a>');
        tmpHTMLStr.push('            </h5>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-homework-class" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_HW_Class" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('            <div class="card-block" id="' + cardblockId + '">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#container_Datas').css('overflow', 'auto');
    $('#container_Datas').height($('#wrap_LeftBar').height());
    $('.collapse.collapse-homework-class').on('show.bs.collapse', function () {
        if ($(arguments[0].target).hasClass('collapse-homework-class')) {
            var classId = $(arguments[0].target).attr('data-target');
            loadHomeworkListByClass(classId);
        }
    });

    $('.btn-HW-class-assign-experiment').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        showAssignHWExpPopup(classId);
    });

    $('.btn-HW-class-assign-homework').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        showAssignHWPopup(classId);
    });
};

function loadHomeworkListByClass(classId) {
    var data = [
        {
            id: '1',
            date: '2017-10-1',
            title: '作业 1',
            complete: 8,
            uncomplete: 2,
            accuracy: 80
        }, {
            id: '2',
            date: '2017-10-3',
            title: '作业 2',
            complete: 10,
            uncomplete: 0,
            accuracy: 100
        }, {
            id: '3',
            date: '2017-10-4',
            title: '作业 3',
            complete: 6,
            uncomplete: 4,
            accuracy: 50
        }
    ];

    $('#cardblock_HW_Class_' + classId).empty();
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_HW_Class_Items" style="font-size:14px;" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_HW_Class_Items_' + data[i].id;
        collapseId = 'collapse_HW_Class_Items_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" style="padding:5px 20px;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('           <div class="container-fluid">');
        tmpHTMLStr.push('               <div class="row">');
        tmpHTMLStr.push('                   <div class="col" style="font-weight:bold; line-height:30px;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('                   <div class="col">');
        tmpHTMLStr.push('                       <h5 class="mb-0" style="line-height:30px;">');
        tmpHTMLStr.push('                           <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].date + '</a>');
        tmpHTMLStr.push('                       </h5>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" style="line-height:30px;">' + data[i].title + '</div>');
        tmpHTMLStr.push('                   <div class="col" title="已完成">');
        tmpHTMLStr.push('                       <i class="fa fa-check" style="line-height:30px;">');
        tmpHTMLStr.push('                           <span class="span-homework-class-item-complete" data-target="' + data[i].id + '">' + data[i].complete + '</span>');
        tmpHTMLStr.push('                       </i>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" title="未完成"><i class="fa fa-question" style="line-height:30px;"><span class="span-homework-class-item-uncomplete" data-target="' + data[i].id + '">' + data[i].uncomplete + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="正确率"><i class="fa fa-percent" style="line-height:30px;"><span>' + data[i].accuracy + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col"><button type="button" class="btn btn-primary btn-sm btn-homework-class-item" data-target="' + data[i].id + '">查看详情</button></div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-homework-class-items" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_HW_Class_Items" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#cardblock_HW_Class_' + classId).append($(tmpHTMLStr.join('')));
    $('.collapse.collapse-homework-class-items').on('show.bs.collapse', function () {
        var target = $(arguments[0].target);
        var homeworkId = target.attr('data-target');
        loadHomeworkItemsById(homeworkId);
    })

    $('.span-homework-class-item-complete').on('mouseenter', function () {
        showHWClassifyMembers('C', $(arguments[0].target));
    });

    $('.span-homework-class-item-complete').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-homework-class-item-uncomplete').on('mouseenter', function () {
        showHWClassifyMembers('U', $(arguments[0].target));
    });

    $('.span-homework-class-item-uncomplete').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.btn.btn-primary.btn-sm.btn-homework-class-item').on('click', function () {
        showHomeworkClassItemPopup($(arguments[0].target).attr('data-target'));
    });
};

function loadHomeworkItemsById(homeworkId) {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            correct: ['1'],
            options: [
                { id: '1', content: 'Option 1', selected: 6 },
                { id: '2', content: 'Option 2', selected: 3 },
                { id: '3', content: 'Option 3', selected: 4 }
            ],
            right: 8,
            wrong: 0
        }, {
            id: '2',
            content: 'Objective Questions 2',
            correct: ['5', '6'],
            options: [
                { id: '4', content: 'Option 4', selected: 1 },
                { id: '5', content: 'Option 5', selected: 8 },
                { id: '6', content: 'Option 6', selected: 7 }
            ],
            right: 7,
            wrong: 1
        }, {
            id: '3',
            content: 'Objective Questions 3',
            correct: ['25'],
            options: [
                { id: '24', content: 'Option 24', selected: 1 },
                { id: '25', content: 'Option 25', selected: 2 },
                { id: '26', content: 'Option 26', selected: 8 }
            ],
            right: 6,
            wrong: 2
        }, {
            id: '4',
            content: 'Objective Questions 4',
            correct: ['7', '8', '9', '10'],
            options: [
                { id: '7', content: 'Option 7', selected: 5 },
                { id: '8', content: 'Option 8', selected: 5 },
                { id: '9', content: 'Option 9', selected: 6 },
                { id: '10', content: 'Option 10', selected: 8 }
            ],
            right: 5,
            wrong: 3
        }, {
            id: '5',
            content: 'Objective Questions 5',
            correct: ['12'],
            options: [
                { id: '11', content: 'Option 11', selected: 0 },
                { id: '12', content: 'Option 12', selected: 8 },
                { id: '13', content: 'Option 13', selected: 0 }
            ],
            right: 8,
            wrong: 0
        }
    ];

    $('#collapse_HW_Class_Items_' + homeworkId + ' .card-block').empty();
    var tmpHTMLArr = ['<table class="table table-striped">'];
    tmpHTMLArr.push('   <tbody>');
    var tmpChecked = false;
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px; ">【' + (i + 1) + '】</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:14px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;"><i class="fa fa-check"><span class="span-homework-class-items-item-right">' + data[i].right + '</span></i></td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;"><i class="fa fa-remove"><span class="span-homework-class-items-item-wrong">' + data[i].wrong + '</span></i></td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;" colspan="3">');
        tmpHTMLArr.push('                       <form>');
        tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_homework_item_' + homeworkId + '_' + data[i].id + '" style="margin:0px;">');
        for (var j = 0; j < data[i].options.length; j++) {
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px; width:100%">');
            tmpChecked = false;
            for (var k = 0; k < data[i].correct.length; k++) {
                if (data[i].correct[k] == data[i].options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }
            tmpHTMLArr.push('                                   <table style="border: none; width:100%;">');
            tmpHTMLArr.push('                                       <tbody style="border: none;">');
            tmpHTMLArr.push('                                           <tr style="background-color: transparent;">');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px; width: 30px;"><input type="checkbox" class="form-check-input" value="' + data[i].options[j].id + '" disabled ' + (tmpChecked ? 'checked' : '') + '/></td>');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px;"><span style="padding-left:10px;">' + data[i].options[j].content + '</span></td>');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px; width: 150px;">');
            tmpHTMLArr.push('                                                   <span>选择此项的有');
            tmpHTMLArr.push('                                                       <b class="span-homework-class-items-item-selected" style="color:rgb(57,101,222); cursor:pointer; text-decoration:underline;" data-target="' + data[i].id + '|' + data[i].options[j].id + '">');
            tmpHTMLArr.push(data[i].options[j].selected);
            tmpHTMLArr.push('                                               </b>人');
            tmpHTMLArr.push('                                                   </span>');
            tmpHTMLArr.push('                                               </td>');
            tmpHTMLArr.push('                                           </tr>');
            tmpHTMLArr.push('                                       </tbody>');
            tmpHTMLArr.push('                                   </table>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                       </form>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');

    $('#collapse_HW_Class_Items_' + homeworkId + ' .card-block').append($(tmpHTMLArr.join('')));

    $('.span-homework-class-items-item-right').on('mouseenter', function () {
        showHWClassifyMembers('R', $(arguments[0].target));
    });

    $('.span-homework-class-items-item-right').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-homework-class-items-item-wrong').on('mouseenter', function () {
        showHWClassifyMembers('W', $(arguments[0].target));
    });

    $('.span-homework-class-items-item-wrong').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-homework-class-items-item-selected').on('mouseenter', function () {
        showHWClassifyMembers('S', $(arguments[0].target));
    });

    $('.span-homework-class-items-item-selected').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });
};

function showHWClassifyMembers(classify, target) {
    var tipWrap = $('.tooltip.tooltip-left.homework-class-items');
    var itemId = $(arguments[0].target).attr('data-target');
    var tipContainer = $('.tooltip.tooltip-left.homework-class-items .container-fluid');
    tipWrap.attr('data-classify', classify);
    var data = [];
    switch (classify) {
        case 'C':
            data = ['已完成同学 1', '已完成同学 2', '已完成同学 3', '已完成同学 4', '已完成同学 5', '已完成同学 6', '已完成同学 7', '已完成同学 8'];
            break;
        case 'U':
            data = ['未完成同学 1', '未完成同学 2'];
            break;
        case 'R':
            data = ['正确的同学 1', '正确的同学 2', '正确的同学 3', '正确的同学 4', '正确的同学 5', '正确的同学 6', '正确的同学 7', '正确的同学 8'];
            break;
        case 'W':
            data = ['错误的同学 1', '错误的同学 2'];
            break;
        case 'S':
            data = ['选择的同学 1', '选择的同学 2', '选择的同学 3', '选择的同学 4', '选择的同学 5'];
            break;
    }

    tipWrap.css('left', target.offset().left + 15 + 'px');
    tipWrap.css('top', target.offset().top + 15 + 'px');
    tipWrap.css('opacity', '0.9');
    tipContainer.empty();
    tipContainer.append($('<div style="font-family: 微软雅黑; font-size: 12px; padding:10px; line-height:20px;">' + data.join('</br>') + '</div>'));
    tipWrap.show();
    //tipWrap.show('fase', function () {        
    //    if ($(this).attr('data-classify') != 'C' && $(this).attr('data-classify') != 'U') {
    //        //$(this).css('left', target.offset().left - $(this).width() + 'px');
    //    }
    //});
};

function showHomeworkClassItemPopup(homeworkId) {
    var data = [
        {
            id: '1',
            name: '学员 1',
            right: 8,
            wrong: 0,
            uncomplete: 0
        }, {
            id: '2',
            name: '学员 2',
            right: 7,
            wrong: 0,
            uncomplete: 1
        }, {
            id: '3',
            name: '学员 3',
            right: 5,
            wrong: 3,
            uncomplete: 0
        }, {
            id: '4',
            name: '学员 4',
            right: 6,
            wrong: 1,
            uncomplete: 1
        }, {
            id: '5',
            name: '学员 5',
            right: 0,
            wrong: 0,
            uncomplete: 8
        }
    ];

    buildHomeworkClassItemPopup(data, homeworkId);
    $('#modal_HW_Class_Item_Detail').modal('show');
};

function buildHomeworkClassItemPopup(data, homeworkId) {
    var tmpHTMLStr = [];
    if ($('#modal_HW_Class_Item_Detail').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_HW_Class_Item_Detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">作业详情</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    var container = $('#modal_HW_Class_Item_Detail .modal-body');
    container.empty();
    tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_HW_Class_Items_Detail" style="font-size:14px;" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    var percent = 0;
    for (var i = 0; i < data.length; i++) {
        percent = (data[i].right / (data[i].right + data[i].wrong + data[i].uncomplete) * 100).toFixed(2);
        headerId = 'hd_HW_Class_Items_Detail_' + data[i].id;
        collapseId = 'collapse_HW_Class_Items_Detail_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" style="padding:5px 20px;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('           <div class="container-fluid">');
        tmpHTMLStr.push('               <div class="row">');
        tmpHTMLStr.push('                   <div class="col" style="font-weight:bold; line-height:30px;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('                   <div class="col">');
        tmpHTMLStr.push('                       <h5 class="mb-0" style="line-height:30px;">');
        tmpHTMLStr.push('                           <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].name + '</a>');
        tmpHTMLStr.push('                       </h5>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" title="正确"><i class="fa fa-check" style="line-height:30px;"><span>' + data[i].right + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="错误"><i class="fa fa-remove" style="line-height:30px;"><span>' + data[i].wrong + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="未完成"><i class="fa fa-question" style="line-height:30px;"><span>' + data[i].uncomplete + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="正确率"><span style="font-weight:bold; line-height:30px; color:#2955ce; padding-right:5px;">' + percent + '</span><i class="fa fa-percent" style="color:#2955ce;"></i></div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-homework-class-items-detail" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_HW_Class_Items_Detail" data-target="' + data[i].id + '|' + homeworkId + '">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    container.append($(tmpHTMLStr.join('')));

    $('.collapse.collapse-homework-class-items-detail').on('show.bs.collapse', function () {
        var tmpId = $(arguments[0].target).attr('data-target').split('|');
        var cardblock = $('#' + $(arguments[0].target).attr('id') + ' .card-block');
        loadHWItemsByStudentAndId(tmpId[0], tmpId[1], cardblock);
    })
};

function loadHWItemsByStudentAndId(studentId, homeworkId, cardblock) {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            correct: ['1'],
            options: [
                { id: '1', content: 'Option 1' },
                { id: '2', content: 'Option 2' },
                { id: '3', content: 'Option 3' }
            ],
            answer: ['1']
        }, {
            id: '2',
            content: 'Objective Questions 2',
            correct: ['5', '6'],
            options: [
                { id: '4', content: 'Option 4' },
                { id: '5', content: 'Option 5' },
                { id: '6', content: 'Option 6' }
            ],
            answer: ['5']
        }, {
            id: '3',
            content: 'Objective Questions 3',
            correct: ['25'],
            options: [
                { id: '24', content: 'Option 24' },
                { id: '25', content: 'Option 25' },
                { id: '26', content: 'Option 26' }
            ],
            answer: ['25']
        }, {
            id: '4',
            content: 'Objective Questions 4',
            correct: ['7', '8', '9', '10'],
            options: [
                { id: '7', content: 'Option 7' },
                { id: '8', content: 'Option 8' },
                { id: '9', content: 'Option 9' },
                { id: '10', content: 'Option 10' }
            ],
            answer: []
        }, {
            id: '5',
            content: 'Objective Questions 5',
            correct: ['12'],
            options: [
                { id: '11', content: 'Option 11' },
                { id: '12', content: 'Option 12' },
                { id: '13', content: 'Option 13' }
            ],
            answer: []
        }, {
            id: '6',
            content: 'Objective Questions 6',
            correct: ['14', '16'],
            options: [
                { id: '14', content: 'Option 14' },
                { id: '15', content: 'Option 15' },
                { id: '16', content: 'Option 16' },
                { id: '17', content: 'Option 17' }
            ],
            answer: []
        }
    ];
    var tmpHTMLArr = [];
    var tHeader = '';
    var chkName = '';
    var chkId = '';
    var checkAnswer = false;
    var tmpChecked = false;
    tmpHTMLArr.push('<table class="table table-striped">');
    tmpHTMLArr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tHeader = '';
        checkAnswer = false;
        if (data[i].answer.length == 0) {
            tHeader = '<i class="fa fa-question profile-homework-top-symbol uncomplete" id="i_status_homework_class_item_detail_' + homeworkId + '_' + data[i].id + '"></i>';
        } else {
            checkAnswer = checkAnswersDo(data[i].answer, data[i].correct);
            if (checkAnswer) {
                tHeader = '<i class="fa fa-check profile-homework-top-symbol complete" id="i_status_homework_class_item_detail_' + homeworkId + '_' + data[i].id + '"></i>';
            } else {
                tHeader = '<i class="fa fa-remove profile-homework-top-symbol incorrect" id="i_status_homework_class_item_detail_' + homeworkId + '_' + data[i].id + '"></i>';
            }
        }

        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none; width:50px; ">' + (i + 1) + '</th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:15px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('                   <td class="td-text-homework-class-item-detail-ability" style="padding: 5px 10px;border: none; width:120px; color:rgb(234,85,21); cursor:pointer;" data-target="' + data[i].id + '">【相关知识】</td>');
        tmpHTMLArr.push('                   <td class="td-text-homework-class-item-detail-correct-answer" style="padding: 5px 10px;border: none; width:120px; color:rgb(34,139,34); cursor:pointer;" data-target="' + data[i].id + '">【正确答案】</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;">' + tHeader + '</td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;" col-spac="3">');
        tmpHTMLArr.push('                       <form>');
        tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_homework_item_detail_' + homeworkId + '_' + data[i].id + '" style="margin:0px;" disabled>');
        for (var j = 0; j < data[i].options.length; j++) {
            chkName = 'chk-homework-item-detail-' + homeworkId + '-' + data[i].id;
            chkId = 'chk_Homework_Item_detail_' + homeworkId + '_' + data[i].id + '_' + j;
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px;">');
            tmpChecked = false;
            for (var k = 0; k < data[i].answer.length; k++) {
                if (data[i].answer[k] == data[i].options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }

            if (tmpChecked) {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '" checked>');
            } else {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '">');
            }
            tmpHTMLArr.push('                                   <span style="padding-left:10px;">' + data[i].options[j].content + '</span>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                       </form>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    cardblock.empty();
    cardblock.append($(tmpHTMLArr.join('')));

    $('.td-text-homework-class-item-detail-correct-answer').on('mouseenter', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var tmpData = [];
        for (var i = 0; i < data.length; i++) {
            if (dataId == data[i].id) {
                for (var j = 0; j < data[i].correct.length; j++) {
                    for (var k = 0; k < data[i].options.length; k++) {
                        if (data[i].correct[j] == data[i].options[k].id) {
                            tmpData.push(data[i].options[k].content);
                            break;
                        }
                    }
                }

                break;
            }
        }

        showCorrectAnswer(tmpData, $(arguments[0].target));
    });

    $('.td-text-homework-class-item-detail-correct-answer').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items-detail-correct-answer').hide();
    });
};

function showCorrectAnswer(data, target) {
    var tipWrap = $('.tooltip.tooltip-left.homework-class-items-detail-correct-answer');
    var tipContainer = $('.tooltip.tooltip-left.homework-class-items-detail-correct-answer .container-fluid');
    tipWrap.css('left', target.offset().left + 15 + 'px');
    tipWrap.css('top', target.offset().top + 25 + 'px');
    tipWrap.css('opacity', '0.9');
    tipContainer.empty();
    var tmpHTMLArr = ['<ul class="list-group" style="font-size:13px;">'];
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<li class="list-group-item" style="padding: 0px 10px; text-align: left;">' + data[i] + '</li>');
    }

    tmpHTMLArr.push('</ul>');
    tipContainer.append($('<div style="font-family: 微软雅黑; font-size: 12px;">' + tmpHTMLArr.join('') + '</div>'));
    tipWrap.show();
    //tipWrap.show('fase', function () {        
    //    if ($(this).attr('data-classify') != 'C' && $(this).attr('data-classify') != 'U') {
    //        //$(this).css('left', target.offset().left - $(this).width() + 'px');
    //    }
    //});
}

function checkAnswersDo(answer, correct) {
    if (answer.length == 0) {
        return null;
    }

    var cCount = correct.length;
    for (var i = 0; i < correct.length; i++) {
        for (var j = 0; j < answer.length; j++) {
            if (answer[j] == correct[i]) {
                cCount--;
                break;
            }
        }
    }

    return (cCount == 0 ? true : false);
};

function showAssignHWExpPopup(classId) {
    var data = {
        id: '1',
        name: '初级1班',
        level: {
            id: '1',
            name: '初级'
        }
    };

    var tmpHTMLStr = [];
    if ($('#modal_HW_Class_Assign_HW_Exp').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_HW_Class_Assign_HW_Exp" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">布置作业</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class" class="col-form-label">班级</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_Class" value="' + data.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class_Type" class="col-form-label">类型</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_Class_Type" value="' + data.level.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Date" class="col-form-label">日期</label>');
        tmpHTMLStr.push('                               <input type="date" class="form-control  form-control-sm" id="txt_HW_Assign_Date" value="' + (new Date()).toLocaleDateString().replace(/\//g, '-') + '">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-12">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class" class="col-form-label">题目</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_Title">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-12">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class" class="col-form-label">内容</label>');
        tmpHTMLStr.push('                               <textarea class="form-control form-control-sm" id="txt_HW_Assign_Content" rows="10"></textarea>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    $('#modal_HW_Class_Assign_HW_Exp').modal('show');
};

function showAssignHWPopup(classId) {
    var data = {
        id: '1',
        name: '初级1班',
        level: {
            id: '1',
            name: '初级'
        }
    };

    var tmpHTMLStr = [];
    if ($('#modal_HW_Class_Assign_HW').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_HW_Class_Assign_HW" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">布置作业</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class" class="col-form-label">班级</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_Class" value="' + data.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Class_Type" class="col-form-label">类型</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_Class_Type" value="' + data.level.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_Date" class="col-form-label">日期</label>');
        tmpHTMLStr.push('                               <input type="date" class="form-control  form-control-sm" id="txt_HW_Assign_Date" value="' + (new Date()).toLocaleDateString().replace(/\//g, '-') + '">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col">');
        tmpHTMLStr.push('                               <table class="table" style="width: 300px;">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr style="text-align:left;">');
        tmpHTMLStr.push('                                           <th style="width: 50px; border:none;line-height:30px; padding: 0px;">已选</th>');
        tmpHTMLStr.push('                                           <th style="width: 50px; border:none;line-height:30px; padding: 0px; color:rgb(41,85,206);">10</th>');
        tmpHTMLStr.push('                                           <th style="width: 100px; border:none; padding: 0px;"><button type="button" class="btn btn-info btn-sm" id="btn_HW_Assign_AutoSelect">自动选题</button></th>');
        tmpHTMLStr.push('                                           <th style="width: 100px; border:none; padding: 0px;"><button type="button" class="btn btn-warning btn-sm" id="btn_HW_Assign_ManualSelect">人工选题</button></th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px; font-weight:bold;">题目 : </div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12">');
        tmpHTMLStr.push('                               <table class="table table-striped">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr id="th_DataTable_Header_HW_Assign_ItemList">');
        tmpHTMLStr.push('                                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                                           <th style="width: 50px;">');
        tmpHTMLStr.push('                                               <label class="custom-control custom-checkbox" style="vertical-align: bottom;">');
        tmpHTMLStr.push('                                                   <input type="checkbox" class="custom-control-input" id="chb_HW_Assign_AllSel">');
        tmpHTMLStr.push('                                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                               </label>');
        tmpHTMLStr.push('                                           </th>');
        tmpHTMLStr.push('                                           <th style="width: 120px;"><button type="button" class="btn btn-sm btn-danger" id="btn_HW_Assign_DelSel">批量删除</button></th>');
        tmpHTMLStr.push('                                           <th>难度</th>');
        tmpHTMLStr.push('                                           <th>内容</th>');
        tmpHTMLStr.push('                                           <th>知识点</th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                                   <tbody id="tb_DataTable_Body_HW_Assign_ItemList"></tbody>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_HW_Assign_AutoSelect').on('click', function () {
            alert('根据班级类型和课程状态自动从题库中筛选题目');
        });

        $('#btn_HW_Assign_ManualSelect').on('click', function () {
            showHWManualSelectPopup();
        });

        $('#btn_HW_Assign_DelSel').on('click', function () {
            var items = $('.chk-HW-assign-list-item');
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).prop('checked')) {
                    $(items[i]).parent().parent().parent().remove();
                }
            }
        });

        $('#chb_HW_Assign_AllSel').on('click', function () {
            if ($('#chb_HW_Assign_AllSel').prop('checked')) {
                $('.chk-HW-assign-list-item').prop('checked', true);
            } else {
                $('.chk-HW-assign-list-item').prop('checked', false);
            }
        });
    } else {
        $('#tb_DataTable_Body_HW_Assign_ItemList').empty();
    }

    $('#modal_HW_Class_Assign_HW').modal('show');
};

function addHWSubjectToList() {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '2',
            content: 'Objective Questions 2',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '3',
            content: 'Objective Questions 3',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '4',
            content: 'Objective Questions 4',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '5',
            content: 'Objective Questions 5',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }
    ];

    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td style="text-align: center;">' +
        '       <label class="custom-control custom-checkbox">' +
        '           <input type="checkbox" class="custom-control-input chk-HW-assign-list-item">' +
        '           <span class="custom-control-indicator"></span>' +
        '       </label>' +
        '   </td>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-danger btn-HW-assign-list-item-delete">删除</button>' +
        '       <button type="button" class="btn btn-sm btn-success btn-HW-assign-list-item-detail">详情</button>' +
        '   </td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + data[i].content + '</td>' +
        '   <td>' + data[i].point + '</td>' +
        '</tr>';

        $('#tb_DataTable_Body_HW_Assign_ItemList').append($(tmpHTMLStr));
    }

    $('.chk-HW-assign-list-item').on('click', function () {
        var items = $('.chk-HW-assign-list-item');
        var hasSel = false;
        var hasUnsel = false;
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).prop('checked')) {
                hasSel = true;
            } else {
                hasUnsel = true;
            }
        }

        $('#chb_HW_Assign_AllSel').prop('indeterminate', false);
        if (hasSel && hasUnsel) {
            $('#chb_HW_Assign_AllSel').prop('indeterminate', true);
        } else if (hasSel) {
            $('#chb_HW_Assign_AllSel').prop('checked', true);
        } else {
            $('#chb_HW_Assign_AllSel').prop('checked', false);
        }
    });

    $('.btn-HW-assign-list-item-delete').on('click', function () {
        $(arguments[0].target).parent().parent().remove();
    });

    $('.btn-HW-assign-list-item-detail').on('click', function () {
        alert('显示题目的详细信息');
    });
};

function showHWManualSelectPopup() {
    $('#modal_HW_Class_Assign_HW').modal('hide');
    var tmpHTMLStr = [];
    if ($('#modal_HW_Class_Assign_HW_ManualSelect').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_HW_Class_Assign_HW_ManualSelect" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">题目筛选</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px;">当前题库共有<b style="color:rgb(41,85,206);">1320019</b>道题目，请尽量缩小筛选范围。</div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_SubjectSel_Level" class="col-form-label">难度</label>');
        tmpHTMLStr.push('                               <select class="form-control form-control-sm" id="txt_HW_Assign_SubjectSel_Level"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_SubjectSel_Point" class="col-form-label">知识点</label>');
        tmpHTMLStr.push('                               <select class="form-control  form-control-sm" id="txt_HW_Assign_SubjectSel_Point"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_HW_Assign_SubjectSel_Keyword" class="col-form-label">关键字</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_HW_Assign_SubjectSel_Keyword" value="">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-2">');
        tmpHTMLStr.push('                               <button type="button" class="btn btn-primary btn-sm" id="btn_HW_Assign_SubjectSel_Search">开始筛选</button></th>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12" style="padding:10px 15px;">');
        tmpHTMLStr.push('                               <div class="progress">');
        tmpHTMLStr.push('                                   <div class="progress-bar progress-bar-striped progress-bar-animated" id="pb_HW_Assign_SubjectSel_Search" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>');
        tmpHTMLStr.push('                               </div>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px; font-weight:bold;">题目 : </div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12">');
        tmpHTMLStr.push('                               <table class="table table-striped">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr id="th_DataTable_Header_HW_Assign_SubjectSel">');
        tmpHTMLStr.push('                                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                                           <th style="width: 50px;">');
        tmpHTMLStr.push('                                               <label class="custom-control custom-checkbox" style="vertical-align: bottom;">');
        tmpHTMLStr.push('                                                   <input type="checkbox" class="custom-control-input" id="chb_HW_Assign_SubjectSel_AllSel">');
        tmpHTMLStr.push('                                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                               </label>');
        tmpHTMLStr.push('                                           </th>');
        tmpHTMLStr.push('                                           <th style="width: 120px;"><button type="button" class="btn btn-sm btn-danger" id="btn_HW_Assign_SubjectSel_DelSel">批量删除</button></th>');
        tmpHTMLStr.push('                                           <th>难度</th>');
        tmpHTMLStr.push('                                           <th>内容</th>');
        tmpHTMLStr.push('                                           <th>知识点</th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                                   <tbody id="tb_DataTable_Body_HW_Assign_SubjectSel"></tbody>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" id="btn_HW_Assign_SubjectSel_SubmitSel" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_HW_Assign_SubjectSel_Search').on('click', function () {
            var progress = $('#pb_HW_Assign_SubjectSel_Search');
            progress.attr('aria-valuenow', '0');
            progress.css('width', '0%');
            _gTimeoutSymbol = window.setTimeout('subjectProgress_HW();', 500);
            searchHWSubject();
        });

        $('#btn_HW_Assign_SubjectSel_SubmitSel').on('click', function () {
            $('#modal_HW_Class_Assign_HW_ManualSelect').modal('hide');
            addHWSubjectToList();
            $('#modal_HW_Class_Assign_HW').modal('show');
        });

        $('#chb_HW_Assign_SubjectSel_AllSel').on('click', function () {
            if ($('#chb_HW_Assign_SubjectSel_AllSel').prop('checked')) {
                $('.chk-HW-assign-subject-sel-result-item').prop('checked', true);
            } else {
                $('.chk-HW-assign-subject-sel-result-item').prop('checked', false);
            }
        });

        $('#btn_HW_Assign_SubjectSel_DelSel').on('click', function () {
            var items = $('.chk-HW-assign-subject-sel-result-item');
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).prop('checked')) {
                    $(items[i]).parent().parent().parent().remove();
                }
            }
        });
    }

    $('#modal_HW_Class_Assign_HW_ManualSelect').modal('show');
};

var _gTimeoutSymbol;
function subjectProgress_HW() {
    var progress = $('#pb_HW_Assign_SubjectSel_Search');
    var currentVal = parseInt(progress.attr('aria-valuenow'));
    if (currentVal == 100) {
        progress.attr('aria-valuenow', '0');
        progress.css('width', '0%');
    } else {
        progress.attr('aria-valuenow', currentVal + 5);
        progress.css('width', (currentVal + 5) + '%');
    }

    _gTimeoutSymbol = window.setTimeout('subjectProgress_HW();', 500);
};

function searchHWSubject() {
    loadHWSubjectResult();
};

function loadHWSubjectResult() {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '2',
            content: 'Objective Questions 2',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '3',
            content: 'Objective Questions 3',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '4',
            content: 'Objective Questions 4',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '5',
            content: 'Objective Questions 5',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }
    ];

    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td style="text-align: center;">' +
        '       <label class="custom-control custom-checkbox">' +
        '           <input type="checkbox" class="custom-control-input chk-HW-assign-subject-sel-result-item">' +
        '           <span class="custom-control-indicator"></span>' +
        '       </label>' +
        '   </td>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-danger btn-HW-assign-subject-sel-result-item-delete">删除</button>' +
        '       <button type="button" class="btn btn-sm btn-success btn-HW-assign-subject-sel-result-item-detail">详情</button>' +
        '   </td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + data[i].content + '</td>' +
        '   <td>' + data[i].point + '</td>' +
        '</tr>';

        $('#tb_DataTable_Body_HW_Assign_SubjectSel').append($(tmpHTMLStr));
    }

    $('.chk-HW-assign-subject-sel-result-item').on('click', function () {
        var items = $('.chk-HW-assign-subject-sel-result-item');
        var hasSel = false;
        var hasUnsel = false;
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).prop('checked')) {
                hasSel = true;
            } else {
                hasUnsel = true;
            }
        }

        $('#chb_HW_Assign_SubjectSel_AllSel').prop('indeterminate', false);
        if (hasSel && hasUnsel) {
            $('#chb_HW_Assign_SubjectSel_AllSel').prop('indeterminate', true);
        } else if (hasSel) {
            $('#chb_HW_Assign_SubjectSel_AllSel').prop('checked', true);
        } else {
            $('#chb_HW_Assign_SubjectSel_AllSel').prop('checked', false);
        }
    });

    $('.btn-HW-assign-subject-sel-result-item-delete').on('click', function () {
        $(arguments[0].target).parent().parent().remove();
    });

    $('.btn-HW-assign-subject-sel-result-item-detail').on('click', function () {
        alert('显示题目的详细信息');
    });

    var progress = $('#pb_HW_Assign_SubjectSel_Search');
    progress.attr('aria-valuenow', '100');
    progress.css('width', '100%');
    window.clearTimeout(_gTimeoutSymbol);
};

/*Exam*/
function formatData_Exam() {
    var data = [
        {
            id: '1',
            name: '初级1班'
        }, {
            id: '2',
            name: '初级2班'
        }, {
            id: '3',
            name: '中级1班'
        }, {
            id: '4',
            name: '高级1班'
        }
    ];

    return data;
};

function buildDataHTML_Exam() {
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
    var data = formatData_HW(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Exam();
    buildDataHeaderHTML_Exam();
    buildDataTableHTML_Exam(data);
};

function buildDataTopHTML_Exam() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Exam() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">测试管理</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons_Exam();
};

function buildDataHeaderButtons_Exam() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_Exam_ShowByClass" style="margin-right: 10px;">按班级查看</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_Exam_ShowByDate">按日期查看</button>'));
    $('#btn_Exam_ShowByClass').on('click', function () {
        alert('按班级分组显示测试');
    });

    $('#btn_Exam_ShowByDate').on('click', function () {
        alert('按日期分组显示测试');
    });
};

function buildDataTableHTML_Exam(data) {
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_Exam_Class" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    var cardblockId = '';
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_Exam_Class_' + data[i].id;
        collapseId = 'collapse_Exam_Class_' + data[i].id;
        cardblockId = 'cardblock_Exam_Class_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('            <h5 class="mb-0">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-success btn-exam-class-assign-exam" style="margin-right: 20px;" data-target="' + data[i].id + '">创建测试</button>');
        tmpHTMLStr.push('                <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">');
        tmpHTMLStr.push(data[i].name);
        tmpHTMLStr.push('                </a>');
        tmpHTMLStr.push('            </h5>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-exam-class" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Exam_Class" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('            <div class="card-block" id="' + cardblockId + '">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#container_Datas').css('overflow', 'auto');
    $('#container_Datas').height($('#wrap_LeftBar').height());
    $('.collapse.collapse-exam-class').on('show.bs.collapse', function () {
        if ($(arguments[0].target).hasClass('collapse-exam-class')) {
            var classId = $(arguments[0].target).attr('data-target');
            loadExamListByClass(classId);
        }
    });

    $('.btn-exam-class-assign-exam').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        showAssignExamPopup(classId);
    });
};

function loadExamListByClass(classId) {
    var data = [
        {
            id: '1',
            date: '2017-10-1',
            title: '测试 1',
            complete: 8,
            uncomplete: 2,
            accuracy: 80
        }, {
            id: '2',
            date: '2017-10-3',
            title: '测试 2',
            complete: 10,
            uncomplete: 0,
            accuracy: 100
        }, {
            id: '3',
            date: '2017-10-4',
            title: '测试 3',
            complete: 6,
            uncomplete: 4,
            accuracy: 50
        }
    ];

    $('#cardblock_Exam_Class_' + classId).empty();
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_Exam_Class_Items" style="font-size:14px;" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_Exam_Class_Items_' + data[i].id;
        collapseId = 'collapse_Exam_Class_Items_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" style="padding:5px 20px;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('           <div class="container-fluid">');
        tmpHTMLStr.push('               <div class="row">');
        tmpHTMLStr.push('                   <div class="col" style="font-weight:bold; line-height:30px;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('                   <div class="col">');
        tmpHTMLStr.push('                       <h5 class="mb-0" style="line-height:30px;">');
        tmpHTMLStr.push('                           <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">');
        tmpHTMLStr.push(data[i].date);
        tmpHTMLStr.push('                           </a>');
        tmpHTMLStr.push('                       </h5>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" style="line-height:30px;">' + data[i].title + '</div>');
        tmpHTMLStr.push('                   <div class="col" title="已完成">');
        tmpHTMLStr.push('                       <i class="fa fa-check" style="line-height:30px;">');
        tmpHTMLStr.push('                           <span class="span-exam-class-item-complete" data-target="' + data[i].id + '">' + data[i].complete + '</span>');
        tmpHTMLStr.push('                       </i>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" title="未完成">');
        tmpHTMLStr.push('                       <i class="fa fa-question" style="line-height:30px;">');
        tmpHTMLStr.push('                           <span class="span-exam-class-item-uncomplete" data-target="' + data[i].id + '">' + data[i].uncomplete + '</span>');
        tmpHTMLStr.push('                       </i>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" title="正确率">');
        tmpHTMLStr.push('                       <i class="fa fa-percent" style="line-height:30px;"><span>' + data[i].accuracy + '</span></i>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col">');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-primary btn-sm btn-exam-class-item" data-target="' + data[i].id + '">查看详情</button>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-exam-class-items" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Exam_Class_Items" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    $('#cardblock_Exam_Class_' + classId).append($(tmpHTMLStr.join('')));
    $('.collapse.collapse-exam-class-items').on('show.bs.collapse', function () {
        var target = $(arguments[0].target);
        var examId = target.attr('data-target');
        loadExamItemsById(examId);
    })

    $('.span-exam-class-item-complete').on('mouseenter', function () {
        showExamClassifyMembers('C', $(arguments[0].target));
    });

    $('.span-exam-class-item-complete').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-exam-class-item-uncomplete').on('mouseenter', function () {
        showExamClassifyMembers('U', $(arguments[0].target));
    });

    $('.span-exam-class-item-uncomplete').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.btn.btn-primary.btn-sm.btn-exam-class-item').on('click', function () {
        showExamClassItemPopup($(arguments[0].target).attr('data-target'));
    });
};

function loadExamItemsById(examId) {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            correct: ['1'],
            options: [
                { id: '1', content: 'Option 1', selected: 6 },
                { id: '2', content: 'Option 2', selected: 3 },
                { id: '3', content: 'Option 3', selected: 4 }
            ],
            right: 8,
            wrong: 0
        }, {
            id: '2',
            content: 'Objective Questions 2',
            correct: ['5', '6'],
            options: [
                { id: '4', content: 'Option 4', selected: 1 },
                { id: '5', content: 'Option 5', selected: 8 },
                { id: '6', content: 'Option 6', selected: 7 }
            ],
            right: 7,
            wrong: 1
        }, {
            id: '3',
            content: 'Objective Questions 3',
            correct: ['25'],
            options: [
                { id: '24', content: 'Option 24', selected: 1 },
                { id: '25', content: 'Option 25', selected: 2 },
                { id: '26', content: 'Option 26', selected: 8 }
            ],
            right: 6,
            wrong: 2
        }, {
            id: '4',
            content: 'Objective Questions 4',
            correct: ['7', '8', '9', '10'],
            options: [
                { id: '7', content: 'Option 7', selected: 5 },
                { id: '8', content: 'Option 8', selected: 5 },
                { id: '9', content: 'Option 9', selected: 6 },
                { id: '10', content: 'Option 10', selected: 8 }
            ],
            right: 5,
            wrong: 3
        }, {
            id: '5',
            content: 'Objective Questions 5',
            correct: ['12'],
            options: [
                { id: '11', content: 'Option 11', selected: 0 },
                { id: '12', content: 'Option 12', selected: 8 },
                { id: '13', content: 'Option 13', selected: 0 }
            ],
            right: 8,
            wrong: 0
        }
    ];

    $('#collapse_Exam_Class_Items_' + examId + ' .card-block').empty();
    var tmpHTMLArr = ['<table class="table table-striped">'];
    tmpHTMLArr.push('   <tbody>');
    var tmpChecked = false;
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px; ">【' + (i + 1) + '】</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:14px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;">');
        tmpHTMLArr.push('                       <i class="fa fa-check"><span class="span-exam-class-items-item-right">' + data[i].right + '</span></i>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;">');
        tmpHTMLArr.push('                       <i class="fa fa-remove"><span class="span-exam-class-items-item-wrong">' + data[i].wrong + '</span></i>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;" colspan="3">');
        tmpHTMLArr.push('                       <form>');
        tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_exam_item_' + examId + '_' + data[i].id + '" style="margin:0px;">');
        for (var j = 0; j < data[i].options.length; j++) {
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px; width:100%">');
            tmpChecked = false;
            for (var k = 0; k < data[i].correct.length; k++) {
                if (data[i].correct[k] == data[i].options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }
            tmpHTMLArr.push('                                   <table style="border: none; width:100%;">');
            tmpHTMLArr.push('                                       <tbody style="border: none;">');
            tmpHTMLArr.push('                                           <tr style="background-color: transparent;">');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px; width: 30px;">');
            tmpHTMLArr.push('                                                   <input type="checkbox" class="form-check-input" value="' + data[i].options[j].id + '" disabled ' + (tmpChecked ? 'checked' : '') + '/>');
            tmpHTMLArr.push('                                               </td>');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px;">');
            tmpHTMLArr.push('                                                   <span style="padding-left:10px;">' + data[i].options[j].content + '</span>');
            tmpHTMLArr.push('                                               </td>');
            tmpHTMLArr.push('                                               <td style="padding: 0px 10px;border: none; font-size:14px; width: 150px;">');
            tmpHTMLArr.push('                                                   <span>选择此项的有');
            tmpHTMLArr.push('                                                       <b class="span-exam-class-items-item-selected" style="color:rgb(57,101,222); cursor:pointer; text-decoration:underline;" data-target="' + data[i].id + '|' + data[i].options[j].id + '">');
            tmpHTMLArr.push(data[i].options[j].selected);
            tmpHTMLArr.push('                                               </b>人');
            tmpHTMLArr.push('                                                   </span>');
            tmpHTMLArr.push('                                               </td>');
            tmpHTMLArr.push('                                           </tr>');
            tmpHTMLArr.push('                                       </tbody>');
            tmpHTMLArr.push('                                   </table>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                       </form>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');

    $('#collapse_Exam_Class_Items_' + examId + ' .card-block').append($(tmpHTMLArr.join('')));

    $('.span-exam-class-items-item-right').on('mouseenter', function () {
        showExamClassifyMembers('R', $(arguments[0].target));
    });

    $('.span-exam-class-items-item-right').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-exam-class-items-item-wrong').on('mouseenter', function () {
        showExamClassifyMembers('W', $(arguments[0].target));
    });

    $('.span-exam-class-items-item-wrong').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });

    $('.span-exam-class-items-item-selected').on('mouseenter', function () {
        showExamClassifyMembers('S', $(arguments[0].target));
    });

    $('.span-exam-class-items-item-selected').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items').hide();
    });
};

function showExamClassifyMembers(classify, target) {
    var tipWrap = $('.tooltip.tooltip-left.homework-class-items');
    var itemId = $(arguments[0].target).attr('data-target');
    var tipContainer = $('.tooltip.tooltip-left.homework-class-items .container-fluid');
    tipWrap.attr('data-classify', classify);
    var data = [];
    switch (classify) {
        case 'C':
            data = ['已完成同学 1', '已完成同学 2', '已完成同学 3', '已完成同学 4', '已完成同学 5', '已完成同学 6', '已完成同学 7', '已完成同学 8'];
            break;
        case 'U':
            data = ['未完成同学 1', '未完成同学 2'];
            break;
        case 'R':
            data = ['正确的同学 1', '正确的同学 2', '正确的同学 3', '正确的同学 4', '正确的同学 5', '正确的同学 6', '正确的同学 7', '正确的同学 8'];
            break;
        case 'W':
            data = ['错误的同学 1', '错误的同学 2'];
            break;
        case 'S':
            data = ['选择的同学 1', '选择的同学 2', '选择的同学 3', '选择的同学 4', '选择的同学 5'];
            break;
    }

    tipWrap.css('left', target.offset().left + 15 + 'px');
    tipWrap.css('top', target.offset().top + 15 + 'px');
    tipWrap.css('opacity', '0.9');
    tipContainer.empty();
    tipContainer.append($('<div style="font-family: 微软雅黑; font-size: 12px; padding:10px; line-height:20px;">' + data.join('</br>') + '</div>'));
    tipWrap.show();
    //tipWrap.show('fase', function () {        
    //    if ($(this).attr('data-classify') != 'C' && $(this).attr('data-classify') != 'U') {
    //        //$(this).css('left', target.offset().left - $(this).width() + 'px');
    //    }
    //});
};

function showExamClassItemPopup(examId) {
    var data = [
        {
            id: '1',
            name: '学员 1',
            right: 8,
            wrong: 0,
            uncomplete: 0
        }, {
            id: '2',
            name: '学员 2',
            right: 7,
            wrong: 0,
            uncomplete: 1
        }, {
            id: '3',
            name: '学员 3',
            right: 5,
            wrong: 3,
            uncomplete: 0
        }, {
            id: '4',
            name: '学员 4',
            right: 6,
            wrong: 1,
            uncomplete: 1
        }, {
            id: '5',
            name: '学员 5',
            right: 0,
            wrong: 0,
            uncomplete: 8
        }
    ];

    buildExamClassItemPopup(data, examId);
    $('#modal_Exam_Class_Item_Detail').modal('show');
};

function buildExamClassItemPopup(data, examId) {
    var tmpHTMLStr = [];
    if ($('#modal_Exam_Class_Item_Detail').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_Exam_Class_Item_Detail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">测试详情</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    var container = $('#modal_Exam_Class_Item_Detail .modal-body');
    container.empty();
    tmpHTMLStr = ['<div class="accordion-white-bg" id="accordion_Exam_Class_Items_Detail" style="font-size:14px;" role="tablist">'];
    var headerId = '';
    var collapseId = '';
    var percent = 0;
    for (var i = 0; i < data.length; i++) {
        percent = (data[i].right / (data[i].right + data[i].wrong + data[i].uncomplete) * 100).toFixed(2);
        headerId = 'hd_Exam_Class_Items_Detail_' + data[i].id;
        collapseId = 'collapse_Exam_Class_Items_Detail_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('        <div class="card-header" style="padding:5px 20px;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('           <div class="container-fluid">');
        tmpHTMLStr.push('               <div class="row">');
        tmpHTMLStr.push('                   <div class="col" style="font-weight:bold; line-height:30px;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('                   <div class="col">');
        tmpHTMLStr.push('                       <h5 class="mb-0" style="line-height:30px;">');
        tmpHTMLStr.push('                           <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].name + '</a>');
        tmpHTMLStr.push('                       </h5>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('                   <div class="col" title="正确"><i class="fa fa-check" style="line-height:30px;"><span>' + data[i].right + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="错误"><i class="fa fa-remove" style="line-height:30px;"><span>' + data[i].wrong + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="未完成"><i class="fa fa-question" style="line-height:30px;"><span>' + data[i].uncomplete + '</span></i></div>');
        tmpHTMLStr.push('                   <div class="col" title="正确率"><span style="font-weight:bold; line-height:30px; color:#2955ce; padding-right:5px;">' + percent + '</span><i class="fa fa-percent" style="color:#2955ce;"></i></div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('        <div id="' + collapseId + '" class="collapse collapse-exam-class-items-detail" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Exam_Class_Items_Detail" data-target="' + data[i].id + '|' + examId + '">');
        tmpHTMLStr.push('            <div class="card-block">');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
    }

    tmpHTMLStr.push('</div>');
    container.append($(tmpHTMLStr.join('')));

    $('.collapse.collapse-exam-class-items-detail').on('show.bs.collapse', function () {
        var tmpId = $(arguments[0].target).attr('data-target').split('|');
        var cardblock = $('#' + $(arguments[0].target).attr('id') + ' .card-block');
        loadExamItemsByStudentAndId(tmpId[0], tmpId[1], cardblock);
    })
};

function loadExamItemsByStudentAndId(studentId, examId, cardblock) {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            correct: ['1'],
            options: [
                { id: '1', content: 'Option 1' },
                { id: '2', content: 'Option 2' },
                { id: '3', content: 'Option 3' }
            ],
            answer: ['1']
        }, {
            id: '2',
            content: 'Objective Questions 2',
            correct: ['5', '6'],
            options: [
                { id: '4', content: 'Option 4' },
                { id: '5', content: 'Option 5' },
                { id: '6', content: 'Option 6' }
            ],
            answer: ['5']
        }, {
            id: '3',
            content: 'Objective Questions 3',
            correct: ['25'],
            options: [
                { id: '24', content: 'Option 24' },
                { id: '25', content: 'Option 25' },
                { id: '26', content: 'Option 26' }
            ],
            answer: ['25']
        }, {
            id: '4',
            content: 'Objective Questions 4',
            correct: ['7', '8', '9', '10'],
            options: [
                { id: '7', content: 'Option 7' },
                { id: '8', content: 'Option 8' },
                { id: '9', content: 'Option 9' },
                { id: '10', content: 'Option 10' }
            ],
            answer: []
        }, {
            id: '5',
            content: 'Objective Questions 5',
            correct: ['12'],
            options: [
                { id: '11', content: 'Option 11' },
                { id: '12', content: 'Option 12' },
                { id: '13', content: 'Option 13' }
            ],
            answer: []
        }, {
            id: '6',
            content: 'Objective Questions 6',
            correct: ['14', '16'],
            options: [
                { id: '14', content: 'Option 14' },
                { id: '15', content: 'Option 15' },
                { id: '16', content: 'Option 16' },
                { id: '17', content: 'Option 17' }
            ],
            answer: []
        }
    ];
    var tmpHTMLArr = [];
    var tHeader = '';
    var chkName = '';
    var chkId = '';
    var checkAnswer = false;
    var tmpChecked = false;
    tmpHTMLArr.push('<table class="table table-striped">');
    tmpHTMLArr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tHeader = '';
        checkAnswer = false;
        if (data[i].answer.length == 0) {
            tHeader = '<i class="fa fa-question profile-exam-top-symbol uncomplete" id="i_status_exam_class_item_detail_' + examId + '_' + data[i].id + '"></i>';
        } else {
            checkAnswer = checkAnswersDo(data[i].answer, data[i].correct);
            if (checkAnswer) {
                tHeader = '<i class="fa fa-check profile-exam-top-symbol complete" id="i_status_exam_class_item_detail_' + examId + '_' + data[i].id + '"></i>';
            } else {
                tHeader = '<i class="fa fa-remove profile-exam-top-symbol incorrect" id="i_status_exam_class_item_detail_' + examId + '_' + data[i].id + '"></i>';
            }
        }

        tmpHTMLArr.push('<tr>');
        tmpHTMLArr.push('   <td style="padding: 5px 10px;">');
        tmpHTMLArr.push('       <table style="border: none; width:100%;">');
        tmpHTMLArr.push('           <tbody style="border: none;">');
        tmpHTMLArr.push('               <tr style="border: none;background-color: transparent;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none; width:50px; ">' + (i + 1) + '</th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; font-size:15px;">' + data[i].content + '</td>');
        tmpHTMLArr.push('                   <td class="td-text-exam-class-item-detail-ability" style="padding: 5px 10px;border: none; width:120px; color:rgb(234,85,21); cursor:pointer;" data-target="' + data[i].id + '">【相关知识】</td>');
        tmpHTMLArr.push('                   <td class="td-text-exam-class-item-detail-correct-answer" style="padding: 5px 10px;border: none; width:120px; color:rgb(34,139,34); cursor:pointer;" data-target="' + data[i].id + '">【正确答案】</td>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none; width:50px;">' + tHeader + '</td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('               <tr style="border: none;">');
        tmpHTMLArr.push('                   <th style="padding: 5px 10px;border: none;"></th>');
        tmpHTMLArr.push('                   <td style="padding: 5px 10px;border: none;" col-spac="3">');
        tmpHTMLArr.push('                       <form>');
        tmpHTMLArr.push('                           <fieldset class="form-group" id="fs_exam_item_detail_' + examId + '_' + data[i].id + '" style="margin:0px;" disabled>');
        for (var j = 0; j < data[i].options.length; j++) {
            chkName = 'chk-exam-item-detail-' + examId + '-' + data[i].id;
            chkId = 'chk_Exam_Item_detail_' + examId + '_' + data[i].id + '_' + j;
            tmpHTMLArr.push('                           <div class="form-check" style="margin:0px;">');
            tmpHTMLArr.push('                               <label class="form-check-label" style="font-size:14px;">');
            tmpChecked = false;
            for (var k = 0; k < data[i].answer.length; k++) {
                if (data[i].answer[k] == data[i].options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }

            if (tmpChecked) {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '" checked>');
            } else {
                tmpHTMLArr.push('                                   <input type="checkbox" class="form-check-input" name="' + chkName + '" id="' + chkId + '" value="' + data[i].options[j].id + '">');
            }
            tmpHTMLArr.push('                                   <span style="padding-left:10px;">' + data[i].options[j].content + '</span>');
            tmpHTMLArr.push('                               </label>');
            tmpHTMLArr.push('                           </div>');
        }

        tmpHTMLArr.push('                           </fieldset>');
        tmpHTMLArr.push('                       </form>');
        tmpHTMLArr.push('                   </td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </td>');
        tmpHTMLArr.push('</tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    cardblock.empty();
    cardblock.append($(tmpHTMLArr.join('')));

    $('.td-text-exam-class-item-detail-correct-answer').on('mouseenter', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var tmpData = [];
        for (var i = 0; i < data.length; i++) {
            if (dataId == data[i].id) {
                for (var j = 0; j < data[i].correct.length; j++) {
                    for (var k = 0; k < data[i].options.length; k++) {
                        if (data[i].correct[j] == data[i].options[k].id) {
                            tmpData.push(data[i].options[k].content);
                            break;
                        }
                    }
                }

                break;
            }
        }

        showCorrectAnswer(tmpData, $(arguments[0].target));
    });

    $('.td-text-exam-class-item-detail-correct-answer').on('mouseleave', function () {
        $('.tooltip.tooltip-left.homework-class-items-detail-correct-answer').hide();
    });
};

function showAssignExamPopup(classId) {
    var data = {
        id: '1',
        name: '初级1班',
        level: {
            id: '1',
            name: '初级'
        }
    };

    var tmpHTMLStr = [];
    if ($('#modal_Exam_Class_Assign').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_Exam_Class_Assign" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">创建测试</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_Class" class="col-form-label">班级</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_Exam_Assign_Class" value="' + data.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_Class_Type" class="col-form-label">类型</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_Exam_Assign_Class_Type" value="' + data.level.name + '" readonly>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_Date" class="col-form-label">日期</label>');
        tmpHTMLStr.push('                               <input type="date" class="form-control  form-control-sm" id="txt_Exam_Assign_Date" value="' + (new Date()).toLocaleDateString().replace(/\//g, '-') + '">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col">');
        tmpHTMLStr.push('                               <table class="table" style="width: 300px;">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr style="text-align:left;">');
        tmpHTMLStr.push('                                           <th style="width: 50px; border:none;line-height:30px; padding: 0px;">已选</th>');
        tmpHTMLStr.push('                                           <th style="width: 50px; border:none;line-height:30px; padding: 0px; color:rgb(41,85,206);">10</th>');
        tmpHTMLStr.push('                                           <th style="width: 100px; border:none; padding: 0px;"><button type="button" class="btn btn-info btn-sm" id="btn_Exam_Assign_AutoSelect">自动选题</button></th>');
        tmpHTMLStr.push('                                           <th style="width: 100px; border:none; padding: 0px;"><button type="button" class="btn btn-warning btn-sm" id="btn_Exam_Assign_ManualSelect">人工选题</button></th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px; font-weight:bold;">题目 : </div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12">');
        tmpHTMLStr.push('                               <table class="table table-striped">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr id="th_DataTable_Header_Exam_Assign_ItemList">');
        tmpHTMLStr.push('                                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                                           <th style="width: 50px;">');
        tmpHTMLStr.push('                                               <label class="custom-control custom-checkbox" style="vertical-align: bottom;">');
        tmpHTMLStr.push('                                                   <input type="checkbox" class="custom-control-input" id="chb_Exam_Assign_AllSel">');
        tmpHTMLStr.push('                                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                               </label>');
        tmpHTMLStr.push('                                           </th>');
        tmpHTMLStr.push('                                           <th style="width: 120px;"><button type="button" class="btn btn-sm btn-danger" id="btn_Exam_Assign_DelSel">批量删除</button></th>');
        tmpHTMLStr.push('                                           <th>难度</th>');
        tmpHTMLStr.push('                                           <th>内容</th>');
        tmpHTMLStr.push('                                           <th>知识点</th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                                   <tbody id="tb_DataTable_Body_Exam_Assign_ItemList"></tbody>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_Exam_Assign_AutoSelect').on('click', function () {
            alert('根据班级类型和课程状态自动从题库中筛选题目');
        });

        $('#btn_Exam_Assign_ManualSelect').on('click', function () {
            showExamManualSelectPopup();
        });

        $('#btn_Exam_Assign_DelSel').on('click', function () {
            var items = $('.chk-exam-assign-list-item');
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).prop('checked')) {
                    $(items[i]).parent().parent().parent().remove();
                }
            }
        });

        $('#chb_Exam_Assign_AllSel').on('click', function () {
            if ($('#chb_Exam_Assign_AllSel').prop('checked')) {
                $('.chk-exam-assign-list-item').prop('checked', true);
            } else {
                $('.chk-exam-assign-list-item').prop('checked', false);
            }
        });
    } else {
        $('#tb_DataTable_Body_Exam_Assign_ItemList').empty();
    }

    $('#modal_Exam_Class_Assign').modal('show');
};

function addExamSubjectToList() {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '2',
            content: 'Objective Questions 2',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '3',
            content: 'Objective Questions 3',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '4',
            content: 'Objective Questions 4',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '5',
            content: 'Objective Questions 5',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }
    ];

    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td style="text-align: center;">' +
        '       <label class="custom-control custom-checkbox">' +
        '           <input type="checkbox" class="custom-control-input chk-exam-assign-list-item">' +
        '           <span class="custom-control-indicator"></span>' +
        '       </label>' +
        '   </td>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-danger btn-exam-assign-list-item-delete">删除</button>' +
        '       <button type="button" class="btn btn-sm btn-success btn-exam-assign-list-item-detail">详情</button>' +
        '   </td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + data[i].content + '</td>' +
        '   <td>' + data[i].point + '</td>' +
        '</tr>';

        $('#tb_DataTable_Body_Exam_Assign_ItemList').append($(tmpHTMLStr));
    }

    $('.chk-exam-assign-list-item').on('click', function () {
        var items = $('.chk-exam-assign-list-item');
        var hasSel = false;
        var hasUnsel = false;
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).prop('checked')) {
                hasSel = true;
            } else {
                hasUnsel = true;
            }
        }

        $('#chb_Exam_Assign_AllSel').prop('indeterminate', false);
        if (hasSel && hasUnsel) {
            $('#chb_Exam_Assign_AllSel').prop('indeterminate', true);
        } else if (hasSel) {
            $('#chb_Exam_Assign_AllSel').prop('checked', true);
        } else {
            $('#chb_Exam_Assign_AllSel').prop('checked', false);
        }
    });

    $('.btn-exam-assign-list-item-delete').on('click', function () {
        $(arguments[0].target).parent().parent().remove();
    });

    $('.btn-exam-assign-list-item-detail').on('click', function () {
        alert('显示题目的详细信息');
    });
};

function showExamManualSelectPopup() {
    $('#modal_Exam_Class_Assign').modal('hide');
    var tmpHTMLStr = [];
    if ($('#modal_Exam_Class_Assign_ManualSelect').length == 0) {
        tmpHTMLStr.push('<div class="modal fade" id="modal_Exam_Class_Assign_ManualSelect" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;max-width: 70%; max-height: 70%;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">题目筛选</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <div class="container-fluid">');
        tmpHTMLStr.push('                   <form>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px;">当前题库共有<b style="color:rgb(41,85,206);">1320019</b>道题目，请尽量缩小筛选范围。</div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_SubjectSel_Level" class="col-form-label">难度</label>');
        tmpHTMLStr.push('                               <select class="form-control form-control-sm" id="txt_Exam_Assign_SubjectSel_Level"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_SubjectSel_Point" class="col-form-label">知识点</label>');
        tmpHTMLStr.push('                               <select class="form-control  form-control-sm" id="txt_Exam_Assign_SubjectSel_Point"></select>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group col-md-4">');
        tmpHTMLStr.push('                               <label for="txt_Exam_Assign_SubjectSel_Keyword" class="col-form-label">关键字</label>');
        tmpHTMLStr.push('                               <input type="text" class="form-control  form-control-sm" id="txt_Exam_Assign_SubjectSel_Keyword" value="">');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-2">');
        tmpHTMLStr.push('                               <button type="button" class="btn btn-primary btn-sm" id="btn_Exam_Assign_SubjectSel_Search">开始筛选</button></th>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12" style="padding:10px 15px;">');
        tmpHTMLStr.push('                               <div class="progress">');
        tmpHTMLStr.push('                                   <div class="progress-bar progress-bar-striped progress-bar-animated" id="pb_Exam_Assign_SubjectSel_Search" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>');
        tmpHTMLStr.push('                               </div>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                       <div class="row"><div class="col-12" style="line-height:30px; font-weight:bold;">题目 : </div></div>');
        tmpHTMLStr.push('                       <div class="row">');
        tmpHTMLStr.push('                           <div class="col-12">');
        tmpHTMLStr.push('                               <table class="table table-striped">');
        tmpHTMLStr.push('                                   <thead>');
        tmpHTMLStr.push('                                       <tr id="th_DataTable_Header_Exam_Assign_SubjectSel">');
        tmpHTMLStr.push('                                           <th style="width: 50px;"></th>');
        tmpHTMLStr.push('                                           <th style="width: 50px;">');
        tmpHTMLStr.push('                                               <label class="custom-control custom-checkbox" style="vertical-align: bottom;">');
        tmpHTMLStr.push('                                                   <input type="checkbox" class="custom-control-input" id="chb_Exam_Assign_SubjectSel_AllSel">');
        tmpHTMLStr.push('                                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                               </label>');
        tmpHTMLStr.push('                                           </th>');
        tmpHTMLStr.push('                                           <th style="width: 120px;"><button type="button" class="btn btn-sm btn-danger" id="btn_Exam_Assign_SubjectSel_DelSel">批量删除</button></th>');
        tmpHTMLStr.push('                                           <th>难度</th>');
        tmpHTMLStr.push('                                           <th>内容</th>');
        tmpHTMLStr.push('                                           <th>知识点</th>');
        tmpHTMLStr.push('                                       </tr>');
        tmpHTMLStr.push('                                   </thead>');
        tmpHTMLStr.push('                                   <tbody id="tb_DataTable_Body_HW_Assign_SubjectSel"></tbody>');
        tmpHTMLStr.push('                               </table>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                   </form>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-primary btn-sm" id="btn_Exam_Assign_SubjectSel_SubmitSel" data-dismiss="modal">提交</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_Exam_Assign_SubjectSel_Search').on('click', function () {
            var progress = $('#pb_Exam_Assign_SubjectSel_Search');
            progress.attr('aria-valuenow', '0');
            progress.css('width', '0%');
            _gTimeoutExamSymbol = window.setTimeout('subjectProgress_Exam();', 500);
            searchExamSubject();
        });

        $('#btn_Exam_Assign_SubjectSel_SubmitSel').on('click', function () {
            $('#modal_Exam_Class_Assign_ManualSelect').modal('hide');
            addExamSubjectToList();
            $('#modal_Exam_Class_Assign').modal('show');
        });

        $('#chb_Exam_Assign_SubjectSel_AllSel').on('click', function () {
            if ($('#chb_Exam_Assign_SubjectSel_AllSel').prop('checked')) {
                $('.chk-exam-assign-subject-sel-result-item').prop('checked', true);
            } else {
                $('.chk-exam-assign-subject-sel-result-item').prop('checked', false);
            }
        });

        $('#btn_Exam_Assign_SubjectSel_DelSel').on('click', function () {
            var items = $('.chk-exam-assign-subject-sel-result-item');
            for (var i = 0; i < items.length; i++) {
                if ($(items[i]).prop('checked')) {
                    $(items[i]).parent().parent().parent().remove();
                }
            }
        });
    }

    $('#modal_Exam_Class_Assign_ManualSelect').modal('show');
};

var _gTimeoutExamSymbol;
function subjectProgress_Exam() {
    var progress = $('#pb_Exam_Assign_SubjectSel_Search');
    var currentVal = parseInt(progress.attr('aria-valuenow'));
    if (currentVal == 100) {
        progress.attr('aria-valuenow', '0');
        progress.css('width', '0%');
    } else {
        progress.attr('aria-valuenow', currentVal + 5);
        progress.css('width', (currentVal + 5) + '%');
    }

    _gTimeoutExamSymbol = window.setTimeout('subjectProgress_Exam();', 500);
};

function searchExamSubject() {
    loadExamSubjectResult();
};

function loadExamSubjectResult() {
    var data = [
        {
            id: '1',
            content: 'Objective Questions 1',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '2',
            content: 'Objective Questions 2',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '3',
            content: 'Objective Questions 3',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '4',
            content: 'Objective Questions 4',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }, {
            id: '5',
            content: 'Objective Questions 5',
            level: { id: '1', name: '初级' },
            point: 'knowledge point 1'
        }
    ];

    for (var i = 0; i < data.length; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td style="text-align: center;">' +
        '       <label class="custom-control custom-checkbox">' +
        '           <input type="checkbox" class="custom-control-input chk-HW-assign-subject-sel-result-item">' +
        '           <span class="custom-control-indicator"></span>' +
        '       </label>' +
        '   </td>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-danger btn-HW-assign-subject-sel-result-item-delete">删除</button>' +
        '       <button type="button" class="btn btn-sm btn-success btn-HW-assign-subject-sel-result-item-detail">详情</button>' +
        '   </td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + data[i].content + '</td>' +
        '   <td>' + data[i].point + '</td>' +
        '</tr>';

        $('#tb_DataTable_Body_HW_Assign_SubjectSel').append($(tmpHTMLStr));
    }

    $('.chk-exam-assign-subject-sel-result-item').on('click', function () {
        var items = $('.chk-exam-assign-subject-sel-result-item');
        var hasSel = false;
        var hasUnsel = false;
        for (var i = 0; i < items.length; i++) {
            if ($(items[i]).prop('checked')) {
                hasSel = true;
            } else {
                hasUnsel = true;
            }
        }

        $('#chb_Exam_Assign_SubjectSel_AllSel').prop('indeterminate', false);
        if (hasSel && hasUnsel) {
            $('#chb_Exam_Assign_SubjectSel_AllSel').prop('indeterminate', true);
        } else if (hasSel) {
            $('#chb_Exam_Assign_SubjectSel_AllSel').prop('checked', true);
        } else {
            $('#chb_Exam_Assign_SubjectSel_AllSel').prop('checked', false);
        }
    });

    $('.btn-exam-assign-subject-sel-result-item-delete').on('click', function () {
        $(arguments[0].target).parent().parent().remove();
    });

    $('.btn-exam-assign-subject-sel-result-item-detail').on('click', function () {
        alert('显示题目的详细信息');
    });

    var progress = $('#pb_Exam_Assign_SubjectSel_Search');
    progress.attr('aria-valuenow', '100');
    progress.css('width', '100%');
    window.clearTimeout(_gTimeoutExamSymbol);
};
/*Common*/
function openLessonDoc() {
    var symbol = $(arguments[0].currentTarget).attr('data-target');
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'GET',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.bus.getcurrentdoc, { symbol: symbol }),
    //    data: '<root></root>',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_GetCurrentDoc');
    //            return;
    //        }

    //        var data = initData_LessonDoc(response);
    //        showLessonDoc(data);
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    var data = initData_LessonDoc("");
    showLessonDoc(data);
};

function initData_LessonDoc(responseXML) {
    /*
    <root>
    <lesson symbol="b_01_001" >
        <page index="1" symbol=""></page>
    </lesson>
</root>
    */
    var data = ['image/lessondoc_1.jpg', 'image/lessondoc_2.jpg', 'image/lessondoc_3.jpg', 'image/lessondoc_4.jpg'];
    return data;
};

function showLessonDoc(data) {
    if ($('#modal_LessonDoc').length == 0) {
        var tmpHTMLStr = '<div class="modal fade" id="modal_LessonDoc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
        '    <div class="modal-dialog" role="document" style="max-width:100%; max-height:100%; width:100%; height:100%; margin:0px;">' +
        '        <div class="modal-content" style="max-width:100%; max-height:100%; width:100%; height:100%; margin:0px;">' +
        '            <div class="modal-body">' +
        '                <div id="carousel_LessonDoc" class="carousel slide" data-ride="carousel" data-interval="90000" data-keyboard="true" data-wrap="false" data-ride="true">' +
        '                    <div class="carousel-inner">' +
        '                    </div>' +
        '                    <a class="carousel-control-prev" href="#carousel_LessonDoc" role="button" data-slide="prev">' +
        '                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
        '                        <span class="sr-only" style="color:darkred">Previous</span>' +
        '                    </a>' +
        '                    <a class="carousel-control-next" href="#carousel_LessonDoc" role="button" data-slide="next">' +
        '                        <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
        '                        <span class="sr-only">Next</span>' +
        '                    </a>' +
        '                </div>' +
        '            </div>' +
        '            <div class="modal-footer">' +
        '                <button type="button" class="btn btn-success" data-dismiss="modal">关闭</button>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';
        $('body').append($(tmpHTMLStr));
    }

    $('#modal_LessonDoc .carousel-inner').empty();
    var tmpItemStr = '';
    for (var i = 0; i < data.length; i++) {
        if (i == 0) {
            tmpItemStr += '<div class="carousel-item active">';
        } else {
            tmpItemStr += '<div class="carousel-item">';
        }

        tmpItemStr += '<img class="d-block w-100" src="' + data[i] + '" alt="Second slide">';
        tmpItemStr += '</div>';
    }
    $('#modal_LessonDoc .carousel-inner').append($(tmpItemStr));

    $('#modal_LessonDoc').modal('show');
    $('#modal_LessonDoc').on('shown.bs.modal', function (e) {
        var parent = $($('#carousel_LessonDoc').parent());
        $('#carousel_LessonDoc').height(parent.height() - 30);
        $('#carousel_LessonDoc').width(parent.width() - 30);
    })
};

function openWorkplatform() {
    var symbol = $(arguments[0].currentTarget).attr('data-target');
    window.open('/ikcoderv4/workplatform.html?scene=' + symbol, 'workplatform', "")
};