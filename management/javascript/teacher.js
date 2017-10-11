'use strict';

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
    $('#menu_Lesson_All').on('click', function () {
        buildDataHTML_Lesson();
    });

    $('#menu_Homework').on('click', function () {
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

function formatData_Lesson() {
    var data = [
        {
            datetime: '2017-10-10 10:00',
            room: 'Room 1',
            content: '变量 1 ',
            status: '0',
            symbol: 'B_01_001'
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
            symbol: 'B_01_001'
        }, {
            datetime: '2018-1-10 13:00',
            room: 'Room 4',
            content: '变量 4',
            status: '1',
            symbol: 'B_01_001'
        }, {
            datetime: '2018-1-12 14:00',
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
    '<th style="width: 120px;">操作</th>' +
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
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-success btn-lesson-doc" data-target="' + data[i].symbol + '">教案</button>' +
        '       <button type="button" class="btn btn-sm btn-warning btn-lesson-wp" data-target="' + data[i].symbol + '">课件</button>' +
        '   </td>' +
        '   <td>' + data[i].datetime + '</td>' +
        '   <td>' + data[i].room + '</td>' +
        '   <td>' + data[i].symbol + '</td>' +
        '   <td>' + data[i].content + '</td>' +
        '   <td>' + status + '</td>' +
        '</tr>';
        $('#container_DataTable_Rows').append($(tmpHTMLStr));
    }

    $('.btn.btn-sm.btn-success.btn-lesson-doc').on('click', openLessonDoc);
    $('.btn.btn-sm.btn-warning.btn-lesson-wp').on('click', openWorkplatform);
};

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
};