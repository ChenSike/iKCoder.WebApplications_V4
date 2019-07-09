'use strict';

var _gCurrentMenuItem = null;
var _gPageMapping = {
    page_1: { page: 'index.html', text: '精选' },
    page_2: { page: 'product.html', text: '团购' },
    page_3: { page: 'certificate.html', text: '特惠' },
    page_4: { page: 'cooperation.html', text: '活动' }
};

function initHeader() {
    buildHeaderHTML();
    initHeaderEvent();
};

function buildHeaderHTML() {
    var tmpStrArr = [];
    tmpStrArr.push('<nav class="navbar navbar-expand-lg navbar-light bg-trans">');
    tmpStrArr.push('    <div class="flex-row-reverse" id="navbar_Toggler_Header">');
    tmpStrArr.push('        <ul class="navbar-nav text-center">');
    for (var key in _gPageMapping) {
        tmpStrArr.push('            <li class="nav-item topmenu-item">');
        tmpStrArr.push('                <a class="nav-link" id="' + key + '_Main_Menu" href="#">' + _gPageMapping[key].text + '</a>');
        tmpStrArr.push('                <div class="selected-symbol"></div>');
        tmpStrArr.push('            </li>');
    }

    tmpStrArr.push('        </ul>');
    tmpStrArr.push('    </div>');
    tmpStrArr.push('</nav>');

    $('header').append($(tmpStrArr.join('')));
};

function initHeaderEvent() {
    $('header .nav-link').on('click', function () {
        var currItem = $(arguments[0].currentTarget);
        setCurrentMenuItem(currItem.attr("id"));
    });
};

function setCurrentMenuItem(id) {
    $(".topmenu-item").removeClass("active");
    $("#" + id).parent().addClass("active");
};