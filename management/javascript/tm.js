'use strict';

var _gClassInfoMap = {
    signin: '签到情况',
    homework: '作业情况',
    exam: '测试情况',
    teacher: '教员情况'
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

    $('#menu_Student_Old').on('click', function () {
        buildDataHTML_StdOld();
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
            max: 10
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
            max: 15
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
            max: 15
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
    tmpHTMLStr.push('                   <th style="width: 120px;">编号</th>');
    tmpHTMLStr.push('                   <th style="width: 150px;"></th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">级别</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">教员</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">教室</th>');
    tmpHTMLStr.push('                   <th style="width: 100px;">人数</th>');
    tmpHTMLStr.push('                   <th>开学时间</th>');
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    tmpHTMLStr.push('               <tr>');
    tmpHTMLStr.push('                   <td id="container_DataTable_Body" style="border:none; padding:0px;" colspan="7"></td>');
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
        tmpHTMLStr.push('                       <td style="width: 120px;">' + data[i].symbol + '</th>');
        tmpHTMLStr.push('                       <th style="width: 150px;"><a data-toggle="collapse" href="#' + collapseId + '" aria-expanded="true" aria-controls="' + collapseId + '">' + data[i].title + '</a></th>');
        tmpHTMLStr.push('                       <td style="width: 100px;">' + data[i].level.name + '</th>');
        tmpHTMLStr.push('                       <td style="width: 100px;">' + data[i].teacher.name + '</th>');
        tmpHTMLStr.push('                       <td style="width: 100px;">' + data[i].room.name + '</th>');
        tmpHTMLStr.push('                       <th style="width: 100px;">' + data[i].amount + ' / ' + data[i].max + '</th>');
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
        tmpHTMLStr.push('   <td scope="row">' + (i + 1) + '</th>');
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
    var data = [{ name: '教室 1', id: '1' }, { name: '教室 2', id: '2' }, { name: '教室 3', id: '3' }];
    return data;
};

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
            age: 14
        }, {
            id: '2',
            name: 'Alice',
            gender: '女',
            level: { id: '2', name: '中级' },
            declare: { id: '1', name: 'C-02-003' },
            age: 13
        }, {
            id: '3',
            name: 'Jack',
            gender: '男',
            level: { id: '3', name: '高级' },
            declare: { id: '1', name: 'C-03-002' },
            age: 15
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
    tmpHTMLStr.push('               </tr>');
    tmpHTMLStr.push('            </thead>');
    tmpHTMLStr.push('            <tbody>');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLStr.push('               <tr id="tr_Student_New_Assign_' + data[i].id + '">');
        tmpHTMLStr.push('                   <td>' + (i + 1) + '</th>');
        tmpHTMLStr.push('                   <td>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-primary" id="btn_Student_New_Assign" data-target="' + data[i].id + '|' + data[i].declare.id + '">分配班级</button>');
        tmpHTMLStr.push('                       <button type="button" class="btn btn-sm btn-info" data-target="' + data[i].id + '">详情</button>');
        tmpHTMLStr.push('                   </th>');
        tmpHTMLStr.push('                   <td>' + data[i].name + '</th>');
        tmpHTMLStr.push('                   <td>' + data[i].gender + '</th>');
        tmpHTMLStr.push('                   <td>' + data[i].level.name + '</th>');
        tmpHTMLStr.push('                   <td>' + data[i].age + '</th>');
        tmpHTMLStr.push('                   <td>' + data[i].declare.name + '</th>');
        tmpHTMLStr.push('               </tr>');
    }

    tmpHTMLStr.push('            </tbody>');
    tmpHTMLStr.push('        </table>');
    tmpHTMLStr.push('    </div>');
    tmpHTMLStr.push('</div>');
    $('#container_Datas').append($(tmpHTMLStr.join('')));
    $('#btn_Student_New_Assign').on('click', function () {
        showStudentNewAssignPopup($(arguments[0].target).attr('data-target'));
    });
};

function showStudentNewAssignPopup(dataTarget) {
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
        tmpHTMLStr.push('       <button type="button" class="btn btn-sm btn-success btn-student-new-assign-ok" data-target="' + data[i].id + '|' + stdId + '">分配</button>');
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