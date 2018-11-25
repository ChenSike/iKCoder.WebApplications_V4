'use strict';

var _gEmojiGroups = [];
var _gCurrentEmojiGroup = null;
var _gCircleDataSearch = { value: [] };
var _gCircleChats = [];
var _gCircleUsers = [];
var _gCircleGroups = [];
var _gCircleCurrentChat = {};
var _gCircleCurrentAddress = null;
var _gCircleLoopAction = [];
var _gCircleSystemId = '99999999999';
var _gCircleCurrentGuestId = '';
var _gCircleCurrentMsg = null;
var _gWeekDayMap = {
    0: '星期日',
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
};

function buildContent_Circle() {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('   <div class="row h-100 no-wrap">');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-sidetoolbar">');
    tmpHTMLArr.push(circleBuildSideToolbar());
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-user-list">');
    tmpHTMLArr.push('           <div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('               <div class="row no-wrap">');
    tmpHTMLArr.push('                   <div class="col no-wrap col-circle-search-container">');
    tmpHTMLArr.push(circleBuildSearchPart());
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="row no-wrap" style="height: calc(100% - 42px);">');
    tmpHTMLArr.push('                   <div class="col no-wrap col-circle-itemlist-container">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-message-list">');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').empty();
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    circleInitBasicData();
    circleInitEvents();
    webSocketSend('Action_Get_DialogList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
};

function circleBuildSideToolbar() {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="btn-group-vertical">');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item active" data-target="chat" title="聊天">');
    tmpHTMLArr.push('       <i class="far fa-comment"></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item"></i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item" data-target="address" title="通讯录">');
    tmpHTMLArr.push('       <i class="far fa-address-book"></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item"></i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item" data-target="favor" title="收藏">');
    tmpHTMLArr.push('       <i class="far fa-star "></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item"></i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('</div>');
    return tmpHTMLArr.join('');
};

function circleBuildSearchPart() {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<form  class="header-circle-user-search">');
    tmpHTMLArr.push('   <div class="form-group row no-margin">');
    tmpHTMLArr.push('       <div class="col col-header-circle-user-search">');
    tmpHTMLArr.push('           <div class="input-group w-100 wrap-circle-search">');
    tmpHTMLArr.push('               <input type="text" class="form-control form-control-sm" id="search_Circle" style="border-radius:5px; border:none; background-color:rgb(219,217,216);" autocomplete="off" placeholder="Search" data-id="" alt="a"/>');
    tmpHTMLArr.push('               <div class="input-group-btn">');
    tmpHTMLArr.push('                   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="" style="display: none;"><span class="caret"></span></button>');
    tmpHTMLArr.push('                   <ul class="dropdown-menu dropdown-menu-center" role="menu"></ul>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col no-padding col-header-circle-button-search">');
    tmpHTMLArr.push('           <button type="button" class="btn btn-gray btn-sm" data-toggle="modal" data-target="#modalFindFriend"><i class="fas fa-plus"></i></button>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</form>');
    return tmpHTMLArr.join('');
};

function circleInitBasicData() {
    _gEmojiGroups = [];
    _gCurrentEmojiGroup = null;
    _gCircleDataSearch = { value: [] };
    _gCircleChats = [];
    _gCircleCurrentChat = { chatId: '', chatter: '', chatterId: '', type: '', msgs: [] };
    _gCircleCurrentAddress = null;
    _gCircleUsers = [];
    _gCircleGroups = [
        { id: 'guest', title: '新朋友', userId: "-2", subs: [{ userName: "新朋友", userId: "-2", header: "image/tmpheader.jpg" }] },
        { id: 'channel', title: '频道', userId: "-3", subs: [{ userName: "频道", userId: "-3", header: "image/tmpheader.jpg" }] },
        { id: 'group', title: '讨论组', userId: "-4", subs: [] }
    ];

    _gCircleUsers.push({
        userName: '系统消息',
        header: 'image/tmpheader.jpg',
        userId: _gCircleSystemId,
        msg: '',
        accecpt: true,
        accecptId: '',
        gender: null,
        address: null,
        comment: '系统消息和通知',
        note: null,
        type: 'user'
    });
};

function circleInitEvents() {
    circleInitSearchPart();
    $('.btn-circle-stb-item').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        $(target.find('.alert-circle-stb-item')).empty().hide();
        var tmpSymbol = target.attr('data-target');
        if (!target.hasClass('active')) {
            $('.btn-circle-stb-item').removeClass('active');
            target.addClass('active');
        }

        switch (tmpSymbol) {
            case 'address':
                webSocketSend('Action_Get_RelationsList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
                break;
            case 'chat':
                webSocketSend('Action_Get_DialogList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
                break;
            case 'favor':
                _showGlobalMessage('收藏功能即将上线，敬请体验!', 'info', 'alert_Coming_Error');
                break;
            default:
                break;
        }
    });

    $('#modalFindFriend .btn-circle-addfriend-search').on('click', function (eventObj) {
        webSocketSend('Action_Get_RelationsSearch', { symbol: '', msg: '', targets: [], values: { value: $('#txt_Circle_AddFriend_Search').val() }, batch: [], id: '' });
    });
};

function circleRefresh_SearchResult(doc) {
    //<root ><row id="3" uid="13122222222" sex="1" nickname="13122222222" birthday="2000-01-01" header="" country="china" state="" city="" schoolmap=""></row></root>
    if ($('#modalFindFriend').css('display') != 'none') {
        var container = $('#modalFindFriend .container-result');
        container.empty();
        var items = $(doc).find('row');
        var tmpHTMLArr = [];
        var item, uid, header, name, sex, country, state, city, school, tmpImg, tmpUser, accecpt;
        for (var i = 0; i < items.length; i++) {
            item = $(items[i]);
            uid = item.attr('uid');
            tmpUser = circleGetUserObj(uid);
            header = (item.attr('header') == '' ? 'image/tmpheader.jpg' : item.attr('header'));
            tmpImg = new Image();
            tmpImg.src = header;
            tmpImg.onerror = function () {
                $('.search-result-header[data-target="' + uid + '"]').attr('src', 'image/tmpheader.jpg');
            };

            name = (item.attr('nickname') == '' ? uid : item.attr('nickname'));
            sex = (item.attr('sex') == '1' ? 'male' : 'female');
            country = (item.attr('country') == '' ? 'China' : item.attr('country'));
            state = (item.attr('state') == '' ? '' : item.attr('state'));
            city = (item.attr('city') == '' ? '' : item.attr('city'));
            school = (item.attr('school') == '' ? '' : item.attr('school'));
            tmpHTMLArr.push('<div class="row row-result-item">');
            tmpHTMLArr.push('   <div class="col col-result-item-header">');
            tmpHTMLArr.push('       <img class="img-fluid search-result-header" src="' + header + '" data-target="' + uid + '">');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="col col-result-item-content">');
            tmpHTMLArr.push('       <p class="content">');
            tmpHTMLArr.push('           <span>' + name + '</span>');
            tmpHTMLArr.push('           <i class="fas fa-' + sex + '"></i>');
            tmpHTMLArr.push('           <span>' + country + '</span>');
            tmpHTMLArr.push('           <span>' + state + '</span>');
            tmpHTMLArr.push('           <span>' + city + '</span>');
            tmpHTMLArr.push('           <span>' + school + '</span>');
            tmpHTMLArr.push('       </p>');
            tmpHTMLArr.push('       <p class="msg">');
            tmpHTMLArr.push('           <input type="text" class="form-control-plaintext" id="txt_User_Popover_Comment" value="" placeholder="点击编辑消息">');
            tmpHTMLArr.push('       </p>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="col col-result-item-action d-flex align-items-center">');
            if (tmpUser && tmpUser.accecpt) {
                tmpHTMLArr.push('       <button type="button" class="btn btn-success btn-sm btn-new-friend-message" data-target="' + uid + '">开始聊天</button>');
            } else {
                tmpHTMLArr.push('       <button type="button" class="btn btn-success btn-sm btn-new-friend-request" data-target="' + uid + '">申请加为好友</button>');
            }

            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('</div>');
        }

        container.append($(tmpHTMLArr.join('')));
        $('#modalFindFriend .btn-new-friend-request').on('click', function (eventObj) {
            webSocketSend('Action_Set_NewFriend', { symbol: '', msg: '', targets: [], values: { suname: $(eventObj.currentTarget).attr('data-target') }, batch: [], id: '' });
        });

        $('#modalFindFriend .btn-new-friend-message').on('click', function (eventObj) {
            $('#modalFindFriend').modal('hide');
            var userObj = circleGetUserObj($(eventObj.currentTarget).attr('data-target'));
            var chat = circleGetChatByChatterId(userObj.userId);
            if (chat == null) {
                _gCircleCurrentChat = { chatId: '', chatter: userObj, chatterId: userObj.userId, type: userObj.type, msgs: [] };
                webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [userObj.userId], values: {}, batch: [], id: '' });
            } else {
                circleChat_SwitchChat(chat.chatId);
            }
        });
    }
};

function circleInitSearchPart() {
    var defaultOptions = {
        url: null,                             //请求数据的 URL 地址
        jsonp: null,                         //设置此参数名，将开启jsonp功能，否则使用json数据结构
        data: _gCircleDataSearch,     //提示所用的数据，注意格式
        indexId: 0,                         //每组数据的第几个数据，作为input输入框的 data-id，设为 -1 且 idField 为空则不设置此值
        indexKey: 0,                       //每组数据的第几个数据，作为input输入框的内容
        idField: 'userId',                  //每组数据的哪个字段作为 data-id，优先级高于 indexId 设置（推荐）
        keyField: 'userName',           //每组数据的哪个字段作为输入框内容，优先级高于 indexKey 设置（推荐）

        /* 搜索相关 */
        autoSelect: true,               //键盘向上/下方向键时，是否自动选择值
        allowNoKeyword: true,        //是否允许无关键字时请求数据
        getDataMethod: 'data',       //获取数据的方式，url：一直从url请求；data：从 options.data 获取；firstByUrl：第一次从Url获取全部数据，之后从options.data获取
        delayUntilKeyup: false,       //获取数据的方式 为 firstByUrl 时，是否延迟到有输入时才请求数据
        ignorecase: true,              //前端搜索匹配时，是否忽略大小写
        effectiveFields: ['userName', 'userId'],            //有效显示于列表中的字段，非有效字段都会过滤，默认全部。
        effectiveFieldsAlias: { userName: "姓名" },       //有效字段的别名对象，用于 header 的显示
        searchFields: [],               //有效搜索字段，从前端搜索过滤数据时使用，但不一定显示在列表中。effectiveFields 配置字段也会用于搜索过滤
        clearable: true,

        multiWord: false,              //以分隔符号分割的多关键字支持
        separator: ',',                  //多关键字支持时的分隔符，默认为半角逗号

        /* UI */
        autoDropup: false,           //选择菜单是否自动判断向上展开。设为 true，则当下拉菜单高度超过窗体，且向上方向不会被窗体覆盖，则选择菜单向上弹出
        autoMinWidth: false,        //是否自动最小宽度，设为 false 则最小宽度不小于输入框宽度
        showHeader: false,          //是否显示选择列表的 header。为 true 时，有效字段大于一列则显示表头
        showBtn: true,               //是否显示下拉按钮
        inputBgColor: '',              //输入框背景色，当与容器背景色不同时，可能需要该项的配置
        inputWarnColor: 'rgba(255,0,0,.1)', //输入框内容不是下拉列表选择时的警告色
        listStyle: {
            'padding-top': 0,
            'max-height': '375px',
            'max-width': '800px',
            'overflow': 'auto',
            'width': 'auto',
            'transition': '0.3s',
            '-webkit-transition': '0.3s',
            '-moz-transition': '0.3s',
            '-o-transition': '0.3s',
            'font-size': '12px'
        },                 //列表的样式控制
        listAlign: 'auto',               //提示列表对齐位置，left/right/auto
        listHoverStyle: 'background: #07d; color:#fff', //提示框列表鼠标悬浮的样式
        listHoverCSS: 'jhover',    //提示框列表鼠标悬浮的样式名称

        /* methods */
        //fnProcessData: null,     //processData 格式化数据的方法，返回数据格式参考 data 参数
        //fnGetData: null,             //getData获取数据的方法，无特殊需求一般不作设置
        //fnAdjustAjaxParam: null,        //调整 ajax 请求参数方法，用于更多的请求配置需求。如对请求关键字作进一步处理、修改超时时间等
        //fnPreprocessKeyword: null       //搜索过滤数据前，对输入关键字作进一步处理方法。注意，应返回字符串
    };

    //init search suggest
    $('#search_Circle').bsSuggest(defaultOptions);
};

function circleShowNoteSymol(type, amount) {
    var target = $('.btn-circle-stb-item[data-target="chat"] .alert-circle-stb-item');
    target.show();
    target.text(amount);
};

function circleCurrentFeature() {
    var feature = '';
    var tmpEls = $('.btn-circle-stb-item');
    for (var i = 0; i < tmpEls.length; i++) {
        if ($(tmpEls[i]).hasClass('active')) {
            feature = $(tmpEls[i]).attr('data-target');
        }
    }

    return feature;
};

function circleBuildList(doc) {
    var feature = circleCurrentFeature();
    if (feature == 'chat') {
        circleBuildList_Chat(doc);
    } else if (feature == 'address') {
        circleBuildList_Address(doc);
    } else if (feature == 'favor') {
        circleBuildList_Favor(doc);
    }
};

function circleBuildContent() {
    var feature = circleCurrentFeature();
    if (feature == 'chat') {
        circleBuildContent_Chat();
    } else if (feature == 'address') {
        circleBuildContent_Address();
    } else if (feature == 'favor') {
        circleBuildContent_Favor();
    }
};

