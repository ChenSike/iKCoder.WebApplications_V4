'use strict';

function buildContent_Exp(items) {
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
        datas.push({ id: tmpItem.attr('id'), name: tmpItem.attr('name'), course: tmpItem.attr('title'), price: tmpItem.attr('price'), isfree: tmpItem.attr('isfree'), discount: tmpItem.attr('discount') });
    }

    var itemCount = datas.length;
    var tmpHTMLArr = [];
    var tmpStyle = '';
    var tmpPrice = '';
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-experiment-content">');
    tmpHTMLArr.push('    <div class="row align-items-center row-experiment-group-list">');
    tmpHTMLArr.push('        <div class="col">');
    var itemsHTML = [];
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '" data-target="' + datas[i].name + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgHeight + 'px;';
        itemsHTML.push('                    <img class="img-fluid" src="' + _gCourseImgMap[datas[i].name.trim()].img + '" style="' + tmpStyle + '" />');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin" style="padding-top: 8px;">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'color:' + _gCourseImgMap[datas[i].name.trim()].color + ';font-size:12px';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + datas[i].course + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpPrice = (datas[i].isfree == '1' ? '免费' : parseInt(datas[i].price).toFixed(2));
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">价格: <span style="' + (datas[i].discount != '0' ? 'text-decoration:line-through;' : '') + '">' + tmpPrice + '<span></p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        if (datas[i].isfree != '1') {
            itemsHTML.push('            <div class="row no-margin">');
            itemsHTML.push('                <div class="col no-padding">');
            tmpPrice = (datas[i].discount == '0' ? '无' : parseInt(datas[i].price * 100).toFixed(2));
            itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">折扣: ' + tmpPrice + '</p>');
            itemsHTML.push('                </div>');
            itemsHTML.push('            </div>');
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
    var successFn = function (response) {
        buildDetail_Exp(response);
    };

    $('.horizontal-list-item').on('click', function (eventObj) {
        ajaxFn('GET', _getRequestURL(_gURLMapping.course.getexplist, { course_name: $(eventObj.currentTarget).attr('data-target') }), '', successFn);
    });

    bindHorizontalListEvent(containerHeight, width, space, itemCount, 'course_package');
    ajaxFn('GET', _getRequestURL(_gURLMapping.course.getexplist, { course_name: datas[0].name }), '', successFn);
};

function buildDetail_Exp(response) {
    var datas = [
       {
           id: 1,
           date: '2017-10-3',
           author: 'Teacher Zhang',
           status: '',
           title: '模式识别',
           content: '想一想，试一试，如何让吃豆人运行到附件图中的位置.',
           attach: ['image/Experimental/e_1.png', 'image/Experimental/e_2.png', 'image/Experimental/e_3.png'],
           course: '',
           lesson: ''
       }
    ];

    var tmpHTMLArr = [];
    tmpHTMLArr.push('    <div class="row align-items-center text-14 row-experiment-group-item-list">');
    tmpHTMLArr.push('        <div class="col no-padding">');
    tmpHTMLArr.push('<table class="table table-hover table-sm">');
    tmpHTMLArr.push('   <thead>');
    tmpHTMLArr.push('       <tr>');
    tmpHTMLArr.push('           <th scope="col col-experiment-state" style="width: 50px; min-width:50px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-title" style="width: 100px; min-width:50px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-content" style="height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-attach" style="width: 60px; min-width:60px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-author" style="width: 120px; min-width:120px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-date" style="width: 120px; min-width:120px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('       </tr>');
    tmpHTMLArr.push('   </thead>');
    tmpHTMLArr.push('   <tbody>');

    var tmpState;
    for (var i = 0; i < datas.length; i++) {
        tmpState = (datas[i].status == '1' ? 'star' : 'star-half-alt');
        tmpHTMLArr.push('       <tr style="line-height: 30px;">');
        tmpHTMLArr.push('           <td class="text-center"><i class="fas fa-' + tmpState + ' course-state"></i></td>');
        tmpHTMLArr.push('           <td class="text-bold">' + datas[i].title + '</td>');
        tmpHTMLArr.push('           <td><div class="experiment-content-text">' + datas[i].content + '</div></td>');
        tmpHTMLArr.push('           <td><button type="button" class="btn btn-outline-info btn-sm experiment-attach-btn" data-target="' + datas[i].id + '">View</button></td>');
        tmpHTMLArr.push('           <td>' + datas[i].author + '</td>');
        tmpHTMLArr.push('           <td>' + datas[i].date + '</td>');
        tmpHTMLArr.push('       </tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    $('.row-experiment-group-item-list').remove();
    $('.row-experiment-group-list').after($(tmpHTMLArr.join('')));
    $('.experiment-attach-btn').on('click', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var attachs = [];
        for (var i = 0; i < datas.length; i++) {
            if (dataId == datas[i].id) {
                showExperimentAttachs(datas[i]);
            }
        }
    });
};

function showExperimentAttachs(data) {
    if ($('#modal_Experiment_Attachs').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Experiment_Attachs" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog modal-lg" role="document">');
        tmpHTMLStr.push('        <div class="modal-content h-100">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title font-16" id="exampleModalLabel">题目详情</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('<div class="container-fluid wrap-circle">');
        tmpHTMLStr.push('   <div class="row">');
        tmpHTMLStr.push('       <div class="col">');
        tmpHTMLStr.push('                <div id="carousel_Experiment_Attachs" class="carousel slide h-100" data-ride="carousel" data-interval="90000" data-keyboard="true" data-wrap="false" data-ride="true">');
        tmpHTMLStr.push('                    <div class="carousel-inner h-100">');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <a class="carousel-control-prev" href="#carousel_Experiment_Attachs" role="button" data-slide="prev">');
        //tmpHTMLStr.push('                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <i class="fas fa-angle-left fa-2x" aria-hidden="true"></i>');
        tmpHTMLStr.push('                        <span class="sr-only" style="color:darkred">Previous</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                    <a class="carousel-control-next" href="#carousel_Experiment_Attachs" role="button" data-slide="next">');
        //tmpHTMLStr.push('                        <span class="carousel-control-next-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <i class="fas fa-angle-right fa-2x" aria-hidden="true"></i>');
        tmpHTMLStr.push('                        <span class="sr-only">Next</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('    <div class="row">');
        tmpHTMLStr.push('       <div class="col">');
        tmpHTMLStr.push('           <p class="padding-10">' + data.content + '</p>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-primary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    $('#carousel_Experiment_Attachs .carousel-inner').empty();
    var tmpItemStr = '';
    for (var i = 0; i < data.attach.length; i++) {
        tmpItemStr += '<div class=" h-100 carousel-item ' + (i == 0 ? 'active' : '') + '">';
        tmpItemStr += '   <img class="d-block h-100" src="' + data.attach[i] + '" style="margin: auto;">';
        tmpItemStr += '</div>';
    }

    $('#carousel_Experiment_Attachs .carousel-inner').append($(tmpItemStr));
    $('#modal_Experiment_Attachs').modal('show');
};