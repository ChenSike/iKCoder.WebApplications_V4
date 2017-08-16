'use strict';

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
    _dataForSave = StringToXML(window.localStorage.getItem('qc01_state_storage'));
    Scene.prepareForRun();
};

Scene.getCfgValue = function (node, attr, defVal) {
    var retVal = '';
    if (typeof (node.attr(attr)) == 'string') {
        retVal = node.attr(attr);
        if (typeof (defVal) == 'number') {
            retVal = parseInt(retVal);
        }

    } else {
        retVal = defVal;
    }

    return retVal;
};

Scene.prepareForRun = function (data) {
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

    var symbol = getQueryString('scene').split('_')[0] + '_state_storage';
    if ($(_dataForSave).find('data').find('lib').length <= 0) {
        $(_dataForSave).find('data').append('<lib/>');
        var libNode = $($(_dataForSave).find('data').find('lib')[0]);
        var currSymbol = _currentStage.split('_')[0];
        var libArr = [
            '<item src="javascript/qualitycourse/' + currSymbol + '/main.js"/>',
            '<item src="javascript/qualitycourse/' + currSymbol + '/Materials.js"/>',
            '<item src="javascript/qualitycourse/' + currSymbol + '/objects.js"/>',
            '<item src="javascript/qualitycourse/' + currSymbol + '/share.js"/>'
        ];
        libNode.append(libArr.join(''));
    }

    Scene.buildCompleteHTML(symbol);
};

Scene.buildCompleteHTML = function (symbol) {
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
    tmpHTMLArr.push('                   <form>');
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

    $('#btn_Name_Continue').on('click', function () {
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

                        Scene.buildCompleteHTML_1(qrSymbol, qrSymbolRpt);
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
    });
};

Scene.buildCompleteHTML_1 = function (qrSymbol, qrSymbolRpt) {
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
    tmpHTMLArr.push('                                <p style="color:rgb(255,255,255);">扫一扫，分享我的作品</p>');
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
    tmpHTMLArr.push('                                <p style="color:rgb(255,255,255);">扫一扫，查看学习报告</p>');
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