function circleInitEventsFeature() {
    var feature = circleCurrentFeature();
    if (feature == 'chat') {
        circleInitEvents_Chat();
    } else if (feature == 'address') {
        circleInitEvents_Address();
    } else if (feature == 'favor') {
        circleInitEvents_Favor();
    }
};

function circleAdjustFeature() {
    var feature = circleCurrentFeature();
    if (feature == 'chat') {
        circleAdjust_Chat();
    } else if (feature == 'address') {
        circleAdjust_Address();
    } else if (feature == 'favor') {
        circleAdjust_Favor();
    }
};

function circleBuildList_Chat() {
    var container = $('.col-circle-itemlist-container');
    var tmpHTMLArr = [];
    var tmpChat;
    tmpHTMLArr.push('<div class="container-fluid circle-user-list-group">');
    for (var i = 0; i < _gCircleChats.length; i++) {
        circleBuildListItem(tmpHTMLArr, _gCircleChats[i].chatter, _gCircleChats[i].chatId);
    }

    tmpHTMLArr.push('</div>');
    container.empty();
    container.append($(tmpHTMLArr.join('')));
};

function circleBuildList_Address() {
    var container = $('.col-circle-itemlist-container');
    var tmpHTMLArr = [];
    var tmpAlphaTitle = '<i class="fas fa-asterisk" style="font-size: 11px; margin-left: -2px;"></i>';
    for (var i = 0; i < _gCircleGroups.length; i++) {
        if (_gCircleGroups[i].subs.length > 0) {
            tmpHTMLArr.push('<div class="container-fluid circle-user-list-group">');
            if (i > 0) {
                tmpHTMLArr.push('   <div class="row"><div class="col" style="height:10px;"></div></div>');
            }

            tmpHTMLArr.push('   <div class="row row-circle-address-group-title">');
            tmpHTMLArr.push('       <div class="col">');
            tmpHTMLArr.push(_gCircleGroups[i].title == '*' ? tmpAlphaTitle : _gCircleGroups[i].title.toUpperCase());
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            for (var j = 0; j < _gCircleGroups[i].subs.length; j++) {
                circleBuildListItem(tmpHTMLArr, _gCircleGroups[i].subs[j]);
            }

            tmpHTMLArr.push('</div>');
        }
    }

    container.empty();
    container.append($(tmpHTMLArr.join('')));
};

function circleBuildList_Favor() {
};

