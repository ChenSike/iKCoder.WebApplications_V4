'use strict';

var _gClassInfoMap = {
    signin: '签到情况',
    homework: '作业情况',
    exam: '测试情况'
}

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

    $('#menu_Student_New').on('click', function () {
        buildDataHTML_StdNew();
    });

    $('#menu_Student_Current').on('click', function () {
        buildDataHTML_StdCurrent();
    });
    $('#menu_Student_Careers').on('click', function () {
        buildDataHTML_StdCareers();
    });

    $('#menu_Student_Quit').on('click', function () {
        buildDataHTML_StdQuit();
    });

    $('#menu_Student_Transfer').on('click', function () {
        buildDataHTML_StdTransfer();
    });

    $('#menu_Student_Search').on('click', function () {
    });

    $('#menu_Schedule').on('click', function () {
        buildDataHTML_Schedule();
    });

    $('#menu_Teacher_All').on('click', function () {
        buildDataHTML_Teacher();
    });

    $('#menu_Resource_Lib').on('click', function () {
        buildDataHTML_Lib();
    });

    $('#menu_Resource_Doc').on('click', function () {
        buildDataHTML_Doc();
    });

    $('#menu_Resource_Scene').on('click', function () {
        buildDataHTML_Scene();
    });

    $('#menu_Certification').on('click', function () {
        buildDataHTML_Certificate();
    });

    $('#menu_Feedback').on('click', function () {

    });

    $('#menu_Team_Suit').on('click', function () {
        window.open("/ikcoder/teamsuit.html");
    });

    $('#menu_UpdatePWD').on('click', function () {
        _showChgPWDPopup();
    });

    $('#lbtn_Logout').on('click', function () {
        _logout();
    });

    /*Student Detail Information Modal*/
    $('#modal_Student_Detail_Info').on('hidden.bs.modal', function (e) {
        $('#modal_Student_Detail').modal('show');
    })

    $('#btn_Student_Detail_SignIn').on('click', function () {
        $('#modal_Student_Detail').modal('hide');
        showStudentSignInDetail($(arguments[0].target).attr('data-target'));
    });

    $('#btn_Student_Detail_Homework').on('click', function () {
        showStudentHwDetail($(arguments[0].target).attr('data-target'));
    });

    $('#btn_Student_Detail_Exam').on('click', function () {
        showStudentExamDetail($(arguments[0].target).attr('data-target'));
    });

    $('#btn_Student_Detail_Certificate').on('click', function () {
        showStudentCertificateDetail($(arguments[0].target).attr('data-target'));
    });

    $('#btn_Student_Detail_ResetPWD').on('click', function () {
        _showGlobalMessage('重置密码成功!', 'warning', 'alert_Student_Reset_PWD');
    });
    /**/
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

/*Class*/
function formatData_Class() {
    var data = [
        {
            id: '1',
            symbol: 'B_01_001',
            title: '初级 1 班',
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
            amount: '10',
            max: 10,
            status: 0,
            transfer: 1
        }, {
            id: '2',
            symbol: 'B_02_002',
            title: '中级 2 班',
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
            amount: '12',
            max: 15,
            status: 1,
            transfer: 2
        }, {
            id: '3',
            symbol: 'B_03_003',
            title: '高级 3 班',
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
            amount: '13',
            max: 15,
            status: 0,
            transfer: 1
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
    buildDataTopHTML();
    buildDataHeaderHTML_Class();
    buildDataTableHTML_Class(data);
};

function buildDataTopHTML_Class() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="height:50px; background-color:#F1F1F1;">');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
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
    $('#btn_NewClass_DataTB').on('click', function () {
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
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 80px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 120px;">编号</th>');
    tmpHTMLStr.push('                   <th style="width: 120px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">级别</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">教员</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">教室</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">人数</th>');
    tmpHTMLStr.push('                   <th>开学时间</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    tmpHTMLStr.push('               <tr>');
    tmpHTMLStr.push('                   <td id="container_DataTable_Body" style="border:none; padding:0px;" colspan="8"></td>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    buildDataTableDataRowsHTML_Class(data);
};

function buildDataTableDataRowsHTML_Class(data) {
    var accordionId = 'accordion_Classes';
    var headerId = '';
    var collapseId = '';
    var cardblockId = '';
    var subAccordionId = 'accordion_Classes_Item_';
    var subHeaderId = '';
    var subCollapseId = '';
    var subCardblockId = '';
    var tmpHTMLStr = ['<div class="accordion-white-bg" id="' + accordionId + '" role="tablist">'];
    for (var i = 0; i < data.length; i++) {
        subAccordionId = 'accordion_Classes_Item_' + data[i].id;
        headerId = 'hd_Classes_Item_' + data[i].id;
        collapseId = 'collapse_Classes_Item_' + data[i].id;
        cardblockId = 'cardblock_Classes_Item_' + data[i].id;
        tmpHTMLStr.push('   <div class="card">');
        tmpHTMLStr.push('       <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('           <table class="table" style="margin:0px;">');
        tmpHTMLStr.push('               <thead>');
        tmpHTMLStr.push('                   <tr>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 80px;">');
        if (data[i].status == 0) {
            tmpHTMLStr.push('                           <button type="button" class="btn btn-sm btn-primary btn-classes-item-finish">&nbsp;结&nbsp;&nbsp;课&nbsp;</button>');
        } else {
            tmpHTMLStr.push('                           <button type="button" class="btn btn-sm btn-secondary" disabled>已结课</button>');
        }

        tmpHTMLStr.push('                       </th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 120px;">' + data[i].symbol + '</th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 120px;">');
        tmpHTMLStr.push('                           <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].title + '</a>');
        tmpHTMLStr.push('                       </th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 100px;">' + data[i].level.name + '</th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 100px;">' + data[i].teacher.name + '</th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 100px;">' + data[i].room.name + '</th>');
        tmpHTMLStr.push('                       <th style="line-height: 30px;width: 100px;">' + data[i].amount + ' / ' + data[i].max + '</th>');
        tmpHTMLStr.push('                       <td>' + data[i].startdate + '</th>');
        tmpHTMLStr.push('                   </tr>');
        tmpHTMLStr.push('               </thead>');
        tmpHTMLStr.push('           </table>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('       <div id="' + collapseId + '" class="collapse collapse-classes-item" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#' + accordionId + '" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('           <div class="card-block" id="' + cardblockId + '">');
        tmpHTMLStr.push('               <div class="accordion-white-bg" id="' + subAccordionId + '" role="tablist">');
        for (var key in _gClassInfoMap) {
            subHeaderId = 'hd_Classes_Item_Detail_' + key;
            subCollapseId = 'collapse_Classes_Item_Detail_' + key;
            subCardblockId = 'cardblock_Classes_Item_Detail_' + key;
            tmpHTMLStr.push('   <div class="card">');
            tmpHTMLStr.push('       <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + subHeaderId + '">');
            tmpHTMLStr.push('            <h5 class="mb-0">');
            tmpHTMLStr.push('                <a data-toggle="collapse" href="#' + subCollapseId + '" aria-expanded="true" aria-controls="' + subCollapseId + '">');
            tmpHTMLStr.push(_gClassInfoMap[key]);
            tmpHTMLStr.push('                </a>');
            tmpHTMLStr.push('            </h5>');
            tmpHTMLStr.push('       </div>');
            tmpHTMLStr.push('       <div id="' + subCollapseId + '" class="collapse collapse-classes-item-detail" role="tabpanel" aria-labelledby="' + subHeaderId + '" data-parent="#' + subAccordionId + '" data-target="' + data[i].id + '|' + key + '">');
            tmpHTMLStr.push('           <div class="card-block" id="' + subCardblockId + '">');
            tmpHTMLStr.push('           </div>');
            tmpHTMLStr.push('       </div>');
            tmpHTMLStr.push('   </div>');
        }

        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
    }

    tmpHTMLStr.push('</div>');

    $('#container_DataTable_Body').append($(tmpHTMLStr.join('')));
    $('.collapse.collapse-classes-item-detail').on('show.bs.collapse', function () {
        var symbol = $(arguments[0].target).attr('data-target').split('|');
        switch (symbol[1]) {
            case 'signin':
                loadClassItemInfo_Sign(symbol[0]);
                break;
            case 'homework':
                loadClassItemInfo_Hw(symbol[0]);
                break;
            case 'exam':
                loadClassItemInfo_Exam(symbol[0]);
                break;
            case 'teacher':
                loadClassItemInfo_Teach(symbol[0]);
                break;
        }
    });
};

function loadClassItemInfo_Sign(classId) {
    var data = [
        {
            id: '1',
            name: '学员 1',
            sign: 5,
            unsign: 1,
            vacate: 1,
            over: 7,
            total: 20
        }, {
            id: '2',
            name: '学员 2',
            sign: 7,
            unsign: 0,
            vacate: 0,
            over: 7,
            total: 20
        }, {
            id: '3',
            name: '学员 3',
            sign: 3,
            unsign: 4,
            vacate: 0,
            over: 7,
            total: 20
        }, {
            id: '4',
            name: '学员 4',
            sign: 6,
            unsign: 0,
            vacate: 1,
            over: 7,
            total: 20
        }, {
            id: '5',
            name: '学员 5',
            sign: 7,
            unsign: 0,
            vacate: 0,
            over: 7,
            total: 20
        }
    ];

    $('#cardblock_Classes_Item_Detail_signin').empty();
    var tmpClassStr = 'a-link-classes-item-detail-signin-';
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="text-align:center;">姓名</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">已签到</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">未签到</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">请假</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">结束课时数</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">总课时数</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'sign" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].sign + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'unsign" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].unsign + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'vacate" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].vacate + '</a></td>');
        tmpHTMLStr.push('   <td>' + data[i].over + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].total + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#cardblock_Classes_Item_Detail_signin').append($(tmpHTMLStr.join('')));
    $('.a-link-classes-item-detail-signin-sign').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_SignIn('sign', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-signin-unsign').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_SignIn('unsign', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-signin-vacate').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_SignIn('vacate', $(arguments[0].target).attr('data-target'));
        }
    });
};

function loadClassItemInfoDetail_SignIn(symbol, student) {
    var data = ['2017-9-21', '2017-10-5', '2017-10-8', '2017-10-15'];

    var tmpArr = student.split('|');
    var stuId = tmpArr[0];
    var stuName = tmpArr[1];
    var title = (symbol == 'sign' ? '已签到' : symbol == 'unsign' ? '未签到' : '请假');
    $('#modal_Class_Item_Detail .modal-title').text(title + '详情 - ' + stuName);
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i] + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadClassItemInfo_Hw(classId) {
    var data = [
        {
            id: '1',
            name: '学员 1',
            complete: 10,
            uncomplete: 0,
            total: 10,
            accuracy: 88
        }, {
            id: '2',
            name: '学员 2',
            complete: 8,
            uncomplete: 2,
            total: 10,
            accuracy: 80
        }, {
            id: '3',
            name: '学员 3',
            complete: 3,
            uncomplete: 7,
            total: 10,
            accuracy: 20
        }, {
            id: '4',
            name: '学员 4',
            complete: 10,
            uncomplete: 0,
            total: 10,
            accuracy: 100
        }, {
            id: '5',
            name: '学员 5',
            complete: 9,
            uncomplete: 1,
            total: 10,
            accuracy: 79
        }
    ];

    $('#cardblock_Classes_Item_Detail_homework').empty();
    var tmpClassStr = 'a-link-classes-item-detail-homework-';
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="text-align:center;">姓名</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">已完成</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">未完成</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">正确率(%)</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">总作业数</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'complete" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].complete + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'uncomplete" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].uncomplete + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'accuracy" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].accuracy + '</a></td>');
        tmpHTMLStr.push('   <td>' + data[i].total + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#cardblock_Classes_Item_Detail_homework').append($(tmpHTMLStr.join('')));
    $('.a-link-classes-item-detail-homework-complete').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Hw('complete', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-homework-uncomplete').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Hw('uncomplete', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-homework-accuracy').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Hw('accuracy', $(arguments[0].target).attr('data-target'));
        }
    });
};

function loadClassItemInfoDetail_Hw(symbol, student) {
    var data = [
        {
            accuracy: 100,
            date: '2017-9-21'
        }, {
            accuracy: 84,
            date: '2017-9-25'
        }, {
            accuracy: 95,
            date: '2017-9-29'
        }, {
            accuracy: 70,
            date: '2017-10-5'
        }, {
            accuracy: 88,
            date: '2017-10-8'
        }, {
            accuracy: 100,
            date: '2017-10-10'
        }, {
            accuracy: 90,
            date: '2017-10-13'
        }, {
            accuracy: 66,
            date: '2017-10-15'
        }
    ];

    var tmpArr = student.split('|');
    var stuId = tmpArr[0];
    var stuName = tmpArr[1];
    var title = (symbol == 'complete' ? '已完成' : symbol == 'uncomplete' ? '未完成' : '正确率');
    $('#modal_Class_Item_Detail .modal-title').text(title + '详情 - ' + stuName);
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    if (symbol != 'uncomplete') {
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">正确率</th>');
    }

    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].date + '</td>');
        if (symbol != 'uncomplete') {
            tmpHTMLStr.push('   <td>' + data[i].accuracy + '</td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadClassItemInfo_Exam(classId) {
    var data = [
        {
            id: '1',
            name: '学员 1',
            complete: 10,
            uncomplete: 0,
            total: 10,
            accuracy: 88
        }, {
            id: '2',
            name: '学员 2',
            complete: 8,
            uncomplete: 2,
            total: 10,
            accuracy: 80
        }, {
            id: '3',
            name: '学员 3',
            complete: 3,
            uncomplete: 7,
            total: 10,
            accuracy: 20
        }, {
            id: '4',
            name: '学员 4',
            complete: 10,
            uncomplete: 0,
            total: 10,
            accuracy: 100
        }, {
            id: '5',
            name: '学员 5',
            complete: 9,
            uncomplete: 1,
            total: 10,
            accuracy: 79
        }
    ];

    $('#cardblock_Classes_Item_Detail_exam').empty();
    var tmpClassStr = 'a-link-classes-item-detail-exam-';
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="text-align:center;">姓名</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">已完成</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">未完成</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">正确率(%)</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">总测试次数</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'complete" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].complete + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'uncomplete" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].uncomplete + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'accuracy" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].accuracy + '</a></td>');
        tmpHTMLStr.push('   <td>' + data[i].total + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#cardblock_Classes_Item_Detail_exam').append($(tmpHTMLStr.join('')));
    $('.a-link-classes-item-detail-exam-complete').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Exam('complete', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-exam-uncomplete').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Exam('uncomplete', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-exam-accuracy').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Exam('accuracy', $(arguments[0].target).attr('data-target'));
        }
    });
};

function loadClassItemInfoDetail_Exam(symbol, student) {
    var data = [
        {
            accuracy: 100,
            date: '2017-9-21'
        }, {
            accuracy: 84,
            date: '2017-9-25'
        }, {
            accuracy: 95,
            date: '2017-9-29'
        }, {
            accuracy: 70,
            date: '2017-10-5'
        }, {
            accuracy: 88,
            date: '2017-10-8'
        }, {
            accuracy: 100,
            date: '2017-10-10'
        }, {
            accuracy: 90,
            date: '2017-10-13'
        }, {
            accuracy: 66,
            date: '2017-10-15'
        }
    ];

    var tmpArr = student.split('|');
    var stuId = tmpArr[0];
    var stuName = tmpArr[1];
    var title = (symbol == 'complete' ? '已完成' : symbol == 'uncomplete' ? '未完成' : '正确率');
    $('#modal_Class_Item_Detail .modal-title').text(title + '详情 - ' + stuName);
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    if (symbol != 'uncomplete') {
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">正确率</th>');
    }

    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].date + '</td>');
        if (symbol != 'uncomplete') {
            tmpHTMLStr.push('   <td>' + data[i].accuracy + '</td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadClassItemInfo_Teach(classId) {
    var data = [
        {
            id: '1',
            name: '教员 1',
            level: {
                id: '1',
                name: '初级'
            },
            ontime: 5,
            notontime: 1,
            miss: 1,
            substitution: 0,
            schedule: 20,
            topic: 0,
            doc: 2
        }, {
            id: '2',
            name: '教员 2',
            level: {
                id: '2',
                name: '中级'
            },
            ontime: 6,
            notontime: 0,
            miss: 0,
            substitution: 3,
            schedule: 30,
            topic: 10,
            doc: 0
        }
    ];

    $('#cardblock_Classes_Item_Detail_teacher').empty();
    var tmpClassStr = 'a-link-classes-item-detail-teacher-';
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="text-align:center;">姓名</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">级别</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">按时上课</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">未按时上课</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">缺课</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">代课</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">课程安排</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">题库贡献</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">教案贡献</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'ontime" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].ontime + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'notontime" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].notontime + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'miss" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].miss + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'substitution" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].substitution + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'schedule" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].schedule + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'topic" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].topic + '</a></td>');
        tmpHTMLStr.push('   <td><a class="' + tmpClassStr + 'doc" href="#" data-target="' + data[i].id + '|' + data[i].name + '">' + data[i].doc + '</a></td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#cardblock_Classes_Item_Detail_teacher').append($(tmpHTMLStr.join('')));
    $('.a-link-classes-item-detail-teacher-ontime').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('ontime', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-notontime').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('notontime', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-miss').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('miss', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-substitution').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('substitution', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-schedule').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('schedule', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-topic').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('topic', $(arguments[0].target).attr('data-target'));
        }
    });

    $('.a-link-classes-item-detail-teacher-doc').on('click', function () {
        if (parseInt($(arguments[0].target).text()) > 0) {
            loadClassItemInfoDetail_Teach('doc', $(arguments[0].target).attr('data-target'));
        }
    });
};

