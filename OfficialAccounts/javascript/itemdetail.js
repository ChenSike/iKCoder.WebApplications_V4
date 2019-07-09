'use strict';

var _itemId = '1';

function initPage() {
    //loadDetailData();
    //_itemId = getQueryString('itemid');
    var detailData = formatData();
    buildCarouselHTML(detailData.carousel);
    buildDetailHTML(detailData.detail);
};

function formatData() {
    return {
        carousel: [
            "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
        ],
        detail: [
            "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"
        ]
    }
};

function buildCarouselHTML(data) {
    var tmpSrc = '';
    var tmpStrArr=[];
    tmpStrArr.push('<ol class="carousel-indicators">');
    for (var i = 0; i < data.length; i++) {
        tmpStrArr.push('    <li data-target="#detail_Carousel" data-slide-to="' + i + '" class="' + (i == 0 ? 'active' : '') + '"></li>');
    }

    tmpStrArr.push('</ol>');
    tmpStrArr.push('<div class="carousel-inner">');
    for (var i = 0; i < data.length; i++) {
        tmpSrc = 'image/carousel/' + _itemId + '/' + data[i];
        tmpStrArr.push('    <div class="carousel-item ' + (i == 0 ? 'active' : '') + '">');
        tmpStrArr.push('        <img class="d-block w-100" src="' + tmpSrc + '" alt="">');
        tmpStrArr.push('    </div>');
    }

    tmpStrArr.push('</div>');
    tmpStrArr.push('<a class="carousel-control-prev" href="#detail_Carousel" role="button" data-slide="prev">');
    tmpStrArr.push('    <span class="carousel-control-prev-icon" aria-hidden="true"></span>');
    tmpStrArr.push('    <span class="sr-only">上一个</span>');
    tmpStrArr.push('</a>');
    tmpStrArr.push('<a class="carousel-control-next" href="#detail_Carousel" role="button" data-slide="next">');
    tmpStrArr.push('    <span class="carousel-control-next-icon" aria-hidden="true"></span>');
    tmpStrArr.push('    <span class="sr-only">下一个</span>');
    tmpStrArr.push('</a>');
    $('#detail_Carousel').append($(tmpStrArr.join('')));
};

function buildDetailHTML(data) {
    var tmpSrc = '';
    var tmpStrArr=[];    
    for (var i = 0; i < data.length; i++) {
        tmpSrc = 'image/detail/' + _itemId + '/' + data[i];
        tmpStrArr.push('<div class="row no-margin">');
        tmpStrArr.push('    <div class="col no-padding">');
        tmpStrArr.push('        <img class="d-block w-100" src="' + tmpSrc + '" alt="">');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('</div>');
    }
   
    $('#wrap_Item_Detail').append($(tmpStrArr.join('')));
};