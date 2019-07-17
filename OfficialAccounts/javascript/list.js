'use strict';
var _gData = {
    title: "",
    items: []
};
function initPage() {
    var itemId = getQueryString('id');
    formatData(itemId);
    buildTitleHTML();
    buildItemListHTML();
};

function formatData(itemId) {
    var dataXML = LoadXMLFile("data/list_" + itemId + ".xml");
    _gData.title = $($(dataXML).find("root")[0]).attr("title");
    var tmpItems = $(dataXML).find("item");
    var tmpItem;
    for (var i = 0; i < tmpItems.length; i++) {
        tmpItem = $(tmpItems[i]);
        _gData.items.push({
            id: tmpItem.attr("id"),
            title: tmpItem.attr("title"),
            img: tmpItem.attr("img")
        });
    }
};

function buildTitleHTML() {
    $('.col-title').text(_gData.title);
}

function buildItemListHTML() {
    var tmpStrArr = [];
    for (var i = 0; i < _gData.items.length; i++) {
        tmpStrArr.push('<div class="col-6 col-item-wrap">');
        tmpStrArr.push('    <div class="container-fluid full-wrap item-container" data-symbol="' + _gData.items[i].id + '">');
        tmpStrArr.push('        <div class="row">');
        tmpStrArr.push('            <div class="col">');
        tmpStrArr.push('                <img src="' + _gData.items[i].img + '" alt="..." class="img-thumbnail">');
        tmpStrArr.push('            </div>');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('        <div class="row">');
        tmpStrArr.push('            <div class="col text-center">');
        tmpStrArr.push(_gData.items[i].title);
        tmpStrArr.push('            </div>');
        tmpStrArr.push('        </div>');
        tmpStrArr.push('    </div>');
        tmpStrArr.push('</div>');
    }

    $('.row-items-wrap').append($(tmpStrArr.join('')));
    $('.item-container').on('click', function (eventOgj) {
        var id = $(eventOgj.currentTarget).attr('data-symbol');
        window.location.href = "itemdetail.html?id=" + id;
    })
};