function loadClassItemInfoDetail_Teach(symbol, student) {
    var data = [
        {
            room: { id: '1', name: '教室 1' },
            course: { id: '1', symbol: 'B-01-001', content: '路径跟随', },
            date: '2017-9-21'
        }, {
            room: { id: '1', name: '教室 1' },
            course: { id: '2', symbol: 'B-02-001', content: '变量', },
            date: '2017-9-25'
        }, {
            room: { id: '1', name: '教室 1' },
            course: { id: '3', symbol: 'B-01-006', content: '函数', },
            date: '2017-9-29'
        }, {
            room: { id: '2', name: '教室 2' },
            course: { id: '4', symbol: 'B-04-001', content: '面向对象', },
            date: '2017-10-5'
        }, {
            room: { id: '1', name: '教室 1' },
            course: { id: '5', symbol: 'B-02-005', content: 'JavaScript基础', },
            date: '2017-10-8'
        }
    ];

    var tmpArr = student.split('|');
    var stuId = tmpArr[0];
    var stuName = tmpArr[1];
    var title = (symbol == 'ontime' ? '按时上课' : symbol == 'notontime' ? '未按时上课' : symbol == 'miss' ? '缺课' : symbol == 'substitution' ? '代课' : symbol == 'schedule' ? '课程安排' : symbol == 'topic' ? '题库贡献' : '教案贡献');
    $('#modal_Class_Item_Detail .modal-title').text(title + '详情 - ' + stuName);
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    if (symbol == 'topic' || symbol == 'doc') {
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">创建时间</th>');
    } else {
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">教室</th>');
    }

    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程编号</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程内容</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data[i].date + '</td>');
        if (symbol != 'topic' && symbol != 'doc') {
            tmpHTMLStr.push('   <td>' + data[i].room.name + '</td>');
        }

        tmpHTMLStr.push('   <td>' + data[i].course.symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].course.content + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function showCreateNewClassPopup() {
    if ($('#modal_Class_New').length <= 0) {
        buildCreateNewClassPopup(null);
        fillNewClassSymbol();
        fillRoomList();
        fillTeacherList();

        $('#btn_NewRoom_Class_New').on('click', function () {
            $('#modal_Class_New').modal('hide');
            if ($('#modal_NewRoom').length <= 0) {
                buildCreateNewRoomPopup();
            }

            $('#modal_NewRoom').modal('show');
        });
    }

    $('#modal_Class_New').modal('show');
};

function formatData_TeacherList(rspXML) {
    var data = [
        { name: '教员 1', id: '1' },
        { name: '教员 2', id: '2' },
        { name: '教员 3', id: '3' }
    ];

    return data;
};

function formatData_RoomList(rspXML) {
    var data = [{ name: '教室 1', id: '1', max: 11 }, { name: '教室 2', id: '2', max: 22 }, { name: '教室 3', id: '3', max: 33 }];
    return data;
};

function buildCreateNewClassPopup(rspXML) {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="modal fade" id="modal_Class_New" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
    tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
    tmpHTMLStr.push('        <div class="modal-content">');
    tmpHTMLStr.push('            <div class="modal-header">');
    tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">创建班级</h5>');
    tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
    tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
    tmpHTMLStr.push('                </button>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('            <div class="modal-body">');
    tmpHTMLStr.push('                <form>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="sel_Level_Class_New" class="col-3 col-form-label class-create">级别</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <select class="form-control form-control-sm" id="sel_Level_Class_New">');
    tmpHTMLStr.push('                                <option value="-1">请选择级别</option>');
    tmpHTMLStr.push('                                <option value="1">初级</option>');
    tmpHTMLStr.push('                                <option value="2">中级</option>');
    tmpHTMLStr.push('                                <option value="3">高级</option>');
    tmpHTMLStr.push('                                <option value="4">拓展</option>');
    tmpHTMLStr.push('                                <option value="5">课程包</option>');
    tmpHTMLStr.push('                            </select>');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Symbol_Class_New" class="col-3 col-form-label class-create">编号</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <input class="form-control form-control-sm" type="text" value="" id="txt_Symbol_Class_New" readonly>');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Name_Class_New" class="col-3 col-form-label class-create">名称</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <input class="form-control form-control-sm" type="text" value="" id="txt_Name_Class_New">');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Teacher_Class_New`" class="col-3 col-form-label class-create">教员</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <select class="form-control form-control-sm" value="" id="sel_Teacher_Class_New" disabled></select>');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Room_Class_New" class="col-3 col-form-label class-create">教室</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <select class="form-control form-control-sm" value="" id="sel_Room_Class_New" disabled></select>');
    tmpHTMLStr.push('                        </div>');
    //tmpHTMLStr.push('                        <div class="col-2">');
    //tmpHTMLStr.push('                            <button class="btn btn-sm btn-primary" id="btn_NewRoom_Class_New" type="button">添加</button>');
    //tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Start_Class_New" class="col-3 col-form-label class-create">开学时间</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <input class="form-control form-control-sm" type="date" value="' + formatForDateInput(null) + '" id="txt_Start_Class_New">');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                    <div class="form-group row">');
    tmpHTMLStr.push('                        <label for="txt_Amount_Class_New" class="col-3 col-form-label class-create">人数</label>');
    tmpHTMLStr.push('                        <div class="col-9">');
    tmpHTMLStr.push('                            <input class="form-control form-control-sm" type="number" value="10" id="txt_Amount_Class_New">');
    tmpHTMLStr.push('                        </div>');
    tmpHTMLStr.push('                    </div>');
    tmpHTMLStr.push('                </form>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('            <div class="modal-footer">');
    tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
    tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-primary">确定</button>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');

    $('body').append($(tmpHTMLStr.join('')));

    $('#txt_Amount_Class_New').on('change', function () {
        var amoutTxt = $(arguments[0].target);
        var max = parseInt(amoutTxt.prop('max'));
        if (parseInt(amoutTxt.val()) > max) {
            amoutTxt.val(max);
        }
    });

    $('#sel_Level_Class_New').on('change', function () {
        var currVal = $(arguments[0].target).val();
        if (currVal == '-1') {
            $('#sel_Teacher_Class_New').prop('disabled', true);
            $('#sel_Room_Class_New').prop('disabled', true);
        } else {
            $('#sel_Teacher_Class_New').prop('disabled', false);
            $('#sel_Room_Class_New').prop('disabled', false);
        }
    });
};

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
    var selCmp = $('#sel_Room_Class_New');
    selCmp.empty();
    selCmp.append($('<option value="-1">请选择教室</option>'));
    var data = formatData_RoomList(null);
    var tmpOptHTML = '';
    for (var i = 0; i < data.length; i++) {
        selCmp.append($('<option value="' + data[i].id + '|' + data[i].max + '">' + data[i].name + ' (最多容纳' + data[i].max + '人)</option>'));
    }

    selCmp.on('change', function () {
        var params = $(arguments[0].target).val().split('|');
        var amoutTxt = $('#txt_Amount_Class_New');
        amoutTxt.prop('max', params[1]);
        if (parseInt(amoutTxt.val()) > parseInt(params[1])) {
            amoutTxt.val(params[1]);
        }
    });
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
    var selCmp = $('#sel_Teacher_Class_New');
    selCmp.empty();
    selCmp.append($('<option value="-1">请选择教员</option>'));
    var data = formatData_TeacherList(null);
    var tmpOptHTML = '';
    for (var i = 0; i < data.length; i++) {
        selCmp.append($('<option value="' + data[i].id + '">' + data[i].name + '</option>'));
    }
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
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="modal fade" id="modal_NewRoom" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
    tmpHTMLStr.push('   <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
    tmpHTMLStr.push('       <div class="modal-content">');
    tmpHTMLStr.push('           <div class="modal-header">');
    tmpHTMLStr.push('               <h5 class="modal-title" id="exampleModalLabel">添加教室</h5>');
    tmpHTMLStr.push('               <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
    tmpHTMLStr.push('                   <span aria-hidden="true">&times;</span>');
    tmpHTMLStr.push('               </button>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="modal-body">');
    tmpHTMLStr.push('               <form>');
    tmpHTMLStr.push('                   <div class="row">');
    tmpHTMLStr.push('                       <div class="form-group  col-md-6">');
    tmpHTMLStr.push('                           <label for="txt_Name_Create_New_Room" class="col-form-label">教室名称:</label>');
    tmpHTMLStr.push('                           <input type="text" class="form-control form-control-sm" id="txt_Name_Create_New_Room">');
    tmpHTMLStr.push('                       </div>');
    tmpHTMLStr.push('                       <div class="form-group  col-md-6">');
    tmpHTMLStr.push('                           <label for="txt_Max_Create_New_Room" class="col-form-label">最大容纳人数:</label>');
    tmpHTMLStr.push('                           <input type="number" class="form-control form-control-sm" id="txt_Max_Create_New_Room">');
    tmpHTMLStr.push('                       </div>');
    tmpHTMLStr.push('                   </div>');
    tmpHTMLStr.push('                </form>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="modal-footer">');
    tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
    tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-primary" id="btn_OK_Create_New_Room">添加</button>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('</div>');

    $('body').append($(tmpHTMLStr.join('')));

    $('#btn_OK_Create_New_Room').on('click', function (e) {
        $('#modal_NewRoom').modal('hide');
        var maxCount = $('#txt_Max_Create_New_Room').val();
        $('#sel_Room_Class_New').append($('<option value="getnewroomid|' + maxCount + '">' + $('#txt_Name_Create_New_Room').val() + '</option>'));
        $('#sel_Room_Class_New').val('getnewroomid|' + maxCount);
        $('#txt_Amount_Class_New').prop('max', maxCount);
    });

    $('#modal_NewRoom').on('hidden.bs.modal', function (e) {
        $('#modal_Class_New').modal('show');
    })
};

/*Student*/
function formatData_Student() {
    var data = [
        {
            id: '1',
            name: 'Tom',
            gender: '男',
            level: { id: '1', name: '初级' },
            declare: { id: '1', name: 'C-01-001' },
            age: 14,
            from: '',
            finance: 0
        }, {
            id: '2',
            name: 'Alice',
            gender: '女',
            level: { id: '2', name: '中级' },
            declare: { id: '1', name: 'C-02-003' },
            age: 13,
            from: '升学',
            finance: 1
        }, {
            id: '3',
            name: 'Jack',
            gender: '男',
            level: { id: '3', name: '高级' },
            declare: { id: '1', name: 'C-03-002' },
            age: 15,
            from: '',
            finance: 0
        }
    ];

    return data;
};

function buildDataHTML_StdNew() {
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
    buildDataTopHTML();
    buildDataHeaderHTML_StdNew();
    buildDataTableHTML_StdNew(data);
};

function buildDataHeaderHTML_StdNew() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">未分班学员</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_StdNew(data) {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 150px;"></th>');
    tmpHTMLStr.push('                   <th>姓名</th>');
    tmpHTMLStr.push('                   <th>性别</th>');
    tmpHTMLStr.push('                   <th>级别</th>');
    tmpHTMLStr.push('                   <th>年龄</th>');
    tmpHTMLStr.push('                   <th>申报班级</th>');
    tmpHTMLStr.push('                   <th>来源</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-student-new-item-assign" data-target="' + data[i].id + '|' + data[i].declare.id + '">分配班级</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info btn-student-new-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].declare.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].from + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('.btn-student-new-item-assign').on('click', function () {
        showStudentAssignPopup($(arguments[0].target).attr('data-target'), 1);
    });

    $('.btn-student-new-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 1);
    });
};

function showStudentAssignPopup(dataTarget, type) {
    var data = [
        { id: '1', name: '初级 11 班', teacher: { id: '1', name: '教员 1' }, room: { id: '1', name: '教室 1' }, total: 15, remain: 2, start: '2017-11-11' },
        { id: '2', name: '初级 23 班', teacher: { id: '2', name: '教员 2' }, room: { id: '2', name: '教室 2' }, total: 10, remain: 1, start: '2017-12-21' },
        { id: '3', name: '初级 31 班', teacher: { id: '3', name: '教员 3' }, room: { id: '1', name: '教室 1' }, total: 15, remain: 10, start: '2018-01-01' }
    ];

    dataTarget = dataTarget.split('|');
    var stdId = dataTarget[0];
    var classId = dataTarget[1];
    $('#modal_Student_New_Assign .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 80px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">班级</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">教员</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">教室</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">总人数</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">剩余学位</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">开班时间</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-student-new-assign-ok" data-target="' + data[i].id + '|' + stdId + '">');
        tmpHTMLStr.push(type == 1 ? '分配' : '调整');
        tmpHTMLStr.push('       </button>');
        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].teacher.name + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].room.name + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].total + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].remain + '</td>');
        tmpHTMLStr.push('   <td>' + data[i].start + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Student_New_Assign .modal-body').append($(tmpHTMLStr.join('')));
    $('.btn-student-new-assign-ok').on('click', function () {
        var tmpArr = $(arguments[0].target).attr('data-target').split('|');
        var classId = tmpArr[0];
        var stdId = tmpArr[1];
        alert('分配学员--ID: ' + stdId + ' 到班级--ID: ' + classId);
        $('#modal_Student_New_Assign').modal('hide');
        $('#tr_Student_New_Assign_' + stdId).remove();
    });

    $('#modal_Student_New_Assign').modal('show');
};

function showStudentDetailPopup(studentId, type) {
    var classData = [
        { id: '-1', name: '尚未分配', symbol: '' },
        { id: '1', name: '初级 1 班', symbol: 'B-01-001' },
        { id: '2', name: '初级 2 班', symbol: 'B-01-002' },
        { id: '3', name: '中级 1 班', symbol: 'B-02-001' },
        { id: '4', name: '中级 2 班', symbol: 'B-02-002' },
        { id: '5', name: '高级 1 班', symbol: 'B-03-001' },
    ];

    var tmpHTMLArr = [];
    var tmpName = '';
    for (var i = 0; i < classData.length; i++) {
        tmpName = classData[i].name + (classData[i].symbol == '' ? '' : ' (' + classData[i].symbol + ')');
        tmpHTMLArr.push('<option value="' + classData[i].id + '">' + tmpName + '</option>');
    }

    $('#select_Class_Student_Detail').empty();
    $('#select_Class_Student_Detail').append($(tmpHTMLArr.join('')));
    tmpHTMLArr = [];
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('<option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    if ($('#select_City_Province_Student_Detail option').length == 0) {
        $('#select_City_Province_Student_Detail').append($(tmpHTMLArr.join('')));
        tmpHTMLArr = [];
        for (var i = 0; i < _gCitys[0].c.length; i++) {
            tmpHTMLArr.push('<option value="' + _gCitys[0].c[i] + '">' + _gCitys[0].c[i] + '</option>');
        }

        $('#select_City_City_Student_Detail').append($(tmpHTMLArr.join('')));
        $("#select_City_Province_Student_Detail").change(function () {
            var pVal = $("#select_City_Province_Student_Detail").val();
            reloadCityList(pVal);
        });
    }

    var stdData = {
        id: '1',
        symbol: 'Std-01-0011',
        name: 'Alice',
        levelId: '1',
        classId: '-1',
        gender: '2',
        birthday: '2004-08-22',
        province: '广东',
        city: '深圳',
        address: '福田区东海花园二期13栋1单元808',
        school: '深圳中学',
        contact: 'Mark Li',
        number: '13875513866'
    };

    if (type == 1) {
        $('#row_Buttons_Student_Detail').hide();
    } else {
        $('#row_Buttons_Student_Detail').show();
    }

    $('#btn_Student_Detail_SignIn').attr('data-target', stdData.id);
    $('#btn_Student_Detail_Homework').attr('data-target', stdData.id);
    $('#btn_Student_Detail_Exam').attr('data-target', stdData.id);
    $('#sel_Level_Student_Detail').val(stdData.levelId)
    $('#txt_Symbol_Student_Detail').val(stdData.symbol);
    $('#select_Class_Student_Detail').val(stdData.classId);
    $('#txt_Name_Student_Detail').val(stdData.name);
    $('#rb_Gender_Student_Detail_1').prop('checked', stdData.gender == '1');
    $('#rb_Gender_Student_Detail_2').prop('checked', stdData.gender == '2');
    $('#txt_Birthday_Student_Detail').val(stdData.birthday);
    $('#select_City_Province_Student_Detail').val(stdData.province);
    reloadCityList($('#select_City_Province_Student_Detail'), $('#select_City_City_Student_Detail'));
    $('#select_City_City_Student_Detail').val(stdData.city);
    $('#txt_Address_Student_Detail').val(stdData.address);
    $('#txt_School_Student_Detail').val(stdData.school);
    $('#txt_Contect_Student_Detail').val(stdData.contact);
    $('#txt_PhoneNumber_Student_Detail').val(stdData.number);

    $('#sel_Level_Student_Detail').prop('disabled', type == 3 ? true : false);
    $('#txt_Address_Student_Detail').prop('readonly', type == 3 ? true : false);
    $('#txt_School_Student_Detail').prop('readonly', type == 3 ? true : false);
    $('#txt_Contect_Student_Detail').prop('readonly', type == 3 ? true : false);
    $('#txt_PhoneNumber_Student_Detail').prop('readonly', type == 3 ? true : false);

    $('#modal_Student_Detail').modal('show');
};

function buildDataHTML_StdCurrent() {
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
    var data = [
        {
            id: '1',
            symbol: 'B_01_001',
            title: '初级 1 班'
        }, {
            id: '2',
            symbol: 'B_02_002',
            title: '中级 2 班'
        }, {
            id: '3',
            symbol: 'B_03_003',
            title: '高级 3 班'
        }
    ];

    var rspXML = "";
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_StdCurrent();
    buildDataTableHTML_StdCurrent(data);
};

