'use strict';

var _gFooterItems = [
    {
        title: '关于',
        items: [
            { text: '关于鹏博教育', href: '#' },
            { text: '关于iKCoder品牌', href: '#' },
            { text: '给孩子的话', href: '#' },
            { text: '给父母的话', href: '#' },
            { text: '致教育工作者', href: '#' },
            { text: '相关新闻', href: '#' },
            { text: '相关政策', href: '#' },
            { text: '投资人', href: '#' },
            { text: '诚聘英才', href: '#' }
        ]
    }, {
        title: '社区',
        items: [
            { text: 'iKCoder社区', href: '#' },
            { text: '统计信息', href: '#' },
            { text: '服务', href: '#' },
            { text: '常见问题', href: '#' },
            { text: '联系我们', href: '#' },
            { text: '授权中心', href: '#' }
        ]
    }, {
        title: '法律',
        items: [
            { text: '使用条款', href: '#' },
            { text: '隐私政策', href: '#' }
        ]
    }, {
        title: 'iKCoder家族',
        items: [
            { text: 'iKCoder 技术论坛', href: '#' },
            { text: 'iKCoder App Studio', href: '#' },
            { text: 'iKCoder App Shop', href: '#' },
            { text: 'iKCoder Student Center', href: '#' },
            { text: '鹏博儿童能量论坛', href: '#' },
            { text: '鹏博夏令营', href: '#' },
            { text: '鹏博社会公益活动组织', href: '#' }
        ]
    }, {
        title: '账户',
        items: [
            { text: '获取账号', href: '#' },
            { text: '重置密码', href: '#' }
        ]
    }
];

function initFooter() {
    BuildFooterHTML();
    initFooterEvent();
}

function BuildFooterHTML() {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<div class="container-fluid">');
    tmpHtmlStrArr.push('    <div class="row justify-content-center alinks-section">');
    for (var i = 0; i < _gFooterItems.length; i++) {
        tmpHtmlStrArr.push('        <div class="col-2">');
        tmpHtmlStrArr.push('            <div class="container-fluid">');
        tmpHtmlStrArr.push('                <div class="row justify-content-center">');
        tmpHtmlStrArr.push('                    <div class="col alink-title">');
        tmpHtmlStrArr.push('                        [' + _gFooterItems[i].title + ']');
        tmpHtmlStrArr.push('                    </div>');
        tmpHtmlStrArr.push('                </div>');
        for (var j = 0; j < _gFooterItems[i].items.length; j++) {
            tmpHtmlStrArr.push('                <div class="row justify-content-center">');
            tmpHtmlStrArr.push('                    <div class="col">');
            tmpHtmlStrArr.push('                        <a href="' + _gFooterItems[i].items[j].href + '">' + _gFooterItems[i].items[j].text + '</a>');
            tmpHtmlStrArr.push('                    </div>');
            tmpHtmlStrArr.push('                </div>');
        }

        tmpHtmlStrArr.push('            </div>');
        tmpHtmlStrArr.push('        </div>');
    }

    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('    <div class="row justify-content-center">');
    tmpHtmlStrArr.push('        <div class="col-10" style="border-bottom: 1px solid #d6d6d6;">');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('    <div class="row justify-content-center">');
    tmpHtmlStrArr.push('        <div class="col-10">');
    tmpHtmlStrArr.push('            <span class="copyright-txt ">Copyright © 2018 iKCoder.Co (ShenZhen) </span>保留所有权利。深圳市鹏博教育科技有限公司。');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('    <div class="row justify-content-center">');
    tmpHtmlStrArr.push('        <div class="col-10">');
    tmpHtmlStrArr.push('            <p class="icp-txt">');
    tmpHtmlStrArr.push('                <span style="color: #ffffff; cursor: default; font-style: italic;">');
    tmpHtmlStrArr.push('                    <a href="http://www.miibeian.gov.cn" target="_blank" style="display:inline-block;">粤ICP备17152880号</a>');
    tmpHtmlStrArr.push('                </span>');
    tmpHtmlStrArr.push('            </p>');
    //tmpHtmlStrArr.push('            <div class="socials">');
    //tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('微信') + '"><i class="fa fa-weixin"></i></a>');
    //tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('新浪微博') + '"><i class="fa fa-weibo"></i></a>');
    //tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('QQ') + '"><i class="fa fa-qq"></i></a>');
    //tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('人人') + '"><i class="fa fa-renren"></i></a>');
    //tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('</div>');
    $('footer').append($(tmpHtmlStrArr.join('')));
}

function initFooterEvent() {
    $("#linkBtn_Foot_About").on('click', function () {
        window.location.href = "aboutus.html?rnd=" + Date.now();
    });

    $("#linkBtn_Foot_OnlineCourse").on('click', function () {
        window.location.href = "index.html?rnd=" + Date.now();
    });
}