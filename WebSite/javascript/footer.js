'use strict';

function BuildFooterHTML() {
    var tmpHtmlStrArr = [];
    //tmpHtmlStrArr.push('    <div class="footer-txt" style="background-color: rgb(45,45,45);">');
    //tmpHtmlStrArr.push('        <div class="container w-100">');
    //tmpHtmlStrArr.push('            <div class="row  justify-content-center">');
    //tmpHtmlStrArr.push('                <div class="col-10">');
    //tmpHtmlStrArr.push('                    <p class="footer-hypelink">');
    //tmpHtmlStrArr.push('                        <a href="#" id="linkBtn_Foot_About">' + _getLabel('关于艾酷') + '</a>');
    //tmpHtmlStrArr.push('                        <a href="#" id="linkBtn_Foot_OnlineCourse" style="padding-left:20px;">' + _getLabel('线上体验课') + '</a>');
    //tmpHtmlStrArr.push('                    </p>');
    //tmpHtmlStrArr.push('                </div>');
    //tmpHtmlStrArr.push('            </div>');
    //tmpHtmlStrArr.push('        </div>');
    //tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('    <div class="footer-txt" style="background-color: rgb(23,23,23);">');
    tmpHtmlStrArr.push('        <div class="container w-100">');
    tmpHtmlStrArr.push('            <div class="row justify-content-center">');
    tmpHtmlStrArr.push('                <div class="col-11">');
    tmpHtmlStrArr.push('                    <p class="copyright-txt">');
    tmpHtmlStrArr.push('                        <span style="font-weight:bold">');
    tmpHtmlStrArr.push('                           深圳市鹏博教育科技有限公司');
    tmpHtmlStrArr.push('                        </span>');
    tmpHtmlStrArr.push('                        |                     Powered by');
    tmpHtmlStrArr.push('                        <span style="font-weight:bold">');
    tmpHtmlStrArr.push('                        iKCoder.Co (ShenZhen)');
    tmpHtmlStrArr.push('                        </span>');
    tmpHtmlStrArr.push('                        <span style="color: #f39700; cursor: default; font-style: italic; font-weight: bold; padding-left:10px;">');
    tmpHtmlStrArr.push('                        Demo Version');
    tmpHtmlStrArr.push('                        </span>');
    tmpHtmlStrArr.push('                        <span style="color: #ffffff; cursor: default; italic; font-weight: bold; padding-left:10px;">');
    tmpHtmlStrArr.push('                            <a href="http://www.miibeian.gov.cn" target="_blank" style="display:inline-block;">粤ICP备17152880号</a>');
    tmpHtmlStrArr.push('                        </span>');
    tmpHtmlStrArr.push('                    </p>');
    if (navigator.userAgent.toLowerCase().indexOf("ipad") < 0) {
        tmpHtmlStrArr.push('                    <div class="socials">');
        tmpHtmlStrArr.push('                        <a href="#" title="' + _getLabel('微信') + '"><i class="fa fa-weixin"></i></a>');
        tmpHtmlStrArr.push('                        <a href="#" title="' + _getLabel('新浪微博') + '"><i class="fa fa-weibo"></i></a>');
        tmpHtmlStrArr.push('                        <a href="#" title="' + _getLabel('QQ') + '"><i class="fa fa-qq"></i></a>');
        tmpHtmlStrArr.push('                        <a href="#" title="' + _getLabel('人人') + '"><i class="fa fa-renren"></i></a>');
        tmpHtmlStrArr.push('                    </div>');
    }
    tmpHtmlStrArr.push('                </div>');
    tmpHtmlStrArr.push('            </div>');
    tmpHtmlStrArr.push('        </div>');
    tmpHtmlStrArr.push('    </div>');
    tmpHtmlStrArr.push('    <a href="#" class="scrollup" title="Back to Top!"><i class="fa fa-arrow-circle-up fa-lg"></i></a>');
    $('footer').append($(tmpHtmlStrArr.join('')));
}

function initFooter() {
    BuildFooterHTML();
    initFooterEvent();
}

function initFooterEvent() {
    $("#linkBtn_Foot_About").on('click', function () {
        window.location.href = "aboutus.html?rnd=" + Date.now();
    });

    $("#linkBtn_Foot_OnlineCourse").on('click', function () {
        window.location.href = "index.html?rnd=" + Date.now();
    });
}