function buildDataHeaderHTML_StdCurrent() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">已分班学员</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_StdCurrent(data) {
    var headerId, collapseId, cardblockId;
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('   <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('       <div class="accordion-white-bg" id="accordion_Class_Student_Old" style="font-size: 14px;" role="tablist">');
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_Student_Old_Class_Item_' + data[i].id;
        collapseId = 'collapse_Student_Old_Class_Item_' + data[i].id;
        cardblockId = 'cardblock_Student_Old_Class_Item_' + data[i].id;
        tmpHTMLStr.push('<div class="card">');
        tmpHTMLStr.push('   <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('       <div class="row">');
        tmpHTMLStr.push('           <div class="col-1" style="text-align:center;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('           <div class="col-3">');
        tmpHTMLStr.push('               <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].title + '</a>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('           <div class="col-2">' + data[i].symbol + '</div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('   <div id="' + collapseId + '" class="collapse collapse-student-old-class-item" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Class_Student_Old" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('       <div class="card-block" id="' + cardblockId + '">');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
    }
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.collapse-student-old-class-item').on('show.bs.collapse', function () {
        var classId = $(arguments[0].target).attr('data-target');
        buildClassStdListCurrent(classId);
    });
};

function buildClassStdListCurrent(classId) {
    var data = formatData_Student('');
    var container = $('#cardblock_Student_Old_Class_Item_' + classId);
    container.empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('           <th style="width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="width: 220px;"></th>');
    tmpHTMLStr.push('           <th>姓名</th>');
    tmpHTMLStr.push('           <th>性别</th>');
    tmpHTMLStr.push('           <th>级别</th>');
    tmpHTMLStr.push('           <th>年龄</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('       <tr id="tr_Student_Old_' + data[i].id + '">');
        tmpHTMLStr.push('           <td>' + (i + 1) + '</th>');
        tmpHTMLStr.push('           <td>');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-primary btn-student-old-item-assign" data-target="' + data[i].id + '|' + classId + '">转班</button>');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-warning btn-student-old-item-transfer" data-target="' + data[i].id + '|' + classId + '">转学</button>');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-danger btn-student-old-item-dropout" data-target="' + data[i].id + '|' + data[i].name + '">退学</button>');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-info btn-student-old-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('           </th>');
        tmpHTMLStr.push('           <td>' + data[i].name + '</th>');
        tmpHTMLStr.push('           <td>' + data[i].gender + '</th>');
        tmpHTMLStr.push('           <td>' + data[i].level.name + '</th>');
        tmpHTMLStr.push('           <td>' + data[i].age + '</th>');
        tmpHTMLStr.push('       </tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    container.append($(tmpHTMLStr.join('')));
    $('.btn-student-old-item-assign').on('click', function () {
        showStudentAssignPopup($(arguments[0].target).attr('data-target'), 2);
    });

    $('.btn-student-old-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 2);
    });

    $('.btn-student-old-item-dropout').on('click', function () {
        showStudentDropOut($(arguments[0].target).attr('data-target'));
    });

    $('.btn-student-old-item-transfer').on('click', function () {
        //showStudentDropOut($(arguments[0].target).attr('data-target'));
    });
};

function showStudentDropOut(studentInfo) {
    studentInfo = studentInfo.split('|');
    if ($('#modal_Student_Old_DropOut').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Student_Old_DropOut" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">');
        tmpHTMLStr.push('   <div class="modal-dialog" role="document">');
        tmpHTMLStr.push('       <div class="modal-content">');
        tmpHTMLStr.push('           <div class="modal-header" style="padding: 5px 15px;">');
        tmpHTMLStr.push('               <h5 class="modal-title" id="exampleModalLabel">退学确认</h5>');
        tmpHTMLStr.push('               <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                   <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('               </button>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('           <div class="modal-body" style="padding: 0px 15px;">');
        tmpHTMLStr.push('               <p style="padding-top:15px;">确认将学员 : ');
        tmpHTMLStr.push('                   <span style="padding:0 10px; color: red; font-weight:bold;">' + studentInfo[1] + '</span>退学吗?');
        tmpHTMLStr.push('               </p>');
        tmpHTMLStr.push('               <p class="text-warning" style="padding-top:15px;">');
        tmpHTMLStr.push('                   确认后学员信息将转入待退学学员并开始审核');
        tmpHTMLStr.push('               </p>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('           <div class="modal-footer" style="padding: 5px 15px;">');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-primary" data-dismiss="modal">确认</button>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
        $('body').append($(tmpHTMLStr.join('')));

        $('#modal_Student_Old_DropOut .btn-primary').on('click', function () {
            $('#tr_Student_Old_' + $(arguments[0].target).attr('data-target')).remove();
        });
    }

    $('#modal_Student_Old_DropOut').modal('show');
    $('#modal_Student_Old_DropOut .modal-body p span').text(studentInfo[1]);
    $('#modal_Student_Old_DropOut .btn-primary').attr('data-target', studentInfo[0]);
};

function buildDataHTML_StdCareers() {
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
    buildDataTopHTML();
    buildDataHeaderHTML_StdCareers();
    buildDataTableHTML_StdCareers(data);
};

function buildDataHeaderHTML_StdCareers() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">待升学学员</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_StdCareers(data) {
    var tmpHTMLStr = [];
    var tmpDisabled, temStatus;
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 200px;"></th>');
    tmpHTMLStr.push('                   <th>姓名</th>');
    tmpHTMLStr.push('                   <th>性别</th>');
    tmpHTMLStr.push('                   <th>级别</th>');
    tmpHTMLStr.push('                   <th>年龄</th>');
    tmpHTMLStr.push('                   <th>状态</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpDisabled = (data[i].finance == 1 ? 'disabled' : '');
        temStatus = (data[i].finance == 1 ? '待审核' : '');
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-student-careers-item-careers ' + tmpDisabled + '" data-target="' + data[i].id + '">升学</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-warning btn-student-careers-item-finish" data-target="' + data[i].id + '">结业</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info btn-student-careers-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</td>');
        tmpHTMLStr.push('                   <td>' + temStatus + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('.btn-student-careers-item-careers').on('click', function () {
        var currBtn = $(arguments[0].target);
        currBtn.addClass('disabled');
        $(currBtn.parent().parent().children()[6]).text('待审核');
    });

    $('.btn-student-careers-item-finish').on('click', function () {
        showFinishConfirm($(arguments[0].target));
    });

    $('.btn-student-careers-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 2);
    });
};

function showFinishConfirm(sourceBtn) {
    var params = sourceBtn.attr('data-target').split('|');
    var data = { id: '1', name: 'Tom' };
    if ($('#modal_Student_Finish_Confirm').length <= 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Student_Finish_Confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h6 class="modal-title" id="exampleModalLabel">结业确认</h6>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <p></p>');
        tmpHTMLStr.push('               <p>');
        tmpHTMLStr.push('                   <b class="text-primary" id="lb_Student_Finish_Confirm_Name">' + data.name + '</b>');
        tmpHTMLStr.push('                   立即结业而不升学吗？</br>');
        tmpHTMLStr.push('                   <b class="text-warning">结业后学员资料将转至市场专员。</b></br>');
        tmpHTMLStr.push('               </p>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-primary" id="btn_Student_Finish_Confirm_OK" data-target="' + data.id + '">确定</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_Student_Finish_Confirm_OK').on('click', function () {
            $('#modal_Student_Finish_Confirm').modal('hide');
            sourceBtn.parent().parent().remove();
        });
    }

    $('#btn_Student_Finish_Confirm_OK').attr('data-target', data.id);
    $('#lb_Student_Finish_Confirm_Name').html(data.name);
    $('#modal_Student_Finish_Confirm').modal('show');
};

function buildDataHTML_StdQuit() {
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
    buildDataTopHTML();
    buildDataHeaderHTML_StdQuit();
    buildDataTableHTML_StdQuit(data);
};

function buildDataHeaderHTML_StdQuit() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">待退学学员</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_StdQuit(data) {
    var tmpHTMLStr = [];
    var temStatus;
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 200px;"></th>');
    tmpHTMLStr.push('                   <th>姓名</th>');
    tmpHTMLStr.push('                   <th>性别</th>');
    tmpHTMLStr.push('                   <th>级别</th>');
    tmpHTMLStr.push('                   <th>年龄</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-student-quit-item-cancel" data-target="' + data[i].id + '">撤销</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info btn-student-quit-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.btn-student-quit-item-cancel').on('click', function () {
        $(arguments[0].target).parent().parent().remove();
    });

    $('.btn-student-quit-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 2);
    });
};

function buildDataHTML_StdTransfer() {
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
    buildDataTopHTML();
    buildDataHeaderHTML_StdTransfer();
    buildDataTableHTML_StdTransfer(data);
};

function buildDataHeaderHTML_StdTransfer() {
    var tmpHTMLStr = '<div class="row" style="padding:5px 10px;">' +
    '    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">' +
    '        <div class="container-fluid">' +
    '            <div class="row justify-content-around">' +
    '                <div class="col-2 data-panel-title" style="line-height:40px;">待转学学员</div>' +
    '                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>' +
    '                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">' +
    '                </div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

    $('#container_Datas').append($(tmpHTMLStr));
};

function buildDataTableHTML_StdTransfer(data) {
    var tmpHTMLStr = [];
    var tmpFlag, temStatus;
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 200px;"></th>');
    tmpHTMLStr.push('                   <th>姓名</th>');
    tmpHTMLStr.push('                   <th>性别</th>');
    tmpHTMLStr.push('                   <th>级别</th>');
    tmpHTMLStr.push('                   <th>年龄</th>');
    tmpHTMLStr.push('                   <th>状态</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {

        tmpDisabled = (data[i].finance == 1 ? 'disabled' : '');
        temStatus = (data[i].finance == 1 ? '待审核' : '');
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        if (tmpFlag == 2) {
            tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary btn-student-transfer-item-out' + tmpDisabled + '" data-target="' + data[i].id + '">升学</button>');
        } else {
            tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-warning btn-student-transfer-item-into" data-target="' + data[i].id + '">结业</button>');
        }

        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info btn-student-transfer-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</td>');
        tmpHTMLStr.push('                   <td>' + temStatus + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('.btn-student-transfer-item-careers').on('click', function () {
        var currBtn = $(arguments[0].target);
        currBtn.addClass('disabled');
        $(currBtn.parent().parent().children()[6]).text('待审核');
    });

    $('.btn-student-transfer-item-finish').on('click', function () {
        showFinishConfirm($(arguments[0].target));
    });

    $('.btn-student-transfer-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 2);
    });
};





function showStudentSignInDetail(studentId) {
    var data = {
        id: '1',
        name: 'Alice',
        items: [
            { date: '2017-09-21', state: 1 },
            { date: '2017-09-23', state: 1 },
            { date: '2017-09-27', state: 1 },
            { date: '2017-10-09', state: 0 },
            { date: '2017-10-12', state: 2 },
            { date: '2017-10-15', state: 1 },
            { date: '2017-10-18', state: 3 },
            { date: '2017-10-21', state: 1 },
            { date: '2017-10-24', state: 1 },
            { date: '2017-10-27', state: 0 }
        ]
    };
    var container = $('#modal_Student_Detail_Info .modal-body');
    container.empty();
    $('#modal_Student_Detail_Info .modal-title').text('签到情况 - ' + data.name);
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">签到</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">迟到</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">请假</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">缺课</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        if (data.items[i].state == '1') {
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-success"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td></td><td></td><td></td>');
        } else if (data.items[i].state == '2') {
            tmpHTMLStr.push('   <td></td>');
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-warning"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td></td>');
            tmpHTMLStr.push('   <td></td>');
        } else if (data.items[i].state == '3') {
            tmpHTMLStr.push('   <td></td><td></td>');
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-info"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td></td>');
        } else {
            tmpHTMLStr.push('   <td></td><td></td><td></td>');
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-danger"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    container.append($(tmpHTMLStr.join('')));
    $('#modal_Student_Detail').modal('hide');
    $('#modal_Student_Detail_Info').modal('show');
};

function showStudentHwDetail(studentId) {
    var data = {
        id: '1',
        name: 'Alice',
        items: [
            { date: '2017-09-21', state: 1, accuracy: 80 },
            { date: '2017-09-23', state: 1, accuracy: 82 },
            { date: '2017-09-27', state: 1, accuracy: 84 },
            { date: '2017-10-09', state: 0, accuracy: 0 },
            { date: '2017-10-12', state: 1, accuracy: 86 },
            { date: '2017-10-15', state: 1, accuracy: 88 },
            { date: '2017-10-18', state: 1, accuracy: 90 },
            { date: '2017-10-21', state: 1, accuracy: 92 },
            { date: '2017-10-24', state: 0, accuracy: 0 },
            { date: '2017-10-27', state: 1, accuracy: 94 }
        ]
    };
    var container = $('#modal_Student_Detail_Info .modal-body');
    container.empty();
    $('#modal_Student_Detail_Info .modal-title').text('作业情况 - ' + data.name);
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">已完成</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">准确率(%)</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        if (data.items[i].state == '1') {
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-success"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td>' + data.items[i].accuracy + '</td>');
        } else {
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-warning"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td></td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    container.append($(tmpHTMLStr.join('')));
    $('#modal_Student_Detail').modal('hide');
    $('#modal_Student_Detail_Info').modal('show');
};

function showStudentExamDetail(studentId) {
    var data = {
        id: '1',
        name: 'Alice',
        items: [
            { date: '2017-09-21', state: 1, accuracy: 80, time: 450 },
            { date: '2017-09-23', state: 1, accuracy: 82, time: 530 },
            { date: '2017-09-27', state: 1, accuracy: 84, time: 600 },
            { date: '2017-10-09', state: 0, accuracy: 0, time: 0 },
            { date: '2017-10-12', state: 1, accuracy: 86, time: 445 },
            { date: '2017-10-15', state: 1, accuracy: 88, time: 529 },
            { date: '2017-10-18', state: 1, accuracy: 90, time: 580 },
            { date: '2017-10-21', state: 1, accuracy: 92, time: 350 },
            { date: '2017-10-24', state: 0, accuracy: 0, time: 0 },
            { date: '2017-10-27', state: 1, accuracy: 94, time: 401 }
        ]
    };
    var formatTime = function (second) {
        return parseInt(second / 60) + '分' + (second % 60) + '秒';
    };

    var container = $('#modal_Student_Detail_Info .modal-body');
    container.empty();
    $('#modal_Student_Detail_Info .modal-title').text('测试情况 - ' + data.name);
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">已完成</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">用时</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">准确率(%)</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        if (data.items[i].state == '1') {
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" checked disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-success"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td>' + formatTime(data.items[i].time) + '</td>');
            tmpHTMLStr.push('   <td>' + data.items[i].accuracy + '</td>');
        } else {
            tmpHTMLStr.push('   <td>');
            tmpHTMLStr.push('       <label class="custom-control custom-checkbox">');
            tmpHTMLStr.push('           <input type="checkbox" class="custom-control-input" disabled>');
            tmpHTMLStr.push('           <span class="custom-control-indicator bg-warning"></span>  ');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </td>');
            tmpHTMLStr.push('   <td></td>');
            tmpHTMLStr.push('   <td></td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    container.append($(tmpHTMLStr.join('')));
    $('#modal_Student_Detail').modal('hide');
    $('#modal_Student_Detail_Info').modal('show');
};

function showStudentCertificateDetail(studentId) {
    var data = {
        id: '1',
        name: 'Alice',
        items: [
            { date: '2017-09-21', status: '4', level: '初级', accuracy: 50, time: 630 },
            { date: '2017-09-21', status: '3', level: '初级', accuracy: 80, time: 450 },
            { date: '2017-09-23', status: '1', level: '中级', accuracy: 0, time: 0 },
            { date: '2017-09-23', status: '2', level: '中级', accuracy: 0, time: 0 },
            { date: '2017-09-27', status: '5', level: '高级', accuracy: 0, time: 0 },
            { date: '2017-09-27', status: '0', level: '高级', accuracy: 0, time: 0 }
        ]
    };

    var formatTime = function (second) {
        return parseInt(second / 60) + '分' + (second % 60) + '秒';
    };

    var container = $('#modal_Student_Detail_Info .modal-body');
    container.empty();
    $('#modal_Student_Detail_Info .modal-title').text('认证情况 - ' + data.name);
    var tmpHTMLStr = [];
    var tmpStatus, txtCls;
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">状态</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">认证次数</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">准确率(%)</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">用时</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        tmpStatus = '';
        switch (data.items[i].status) {
            case '0':
                txtCls = 'text-muted';
                tmpStatus = "不可用";
                break;
            case '1':
                txtCls = 'text-primary';
                tmpStatus = "可申请";
                break;
            case '2':
                txtCls = 'text-warning';
                tmpStatus = "待审核";
                break;
            case '3':
                txtCls = 'text-success';
                tmpStatus = "已通过";
                break;
            case '4':
                txtCls = 'text-danger';
                tmpStatus = "未通过";
                break;
            case '5':
                txtCls = 'text-info';
                tmpStatus = "待测试";
                break;
        }


        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <b class="' + txtCls + '">' + tmpStatus + '</b>');
        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + data.items[i].level + '</td>');
        tmpHTMLStr.push('   <td>' + (data.items[i].time == 0 ? '' : data.items[i].accuracy) + '</td>');
        tmpHTMLStr.push('   <td>' + (data.items[i].time == 0 ? '' : formatTime(data.items[i].time)) + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    container.append($(tmpHTMLStr.join('')));
    $('#modal_Student_Detail').modal('hide');
    $('#modal_Student_Detail_Info').modal('show');
};

/*Teacher*/
function formatData_Teacher() {
    var data = [
        {
            id: '1',
            name: 'Tom',
            gender: '男',
            level: { id: '1', name: '初级' },
            age: 34,
            status: '在职',
            vacate: 1
        }, {
            id: '2',
            name: 'Alice',
            gender: '女',
            level: { id: '2', name: '中级' },
            age: 23,
            status: '在职',
            vacate: 0
        }, {
            id: '3',
            name: 'Jack',
            gender: '男',
            level: { id: '3', name: '高级' },
            age: 45,
            status: '离职',
            vacate: 0
        }
    ];

    return data;
};

function buildDataHTML_Teacher() {
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
    var data = formatData_Teacher(rspXML);
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Teacher();
    buildDataTableHTML_Teacher(data);
};

function buildDataHeaderHTML_Teacher() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('                <div class="col-2 data-panel-title" style="line-height:40px;">教员总览</div>');
    tmpHTMLStr.push('                <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>');
    tmpHTMLStr.push('                <div class="col" id="container_DataHeader_Fields" style="padding-top:5px">');
    tmpHTMLStr.push('                </div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};

function buildDataTableHTML_Teacher(data) {
    var headerId, collapseId, cardblockId, accordionId;
    var subHeaderId, subCollapseId, subCardblockId, subAccordionId;
    accordionId = 'accordion_Teachers';
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('   <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('       <div class="accordion-white-bg" id="' + accordionId + '" style="font-size: 14px;" role="tablist">');
    for (var i = 0; i < data.length; i++) {
        headerId = 'hd_Teachers_Item_' + data[i].id;
        collapseId = 'collapse_Teachers_Item_' + data[i].id;
        cardblockId = 'cardblock_Teachers_Item_' + data[i].id;
        tmpHTMLStr.push('<div class="card">');
        tmpHTMLStr.push('   <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('       <table class="table" style="margin-bottom: 0px;">');
        tmpHTMLStr.push('           <tbody>');
        tmpHTMLStr.push('               <tr>');
        tmpHTMLStr.push('                   <td style="width: 50px;">' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td style="width: 100px;">');
        tmpHTMLStr.push('                       <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].name + '</a>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td style="width: 100px;">' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td style="width: 100px;">' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td style="width: 100px;">' + data[i].age + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].status + '</td>');
        tmpHTMLStr.push('                   <td>');
        if (data[i].vacate == '1') {
            tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-warning">准假</button>');
        }

        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('               </tr>');
        tmpHTMLStr.push('           </tbody>');
        tmpHTMLStr.push('       </table>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('   <div id="' + collapseId + '" class="collapse collapse-teachers-item" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#' + accordionId + '" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('       <div class="card-block" id="' + cardblockId + '">');
        subAccordionId = 'accordion_Teachers_Item_' + data[i].id + '_Basic';
        subHeaderId = 'hd_Teachers_Item_' + data[i].id + '_Basic';
        subCollapseId = 'collapse_Teachers_Item_' + data[i].id + '_Basic';
        subCardblockId = 'cardblock_Teachers_Item_' + data[i].id + '_Basic';
        tmpHTMLStr.push('           <div class="accordion-white-bg" id="' + subAccordionId + '" style="font-size: 14px;" role="tablist">');
        tmpHTMLStr.push('               <div class="card">');
        tmpHTMLStr.push('                   <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + subHeaderId + '">');
        tmpHTMLStr.push('                       <a data-toggle="collapse" href="#' + subCollapseId + '" aria-expanded="true" aria-controls="' + subCollapseId + '">基本情况</a>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div id="' + subCollapseId + '" class="collapse collapse-teachers-item-basic" role="tabpanel" aria-labelledby="' + subHeaderId + '" data-parent="#' + subAccordionId + '" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('                   <div class="card-block" id="' + subCardblockId + '">');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        subAccordionId = 'accordion_Teachers_Item_' + data[i].id + '_Class';
        subHeaderId = 'hd_Teachers_Item_' + data[i].id + '_Class';
        subCollapseId = 'collapse_Teachers_Item_' + data[i].id + '_Class';
        subCardblockId = 'cardblock_Teachers_Item_' + data[i].id + '_Class';
        tmpHTMLStr.push('           <div class="accordion-white-bg" id="' + subAccordionId + '" style="font-size: 14px;" role="tablist">');
        tmpHTMLStr.push('               <div class="card">');
        tmpHTMLStr.push('                   <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + subHeaderId + '">');
        tmpHTMLStr.push('                       <a data-toggle="collapse" href="#' + subCollapseId + '" aria-expanded="true" aria-controls="' + subCollapseId + '">教学情况</a>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div id="' + subCollapseId + '" class="collapse collapse-teachers-item-class" role="tabpanel" aria-labelledby="' + subHeaderId + '" data-parent="#' + subAccordionId + '" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('                   <div class="card-block" id="' + subCardblockId + '" style="overflow:auto;">');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
    }
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.collapse-teachers-item-basic').on('show.bs.collapse', function () {
        var teacherId = $(arguments[0].target).attr('data-target');
        buildTeacherBasicInfo(teacherId);
    });

    $('.collapse-teachers-item-class').on('show.bs.collapse', function () {
        var teacherId = $(arguments[0].target).attr('data-target');
        buildTeacherClassInfo(teacherId);
    });
};

function buildTeacherBasicInfo(teacherId) {
    var data = {
        id: '1',
        name: 'Tom',
        gender: '男',
        level: { id: '1', name: '初级' },
        age: 34,
        status: '在职'
    };

    var container = $('#cardblock_Teachers_Item_' + teacherId + '_Basic');
    container.empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('        <table class="table" style="margin-bottom: 0px;">');
    tmpHTMLStr.push('            <tbody>');
    tmpHTMLStr.push('               <tr>');
    tmpHTMLStr.push('                   <td style="border:none;"><b>姓名</b></td>');
    tmpHTMLStr.push('                   <td style="border:none;">' + data.name + '</td>');
    tmpHTMLStr.push('                   <td style="border:none;"><b>性别</b></td>');
    tmpHTMLStr.push('                   <td style="border:none;">' + data.gender + '</td>');
    tmpHTMLStr.push('                   <td style="border:none;"><b>级别</b></td>');
    tmpHTMLStr.push('                   <td style="border:none;">' + data.level.name + '</td>');
    tmpHTMLStr.push('                   <td style="border:none;"><b>年龄</b></td>');
    tmpHTMLStr.push('                   <td style="border:none;">' + data.age + '</td>');
    tmpHTMLStr.push('                   <td style="border:none;"><b>状态</b></td>');
    tmpHTMLStr.push('                   <td style="border:none;">' + data.status + '</td>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');

    container.append($(tmpHTMLStr.join('')));
};

function buildTeacherClassInfo(teacherId) {
    var data = [
        {
            id: '1',
            symbol: 'B_01_001',
            title: '初级 1 班',
            level: {
                id: '1',
                name: '初级'
            },
            startdate: '2018/01/10 ',
            amount: '10',
            max: 10,
            total: 40,
            miss: 0,
            vacate: 0,
            status: 0
        }, {
            id: '2',
            symbol: 'B_02_002',
            title: '中级 2 班',
            level: {
                id: '2',
                name: '中级'
            },
            startdate: '2017/08/12 ',
            amount: '12',
            max: 15,
            total: 35,
            miss: 1,
            vacate: 0,
            status: 1
        }, {
            id: '3',
            symbol: 'B_03_003',
            title: '高级 3 班',
            level: {
                id: '3',
                name: '高级'
            },
            startdate: '2017/06/01 ',
            amount: '13',
            max: 15,
            total: 50,
            miss: 0,
            vacate: 1,
            status: 2
        }
    ];
    var teacherName = "Tom";
    var tmpClass = '';
    var container = $('#cardblock_Teachers_Item_' + teacherId + '_Class');
    container.empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('        <table class="table table-striped" style="margin-bottom: 0px;width: auto;  max-width: unset">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr>');
    tmpHTMLStr.push('                   <th style="border:none;width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 100px;">编号</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 100px;"></th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 60px;">级别</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 100px;">开学日期</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 70px;">状态</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 80px;">人数</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 80px;">总课时数</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 60px;">缺课</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 60px;">请假</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 70px;">作业</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 70px;">测试</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 70px;">出勤</th>');
    tmpHTMLStr.push('                   <th style="border:none;width: 70px;">结业</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr>');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].title + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].startdate + '</td>');
        tmpHTMLStr.push('                   <td>' + (data[i].status == '0' ? '未开学' : data[i].status == '1' ? '进行中' : '结课') + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].amount + ' / ' + data[i].max + '</td>');
        tmpClass = 'a-link-teacher-item-' + teacherId;
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <a class="link-btn-successs ' + tmpClass + '-total" href="#" data-target="' + data[i].id + '">' + data[i].total + '</a>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <a class="link-btn-warning ' + tmpClass + '-miss" href="#" data-target="' + data[i].id + '">' + data[i].miss + '</a>');
        tmpHTMLStr.push('                   </td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <a class="link-btn-danger ' + tmpClass + '-vacate" href="#" data-target="' + data[i].id + '">' + data[i].vacate + '</a>');
        tmpHTMLStr.push('                   </td>');
        if (data[i].status != '0') {
            tmpClass = 'btn-teachers-item-' + teacherId;
            tmpHTMLStr.push('                   <td><button type="button" class="btn btn-sm btn-info ' + tmpClass + '-homework" data-target="' + data[i].id + '">详情</button></td>');
            tmpHTMLStr.push('                   <td><button type="button" class="btn btn-sm btn-info ' + tmpClass + '-exam" data-target="' + data[i].id + '">详情</button></td>');
            tmpHTMLStr.push('                   <td><button type="button" class="btn btn-sm btn-info ' + tmpClass + '-signin" data-target="' + data[i].id + '">详情</button></td>');
            tmpHTMLStr.push('                   <td>');
            if (data[i].status == '2') {
                tmpHTMLStr.push('                   <button type="button" class="btn btn-sm btn-info ' + tmpClass + '-certification" data-target="' + data[i].id + '">详情</button>');
            }

            tmpHTMLStr.push('                   </td>');
        } else {
            tmpHTMLStr.push('                   <td></td><td></td><td></td><td></td>');
        }

        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    var newTable = $(tmpHTMLStr.join(''));
    container.append(newTable);
    var ths = newTable.find('thead tr th');
    var tmpWidth = 0;
    for (var i = 0; i < ths.length; i++) {
        tmpWidth += parseInt($(ths[i]).css('width'));
    }

    if ($('#hd_Teachers_Item_' + teacherId + '_Class').width() < tmpWidth) {
        newTable.width(tmpWidth);
    } else {
        newTable.width('100%');
    }

    $('.a-link-teacher-item-' + teacherId + '-total').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Course('total', classId, teacherId);
    });

    $('.a-link-teacher-item-' + teacherId + '-miss').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Course('miss', classId, teacherId);
    });

    $('.a-link-teacher-item-' + teacherId + '-vacate').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Course('vacate', classId, teacherId);
    });

    $('.btn-teachers-item-' + teacherId + '-homework').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Hw(classId, teacherId);
    });

    $('.btn-teachers-item-' + teacherId + '-exam').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Exam('vacate', classId, teacherId);
    });

    $('.btn-teachers-item-' + teacherId + '-signin').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_SignIn(classId, teacherId);
    });

    $('.btn-teachers-item-' + teacherId + '-certification').on('click', function () {
        var classId = $(arguments[0].target).attr('data-target');
        loadTeacherDetail_Cert('vacate', classId, teacherId);
    });
};

