'use strict';

var _gSections = [
    { id: 1, title: '盆栽项目-1', detail: "盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 2, title: '盆栽项目-2', detail: "盆栽项目简介—2，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 3, title: '盆栽项目-3', detail: "盆栽项目简介—3，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 4, title: '盆栽项目-4', detail: "盆栽项目简介—4，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 5, title: '盆栽项目-5', detail: "盆栽项目简介—5，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 6, title: '盆栽项目-6', detail: "盆栽项目简介—6，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
    { id: 7, title: '盆栽项目-7', detail: "盆栽项目简介—7，盆栽项目简介—1，盆栽项目简介—1，盆栽项目简介—1，" },
];

var _gImages = [];

function initPage() {
    buildItemListHTML();
};

function buildItemListHTML() {
    var items = _gSections[0];
    var tmpStrArr = [];
    for (var i = 0; i < _gSections.length; i++) {
        tmpStrArr.push('<div class="row full-wrap">');
        tmpStrArr.push('    <div class="col-12 full-wrap wrap-col-item" data-id="' + _gSections[i].id + '">');
        tmpStrArr.push('        <div class="container wrap-item">');
        tmpStrArr.push('            <div class="row">');
        tmpStrArr.push('                <div class="col-4 item-image-col">');
        tmpStrArr.push('                    <img src="image/items/' + _gSections[i].id + '.jpg" alt="..." class="img-thumbnail">');
        tmpStrArr.push('                </div>');
        tmpStrArr.push('                <div class="col item-content-col">');
        tmpStrArr.push('                    <div class="container">');
        tmpStrArr.push('                        <div class="row">');
        tmpStrArr.push('                            <div class="col item-title-col">');
        tmpStrArr.push(_gSections[i].title);
        tmpStrArr.push('                            </div>');
        tmpStrArr.push('                        </div>');
        tmpStrArr.push('                        <div class="row">');
        tmpStrArr.push('                            <div class="col">');
        tmpStrArr.push(_gSections[i].detail);
        tmpStrArr.push('                            </div>');
        tmpStrArr.push('                        </div>');
        tmpStrArr.push('                    </div>');
        tmpStrArr.push('                </div>');
        tmpStrArr.push('            </div>');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('</div>');
    }

    $('#wrap_Main').append($(tmpStrArr.join('')));
    $('.wrap-col-item').on('click', function (eventObj) {
        window.location.href = "itemdetail.html?itemid=" + $(eventObj.currentTarget).attr('data-id');
    });
};