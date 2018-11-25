'use strict';

function buildContent_Courses(items) {
    var courseObjs = [];
    var orgContainerHeight = 235;
    var orgHeight = 225;
    var orgWidth = 155;
    var orgImgHeight = 140;
    var orgSpace = 35;
    var availableHeight = $('.col-content').height();
    var scale = availableHeight / _orgAvailableHeight;

    var containerHeight = Math.floor(scale * orgContainerHeight);
    var height = Math.floor(scale * orgHeight);
    var width = Math.floor(scale * orgWidth);
    var imgHeight = Math.floor(scale * orgImgHeight);
    var padding = Math.floor((containerHeight - height) / 2);
    var space = Math.floor(scale * orgSpace);

    var datas = [];
    var tmpItem = null;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        //<item name="E" id="5" title="C#" price="1000" discount="0" isfress="0" access="0" enable=""></item>
        datas.push({
            id: tmpItem.attr('id'),
            name: tmpItem.attr('name'),
            course: tmpItem.attr('title'),
            price: tmpItem.attr('price'),
            isfree: tmpItem.attr('isfress'),
            discount: tmpItem.attr('discount'),
            access: tmpItem.attr('access'),
            enable: tmpItem.attr('enable'),
            diff: tmpItem.attr('diff'),
            des: tmpItem.attr('des'),
            type: tmpItem.attr('udma'),
        });
    }

    var itemCount = datas.length;
    var tmpHTMLArr = [];
    var tmpStyle = '';
    var tmpPrice = '';
    var tmpDiscount = '';
    var tmpBtn = '';
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-courses-content">');
    tmpHTMLArr.push('    <div class="row align-items-center row-courses-group-list">');
    tmpHTMLArr.push('        <div class="col">');
    var itemsHTML = [];
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgHeight + 'px; cursor:pointer;';
        itemsHTML.push('                    <img class="img-fluid img-course-item-detail" src="' + _gCourseImgMap[datas[i].name.trim()].img + '" style="' + tmpStyle + '" data-target="' + datas[i].name + '" data-access="' + datas[i].access + '"/>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin" style="padding-top: 8px;">');
        itemsHTML.push('                <div class="col no-padding text-12 font-weight-bold">');
        tmpStyle = 'color:' + _gCourseImgMap[datas[i].name.trim()].color + ';';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + datas[i].course + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        if (datas[i].enable == '0') {
            itemsHTML.push('            <div class="row no-margin">');
            itemsHTML.push('                <div class="col no-padding text-12">');
            itemsHTML.push('                    <p class="text-center" style="' + tmpStyle + '">即将上线</p>');
            itemsHTML.push('                </div>');
            itemsHTML.push('            </div>');
        } else {
            itemsHTML.push('            <div class="row no-margin">');
            itemsHTML.push('                <div class="col no-padding text-12">');
            tmpPrice = (datas[i].isfree == '1' ? '免费' : parseInt(datas[i].price).toFixed(2));
            tmpBtn = '';
            if (datas[i].isfree != '1') {
                if (datas[i].access == '1') {
                    tmpBtn = '<i class="fas fa-check" title="已购买"></i>';
                } else {
                    tmpBtn = '<button type="button" class="btn btn-sm btn-warning btn-course-item-buy" data-target="' + datas[i].name + '" title="购买课程"><i class="fas fa-shopping-cart "></i></button>';
                }
            } else {
                tmpBtn = '<button type="button" class="btn btn-sm btn-warning btn-course-item-buy" data-target="' + datas[i].name + '" title="课程详情"><i class="fas fa-info-circle"></i></button>';
            }

            itemsHTML.push('                    <p class="text-center" style="' + tmpStyle + '">价格: ');
            itemsHTML.push('                        <span style="' + (datas[i].discount != '0' ? 'text-decoration:line-through;' : '') + '">' + tmpPrice + '<span>');
            itemsHTML.push(tmpBtn);
            itemsHTML.push('                </p>');
            itemsHTML.push('                </div>');
            itemsHTML.push('            </div>');
            if (datas[i].isfree != '1' && datas[i].discount != '0') {
                itemsHTML.push('            <div class="row no-margin">');
                itemsHTML.push('                <div class="col no-padding text-12">');
                tmpDiscount = 1 - parseFloat(datas[i].discount) / 100;
                tmpPrice = parseInt(parseInt(datas[i].price) * tmpDiscount).toFixed(2);
                itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">优惠价: ' + tmpPrice + '</p>');
                itemsHTML.push('                </div>');
                itemsHTML.push('            </div>');
            }
        }

        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join(''), 'course_package'));
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    $('.img-course-item-detail').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        $('.img-course-item-detail').removeClass('active');
        target.addClass('active');
        var courseCode = target.attr('data-target');
        var courseAcce = target.attr('data-access');
        ajaxFn('GET', _getRequestURL(_gURLMapping.course.getlessonslist, { course_name: courseCode }),
            '',
            function (response) {
                buildDetail_Course(response, courseAcce);
            }
        );
    });
    $('.btn-course-item-buy').on('click', function (eventObj) {
        var courseName = $(eventObj.currentTarget).attr('data-target');
        var currCourse = null;
        for (var i = 0; i < datas.length; i++) {
            if (courseName == datas[i].name) {
                currCourse = datas[i];
                break;
            }
        }
        var successFn = function (response) {
            showCourseBuyModal(response, currCourse);
        }

        ajaxFn('GET', _getRequestURL(_gURLMapping.course.getlessonslist, { course_name: courseName }), '', successFn);
    });

    bindHorizontalListEvent(containerHeight, width, space, itemCount, 'course_package');
    $($('.img-course-item-detail')[0]).addClass('active');
    ajaxFn('GET', _getRequestURL(_gURLMapping.course.getlessonslist, { course_name: datas[0].name }), '', function (response) { buildDetail_Course(response, '1'); });
};

