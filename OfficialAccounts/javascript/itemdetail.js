'use strict';
var _gData = {
    id: "",
    title: "",
    topImg: "",
    price: {
        value: 0,
        symbol: "￥",
        unit: "元",
        period: "月"
    },
    intro: "",
    carousel: [],
    detail:[]
};

function initPage() {
    //loadDetailData();
    _gData.id = getQueryString('id');
    formatData();
    buildCarouselHTML();
    buildDetailHTML();
};

function formatData() {
    var dataXML = $(LoadXMLFile("data/item_1.xml"));
    var rootEl = $(dataXML.find("root")[0]);
    _gData.title = rootEl.attr("title");
    _gData.topImg = rootEl.attr("topImg");
    _gData.intro = $(dataXML.find("intro")[0]).text();
    var priceEl = $(dataXML.find("price")[0]);
    _gData.price.value = priceEl.attr("value");
    _gData.price.symbol = priceEl.attr("symbol");
    _gData.price.unit = priceEl.attr("unit");
    _gData.price.period = priceEl.attr("period");
    var carouselEls = dataXML.find("detail").find("carousel").find("item");
    for (var i = 0; i < carouselEls.length; i++) {
        _gData.carousel.push($(carouselEls[i]).text());
    }
    var detailEls = dataXML.find("detail").find("detail").find("item");
    for (var i = 0; i < detailEls.length; i++) {
        _gData.detail.push($(detailEls[i]).text());
    }
};

function buildCarouselHTML() {
    var tmpSrc = '';
    var tmpStrArr = [];
    tmpStrArr.push('<ol class="carousel-indicators">');
    for (var i = 0; i < _gData.carousel.length; i++) {
        tmpStrArr.push('    <li data-target="#detail_Carousel" data-slide-to="' + i + '" class="' + (i == 0 ? 'active' : '') + '"></li>');
    }

    tmpStrArr.push('</ol>');
    tmpStrArr.push('<div class="carousel-inner">');
    for (var i = 0; i < _gData.carousel.length; i++) {
        tmpStrArr.push('    <div class="carousel-item ' + (i == 0 ? 'active' : '') + '">');
        tmpStrArr.push('        <img class="img-thumbnail" src="' + _gData.carousel[i] + '" alt="">');
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
    $('.span-item-price-currency').text(_gData.price.symbol);
    $('.span-item-price').text(_gData.price.value);
    $('.span-item-price-unit').text(_gData.price.unit);
    $('.span-item-price-split').text(_gData.price.period != '' ? '/' : '');
    $('.span-item-price-period').text(_gData.price.period);
    $('.col.col-item-title').text(_gData.title);
    $('.col.col-item-datum-name').text(_gData.title);
    $('.col-item-intro').text(_gData.intro);
    $('.col-item-infor').text(_gData.intro);
    $("#item_Top_Image").attr("src", _gData.topImg);
    
    buildDetailImages();
    // var tmpSrc = '';
    // var tmpStrArr = [];
    // for (var i = 0; i < data.length; i++) {
    //     tmpSrc = 'image/detail/' + _itemId + '/' + data[i];
    //     tmpStrArr.push('<div class="row no-margin">');
    //     tmpStrArr.push('    <div class="col no-padding">');
    //     tmpStrArr.push('        <img class="d-block w-100" src="' + tmpSrc + '" alt="">');
    //     tmpStrArr.push('    </div>');
    //     tmpStrArr.push('</div>');
    // }

    // $('#wrap_Item_Detail').append($(tmpStrArr.join('')));
};

function buildDetailImages() {
    var tmpStrArr = [];
    for (var i = 0; i < _gData.detail.length; i++) {
        tmpStrArr.push('<div class="col-12">');
        tmpStrArr.push('    <img class="d-block w-100" src="' +  _gData.detail[i] + '" alt="">');
        tmpStrArr.push('</div>');
    }

    $('.row-item-detail-img').append($(tmpStrArr.join('')));
}