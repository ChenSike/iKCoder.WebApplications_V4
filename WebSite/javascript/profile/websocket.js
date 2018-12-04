'use strict';

var _gCurrentAction = '';

function webSocketCreate() {
    if (!_gSocket || _gSocket.readyState != 1) {
        _gSocket = new WebSocket("WS://www.ikcoder.com/corebasic?student_token=" + _CookieUtils.get('student_token'));
        //建立websocket连接成功
        _gSocket.onopen = function () {

        };

        //接收服务端数据时
        _gSocket.onmessage = function (evt) {
            webSocketReceiveCircle(evt);
        };

        //断开websocket连接成功
        _gSocket.onclose = function () {
            _showGlobalMessage('链接已关闭，请重新登录!', 'warning', 'alert_WSClose_Error');
        };

        _gSocket.onerror = function () {
            _showGlobalMessage('服务异常，请联系客服!', 'warning', 'alert_WSError_Error');
        };
    }
};

function webSocketSend(act, paramsObj) {
    _gCurrentAction = (act == 'Action_Get_BatchArrProfile' ? _gCurrentAction : act);
    var symbol = (typeof paramsObj.symbol == 'string' ? paramsObj.symbol : '');
    var msg = (typeof paramsObj.msg == 'string' ? paramsObj.msg : '');
    var value = '';
    for (var key in paramsObj.values) {
        value += '<' + key + '>' + paramsObj.values[key] + '</' + key + '>';
    }

    var targets = ($.isArray(paramsObj.targets) ? paramsObj.targets : []);
    var batch = ($.isArray(paramsObj.batch) ? paramsObj.batch : []);
    var id = (typeof paramsObj.id == 'string' ? paramsObj.id : '');
    var tmpMsg = [];
    tmpMsg.push('<root>');
    tmpMsg.push('<from>');
    tmpMsg.push(_CookieUtils.get('student_token'));
    tmpMsg.push('</from>');
    tmpMsg.push('<symbol>');
    tmpMsg.push(symbol);
    tmpMsg.push('</symbol>');
    tmpMsg.push('<id>');
    tmpMsg.push(id);
    tmpMsg.push('</id>');
    tmpMsg.push('<action>');
    tmpMsg.push(act);
    tmpMsg.push('</action>');
    tmpMsg.push(value);
    if (targets.length > 0) {
        tmpMsg.push('<target>');
        for (var i = 0; i < targets.length; i++) {
            tmpMsg.push('<item>');
            tmpMsg.push(targets[i]);
            tmpMsg.push('</item>');
        }

        tmpMsg.push('</target>');
    }

    if (msg != '') {
        tmpMsg.push('<message>');
        tmpMsg.push(msg);
        tmpMsg.push('</message>');
    }

    tmpMsg.push('<params>');
    if (batch.length > 0) {
        for (var i = 0; i < batch.length; i++) {
            tmpMsg.push('<item>');
            tmpMsg.push(batch[i]);
            tmpMsg.push('</item>');
        }
    }

    tmpMsg.push('</params>');
    tmpMsg.push('</root>');
    tmpMsg = tmpMsg.join('');
    if (_gSocket.readyState == 1) {
        _gSocket.send(tmpMsg);
    } else if (_gSocket.readyState == 2) {
        //window.setTimeout("webSocketSend(" + act + ',' + msg + ',' + targets + ")", 1000);
    } else {
        webSocketCreate();
        _gSocket.onopen = function () {
            webSocketSend(act, paramsObj);
        };
    }
};

function webSocketClose() {
    _gSocket.close();
};