var _gRefreshCourseCode = '';
function courseRefreshList() {
    if ($('.row-category-item.active-item').attr('data-target') == 'courses') {
        buildCategoryContent('courses');
        _gRefreshCourseCode = window.setTimeout('courseRefreshList()', 60000);
    }
};

function showCourseBuyModal(response, course) {
    var items = $(response).find('item');
    var lessons = [];
    var tmpItem;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        lessons.push({
            title: tmpItem.attr('lesson_title'),
            symbol: tmpItem.attr('lesson_code'),
            steam: tmpItem.attr('steam'),
            type: tmpItem.attr('udba'),
            steps: tmpItem.attr('totalsteps')
        });
    }

    if ($('#modal_Course_Buy').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Course_Buy" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog modal-lg" role="document">');
        tmpHTMLStr.push('        <div class="modal-content h-100">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title font-16" id="modal_Course_Buy_Title"></h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('<div class="container-fluid">');
        tmpHTMLStr.push('   <div class="row">');
        tmpHTMLStr.push('       <div class="col-3 col-course-card">');
        tmpHTMLStr.push('           <div class="container-fluid no-padding">');
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-padding">');
        tmpHTMLStr.push('                       <img class="img-fluid course-image" src=""/>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-paddingfont-weight-bold">');
        tmpHTMLStr.push('                       <p class="text-center course-name"></p>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-padding">');
        tmpHTMLStr.push('                       <p class="text-center">价格: ');
        tmpHTMLStr.push('                           <span class="course-price"><span>');
        tmpHTMLStr.push('                       </p>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div class="row no-margin row-course-discount">');
        tmpHTMLStr.push('                   <div class="col no-padding text-12">');
        tmpHTMLStr.push('                       <p class="text-center">优惠价: <span class="course-discount"></span></p>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('       <div class="col-9 col-course-detail">');
        tmpHTMLStr.push('           <div class="card text-center">');
        tmpHTMLStr.push('               <div class="card-header">');
        tmpHTMLStr.push('                   <ul class="nav nav-tabs course-buy-card-header-tabs">');
        tmpHTMLStr.push('                       <li class="nav-item">');
        tmpHTMLStr.push('                           <a class="nav-link" href="#" data-target="detail">课程简介</a>');
        tmpHTMLStr.push('                       </li>');
        tmpHTMLStr.push('                       <li class="nav-item">');
        tmpHTMLStr.push('                           <a class="nav-link" href="#" data-target="lessons">课程设置</a>');
        tmpHTMLStr.push('                       </li>');
        tmpHTMLStr.push('                   </ul>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div class="card-body">');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-success btn-sm btn-course-buy-confirm">确定购买</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-dark btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
        $('#modal_Course_Buy .course-buy-card-header-tabs a').on('click', function (eventObj) {
            $(eventObj.currentTarget).tab('show');
        });
        $('#modal_Course_Buy .course-buy-card-header-tabs a').on('shown.bs.tab', function (eventObj) {
            var container = $('#modal_Course_Buy .card .card-body');
            container.empty();
            var tmpHTMLArr = [];
            if ($(eventObj.currentTarget).attr('data-target') == 'detail') {
                tmpHTMLArr.push('<table class="table table-sm">');
                tmpHTMLArr.push('   <thead>');
                tmpHTMLArr.push('       <tr>');
                tmpHTMLArr.push('           <th class="th-course-diff" scope="col">难度: ');
                var diff = parseFloat(course.diff);
                var tmpDiff = '';
                for (var j = 0; j < 5; j++) {
                    tmpDiff = (diff > j ? diff < j + 1 ? 'fas fa-star-half-alt' : 'fas fa-star' : 'far fa-star');
                    tmpHTMLArr.push('<i class="' + tmpDiff + '"></i>');
                }

                tmpHTMLArr.push('           </th>');
                tmpHTMLArr.push('           <th scope="col">相关技术: ' + buildCourseTypeHTML(course.type) + '</th>');
                tmpHTMLArr.push('       </tr>');
                tmpHTMLArr.push('   </thead>');
                tmpHTMLArr.push('   <tbody>');
                tmpHTMLArr.push('       <tr>');
                tmpHTMLArr.push('           <td colspan="2">' + course.des + '</td>');
                tmpHTMLArr.push('       </tr>');
                tmpHTMLArr.push('   </tbody>');
                tmpHTMLArr.push('</table>');
            } else {
                tmpHTMLArr.push('<table class="table table-hover table-sm">');
                tmpHTMLArr.push('   <thead>');
                tmpHTMLArr.push('       <tr>');
                tmpHTMLArr.push('           <th scope="col col-course-title" style="height: 1px;padding: 0px;"></th>');
                tmpHTMLArr.push('           <th scope="col col-course-step" style="width: 50px;height: 1px;padding: 0px;"></th>');
                tmpHTMLArr.push('           <th scope="col col-course-steam" style="width: 150px;height: 1px;padding: 0px;"></th>');
                tmpHTMLArr.push('           <th scope="col col-course-type" style="height: 1px;padding: 0px;"></th>');
                tmpHTMLArr.push('       </tr>');
                tmpHTMLArr.push('   </thead>');
                tmpHTMLArr.push('   <tbody>');
                for (var i = 0; i < lessons.length; i++) {
                    tmpHTMLArr.push('       <tr>');
                    tmpHTMLArr.push('           <td>' + lessons[i].title + '</td>');
                    tmpHTMLArr.push('           <td><span class="course-step-total">' + lessons[i].steps + '</span></td>');
                    tmpHTMLArr.push('           <td>' + buildSTEAMHTML(lessons[i].steam) + '</td>');
                    tmpHTMLArr.push('           <td>' + buildCourseTypeHTML(lessons[i].type) + '</td>');
                    tmpHTMLArr.push('       </tr>');
                }

                tmpHTMLArr.push('   </tbody>');
                tmpHTMLArr.push('</table>');
            }

            container.append($(tmpHTMLArr.join('')));
        });
        $('#modal_Course_Buy').on('shown.bs.modal', function (eventObj) {
            $('body').css('padding', '0px');
        });
    }

    $('#modal_Course_Buy .course-image').attr('src', _gCourseImgMap[course.name.trim()].img);
    $('#modal_Course_Buy .course-name').text(course.course);
    $('#modal_Course_Buy_Title').text(course.access == '1' ? '课程概览' : '购买课程');
    var tmpPrice = parseInt(course.price);
    if (course.enable == '1' && course.access != '1' && course.isfree != '1' && course.discount != '0') {
        var tmpDiscount = 1 - parseFloat(course.discount) / 100;
        tmpDiscount = parseInt(tmpPrice * tmpDiscount);
        $('#modal_Course_Buy .course-price').text(tmpPrice.toFixed(2));
        $('#modal_Course_Buy .course-price').css('text-decoration', 'line-through');
        $('#modal_Course_Buy .row-course-discount').show();
        $('#modal_Course_Buy .course-discount').text(tmpDiscount.toFixed(2));
    } else {
        $('#modal_Course_Buy .course-price').css('text-decoration', 'none');
        $('#modal_Course_Buy .row-course-discount').hide();
        $('#modal_Course_Buy .course-discount').text('');
        $('#modal_Course_Buy .course-price').text(course.enable != '1' ? '即将上线' : course.isfree == '1' ? '免费' : course.access == '1' ? '已经购买' : tmpPrice.toFixed(2));
        if (course.access == '1' || course.enable != '1' || course.isfree == '1') {
            $('#modal_Course_Buy .btn-course-buy-confirm').hide();
        }
    }

    $('#modal_Course_Buy').modal('show');
    $('#modal_Course_Buy .course-buy-card-header-tabs li:first-child a').tab('show');
};

function buildDetail_Course(response, access) {
    var items = $(response).find('item');
    var datas = [];
    var currItem = null;
    for (var i = 0; i < items.length; i++) {
        currItem = $(items[i]);
        datas.push({
            //<item lesson_title="认识计算机-A" lesson_code="A_001" steam="E" udba="UD" totalsteps="1" order="1" status="0"/>
            symbol: currItem.attr('lesson_code'),
            title: currItem.attr('lesson_title'),
            steps: currItem.attr('totalsteps'),
            steam: currItem.attr('steam'),
            type: currItem.attr('udba'),
            course: currItem.attr('course_name'),
            status: currItem.attr('status')
        });
    }

    var tmpHTMLArr = [];
    tmpHTMLArr.push('    <div class="row align-items-center row-courses-group-item-list">');
    tmpHTMLArr.push('        <div class="col no-padding">');
    tmpHTMLArr.push('<table class="table table-hover table-sm">');
    tmpHTMLArr.push('   <thead>');
    tmpHTMLArr.push('       <tr>');
    tmpHTMLArr.push('           <th scope="col col-course-state" style="width: 50px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-title" style="height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-step" style="width: 50px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-steam" style="width: 150px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-type" style="height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-run" style="width: 80px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('       </tr>');
    tmpHTMLArr.push('   </thead>');
    tmpHTMLArr.push('   <tbody>');

    var tmpState;
    for (var i = 0; i < datas.length; i++) {
        tmpState = (datas[i].status == '1' ? 'fas fa-star-half-alt' : datas[i].status == '2' ? 'fas fa-star' : 'far fa-star');
        tmpHTMLArr.push('       <tr class="row-courses-group-item" data-target="' + datas[i].symbol + '" data-title="' + datas[i].title + '" style="cursor: pointer;">');
        tmpHTMLArr.push('           <td class="text-center"><i class="' + tmpState + ' course-state" data-target="' + datas[i].status + '"></i></td>');
        tmpHTMLArr.push('           <td>' + datas[i].title + '</td>');
        tmpHTMLArr.push('           <td><span class="course-step-total">' + datas[i].steps + '</span></td>');
        tmpHTMLArr.push('           <td>' + buildSTEAMHTML(datas[i].steam) + '</td>');
        tmpHTMLArr.push('           <td>' + buildCourseTypeHTML(datas[i].type) + '</td>');
        tmpHTMLArr.push('           <td>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-link course-start" data-target="' + datas[i].symbol + '" data-title="' + datas[i].title + '">');
        tmpHTMLArr.push('                   <i class="far fa-hand-point-right cursor-hand"></i>');
        tmpHTMLArr.push('               </button>');
        tmpHTMLArr.push('           </td>');
        tmpHTMLArr.push('       </tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    $('.row-courses-group-item-list').remove();
    $('.row-courses-group-list').after($(tmpHTMLArr.join('')));
    //$('.row-courses-group-item-list .course-start').on('click', function (eventObj) {
    $('.row-courses-group-item-list .row-courses-group-item').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        var courseCode = target.attr('data-target');
        //if (access == '0') {
        //    _showGlobalMessage('您尚未购买此课程，无法开始学习', 'warning', 'alert_Start_Course');
        //} else {
        var data = '<root><type>Type_Lesson</type><action>Start</action><code>' + courseCode + '</code></root>';
        ajaxFn('POST', _getRequestURL(_gURLMapping.course.setlearnaction, {}), data, _gEmptyFn);
        if (courseCode.toUpperCase().indexOf('A_') == 0) {
            window.open("workplatform.html?scene=" + courseCode + '&step=0&title=' + target.attr('data-title'));
        } else {
            window.open("codeplatform.html?scene=" + courseCode + '&step=0&title=' + target.attr('data-title'));
        }
        //}
    });
};

function buildSTEAMHTML(steam) {
    var tmpHTMLArr = [];
    var tmpObj;
    for (var i = 0; i < steam.length; i++) {
        tmpObj = _gSTEAMMap[steam[i].toLowerCase()];
        tmpHTMLArr.push('<span class="course-staem-' + steam[i].toLowerCase() + ' steam-char" title="' + tmpObj.title + '">' + steam[i].toUpperCase() + '</span>');
    }

    return tmpHTMLArr.join('');
};

function buildCourseTypeHTML(courseType) {
    var tmpHTMLArr = [];
    var tmpObj;
    for (var i = 0; i < courseType.length; i++) {
        tmpObj = _gCourseTypeMap[courseType[i].toLowerCase()];
        tmpHTMLArr.push('<i class="' + tmpObj.icon + ' course-type-icon" title="' + tmpObj.title + '"></i>');
    }

    return tmpHTMLArr.join('');
};