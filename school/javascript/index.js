'use strict';

var _fourThirtyProjects = [
    {
        id: 1,
        name: '教学方案 A',
        symbol: 'A',
        items: [
            { id: 1, doc: [], stage: 'a_01_001' },
            { id: 2, doc: [], stage: 'a_01_002' },
            { id: 3, doc: [], stage: 'a_01_003' },
            {
                id: 4, doc: [
                      'fourthirty/doc/b_01_001/p_0.fw.png',
                      'fourthirty/doc/b_01_001/p_1.fw.png',
                      'fourthirty/doc/b_01_001/p_2.fw.png',
                      'fourthirty/doc/b_01_001/p_3.fw.png',
                      'fourthirty/doc/b_01_001/p_4.fw.png',
                      'fourthirty/doc/b_01_001/p_5.fw.png',
                      'fourthirty/doc/b_01_001/p_6.fw.png',
                      'fourthirty/doc/b_01_001/p_7.fw.png',
                      'fourthirty/doc/b_01_001/p_8.fw.png',
                      'fourthirty/doc/b_01_001/p_9.fw.png',
                      'fourthirty/doc/b_01_001/p_10.fw.png',
                      'fourthirty/doc/b_01_001/p_11.fw.png',
                      'fourthirty/doc/b_01_001/p_12.fw.png',
                      'fourthirty/doc/b_01_001/p_13.fw.png',
                      'fourthirty/doc/b_01_001/p_14.fw.png',
                      'fourthirty/doc/b_01_001/p_15.fw.png',
                      'fourthirty/doc/b_01_001/p_16.fw.png',
                      'fourthirty/doc/b_01_001/p_17.fw.png'
                ],
                stage: 'b_01_001'
            },
            { id: 5, doc: '', stage: 'b_01_002' },
            { id: 6, doc: '', stage: 'b_01_003' },
            { id: 7, doc: '', stage: 'b_01_004' },
            { id: 8, doc: '', stage: 'b_01_005' },
            { id: 9, doc: '', stage: 'b_01_006' },
            { id: 10, doc: '', stage: 'b_01_007' },
            { id: 11, doc: '', stage: 'b_01_008' },
            { id: 12, doc: '', stage: 'b_01_009' },
            { id: 13, doc: '', stage: 'b_01_010' },
            { id: 14, doc: '', stage: 'b_02_001' },
            { id: 15, doc: '', stage: 'b_02_002' },
            { id: 16, doc: '', stage: 'b_02_005' },
            { id: 17, doc: '', stage: 'b_02_006' },
            { id: 18, doc: '', stage: 'b_02_007' },
            { id: 19, doc: '', stage: 'b_02_010' },
            { id: 20, doc: '', stage: 'b_02_011' },
            { id: 21, doc: '', stage: 'b_02_013' }
        ]
    },
    { id: 2, name: '教学方案 B', symbol: 'B', items: [] },
    { id: 3, name: '教学方案 C', symbol: 'C', items: [] }
];

var _clubProjects = [
];

var _globalProjectObj = null;

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
        '		<usr id="001" nickname="Willy" last="' + getDateByPeriod(Date.now(), -1, 'D').toString() + '"/>' +
        '	</basic>' +
        '</root>');
    var data = {
        id: '001',
        name: "Willy",
        last: getDateByPeriod(Date.now(), -1, 'D').toLocaleString()
    };
    buildUserInfoHTML(data);
    buildFourThirtySubMenus();
    buildClubSubMenus();
    initEvents();
};

function buildUserInfoHTML(data) {
    $('#label_UserName').text('iKCoder 艾酷教育');
    $('#label_LastLoginTime').text('上次登录时间: ' + data.last);
    //$('#image_User_Header').attr('src', _getRequestURL(_gURLMapping.account.getheader, {}));
};

function buildFourThirtySubMenus() {
    var tmpContainer = $('#collapseFourThirty ul.list-group');
    for (var i = 0; i < _fourThirtyProjects.length; i++) {
        tmpContainer.append($('<li id="menu_FourThirty_Project_' + _fourThirtyProjects[i].symbol + '" class="list-group-item forethirty-project-list-item" data-target="' + _fourThirtyProjects[i].id + '">' + _fourThirtyProjects[i].name + '</li>'));
    }
};

