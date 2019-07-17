'use strict';

var _gFooterItems = {
    f_page_1: { page: 'index.html', text: '首页', icon: "fa-home" },
    f_page_2: { page: 'discover.html', text: '发现', icon: "fa-comments" },
    f_page_3: { page: 'account.html', text: '我的', icon: "fa-shopping-cart" }
};

function initFooter() {
    BuildFooterHTML();
    initFooterEvent();
}

function BuildFooterHTML() {
    var tmpStrArr = [];
    tmpStrArr.push('<nav class="navbar navbar-expand-lg navbar-light bg-trans">');
    tmpStrArr.push('    <div class="flex-row-reverse" style="width: 100%;">');
    tmpStrArr.push('        <ul class="navbar-nav text-center">');
    for (var key in _gFooterItems) {
        tmpStrArr.push('            <li class="nav-item">');
        tmpStrArr.push('                <a class="nav-link" id="' + key + '_Main_Menu" href="#">');
        tmpStrArr.push('                    <i class="fas ' + _gFooterItems[key].icon + '"></i>');
        tmpStrArr.push('                    <h6>' + _gFooterItems[key].text + '</h6>');
        tmpStrArr.push('                </a>');
        tmpStrArr.push('            </li>');
    }

    tmpStrArr.push('        </ul>');
    tmpStrArr.push('    </div>');
    tmpStrArr.push('</nav>');
    $('footer').append($(tmpStrArr.join('')));
}

function initFooterEvent() {
    $('footer .nav-link').on('click', function () {
        var currItem = $(arguments[0].currentTarget);
        //setCurrentMenuItem(currItem.attr("id"));
    });
}