function loadTeacherDetail_Course(symbol, classId, teacherId) {
    var data = {
        teacher: 'Tom',
        classes: { symbol: 'B-01-001', title: '初级 1 班' },
        items: [
            { date: '2017-09-21', course: { id: '1', symbol: 'B-01-006', content: '函数' }, sign: 12, miss: 1, vacate: 2 },
            { date: '2017-09-23', course: { id: '2', symbol: 'B-02-001', content: '变量', }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-09-27', course: { id: '3', symbol: 'B-01-006', content: '算法基础', }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-10-09', course: { id: '4', symbol: 'B-04-001', content: '面向对象', }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-10-12', course: { id: '5', symbol: 'B-02-005', content: 'JavaScript基础', }, sign: 14, miss: 1, vacate: 0 },
            { date: '2017-10-15', course: { id: '6', symbol: 'B-01-001', content: '函数 2' }, sign: 14, miss: 0, vacate: 1 },
            { date: '2017-10-18', course: { id: '7', symbol: 'B-01-002', content: '变量 2' }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-10-21', course: { id: '9', symbol: 'B-01-003', content: '算法基础 2' }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-10-24', course: { id: '8', symbol: 'B-01-004', content: '面向对象 2 ' }, sign: 14, miss: 1, vacate: 0 },
            { date: '2017-10-27', course: { id: '10', symbol: 'B-01-005', content: 'JavaScript基础 2' }, sign: 13, miss: 0, vacate: 2 }
        ]
    };

    var title = (symbol == 'total' ? '总课时数' : symbol == 'miss' ? '缺课' : '请假');
    $('#modal_Class_Item_Detail .modal-title').text(title + '详情 - ' + data.teacher + ' - ' + data.classes.title + '(' + data.classes.symbol + ')');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程编号</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程内容</th>');
    if (symbol == 'total') {
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">签到</th>');
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">缺课</th>');
        tmpHTMLStr.push('           <th style="border:none;text-align:center;">请假</th>');
    }

    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.content + '</td>');
        if (symbol == 'total') {
            tmpHTMLStr.push('   <td style="color:rgb(34,139,34);">' + data.items[i].sign + '</td>');
            tmpHTMLStr.push('   <td style="color:rgb(255,0,0);">' + data.items[i].miss + '</td>');
            tmpHTMLStr.push('   <td style="color:rgb(243,151,0);">' + data.items[i].vacate + '</td>');
        }

        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadTeacherDetail_Hw(classId, teacherId) {
    var data = {
        teacher: 'Tom',
        classes: { symbol: 'B-01-001', title: '初级 1 班' },
        items: [
            { date: '2017-09-21', course: { id: '1', symbol: 'B-01-006', content: '函数' }, accuracy: 100, complete: 15, uncomplete: 0 },
            { date: '2017-09-23', course: { id: '2', symbol: 'B-02-001', content: '变量', }, accuracy: 84, complete: 13, uncomplete: 2 },
            { date: '2017-09-27', course: { id: '3', symbol: 'B-01-006', content: '算法基础', }, accuracy: 95, complete: 12, uncomplete: 3 },
            { date: '2017-10-09', course: { id: '4', symbol: 'B-04-001', content: '面向对象', }, accuracy: 70, complete: 14, uncomplete: 1 },
            { date: '2017-10-12', course: { id: '5', symbol: 'B-02-005', content: 'JavaScript基础', }, accuracy: 88, complete: 15, uncomplete: 0 },
            { date: '2017-10-15', course: { id: '6', symbol: 'B-01-001', content: '函数 2' }, accuracy: 100, complete: 13, uncomplete: 2 },
            { date: '2017-10-18', course: { id: '7', symbol: 'B-01-002', content: '变量 2' }, accuracy: 90, complete: 11, uncomplete: 4 },
            { date: '2017-10-21', course: { id: '9', symbol: 'B-01-003', content: '算法基础 2' }, accuracy: 90, complete: 11, uncomplete: 4 },
            { date: '2017-10-24', course: { id: '8', symbol: 'B-01-004', content: '面向对象 2 ' }, accuracy: 95, complete: 12, uncomplete: 3 },
            { date: '2017-10-27', course: { id: '10', symbol: 'B-01-005', content: 'JavaScript基础 2' }, accuracy: 66, complete: 15, uncomplete: 0 }
        ]
    };

    $('#modal_Class_Item_Detail .modal-title').text('作业详情 - ' + data.teacher + ' - ' + data.classes.title + '(' + data.classes.symbol + ')');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程编号</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程内容</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">已完成</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">未完成</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">正确率</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.content + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(34,139,34);">' + data.items[i].complete + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(255,0,0);">' + data.items[i].uncomplete + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(243,151,0);">' + data.items[i].accuracy + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadTeacherDetail_Exam(classId, teacherId) {
    var data = {
        teacher: 'Tom',
        classes: { symbol: 'B-01-001', title: '初级 1 班' },
        items: [
            { date: '2017-09-21', course: { id: '1', symbol: 'B-01-006', content: '函数' }, accuracy: 100, complete: 15, uncomplete: 0, time: 450 },
            { date: '2017-09-23', course: { id: '2', symbol: 'B-02-001', content: '变量', }, accuracy: 84, complete: 13, uncomplete: 2, time: 530 },
            { date: '2017-09-27', course: { id: '3', symbol: 'B-01-006', content: '算法基础', }, accuracy: 95, complete: 12, uncomplete: 3, time: 600 },
            { date: '2017-10-09', course: { id: '4', symbol: 'B-04-001', content: '面向对象', }, accuracy: 70, complete: 14, uncomplete: 1, time: 445 },
            { date: '2017-10-12', course: { id: '5', symbol: 'B-02-005', content: 'JavaScript基础', }, accuracy: 88, complete: 15, uncomplete: 0, time: 529 },
            { date: '2017-10-15', course: { id: '6', symbol: 'B-01-001', content: '函数 2' }, accuracy: 100, complete: 13, uncomplete: 2, time: 562 },
            { date: '2017-10-18', course: { id: '7', symbol: 'B-01-002', content: '变量 2' }, accuracy: 90, complete: 11, uncomplete: 4, time: 401 },
            { date: '2017-10-21', course: { id: '9', symbol: 'B-01-003', content: '算法基础 2' }, accuracy: 90, complete: 11, uncomplete: 4, time: 445 },
            { date: '2017-10-24', course: { id: '8', symbol: 'B-01-004', content: '面向对象 2 ' }, accuracy: 95, complete: 12, uncomplete: 3, time: 350 },
            { date: '2017-10-27', course: { id: '10', symbol: 'B-01-005', content: 'JavaScript基础 2' }, accuracy: 66, complete: 15, uncomplete: 0, time: 487 },
        ]
    };

    var formatTime = function (second) {
        return parseInt(second / 60) + ' 分 ' + (second % 60) + ' 秒';
    };

    $('#modal_Class_Item_Detail .modal-title').text('测试详情 - ' + data.teacher + ' - ' + data.classes.title + '(' + data.classes.symbol + ')');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程编号</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程内容</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">已通过</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">未通过</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">平均正确率</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">平均用时</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.content + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(34,139,34);">' + data.items[i].complete + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(255,0,0);">' + data.items[i].uncomplete + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(243,151,0);">' + data.items[i].accuracy + '</td>');
        tmpHTMLStr.push('   <td>' + formatTime(data.items[i].time) + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadTeacherDetail_SignIn(classId, teacherId) {
    var data = {
        teacher: 'Tom',
        classes: { symbol: 'B-01-001', title: '初级 1 班' },
        items: [
            { date: '2017-09-21', course: { id: '1', symbol: 'B-01-006', content: '函数' }, sign: 15, miss: 0, vacate: 0 },
            { date: '2017-09-23', course: { id: '2', symbol: 'B-02-001', content: '变量', }, sign: 13, miss: 1, vacate: 1 },
            { date: '2017-09-27', course: { id: '3', symbol: 'B-01-006', content: '算法基础', }, sign: 12, miss: 3, vacate: 0 },
            { date: '2017-10-09', course: { id: '4', symbol: 'B-04-001', content: '面向对象', }, sign: 14, miss: 1, vacate: 0 },
            { date: '2017-10-12', course: { id: '5', symbol: 'B-02-005', content: 'JavaScript基础', }, sign: 15, miss: 0, vacate: 1 },
            { date: '2017-10-15', course: { id: '6', symbol: 'B-01-001', content: '函数 2' }, sign: 13, miss: 1, vacate: 0 },
            { date: '2017-10-18', course: { id: '7', symbol: 'B-01-002', content: '变量 2' }, sign: 11, miss: 3, vacate: 0 },
            { date: '2017-10-21', course: { id: '9', symbol: 'B-01-003', content: '算法基础 2' }, sign: 11, miss: 3, vacate: 1 },
            { date: '2017-10-24', course: { id: '8', symbol: 'B-01-004', content: '面向对象 2 ' }, sign: 12, miss: 2, vacate: 0 },
            { date: '2017-10-27', course: { id: '10', symbol: 'B-01-005', content: 'JavaScript基础 2' }, sign: 15, miss: 0, vacate: 0 },
        ]
    };

    $('#modal_Class_Item_Detail .modal-title').text('出勤详情 - ' + data.teacher + ' - ' + data.classes.title + '(' + data.classes.symbol + ')');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">日期</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程编号</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">课程内容</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">已签到</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">缺课</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">请假</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].date + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.symbol + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].course.content + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(34,139,34);">' + data.items[i].sign + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(255,0,0);">' + data.items[i].miss + '</td>');
        tmpHTMLStr.push('   <td style="color:rgb(243,151,0);">' + data.items[i].vacate + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function loadTeacherDetail_Cert(classId, teacherId) {
    var data = {
        teacher: 'Tom',
        classes: { symbol: 'B-01-001', title: '初级 1 班' },
        items: [
            { id: '1', name: '学员 1', sign: '15/15', hw: '15/15', hwacc: 95, exam: '5/5', examacc: 93, status: 1, accuracy: 88 },
            { id: '2', name: '学员 2', sign: '13/15', hw: '15/15', hwacc: 88, exam: '4/5', examacc: 90, status: 1, accuracy: 80 },
            { id: '3', name: '学员 3', sign: '10/15', hw: '12/15', hwacc: 70, exam: '3/5', examacc: 85, status: 0, accuracy: 20 },
            { id: '4', name: '学员 4', sign: '15/15', hw: '13/15', hwacc: 90, exam: '5/5', examacc: 100, status: 1, accuracy: 100 },
            { id: '5', name: '学员 5', sign: '14/15', hw: '15/15', hwacc: 80, exam: '5/5', examacc: 88, status: 1, accuracy: 79 }
        ]
    };

    $('#modal_Class_Item_Detail .modal-title').text('结业详情 - ' + data.teacher + ' - ' + data.classes.title + '(' + data.classes.symbol + ')');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">学员</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">出勤</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">作业</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">作业正确率</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">测试</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">测试正确率</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">认证</th>');
    tmpHTMLStr.push('           <th style="border:none;text-align:center;">认证正确率</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <th scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.items[i].name + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].sign + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].hw + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].hwacc + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].exam + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].examacc + '</td>');
        tmpHTMLStr.push('   <td>' + (data.items[i].status == "1" ? "通过" : '未通过') + '</td>');
        tmpHTMLStr.push('   <td>' + data.items[i].accuracy + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

/*Resource*/
function buildDataHTML_Lib() {
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
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Lib();
    buildDataTableHTML_Lib();
};

function buildDataHeaderHTML_Lib() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('                <div class="col data-panel-title" style="line-height:40px;">教学资料 - 题库 (仅自定义题库)</div>');
    tmpHTMLStr.push('                </div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};

function buildDataTableHTML_Lib(data) {
    var data = [
        { id: '1', title: '自定义客观题 1', course: { id: '1', symbol: 'B-01-001', title: '课程 1' }, from: '教员 1', type: '客观题', createdate: '2017-05-21', reference: '5', },
        { id: '2', title: '自定义实验题 2', course: { id: '1', symbol: 'B-01-001', title: '课程 1' }, from: '教员 3', type: '实验题', createdate: '2017-06-26', reference: '15', },
        { id: '3', title: '自定义客观题 3', course: { id: '2', symbol: 'B-02-002', title: '课程 2' }, from: '教员 5', type: '客观题', createdate: '2017-07-12', reference: '3', },
        { id: '4', title: '自定义实验题 4', course: { id: '2', symbol: 'B-02-002', title: '课程 2' }, from: '教员 2', type: '实验题', createdate: '2017-08-10', reference: '0', },
        { id: '5', title: '自定义客观题 5', course: { id: '3', symbol: 'B-03-003', title: '课程 3' }, from: '教员 3', type: '客观题', createdate: '2017-10-28', reference: '1', }
    ];

    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="margin-bottom: 0px;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('           <th style="width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="width: 80px;"></th>');
    tmpHTMLStr.push('           <th>类型</th>');
    tmpHTMLStr.push('           <th>题目</th>');
    tmpHTMLStr.push('           <th>对应课程</th>');
    tmpHTMLStr.push('           <th>贡献者</th>');
    tmpHTMLStr.push('           <th>提交时间</th>');
    tmpHTMLStr.push('           <th>被引用次数</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('       <tr>');
        tmpHTMLStr.push('           <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('           <td><button type="button" class="btn btn-sm btn-info btn-resource-lib-item" data-target="' + data[i].id + '">详情</button></td>');
        tmpHTMLStr.push('           <td>' + data[i].type + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].title + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].course.title + '(' + data[i].course.symbol + ')' + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].from + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].createdate + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].reference + '</td>');
        tmpHTMLStr.push('       </tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.btn-resource-lib-item').on('click', function () {
        var topicId = $(arguments[0].target).attr('data-target');
        showResourceLibItemDetail(topicId);
    });
};

function showResourceLibItemDetail(topicId) {
    var data = {
        id: '1',
        content: '自定义客观题 1',
        course: { id: '1', symbol: 'B-01-001', title: '课程 1' },
        from: '教员 1',
        type: { id: '1', name: '客观题' },
        createdate: '2017-05-21',
        reference: '5',
        correct: ['1', '4'],
        options: [
            { id: '1', content: 'options 1' },
            { id: '2', content: 'options 2' },
            { id: '3', content: 'options 3' },
            { id: '4', content: 'options 4' }
        ],
        attach: [],
        points: 'points 1'
    };

    if (topicId == '2') {
        data = {
            id: '1',
            content: '自定义实验题 1',
            course: { id: '1', symbol: 'B-01-001', title: '课程 1' },
            from: '教员 1',
            type: { id: '2', name: '实验题' },
            createdate: '2017-05-21',
            reference: '5',
            correct: [],
            options: [],
            attach: [
                'image/lessondoc_1.jpg',
                'image/lessondoc_2.jpg',
                'image/lessondoc_3.jpg',
                'image/lessondoc_4.jpg',
            ],
            points: 'points 2'
        };
    }

    $('#modal_Class_Item_Detail .modal-title').text('题目详情');
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="container-fluid">');
    tmpHTMLStr.push('   <form>');
    tmpHTMLStr.push('       <div class="row">');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_From" class="col-form-label col-form-label-sm">贡献者</label> ');
    tmpHTMLStr.push('               <input type="text" class="form-control form-control-sm" id="txt_Resource_Lib_Item_From" value="' + data.from + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Type" class="col-form-label col-form-label-sm">类型</label>');
    tmpHTMLStr.push('               <input type="text" class="form-control  form-control-sm" id="txt_Resource_Lib_Item_Type" value="' + data.type.name + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Date" class="col-form-label col-form-label-sm">创建时间</label>');
    tmpHTMLStr.push('               <input type="date" class="form-control form-control-sm" id="txt_Resource_Lib_Item_Date" value="' + data.createdate + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="row">');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Course" class="col-form-label col-form-label-sm">对应课程</label>');
    tmpHTMLStr.push('               <input type="text" class="form-control  form-control-sm" id="txt_Resource_Lib_Item_Course" value="' + data.course.title + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Symbol" class="col-form-label col-form-label-sm">课程编号</label>');
    tmpHTMLStr.push('               <input type="text" class="form-control  form-control-sm" id="txt_Resource_Lib_Item_Symbol" value="' + data.course.symbol + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('           <div class="form-group col-md-4">');
    tmpHTMLStr.push('               <label for="btn_Resource_Lib_Item_Reference" class="col-form-label col-form-label-sm">引用次数 ' + data.reference + '</label>');
    tmpHTMLStr.push('               <button type="button" class="form-control btn btn-sm btn-info" id="btn_Resource_Lib_Item_Reference">查看引用详情</button>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="row">');
    tmpHTMLStr.push('           <div class="form-group col-md-12">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Title" class="col-form-label col-form-label-sm">题目</label>');
    tmpHTMLStr.push('               <input type="text" class="form-control  form-control-sm" id="txt_Resource_Lib_Item_Title" value="' + data.content + '" readonly>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('       </div>');
    if (data.type.id == "1") {
        $('#modal_Class_Item_Detail .modal-dialog').css("max-width", "fit-content");
        tmpHTMLStr.push('<fieldset class="form-group" style="margin:0px;" disabled>');
        for (var j = 0; j < data.options.length; j++) {
            tmpHTMLStr.push('   <div class="form-check" style="margin:0px;">');
            tmpHTMLStr.push('       <label class="form-check-label" style="font-size:14px;">');
            var tmpChecked = false;
            for (var k = 0; k < data.correct.length; k++) {
                if (data.correct[k] == data.options[j].id) {
                    tmpChecked = true;
                    break;
                }
            }

            tmpHTMLStr.push('           <input type="checkbox" class="form-check-input" ' + (tmpChecked ? 'checked>' : '>'));
            tmpHTMLStr.push('           <span style="padding-left:10px;">' + data.options[j].content + '</span>');
            tmpHTMLStr.push('       </label>');
            tmpHTMLStr.push('   </div>');
        }

        tmpHTMLStr.push('</fieldset>');
    } else {
        $('#modal_Class_Item_Detail .modal-dialog').css("max-width", "70%");
        tmpHTMLStr.push('       <div class="row">');
        tmpHTMLStr.push('           <div class="col-md-12">附件</div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('       <div class="row">');
        for (var i = 0; i < data.attach.length; i++) {
            tmpHTMLStr.push('           <div class="col-sm-6 col-md-3">');
            tmpHTMLStr.push('               <img class="img-thumbnail" src="' + data.attach[i] + '" alt="通用的占位符缩略图">');
            tmpHTMLStr.push('           </div>');
        }

        tmpHTMLStr.push('       </div>');
    }

    tmpHTMLStr.push('       <div class="row">');
    tmpHTMLStr.push('           <div class="form-group col-md-12">');
    tmpHTMLStr.push('               <label for="txt_Resource_Lib_Item_Points" class="col-form-label col-form-label-sm">相关知识点</label>');
    tmpHTMLStr.push('               <textarea class="form-control form-control-sm" id="txt_Resource_Lib_Item_Points" rows="3" readonly>' + data.points + '</textarea>');
    tmpHTMLStr.push('           </div>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('   </form>');
    tmpHTMLStr.push('</div>');
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

function buildDataHTML_Doc() {
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
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Doc();
    buildDataTableHTML_Doc();
};

function buildDataHeaderHTML_Doc() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('                <div class="col data-panel-title" style="line-height:40px;">教学资料 - 教案 (仅自定义教案)</div>');
    tmpHTMLStr.push('                </div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};

function buildDataTableHTML_Doc(data) {
    var data = [
        { id: '1', title: '自定义教案 1', course: { id: '1', symbol: 'B-01-001', title: '课程 1' }, from: '教员 1', createdate: '2017-05-21', reference: '5', },
        { id: '2', title: '自定义教案 2', course: { id: '1', symbol: 'B-01-001', title: '课程 1' }, from: '教员 3', createdate: '2017-06-26', reference: '15', },
        { id: '3', title: '自定义教案 3', course: { id: '2', symbol: 'B-02-002', title: '课程 2' }, from: '教员 5', createdate: '2017-07-12', reference: '3', },
        { id: '4', title: '自定义教案 4', course: { id: '2', symbol: 'B-02-002', title: '课程 2' }, from: '教员 2', createdate: '2017-08-10', reference: '0', },
        { id: '5', title: '自定义教案 5', course: { id: '3', symbol: 'B-03-003', title: '课程 3' }, from: '教员 3', createdate: '2017-10-28', reference: '1', }
    ];

    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="margin-bottom: 0px;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('           <th style="width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="width: 80px;"></th>');
    tmpHTMLStr.push('           <th>教案</th>');
    tmpHTMLStr.push('           <th>对应课程</th>');
    tmpHTMLStr.push('           <th>贡献者</th>');
    tmpHTMLStr.push('           <th>提交时间</th>');
    tmpHTMLStr.push('           <th>被引用次数</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('       <tr>');
        tmpHTMLStr.push('           <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('           <td><button type="button" class="btn btn-sm btn-info btn-resource-doc-item" data-target="' + data[i].id + '">打开</button></td>');
        tmpHTMLStr.push('           <td>' + data[i].title + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].course.title + '(' + data[i].course.symbol + ')' + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].from + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].createdate + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].reference + '</td>');
        tmpHTMLStr.push('       </tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.btn-resource-doc-item').on('click', function () {
        openLessonDoc(arguments[0]);
    });
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
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Scene();
    buildDataTableHTML_Scene();
};

function buildDataHeaderHTML_Scene() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('                <div class="col data-panel-title" style="line-height:40px;">教学资料 - 课件</div>');
    tmpHTMLStr.push('                </div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};

function buildDataTableHTML_Scene(data) {
    var data = [
        { id: '1', symbol: 'B-01-001', title: '课程 1' },
        { id: '2', symbol: 'B-01-001', title: '课程 1' },
        { id: '3', symbol: 'B-02-002', title: '课程 2' },
        { id: '4', symbol: 'B-02-002', title: '课程 2' },
        { id: '5', symbol: 'B-03-003', title: '课程 3' }
    ];

    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="margin-bottom: 0px;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('           <th style="width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="width: 80px;"></th>');
    tmpHTMLStr.push('           <th>课程编号</th>');
    tmpHTMLStr.push('           <th>课程</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('       <tr>');
        tmpHTMLStr.push('           <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('           <td><button type="button" class="btn btn-sm btn-info btn-resource-doc-item" data-target="' + data[i].symbol + '">打开</button></td>');
        tmpHTMLStr.push('           <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('           <td>' + data[i].title + '</td>');
        tmpHTMLStr.push('       </tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));

    $('.btn-resource-doc-item').on('click', function () {
        openWorkplatform(arguments[0]);
    });
};

/*Schedule*/
function buildDataHTML_Schedule() {
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
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Schedule();
    buildDataTableHTML_Schedule();
};

function buildDataHeaderHTML_Schedule() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('               <div class="col-2 data-panel-title" style="line-height:40px;">课表管理</div>');
    tmpHTMLStr.push('               <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    buildDataHeaderButtons_Schedule();
    //buildDataHeaderFields_Lesson();
};

function buildDataHeaderButtons_Schedule() {
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_Schedule_Class">班级课表</button>'));
    $('#container_DataHeader_Button').append($('<button type="button" class="btn btn-sm btn-success" id="btn_Schedule_DateView" style="margin-left:10px;">课表日历</button>'));
    $('#btn_Schedule_Class').on('click', function () {
        buildDataTableHTML_Schedule();
    });

    $('#btn_Schedule_DateView').on('click', function () {
        buildDataTableHTML_DateView();
    });
};

function buildDataTableHTML_Schedule(data) {
    var data = [
        {
            id: '1',
            symbol: 'B_01_001',
            title: '初级 1 班',
            teacher: {
                id: '1',
                name: '教员 1'
            },
            room: {
                id: '1',
                name: '教室 1'
            },
            status: '0',
            booked: '0'
        }, {
            id: '4',
            symbol: 'B_01_002',
            title: '初级 2 班',
            teacher: {
                id: '1',
                name: '教员 1'
            },
            room: {
                id: '1',
                name: '教室 1'
            },
            status: '0',
            booked: '1'
        }, {
            id: '2',
            symbol: 'B_02_002',
            title: '中级 2 班',
            teacher: {
                id: '3',
                name: '教员 3'
            },
            room: {
                id: '3',
                name: '教室 3'
            },
            status: '1',
            booked: '1'
        }, {
            id: '3',
            symbol: 'B_03_003',
            title: '高级 3 班',
            teacher: {
                id: '2',
                name: '教员 2'
            },
            room: {
                id: '2',
                name: '教室 2'
            },
            status: '2',
            booked: '1'
        }
    ];

    var headerId, collapseId, cardblockId, status, txtClass, btnBookId;
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row">');
    tmpHTMLStr.push('   <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('       <div class="accordion-white-bg" id="accordion_Schedule" style="font-size: 14px;" role="tablist">');
    for (var i = 0; i < data.length; i++) {
        status = (data[i].status == '0' ? '未开课' : data[i].status == '1' ? '已开课' : '已结课');
        txtClass = (data[i].status == '0' ? 'text-primary' : data[i].status == '1' ? 'text-success' : 'text-muted');
        headerId = 'hd_Student_Schedule_Item_' + data[i].id;
        collapseId = 'collapse_Schedule_Item_' + data[i].id;
        cardblockId = 'cardblock_Schedule_Item_' + data[i].id;
        btnBookId = 'btn_Schedule_Item_NewBook' + data[i].id;
        tmpHTMLStr.push('<div class="card">');
        tmpHTMLStr.push('   <div class="card-header" style="padding:5px 0px; font-weight:normal;" role="tab" id="' + headerId + '">');
        tmpHTMLStr.push('       <div class="row">');
        tmpHTMLStr.push('           <div class="col-1" style="text-align:center;">' + (i + 1) + '</div>');
        tmpHTMLStr.push('           <div class="col-7">');
        tmpHTMLStr.push('               <a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].title + '(' + data[i].symbol + ')</a>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('           <div class="col" style="text-align:center;">');
        if (data[i].booked == '0') {
            tmpHTMLStr.push('               <button type="button" class="btn btn-sm btn-primary btn-schedule-item-new-schedule" id="' + btnBookId + '" style="line-height: 15px;" data-target="' + data[i].id + '">新建课表</button>');
        }

        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('           <div class="col ' + txtClass + '" style="text-align:center;">' + status + '</div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('   <div id="' + collapseId + '" class="collapse collapse-schedule-item" role="tabpanel" aria-labelledby="' + headerId + '" data-parent="#accordion_Schedule" data-target="' + data[i].id + '">');
        tmpHTMLStr.push('       <div class="card-block" id="' + cardblockId + '">');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
    }
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('.collapse-schedule-item').on('show.bs.collapse', function () {
        var classId = $(arguments[0].target).attr('data-target');
        var booked = '';
        for (var i = 0; i < data.length; i++) {
            if (data[i].id == classId) {
                booked = data[i].booked;
                break;
            }
        }

        if (booked != '0') {
            buildScheduleDetailByClass(classId);
        }
    });

    $('.btn-schedule-item-new-schedule').on('click', function () {
        showCreateNewSchedulePopup();
    });
};

function showCreateNewSchedulePopup(classId) {
    if ($('#modal_Schedule_New').length == 0) {
        var data = {
            id: '1',
            name: '初级 1 班',
            lessons: 15,
            amount: 15,
            startDate: '2017-12-1'
        };

        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Schedule_New" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title" id="exampleModalLabel">');
        tmpHTMLStr.push('                   新建课表');
        tmpHTMLStr.push('                   <span style="padding-left:10px; font-size:14px;">' + data.name + ' ' + data.amount + '人 ' + data.startDate + '<span>');
        tmpHTMLStr.push('                </h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('                <form>');
        tmpHTMLStr.push('                    <div class="form-group row">');
        tmpHTMLStr.push('                        <label for="chk_Create_Schedule_New" class="col-3 col-form-label class-create">课程频率</label>');
        tmpHTMLStr.push('                        <div class="col-3">');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="0">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周日</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="3">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周三</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="6">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周六</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                        <div class="col-3">');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="1">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周一</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="4">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周四</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                        <div class="col-3">');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="2">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周二</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                           <div class="form-group form-control-sm">');
        tmpHTMLStr.push('                               <label class="custom-control custom-checkbox">');
        tmpHTMLStr.push('                                   <input type="checkbox" class="custom-control-input chk-schedule-create-new" value="5">');
        tmpHTMLStr.push('                                   <span class="custom-control-indicator"></span>');
        tmpHTMLStr.push('                                   <span class="custom-control-description">每周五</span>');
        tmpHTMLStr.push('                               </label>');
        tmpHTMLStr.push('                           </div>');
        tmpHTMLStr.push('                       </div>');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <div class="form-group row">');
        tmpHTMLStr.push('                        <label for="sel_Room_Schedule_New" class="col-3 col-form-label class-create">授课教室</label>');
        tmpHTMLStr.push('                        <div class="col-9">');
        tmpHTMLStr.push('                            <select class="form-control form-control-sm" value="" id="sel_Room_Schedule_New"></select>');
        tmpHTMLStr.push('                        </div>');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <div class="form-group row">');
        tmpHTMLStr.push('                        <label for="sel_Time_Schedule_New" class="col-3 col-form-label class-create">上课时间</label>');
        tmpHTMLStr.push('                        <div class="col-9">');
        tmpHTMLStr.push('                            <select class="form-control form-control-sm" value="" id="sel_Time_Schedule_New"></select>');
        tmpHTMLStr.push('                        </div>');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <div class="form-group row">');
        tmpHTMLStr.push('                        <label for="txt_LessonCount_Schedule_New" class="col-3 col-form-label class-create">总课时数</label>');
        tmpHTMLStr.push('                        <div class="col-9">');
        tmpHTMLStr.push('                            <input class="form-control form-control-sm" id="txt_LessonCount_Schedule_New" type="number" value="' + data.lessons + '" readonly>');
        tmpHTMLStr.push('                        </div>');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                </form>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-primary" id="btn_OK_Schedule_New">确定</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));

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
        var rooms = [{ name: '教室 1', id: '1', max: 11 }, { name: '教室 2', id: '2', max: 22 }, { name: '教室 3', id: '3', max: 33 }];
        var tmpOptHTML = '';
        for (var i = 0; i < rooms.length; i++) {
            if (parseInt(rooms[i].max) >= parseInt(data.amount)) {
                tmpOptHTML += '<option value="' + rooms[i].id + '|' + rooms[i].max + '">' + rooms[i].name + '</option>';
            }
        }

        $('#sel_Room_Schedule_New').empty();
        $('#sel_Room_Schedule_New').append($(tmpOptHTML));
        var times = [{ id: '1', name: '09:30' }, { id: '2', name: '10:30' }, { id: '3', name: '11:30' }, { id: '4', name: '14:30' }, { id: '5', name: '15:30' }, { id: '6', name: '16:30' }, { id: '7', name: '19:30' }];
        var tmpOptHTML = '';
        for (var i = 0; i < times.length; i++) {
            tmpOptHTML += '<option value="' + times[i].id + '">' + times[i].name + '</option>';
        }
        $('#sel_Time_Schedule_New').empty();
        $('#sel_Time_Schedule_New').append($(tmpOptHTML));

        $('#btn_OK_Schedule_New').on('click', function () {
            var chks = $('.chk-schedule-create-new');
            var days = [];
            for (var i = 0; i < chks.length; i++) {
                if ($(chks[i]).prop('checked')) {
                    days.push(parseInt($(chks[i]).val()));
                }
            }

            var lessons = parseInt($('#txt_LessonCount_Schedule_New').val());
            var timeId = $('#sel_Time_Schedule_New').val();
            var roomId = $('#sel_Room_Schedule_New').val().split('|')[0];
            buildLessonSchedule(days, timeId, roomId, lessons, data.id, data.startDate);
        });
    }

    $('#modal_Schedule_New').modal('show');
};

function buildLessonSchedule(days, timeId, roomId, lessons, clsaaId, startDate) {
    var firstDate = new Date(startDate);
    var firstDay = firstDate.getDay();
    if (firstDay < days[0]) {
        firstDate = new Date(firstDate.valueOf() + (days[0] - firstDay) * 24 * 60 * 60 * 1000);
    } else if (firstDay > days[0]) {
        firstDate = new Date(firstDate.valueOf() + (7 - firstDay) * 24 * 60 * 60 * 1000);
    }

    var firstDates = [firstDate];
    for (var j = 1; j < days.length; j++) {
        firstDates.push(new Date(firstDates[j - 1].valueOf() + (days[j] - days[j - 1]) * 24 * 60 * 60 * 1000));
    }

    var schedules = [];
    var constVal = 7 * 24 * 60 * 60 * 1000;
    var weeks = Math.ceil(lessons / days.length);
    var total = 0;
    for (var i = 0; i < weeks; i++) {
        for (var j = 0; j < days.length; j++) {
            if (total < lessons) {
                schedules.push(new Date(firstDates[j].valueOf() + constVal * i));
            }

            total++;
        }
    }

    var aaa = 0;
}

function buildScheduleDetailByClass(classId) {
    var data = [
        { id: '1', date: '2017-09-03', time: '10:30', symbol: 'B-01-001', content: '课程 1-01', teacher: '教员 1', room: '教室 1(20)', status: 1 },
        { id: '2', date: '2017-09-07', time: '14:30', symbol: 'B-01-002', content: '课程 1-02', teacher: '教员 1', room: '教室 1(20)', status: 1 },
        { id: '3', date: '2017-09-09', time: '10:30', symbol: 'B-01-003', content: '课程 1-03', teacher: '教员 1', room: '教室 1(20)', status: 1 },
        { id: '4', date: '2017-09-11', time: '14:30', symbol: 'B-01-004', content: '课程 1-04', teacher: '教员 1', room: '教室 2(15)', status: 1 },
        { id: '5', date: '2017-09-13', time: '15:30', symbol: 'B-01-005', content: '课程 1-05', teacher: '教员 1', room: '教室 1(20)', status: 1 },
        { id: '6', date: '2017-09-15', time: '09:30', symbol: 'B-02-001', content: '课程 2-01', teacher: '教员 1', room: '教室 1(20)', status: 1 },
        { id: '7', date: '2017-09-17', time: '19:30', symbol: 'B-02-002', content: '课程 2-02', teacher: '教员 1', room: '教室 2(15)', status: 0 },
        { id: '8', date: '2017-09-19', time: '19:30', symbol: 'B-02-003', content: '课程 2-03', teacher: '教员 1', room: '教室 1(20)', status: 0 },
        { id: '9', date: '2017-09-21', time: '16:30', symbol: 'B-03-001', content: '课程 3-01', teacher: '教员 1', room: '教室 1(20)', status: 0 },
        { id: '10', date: '2017-09-23', time: '16:30', symbol: 'B-03-002', content: '课程 3-02', teacher: '教员 1', room: '教室 3(22)', status: 0 }
    ];
    var gData = {
        times: {
            name: '统一设置时间',
            items: [
                { id: '1', name: '09:30' },
                { id: '2', name: '10:30' },
                { id: '3', name: '11:30' },
                { id: '4', name: '14:30' },
                { id: '5', name: '15:30' },
                { id: '6', name: '16:30' },
                { id: '7', name: '19:30' }
            ]
        },
        teachers: {
            name: '统一设置教员',
            items: [
                { id: '1', name: '教员 1', level: '初级' },
                { id: '2', name: '教员 2', level: '中级' },
                { id: '3', name: '教员 3', level: '初级' },
                { id: '4', name: '教员 4', level: '高级' }
            ]
        },
        rooms: {
            name: '统一设置教室',
            items: [
                { id: '1', name: '教室 1', max: '20' },
                { id: '2', name: '教室 2', max: '15' },
                { id: '3', name: '教室 3', max: '22' },
                { id: '4', name: '教室 4', max: '18' }
            ]
        },
        course: [
            { symbol: 'B-01-001', title: '课程 1-01' },
            { symbol: 'B-01-002', title: '课程 1-02' },
            { symbol: 'B-01-003', title: '课程 1-03' },
            { symbol: 'B-01-004', title: '课程 1-04' },
            { symbol: 'B-01-005', title: '课程 1-05' },
            { symbol: 'B-01-006', title: '课程 1-06' },
            { symbol: 'B-01-007', title: '课程 1-07' },
            { symbol: 'B-01-008', title: '课程 1-08' },
            { symbol: 'B-01-009', title: '课程 1-09' },
            { symbol: 'B-01-010', title: '课程 1-10' },
            { symbol: 'B-02-001', title: '课程 2-01' },
            { symbol: 'B-02-002', title: '课程 2-02' },
            { symbol: 'B-02-003', title: '课程 2-03' },
            { symbol: 'B-02-004', title: '课程 2-04' },
            { symbol: 'B-02-005', title: '课程 2-05' },
            { symbol: 'B-03-001', title: '课程 3-01' },
            { symbol: 'B-03-002', title: '课程 3-02' },
            { symbol: 'B-03-003', title: '课程 3-03' },
            { symbol: 'B-03-004', title: '课程 3-04' },
            { symbol: 'B-03-005', title: '课程 3-05' }
        ]
    };

    var formatItemText = function (key, item) {
        if (key == 'times') {
            return item.name;
        } else if (key == 'rooms') {
            return item.name + '( 最大人数 : ' + item.max + ' )';
        } else {
            return item.name + '( 级别 : ' + item.level + ' )';
        }
    };

    var tmpId = '';
    var container = $('#cardblock_Schedule_Item_' + classId);
    container.empty();
    var tmpHTMLStr = [];

    tmpHTMLStr.push('<div class="container-fluid" style="height:100%;">');
    tmpHTMLStr.push('   <div class="row">');
    tmpHTMLStr.push('       <div class="col-3" style="padding-top:10px; line-height:30px;font-weight:bold;color:rgb(41,85,206);">统一更改配置</div>');

    for (var key in gData) {
        if (key == 'course') {
            continue;
        }

        tmpId = 'btng_Schedule_Item_' + classId + '_' + key;
        tmpHTMLStr.push('       <div class="col-3" style="padding-top:10px;">');
        tmpHTMLStr.push('           <div class="btn-group" role="group">');
        tmpHTMLStr.push('               <button id="' + tmpId + '" type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + gData[key].name + '</button>');
        tmpHTMLStr.push('               <div class="dropdown-menu dropdown-menu-sm" aria-labelledby="' + tmpId + '">');
        tmpId = 'btn-schedule-item-' + classId + '-' + key;
        for (var j = 0; j < gData[key].items.length; j++) {
            tmpHTMLStr.push('                   <a class="dropdown-item dropdown-item-sm ' + tmpId + '" href="#" data-target="' + gData[key].items[j].id + '">' + formatItemText(key, gData[key].items[j]) + '</a>');
        }
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
    }

    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('   <div class="row">');
    tmpHTMLStr.push('       <div class="col-12" style="padding-top:10px;">');
    tmpHTMLStr.push('           <table class="table table-striped" style="margin-bottom: 0px;">');
    tmpHTMLStr.push('               <thead>');
    tmpHTMLStr.push('                   <tr>');
    tmpHTMLStr.push('                       <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                       <th style="width: 120px;"></th>');
    tmpHTMLStr.push('                       <th>日期</th>');
    tmpHTMLStr.push('                       <th>时间</th>');
    tmpHTMLStr.push('                       <th>课程编号</th>');
    tmpHTMLStr.push('                       <th>课程</th>');
    tmpHTMLStr.push('                       <th>教员</th>');
    tmpHTMLStr.push('                       <th>教室</th>');
    tmpHTMLStr.push('                   </tr>');
    tmpHTMLStr.push('               </thead>');
    tmpHTMLStr.push('               <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('                   <tr>');
        tmpHTMLStr.push('                       <td data-target="' + data[i].status + '">' + (i + 1) + '</td>');
        if (data[i].status == '0') {
            tmpHTMLStr.push('                       <td>');
            tmpHTMLStr.push('                           <button type="button" class="btn btn-sm btn-primary btn-schedule-item-' + classId + '-edit" data-target="' + classId + '|' + data[i].date + '">编辑</button>');
            tmpHTMLStr.push('                           <button type="button" class="btn btn-sm btn-danger btn-schedule-item-' + classId + '-delete" data-target="' + classId + '|' + data[i].date + '">删除</button>');
            tmpHTMLStr.push('                       </td>');
        } else {
            tmpHTMLStr.push('                       <td>已完成</td>');
        }

        tmpHTMLStr.push('                       <td>' + data[i].date + '</td>');
        tmpHTMLStr.push('                       <td>' + data[i].time + '</td>');
        tmpHTMLStr.push('                       <td>' + data[i].symbol + '</td>');
        tmpHTMLStr.push('                       <td>' + data[i].content + '</td>');
        tmpHTMLStr.push('                       <td>' + data[i].teacher + '</td>');
        tmpHTMLStr.push('                       <td>' + data[i].room + '</td>');
        tmpHTMLStr.push('                   </tr>');
    }

    tmpId = '_Schedule_Item_' + classId + '_Edit_';
    tmpHTMLStr.push('                   <tr id="tr' + tmpId + '">');
    tmpHTMLStr.push('                       <td></td>');
    tmpHTMLStr.push('                       <td><button type="button" class="btn btn-sm btn-success" id="btn' + tmpId + 'Submit" data-target="' + classId + '">添加</button></td>');
    tmpHTMLStr.push('                       <td><input class="form-control form-control-sm" type="date" value="' + formatForDateInput(null) + '" id="txt' + tmpId + 'Date"></td>');
    tmpHTMLStr.push('                       <td>');
    tmpHTMLStr.push('                           <select class="form-control form-control-sm" id="select' + tmpId + 'Time">');
    for (var i = 0; i < gData['times'].items.length; i++) {
        tmpHTMLStr.push('                               <option value="' + gData['times'].items[i].id + '">' + gData['times'].items[i].name + '</option>');
    }

    tmpHTMLStr.push('                           </select>');
    tmpHTMLStr.push('                       </td>');
    tmpHTMLStr.push('                       <td colspan="2">');
    tmpHTMLStr.push('                           <select class="form-control form-control-sm" id="select' + tmpId + 'Course">');
    for (var i = 0; i < gData['course'].length; i++) {
        tmpHTMLStr.push('                               <option value="' + gData['course'][i].symbol + '|' + gData['course'][i].title + '">' + gData['course'][i].symbol + '&nbsp;&nbsp;' + gData['course'][i].title + '</option>');
    }

    tmpHTMLStr.push('                           </select>');
    tmpHTMLStr.push('                       </td>');
    tmpHTMLStr.push('                       <td>');
    tmpHTMLStr.push('                           <select class="form-control form-control-sm" id="select' + tmpId + 'Teacher">');
    for (var i = 0; i < gData['teachers'].items.length; i++) {
        tmpHTMLStr.push('                               <option value="' + gData['teachers'].items[i].id + '">' + gData['teachers'].items[i].name + '</option>');
    }

    tmpHTMLStr.push('                           </select>');
    tmpHTMLStr.push('                       </td>');
    tmpHTMLStr.push('                       <td>');
    tmpHTMLStr.push('                           <select class="form-control form-control-sm" id="select' + tmpId + 'Room">');
    for (var i = 0; i < gData['rooms'].items.length; i++) {
        tmpHTMLStr.push('                               <option value="' + gData['rooms'].items[i].id + '">' + gData['rooms'].items[i].name + '(' + gData['rooms'].items[i].max + ')</option>');
    }

    tmpHTMLStr.push('                           </select>');
    tmpHTMLStr.push('                       </td>'); tmpHTMLStr.push('                   </tr>');

    tmpHTMLStr.push('               </tbody>');
    tmpHTMLStr.push('           </table>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('</div>');

    container.append($(tmpHTMLStr.join('')));
    var applyToAll = function (key, id, colIdx) {
        var value = ''
        for (var i = 0; i < gData[key].items.length; i++) {
            if (gData[key].items[i].id == id) {
                value = (key != "rooms" ? gData[key].items[i].name : gData[key].items[i].name + '(' + gData[key].items[i].max + ')');
                var rows = container.find('.container-fluid .row .col-12 table tbody tr');
                for (var j = 0; j < rows.length - 1; j++) {
                    if ($($(rows[j]).find('td')[0]).attr('data-target') == "0") {
                        $($(rows[j]).find('td')[colIdx]).text(value);
                    }
                }

                break;
            }
        }
    };

    var startEditItem = function (currCols) {
        var currBtn = $(arguments[0].target);
        var currRow = currBtn.parent().parent();
        var currCols = currRow.find('td')
        if (currBtn.hasClass('btn-primary')) {
            currBtn.text('提交');
            currBtn.removeClass('btn-primary');
            currBtn.addClass('btn-warning');
            //edit date text
            var cloneEl = $('#txt' + tmpId + 'Date').clone();
            cloneEl.attr('id', '');
            cloneEl.val($(currCols[2]).text());
            $(currCols[2]).empty().append(cloneEl);
            //edit time select
            cloneEl = $('#select' + tmpId + 'Time').clone();
            cloneEl.attr('id', '');
            for (var i = 0; i < gData['times'].items.length; i++) {
                if (gData['times'].items[i].name == $(currCols[3]).text()) {
                    cloneEl.val(gData['times'].items[i].id);
                    break;
                }
            }

            $(currCols[3]).empty().append(cloneEl);
            //edit course select
            cloneEl = $('#select' + tmpId + 'Course').clone();
            cloneEl.attr('id', '');
            cloneEl.val($(currCols[4]).text() + '|' + $(currCols[5]).text());
            $(currCols[4]).empty().append(cloneEl);
            $(currCols[4]).attr('colspan', '2');
            //edit teacher select
            cloneEl = $('#select' + tmpId + 'Teacher').clone();
            cloneEl.attr('id', '');
            for (var i = 0; i < gData['teachers'].items.length; i++) {
                if (gData['teachers'].items[i].name == $(currCols[6]).text()) {
                    cloneEl.val(gData['teachers'].items[i].id);
                    break;
                }
            }

            $(currCols[6]).empty().append(cloneEl);
            //edit room select
            cloneEl = $('#select' + tmpId + 'Room').clone();
            cloneEl.attr('id', '');
            for (var i = 0; i < gData['rooms'].items.length; i++) {
                if (gData['rooms'].items[i].name == $(currCols[6]).text()) {
                    cloneEl.val(gData['rooms'].items[i].id);
                    break;
                }
            }

            $(currCols[7]).empty().append(cloneEl);
            //remove course title col;
            $(currCols[5]).remove();
        } else {
            currBtn.text('编辑');
            currBtn.removeClass('btn-warning');
            currBtn.addClass('btn-primary');
            //date
            var currColObj = $(currCols[2]);
            var tmpText = $(currColObj.children()[0]).val();
            currColObj.empty().text(tmpText);
            //time
            currColObj = $(currCols[3]);
            tmpText = currColObj.children()[0].selectedOptions[0].text;
            currColObj.empty().text(tmpText);
            //course symbol
            currColObj = $(currCols[4]);
            var tmpCourse = $(currColObj.children()[0]).val().split('|');
            currColObj.empty().text(tmpCourse[0]);
            currColObj.attr('colspan', '1');
            //teacher
            currColObj = $(currCols[5]);
            tmpText = currColObj.children()[0].selectedOptions[0].text;
            //room
            currColObj = $(currCols[6]);
            tmpText = currColObj.children()[0].selectedOptions[0].text;
            //course title
            $(currCols[4]).after($('<td>' + tmpCourse[1] + '</td>'));
        }
    };

    var removeItem = function (currRow) {
        var tbody = currRow.parent();
        currRow.remove();
        var rows = tbody.find('tr');
        var tmpCol = null;
        for (var i = 0; i < rows.length - 1; i++) {
            tmpCol = $($(rows[i]).find('td')[0]);
            tmpCol.text(i + 1);
        }
    };

    $('.btn-schedule-item-' + classId + '-times').on('click', function () {
        applyToAll('times', $(arguments[0].target).attr('data-target'), 3);
    });

    $('.btn-schedule-item-' + classId + '-teachers').on('click', function () {
        applyToAll('teachers', $(arguments[0].target).attr('data-target'), 6);
    });

    $('.btn-schedule-item-' + classId + '-rooms').on('click', function () {
        applyToAll('rooms', $(arguments[0].target).attr('data-target'), 7);
    });

    tmpId = '_Schedule_Item_' + classId + '_Edit_';
    var editTr = $('#tr' + tmpId);
    $('#btn' + tmpId + 'Submit').on('click', function () {
        var tmpCourse = $('#select' + tmpId + 'Course').val().split('|');
        var rows = editTr.parent().find('tr');
        var lastIdx = (rows.length < 2 ? 1 : parseInt($($(rows[rows.length - 2]).find('td:first')).text()) + 1);
        tmpHTMLStr = [];
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td data-target="0">' + lastIdx + '</td>');
        tmpHTMLStr.push('   <td>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-primary btn-schedule-item-' + classId + '-edit" data-target="' + classId + '|' + $('#txt' + tmpId + 'Date').val() + '">编辑</button>');
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-danger btn-schedule-item-' + classId + '-delete" data-target="' + classId + '|' + $('#txt' + tmpId + 'Date').val() + '">删除</button>');
        tmpHTMLStr.push('   </td>');
        tmpHTMLStr.push('   <td>' + $('#txt' + tmpId + 'Date').val() + '</td>');
        tmpHTMLStr.push('   <td>' + $('#select' + tmpId + 'Time')[0].selectedOptions[0].text + '</td>');
        tmpHTMLStr.push('   <td>' + tmpCourse[0] + '</td>');
        tmpHTMLStr.push('   <td>' + tmpCourse[1] + '</td>');
        tmpHTMLStr.push('   <td>' + $('#select' + tmpId + 'Teacher')[0].selectedOptions[0].text + '</td>');
        tmpHTMLStr.push('   <td>' + $('#select' + tmpId + 'Room')[0].selectedOptions[0].text + '</td>');
        tmpHTMLStr.push('</tr>');
        var currEl = $(tmpHTMLStr.join(''));
        editTr.before(currEl);
        currEl.find('.btn-schedule-item-' + classId + '-edit').on('click', function () {
            startEditItem($(arguments[0].target).parent().parent().find('td'));
        });

        currEl.find('.btn-schedule-item-' + classId + '-delete').on('click', function () {
            removeItem($(arguments[0].target).parent().parent());
        });
    });

    $('.btn-schedule-item-' + classId + '-edit').on('click', function () {
        startEditItem(arguments[0]);
    });

    $('.btn-schedule-item-' + classId + '-delete').on('click', function () {
        removeItem($(arguments[0].target).parent().parent());
    });
};

function buildDataTableHTML_DateView() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="container-fluid" style="margin-top:10px;">');
    tmpHTMLStr.push('   <div class="row">');
    tmpHTMLStr.push('       <div class="col-2" style="line-height:30px;">选择时间段</div>');
    tmpHTMLStr.push('       <div class="col" style="line-height:30px;text-align:right;">从 : </div>');
    tmpHTMLStr.push('       <div class="col-3">');
    tmpHTMLStr.push('           <input type="date" class="form-control form-control-sm" id="txt_Schedule_ViewDate_Start" value="' + formatForDateInput(null) + '">');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="col" style="line-height:30px;text-align:right;">到 :</div>');
    tmpHTMLStr.push('       <div class="col-3">');
    tmpHTMLStr.push('           <input type="date" class="form-control form-control-sm " id="txt_Schedule_ViewDate_End" value="' + formatForDateInput(null) + '">');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="col">');
    tmpHTMLStr.push('           <button type="submit" class="btn btn-sm btn-primary" id="btn_Schedule_ViewDate_Search">检索</button>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('   <div class="row">');
    tmpHTMLStr.push('       <div class="col-12" id="wrap_Schedule_ViewDate_Result"></div>');
    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Schedule();
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#btn_Schedule_ViewDate_Search').on('click', function () {
        loadScheduleByPeriod();
    });
};

function loadScheduleByPeriod() {
    var data = {
        2017: {
            9: {
                10: {
                    1: 0,
                    2: 3,
                    3: 0,
                    4: 7
                }
            }
        }
    };

    var gData = {
        rooms: [
            { id: '1', name: '教室 1', max: '20' },
            { id: '2', name: '教室 2', max: '15' },
            { id: '3', name: '教室 3', max: '22' },
            { id: '4', name: '教室 4', max: '18' }
        ],
        times: [
            { id: '1', name: '09:30' },
            { id: '2', name: '10:30' },
            { id: '3', name: '11:30' },
            { id: '4', name: '14:30' },
            { id: '5', name: '15:30' },
            { id: '6', name: '16:30' },
            { id: '7', name: '19:30' }
        ]
    };

    var startDate = new Date($('#txt_Schedule_ViewDate_Start').val());
    var endDate = new Date($('#txt_Schedule_ViewDate_End').val());

    var getParams = function (newDate, startDay, endDay) {
        var retRows, retDSC, retMSC, retMEC, retDEC;
        var tmpMonth = newDate.getMonth();
        var tmpYear = newDate.getFullYear();
        var tmpDays = getDaysOfMonth(newDate);
        //the start column of the 1st. of month
        retMSC = newDate.getDay();
        if (parseInt(startDay) > 1) {
            retDSC = (new Date([tmpYear, tmpMonth + 1, startDay].join('-'))).getDay();
        } else {
            retDSC = retMSC;
        }
        //the end column of the 1st. of month
        retMEC = (new Date([tmpYear, tmpMonth + 1, tmpDays].join('-'))).getDay();
        if (parseInt(endDay) > 0 && parseInt(endDay) != tmpDays) {
            retDEC = (new Date([tmpYear, tmpMonth + 1, endDay].join('-'))).getDay();
        } else {
            retDEC = retMEC;
        }

        switch (tmpDays) {
            case 28:
                retRows = (retMSC > 0 ? 5 : 4);
                break;
            case 29:
                retRows = 5;
                break;
            case 30:
                retRows = (retMSC >= 6 ? 6 : 5);
                break;
            default:
                retRows = (retMSC >= 5 ? 6 : 5);
                break;
        }

        return { r: retRows, msc: retMSC, mec: retMEC, dsc: retDSC, dec: retDEC, days: tmpDays };
    };

    var findStatus = function (year, month, day) {

    };

    var newYear = startDate.getFullYear();
    var newMonth = startDate.getMonth() + 1;
    var newDay = 1;
    var newDate, currStartDate, currEndDate, tmpClass, tmpRoomClass, currRoomStatus;
    var tmpHStyle = 'style = "height:' + (gData.rooms.length * 30 + 10) + 'px;"';
    var tmpHTMLStr = [];
    $('#wrap_Schedule_ViewDate_Result').empty();
    tmpHTMLStr.push('<div class="container-fluid container-months">');
    var tables = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
    for (var k = 0; k < tables; k++) {
        newDay = 1;
        newDate = new Date([newYear, newMonth, '1'].join('-'));
        currStartDate = (k == 0 ? startDate.getDate() : 1);
        var params = getParams(newDate, currStartDate);
        currEndDate = (k == tables - 1 ? endDate.getDate() : params.days);
        tmpHTMLStr.push('   <div class="row row-month-title">');
        tmpHTMLStr.push('       <div class="col-12 col-month-title">' + newYear + ' - ' + newMonth + '</div>');
        tmpHTMLStr.push('       <div class="col" style="overflow:auto;">');
        tmpHTMLStr.push('<table class="table">');
        tmpHTMLStr.push('   <thead>');
        tmpHTMLStr.push('       <tr>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期日</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期一</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期二</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期三</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期四</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期五</th>');
        tmpHTMLStr.push('           <th style="border:none; text-align:center; width: 12%">星期六</th>');
        tmpHTMLStr.push('       </tr>');
        tmpHTMLStr.push('   </thead>');
        tmpHTMLStr.push('   <tbody>');
        for (var i = 0; i < params.r; i++) {
            tmpHTMLStr.push('       <tr>');
            for (var j = 0; j < 7; j++) {
                if ((i == 0 && j < params.msc) || (i == params.r - 1 && j > params.mec)) {
                    tmpHTMLStr.push('           <td ' + tmpHStyle + '>');
                    //tmpHTMLStr.push('               <div class="div-date-container unavailable-item" ' + tmpHStyle + '></div">');
                    tmpHTMLStr.push('           </td>');
                } else {
                    tmpHTMLStr.push('           <td>');
                    tmpClass = (newDay > currEndDate || newDay < currStartDate ? 'outperiod-item' : 'period-item');
                    tmpHTMLStr.push('               <div class="container-fluid div-date-container ' + tmpClass + '" ' + tmpHStyle + '>');
                    tmpHTMLStr.push('                   <div class="row row-date-container">');
                    tmpHTMLStr.push('                       <div class="col-2 col-date-text" >' + newDay + '</div>');
                    tmpHTMLStr.push('                       <div class="col-10 col-date-room-container">');
                    for (var m = 0; m < gData.rooms.length; m++) {
                        currRoomStatus = 0;
                        if (data[newYear] && data[newYear][newMonth] && data[newYear][newMonth][newDay] && data[newYear][newMonth][newDay][gData.rooms[m].id]) {
                            currRoomStatus = data[newYear][newMonth][newDay][gData.rooms[m].id];
                        }

                        tmpRoomClass = (currRoomStatus == 0 ? 'course-empty' : currRoomStatus == gData.times.length ? 'course-full' : '');
                        tmpHTMLStr.push('                           <div class="row">');
                        tmpHTMLStr.push('                               <div class="col col-date-room-item ' + tmpRoomClass + '" data-target="' + newYear + '|' + newMonth + '|' + newDay + '|' + gData.rooms[m].id + '">');
                        tmpHTMLStr.push('                                   <div class="marquee-wrap"><div>' + gData.rooms[m].name + '</div></div>');
                        tmpHTMLStr.push('                               </div>');
                        tmpHTMLStr.push('                           </div>');
                    }

                    tmpHTMLStr.push('                       </div>');
                    tmpHTMLStr.push('                   </div>');
                    tmpHTMLStr.push('               </div>');
                    tmpHTMLStr.push('           </td>');
                    newDay = (newDay == params.days ? 1 : newDay + 1);
                }
            }

            tmpHTMLStr.push('       </tr>');
        }

        tmpHTMLStr.push('   </tbody>');
        tmpHTMLStr.push('</table>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        newYear = (newMonth == 12 ? newYear + 1 : newYear);
        newMonth = (newMonth == 12 ? 1 : newMonth + 1);
    }

    tmpHTMLStr.push('</div>');
    $('#wrap_Schedule_ViewDate_Result').append($(tmpHTMLStr.join('')));

    var tmpDivs = $('.col-date-room-item .marquee-wrap');
    var wrapWidth = $('.col-date-room-item').width();
    for (var i = 0; i < tmpDivs.length; i++) {
        if (testTextWidth($($(tmpDivs[i]).find('div')[0]).text(), '14px', '', '', '') > wrapWidth) {
            $(tmpDivs[i]).addClass('marquee');
        }
    }

    $('.period-item .col-date-room-item').on('click', function () {
        showDateCourseDetail($(arguments[0].currentTarget).attr('data-target'));
    });
};

function showDateCourseDetail(symbol) {
    symbol = symbol.split('|');
    var year = symbol[0];
    var month = symbol[1];
    var day = symbol[2];
    var data = {
        id: '1',
        name: '教室 1',
        times: [
            { id: '1', name: '09:30', cid: '1', csymbol: 'B-01-001', cname: '初级 1 班', tid: '1', tname: '教员 1' },
            { id: '2', name: '10:30', cid: '', csymbol: '', cname: '', tid: '', tname: '' },
            { id: '3', name: '11:30', cid: '2', csymbol: 'B-02-002', cname: '中级 2 班', tid: '2', tname: '教员 2' },
            { id: '4', name: '14:30', cid: '', csymbol: '', cname: '', tid: '', tname: '' },
            { id: '5', name: '15:30', cid: '', csymbol: '', cname: '', tid: '', tname: '' },
            { id: '6', name: '16:30', cid: '', csymbol: '', cname: '', tid: '', tname: '' },
            { id: '7', name: '19:30', cid: '5', csymbol: 'B-03-003', cname: '高级 3 班', tid: '5', tname: '教员 5' }
        ]
    };

    var title = '课程表详情 - ' + year + '/' + month + '/' + day + ' ' + data.name;
    $('#modal_Class_Item_Detail .modal-title').text(title);
    $('#modal_Class_Item_Detail .modal-body').empty();
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<table class="table table-striped" style="text-align:center;">');
    tmpHTMLStr.push('   <thead>');
    tmpHTMLStr.push('       <tr>');
    tmpHTMLStr.push('           <th style="text-align:center;width: 50px;"></th>');
    tmpHTMLStr.push('           <th style="text-align:center;">时间</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">班级</th>');
    tmpHTMLStr.push('           <th style="text-align:center;">教员</th>');
    tmpHTMLStr.push('       </tr>');
    tmpHTMLStr.push('   </thead>');
    tmpHTMLStr.push('   <tbody>');
    for (var i = 0; i < data.times.length; i++) {
        tmpHTMLStr.push('<tr>');
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</th>');
        tmpHTMLStr.push('   <td>' + data.times[i].name + '</td>');
        tmpHTMLStr.push('   <td>' + data.times[i].cname + ' ( ' + data.times[i].csymbol + ' )</td>');
        tmpHTMLStr.push('   <td>' + data.times[i].tname + '</td>');
        tmpHTMLStr.push('</tr>');
    }

    tmpHTMLStr.push('   </tbody>');
    tmpHTMLStr.push('</table>');
    $('#modal_Class_Item_Detail .modal-dialog').css("max-width", "fit-content");
    $('#modal_Class_Item_Detail .modal-body').append($(tmpHTMLStr.join('')));
    $('#modal_Class_Item_Detail').modal('show');
};

/*Certification*/
function buildDataHTML_Certificate() {
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
    $('#container_Datas').empty();
    buildDataTopHTML();
    buildDataHeaderHTML_Certificate();
    buildDataTableHTML_Certificate();
};

function buildDataHeaderHTML_Certificate() {
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<div class="row" style="padding:5px 10px;">');
    tmpHTMLStr.push('    <div class="col" style="height:40px; background-color:#2955CE; border-radius:10px;">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('        <div class="container-fluid">');
    tmpHTMLStr.push('            <div class="row justify-content-around">');
    tmpHTMLStr.push('               <div class="col-2 data-panel-title" style="line-height:40px;">认证测试</div>');
    tmpHTMLStr.push('               <div class="col" id="container_DataHeader_Button" style="padding-top:5px"></div>');
    tmpHTMLStr.push('            </div>');
    tmpHTMLStr.push('        </div>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
};

function buildDataTableHTML_Certificate(data) {
    var data = [
        { id: '1', symbol: 'C_01_001', name: '初级 1 班', level: '初级', amount: 15, status: 2 },
        { id: '2', symbol: 'C_01_002', name: '初级 2 班', level: '初级', amount: 25, status: 1 },
        { id: '3', symbol: 'C_01_003', name: '初级 3 班', level: '初级', amount: 35, status: 0 },
    ];

    var txtClass;
    var tmpHTMLStr = [];
    tmpHTMLStr.push('<form>');
    tmpHTMLStr.push('   <div class="row">');
    tmpHTMLStr.push('       <div class="form-group col-3">');
    tmpHTMLStr.push('           <label for="sel_Certification_Search_Class" class="col-form-label col-form-label-sm">按班级</label>');
    tmpHTMLStr.push('           <select id="sel_Certification_Search_Class" class="form-control form-control-sm">');
    tmpHTMLStr.push('               <option value="-1">请选择班级</option>');
    for (var i = 0; i < data.length; i++) {
        txtClass = (data[i].status == '0' ? 'text-info' : data[i].status == '1' ? 'text-primary' : 'text-success');
        tmpHTMLStr.push('               <option class="' + txtClass + '" value="' + data[i].id + '">' + data[i].name + ' (' + data[i].symbol + ') ' + data[i].level + '</option>');
    }

    tmpHTMLStr.push('           </select>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="form-group col-3">');
    tmpHTMLStr.push('           <label for="txt_Certification_Search_Name" class="col-form-label col-form-label-sm">按姓名</label>');
    tmpHTMLStr.push('           <input type="text" class="form-control form-control-sm" id="txt_Certification_Search_Name">');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="form-group col-3">');
    tmpHTMLStr.push('           <label for="txt_Certification_Search_IDCardNumber" class="col-form-label col-form-label-sm">按身份证号</label>');
    tmpHTMLStr.push('           <input type="text" class="form-control form-control-sm" id="txt_Certification_Search_IDCardNumber">');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('       <div class="form-group col-2">');
    tmpHTMLStr.push('           <label for="inputZip" class="col-form-label col-form-label-sm"></label>');
    tmpHTMLStr.push('           <button type="button" class="btn btn-sm btn-success form-control" id="btn_Certification_Search">查询</button>');
    tmpHTMLStr.push('       </div>');
    tmpHTMLStr.push('   </div>');
    tmpHTMLStr.push('</form>');
    tmpHTMLStr.push('<div class="row" id="row_Certification_Search_Result">');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#btn_Certification_Search').on('click', function () {
        var classId = $('#sel_Certification_Search_Class').val();
        var name = $('#sel_Certification_Search_Class').val();
        var idCardNum = $('#txt_Certification_Search_IDCardNumber').val();
        loadSearchResult_Certificate();
    });
};

function loadSearchResult_Certificate() {
    var data = [
        {
            id: '1',
            name: 'Tom',
            gender: '男',
            level: { id: '1', name: '初级' },
            grade: { id: '1', name: 'C-01-001' },
            age: 14,
            status: '0',
            certificate: ['1', '0', '0']
        }, {
            id: '2',
            name: 'Alice',
            gender: '女',
            level: { id: '2', name: '中级' },
            grade: { id: '2', name: 'C-02-003' },
            age: 13,
            status: '1',
            certificate: ['3', '2', '0']
        }, {
            id: '3',
            name: 'Jack',
            gender: '男',
            level: { id: '3', name: '高级' },
            grade: { id: '3', name: 'C-03-002' },
            age: 15,
            status: '2',
            certificate: ['3', '5', '0']
        }, {
            id: '4',
            name: 'Kevin',
            gender: '男',
            level: { id: '2', name: '中级' },
            grade: { id: '2', name: 'C-02-003' },
            age: 15,
            status: '2',
            certificate: ['4', '0', '0']
        }, {
            id: '5',
            name: 'Kitty',
            gender: '女',
            level: { id: '2', name: '高级' },
            grade: { id: '2', name: 'C-02-003' },
            age: 15,
            status: '2',
            certificate: ['3', '3', '2']
        }
    ];

    var tmpHTMLStr = [];
    tmpHTMLStr.push('    <div class="col" style="padding-top:10px;">');
    tmpHTMLStr.push('        <table class="table table-striped">');
    tmpHTMLStr.push('            <thead>');
    tmpHTMLStr.push('                <tr id="container_DataTable_Header">');
    tmpHTMLStr.push('                   <th style="width: 50px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 60px; text-align:center;"></th>');
    tmpHTMLStr.push('                   <th style="width: 60px; text-align:center;">初级</th>');
    tmpHTMLStr.push('                   <th style="width: 60px; text-align:center;">中级</th>');
    tmpHTMLStr.push('                   <th style="width: 60px; text-align:center;">高级</th>');
    tmpHTMLStr.push('                   <th>姓名</th>');
    tmpHTMLStr.push('                   <th>班级</th>');
    tmpHTMLStr.push('                   <th>级别</th>');
    tmpHTMLStr.push('                   <th>性别</th>');
    tmpHTMLStr.push('                   <th>年龄</th>');
    tmpHTMLStr.push('                   <th>状态</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    var status, btnCls, btnSymbol, btnText, btnDis;
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</td>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info btn-certificate-search-item-detail" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </td>');
        //for (var j = 0; j < 3; j++) {
        //    btnDis = '';
        //    switch (data[i].certificate[j]) {
        //        case '0':
        //            btnCls = ' btn-secondary ';
        //            btnSymbol = 'btn-certificate-search-item-unavailable';
        //            btnText = '不可申请';
        //            btnDis = 'disabled';
        //            break;
        //        case '1':
        //            btnCls = ' btn-primary ';
        //            btnSymbol = 'btn-certificate-search-item-applyfor';
        //            btnText = '申请认证';
        //            break;
        //        case '2':
        //            btnCls = ' btn-success ';
        //            btnSymbol = 'btn-certificate-search-item-applied';
        //            btnText = '待审核';
        //            btnDis = 'disabled';
        //            break;
        //        case '3':
        //            btnCls = ' btn-success ';
        //            btnSymbol = 'btn-certificate-search-item-passed';
        //            btnText = '认证通过';
        //            btnDis = 'disabled';
        //            break;
        //        case '4':
        //            btnCls = ' btn-warning ';
        //            btnSymbol = 'btn-certificate-search-item-notpass';
        //            btnText = '认证未通过';
        //            break;
        //        default:
        //            btnCls = ' btn-success ';
        //            btnSymbol = 'btn-certificate-search-item-watting';
        //            btnText = data[i].certificate[j];
        //            break;
        //    }
        //    tmpHTMLStr.push('                   <td>');
        //    tmpHTMLStr.push('                       <button type="button" class="btn btn-sm ' + btnCls + btnSymbol + '" data-target="' + data[i].id + '|' + (j + 1) + '" ' + btnDis + ' style="width:90px;">' + btnText + '</button>');
        //    tmpHTMLStr.push('                   </td>');
        //}

        status = "";
        for (var j = 0; j < 3; j++) {
            tmpHTMLStr.push('                   <td>');
            switch (data[i].certificate[j]) {
                case '0':
                    tmpHTMLStr.push('<span class="text-muted font-weight-bold">不可用<span>');
                    break;
                case '1':
                    btnCls = ' btn-primary ';
                    btnSymbol = 'btn-certificate-search-item-applyfor';
                    tmpHTMLStr.push('<button type="button" class="btn btn-sm ' + btnCls + btnSymbol + '" data-target="' + data[i].id + '|' + (j + 1) + '|' + data[i].certificate[j] + '">申请</button>');
                    status = '<span class="text-primary font-weight-bold">可申请<span>';
                    break;
                case '2':
                    btnCls = ' btn-warning ';
                    btnSymbol = 'btn-certificate-search-item-applied';
                    tmpHTMLStr.push('<button type="button" class="btn btn-sm ' + btnCls + btnSymbol + '" data-target="' + data[i].id + '|' + (j + 1) + '|' + data[i].certificate[j] + '">取消</button>');
                    status = '<span class="text-warning font-weight-bold">待审核<span>';
                    break;
                case '3':
                    tmpHTMLStr.push('<span class="text-success font-weight-bold font-italic">已通过<span>');
                    status = "已通过";
                    break;
                case '4':
                    btnCls = ' btn-primary ';
                    btnSymbol = 'btn-certificate-search-item-notpass';
                    tmpHTMLStr.push('<button type="button" class="btn btn-sm ' + btnCls + btnSymbol + '" data-target="' + data[i].id + '|' + (j + 1) + '|' + data[i].certificate[j] + '">申请</button>');
                    status = '<span class="text-danger font-weight-bold">未通过<span>';
                    break;
                case '5':
                    btnCls = ' btn-warning ';
                    btnSymbol = 'btn-certificate-search-item-waiting';
                    var tmpBtnSymb = 'btn-certificate-search-item-admission';
                    tmpHTMLStr.push('<button type="button" class="btn btn-sm ' + btnCls + btnSymbol + '" data-target="' + data[i].id + '|' + (j + 1) + '|' + data[i].certificate[j] + '">取消</button>');
                    status = '<button type="button" class="btn btn-sm btn-success ' + tmpBtnSymb + '" data-target="' + data[i].id + '">准考信息</button>';
                    break;
            }

            tmpHTMLStr.push('                   </td>');
        }


        tmpHTMLStr.push('                   <td>' + data[i].name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].grade.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</td>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</td>');
        tmpHTMLStr.push('                   <td>' + status + '</td>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    $('#row_Certification_Search_Result').empty();
    $('#row_Certification_Search_Result').append($(tmpHTMLStr.join('')));

    $('.btn-certificate-search-item-detail').on('click', function () {
        showStudentDetailPopup($(arguments[0].target).attr('data-target'), 3);
    });

    $('.btn-certificate-search-item-applyfor').on('click', function () {
        var currBtn = $(arguments[0].target);
        btnStatusAdjust(currBtn);
        currBtn.parent().parent().chile
    });

    $('.btn-certificate-search-item-notpass').on('click', function () {
        var currBtn = $(arguments[0].target);
        btnStatusAdjust(currBtn)
    });

    $('.btn-certificate-search-item-applied').on('click', function () {
        var currBtn = $(arguments[0].target);
        btnStatusAdjust(currBtn)
    });


    $('.btn-certificate-search-item-waiting').on('click', function () {
        var currBtn = $(arguments[0].target);
        btnStatusAdjust(currBtn)
    });

    $('.btn-certificate-search-item-admission').on('click', function () {
        var stdId = $(arguments[0].target).attr('data-target');
        showAppliedInfo(stdId)
    });
};

function btnStatusAdjust(btn) {
    var params = btn.attr('data-target').split('|');
    if (btn.hasClass('btn-primary')) {
        btn.removeClass('btn-primary');
        btn.addClass('btn-warning');
        btn.text('取消');
        btn.parent().parent().children().last().html('<span class="text-warning font-weight-bold">待审核<span>');
    } else {
        if (params[2] == '4') {
            btn.parent().parent().children().last().html('<span class="text-danger font-weight-bold">未通过<span>');
        } else {
            if (params[2] == '5') {
                showApplyCancelConfirm(btn);
                return;
            }

            btn.parent().parent().children().last().html('<span class="text-primary font-weight-bold">可申请<span>');
        }

        btn.removeClass('btn-warning');
        btn.addClass('btn-primary');
        btn.text('申请');
    }
};

function showApplyCancelConfirm(sourceBtn) {
    var params = sourceBtn.attr('data-target').split('|');
    var data = { id: '1', name: 'Tom' };
    if ($('#modal_Certification_Cancel_Confirm').length <= 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Certification_Cancel_Confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h6 class="modal-title" id="exampleModalLabel">取消认证申请</h6>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <p></p>');
        tmpHTMLStr.push('               <p>');
        tmpHTMLStr.push('                   <b class="text-primary" id="lb_Certification_Cancel_Confirm_Name">' + data.name + '</b>');
        tmpHTMLStr.push('                    的认证测试申请已经通过并已获得准考资格。</br>');
        tmpHTMLStr.push('                   <b class="text-warning">取消后再次申请将需要重新审核并再次收取认证费用。</b></br>');
        tmpHTMLStr.push('                   <b class="">确认取消吗？</b>');
        tmpHTMLStr.push('               </p>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-primary" id="btn_Certification_Cancel_Confirm_OK" data-target="' + data.id + '">确定</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_Certification_Cancel_Confirm_OK').on('click', function () {
            $('#modal_Certification_Cancel_Confirm').modal('hide');
            sourceBtn.parent().parent().children().last().html('<span class="text-primary font-weight-bold">可申请<span>');
            sourceBtn.removeClass('btn-warning');
            sourceBtn.addClass('btn-primary');
            sourceBtn.text('申请');
        });
    }

    $('#btn_Certification_Cancel_Confirm_OK').attr('data-target', data.id);
    $('#lb_Certification_Cancel_Confirm_Name').html(data.name);
    $('#modal_Certification_Cancel_Confirm').modal('show');
};

function showAppliedInfo(studentId) {
    var data = { id: '1', name: 'Tom', code: '2145698567412', examroom: '考场一', date: '2018-01-01', time: '9:30' };
    if ($('#modal_Certification_Cancel_Confirm').length <= 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Certification_Cancel_Confirm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">');
        tmpHTMLStr.push('    <div class="modal-dialog" role="document" style="font-family: 微软雅黑; font-size: 14px;">');
        tmpHTMLStr.push('        <div class="modal-content">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h6 class="modal-title" id="exampleModalLabel">准考信息</h6>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('               <p></p>');
        tmpHTMLStr.push('               <p>');
        tmpHTMLStr.push('                   <b class="text-primary" id="lb_Certification_Cancel_Confirm_Name">' + data.name + '</b>');
        tmpHTMLStr.push('                    的认证测试申请已经通过并已获得准考资格。</br>');
        tmpHTMLStr.push('                   <b>考号: ' + data.code + '</b></br>');
        tmpHTMLStr.push('                   <b>考场: ' + data.examroom + '</b></br>');
        tmpHTMLStr.push('                   <b>日期: ' + data.date + '</b></br>');
        tmpHTMLStr.push('                   <b>时间: ' + data.time + '</b></br>');
        tmpHTMLStr.push('                   <b>请做好考试准备</b>');
        tmpHTMLStr.push('               </p>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">取消</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-sm btn-primary" id="btn_Certification_Cancel_Confirm_OK" data-target="' + data.id + '">确定</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#btn_Certification_Cancel_Confirm_OK').on('click', function () {
            $('#modal_Certification_Cancel_Confirm').modal('hide');
            sourceBtn.parent().parent().children().last().html('<span class="text-primary font-weight-bold">可申请<span>');
            sourceBtn.removeClass('btn-warning');
            sourceBtn.addClass('btn-primary');
            sourceBtn.text('申请');
        });
    }

    $('#btn_Certification_Cancel_Confirm_OK').attr('data-target', data.id);
    $('#lb_Certification_Cancel_Confirm_Name').html(data.name);
    $('#modal_Certification_Cancel_Confirm').modal('show');
}