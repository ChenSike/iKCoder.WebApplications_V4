'use strict';

var _gCurrentMenuItem = null;
var _gPageMapping = {
    home: { page: 'index.html', text: '首页' },
    product: { page: 'product.html', text: '产品' },
    certificate: { page: 'certificate.html', text: '证书' },
    cooperation: { page: 'cooperation.html', text: '合作' },
    contact: { page: 'contact.html', text: '联系我们' },
    about: { page: 'about.html', text: '关于' },
    center: { page: '/ikcoder/signin.html', text: '学员中心' }
};

function initHeader() {
    buildHeaderHTML();
    initHeaderEvent();
};

function buildHeaderHTML() {
    var tmpStrArr = [];
    tmpStrArr.push('<nav class="navbar navbar-expand-lg navbar-light bg-trans">');
    tmpStrArr.push('    <a class="navbar-brand" href="index.html">');
    tmpStrArr.push('        <img src="image/logo-new-white.png" width="102" height="30" alt="">');
    tmpStrArr.push('    </a>');
    //tmpStrArr.push('    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_Toggler_Header" aria-controls="navbar_Toggler_Header" aria-expanded="false" aria-label="Toggle navigation">');
    //tmpStrArr.push('        <span class="navbar-toggler-icon"></span>');
    //tmpStrArr.push('    </button>');
    tmpStrArr.push('    <div class="flex-row-reverse" id="navbar_Toggler_Header">');
    tmpStrArr.push('        <ul class="navbar-nav mr-0 mt-2 mt-lg-0 text-center" style="min-width:360px;">');
    for (var key in _gPageMapping) {
        tmpStrArr.push('            <li class="nav-item">');
        tmpStrArr.push('                <a class="nav-link" id="' + key + '_Main_Menu" href="#">' + _gPageMapping[key].text + '</a>');
        tmpStrArr.push('            </li>');

    }

    tmpStrArr.push('        </ul>');
    tmpStrArr.push('    </div>');
    tmpStrArr.push('</nav>');

    $('header').append($(tmpStrArr.join('')));
};

function initHeaderEvent() {
    $('header .nav-link').on('click', function () {
        $('header .nav-link').css('font-weight', 'normal');
        var currItem = $(arguments[0].currentTarget);
        window.location.href = _gPageMapping[currItem.attr('id').split('_')[0]].page;
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