function webSocketReceiveCircle(evt) {
    var retDoc, action, valDoc, passive;
    var addressItem = $('.btn-circle-stb-item[data-target="address"]');
    var addressAlert = $('.btn-circle-stb-item[data-target="address"] .alert-circle-stb-item');
    try {
        retDoc = $(evt.data);
        action = $(retDoc.find('faction')[0]).text();
        valDoc = $(retDoc.find('root')[0]);
        passive = valDoc.attr('type') == 'passive' ? true : false;
    } catch (ex) {
        retDoc = null;
        action = 'Action_Receive_Msg_Direct';
        try {
            valDoc = $($.base64.atob(evt.data));
        } catch (ex) {
            valDoc = $('<root><chat>' + _gCircleCurrentChat.chatId + '</chat><sender>' + _gCircleCurrentChat.chatterId + '</sender><msg>消息已损坏，无法加载("' + $(items[i]).text() + '")</msg></root>');
        }
    }

    switch (action) {
        case 'Action_Get_DialogList':
            circleInitData_Chats(valDoc);
            break;
        case 'Action_Set_NewDialog':
            webSocketSend('Action_Get_DialogList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
            break;
        case 'Action_Get_RelationsList':
            if (passive) {
                webSocketSend('Action_Get_RelationsList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
            } else {
                webSocketSend('Action_Get_BatchArrProfile', { symbol: '', msg: '', targets: [], values: {}, batch: getUnknowUserForRelationsList(valDoc), id: '' });
            }

            break;
        case 'Action_Get_RelationsAcceptableList':
            if (passive) {
                webSocketSend('Action_Get_RelationsAcceptableList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
                var newFriendAlert = $('.row-circle-user-list-item[data-target="-2"] .circle-user-list-item-msg')
                var tmpCount = addressAlert.text() == '' ? 0 : parseInt(addressAlert.text());
                addressAlert.text(tmpCount + 1).show();
                if (addressItem.hasClass('active')) {
                    tmpCount = newFriendAlert.text() == '' ? 0 : parseInt(newFriendAlert.text());
                    newFriendAlert.text(tmpCount + 1).show();
                }
            } else {
                if ($('.row-circle-user-list-item[data-target="-2"]').hasClass('active')) {
                    var tmpArr = getUnknowUserForAcceptableList(valDoc);
                    if (tmpArr.length > 0) {
                        webSocketSend('Action_Get_BatchArrProfile', { symbol: '', msg: '', targets: [], values: {}, batch: tmpArr, id: '' });
                    } else {
                        circleAddress_BuildGuestList();
                    }
                }
            }

            break;
        case 'Action_Get_ChannelList':
            if (passive) {
                webSocketSend('Action_Get_ChannelList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
                var channelAlert = $('.row-circle-user-list-item[data-target="-3"] .circle-user-list-item-msg')
                var tmpCount = addressAlert.text() == '' ? 0 : parseInt(addressAlert.text());
                addressAlert.text(tmpCount + 1).show();
                if (addressItem.hasClass('active')) {
                    tmpCount = channelAlert.text() == '' ? 0 : parseInt(channelAlert.text());
                    channelAlert.text(newCount + 1).show();
                }
            } else {
                if ($('.row-circle-user-list-item[data-target="-3"]').hasClass('active')) {
                    var tmpArr = getUnknowChannelForChannelList(valDoc);
                    if (tmpArr.length > 0) {
                        webSocketSend('Action_Get_BatchArrProfile', { symbol: '', msg: '', targets: [], values: {}, batch: tmpArr, id: '' });
                    } else {
                        circleAddress_BuildChannelList();
                    }
                }
            }

            break;
        case 'Action_Set_AcceptFriend':
            circleAddress_AcceptGuest(valDoc);
            break;
        case 'Action_Get_RelationsSearch':
            circleRefresh_SearchResult(valDoc);
            break;
        case 'Action_Set_SendMessage':
            if ($(valDoc.find('msg')[0]).text() == 'sent') {
                if (_gCircleCurrentMsg) {
                    $(_gCircleCurrentMsg.find('.col-msg-item-alert-wrap').find('button')[0]).hide();
                    _gCircleCurrentMsg = null;
                }
            }
            break;
        case 'Action_Get_DialogContent':
            circleChat_FormatMsgHistory(valDoc);
            break;
        case 'Action_Receive_Msg_Direct':
            circleChat_ReceiveMsgHistoryDirect(valDoc);
            break;
        case 'Action_Get_BatchArrProfile':
            circleUpdateUserList(valDoc);
            if ($('.row-category-item[data-target="circle"]').hasClass('active-item')) {
                switch (_gCurrentAction) {
                    case 'Action_Get_RelationsList':
                        circleInitData_Address();
                        circleBuildList_Address();
                        circleBuildContent_Address();
                        circleAdjust_Address();
                        circleInitEvents_Address();
                        break;
                    case 'Action_Get_RelationsAcceptableList':
                        circleAddress_BuildGuestList();
                        break;
                    case 'Action_Get_ChannelList':
                        circleAddress_BuildChannelList();
                        break;
                    case 'Action_Get_DialogList':
                        circleBuildList_Chat();
                        circleBuildContent_Chat();
                        circleAdjust_Chat();
                        circleInitEvents_Chat();
                        circleChat_SwitchChat();
                        break;
                }
            }

            break;
    }
};