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
    buildDataHTML_Student();
    initEvents();
};

function initEvents() {
    $('#menu_Student_New').on('click', function () {
        createNewStudent();
    });

    $('#menu_Student_All').on('click', function () {
        buildDataHTML_Student();
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

function createNewStudent() {
    if ($('#modal_Student_New').length <= 0) {
        buildCreateNewStudentPopup();
        $('#modal_Student_New').on('show.bs.modal', function (e) {

        });
    }

    $('#modal_Student_New').modal('show');
}

function buildCreateNewStudentPopup() {
    var tmpHTMLStr = '<div class="modal fade" id="modal_Student_New" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
    '    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">' +
    '        <div class="modal-content">' +
    '            <div class="modal-header">' +
    '                <h5 class="modal-title" id="exampleModalLabel">新建学员档案</h5>' +
    '                <button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
    '                    <span aria-hidden="true">&times;</span>' +
    '                </button>' +
    '            </div>' +
    '            <div class="modal-body">' +
    '                <form>' +
    '                    <div class="form-group row">' +
    '                        <label for="sel_Level_Student_New" class="col-3 col-form-label class-create">课程级别</label>' +
    '                        <div class="col-9">' +
    '                            <select class="form-control" id="sel_Level_Student_New">' +
    '                                <option value="1">初级</option>' +
    '                                <option value="2">中级</option>' +
    '                                <option value="3">高级</option>' +
    '                                <option value="4">拓展</option>' +
    '                                <option value="5">课程包</option>' +
    '                            </select>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Symbol_Student_New" class="col-3 col-form-label class-create">编号</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_Symbol_Student_New" readonly>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Name_Student_New" class="col-3 col-form-label class-create">姓名</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_Name_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Gender_Student_New" class="col-3 col-form-label class-create">性别</label>' +
    '                        <div class="col-9">' +
    '                           <div class="form-check form-check-inline">' +
    '                               <label class="form-check-label">' +
    '                                   <input class="form-check-input" type="radio" name="newStudentGenderRadios" id="rb_Gender_Student_New_1" value="1" checked>男' +
    '                               </label>' +
    '                           </div>' +
    '                           <div class="form-check form-check-inline">' +
    '                               <label class="form-check-label">' +
    '                                   <input class="form-check-input" type="radio" name="newStudentGenderRadios" id="rb_Gender_Student_New_2" value="2">女' +
    '                               </label>' +
    '                           </div>' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Birthday_Student_New" class="col-3 col-form-label class-create">生日</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="date" value="' + (new Date()).toLocaleDateString().replace(/\//g, '-') + '" id="txt_Birthday_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                       <label for="txt_City_Student_New" class="col-3 col-form-label class-create">所在城市</label>' +
    '                       <div class="col-3" style="padding-right:0px;">' +
    '                           <select class="form-control" id="select_City_Province_Student_New"></select>' +
    '                       </div>' +
    '                       <label class="col-2 col-form-label class-create" id="title_City_Province_Student_New" style="padding:5px;">市</label>' +
    '                       <div class="col-3" style="padding:0px;">' +
    '                           <select class="form-control" id="select_City_City_Student_New"></select>' +
    '                       </div>' +
    '                       <label class="col-1 col-form-label class-create" id="title_City_City_Student_New" style="padding:5px;">区</label>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_Address_Student_New" class="col-3 col-form-label class-create">联系地址</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_Address_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_School_Student_New" class="col-3 col-form-label class-create">就读学校</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_School_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_School_Student_New" class="col-3 col-form-label class-create">联系人</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_School_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                    <div class="form-group row">' +
    '                        <label for="txt_School_Student_New" class="col-3 col-form-label class-create">联系电话</label>' +
    '                        <div class="col-9">' +
    '                            <input class="form-control" type="text" value="" id="txt_School_Student_New">' +
    '                        </div>' +
    '                    </div>' +
    '                </form>' +
    '            </div>' +
    '            <div class="modal-footer">' +
    '                <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>' +
    '                <button type="button" class="btn btn-primary">确定</button>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('body').append($(tmpHTMLStr));
    var tmpHTMLArr = [];
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('<option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    $('#select_City_Province_Student_New').append($(tmpHTMLArr.join('')));
    tmpHTMLArr = [];
    for (var i = 0; i < _gCitys[0].c.length; i++) {
        tmpHTMLArr.push('<option value="' + _gCitys[0].c[i] + '">' + _gCitys[0].c[i] + '</option>');
    }

    $('#select_City_City_Student_New').append($(tmpHTMLArr.join('')));

    $("#select_City_Province_Student_New").change(function () {
        var pVal = $("#select_City_Province_Student_New").val();
        reloadCityList(pVal);
    });

    $('#sel_Level_Student_New').on('click', function () {
        rebuildStudentSymbol();
    });
};

function rebuildStudentSymbol() {

};

function reloadCityList(province) {
    var item = {};
    for (var i = 0; i < _gCitys.length; i++) {
        item = _gCitys[i];
        if (item.p == province) {
            break;
        }
    }

    var tmpPt = '省';
    if (item.pt && item.pt != '') {
        tmpPt = item.pt;
    }

    var tmpCt = '市';
    if (item.ct && item.ct != '') {
        tmpCt = item.ct;
    }

    $("#title_City_Province_Student_New").text(tmpPt);
    $("#title_City_City_Student_New").text(tmpCt);
    var tmpHTMLArr = [];
    for (var i = 0; i < item.c.length; i++) {
        tmpHTMLArr.push('<option value="' + item.c[i] + '">' + item.c[i] + '</option>');
    }

    $("#select_City_City_Student_New").empty();
    $("#select_City_City_Student_New").append(tmpHTMLArr.join(''));
}

function buildDataHTML_Student() {
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
    var data = formatData_Student(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML_Student();
    buildDataHeaderHTML_Student();
    buildDataTableHTML_Student(data);
};

function buildDataTopHTML_Student() {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="height:50px; background-color:#F1F1F1;">' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataHeaderHTML_Student() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">学员总览</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
    buildDataHeaderButtons_Student();
    buildDataHeaderFields_Student();
};

function buildDataHeaderButtons_Student() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_NewStudent_DataTB">新建学员</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-warning" id="btn_DelStudents_DataTB" style="margin-left:10px;">批量删除</button>'));
};

function buildDataHeaderFields_Student() {
    var tmpHTMLStr = '<form class="form-inline">' +
    '   <div class="input-group">' +
    '       <input type="text" class="form-control  form-control-sm" id="data_" placeholder="Username">' +
    '       <button type="button" class="btn btn-sm btn-success">搜索</button>' +
    '   </div>' +
    '</form>';
    $('#container_DataHeader_Fields').append($(tmpHTMLStr));
};

function buildDataTableHTML_Student(data) {
    var tmpHTMLStr = '<div class="row">' +
    '    <div class="col" style="padding: 10px 0px; overflow: auto; margin: 0px 10px;">' +
    '        <table class="table table-striped" style="width:1440px; max-width:auto;">' +
    '            <thead>' +
    '                <tr id="container_DataTable_Header"></tr>' +
    '            </thead>' +
    '            <tbody id="container_DataTable_Rows"></tbody>' +
    '        </table>' +
    '    </div>' +
    '</div>';
    $('#container_Datas').append($(tmpHTMLStr));
    buildDataTableColHeaderHTML_Student();
    buildDataTableDataRowsHTML_Student(data);
};

function buildDataTableColHeaderHTML_Student() {
    var tmpHTMLStr = '<th style="width: 50px;"></th>' +
    '<th style="width: 120px;">操作</th>' +
    '<th>编号</th>' +
    '<th>姓名</th>' +
    '<th>课程</th>' +
    '<th>性别</th>' +
    '<th>生日</th>' +
    '<th>城市</th>' +
    '<th>地址</th>' +
    '<th>学校</th>' +
    '<th>联系人</th>' +
    '<th>联系电话</th>';
    $('#container_DataTable_Header').append($(tmpHTMLStr));
};

function formatData_Student() {
    var data = [
        {
            symbol: 'S_01_001',
            id: '1',
            name: '学员 1',
            gender: '1',
            birthday: '2017/10/10 ',
            province: '广东',
            city: '深圳',
            address: '福田区香蜜湖街道东海国际中心A-7',
            school: '学校 1',
            contact: '联系人 1',
            phone: '13111111111',
            level: {
                id: '1',
                name: '初级'
            },
        }, {
            symbol: 'S_02_002',
            id: '2',
            name: '学员 2',
            gender: '2',
            birthday: '2017/11/11 ',
            province: '北京',
            city: '东城',
            address: '东城东城东城东城A-7',
            school: '学校 2',
            contact: '联系人 2',
            phone: '13222222222',
            level: {
                id: '2',
                name: '中级'
            },
        }, {
            symbol: 'S_03_003',
            id: '3',
            name: '学员 3',
            gender: '1',
            birthday: '2017/1/1 ',
            province: '广东',
            city: '深圳',
            address: '福田区香蜜湖街道东海国际中心A-711111',
            school: '学校 3',
            contact: '联系人 3',
            phone: '13333333333',
            level: {
                id: '3',
                name: '高级'
            },
        }
    ];

    return data;
};

function buildDataTableDataRowsHTML_Student(data) {
    var count = data.length;
    var status = '';
    for (var i = 0; i < count; i++) {
        var tmpHTMLStr = '<tr>' +
        '   <th scope="row">' + (i + 1) + '</th>' +
        '   <td>' +
        '       <button type="button" class="btn btn-sm btn-success btn-Class-Detail" data-target="' + data[i].symbol + '">编辑</button>' +
        '       <button type="button" class="btn btn-sm btn-warning btn-Class-Delete" data-target="' + data[i].symbol + '">删除</button>' +
        '   </td>' +
        '   <td>' + data[i].symbol + '</td>' +
        '   <td>' + data[i].name + '</td>' +
        '   <td>' + data[i].level.name + '</td>' +
        '   <td>' + (data[i].gender == '1' ? '男' : '女') + '</td>' +
        '   <td>' + data[i].birthday + '</td>' +
        '   <td>' + data[i].province + data[i].city + '</td>' +
        '   <td>' + data[i].address + '</td>' +
        '   <td>' + data[i].school + '</td>' +
        '   <td>' + data[i].contact + '</td>' +
        '   <td>' + data[i].phone + '</td>' +
        '</tr>';
        $('#container_DataTable_Rows').append($(tmpHTMLStr));
    }

    //$('.btn.btn-sm.btn-success.btn-Class-doc').on('click', openClassDoc);
    //$('.btn.btn-sm.btn-warning.btn-Class-wp').on('click', openWorkplatform);
};