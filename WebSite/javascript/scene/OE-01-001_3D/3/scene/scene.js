'use strict';

var _dataForSave = '';
_useFullContainer = true;
_forceReset = false;
WorkScene.OutputCodeCallBack = function (code) {
    if (typeof Scene != 'undefined' && Scene) {
        code = code.replace('Scene.settingComplete();', '');
        eval(code);
    }
};

var Scene = {};

Scene.setControl = function (device, eventKey) {
    if (device == 'mouse') {
        device = 'm';
        eventKey = (eventKey == 'left' ? '0' : '2');
    } else {
        device = 'k';
    }

    Engine.setControl(device, eventKey);
};

Scene.init = function () {
    Engine.setOverCallbackFn(function () {
        resetPlayBtn('R');
        //Scene.buildCompleteHTML();
    });
    //_registerRemoteServer();
    //$.ajax({
    //    type: 'POST',
    //    async: true,
    //    url: _getRequestURL(_gURLMapping.tmp.storeload, { symbol: 'qc01_3_' + (_currentStep - 1), type: 'modulesetting' }),
    //    data: '',
    //    success: function (response, status) {
    //        if ($(response).find('err').length > 0) {
    //            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Save_QualityCourse');
    //            return;
    //        }

    //        _dataForSave = response;
    //        Scene.prepareForRun();
    //    },
    //    dataType: 'xml',
    //    xhrFields: {
    //        withCredentials: true
    //    },
    //    error: function () {
    //    }
    //});
    _dataForSave = StringToXML(window.localStorage.getItem(getQueryString('scene') + '_state_storage'));
    Scene.prepareForRun();
};

Scene.getCfgValue = function (node, attr, defVal) {
    var retVal = '';
    if (typeof (node.attr(attr)) == 'string') {
        retVal = node.attr(attr);
        if (typeof (defVal) == 'number') {
            retVal = parseFloat(retVal);
        }

    } else {
        retVal = defVal;
    }

    return retVal;
};

