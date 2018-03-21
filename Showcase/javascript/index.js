'use strict';

var _demos = [
    { id: 'RunPixi', name: 'Run Pixi-2D', url: 'runpixi.html' },
    { id: 'Draw3D', name: 'Computer Graphics-3D', url: 'draw.html' },
    { id: 'Laser', name: 'Laser Town-3D', url: 'laser.html' },
    { id: 'Football', name: 'Football Game-2D+3D', url: 'football.html' }
];

function initPage() {
    initEvents();
};

function initEvents() {
    $('#menu_FourThirty').on('click', function () {
        $('.project-name-title').text('Demo 列表');
        buildDemoList();
    });
};

function buildDemoList(projectObj, type) {
    $('#container_CourseList').parent().height($('#container_Datas').parent().height() - 100);
    var tmpHTMLArr = [];
    var tmpClass = 'primary';
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col" id="col_">');
    for (var i = 0; i < _demos.length; i++) {
        tmpClass = i % 2 == 0 ?  'secondary':'primary';
        tmpHTMLArr.push('<button type="button" class="btn btn-' + tmpClass + ' btn-lg btn-block btn-open-demo-item" id="btn_Open_' + _demos[i].id + '">' + _demos[i].name + '</button>');
    }

    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    $('#container_Datas_Col').empty().append($(tmpHTMLArr.join('')));
    $('#container_Datas_Col .btn-open-demo-item').on('click', function () {
        var target = $(arguments[0].currentTarget);
        var tmpId = target.attr('id').split('_');
        tmpId = tmpId[tmpId.length - 1];
        for (var i = 0; i < _demos.length; i++) {
            if (tmpId == _demos[i].id) {
                window.open(_demos[i].url);
                break;
            }
        }
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