function buildClubSubMenus() {
    var tmpContainer = $('#collapseClub ul.list-group');
    for (var i = 0; i < _clubProjects.length; i++) {
        tmpContainer.append($('<li id="menu_FourThirty_Project_' + _clubProjects[i].symbol + '" class="list-group-item">' + _clubProjects[i].name + '</li>'));
    }
};

function initEvents() {
    $('.forethirty-project-list-item').on('click', function () {
        var tmpId = $(arguments[0].currentTarget).attr('data-target');
        for (var i = 0; i < _fourThirtyProjects.length; i++) {
            if (tmpId == _fourThirtyProjects[i].id) {
                _globalProjectObj = _fourThirtyProjects[i];
                $('.project-name-title').text(_fourThirtyProjects[i].name);
                buildCourseList(_fourThirtyProjects[i], 'fourthirty');
                break;
            }
        }
    });
};

function buildCourseList(projectObj, type) {
    $('#container_CourseList').parent().height($('#container_Datas').parent().height() - 100);
    var courseItems = projectObj.items;
    var tmpHTMLArr = [];
    for (var i = 0; i < courseItems.length; i++) {
        tmpHTMLArr.push('<div class="row" style="border-bottom:1px solid rgba(0,0,0,0.6);">');
        tmpHTMLArr.push('   <div class="col-2">');
        tmpHTMLArr.push('       <p>第' + (i + 1) + '课</p>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-4">');
        tmpHTMLArr.push('       <p>编号: ' + courseItems[i].stage.toUpperCase() + '</p>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col">');
        tmpHTMLArr.push('       <button type="button" class="btn btn-outline-success btn-block" data-toggle="modal" data-target="#modal_LessonDoc" data-course-type="' + type + '" data-course-id="' + courseItems[i].id + '">教案</button>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col">');
        tmpHTMLArr.push('       <button type="button" class="btn btn-outline-primary btn-block" data-course-type="' + type + '" data-target="' + courseItems[i].id + '">课件</button>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    $('#container_CourseList').empty().append($(tmpHTMLArr.join('')));
    $('#container_CourseList .btn.btn-outline-success').on('click', function () {
        var target = $(arguments[0].currentTarget);
        openLessonDoc(target.attr('data-course-id'), target.attr('data-course-type'));
    });

    $('#container_CourseList .btn.btn-outline-primary').on('click', function () {
        var target = $(arguments[0].currentTarget);
        openCourseWare(target.attr('data-target'), target.attr('data-course-type'));
    });
};

function openLessonDoc(courseId, type) {
    for (var i = 0; i < _globalProjectObj.items.length; i++) {
        if (courseId == _globalProjectObj.items[i].id) {
            var data = _globalProjectObj.items[i].doc;
            $('#modal_LessonDoc .carousel-inner').empty();
            var tmpItemStr = '';
            for (var i = 0; i < data.length; i++) {
                if (i == 0) {
                    tmpItemStr += '<div class="carousel-item active">';
                } else {
                    tmpItemStr += '<div class="carousel-item">';
                }

                tmpItemStr += '<img class="rounded mx-auto d-block" src="' + data[i] + '" alt="' + i + ' slide">';
                tmpItemStr += '</div>';
            }
            $('#modal_LessonDoc .carousel-inner').append($(tmpItemStr));
            $('#modal_LessonDoc').on('shown.bs.modal', function (e) {
                var modalDialog = $('#modal_LessonDoc .modal-dialog');
                modalDialog.height($('body').height() - 1);
                modalDialog.width($('body').width() - 1);
                var parent = $($('#carousel_LessonDoc').parent());
                $('#carousel_LessonDoc').height(modalDialog.height() - 80);
                $('#carousel_LessonDoc').width(parent.width() - 30);
                $('#carousel_LessonDoc').carousel();
                $('.carousel-control-next').focus();
            })
            break;
        }
    }
};

function openCourseWare(courseId, type) {
    for (var i = 0; i < _globalProjectObj.items.length; i++) {
        if (courseId == _globalProjectObj.items[i].id) {
            window.open('courseware.html?type=' + type + '&scene=' + _globalProjectObj.items[i].stage + '&step=1')
        }
    }
};

$(document).on('keydown', function () {
    if ($('#modal_LessonDoc').css('display') == 'block') {
        var keyCode = arguments[0].keyCode;
        if (keyCode == 32 || keyCode == 39) {
            $('.carousel').carousel('next')
        } else if (keyCode == 37) {
            $('.carousel').carousel('prev')
        } else if (keyCode == 27) {
            $('.carousel').carousel(0);
        }
    }
});