Scene.prepareForRun = function (data) {
    var container = $('#game_container');
    var wrap = $('.siderbar-content');
    container.height(wrap.height() - 20);
    container.width(wrap.width() - 20);

    var rabbitNode = $($(_dataForSave).find('item[module="rabbit"]')[0]);
    var wolfNode = $($(_dataForSave).find('item[module="wolf"]')[0]);
    var carrotNode = $($(_dataForSave).find('item[module="carrot"]')[0]);
    var hedgehogNode = $($(_dataForSave).find('item[module="hedgehog"]')[0]);
    var floor = Scene.getCfgValue($($(_dataForSave).find('item[role="floor"]')[0]), 'module', '');
    floor = (floor == '' ? 'forest' : floor);
    Engine.initScreenAnd3D('game_container', {
        speed: {
            player: { min: 6, max: 48, freq: 3000, step: 2 },
            monster: { pos: 0.59, tpos: 0.65, acceleration: 0.004, pursue: true }
        },
        modules: {
            rabbit: { head: Scene.getCfgValue(rabbitNode, 'head', 1), body: Scene.getCfgValue(rabbitNode, 'body', 1), ear: Scene.getCfgValue(rabbitNode, 'ear', 1), color: Scene.getCfgValue(rabbitNode, 'color', '#b44b39'), role: Scene.getCfgValue(rabbitNode, 'role', 'player') },
            wolf: { head: Scene.getCfgValue(wolfNode, 'head', 1), body: Scene.getCfgValue(wolfNode, 'head', 1), ear: Scene.getCfgValue(wolfNode, 'head', 1), color: Scene.getCfgValue(wolfNode, 'color', '#100707'), role: Scene.getCfgValue(wolfNode, 'role', 'monster') },
            hedgehog: { role: Scene.getCfgValue(hedgehogNode, 'role', 'obstacle') },
            carrot: { role: Scene.getCfgValue(carrotNode, 'role', 'prop') },
            grass: { role: (floor == 'gress' ? 'floor' : '') },
            forest: { role: (floor == 'forest' ? 'floor' : '') },
        }
    });

    Engine.setAudio(Scene.getCfgValue($($(_dataForSave).find('music')[0]), 'path', false));
    $('#game_container canvas').css('background-color', '#dbe6e6');
    Engine.prepareForRun();
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.start = function () {
    Engine.start();
};

Scene.reset = function () {
    TweenMax.killAll();
    Engine.reset();
    Scene.bindModuleToRole();
    Engine.start();
};

Scene.bindModuleToRole = function () {
    if (_dataForSave) {
        var nodes = $(_dataForSave).find('item');
        for (var i = 0; i < nodes.length; i++) {
            Engine.changeRoleModule($(nodes[i]).attr('module'), $(nodes[i]).attr('role'));
        }
    } else {
        for (var key in Engine.params.modules) {
            Engine.changeRoleModule(key, Engine.params.modules[key].role);
        }
    }
};

Scene.resetSize = function () {
    Engine.handleWindowResize();
};

Scene.settingComplete = function () {
    if ($(_dataForSave).find('data').find('event').length > 0) {
        $($(_dataForSave).find('data').find('event')[0]).attr('device', Engine.params.control.device);
        $($(_dataForSave).find('data').find('event')[0]).attr('key', Engine.params.control.key);
    } else {
        $(_dataForSave).find('data').append($('<event device="' + Engine.params.control.device + '" key="' + Engine.params.control.key + '"/>'));
    }

    //if ($(_dataForSave).find('data').find('lib').length <= 0) {
    //    $(_dataForSave).find('data').append('<lib/>');
    //    var libNode = $($(_dataForSave).find('data').find('lib')[0]);
    //    var libArr = [
    //        '<item src="javascript/scene/OE-01-001_3D/main.js"/>',
    //        '<item src="javascript/scene/OE-01-001_3D/Materials.js"/>',
    //        '<item src="javascript/scene/OE-01-001_3D/objects.js"/>',
    //        '<item src="javascript/scene/OE-01-001_3D/share.js"/>'
    //    ];
    //    libNode.append(libArr.join(''));
    //}

    var dataStr = $(_dataForSave)[0].documentElement.outerHTML;
    window.localStorage.setItem(getQueryString('scene') + '_state_storage', dataStr);
    ajaxFn('POST', _getRequestURL(_gURLMapping.demo.setcontent), $.base64.btoa(dataStr), function (response) {
        //<root><executed>true</executed><msgcode>symbol</msgcode><msg>cf534458-17a8-4ce5-9f52-180edb2725fb</msg></root>
        if (_getExcuted(response)) {
            var qrCode = $($(response).find('msg')[0]).text();
            Scene.buildCompleteHTML(qrCode);
        }
    });
    //Scene.buildCompleteHTML(symbol);    
};

Scene.buildCompleteHTML_1 = function (symbol) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('    <div class="wrap-complete-alert" style="display: block; height:auto;">');
    tmpHTMLArr.push('        <div class="container">');
    tmpHTMLArr.push('            <div class="row justify-content-center">');
    tmpHTMLArr.push('                <div class="col-8 text-center" style="padding-top: 60px;padding-bottom: 30px; color:rgb(255,255,2555);">');
    tmpHTMLArr.push('                    <div class="step-complete-title" id="title_StepComplete">请输入你的名字：</div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('            <div class="row justify-content-center">');
    tmpHTMLArr.push('                <div class="col-4 text-center" style="padding-bottom: 40px;">');
    tmpHTMLArr.push('                   <form onsubmit="return false;">');
    tmpHTMLArr.push('                       <div class="form-group">');
    tmpHTMLArr.push('                           <input type="text" class="form-control" id="txt_TempName" placeholder="">');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </form>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('            <div class="row justify-content-center">');
    tmpHTMLArr.push('               <div class="col-2" style="padding-bottom:40px;">');
    tmpHTMLArr.push('                   <div class="step-complete-button text-center" id="btn_Name_Continue"><span class="glyphicon glyphicon-repeat"></span>继续</div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('    </div>');
    $('.wrap-workstatus-alert').empty();
    $('.wrap-workstatus-alert').append($(tmpHTMLArr.join('')));
    $('.wrap-workstatus-alert').show();

    var fnContinue = function fnContinue() {
        _registerRemoteServer();
        var origin = window.location.origin + '/' + window.location.pathname.split('/')[1] + '/';
        $.ajax({
            type: 'POST',
            async: true,
            url: _getRequestURL(_gURLMapping.share.sharesave, {}),
            data: '<root><sencesymbol>' + symbol + '</sencesymbol><config>' + XMLToString(_dataForSave) + '</config><serverpath>' + origin + '</serverpath></root>',
            success: function (response, status) {
                if ($(response).find('err').length > 0) {
                    _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Share_QualityCourse');
                    return;
                }

                var nodes = $(response).find('msg');
                var qrSymbol = '';
                var linkStr = '';
                for (var i = 0; i < nodes.length; i++) {
                    if (typeof $(nodes[i]).attr('qrsymbol') != 'undefined') {
                        qrSymbol = $(nodes[i]).attr('qrsymbol');
                        linkStr = $(nodes[i]).attr('link');
                    }
                }

                $.ajax({
                    type: 'POST',
                    async: true,
                    url: _getRequestURL(_gURLMapping.bus.setexpreport, { tmpname: $('#txt_TempName').val().trim() }),
                    data: '<root></root>',
                    success: function (response, status) {
                        if ($(response).find('err').length > 0) {
                            _showGlobalMessage($(response).find('err').attr('msg'), 'danger', 'alert_Set_ExpReport');
                            return;
                        }

                        var nodes = $(response).find('msg');
                        var qrSymbolRpt = '';
                        for (var i = 0; i < nodes.length; i++) {
                            if (typeof $(nodes[i]).attr('qrsymbol') != 'undefined') {
                                qrSymbolRpt = $(nodes[i]).attr('qrsymbol');
                            }
                        }

                        Scene.buildCompleteHTML_2(qrSymbol, qrSymbolRpt);
                    },
                    dataType: 'xml',
                    xhrFields: {
                        withCredentials: true
                    },
                    error: function () {
                    }
                });
            },
            dataType: 'xml',
            xhrFields: {
                withCredentials: true
            },
            error: function () {
            }
        });
    }

    $('#btn_Name_Continue').on('click', fnContinue);
    $('#btn_Name_Continue').on('keypress', fnContinue);
    $('#txt_TempName').on('keypress', function () {
        if (arguments[0].keyCode == 13) {
            fnContinue();
        }
    });
};

Scene.buildCompleteHTML_2 = function (qrSymbol, qrSymbolRpt) {
    var qrSrc = _getRequestURL(_gURLMapping.data.getimage, { operation: 'AllowedOperation', symbol: qrSymbol });
    var qrSrcRpt = _getRequestURL(_gURLMapping.data.getimage, { operation: 'AllowedOperation', symbol: qrSymbolRpt });
    var tmpHTMLArr = [];
    //tmpHTMLArr.push('<div class="wrap-workstatus-alert" style="display: block;">');
    tmpHTMLArr.push('    <div class="wrap-complete-alert" style="display: block; height:auto;">');
    tmpHTMLArr.push('        <div class="container">');
    tmpHTMLArr.push('            <div class="row justify-content-center">');
    tmpHTMLArr.push('                <div class="col-8 text-center" style="padding-top: 60px;padding-bottom: 30px; color:rgb(255,255,2555);">');
    tmpHTMLArr.push('                    <div class="step-complete-title" id="title_StepComplete">祝贺你！已经成功完成了体验课，接下来你可以：</div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('            <div class="row justify-content-center">');
    tmpHTMLArr.push('                <div class="col-5 text-center">');
    tmpHTMLArr.push('                    <div class="container-fluid">');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12">');
    tmpHTMLArr.push('                                <p style="color:rgb(255,255,255);">注册账户，学习更多课程</p>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12" style="padding:40px;">');
    tmpHTMLArr.push('                                <form class="form-inline">');
    tmpHTMLArr.push('                                    <div class="input-group">');
    tmpHTMLArr.push('                                        <input type="text" class="form-control rounded-right" id="txt_QC_FreeSignUp" placeholder="手机号码">');
    tmpHTMLArr.push('                                        <div class="input-group-addon btn btn-outline-primary" id="btn_QC_FreeSignUp" style="background-color:#0275d8;color:rgb(255,255,255);cursor: pointer;">免费注册</div>');
    tmpHTMLArr.push('                                    </div>');
    tmpHTMLArr.push('                                </form>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-5 offset-1">');
    tmpHTMLArr.push('                                <div class="step-complete-button text-center" id="btn_QC_GoHome"><span class="glyphicon glyphicon-repeat"></span>返回首页</div>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                            <div class="col-5" style="padding-bottom:40px;">');
    tmpHTMLArr.push('                                <div class="step-complete-button text-center" id="btn_QC_Restart"><span class="glyphicon glyphicon-repeat"></span>重新开始</div>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="col-1 text-center">');
    tmpHTMLArr.push('                    <div style="border-right: solid 1px rgb(255,255,255); height: 80px; top: calc(50% - 40px); position:relative;">');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="col-3 text-center">');
    tmpHTMLArr.push('                    <div class="container-fluid">');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12">');
    //tmpHTMLArr.push('                                <div class="step-complete-button text-center" id="btn_ShareWork">分享我的作品</div>');
    tmpHTMLArr.push('                                <p style="color:rgb(255,255,255);"><a href="#">分享我的作品</a></p>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12" style="padding-bottom: 30px;">');
    tmpHTMLArr.push('                                <img id="img_Share_QR" src="' + qrSrc + '" style="width:160px" />');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="col-3 text-center">');
    tmpHTMLArr.push('                    <div class="container-fluid">');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12">');
    //tmpHTMLArr.push('                                <div class="step-complete-button text-center" id="btn_ViewReport">查看学习报告</div>');
    tmpHTMLArr.push('                                <p style="color:rgb(255,255,255);"><a href="#">查看学习报告</a></p>');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                        <div class="row">');
    tmpHTMLArr.push('                            <div class="col-12" style="padding-bottom: 30px;">');
    tmpHTMLArr.push('                                <img id="img_Share_QR" src="' + qrSrcRpt + '" style="width:160px" />');
    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    //tmpHTMLArr.push('</div>');
    $('.wrap-workstatus-alert').empty();
    $('.wrap-workstatus-alert').append($(tmpHTMLArr.join('')));
    $('.wrap-workstatus-alert').show(1000, function () {
        window.setTimeout(' removeRptQR("' + qrSymbolRpt + '")', 1000);
    });

    $('#btn_QC_FreeSignUp').on('click', function () {
        window.localStorage.removeItem('qc01_state_storage');
        window.location.href = 'signin.html?opt=signup&number=' + $('#txt_QC_FreeSignUp').val().trim();
    });

    $('#btn_QC_GoHome').on('click', function () {
        window.localStorage.removeItem('qc01_state_storage');
        window.location.href = "index.html?qid=" + _gCID;
    });

    $('#btn_QC_Restart').on('click', function () {
        window.localStorage.removeItem('qc01_state_storage');
        window.location.href = "OnlineExperience.html?qid=" + _gCID;
    });
};

Scene.buildCompleteHTML_3 = function (qrCode) {
    $('#complete_modal_mask').remove();
    //if ($('#complete_modal_mask').length <= 0) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<style>');
    tmpHTMLArr.push('.modal-mask {');
    tmpHTMLArr.push('    height: 100%;');
    tmpHTMLArr.push('    width: 100%;');
    tmpHTMLArr.push('    position: absolute;');
    tmpHTMLArr.push('    top: 0px;');
    tmpHTMLArr.push('    left: 0px;');
    tmpHTMLArr.push('    background-color: rgba(0,0,0,0.5);');
    tmpHTMLArr.push('    z-index: 9999;');
    tmpHTMLArr.push('    display: none;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('.modal-mask .modal-wrap {');
    tmpHTMLArr.push('    width: 500px;');
    tmpHTMLArr.push('    height: 300px;');
    tmpHTMLArr.push('    background-color: rgba(255,255,255, 0.7);');
    tmpHTMLArr.push('    border-radius: 10px;');
    tmpHTMLArr.push('    position: relative;');
    tmpHTMLArr.push('    top: calc(50% - 200px);');
    tmpHTMLArr.push('    left: calc(50% - 250px);');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('.modal-mask .modal-wrap table {');
    tmpHTMLArr.push('    width: 100%;');
    tmpHTMLArr.push('    height: 100%;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('.modal-mask .modal-wrap table .row-qr-code td {');
    tmpHTMLArr.push('    padding: 0px 25px;');
    tmpHTMLArr.push('    padding-top: 20px;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('.text-center {');
    tmpHTMLArr.push('text-align: center;');
    tmpHTMLArr.push('    font-family: 微软雅黑;');
    tmpHTMLArr.push('    font-size: 14px;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('#btn_breakContinue {');
    tmpHTMLArr.push('    width: 140px;');
    tmpHTMLArr.push('    height: 30px;');
    tmpHTMLArr.push('    border-radius: 15px;');
    tmpHTMLArr.push('    border: none;');
    tmpHTMLArr.push('    cursor: pointer;');
    tmpHTMLArr.push('    font-family: 微软雅黑;');
    tmpHTMLArr.push('    font-size: 16px;');
    tmpHTMLArr.push('    background-color: #2ea7e0;');
    tmpHTMLArr.push('    color: white;');
    tmpHTMLArr.push('    margin-bottom: 15px;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('    #btn_breakContinue:hover {');
    tmpHTMLArr.push('    background-color: gray;');
    tmpHTMLArr.push('}');
    tmpHTMLArr.push('</style>');
    tmpHTMLArr.push('<div id="complete_modal_mask" class="modal-mask" style="display: block;">');
    tmpHTMLArr.push('    <div class="modal-wrap">');
    tmpHTMLArr.push('        <table>');
    tmpHTMLArr.push('            <tbody><tr class="row-qr-code">');
    tmpHTMLArr.push('                <td>');
    tmpHTMLArr.push('                   ');
    tmpHTMLArr.push('                </td>');
    tmpHTMLArr.push('                <td>');
    tmpHTMLArr.push('                    <img src="image/sign.png" width="200">');
    tmpHTMLArr.push('                </td>');
    tmpHTMLArr.push('            </tr>');
    tmpHTMLArr.push('            <tr class="text-center">');
    tmpHTMLArr.push('                <td>');
    tmpHTMLArr.push('                    <a href="' + window.location.origin + '/ikcoder/demo_raw.html?symbol=' + qrCode + '" target="_blank">分享我的作品</a>');
    tmpHTMLArr.push('                </td>');
    tmpHTMLArr.push('                <td>');
    tmpHTMLArr.push('                    <a href="http://www.ikcoder.com/ikcoder/sign.html"> 注册成为iKCoder会员</a>');
    tmpHTMLArr.push('                </td>');
    tmpHTMLArr.push('            </tr>');
    tmpHTMLArr.push('            <tr class="text-center">');
    tmpHTMLArr.push('                <td colspan="2">');
    tmpHTMLArr.push('                    <button id="btn_breakContinue" type="button">继续</button>');
    tmpHTMLArr.push('                </td>');
    tmpHTMLArr.push('            </tr>');
    tmpHTMLArr.push('        </tbody></table>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('body').append($(tmpHTMLArr.join('')));
    $('#btn_breakContinue').on('click', function () {
        $('#complete_modal_mask').hide();
    });
    //}

    $('#complete_modal_mask').show('slow');
};

Scene.buildCompleteHTML = function (qrCode) {
    $('.wrap-workstatus-alert').remove();
    var tmppHTMLStr = [];
    tmppHTMLStr.push('<div class="wrap-workstatus-alert">');
    tmppHTMLStr.push('    <div class="wrap-alert-content completed">');
    tmppHTMLStr.push('        <div class="completed-close-btn"><i class="far fa-times-circle"></i></div>');
    tmppHTMLStr.push('        <div class="container">');
    tmppHTMLStr.push('            <div class="row justify-content-center">');
    tmppHTMLStr.push('                <div class="col-8 text-center container-status-title">');
    tmppHTMLStr.push('                    <i class="fas fa-trophy fa-3x"></i>');
    tmppHTMLStr.push('                    <div class="step-status-title" style="margin-top:20px;">恭喜您, 已经顺利完成了本次体验课, 接下来您可以: </div>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('            </div>');
    tmppHTMLStr.push('            <div class="row justify-content-center my-3">');
    tmppHTMLStr.push('                <div class="col text-center" style="height:35px;">');
    tmppHTMLStr.push('                    <div class="step-status-button experience restart">');
    tmppHTMLStr.push('                      <i class="fas fa-undo-alt"></i><span style="margin-left:5px;">重新开始体验课</span>');
    tmppHTMLStr.push('                    </div>');
    tmppHTMLStr.push('                    <div class="step-status-button experience sign-up">');
    tmppHTMLStr.push('                      <i class="fas fa-times"></i><span style="margin-left:5px;">注册成为学员, 开始免费课程</span>');
    tmppHTMLStr.push('                    </div>');
    tmppHTMLStr.push('                    <div class="step-status-button experience share-work" tabindex="0" data-placement="top" hidefocus="true">');
    tmppHTMLStr.push('                      <i class="far fa-hand-point-right"></i><span style="margin-left:5px;">分享刚才完成的作品</span>');
    tmppHTMLStr.push('                    </div>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('            </div>');
    tmppHTMLStr.push('            <div class="row">');
    tmppHTMLStr.push('                <div class="col text-center step-evaluate-wrap">');
    tmppHTMLStr.push('        <div class="container">');
    tmppHTMLStr.push('            <div class="row">');
    tmppHTMLStr.push('                <div class="col-2 offset-4" style="min-width: 170px !important;">');
    tmppHTMLStr.push('                    <span>喜欢本次体验课吗? </span>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('                <div class="col-1">');
    tmppHTMLStr.push('                    <a href="#" class="step-evaluate-button yes"><span class="far fa-thumbs-up" data-target="1" title="喜欢"></span></a>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('                <div class="col-1">');
    tmppHTMLStr.push('                    <a href="#" class="step-evaluate-button no"><span class="far fa-thumbs-down" data-target="0" title="不喜欢"></span></a>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('            </div>');
    tmppHTMLStr.push('        </div>');
    tmppHTMLStr.push('                </div>');
    tmppHTMLStr.push('            </div>');
    tmppHTMLStr.push('        </div>');
    tmppHTMLStr.push('    </div>');
    tmppHTMLStr.push('</div>');
    $('body').append($(tmppHTMLStr.join('')));
    $('.step-status-button.share-work').tooltip({
        html: true,
        title: ' <img src="' + _getRequestURL(_gURLMapping.demo.getqrcode, { Symbol: qrCode }) + '" width="200">'
    });

    $('.step-status-button.restart').on('click', function () {
        window.location.href = window.location.origin + "/ikcoder/workplatform.html?scene=OE_001&step=0";
    });

    $('.step-status-button.sign-up').on('click', function () {
        window.location.href = window.location.origin + "/ikcoder/sign.html";
    });

    $('.step-evaluate-button').on('click', function () {
        var currBtn = $(arguments[0].target);
        currBtn.css('color', 'rgb(255,255,255)');
        $(currBtn.find('path')).css('color', 'rgb(255,255,255)');
        if (currBtn.hasClass('yes') || currBtn.parent().hasClass('yes')) {
            $('.step-evaluate-button.no').css('color', '#aaaaaa');
            $('.step-evaluate-button.no svg').css('color', '#aaaaaa');
            $('.step-evaluate-button.no svg path').css('color', '#aaaaaa');
        } else {
            $('.step-evaluate-button.yes').css('color', '#aaaaaa');
            $('.step-evaluate-button.yes svg').css('color', '#aaaaaa');
            $('.step-evaluate-button.yes svg path').css('color', '#aaaaaa');
        }
    });

    $('.completed-close-btn').on('click', function () {
        $('.wrap-workstatus-alert').hide('slow');
    });
        
    $('.wrap-workstatus-alert').show();
    $('.wrap-alert-content.completed').show();
};

function removeRptQR(qrSymbolRpt) {
    $.ajax({
        type: 'POST',
        async: true,
        url: _getRequestURL(_gURLMapping.data.setremovebindata, { symbol: qrSymbolRpt }),
        data: '<root></root>',
        success: function (response, status) {
        },
        dataType: 'xml',
        xhrFields: {
            withCredentials: true
        },
        error: function () {
        }
    });
};