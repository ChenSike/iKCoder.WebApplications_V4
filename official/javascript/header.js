'use strict';

var _gCurrentMenuItem = null;
var _gPageMapping = {
    home: 'index.html',
    product: 'index.html',
    certificate: 'index.html',
    cooperation: 'index.html',
    contact: 'index.html',
    about: 'index.html',
    center: 'index.html'
};

function initHeader() {
    buildHeaderHTML();
    initHeaderEvent();
};

function buildHeaderHTML() {
    var tmpStrArr = [];
    tmpStrArr.push('<nav class="navbar navbar-expand-lg navbar-light bg-faded">');
    tmpStrArr.push('    <a class="navbar-brand" href="#">');
    tmpStrArr.push('        <img src="image/logo-new-gray.png" width="102" height="30" alt="">');
    tmpStrArr.push('    </a>');
    tmpStrArr.push('    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_Toggler_Header" aria-controls="navbar_Toggler_Header" aria-expanded="false" aria-label="Toggle navigation">');
    tmpStrArr.push('        <span class="navbar-toggler-icon"></span>');
    tmpStrArr.push('    </button>');
    tmpStrArr.push('    <div class="collapse navbar-collapse" id="navbar_Toggler_Header">');
    tmpStrArr.push('        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="home_Main_Menu" href="#">首页</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="product_Main_Menu" href="#">产品</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="certificate_Main_Menu" href="#">证书</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="cooperation_Main_Menu" href="#">合作</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="contact_Main_Menu" href="#">联系我们</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="about_Main_Menu" href="#">关于</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('            <li class="nav-item">');
    tmpStrArr.push('                <a class="nav-link" id="center_Main_Menu" href="#">学员中心</a>');
    tmpStrArr.push('            </li>');
    tmpStrArr.push('        </ul>');
    tmpStrArr.push('    </div>');
    tmpStrArr.push('</nav>');

    $('header').append($(tmpStrArr.join('')));
};

function initHeaderEvent() {
    $('header .nav-link').on('click', function () {
        $('header .nav-link').css('font-weight', 'normal');
        var currItem = $(arguments[0].currentTarget);
        window.location.href = _gPageMapping[currItem.attr('id').split('_')[0]];
    });

    $('header .nav-link').on('mouseenter', function () {
        $(arguments[0].currentTarget).css('font-weight', 'bold');
    });

    $('header .nav-link').on('mouseleave ', function () {
        if (_gCurrentMenuItem.attr('id') != $(arguments[0].currentTarget).attr('id')) {
            $(arguments[0].currentTarget).css('font-weight', 'normal');
        }
    });
};

function setCurrentMenuItem(id) {
    _gCurrentMenuItem = $("#" + id);
    _gCurrentMenuItem.css('font-weight', 'bold');
};