function circleBuildListItem(tmpHTMLArr, itemObj, chatId) {
    if (typeof (chatId) != 'string') {
        var chat = circleGetChatByChatterId(itemObj.userId);
        chatId = (chat == null ? '' : chat.chatId);
    }

    if (itemObj != null) {
        tmpHTMLArr.push('<div class="row row-circle-user-list-item" data-target="' + itemObj.userId + '" data-type="' + itemObj.type + '" data-chat="' + chatId + '">');
        tmpHTMLArr.push('   <div class="col-1 col-circle-user-list-item-header">');
        if (itemObj.type == 'group') {
            circleBuildListItemHeader_Group(tmpHTMLArr, itemObj);
        } else {
            var tmpImg = (itemObj.header != 'image/tmpheader.jpg' ? _getRequestURL(_gURLMapping.account.getuserheaderImg, { uname: itemObj.userId }) : itemObj.header);
            var tmpSymbol = itemObj.userId + '|' + itemObj.type;
            tmpHTMLArr.push('       <img class="img-fluid circle-user-list-item-header" src="' + tmpImg + '" data-target="' + tmpSymbol + '">');
        }

        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col">' + itemObj.userName + '</div>');
        tmpHTMLArr.push('   <div class="col-1 col-circle-user-list-item-msg">');
        tmpHTMLArr.push('       <div class="circle-user-list-item-msg"></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }
};

function circleBuildListItemHeader_Group(tmpHTMLArr, itemObj) {
    var imgStyle = (itemObj.items.length <= 4 ? 'width:15px;height:15px;' : '');
    var wrapStyle = (itemObj.items.length > 4 && itemObj.items.length < 7 ? 'style="padding: 5px 0px;"' : '');
    var marginStyle = '';
    tmpHTMLArr.push('<div class="group-header-wrap" ' + wrapStyle + '>');
    for (var j = 0; j < itemObj.items.length && j < 9; j++) {
        marginStyle = '';
        if (j > 0) {
            if ((itemObj.items.length > 4 && j > 3) || (itemObj.items.length <= 4 && j > 2)) {
                marginStyle += 'margin-top:1px;';
            }

            if ((itemObj.items.length > 4 && j % 3 != 0) || (itemObj.items.length <= 4 && j % 2 != 0)) {
                marginStyle += 'margin-left:1px;';
            }
        }

        tmpImg = (itemObj.items[j].header != 'image/tmpheader.jpg' ? _getRequestURL(_gURLMapping.account.getuserheaderImg, { uname: itemObj.userId }) : itemObj.items[j].header);
        tmpHTMLArr.push('   <img class="circle-group-item-header" src="' + tmpImg + '" style="' + imgStyle + marginStyle + '">');
    }

    tmpHTMLArr.push('</div>');
};

function circleBuildContent_Chat() {
    var container = $('.col-circle-message-list');
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-circle-message">');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col-11 col-circle-message-history-user">');
    tmpHTMLArr.push('           <label class="container-fluid label-circle-message-history-user"></label>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col-1 col-circle-message-history-button">');
    tmpHTMLArr.push('           <button type="button" class="btn btn-sm" title="详情" data-target="" data-type=""><i class="fas fa-tasks"></i></button>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col col-circle-message-history">');
    tmpHTMLArr.push('           <div class="container-fluid container-circle-message-history"></div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col no-padding"><div class="circle-input-drag"></div></div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col col-circle-message-input">');
    tmpHTMLArr.push('           <div class="container-fluid h-100">');
    tmpHTMLArr.push('               <div class="row row-circle-message-input-type">');
    tmpHTMLArr.push('                   <div class="col-1">');
    tmpHTMLArr.push('                       <div class="circle-message-input-type input-type-emoji text-center" data-placement="top" data-toggle="popover" title="" data-content="">');
    tmpHTMLArr.push('                           <i class="far fa-smile"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-1"><div class="circle-message-input-type input-type-file text-center"><i class="far fa-folder-open"></i></div></div>');
    tmpHTMLArr.push('                   <div class="col-1"><div class="circle-message-input-type input-type-history text-center"><i class="far fa-comments"></i></div></div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="row row-circle-message-input-field">');
    tmpHTMLArr.push('                   <div class="col h-100 text-left no-padding circle-message-input-field" contenteditable="true"></div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="row row-circle-message-input-button">');
    tmpHTMLArr.push('                   <div class="col"></div>');
    tmpHTMLArr.push('                   <div class="col-2 text-right">');
    tmpHTMLArr.push('                       <button type="button" class="btn btn-outline-green btn-sm circle-message-input-send">');
    tmpHTMLArr.push('                           <span>发送</span><i class="far fa-envelope"></i>');
    tmpHTMLArr.push('                       </button>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="setting-bar-chatter">');
    tmpHTMLArr.push('       <div class="container-fluid h-100 container-for-user">');
    tmpHTMLArr.push('           <div class="row row-headers">');
    tmpHTMLArr.push('               <div class="col-3">');
    tmpHTMLArr.push('                   <button type="button" class="btn btn-outline-light btn-sm btn-add-user-to-group">');
    tmpHTMLArr.push('                       <i class="fas fa-plus"></i>');
    tmpHTMLArr.push('                   </button>');
    tmpHTMLArr.push('                   <p class="">添加</p>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="col-3">');
    tmpHTMLArr.push('                   <img class="user-header" src="">');
    tmpHTMLArr.push('                   <p class="user-name"></p>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-show-more">');
    tmpHTMLArr.push('               <div class="col"><div>查看更多讨论组成员<i class="fas fa-angle-down"></i></div></div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-split">');
    tmpHTMLArr.push('               <div class="col col-split"></div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-group-option">');
    tmpHTMLArr.push('               <div class="col col-group-option-title">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="txt_CSB_Group_Name">讨论组名称</label>');
    tmpHTMLArr.push('                       <div class="textarea-group-option" id="txt_CSB_Group_Name" contenteditable="true"></div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-group-option">');
    tmpHTMLArr.push('               <div class="col col-group-option-title">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="txt_CSB_Group_Board">讨论组公告</label>');
    tmpHTMLArr.push('                       <div class="textarea-group-option" id="txt_CSB_Group_Board" contenteditable="true"></div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-group-option">');
    tmpHTMLArr.push('               <div class="col col-group-option-title">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="txt_CSB_Group_MyName">我在本讨论组的昵称</label>');
    tmpHTMLArr.push('                       <div class="textarea-group-option" id="txt_CSB_Group_MyName" contenteditable="true"></div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-switch row-group-option">');
    tmpHTMLArr.push('               <div class="col">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="switch_DND_For_User">显示成员昵称</label>');
    tmpHTMLArr.push('                       <div class="form-control  form-control-sm">');
    tmpHTMLArr.push('                           <div class="switch switch-small" tabindex="0">');
    tmpHTMLArr.push('                               <input id="switch_SNN_For_Group" type="checkbox" />');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-switch">');
    tmpHTMLArr.push('               <div class="col">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="switch_DND_For_User">消息免打扰</label>');
    tmpHTMLArr.push('                       <div class="form-control  form-control-sm">');
    tmpHTMLArr.push('                           <div class="switch switch-small" tabindex="0">');
    tmpHTMLArr.push('                               <input id="switch_DND_For_User" type="checkbox" />');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row row-switch">');
    tmpHTMLArr.push('               <div class="col">');
    tmpHTMLArr.push('                   <div class="form-group">');
    tmpHTMLArr.push('                       <label for="switch_Top_For_User">聊天置顶</label>');
    tmpHTMLArr.push('                       <div class="form-control  form-control-sm">');
    tmpHTMLArr.push('                           <div class="switch switch-small" tabindex="0">');
    tmpHTMLArr.push('                               <input id="switch_Top_For_User" type="checkbox" />');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    tmpHTMLArr.push('<div class="circle-input-drag-proxy"></div>');
    container.empty();
    container.append($(tmpHTMLArr.join('')));
};

function circleBuildContent_Address() {
    var container = $('.col-circle-message-list');
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-circle-message">');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col col-circle-message-history-user">');
    tmpHTMLArr.push('           <label class="container-fluid label-circle-message-history-user"></label>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row row-circle-message-part-1">');
    tmpHTMLArr.push('       <div class="col col-circle-message-history">');
    tmpHTMLArr.push('           <div class="container-fluid container-circle-message-history"></div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row row-circle-message-part-2">');
    tmpHTMLArr.push('       <div class="col">');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    container.empty();
    container.append($(tmpHTMLArr.join('')));
    //$('.col-circle-message-history').height($("body").height() - 30 - 35 - 39 - 5);
    $('.col-circle-message-history').height($("body").height() - 30 - 35 - 39 - 5 - 7);
};

function circleBuildContent_Favor() {
};

function circleCalcMessageHeight(top) {
    var retObj = null;
    top = (top == -1 ? $('.row-footer').offset().top - 200 : top);
    if (circleCheckMsgDragScope(top, true)) {
        var containerHeight = $(".col-circle-message-list").height() - 10 - 39;
        var minHeight = containerHeight * 25 / 100;
        //var tmpHeight = $("body").height() - top - 30 - 39;
        var tmpHeight = $("body").height() - top - 30 - 41;
        tmpHeight = (tmpHeight < minHeight ? minHeight : tmpHeight);
        retObj = { input: tmpHeight - 5, history: containerHeight - tmpHeight };
    }

    return retObj;
};

function circleCheckMsgDragScope(top, chekcSize) {
    var bodyHeight = $("body").height();
    var maxTop = $('.wrap-circle-message').offset().top;
    var maxBottom = $('.row-footer').offset().top;
    if (chekcSize && top > maxTop + 80 && top <= maxBottom - 80) {
        return true;
    } else if (!chekcSize && top > maxTop + 20 && top <= maxBottom - 20) {
        return true;
    }

    return false;
};

function circleAdjust_Chat() {
    var tmpObj = circleCalcMessageHeight(-1);
    $(".col-circle-message-input").height(tmpObj.input);
    $(".col-circle-message-history").height(tmpObj.history);
};

function circleAdjust_Address() {

};

function circleAdjust_Favor() {

};

function circleInitEvents_Chat() {
    $('#switch_DND_For_User').wrap('<div class="switch" />').parent().bootstrapSwitch();
    $('#switch_Top_For_User').wrap('<div class="switch" />').parent().bootstrapSwitch();
    $('#switch_SNN_For_Group').wrap('<div class="switch" />').parent().bootstrapSwitch();

    $(".circle-input-drag").mousedown(function (e) {
        var drag = $('.circle-input-drag');
        var dragOff = $('.circle-input-drag').offset();
        if (e.pageY < dragOff.top + 5 && e.pageY > dragOff.top - 5) {
            $(document).mouseup(mouseUpFn);
            $(".circle-input-drag-proxy").css("display", "block");
            $(".circle-input-drag-proxy").css("visibility", "visible");
            $(".circle-input-drag-proxy").width(drag.width() - 10);
            $(".circle-input-drag-proxy").css("top", (dragOff.top - 35) + "px");
            dragFn(e);
        }
    });

    var mouseUpFn = function () {
        $(document).unbind("mousemove");
        $(document).unbind("mouseup");
        var dragProxy = $(".circle-input-drag-proxy");
        if (dragProxy.css("display") != "none") {
            var tmpObj = circleCalcMessageHeight(dragProxy.offset().top);
            if (tmpObj != null) {
                $(".col-circle-message-input").height(tmpObj.input);
                $(".col-circle-message-history").height(tmpObj.history);
            }

            $(".circle-input-drag-proxy").css("display", "none");
            $(".circle-input-drag-proxy").css("visibility", "hidden");
        }
    };

    var dragFn = function siderBarDrag(e) {
        var _circleInputDragStarY = e.pageY;
        $(document).bind("mousemove", function (ev) {
            var top = ev.pageY - 35;
            $(".circle-input-drag-proxy").css("top", top + "px");
            if (!circleCheckMsgDragScope(top, false)) {
                mouseUpFn();
            }
        });
    };

    circleChat_InitMsgInputEvent();

    $('.circle-message-input-type.input-type-file').on('click', function () {
        _showGlobalMessage('文件互传功能即将上线，敬请体验!', 'info', 'alert_Coming_Info');
    });

    $('.circle-message-input-type.input-type-history').on('click', function () {
        _showGlobalMessage('聊天记录列表功能即将上线，敬请体验!', 'info', 'alert_Coming_Info');
    });

    $('.circle-message-input-type.input-type-emoji').popover({
        html: true,
        content: circleChat_BuildEmojiPopover()
    });

    $('.circle-message-input-type.input-type-emoji').on('shown.bs.popover', function () {
        circleChat_ChangeEmojiGroup(null);
        $('.emoji-groups-item').on('click', circleChat_ChangeEmojiGroup);
        var groupsContainer = $('.container-emoji-groups');
        var groupsContainerWidth = groupsContainer.width();
        var groupsColumnWidth = $('.col-emoji-groups').width();
        var groupsOffsetVal = groupsContainer.width() - groupsColumnWidth;
        $('.emoji-grp-btn-next').on('click', function () {
            var currLeft = parseFloat(groupsContainer.css('left'));
            var remain = groupsContainerWidth - Math.abs(currLeft);
            if (remain > groupsColumnWidth) {
                groupsContainer.css('left', (Math.abs(currLeft) + 28 > groupsOffsetVal ? -groupsOffsetVal : currLeft - 28) + 'px');
            }
        });

        $('.emoji-grp-btn-prev').on('click', function () {
            var currLeft = parseInt(groupsContainer.css('left'));
            if (currLeft < 0) {
                groupsContainer.css('left', (currLeft + 28 > 0 ? 0 : currLeft + 28) + 'px');
            }
        });
    });

    $('.circle-message-input-send').on('click', function () {
        if (!circleChat_CheckEmptyInput()) {
            var input = $('.circle-message-input-field').html();
            var tmpDate = new Date();
            var tmpTime = tmpDate.getHours() + ':' + tmpDate.getMinutes() + ':' + tmpDate.getSeconds();
            tmpDate = tmpDate.getFullYear() + '-' + (tmpDate.getMonth() + 1) + '-' + tmpDate.getDate();
            var tmpMsg = { sender: _gUserInfoObj.userId, msg: input, date: tmpDate, time: tmpTime, dt: tmpDate + ' ' + tmpTime };
            _gCircleCurrentChat.msgs.push(tmpMsg);
            var tmpResult = circleChat_BuildMessageItem(tmpMsg);
            _gCircleCurrentMsg = tmpResult.el;
            $('.container-circle-message-history').append(_gCircleCurrentMsg);
            var dataXml = '<root><chat>' + _gCircleCurrentChat.chatId + '</chat><sender>' + _gUserInfoObj.userId + '</sender><msg>' + encodeURI(input) + '</msg></root>';
            $('.msg-item-resend-btn[' + tmpResult.symbol + ']').on('click', function () {
                _gCircleCurrentMsg = tmpResult.el;
                webSocketSend('Action_Set_SendMessage', { symbol: _gCircleCurrentChat.chatId, msg: $.base64.btoa(dataXml), targets: [_gCircleCurrentChat.chatterId], values: {}, batch: [], id: '' });
            });

            webSocketSend('Action_Set_SendMessage', { symbol: _gCircleCurrentChat.chatId, msg: $.base64.btoa(dataXml), targets: [_gCircleCurrentChat.chatterId], values: {}, batch: [], id: '' });
        }
    });

    $('.row-circle-user-list-item').on('click', circleChat_ClickListItem);

    $('#search_Circle').on('onSetSelectValue', function () {
        var user = arguments[2];
        //circleUpdateMsgHistory(user.id);
        //$('.row-circle-user-list-item').removeClass('active');
        //var currItem = $(eventObj.currentTarget);
        //currItem.addClass('active');
    });

    $('.col-circle-message-history-button .btn.btn-sm').on('click', function (eventObj) {
        var userId = $(eventObj.currentTarget).attr('data-target')
        if (circleGetUserType(userId) == 'channel') {
            circleBuildChannelPop(eventObj);
        } else {
            circleChat_ShowSettingBar(userId);
        }
    });

    $('.setting-bar-chatter .user-header').on('click', circleChat_BuildUserPop);

    $('.setting-bar-chatter .btn-add-user-to-group').on('click', circleChat_ShowAddToGroupPop);

    $('.setting-bar-chatter .row-show-more .col div').on('click', function (eventObj) {
        var groupObj = circleGetUserObj($(eventObj.currentTarget).attr('data-target'));
        var tigger = $('.setting-bar-chatter .row-show-more .col div');
        if (tigger.text().indexOf('查看更多') >= 0) {
            circleChat_ShowSettingBarGroupMember(groupObj, 500);
            $('.setting-bar-chatter .row-show-more .col div').html('收起讨论组成员<i class="fas fa-angle-up"></i></div>');
        } else {
            circleChat_ShowSettingBarGroupMember(groupObj, 8);
            $('.setting-bar-chatter .row-show-more .col div').html('查看更多讨论组成员<i class="fas fa-angle-down"></i></div>');
        }
    });
};

function circleChat_FormatMsgHistory(doc) {
    //<root><root><item date=\"2018-11-23\" time=\"17:45:50\" dt=\"2018/11/23 17:45:50\">º(³ïìzw^«ýw×}÷ß}÷Ûÿìzw^«ïæ²Ú±×ìi×ìi×¿þk ÿë¢\u008b?</item></root>
    var items = doc.find('item');
    var date, time, dt, msg;
    var tmpChat = null;
    var chatId = _gCircleCurrentChat.chatId;
    if (chatId == _gCircleCurrentChat.chatId) {
        tmpChat = _gCircleCurrentChat;
    } else {
        tmpChat = circleGetChatByChatId(chatId);
    }

    tmpChat.msgs = [];
    for (var i = 0; i < items.length; i++) {
        try {
            msg = $($.base64.atob($(items[i]).text()));
            if (decodeURI($(msg.find('msg')[0]).text()).trim() == '') {
                msg = $('<root><sender>' + $(msg.find('sender')[0]).text() + '</sender><msg>消息已损坏，无法加载("' + $(items[i]).text() + '")</msg></root>');
            }
        } catch (ex) {
            msg = $('<root><sender>' + _gCircleCurrentChat.chatterId + '</sender><msg>消息已损坏，无法加载("' + $(items[i]).text() + '")</msg></root>');
        }

        if (msg.find('sender').length > 0) {
            tmpChat.msgs.push({
                date: $(items[i]).attr('date'),
                time: $(items[i]).attr('time'),
                dt: $(items[i]).attr('dt'),
                sender: $(msg.find('sender')[0]).text(),
                msg: decodeURI($(msg.find('msg')[0]).text())
            });
        }
    }

    if ($('.btn-circle-stb-item[data-target="chat"]').hasClass('active') && chatId == _gCircleCurrentChat.chatId) {
        circleChat_LoadMsgHistory();
    }
};

function circleChat_ReceiveMsgHistoryDirect(doc) {
    var chatId = $(doc.find('chat')[0]).text();
    var userId = $(doc.find('sender')[0]).text();
    var msg = decodeURI($(doc.find('msg')[0]).text());

    var tmpDate = new Date();
    var tmpTime = tmpDate.getHours() + ':' + tmpDate.getMinutes() + ':' + tmpDate.getSeconds();
    tmpDate = tmpDate.getFullYear() + '-' + (tmpDate.getMonth() + 1) + '-' + tmpDate.getDate();
    var msgObj = { sender: userId, msg: msg, date: tmpDate, time: tmpTime, dt: tmpDate + ' ' + tmpTime };

    if (_gCircleCurrentChat.chatId == chatId) {
        _gCircleCurrentChat.msgs.push(msgObj);
        var tmpResult = circleChat_BuildMessageItem(msgObj, circleGetUserObj(userId), false);
        $('.container-circle-message-history').append(tmpResult.el);
    } else {
        var tmpChat = circleGetChatByChatterId(userId);
        if (tmpChat != null) {
            tmpChat.msgs.push(msgObj);
            var featureBtn = $('.btn-circle-stb-item[data-target="chat"]');
            var alertEl = $(featureBtn.find('.alert-circle-stb-item'));
            alertEl.text(alertEl.text().trim() != '' ? parseInt(alertEl.text().trim()) + 1 : 1);
            alertEl.show();
            var chatEl = $('.row-circle-user-list-item[data-chat="' + tmpChat.chatId + '"]');
            if (!chatEl.hasClass('active')) {
                var alertEl = $(chatEl.find('.circle-user-list-item-msg'));
                alertEl.text(alertEl.text().trim() != '' ? parseInt(alertEl.text().trim()) + 1 : 1);
                alertEl.show();
            }
        }
    }
};

function circleChat_LoadMsgHistory() {
    var container = $('.container-circle-message-history');
    container.empty();
    _gCircleCurrentMsg = null;
    var userObj;
    for (var i = 0; i < _gCircleCurrentChat.msgs.length; i++) {
        userObj = circleGetUserObj(_gCircleCurrentChat.msgs[i].sender);
        var tmpResult = circleChat_BuildMessageItem(_gCircleCurrentChat.msgs[i], userObj, false);
        container.append(tmpResult.el);
    }
};

function circleChat_BuildMessageItem(msgObj, userInfo, showAlert) {
    var tmpHTMLArr = [];
    var symbol = ' data-target="' + (new Date().valueOf()) + '"';
    var currDate = (new Date()).toISOString().split('T')[0];
    var dt = msgObj.dt;
    var tmpImg;
    if (currDate == msgObj.date) {
        dt = msgObj.time;
    } else {
        currDate = new Date(currDate).valueOf() - new Date().getDay() * 24 * 60 * 60 * 1000;
        var tmpDate = new Date(msgObj.date);
        if (tmpDate.valueOf() < currDate) {
            dt = msgObj.dt;
        } else {
            dt = _gWeekDayMap[tmpDate.getDay()] + ' ' + msgObj.time;
        }
    }

    tmpHTMLArr.push('<div class="row"><div class="col text-center" style="padding: 3px;"><span class="span-msg-datetime">' + dt + '</span></div></div>');
    if (typeof (userInfo) != 'undefined' && userInfo && userInfo.userId != _gUserInfoObj.userId) {
        userInfo = (typeof (userInfo) == 'string' ? circleGetUserObj(userInfo) : userInfo);
        tmpImg = (userInfo.header != 'image/tmpheader.jpg' ? _getRequestURL(_gURLMapping.account.getuserheaderImg, { uname: userInfo.userId }) : userInfo.header)
        tmpHTMLArr.push('<div class="row row-message-item" data-sender="' + userInfo.userId + '">');
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <img class="img-fluid user-header" src="' + tmpImg + '" />');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-7">');
        tmpHTMLArr.push('       <div class="message-item-wrap">');
        tmpHTMLArr.push('           <div class="arrow-back arrow-left"></div>');
        tmpHTMLArr.push('           <div class="arrow-front arrow-left"></div>');
        tmpHTMLArr.push('           <div class="message-item-content">' + msgObj.msg + '</div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
    } else {
        var tmpStyle = '';
        if (typeof (showAlert) == 'boolean' && showAlert == false) {
            tmpStyle = ' style="display:none;"';
        }

        tmpImg = (_gUserInfoObj.header != 'image/tmpheader.jpg' ? _getRequestURL(_gURLMapping.account.getuserheaderImg, { uname: _gUserInfoObj.userId }) : _gUserInfoObj.header.indexOf('?') < 0 ? _gUserInfoObj.header + '?rnd=' + Date.now() : _gUserInfoObj.header);
        tmpHTMLArr.push('<div class="row row-message-item">');
        tmpHTMLArr.push('   <div class="col-3"></div>');
        tmpHTMLArr.push('   <div class="col-8">');
        tmpHTMLArr.push('<div class="container-fluid w-100 no-wrap no-padding">');
        tmpHTMLArr.push('   <div class="row no-wrap no-padding">');
        tmpHTMLArr.push('       <div class="col no-wrap no-padding col-msg-item-alert-wrap">');
        tmpHTMLArr.push('           <button type="button" class="btn btn-outline-danger msg-item-resend-btn" title="重新发送" ' + symbol + tmpStyle + '>');
        tmpHTMLArr.push('               <i class="fas fa-exclamation-circle"></i>');
        tmpHTMLArr.push('           </button>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('       <div class="col no-wrap no-padding col-msg-item-wrap">');
        tmpHTMLArr.push('           <div class="message-item-wrap msg-item-wrap-right">');
        tmpHTMLArr.push('               <div class="message-item-content">' + msgObj.msg + '</div>');
        tmpHTMLArr.push('               <div class="arrow-back arrow-right"></div>');
        tmpHTMLArr.push('               <div class="arrow-front arrow-right"></div>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <img class="img-fluid user-header" src="' + tmpImg + '" />');
        tmpHTMLArr.push('   </div>');
    }

    tmpHTMLArr.push('</div>');
    return { el: $(tmpHTMLArr.join('')), symbol: symbol };
};

function circleChat_BuildEmojiPopover() {
    for (var i = 0; i < 10; i++) {
        _gEmojiGroups.push({ id: i, img: "image/header/" + (i % 10) + ".jpg", emoji: [] });
    }

    var popoverHTML = [];

    popoverHTML.push('<div class="container-fluid wrap-emoji-popover">');
    popoverHTML.push('  <div class="row">');
    popoverHTML.push('      <div class="col col-emoji-items">');
    popoverHTML.push('          <div class="container-fluid wrap-emoji-items">');
    popoverHTML.push('              <div class="row">');
    popoverHTML.push('                  <div class="col no-padding container-emoji-items">');
    popoverHTML.push('                  </div>');
    popoverHTML.push('              </div>');
    popoverHTML.push('          </div>');
    popoverHTML.push('      </div>');
    popoverHTML.push('  </div>');
    popoverHTML.push('  <div class="row row-emoji-groups">');
    popoverHTML.push('      <div class="col-emoji-groups">');
    popoverHTML.push('          <div class="container-emoji-groups">');
    for (var i = 0; i < _gEmojiGroups.length; i++) {
        popoverHTML.push('              <img class="img-fluid emoji-groups-item" src="' + _gEmojiGroups[i].img + '" data-target="' + _gEmojiGroups[i].id + '">');
    }
    popoverHTML.push('          </div>');
    popoverHTML.push('      </div>');
    popoverHTML.push('      <div class="col-emoji-groups-buttons">');
    popoverHTML.push('          <button type="button" class="btn btn-outline-info btn-sm emoji-groups-button emoji-grp-btn-prev">');
    popoverHTML.push('              <i class="fas fa-chevron-left"></i>');
    popoverHTML.push('          </button>');
    popoverHTML.push('          <button type="button" class="btn btn-outline-info btn-sm emoji-groups-button emoji-grp-btn-next">');
    popoverHTML.push('              <i class="fas fa-chevron-right"></i>');
    popoverHTML.push('          </button>');
    popoverHTML.push('      </div>');
    popoverHTML.push('  </div>');
    popoverHTML.push('</div>');

    return popoverHTML.join('');
};

function circleChat_ChangeEmojiGroup(eventObj) {
    var groupId = (eventObj == null ? $($('.emoji-groups-item')[0]).attr('data-target') : $(eventObj.currentTarget).attr('data-target'));
    $('.container-emoji-groups .img-fluid.emoji-groups-item').removeClass('active');
    $('.container-emoji-groups .img-fluid.emoji-groups-item[data-target="' + groupId + '"]').addClass('active');

    for (var i = 0; i < _gEmojiGroups.length; i++) {
        if (_gEmojiGroups[i].id == groupId) {
            _gCurrentEmojiGroup = _gEmojiGroups[i];
            break;
        }
    }

    var random = randomInt(6, 10);
    if (_gCurrentEmojiGroup.emoji.length == 0) {
        var count = ($('.emoji-item').length == 20 ? 30 : 20);
        for (var i = 0; i < count; i++) {
            _gCurrentEmojiGroup.emoji.push({ id: i, img: "image/header/" + (i % random) + ".jpg" });
        }
    }

    var popoverHTML = [];
    for (var i = 0; i < _gCurrentEmojiGroup.emoji.length; i++) {
        popoverHTML.push('<img class="img-fluid emoji-item" src="' + _gCurrentEmojiGroup.emoji[i].img + '" data-target="' + _gCurrentEmojiGroup.emoji[i].id + '">');
    }

    $('.container-emoji-items').empty();
    $('.container-emoji-items').append($(popoverHTML.join('')));
    $('.emoji-item').on('click', circleChat_InputEmoji);
};

function circleChat_InputEmoji(eventObj) {
    var emojiId = $(eventObj.currentTarget).attr('data-target');
    var img = '';
    for (var i = 0; i < _gCurrentEmojiGroup.emoji.length; i++) {
        if (_gCurrentEmojiGroup.emoji[i].id == emojiId) {
            img = _gCurrentEmojiGroup.emoji[i].img;
            break;
        }
    }

    circleChat_InsertContent($('<img class="img-fluid emoji-item-in-field" src="' + img + '"/>'));
    $('.circle-message-input-type.input-type-emoji').popover('hide');
};

function circleChat_CheckEmptyInput() {
    var tmpContent = $('.circle-message-input-field').html();
    var isEmptyContent = false;
    if (tmpContent.length == 0) {
        isEmptyContent = true;
    } else {
        try {
            var tmpObj = $(tmpContent);
            if (tmpObj.length == 0) {
                if (tmpContent.length == 0) {
                    isEmptyContent = true;
                }
            } else if (tmpObj.length == 1) {
                if (tmpObj.text().trim().length == 0 && tmpObj[0].nodeName != 'IMG') {
                    isEmptyContent = true;
                }
            } else {
                if (tmpObj.text().trim().length == 0 && tmpObj.find('img').length == 0) {
                    isEmptyContent = true;
                }
            }
        } catch (ex) {
        }
    }

    return isEmptyContent;
};

function circleChat_ClickListItem(eventObj) {
    var currentTarget = $(eventObj.currentTarget);
    //var tmpSymbol = currentTarget.attr('data-target');
    //var tmpType = currentTarget.attr('data-type');
    //var tmpChatId = currentTarget.attr('data-chat');
    circleChat_SwitchChat($(eventObj.currentTarget).attr('data-chat'));
};

function circleChat_SwitchChat(chatId) {
    var targetBtn = $('.btn-circle-stb-item[data-target="chat"]');
    var tmpChat = typeof (chatId) == 'undefined' ? _gCircleCurrentChat.chatId == '' ? null : _gCircleCurrentChat : circleGetChatByChatId(chatId);
    if (!targetBtn.hasClass('active')) {
        $('.btn-circle-stb-item').removeClass('active');
        targetBtn.addClass('active');
        _gCircleCurrentChat = tmpChat == null ? _gCircleCurrentChat : tmpChat;
        webSocketSend('Action_Get_DialogList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
    } else {
        if (tmpChat != null) {
            _gCircleCurrentChat = tmpChat;
            $('.row-circle-user-list-item').removeClass('active');
            var currChatEl = $('.row-circle-user-list-item[data-chat="' + _gCircleCurrentChat.chatId + '"]');
            currChatEl.addClass('active');
            var currChatEl = $(currChatEl.find('circle-user-list-item-msg'));
            currChatEl.text = '';
            currChatEl.hide();
            circleUpdateContentLabel_Chat();
            $('.setting-bar-chatter').hide();
            $('.user-popover-wrap').hide();
            $('.channel-popover-wrap').hide();
            webSocketSend('Action_Get_DialogContent', { symbol: _gCircleCurrentChat.chatId, msg: '', targets: [], values: {}, batch: [], id: '' });
        }
    }
};

function circleChat_ShowSettingBar(userId) {
    var settingBar = $('.setting-bar-chatter');
    if (settingBar.css('display') != 'none') {
        $('.col-main-content').css('overflow', 'hidden');
        $('.user-popover-wrap').hide();
        settingBar.animate({
            right: '-250px',
            opacity: '0'
        }, 500, function () { settingBar.hide(); });
    } else {
        var userObj = circleGetUserObj(userId);
        $('.setting-bar-chatter .user-header').attr('src', userObj.header);
        $('.setting-bar-chatter .user-header').attr('data-target', userObj.userId);
        $('.setting-bar-chatter .user-name').text(userObj.userName);
        $('.setting-bar-chatter .row-headers .col-3:gt(1)').remove();
        $('.setting-bar-chatter .row-show-more').hide();
        if (userObj.type == 'group') {
            circleChat_ShowSettingBarGroupMember(userObj, 8);
            if (userObj.items.length > 8) {
                $('.setting-bar-chatter .row-show-more').show();
                $('.setting-bar-chatter .row-show-more .col div').attr('data-target', userId);
                $('.setting-bar-chatter .row-show-more .col div').html('查看更多讨论组成员<i class="fas fa-angle-down"></i></div>');
            }

            $('#txt_CSB_Group_Name').text(userObj.userName == '' ? '点击添加讨论组名称' : userObj.userName);
            $('#txt_CSB_Group_Board').text(userObj.board == '' ? '本讨论组尚无公告' : userObj.board);
            $('#txt_CSB_Group_MyName').text(_gUserInfoObj.nickName);
            $('.setting-bar-chatter .row-group-option').show();
        } else {
            $('.setting-bar-chatter .row-group-option').hide();
        }

        settingBar.show();
        settingBar.animate({
            right: '0px',
            opacity: '1'
        }, 500, function () { $('.col-main-content').css('overflow', 'auto'); });
    }
};

function circleChat_ShowSettingBarGroupMember(groupObj, maxCount) {
    var tmpHTMLArr = [];
    var count = 2;
    for (var i = 0; i < groupObj.items.length; i++) {
        if (count >= maxCount) {
            break;
        }

        if (groupObj.items[i].userId != _gUserInfoObj.userId) {
            tmpHTMLArr.push('<div class="col-3">');
            tmpHTMLArr.push('   <img class="user-header group-member" src="' + groupObj.items[i].header + '" data-target="' + groupObj.items[i].userId + '">');
            tmpHTMLArr.push('   <p class="user-name">' + groupObj.items[i].userName + '</p>');
            tmpHTMLArr.push('</div>');
            count++;
        }
    }

    $('.setting-bar-chatter .row-headers .col-3:gt(1)').remove();
    $('.setting-bar-chatter .user-header').parent().after($(tmpHTMLArr.join('')));
    $('.setting-bar-chatter .user-header.group-member').on('click', circleChat_BuildUserPop);
};

function circleChat_BuildUserPop(eventObj) {
    if ($('.user-popover-wrap').length > 0 && $('.user-popover-wrap').css('display') != 'none') {
        $('.user-popover-wrap').hide();
    } else {
        var target = $(eventObj.currentTarget);
        var userId = target.attr('data-target');
        var current = circleGetUserObj(userId, 'user');
        var container = $('.wrap-circle-message');
        if ($('.user-popover-wrap').length <= 0) {
            var tmpHTMLArr = [];
            tmpHTMLArr.push('<div class="user-popover-wrap">');
            tmpHTMLArr.push('   <div class="container-fluid container-user-popover">');
            tmpHTMLArr.push('       <div class="row" style="padding-bottom: 15px;">');
            tmpHTMLArr.push('           <div class="col-8">');
            tmpHTMLArr.push('               <p><span class="user-popover-name"></span><i class="fas fa-female"></i><i class="fas fa-male"></i></p>');
            tmpHTMLArr.push('               <p>');
            tmpHTMLArr.push('                   <span class="col-3 col-user-popover-th" style="padding-left: 0px;">用户名:</span>');
            tmpHTMLArr.push('                   <span class="user-popover-symbol"></span>');
            tmpHTMLArr.push('               </p>');
            tmpHTMLArr.push('           </div>');
            tmpHTMLArr.push('           <div class="col-4 col-user-popover-header">');
            tmpHTMLArr.push('               <img class="img-fluid user-popover-header" src="">');
            tmpHTMLArr.push('           </div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="row row-split">');
            tmpHTMLArr.push('           <div class="col col-split"></div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="row row-user-popover-comment">');
            tmpHTMLArr.push('           <div class="col-3 col-user-popover-th">备注</div>');
            tmpHTMLArr.push('           <div class="col">');
            tmpHTMLArr.push('               <input type="text" class="form-control-plaintext" id="txt_User_Popover_Comment" value="" placeholder="点击添加备注"/>');
            tmpHTMLArr.push('           </div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="row">');
            tmpHTMLArr.push('           <div class="col-3 col-user-popover-th">地区</div>');
            tmpHTMLArr.push('           <div class="col col-user-popover-address"></div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="row row-buttons">');
            tmpHTMLArr.push('           <div class="col text-right">');
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-add-friend" title="加为好友" data-target="">');
            tmpHTMLArr.push('                   <i class="far fa-plus-square"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-share-friend" title="推荐给朋友" data-target="">');
            tmpHTMLArr.push('                   <i class="far fa-share-square"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-send-msg" title="开始聊天" data-target="">');
            tmpHTMLArr.push('                   <i class="far fa-comment"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('           </div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('</div>');
            container.append($(tmpHTMLArr.join('')));
            $('.user-popover-wrap .btn-user-popover').on('click', circleChat_ClickUserPopBtn);
        }

        if (current.accecpt) {
            $('.user-popover-wrap .btn-user-popover.btn-add-friend').hide();
            $('.user-popover-wrap .btn-user-popover.btn-share-friend').show();
            $('.user-popover-wrap .btn-user-popover.btn-send-msg').show();
        } else {
            $('.user-popover-wrap .btn-user-popover.btn-add-friend').show();
            $('.user-popover-wrap .btn-user-popover.btn-share-friend').hide();
            $('.user-popover-wrap .btn-user-popover.btn-send-msg').hide();
        }

        $('.user-popover-wrap').show();
        $('.user-popover-wrap .user-popover-name').text(current.userName);
        if (typeof current.gender != 'undefined') {
            if (current.gender == '1') {
                $('.user-popover-wrap .fa-female').hide();
                $('.user-popover-wrap .fa-male').show();
            } else {
                $('.user-popover-wrap .fa-female').show();
                $('.user-popover-wrap .fa-male').hide();
            }
        } else {
            $('.user-popover-wrap .fa-female').hide();
            $('.user-popover-wrap .fa-male').hide();
        }

        $('.user-popover-wrap .user-popover-symbol').text(current.userId);
        $('.user-popover-wrap .user-popover-header').attr('src', current.header);
        $('.user-popover-wrap #txt_User_Popover_Comment').val(current.comment);
        $('.user-popover-wrap .col-user-popover-address').text(current.address);
        $('.user-popover-wrap .btn-user-popover').attr('data-target', current.userId);

        var tmpTop = eventObj.pageY - container.offset().top;
        var tmpLeft = eventObj.pageX - container.offset().left - $('.user-popover-wrap').width();
        $('.user-popover-wrap').css('top', tmpTop + 'px');
        $('.user-popover-wrap').css('left', tmpLeft + 'px');
    }
};

function circleChat_ClickUserPopBtn(eventObj) {
    var btn = $(eventObj.currentTarget);
    var userId = btn.attr('data-target');
    if (btn.hasClass('btn-add-friend')) {
        _showGlobalMessage('添加好友，即将上线，敬请体验!', 'info', 'alert_AddFriend_info');
    } else if (btn.hasClass('btn-share-friend')) {
        _showGlobalMessage('推荐朋友给其他人，即将上线，敬请体验!', 'info', 'alert_ShareFriend_info');
    } else if (btn.hasClass('btn-send-msg')) {
        var chat = circleGetChatByChatterId(userId);
        if (chat == null) {
            var userObj = circleGetUserObj(userId);
            _gCircleCurrentChat = { chatId: '', chatter: userObj, chatterId: userId, type: userObj.type, msgs: [] };
            webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [userId], values: {}, batch: [], id: '' });
        } else {
            circleChat_SwitchChat(chat.chatId);
        }
    }
};

function circleChat_ShowAddToGroupPop(eventObj) {
    var userId = $(eventObj.currentTarget).attr('data-target');
    _showGlobalMessage('创建讨论组，即将上线，敬请体验!', 'info', 'alert_AddFriend_info');
};

function circleInitEvents_Address() {
    $('.row-circle-user-list-item').on('click', circleAddress_ClickItem);
};

function circleAddress_ClickItem(eventObj) {
    var currentTarget = (eventObj != null ? $(eventObj.currentTarget) : $('.row-circle-user-list-item[data-target="-2"]'));
    var userId = currentTarget.attr('data-target');
    $('.row-circle-user-list-item').removeClass('active');
    currentTarget.addClass('active');
    if (userId == '-2') {
        webSocketSend('Action_Get_RelationsAcceptableList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
        $('.row-circle-message-part-2').hide();
        $('.row-circle-message-part-1').show();
        _gCircleCurrentAddress = { "userName": '新朋友', "header": 'image/tmpheader.jpg', "userId": '-2', type: 'guest' };
    } else if (userId == '-3') {
        webSocketSend('Action_Get_ChannelList', { symbol: '', msg: '', targets: [], values: {}, batch: [], id: '' });
        $('.row-circle-message-part-2').hide();
        $('.row-circle-message-part-1').show();
        _gCircleCurrentAddress = { "userName": '频道', "header": 'image/tmpheader.jpg', "userId": '-3', type: 'channel' };
    } else {
        if (circleGetUserType(userId) == 'group') {
            $('.row-circle-message-part-1').show();
            $('.row-circle-message-part-2').hide();
            _gCircleCurrentAddress = circleGetUserObj(userId);
            circleAddress_BuildGroupDetail(userId);
        } else {
            _gCircleCurrentAddress = circleGetUserObj(userId);
            circleAddress_BuildUserDetail(userId);
        }
    }

    circleUpdateContentLabel_Address();
}

function circleAddress_BuildGuestList() {
    var container = $('.container-circle-message-history');
    var guestes = circleGetUserObjGuest();
    var tmpHTMLArr = [];
    for (var i = 0; i < guestes.length; i++) {
        tmpHTMLArr.push('<div class="row row-circle-address-new-friend-item" data-target="' + guestes[i].userId + '">');
        tmpHTMLArr.push('   <div class="col-1 col-new-friend-header">');
        tmpHTMLArr.push('       <img class="img-fluid circle-address-new-friend-header" src="' + guestes[i].header + '" data-target="' + guestes[i].userId + '">');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col col-new-friend-content">');
        tmpHTMLArr.push('       <div class="container container-fluid">');
        tmpHTMLArr.push('           <div class="row">');
        tmpHTMLArr.push('               <div class="col">' + guestes[i].userName + '</div>');
        tmpHTMLArr.push('           </div>');
        for (var j = 0; j < 2 && j < guestes[i].msg.length; j++) {
            tmpHTMLArr.push('           <div class="row">');
            tmpHTMLArr.push('               <div class="col text-999999">' + guestes[i].msg[j] + '</div>');
            tmpHTMLArr.push('           </div>');
        }

        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-1 d-flex align-items-center col-new-friend-accept">');
        tmpHTMLArr.push('       <button type="button" class="btn btn-success btn-sm btn-new-friend-accept" data-target="' + guestes[i].userId + '">接受</button>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    container.empty();
    container.append($(tmpHTMLArr.join('')));
    $('.circle-address-new-friend-header').on('click', function (eventObj) {
        var userObj = circleGetUserObj($(eventObj.currentTarget).attr('data-target'));
        circleAddress_BuildUserDetail(userObj);
    });

    $('.btn-new-friend-accept').on('click', function (eventObj) {
        var userObj = circleGetUserObj($(eventObj.currentTarget).attr('data-target'));
        _gCircleCurrentGuestId = userObj.accecptId;
        webSocketSend('Action_Set_AcceptFriend', { id: _gCircleCurrentGuestId });
    });
};

function circleAddress_BuildUserDetail(userId) {
    var userObj = circleGetUserObj(userId);
    if (userObj != null) {
        var titleLab = $('.label-circle-message-history-user');
        var detailWrap = $('.row-circle-message-part-2');
        var listWrap = $('.row-circle-message-part-1');
        detailWrap.show();
        listWrap.hide();
        if (userObj.accecpt) {
            var currTxt = titleLab.text();
            titleLab.html('<i class="fas fa-arrow-left"></i>');
            titleLab.css('cursor', 'pointer');
            titleLab.on('click', function () {
                listWrap.show();
                detailWrap.hide();
                titleLab.empty();
                titleLab.text(currTxt);
                titleLab.unbind();
                titleLab.css('cursor', 'default');
            });

        } else {
            titleLab.html();
        }

        if ($('.container-circle-friend-item-detail').length == 0) {
            var tmpHTMLArr = [];
            tmpHTMLArr.push('<div class="container-fluid container-circle-friend-item-detail">');
            tmpHTMLArr.push('   <div class="row" style="padding-bottom: 15px;">');
            tmpHTMLArr.push('       <div class="col">');
            tmpHTMLArr.push('           <p><span class="s-circle-friend-item-detail-name"></span><i class="fas fa-female"></i><i class="fas fa-male"></i></p>');
            tmpHTMLArr.push('           <p class="p-circle-friend-item-detail-note"></p>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="col-3 col-circle-friend-item-detail-header">');
            tmpHTMLArr.push('           <img class="img-fluid circle-friend-item-detail-header" src="">');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="row row-circle-friend-item-detail-comment">');
            tmpHTMLArr.push('       <div class="col-3 col-circle-friend-item-detail-th">备  注 : </div>');
            tmpHTMLArr.push('       <div class="col"><input type="text" class="form-control-plaintext" id="txt_Circle_Friend_Item_Detail_Comment" value="" placeholder="点击添加备注"/></div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="row">');
            tmpHTMLArr.push('       <div class="col-3 col-circle-friend-item-detail-th">地  区 : </div>');
            tmpHTMLArr.push('       <div class="col col-circle-friend-item-detail-address"></div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="row row-circle-friend-item-detail-symbol">');
            tmpHTMLArr.push('       <div class="col-3 col-circle-friend-item-detail-th">用户名 : </div>');
            tmpHTMLArr.push('       <div class="col col-circle-friend-item-detail-symbol"></div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="row">');
            tmpHTMLArr.push('       <div class="col col-circle-friend-item-detail-message">');
            tmpHTMLArr.push('<div class="container-fluid">');
            for (var i = 0; i < userObj.msg.length; i++) {
                tmpHTMLArr.push('   <div class="row">');
                tmpHTMLArr.push('       <div class="col">' + userObj.msg[i] + '</div>');
                tmpHTMLArr.push('   </div>');
            }

            tmpHTMLArr.push('</div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="row" style="padding-top: 15px;">');
            tmpHTMLArr.push('       <div class="col text-center col-circle-friend-item-detail-talk">');
            tmpHTMLArr.push('           <button type="button" class="btn btn-success btn-sm btn-circle-friend-item-detail-talk" data-target="' + userObj.userId + '">发消息</button>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="col text-right col-circle-friend-item-detail-reply">');
            tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-friend-item-detail-replay" title="回复" data-target="' + userObj.userId + '">');
            tmpHTMLArr.push('               <i class="fas fa-reply-all"></i>');
            tmpHTMLArr.push('           </button>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('</div>');
            $('.row-circle-message-part-2 .col').append($(tmpHTMLArr.join('')));
            $('.btn-circle-friend-item-detail-talk').on('click', function () {
                var userId = $(arguments[0].currentTarget).attr('data-target');
                var chat = circleGetChatByChatterId(userId);
                if (chat == null) {
                    _gCircleCurrentChat = { chatId: '', chatter: userObj, chatterId: userObj.userId, type: userObj.type, msgs: [] };
                    webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [userId], values: {}, batch: [], id: '' });
                } else {
                    circleChat_SwitchChat(chat.chatId);
                }
            });

            $('.btn-circle-friend-item-detail-replay').on('click', function () {
                circleAddress_OpenRelpayPop($(arguments[0].currentTarget).attr('data-target'));
            });
        }

        if (userObj.gender == '1') {
            $('.container-circle-friend-item-detail .fa-female').hide();
            $('.container-circle-friend-item-detail .fa-male').show();
        } else {
            $('.container-circle-friend-item-detail .fa-female').show();
            $('.container-circle-friend-item-detail .fa-male').hide();
        }

        $('.container-circle-friend-item-detail .s-circle-friend-item-detail-name').text(userObj.userName);
        var tmpImg = (userObj.header != 'image/tmpheader.jpg' ? _getRequestURL(_gURLMapping.account.getuserheaderImg, { uname: userObj.userId }) : userObj.header);
        $('.container-circle-friend-item-detail .circle-friend-item-detail-header').attr('src', tmpImg);
        $('.container-circle-friend-item-detail .p-circle-friend-item-detail-note').text(userObj.note);
        $('.container-circle-friend-item-detail #txt_Circle_Friend_Item_Detail_Comment').val(userObj.comment);
        $('.container-circle-friend-item-detail .col-circle-friend-item-detail-address').text(userObj.address);
        $('.container-circle-friend-item-detail .col-circle-friend-item-detail-symbol').text(userObj.userId);

        if (!userObj.accecpt && userObj.accecptId != '') {
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk').hide();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply').show();
        } else {
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk').show();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply').hide();
        }
    }
};

function circleAddress_OpenRelpayPop(guestId) {
    if ($('#modal_Circle_Guest_Replay').length == 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="modal" id="modal_Circle_Guest_Replay" tabindex="-1" role="dialog">');
        tmpHTMLArr.push('   <div class="modal-dialog" role="document">');
        tmpHTMLArr.push('       <div class="modal-content">');
        tmpHTMLArr.push('           <div class="modal-header" style="border:none;">');
        tmpHTMLArr.push('               <h5 class="modal-title text-14">回复</h5>');
        tmpHTMLArr.push('               <button type="button" class="close text-14" data-dismiss="modal" aria-label="Close">');
        tmpHTMLArr.push('                   <span aria-hidden="true">&times;</span>');
        tmpHTMLArr.push('               </button>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('           <div class="modal-body">');
        tmpHTMLArr.push('               <form> ');
        tmpHTMLArr.push('                   <div class="form-group no-margin">');
        tmpHTMLArr.push('                       <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('               </form> ');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('           <div class="modal-footer" style="border:none;">');
        tmpHTMLArr.push('               <button type="button" class="btn btn-primary btn-sm btn-replay-msg-send" style="padding: 0px 10px;" data-target="' + guestId + '">确定</button>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-secondary btn-sm" style="padding: 0px 10px;" data-dismiss="modal">取消</button>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('body').append(tmpHTMLArr.join(''));
        $('#modal_Circle_Guest_Replay .btn-replay-msg-send').on('click', function () {
            _showGlobalMessage('暂时无法向访问者回复信息，敬请期待!', 'info', 'alert_ReplayGuest_Info');
            $('#modal_Circle_Guest_Replay').modal('hide');
        });
    }

    $('#modal_Circle_Guest_Replay').modal('show');
};

function circleAddress_BuildGroupDetail(groupId) {
    var currGroup = circleGetUserObj(groupId);
    var container = $('.container-circle-message-history');
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="row row-circle-address-group-items">');
    for (var i = 0; i < currGroup.items.length; i++) {
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <div class="card">');
        tmpHTMLArr.push('           <img class="card-img-top circle-address-group-item-header"  src="' + currGroup.items[i].header + '" data-target="' + currGroup.items[i].userId + '">');
        tmpHTMLArr.push('           <div class="card-body">');
        tmpHTMLArr.push('           <p>' + currGroup.items[i].userName + '</p>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
    }

    tmpHTMLArr.push('</div>');
    tmpHTMLArr.push('<div class="row row-circle-address-group-button">');
    tmpHTMLArr.push('   <div class="col text-center align-self-end">');
    tmpHTMLArr.push('       <button type="button" class="btn btn-success btn-sm btn-circle-address-group-item-talk" data-target="' + groupId + '">发消息</button>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    container.empty();
    container.append($(tmpHTMLArr.join('')));
    var tmpHeight = $('.col-circle-message-history').height() - $('.row-circle-address-group-items').height() - 35;
    $('.row-circle-address-group-button').height((tmpHeight > 35 ? tmpHeight : 35));
    $('.circle-address-group-item-header').on('click', circleAddress_BuildGroupItemPop);
    $('.btn-circle-address-group-item-talk').on('click', function () {
        var groupId = $(arguments[0].currentTarget).attr('data-target');
        var chat = circleGetChatByChatterId(groupId);
        if (chat == null) {
            _gCircleCurrentChat = { chatId: '', chatter: currGroup, chatterId: groupId, type: currGroup.type, msgs: [] };
            webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [userId], values: {}, batch: [], id: '' });
        } else {
            circleChat_SwitchChat(chat.chatId);
        }
    });
};

function circleAddress_BuildGroupItemPop(eventObj) {
    var target = $(eventObj.currentTarget);
    var userId = target.attr('data-target');
    var userObj = circleGetUserObj(userId);
    var container = $('.container-circle-message-history');
    var tmpWrap = $('.group-item-popover-wrap');
    if (tmpWrap.length <= 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="group-item-popover-wrap">');
        tmpHTMLArr.push('<div class="container-fluid container-circle-group-user-detail">');
        tmpHTMLArr.push('   <div class="row" style="padding-bottom: 15px;">');
        tmpHTMLArr.push('       <div class="col">');
        tmpHTMLArr.push('           <p><span class="s-circle-group-user-detail-name"></span><i class="fas fa-female"></i><i class="fas fa-male"></i></p>');
        tmpHTMLArr.push('           <p class="p-circle-group-user-detail-note"></p>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('       <div class="col-3 col-circle-group-user-detail-header">');
        tmpHTMLArr.push('           <img class="img-fluid circle-group-user-detail-header" src="">');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="row" style="padding-top: 15px; border-top:solid 1px rgb(231,231,231);">');
        tmpHTMLArr.push('       <div class="col-3 col-circle-group-user-detail-th">备  注 : </div>');
        tmpHTMLArr.push('       <div class="col"><input type="text" class="form-control-plaintext" id="txt_Circle_Group_User_Detail_Comment" value="" placeholder="点击添加备注"/></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="row">');
        tmpHTMLArr.push('       <div class="col-3 col-circle-group-user-detail-th">地  区 : </div>');
        tmpHTMLArr.push('       <div class="col col-circle-group-user-detail-address"></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="row" style="padding-bottom: 15px; border-bottom:solid 1px rgb(231,231,231);">');
        tmpHTMLArr.push('       <div class="col-3 col-circle-group-user-detail-th">用户名 : </div>');
        tmpHTMLArr.push('       <div class="col col-circle-group-user-detail-symbol"></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="row" style="padding-top: 15px;">');
        tmpHTMLArr.push('       <div class="col text-right">');
        tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-group-user-popover" title="推荐给朋友"><i class="far fa-share-square"></i></button>');
        tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-group-user-popover" title="开始聊天"><i class="far fa-comment"></i></button>');
        tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-group-user-popover" title="加为好友"><i class="far fa-plus-square"></i></button>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        tmpHTMLArr.push('</div>');
        container.append($(tmpHTMLArr.join('')));
        $('.btn-circle-group-user-popover').on('click', circleClickGroupItemPopBtn);
        tmpWrap = $('.group-item-popover-wrap');
    }

    tmpWrap.show();
    if (userObj.gender == '1') {
        $('.container-circle-group-user-detail .fa-female').hide();
        $('.container-circle-group-user-detail .fa-male').show();
    } else {
        $('.container-circle-group-user-detail .fa-female').show();
        $('.container-circle-group-user-detail .fa-male').hide();
    }

    $('.container-circle-group-user-detail .s-circle-group-user-detail-name').text(userObj.userName);
    $('.container-circle-group-user-detail .circle-group-user-detail-header').attr('src', userObj.header);
    $('.container-circle-group-user-detail .p-circle-group-user-detail-note').text(userObj.note);
    $('.container-circle-group-user-detail #txt_Circle_Group_User_Detail_Comment').val(userObj.comment);
    $('.container-circle-group-user-detail .col-circle-group-user-detail-address').text(userObj.address);
    $('.container-circle-group-user-detail .col-circle-group-user-detail-symbol').text(userObj.userId);
    $('.container-circle-group-user-detail .btn-circle-group-user-popover').attr('data-target', userId);

    if (userObj.isnew == '1') {
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-share-square').parent().hide();
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-comment').parent().hide();
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-plus-square').parent().show();
    } else {
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-share-square').parent().show();
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-comment').parent().show();
        $('.container-circle-group-user-detail .btn-circle-group-user-popover .fa-plus-square').parent().hide();
    }

    var tmpTop = eventObj.pageY - container.offset().top + 5;
    var tmpLeft = eventObj.pageX - container.offset().left + 15;
    if (tmpTop + tmpWrap.height() > $('.col-circle-message-history').height()) {
        tmpTop -= tmpWrap.height();
    }

    if (tmpLeft + tmpWrap.width() > $('.col-circle-message-history').width()) {
        tmpLeft -= tmpWrap.width();
    }

    tmpWrap.css('top', tmpTop + 'px');
    tmpWrap.css('left', tmpLeft + 'px');
};

function circleAddress_ClickGroupItemPopBtn(eventObj) {
    $('.group-item-popover-wrap').hide();
    var target = $(eventObj.currentTarget);
    var action = $(target.find('svg'));
    if (action.hasClass('fa-share-square')) {
        _showGlobalMessage('暂时无法向其他人推荐好友，敬请期待!', 'info', 'alert_ShareFriend_Info');
    } else if (action.hasClass('fa-comment')) {
        var userId = target.attr('data-target');
        var chat = circleGetChatByChatterId(userId);
        if (chat == null) {
            var userObj = circleGetUserObj(userId);
            _gCircleCurrentChat = { chatId: '', chatter: userObj, chatterId: userId, type: userObj.type, msgs: [] };
            webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [userId], values: {}, batch: [], id: '' });
        } else {
            circleChat_SwitchChat(chat.chatId);
        }
    } else if (action.hasClass('fa-plus-square')) {
        _showGlobalMessage('暂时无法从讨论组中添加好友，敬请期待!', 'info', 'alert_AddFriendFromGroup_Info');
    }
};

function circleAddress_AcceptGuest(doc) {
    if ($(doc.find('executed')[0]).text() == 'true') {
        var tmpBtn = $('.btn-new-friend-accept[data-target="' + _gCircleCurrentGuestId + '"]');
        if (tmpBtn.length > 0) {
            var userObj = circleGetUserObj(_gCircleCurrentGuestId);
            userObj.accecpt = true;
            userObj.accecptId = '';
            $('.row-circle-address-new-friend-item[data-target="' + _gCircleCurrentGuestId + '"]').remove();
        }
    } else {
        _showGlobalMessage('暂时无法通过好友申请，请联系管理员或重试!', 'warning', 'alert_AcceptGuest_Error');
    }
};

function circleAddress_BuildChannelList() {
    var channels = circleGetUserObjByType('channel');
    var container = $('.container-circle-message-history');
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="row row-circle-address-channle-items">');
    for (var i = 0; i < channels.length; i++) {
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <div class="card">');
        tmpHTMLArr.push('           <img class="card-img-top circle-address-channle-header"  src="' + channels[i].header + '" data-target="' + channels[i].userId + '">');
        tmpHTMLArr.push('           <div class="card-body">');
        tmpHTMLArr.push('           <p>' + channels[i].userName + '</p>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
    }

    tmpHTMLArr.push('</div>');
    container.empty();
    container.append($(tmpHTMLArr.join('')));
    $('.circle-address-channle-header').on('click', circleBuildChannelPop);
};

function circleInitEvents_Favor() {

};

function circleInitData_Chats(doc) {
    var hasSys = false;
    if (typeof doc.attr('type') != 'undefined' && doc.attr('type') == 'error') {
        for (var i = 0; i < _gCircleChats.length; i++) {
            if (_gCircleChats[i].chatterId == _gCircleSystemId) {
                hasSys = true;
                break;
            }
        }

        if (!hasSys) {
            _gCircleChats.push({
                chatId: '',
                chatterId: _gCircleSystemId,
                chatter: circleGetUserObj(_gCircleSystemId),
                type: 'user',
                msgs: []
            });
        }

        circleBuildList_Chat();
        circleBuildContent_Chat();
        circleAdjust_Chat();
        circleInitEvents_Chat();
    } else {
        var items = doc.find('item');
        var itemObj, exist, chatter, userId, userType, chatId, chat;
        var unknowUsers = [];
        for (var i = 0; i < items.length; i++) {
            exist = false;
            itemObj = $(items[i]);
            userId = itemObj.attr('uid');
            chatId = itemObj.attr('symbol');
            chat = circleGetChatByChatId(chatId);
            chat = (chat == null ? circleGetChatByChatterId(userId) : chat);
            userType = circleGetUserType(userId);
            chatter = circleGetUserObj(userId);
            if (chat == null) {
                _gCircleChats.push({
                    chatId: chatId,
                    chatterId: userId,
                    chatter: chatter,
                    type: userType,
                    msgs: []
                });
            } else {
                chat.chatId = chatId;
                chat.chatterId = userId;
                chat.chatter = chatter;
                chat.type = userType;
            }

            if (userId == _gCircleSystemId) {
                hasSys = true;
            }

            if (chatter == null) {
                unknowUsers.push(userId);
            }
        }

        if (hasSys) {
            if (unknowUsers.length > 0) {
                webSocketSend('Action_Get_BatchArrProfile', { symbol: '', msg: '', targets: [], values: {}, batch: unknowUsers, id: '' });
            } else {
                circleBuildList_Chat();
                circleBuildContent_Chat();
                circleAdjust_Chat();
                circleInitEvents_Chat();
                circleChat_SwitchChat();
            }
        } else {
            webSocketSend('Action_Set_NewDialog', { symbol: '', msg: '', targets: [_gCircleSystemId], values: {}, batch: [], id: '' });
        }
    }
};

function circleInitData_Address() {
    var groups = { id: 'group', title: '讨论组', userId: "-4", subs: [] };
    var channels = { id: 'channel', title: '频道', userId: "-3", subs: [{ userName: "频道", userId: "-3", header: "image/tmpheader.jpg" }] };
    _gCircleGroups = [
        { id: 'guest', title: '新朋友', userId: "-2", subs: [{ userName: "新朋友", userId: "-2", header: "image/tmpheader.jpg" }] },
        channels,
        groups
    ];

    var friends = [];
    for (var i = 0; i < _gCircleUsers.length; i++) {
        if (_gCircleUsers[i].accecpt && _gCircleUsers[i].type == 'user') {
            friends.push(_gCircleUsers[i]);
        } else if (_gCircleUsers[i].type == 'group') {
            groups.subs.push(_gCircleUsers[i]);
        }
    }

    _gCircleGroups = _gCircleGroups.concat(_GroupSortArray(friends, 'userName'));
};

function circleInitData_Favor(doc) {

};

function circleUpdateContentLabel_Chat() {
    var nameLb = $('.label-circle-message-history-user');
    nameLb.text(_gCircleCurrentChat.chatter.userName);
    nameLb.attr('data-target', _gCircleCurrentChat.chatter.userId);
    nameLb.attr('data-type', _gCircleCurrentChat.chatter.type);
    nameLb.attr('data-chat', _gCircleCurrentChat.chatId);
    var detailBtn = $('.col-circle-message-history-button .btn.btn-sm');
    detailBtn.attr('data-target', _gCircleCurrentChat.chatter.userId);
    detailBtn.attr('data-type', _gCircleCurrentChat.chatter.type);
    detailBtn.attr('data-chat', _gCircleCurrentChat.chatId);
};

function circleUpdateContentLabel_Address() {
    var nameLb = $('.label-circle-message-history-user');
    nameLb.text(_gCircleCurrentAddress.userName);
    nameLb.attr('data-target', _gCircleCurrentAddress.userId);
    nameLb.attr('data-type', _gCircleCurrentAddress.type);
    nameLb.attr('data-chat', '');
    var detailBtn = $('.col-circle-message-history-button .btn.btn-sm');
    nameLb.attr('data-target', _gCircleCurrentAddress.userId);
    nameLb.attr('data-type', _gCircleCurrentAddress.type);
    nameLb.attr('data-chat', '');
};

function circleUpdateContentLabel_Favor() {
};

function circleBuildChannelPop(eventObj) {
    var target = $(eventObj.currentTarget);
    var channelId = target.attr('data-target');
    var current = circleGetUserObj(channelId);
    var container = (target[0].tagName == 'IMG' ? $('.container-circle-message-history') : $('.wrap-circle-message'));
    if ($('.channel-popover-wrap').length <= 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="channel-popover-wrap">');
        tmpHTMLArr.push('   <div class="container-fluid">');
        tmpHTMLArr.push('       <div class="row">');
        tmpHTMLArr.push('           <div class="col">');
        tmpHTMLArr.push('               <p class="channel-name"></p>');
        tmpHTMLArr.push('               <p class="channel-code"></p>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('           <div class="col" style="width: fit-content;">');
        tmpHTMLArr.push('               <img class="rounded channel-header"  src="">');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('       <div class="row">');
        tmpHTMLArr.push('           <div class="col col-channel-detail"><p></p></div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('       <div class="row">');
        tmpHTMLArr.push('           <div class="col text-right">');
        tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-circle-address-channel-popover" title="分享频道"><i class="far fa-share-square"></i></button>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-circle-address-channel-popover" title="历史数据"><i class="fas fa-history"></i></button>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-circle-address-channel-popover" title="进入频道"><i class="fas fa-sign-in-alt"></i></button>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        container.append($(tmpHTMLArr.join('')));
        $('.btn-circle-address-channel-popover').on('click', circleClickChannelPopBtn);
    }

    $('.channel-popover-wrap').show();
    $('.channel-popover-wrap .channel-name').text(current.userName);
    $('.channel-popover-wrap .channel-code').text('频道号: ' + current.userId);
    $('.channel-popover-wrap .channel-header').attr('src', current.header);
    $('.channel-popover-wrap .col-channel-detail p').text(current.comment);
    $('.btn-circle-address-channel-popover').attr('data-target', current.userId);

    container.append($('.channel-popover-wrap'));
    var tmpTop = eventObj.pageY - container.offset().top + 5;
    var tmpLeft = eventObj.pageX - container.offset().left + (container.hasClass('wrap-circle-message') ? 0 : 15);
    if (tmpTop + $('.channel-popover-wrap').height() > $('.col-circle-message-history').height()) {
        tmpTop -= $('.channel-popover-wrap').height();
    }

    if (tmpLeft + $('.channel-popover-wrap').width() > $('.col-circle-message-history').width()) {
        tmpLeft -= $('.channel-popover-wrap').width();
    }

    $('.channel-popover-wrap').css('top', tmpTop + 'px');
    $('.channel-popover-wrap').css('left', tmpLeft + 'px');
};

function circleClickChannelPopBtn(eventObj) {
    $('.channel-popover-wrap').hide();
    var target = $(eventObj.currentTarget);
    var action = $($(eventObj.currentTarget).find('svg'));
    if (action.hasClass('fa-share-square')) {
        alert('Share Channel with Other People!');
    } else if (action.hasClass('fa-history')) {
        alert('History of Channel!');
    } else if (action.hasClass('fa-sign-in-alt')) {
        circleSwitchToTalk(target.attr('data-target'), 'channel');
    }
};

function circleGetChatByChatId(chatId) {
    var tmpObj = null;
    for (var i = 0; i < _gCircleChats.length; i++) {
        if (_gCircleChats[i].chatId == chatId) {
            tmpObj = _gCircleChats[i];
            break;
        }
    }

    return tmpObj;
};

function circleGetChatByChatterId(chatterId) {
    var tmpObj = null;
    for (var i = 0; i < _gCircleChats.length; i++) {
        if (_gCircleChats[i].chatterId == chatterId) {
            tmpObj = _gCircleChats[i];
            break;
        }
    }

    return tmpObj;
};

function circleGetUserType(userId) {
    return userId == _gCircleSystemId ? 'user' : _checkPhoneNumber(userId) ? 'user' : _checkGUID(userId) ? 'group' : 'channel';
};

function circleGetUserObj(userId) {
    var tmpObj = null;
    for (var i = 0; i < _gCircleUsers.length; i++) {
        if (_gCircleUsers[i].userId == userId && _gCircleUsers[i].type == circleGetUserType(userId)) {
            tmpObj = _gCircleUsers[i];
            break;
        }
    }

    return tmpObj;
};

function circleGetUserObjByType(type) {
    var tmpArr = [];
    for (var i = 0; i < _gCircleUsers.length; i++) {
        if (_gCircleUsers[i].type == type) {
            tmpArr.push(_gCircleUsers[i]);
        }
    }

    return tmpArr;
};

function circleGetUserObjGuest() {
    var tmpArr = [];
    for (var i = 0; i < _gCircleUsers.length; i++) {
        if (_gCircleUsers[i].accecpt == false && _gCircleUsers[i].accecptId != '') {
            tmpArr.push(_gCircleUsers[i]);
        }
    }

    return tmpArr;
};

function circleUpdateUserList(doc) {
    var items = doc.find('row');
    var itemObj = null, userId, tmpUser, type;
    for (var i = 0; i < items.length; i++) {
        itemObj = $(items[i]);
        userId = typeof itemObj.attr('uid') == 'undefined' ? '' : itemObj.attr('uid');
        if (userId != '') {
            type = circleGetUserType(userId);
            tmpUser = circleGetUserObj(userId);
            if (tmpUser) {
                circleUpdateUserInfo(itemObj, tmpUser);
            } else {
                circleCreateAddUser(itemObj, type);
            }
        }
    }

    for (var i = 0; i < _gCircleUsers.length; i++) {
        if (_gCircleUsers[i].type == 'group') {
            for (var j = 0; j < _gCircleUsers[i].items.length; j++) {
                _gCircleUsers[i].items[j] = circleGetUserObj(_gCircleUsers[i].items[j].userId);
            }
        }
    }

    for (var i = 0; i < _gCircleChats.length; i++) {
        if (_gCircleChats[i].chatter == null) {
            _gCircleChats[i].chatter = circleGetUserObj(_gCircleChats[i].chatterId);
        }
    }
};

function circleCreateAddUser(itemObj, type) {
    var newUser = null;
    if (type == 'group') {
        newUser = circleCreateUser_Group(itemObj);
    } else if (type == 'channel') {
        newUser = circleCreateUser_Channel(itemObj);
    } else {
        newUser = circleCreateUser_User(itemObj);
    }

    _gCircleUsers.push(newUser);
};

function circleCreateUser_User(itemObj) {
    var address = [];
    address.push(itemObj.attr('country') == '' ? 'China' : itemObj.attr('country'));
    address.push(itemObj.attr('state') == '' ? '' : itemObj.attr('state'));
    address.push(itemObj.attr('city') == '' ? '' : itemObj.attr('city'));
    address.push(itemObj.attr('schoolmap') == '' ? '' : itemObj.attr('schoolmap'));
    var newUser = {
        "userName": itemObj.attr('nickname') == '' ? itemObj.attr('uid') : itemObj.attr('nickname'),
        "header": itemObj.attr('header') == '' ? 'image/tmpheader.jpg' : itemObj.attr('header'),
        "userId": itemObj.attr('uid'),
        "msg": typeof itemObj.attr('msg') == 'undefined' ? '' : itemObj.attr('msg'),
        "accecpt": typeof itemObj.attr('accecpt') == 'undefined' ? true : itemObj.attr('accecpt') == '1' ? true : false,
        "accecptId": '',
        "gender": itemObj.attr('sex') == '1' ? '1' : '0',
        "address": address.join(' '),
        "comment": typeof itemObj.attr('comment') == 'undefined' ? '' : itemObj.attr('comment'),
        "note": typeof itemObj.attr('note') == 'undefined' ? '' : itemObj.attr('note'),
        "board": '',
        "type": 'user',
        "items": []
    };

    return newUser;
};

function circleCreateUser_Guest(itemObj) {
    var newUser = {
        "userName": '',
        "header": '',
        "userId": itemObj.attr('puname'),
        "msg": typeof itemObj.attr('msg') == 'undefined' ? '' : itemObj.attr('msg'),
        "accecpt": itemObj.attr('accecpt') == '1' ? true : false,
        "accecptId": typeof itemObj.attr('id') == 'undefined' ? '' : itemObj.attr('id'),
        "gender": '',
        "address": '',
        "comment": '',
        "note": '',
        "type": 'user'
    };

    return newUser
};

function circleCreateUser_Group(itemObj) {
    var userItems = itemObj.find('item');
    var users = [];
    var groupName = [];
    for (var i = 0; i < userItems.length; i++) {
        var newUser = circleCreateUser_User($(userItems[i]));
        users.push(newUser);
        groupName.push(newUser.userName);
    }

    var newGroup = {
        "userName": itemObj.attr('nickname') != '' ? itemObj.attr('nickname') : groupName.join(','),
        "header": '',
        "userId": itemObj.attr('uid'),
        "msg": '',
        "accecpt": true,
        "accecptId": '',
        "gender": '',
        "address": '',
        "comment": typeof itemObj.attr('comment') == 'undefined' ? '' : itemObj.attr('comment'),
        "note": '',
        "board": typeof itemObj.attr('board') == 'undefined' ? '' : itemObj.attr('board'),
        "type": 'group',
        "items": []
    };

    return newGroup;
};

function circleCreateUser_Channel(itemObj) {
    var newChannel = {
        "userName": itemObj.attr('nickname') == '' ? itemObj.attr('uid') : itemObj.attr('nickname'),
        "header": itemObj.attr('header') == '' ? 'image/tmpheader.jpg' : itemObj.attr('header'),
        "userId": itemObj.attr('uid'),
        "msg": '',
        "accecpt": true,
        "accecptId": '',
        "gender": '',
        "address": '',
        "comment": typeof itemObj.attr('comment') == 'undefined' ? '' : itemObj.attr('comment'),
        "note": '',
        "board": '',
        "type": 'channel',
        "items": []
    };

    return newChannel;
};

function circleUpdateUserInfo(itemObj, currUser) {
    if (currUser.type == 'group') {
        circleUpdateUserInfo_Group(itemObj, currUser);
    } else if (currUser.type == 'channel') {
        circleUpdateUserInfo_Channel(itemObj, currUser);
    } else {
        circleUpdateUserInfo_User(itemObj, currUser);
    }
};

function circleUpdateUserInfo_User(itemObj, currUser) {
    var address = [];
    address.push(typeof itemObj.attr('state') == 'undefined' ? 'China' : itemObj.attr('country') == '' ? 'China' : itemObj.attr('country'));
    address.push(typeof itemObj.attr('state') == 'undefined' ? '' : itemObj.attr('state'));
    address.push(typeof itemObj.attr('city') == 'undefined' ? '' : itemObj.attr('city'));
    address.push(typeof itemObj.attr('schoolmap') == 'undefined' ? '' : itemObj.attr('schoolmap'));
    currUser["userName"] = itemObj.attr('nickname') == '' ? currUser["userId"] : itemObj.attr('nickname');
    currUser["header"] = itemObj.attr('header') == '' ? 'image/tmpheader.jpg' : itemObj.attr('header');
    //newUser["userId"] = itemObj.attr('uid'),
    //newUser["msg"] = typeof itemObj.attr('msg') == 'undefined' ? '' : itemObj.attr('msg'),
    currUser["accecpt"] = (typeof itemObj.attr('accecpt') == 'undefined' ? currUser["accecpt"] : itemObj.attr('accecpt') == '1' ? true : false);
    //currUser["accecptId"] = typeof itemObj.attr('id') == 'undefined' ? currUser["accecptId"] : itemObj.attr('msg'),
    currUser["gender"] = itemObj.attr('sex') == '1' ? '1' : '0';
    currUser["address"] = address.join(' ');
    currUser["comment"] = typeof itemObj.attr('comment') == 'undefined' ? '' : itemObj.attr('comment');
    currUser["note"] = typeof itemObj.attr('note') == 'undefined' ? '' : itemObj.attr('note');
    //"board": '',
    //newUser["type"] = 'user',
    //currUser["requestid"] = ''
};

function circleUpdateUserInfo_Group(itemObj, currUser) {
};

function circleUpdateUserInfo_Channel(itemObj, currUser) {
};

function getUnknowUserForRelationsList(doc) {
    //<root><row id="18" puname="13111111111" suname="13133333333" isacc="1" message=""></row></root>
    var tmpArr = [];
    var items = doc.find('row');
    var itemObj = null;
    for (var i = 0; i < items.length; i++) {
        itemObj = $(items[i]);
        tmpArr.push(itemObj.attr('puname') == _gUserInfoObj.userId ? itemObj.attr('suname') : itemObj.attr('puname'));
    }

    return tmpArr;
};

function getUnknowUserForAcceptableList(doc) {
    var tmpArr = [];
    var items = doc.find('row');
    var itemObj = null;
    var userObj;
    for (var i = 0; i < items.length; i++) {
        itemObj = $(items[i]);
        userObj = circleGetUserObj(itemObj.attr('puname'));

        if (userObj == null) {
            _gCircleUsers.push(circleCreateUser_Guest(itemObj));
            tmpArr.push(itemObj.attr('puname'));
        }
    }

    return tmpArr;
};

function getUnknowChannelForChannelList(doc) {
    var tmpArr = [];
    var items = doc.find('row');
    var itemObj = null;
    var userObj;
    //for (var i = 0; i < items.length; i++) {
    //    itemObj = $(items[i]);
    //    userObj = circleGetUserObj(itemObj.attr('puname'));

    //    if (userObj == null) {
    //        _gCircleUsers.push(circleCreateUser_Guest(itemObj));
    //        tmpArr.push(userId);
    //    }
    //}

    return tmpArr;
};

var _gLastEditRange;
function circleChat_InitMsgInputEvent() {
    var element = $('.circle-message-input-field');
    try {
        document.execCommand("AutoUrlDetect", false, false);
    } catch (e) { }

    element.on('click', function () {
        _gLastEditRange = window.getSelection().getRangeAt(0);
    });

    element.on('keyup', function (eventObj) {
        _gLastEditRange = window.getSelection().getRangeAt(0);
    });

    element.on('paste', function (eventObj) {
        var data = eventObj.originalEvent.clipboardData;
        var len = data.items.length;
        if (!len || len <= 0) {
            eventObj.preventDefault();
        } else {
            circleChat_DealWithPasteByDataType(data, circleChat_InsertContent);
            eventObj.preventDefault();
        }
    });
};

function circleChat_InsertContent(contentString) {
    var contentObj = circleChat_InsertContentCreateObject(contentString);
    var inputField = $('.circle-message-input-field');
    var inputFieldEl = inputField[0];
    inputField.focus();
    var selection = window.getSelection();
    if (_gLastEditRange) {
        selection.removeAllRanges();
        selection.addRange(_gLastEditRange);
    }

    var range = selection.getRangeAt(0);
    //如果是选择区域插入内容的，先处理清理选区内的内容，变为光标插入
    var prepare = (selection.type == 'Range' ? circleChat_ClearSelectionRange(range, inputFieldEl) : true);
    var childCount = inputFieldEl.childNodes.length;
    //如果插入位置不是在text中
    if (selection.anchorNode.nodeName != '#text') {
        //如果输入框里有多个子节点，并且插入位置不在末尾
        if (childCount > 0 && selection.anchorOffset < childCount) {
            var tmpNode = inputFieldEl.childNodes[selection.anchorOffset];
            for (var i = contentObj.el.length - 1; i >= 0 && tmpNode != null; i--) {
                inputFieldEl.insertBefore(contentObj.el[i], tmpNode);
                tmpNode = contentObj.el[i];
            }
        } else {
            for (var i = 0; i < contentObj.el.length; i++) {
                inputFieldEl.appendChild(contentObj.el[i]);
            }
        }

        circleChat_InsertContentSetRangeStart(inputFieldEl, contentObj);
    } else {//如果插入位置在text中        
        var endContainer = range.endContainer;
        var startContainer = range.startContainer;
        //如果插入内容为文本
        if (contentObj.type == 'string') {
            var tmpOffset = range.startOffset + contentObj.string.length;
            startContainer.insertData(range.startOffset, contentObj.string);
            range.setStart(startContainer, tmpOffset);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {//如果插入内容为非文本
            for (var i = contentObj.el.length - 1; i >= 0; i--) {
                range.insertNode(contentObj.el[i]);
            }

            circleChat_InsertContentSetRangeStart(inputFieldEl, contentObj);
        }
    }

    _gLastEditRange = selection.getRangeAt(0);
};

function circleChat_InsertContentCreateObject(contentStr) {
    var contentEl = [];
    var contentHTML = '';
    var imageIds = [];
    var newImageId = "";
    var contentType = 'string';
    if (contentStr.indexOf('<img src="') >= 0) {
        contentType = 'html';
        var tmpRootEl = $('<p>' + contentStr + '</p>')[0];
        var tmpChildNodes = tmpRootEl.childNodes;
        for (var i = 0; i < tmpChildNodes.length; i++) {
            if (tmpChildNodes[i].nodeName == "#text") {
                contentHTML += tmpChildNodes[i].nodeValue;
            } else if (tmpChildNodes[i].nodeName == "IMG") {
                newImageId = "img_" + _GUID();
                $(tmpChildNodes[i]).css('vertical-align', 'baseline');
                $(tmpChildNodes[i]).attr('id', newImageId);
                tmpChildNodes[i].onload = function () {
                    circleChat_ResizeImage(arguments[0].srcElement);
                };

                imageIds.push(newImageId);
                contentHTML += tmpChildNodes[i].outerHTML;
            }

            contentEl.push(tmpChildNodes[i]);
        }
    } else {
        contentEl.push(document.createTextNode(contentStr));
        contentHTML = contentStr;
    }

    return { type: contentType, string: contentHTML, el: contentEl, id: imageIds };
};

function circleChat_ResizeImage(image) {
    var inputField = $('.circle-message-input-field');
    var tmpObj = $(image);
    var maxWidth = inputField.width() / 3;
    var maxHeight = inputField.height() / 2;
    var tmpHeight = image.height;
    var tmpWidth = image.width;
    if (tmpWidth > maxWidth || tmpHeight > maxHeight) {
        var newWidth = tmpWidth;
        var newHeight = tmpHeight;
        if (tmpWidth > maxWidth && tmpHeight <= maxHeight) {
            newWidth = maxWidth;
            newHeight = 'auto';
        } else if (tmpWidth <= maxWidth && tmpHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = 'auto';
        } else {
            var wRate = maxWidth / tmpWidth;
            var hRate = maxHeight / tmpHeight;
            if (wRate < hRate) {
                newWidth = maxWidth;
                newHeight = 'auto';
            } else {
                newHeight = maxHeight;
                newWidth = 'auto';
            }
        }

        tmpObj.width(newWidth);
        tmpObj.height(newHeight);
    }
}

function circleChat_ClearSelectionRange(range, inputFieldEl) {
    try {
        var comContainer = range.commonAncestorContainer;
        var endContainer = range.endContainer;
        var startContainer = range.startContainer;
        var tmpNodeVal, resultValue, startIdx, endIdx;
        //range In Same Text Block
        if (comContainer.nodeName == '#text' && comContainer.childNodes.length == 0) {
            startIdx = range.startOffset;
            endIdx = range.endOffset;
            tmpNodeVal = startContainer.nodeValue;
            startContainer.nodeValue = tmpNodeVal.substring(0, startIdx) + tmpNodeVal.substring(endIdx);
            range.setStart(startContainer, startIdx);
            range.collapse(true);
            return true;
            //range include multi block
        } else if (comContainer.nodeName != '#text' && comContainer.childNodes.length > 0) {
            var remSIdx, remEIdx;
            startIdx = range.startOffset;
            endIdx = range.endOffset;
            if (startContainer.nodeName == '#text') {
                remSIdx = circleChat_GetIndexOfNode(startContainer.nextSibling, inputFieldEl);
                tmpNodeVal = startContainer.nodeValue;
                startContainer.nodeValue = tmpNodeVal.substring(0, startIdx);
                range.setStart(startContainer, startIdx);
            } else {
                remSIdx = startIdx;
            }

            if (endContainer.nodeName == '#text') {
                remEIdx = circleChat_GetIndexOfNode(endContainer.previousSibling, inputFieldEl);
                tmpNodeVal = endContainer.nodeValue;
                endContainer.nodeValue = tmpNodeVal.substring(endIdx);
            } else {
                remEIdx = endIdx;
            }

            if (remSIdx >= 0 && remEIdx > 0 && remEIdx < inputFieldEl.childNodes.length) {
                for (var i = remEIdx; i >= remSIdx; i--) {
                    $(inputFieldEl.childNodes[i]).remove();
                }

                range.collapse(true);
                return true;
            }

            return false;
        }

        return false;
    } catch (ex) {
        return false;
    }

    return true;
};

function circleChat_GetIndexOfNode(node, parentNode) {
    var childNodes = parentNode.childNodes;
    var index = -1;
    for (var i = 0; i < childNodes.length; i++) {
        if (childNodes[i].isEqualNode(node)) {
            index = i
            break;
        }
    }

    return index;
};

function circleChat_InsertContentSetRangeStart(inputFieldEl, contentObj) {
    var range = document.createRange();
    if (!contentObj.el || contentObj.el.length <= 0) {
        range.selectNodeContents(inputFieldEl);
        range.setStart(inputFieldEl, range.endOffset);
    } else {
        range.selectNodeContents(contentObj.el[contentObj.el.length - 1]);
        if (contentObj.type == 'string') {
            range.setStart(contentObj.el[contentObj.el.length - 1], range.startOffset + contentObj.el[contentObj.el.length - 1].length);
        } else {
            if (range.endOffset == 0) {
                var tmpOffset = 0;
                range.selectNodeContents(inputFieldEl);
                for (var i = 0; i < inputFieldEl.childNodes.length; i++) {
                    if (inputFieldEl.childNodes[i].isEqualNode(contentObj.el[contentObj.el.length - 1])) {
                        tmpOffset = i + 1;
                        break;
                    }
                }

                range.setStart(inputFieldEl, tmpOffset);
            } else {
                range.setStart(contentObj.el[contentObj.el.length - 1], range.startOffset + contentObj.el.length);
            }
        }
    }

    range.collapse(true);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
};

function circleChat_DealWithPasteByDataType(data, callback) {
    //image
    if (data.files.length == 1) {
        var imageItem = null;
        //image in paint-image in word-image in excel
        if (data.types.length == 1 && data.types[0] == 'Files' && data.items[0].kind === 'file' && data.items[0].type === 'image/png') {
            imageItem = data.items[0];
            //image in html(copy by right click)
        } else if (data.types.length == 2 && data.types[1] == 'Files' && data.items[1].kind === 'file' && data.items[1].type === 'image/png') {
            imageItem = data.items[1];
            //excel 
        } else if (data.types.length == 4 && data.types[3] == 'Files' && data.items[3].kind === 'file' && data.items[3].type === 'image/png') {
            imageItem = data.items[3];
        }

        if (imageItem) {
            var callbackFn = function (data64) {
                callback('<img src="' + data64 + '"/>');
            };

            circleChat_DealWithImage_File(imageItem, callbackFn);
        }
    } else {
        //image in html(copy by select)
        if (data.types.length == 1 && data.types[0] == 'text/html') {
            var childrens = $(data.getData('text/html').replace(/\n|\r|\n\r/g, ''));
            if (childrens.length == 3 && childrens[0].nodeName == "#comment" && childrens[1].nodeName == "IMG" && childrens[2].nodeName == "#comment") {
                var callbackFn = function (data64) {
                    callback('<img src="' + data64 + '"/>');
                };

                circleChat_DealWithImage_URL($(childrens[1]).attr('src'), callbackFn, 'img-' + _GUID());
            }
            //text editor
        } else if (data.types.length == 1 && data.types[0] == 'text/plain') {
            callback(data.getData('text/plain').replace(/\n|\r|\n\r/g, ''));
            //html
        } else if (data.types.length == 2 && data.types[0] == 'text/plain' && data.types[1] == 'text/html') {
            var childrens = $(data.getData('text/html').replace(/\n|\r|\n\r/g, ''));
            if (childrens[0].nodeName == "#comment" && childrens[childrens.length - 1].nodeName == "#comment") {
                var resultTxt = '';
                var imgURLs = [];
                var tmpId = '';
                for (var i = 1; i < childrens.length - 1; i++) {
                    if (childrens[i].nodeName == "IMG") {
                        tmpId = 'img-' + _GUID();
                        imgURLs.push({ id: tmpId, url: $(childrens[i]).attr('src') });
                        resultTxt += '{%image%}' + tmpId + '{%image%}';
                    } else {
                        var images = $(childrens[i]).find('img');
                        for (var j = 0; j < images.length; j++) {
                            tmpId = 'img-' + _GUID();
                            imgURLs.push({ id: tmpId, url: $(images[j]).attr('src') });
                            $(images[j]).after($('<p>{%image%}' + tmpId + '{%image%}<p/>'));
                            $(images[j]).remove();
                        }

                        resultTxt += $(childrens[i]).text();
                    }
                }

                if (imgURLs.length > 0) {
                    var totalCount = 0;
                    var callbackFn = function (src, id) {
                        totalCount++;
                        resultTxt = resultTxt.replace('{%image%}' + id + '{%image%}', '<img src="' + src + '"/>');
                        if (totalCount == imgURLs.length) {
                            callback(resultTxt);
                        }
                    };

                    for (var i = 0; i < imgURLs.length; i++) {
                        circleChat_DealWithImage_URL(imgURLs[i].url, callbackFn, imgURLs[i].id);
                    }
                } else {
                    callback(resultTxt);
                }
            }
            //text in word - mix in word
        } else if (data.types.length == 3 && data.types[0] == 'text/plain' && data.types[1] == 'text/html' && data.types[2] == 'text/rtf') {
            var childrens = $(data.getData('text/html').replace(/\n|\r|\n\r/g, ''));
            var resultTxt = '';
            var imgURLs = [];
            var tmpId, tmpURL;
            for (var i = 0; i < childrens.length; i++) {
                if (childrens[i].nodeName != 'META' && childrens[i].nodeName != 'LINK' && childrens[i].nodeName != '#comment' && childrens[i].nodeName != 'STYLE') {
                    if (childrens[i].nodeName == "IMG") {
                        tmpId = 'img-' + _GUID();
                        tmpURL = childrens[i].outerHTML.split('alt=&quot;')[1].split('&quot;')[0];
                        if (tmpURL.indexOf('http') == 0) {
                            imgURLs.push({ id: tmpId, url: tmpURL.replace(/&amp;/g, '&'); });
                        }

                        resultTxt += '{%image%}' + tmpId + '{%image%}';
                    } else {
                        var images = $(childrens[i]).find('img');
                        for (var j = 0; j < images.length; j++) {
                            tmpId = 'img-' + _GUID();
                            tmpURL = images[j].outerHTML.split('alt=&quot;')[1].split('&quot;')[0];
                            if (tmpURL.indexOf('http') == 0) {
                                imgURLs.push({ id: tmpId, url: tmpURL.replace(/&amp;/g, '&'); });
                                $(images[j]).after($('<p>{%image%}' + tmpId + '{%image%}<p/>'));
                            }

                            $(images[j]).remove();
                        }

                        resultTxt += $(childrens[i]).text();
                    }
                }
            }

            if (imgURLs.length > 0) {
                var totalCount = 0;
                var callbackFn = function (src, id) {
                    totalCount++;
                    resultTxt = resultTxt.replace('{%image%}' + id + '{%image%}', '<img src="' + src + '"/>');
                    if (totalCount == imgURLs.length) {
                        callback(resultTxt);
                    }
                };

                for (var i = 0; i < imgURLs.length; i++) {
                    circleChat_DealWithImage_URL(imgURLs[i].url, callbackFn, imgURLs[i].id);
                }
            } else {
                callback(resultTxt);
            }
        }
    }
};

function circleChat_DealWithImage_File(imageItem, callback) {
    var img = document.getElementById('imageForMsgInputImg');
    var canvas = document.getElementById('canvasForMsgInputImg');
    var ctx = canvas.getContext('2d');
    $(img).on('load', function () {
        $(img).unbind();
        ctx.drawImage(img, 0, 0);
        callback(canvas.toDataURL());
    });

    img.src = window.URL.createObjectURL(imageItem.getAsFile().slice());
};

function circleChat_DealWithImage_URL(imgURL, callback, id) {
    var img = document.getElementById('imageForMsgInputImg');
    img.setAttribute('crossOrigin', 'anonymous');
    $(img).on('load', function () {
        $(img).unbind();
        ctx.drawImage(img, 0, 0);
        if (typeof callback != 'undefined') {
            callback(canvas.toDataURL(), id);
        }
    });

    var canvas = document.getElementById('canvasForMsgInputImg');
    var ctx = canvas.getContext('2d');
    var imgResponse = '';
    var getImageBlob = function (url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (this.status == 200) {
                imgResponse = this.response;
                img.src = URL.createObjectURL(this.response);
            }
        };
        xhr.send();
    }

    var preView = function (url) {
        var reader = new FileReader();
        getImageBlob(url, function (blob) {
            reader.readAsDataURL(blob);
        });
    }

    getImageBlob(imgURL);
};