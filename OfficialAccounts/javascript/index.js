'use strict';
var _gData = {
    carousel: [],
    items: []
};
function initPage() {
    formatData();
    buildCarouselHTML();
    buildItemListHTML();
};

function formatData() {
    var dataXML = LoadXMLFile("data/index.xml");
    var tmpItems = $(dataXML).find("items").find("item");
    var tmpItem;
    for (var i = 0; i < tmpItems.length; i++) {
        tmpItem = $(tmpItems[i]);
        _gData.items.push({
            id: tmpItem.attr("id"),
            title: tmpItem.attr("title"),
            img: tmpItem.attr("img")
        });
    }

    tmpItems = $(dataXML).find("carousel").find("item");
    for (var i = 0; i < tmpItems.length; i++) {
        tmpItem = $(tmpItems[i]);
        _gData.carousel.push($(tmpItems[i]).text());
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

function buildItemListHTML() {
    var tmpStrArr = [];
    tmpStrArr.push('<div class="container-fluid full-wrap">');
    for (var i = 0; i < _gData.items.length; i++) {
        tmpStrArr.push('    <div class="row row-item-title">');
        tmpStrArr.push('        <div class="col-6 offset-3 col-item-title text-center">');
        tmpStrArr.push(_gData.items[i].title);
        tmpStrArr.push('        </div>');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('    <div class="row row-item-image">');
        tmpStrArr.push('        <div class="col-1"></div>');
        tmpStrArr.push('        <div class="col col-item-image" data-symbol="' + _gData.items[i].id + '">');
        tmpStrArr.push('            <img src="' + _gData.items[i].img + '" alt="..." class="img-thumbnail w-100">');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('        <div class="col-1"></div>');
        tmpStrArr.push('    </div>');
    }

    tmpStrArr.push('</div>');
    $('.col-items-wrap').append($(tmpStrArr.join('')));
    $('.col-item-image').on('click', function (eventOgj) {
        var id = $(eventOgj.currentTarget).attr('data-symbol');
        window.location.href = "list.html?id=" + id;
    })
};