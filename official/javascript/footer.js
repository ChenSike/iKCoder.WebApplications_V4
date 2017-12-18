'use strict';

function initFooter() {
    BuildFooterHTML();
    initFooterEvent();
}

function BuildFooterHTML() {
    var tmpHtmlStrArr = [];
    tmpHtmlStrArr.push('<div class="container-fluid">');
    tmpHtmlStrArr.push('    <div class="row justify-content-center">');
    tmpHtmlStrArr.push('        <div class="col">');
    tmpHtmlStrArr.push('            <p class="copyright-txt">');
    tmpHtmlStrArr.push('                <span style="font-weight:bold;padding-right:5px; border-right: solid 1px;">深圳市鹏博教育科技有限公司</span>');
    tmpHtmlStrArr.push('                <span style="font-weight:normal;">Powered by</span>');
    tmpHtmlStrArr.push('                <span style="font-weight:bold;">iKCoder.Co (ShenZhen)</span>');
    tmpHtmlStrArr.push('                <span style="color: #ffffff; cursor: default; italic; padding-left:10px;">');
    tmpHtmlStrArr.push('                    <a href="http://www.miibeian.gov.cn" target="_blank" style="display:inline-block;">粤ICP备17152880号</a>');
    tmpHtmlStrArr.push('                </span>');
    tmpHtmlStrArr.push('            </p>');
    tmpHtmlStrArr.push('            <div class="socials">');
    tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('微信') + '"><i class="fa fa-weixin"></i></a>');
    tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('新浪微博') + '"><i class="fa fa-weibo"></i></a>');
    tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('QQ') + '"><i class="fa fa-qq"></i></a>');
    tmpHtmlStrArr.push('                <a href="#" title="' + _getLabel('人人') + '"><i class="fa fa-renren"></i></a>');
    tmpHtmlStrArr.push('            </div>');
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