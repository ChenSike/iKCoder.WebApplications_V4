'use strict';

var _gCitys = [
    { p: '北京', pt: '市', c: ['东城', '西城', '崇文', '宣武', '朝阳', '海淀', '丰台', '石景山'], ct: '区' },
    { p: '上海', pt: '市', c: ['宝山', '金山', '南市', '长宁', '静安', '青浦', '崇明', '卢湾', '松江', '奉贤', '浦东', '杨浦', '虹口', '普陀', '闸北', '黄浦', '闵行', '徐汇', '嘉定', '南汇'], ct: '区' },
    { p: '重庆', pt: '市', c: ['渝中', '江北', '沙坪坝', '南岸', '九龙坡', '大渡口'], ct: '区' },
    { p: '天津', pt: '市', c: ['和平', '河北', '河西', '河东', '南开', '红桥', '塘沽', '汉沽', '大港', '东丽', '西青', '津南', '北辰', '武清', '滨海'], ct: '区' },
    { p: '广东', c: ['广州', '深圳', '珠海', '中山', '佛山', '东莞', '清远', '肇庆', '阳江', '湛江', '韶关', '惠州', '河源', '汕尾', '汕头', '梅州'] },
    { p: '河北', c: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '张家口', '承德', '廊坊', '沧州', '保定', '衡水'] },
    { p: '山西', c: ['太原', '大同', '阳泉', '朔州', '长治', '临汾', '晋城'] },
    { p: '内蒙古', pt: '自治区', c: ['呼和浩特', '包头', '乌海', '临河', '东胜', '集宁', '锡林浩特', '通辽', '赤峰', '海拉尔', '乌兰浩特'] },
    { p: '辽宁', c: ['沈阳', '大连', '鞍山', '锦州', '丹东', '盘锦', '铁岭', '抚顺', '营口', '辽阳', '阜新', '本溪', '朝阳', '葫芦岛'] },
    { p: '吉林', c: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边'] },
    { p: '黑龙江', c: ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '伊春', '黑河', '鸡西', '鹤岗', '双鸭山', '七台河', '绥化', '大兴安岭'] },
    { p: '江苏', c: ['南京', '苏州', '无锡', '常州', '镇江', '连云港 ', '扬州', '徐州 ', '南通', '盐城', '淮阴', '泰州', '宿迁'] },
    { p: '浙江', c: ['杭州', '湖州', '丽水', '温州', '绍兴', '舟山', '嘉兴', '金华', '台州', '衢州', '宁波'] },
    { p: '安徽', c: ['合肥  ', '芜湖 ', '蚌埠 ', '滁州 ', '安庆 ', '六安 ', '黄山 ', '宣城 ', '淮南 ', '宿州 ', '马鞍山 ', '铜陵', '淮北 ', '阜阳 ', '池州 ', '巢湖 ', '亳州'] },
    { p: '福建', c: ['福州 ', '厦门 ', '泉州 ', '漳州 ', '龙岩 ', '南平 ', '宁德 ', '莆田 ', '三明'] },
    { p: '江西', c: ['南昌', '景德镇', '九江', '萍乡', '新余', '鹰潭', '赣州', '宜春', '吉安', '上饶', '抚州'] },
    { p: '山东', c: ['济南', '青岛', '淄博', '德州', '烟台', '潍坊', '济宁', '泰安', '临沂', '菏泽', '威海', '枣庄', '日照', '莱芜', '聊城', '滨州', '东营'] },
    { p: '河南', c: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '周口', '驻马店', '信阳', '济源'] },
    { p: '湖北', c: ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '恩施', '随州', '仙桃', '天门', '潜江', '神农架'] },
    { p: '湖南', c: ['长沙', '株州', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '郴州', '益阳', '永州', '怀化', '娄底', '湘西'] },
    { p: '广西', pt: '自治区', c: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '贺州', '百色', '河池'] },
    { p: '海南', c: ['海口 ', '三亚', '通什', '琼海', '琼山', '文昌', '万宁', '东方', '儋州'] },
    { p: '四川', c: ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充  ', '宜宾', '广安', '达川', '巴中', '雅安', '眉山  ', '阿坝 ', '甘孜 ', '凉山'] },
    { p: '贵州', c: ['贵阳 ', '六盘水', '遵义', '铜仁', '毕节', '安顺', '黔西南 ', '黔东南', '黔南'] },
    { p: '云南', c: ['昆明', '东川', '曲靖', '玉溪', '昭通', '思茅', '临沧', '保山', '丽江', '文山 ', '红河 ', '西双版纳 ', '楚雄 ', '大理 ', '德宏 ', '怒江', '迪庆'] },
    { p: '西藏', pt: '自治区', c: ['拉萨', '那曲', '昌都', '山南', '日喀则', '阿里', '林芝'] },
    { p: '陕西', c: ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '商洛', '安康'] },
    { p: '甘肃', c: ['兰州', '金昌', '白银', '天水', '嘉峪关', '定西', '平凉', '庆阳', '陇南', '武威', '张掖', '酒泉', '甘南 ', '临夏'] },
    { p: '青海', c: ['西宁', '海东', ' 海北 ', '黄南', '海南', '果洛', '玉树', '海西'] },
    { p: '宁夏', pt: '自治区', c: ['银川', '石嘴山', '银南', '固原'] },
    { p: '新疆', pt: '自治区', c: ['乌鲁木齐', '克拉玛依', '石河子', '吐鲁番', '哈密', '和田', '阿克苏', '喀什', '克孜勒苏', '巴音郭楞', '昌吉', '博尔塔拉', '伊犁'] },
    { p: '香港', pt: '特区', c: [] },
    { p: '澳门', pt: '特区', c: [] },
    { p: '台湾', c: [] }
];
var _gCurrCateId = 'circle';
var _gCurrCateObj = null;
var _gCategory = [
    { id: 'courses', icon: 'fa-chess', text: '课程' },
    { id: 'experiment', icon: 'fa-flask', text: '实验' },
    { id: 'circle', icon: 'fa-user-friends', text: '圈子', attr: ['msg', 'user'], attrIcon: ['envelope', 'user'] },
    { id: 'report', icon: 'fa-chart-line', text: '报表' },
    { id: 'settings', icon: 'fa-user-cog', text: '设定' },
    { id: 'studio', icon: 'fa-helicopter', text: 'App Studio' },
    { id: 'appshop', icon: 'fa-cart-plus', text: 'App Shop' },
    { id: 'teamsuit', icon: 'fa-users', text: 'Team Suit' }
];
var _gCourseTypeMap = {
    l: { icon: 'html5', title: 'HTML5' },
    j: { icon: 'java', title: 'Java' },
    p: { icon: 'python', title: 'Python' },
    c: { icon: 'css3-alt', title: 'CSS3' },
    n: { icon: 'node-js', title: 'Node.JS' },
    s: { icon: 'js-square', title: 'Java Script' },
    u: { icon: 'fab fa-uikit', title: 'UI' },
    a: { icon: 'fas fa-brain', title: 'AI' },
    //a: { icon: 'fas fa-code-branch', title: 'AI' },
    b: { icon: 'fab fa-bimobject', title: 'BBBB' },
    d: { icon: 'fas fa-database', title: 'Database' }
};
var _gSTEAMMap = {
    s: { icon: 'js-square', title: 'Science' },
    t: { icon: 'python', title: 'Technology' },
    e: { icon: 'java', title: 'Engineering' },
    a: { icon: 'node-js', title: 'Arts' },
    m: { icon: 'html5', title: 'Mathematics' }
};
var _gEmojiGroups = [];
var _gCurrentEmojiGroup = null;
var _gSocket = null;
var _gToken = '';
var _orgAvailableHeight = 890;
var _gUserInfoObj = { userName: '', header: '', userId: '', nickName: '', level: '', birthday: '', country: '', gender: '', province: '', city: '', school: '' };
var _gCirleMessages = {};
var _circleDataSearch = { value: [] };
var _gCiecleUsers = [];
var _gCourseImgMap = {
    A: { img: 'image/course/course_logic.png', color: 'rgb(86,181,34)' },
    B: { img: 'image/course/course_html.png', color: 'rgb(100,124,185)' },
    C: { img: 'image/course/course_js.png', color: 'rgb(86,181,34)' },
    D: { img: 'image/course/course_python.png', color: 'rgb(100,124,185)' },
    E: { img: 'image/course/course_cs.png', color: 'rgb(86,181,34)' },
    F: { img: 'image/course/course_java.png', color: 'rgb(100,124,185)' },
    G: { img: 'image/course/course_ios.png', color: 'rgb(86,181,34)' }
};
var _gCircleGroups = [];
var _gCurrentChatter = { id: '', type: '' };

function initPage() {
    globalResize();
    showLoadingMask();
    buildCategorys();
    initEvents();
    initData();
};

function initEvents() {
    $(window).resize(globalResize);

    $('#btn_Student_SignIn').on('click', function () {
        var checkOnFn = function (response) {
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (success) {
                $('#btn_Student_SignIn .mood-text').text('已签到');
            } else {
            }
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.profile.setcheckon, {}), '', checkOnFn);
    });

    $('.btn-header-mood').on('click', function () {
        var moodFn = function (response) {
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (success) {

            } else {

            }
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.profile.setmood, { mood: $(arguments[0].currentTarget).attr('data-target') }), '', moodFn);
    });

    $('#linkBtn_Upload_HeaderFile').on('click', function () {
        $('#progress_HeaderUpload').hide();
        $('#warnning_HeaderUpload').hide();
        //$('#wrap_CropBox_Header').hide();
        $('#file_Upload').click();
    });

    $('#modalCustomHeader').on('shown.bs.modal', function () {
        $('#progress_HeaderUpload').show();
        $('#warnning_HeaderUpload').hide();
        $('#wrap_CropBox_Header').hide();
        initCustomHeaderImg();
    });

    $('#file_Upload').on('change', function () {
        initCustomHeaderImg('image/tmpclip.jpg');
        return;
        var regExp = /(\.|\/)(gif|jpe?g|png|bmp)$/i;
        var fileName = $(this).val();
        if (fileName != '' && !regExp.test(fileName)) {
            $('#warnning_HeaderUpload').show();
            $('#warnning_HeaderUpload').text("仅支持.jpg .jpeg .gif .png .bmp格式的图片");
        } else if (this.files[0].size / 1024 > 4096) {
            $('#warnning_HeaderUpload').show();
            $('#warnning_HeaderUpload').text("图片大小不能超过4M");
        } else {
            $('#progress_HeaderUpload').show();
            var fileType = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
            var formData = new FormData();
            formData.append('file', $('#file_Upload')[0].files[0]);
            $.ajax({
                url: _getRequestURL(_gURLMapping.setheader.setheader, {}),
                type: 'POST',
                cache: false,
                data: formData,
                processData: false,
                contentType: false
            }).done(function (res) {
                initCustomHeaderImg();
            }).fail(function (res) {
                _showGlobalMessage('上传头像失败，请重试!', 'warning', 'alert_UpdateHeader_Error');
            });
        }
    });

    $('#btn_CustomHeader_Save').on('click', function () {
        var tmpStr = $('#btn_CustomHeader_Save').attr('data-content');
        var tmpParams = tmpStr.split(',');
        if (tmpStr != '' && tmpParams.length == 4) {
            var successFn = function (response, status) {
                var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
                if (success) {
                    $('#modalCustomHeader').modal('hide');
                    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function () {
                        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
                        if (success) {
                            var tmpImg = $($(response_header).find('msg')[0]).text();
                            if (tmpImg.indexOf('.') < 0) {
                                tmpImg = 'image/tmpheader.jpg';
                            }

                            _gUserInfoObj.header = tmpImg;
                            _CookieUtils.set("logined_user_header", _gUserInfoObj.header);
                        }
                    });
                } else {
                    _showGlobalMessage('处理头像信息失败!', 'danger', 'alert_Save_CustHead_Error');
                }
            };

            ajaxFn('POST', _getRequestURL(_gURLMapping.account.setheader, {}), { data: document.getElementById("canvas_Sample_1").toDataURL() }, successFn);
        }
    });
};

function globalResize() {
    var header = $('header');
    var footer = $('footer');
    $('.col-content').height($('.main-container').height() - header.height() - footer.height());
    $('.col-main-content').width($('body').width() - $('.col-siderbar').width() - 18);
}

function showLoadingMask() {
    $('#mask_Page_Loading .loader').height('99%').height('100%');
    $('#mask_Page_Loading .loader').width('99%').width('100%');
    var mask = $('#mask_Page_Loading');
    mask.css('display', 'flex');
    mask.css('visibility', 'visible');
    //mask.css('top', $('#wrap_Category_Title').offset().top);
    //mask.css('left', $('#wrap_Category_Title').offset().left);
    //mask.height($('body').height() - $('#wrap_Category_Title').offset().top);
    //mask.width(Math.min($('body').width(), $('body')[0].scrollWidth) - $('#wrap_Category_Title').offset().left);
    //mask.css('top', '0px');
    //mask.css('left', ($('#sideBar_Page_Left').width()) + 'px');
    //mask.height($('#sideBar_Page_Left').height());
    //mask.width($('.main-content-row').width() - $('#sideBar_Page_Left').width());
    //mask.show();
    //mask.css('diaplay', 'flex !important');
    //mask.css('visibility', 'visible');
};

function hideLoadingMask() {
    $('#mask_Page_Loading').fadeOut(500, function () {
        var mask = $('#mask_Page_Loading');
        mask.width(0);
        mask.height(0);
        mask.hide();
        mask.css('visibility', 'hidden');
        mask.css('display', 'none');
    });
};

function buildCategorys() {
    var tmpHTMLArr = [];
    var activeCls = '';
    for (var i = 0; i < _gCategory.length; i++) {
        if (_gCategory[i].id == _gCurrCateId) {
            _gCurrCateObj = _gCategory[i];
            activeCls = 'active-item';
        } else {
            activeCls = '';
        }
        //activeCls = (i == 0 ? 'active-item' : '');
        tmpHTMLArr.push('<div class="row justify-content-start align-items-center row-category-item ' + activeCls + '" data-target="' + _gCategory[i].id + '">');
        tmpHTMLArr.push('   <div class="col-3 text-center">');
        tmpHTMLArr.push('      <i class="fas ' + _gCategory[i].icon + ' category-item-icon" aria-hidden="true"></i>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-9 text-left">');
        tmpHTMLArr.push(_gCategory[i].text);

        tmpHTMLArr.push(buildCategoryAttr(_gCategory[i]));
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    $('.wrap-siderbar').append($(tmpHTMLArr.join('')));
    $('.row-category-item').on('click', function () {
        var currItem = $(arguments[0].currentTarget);
        if (currItem.attr('data-target') != _gCurrCateId) {
            $('.row-category-item').removeClass('active-item');
            currItem.addClass('active-item');
            buildCategoryContent(currItem.attr('data-target'));
        }
    });
};

function buildCategoryAttr(cateObj) {
    var tmpHTMLArr = [];
    if (cateObj.attr) {
        tmpHTMLArr.push('<div class="category-item-attr ' + cateObj.id + '-attr" style="display: none;">');
        tmpHTMLArr.push('   <i class="fas fa-bell category-item-attr-icon" aria-hidden="true"></i>');
        tmpHTMLArr.push('</div>');
        //for (var j = 0; j < cateObj.attr.length; j++) {
        //    tmpHTMLArr.push('<div class="category-item-attr ' + cateObj.id + '-attr-' + cateObj.attr[j] + '">');
        //    if (cateObj.attrIcon) {
        //        tmpHTMLArr.push('   <i class="fas fa-' + cateObj.attrIcon[j] + ' category-item-attr-icon" aria-hidden="true"></i>');
        //    }

        //    tmpHTMLArr.push('   <span class="category-item-attr-text"></span>');
        //    tmpHTMLArr.push('</div>');
        //}
    }

    return tmpHTMLArr.join('');
};

function getCurrentCategoryObj(categoryId) {
    if (typeof categoryId == 'undefined' || categoryId == '') {
        $('.row-category-item').removeClass('active-item');
        $($('.row-category-item')[0]).addClass('active-item');
        _gCurrCateObj = _gCategory[0];
        _gCurrCateId = _gCategory[0].id;
    } else {
        _gCurrCateId = categoryId;
        for (var i = 0; i < _gCategory.length; i++) {
            if (_gCurrCateId == _gCategory[i].id) {
                _gCurrCateObj = _gCategory[i];
            }
        }
    }
};

function buildCategoryContent(categoryId) {
    getCurrentCategoryObj(categoryId);
    $('.col-main-content').empty();
    var successFn;
    switch (_gCurrCateId) {
        case 'courses':
            successFn = function (response) {
                var items = $(response).find('item');
                if (items.length > 0) {
                    buildContent_Courses(items);
                } else {

                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getcoursepackage, {}), '', successFn);
            break;
        case 'experiment':
            successFn = function (response) {
                var items = $(response).find('item');
                if (items.length > 0) {
                    buildContent_Exp(items);
                } else {

                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getcoursepackage, {}), '', successFn);
            break;
        case 'circle':
            buildContent_Circle();
            break;
        case 'report':
            buildContent_Report();
            break;
        case 'settings':
            buildContent_Setting();
            break;
        case 'studio':
            window.open("appstudio/index.html");
            break;
        case 'appshop':
            window.open("appshop.html");
            break;
        case 'teamsuit':
            window.open("teamsuit.html");
            break;
    }
};

function buildContent_Courses(items) {
    var orgContainerHeight = 235;
    var orgHeight = 225;
    var orgWidth = 155;
    var orgImgHeight = 140;
    var orgSpace = 35;
    var availableHeight = $('.col-content').height();
    var scale = availableHeight / _orgAvailableHeight;

    var containerHeight = Math.floor(scale * orgContainerHeight);
    var height = Math.floor(scale * orgHeight);
    var width = Math.floor(scale * orgWidth);
    var imgHeight = Math.floor(scale * orgImgHeight);
    var padding = Math.floor((containerHeight - height) / 2);
    var space = Math.floor(scale * orgSpace);

    var datas = [];
    var tmpItem = null;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        datas.push({
            id: tmpItem.attr('id'),
            name: tmpItem.attr('name'),
            course: tmpItem.attr('title'),
            price: tmpItem.attr('price'),
            isfree: tmpItem.attr('isfress'),
            discount: tmpItem.attr('discount')
        });
    }

    var itemCount = datas.length;
    var tmpHTMLArr = [];
    var tmpStyle = '';
    var tmpPrice = '';
    var tmpBtn = '';
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-courses-content">');
    tmpHTMLArr.push('    <div class="row align-items-center row-courses-group-list">');
    tmpHTMLArr.push('        <div class="col">');
    var itemsHTML = [];
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgHeight + 'px; cursor:pointer;';
        itemsHTML.push('                    <img class="img-fluid img-course-item-detail" src="' + _gCourseImgMap[datas[i].name.trim()].img + '" style="' + tmpStyle + '" data-target="' + datas[i].name + '"/>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin" style="padding-top: 8px;">');
        itemsHTML.push('                <div class="col no-padding text-12 font-weight-bold">');
        tmpStyle = 'color:' + _gCourseImgMap[datas[i].name.trim()].color + ';';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + datas[i].course + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding text-12">');
        tmpPrice = (datas[i].isfree == '1' ? '免费' : parseInt(datas[i].price).toFixed(2));
        tmpBtn = (datas[i].isfree == '1' ? '' : '<button type="button" class="btn btn-sm btn-warning btn-course-item-buy" data-target="' + datas[i].name + '"><i class="fas fa-shopping-cart "></i></button>');
        itemsHTML.push('                    <p class="text-center" style="' + tmpStyle + '">价格: ');
        itemsHTML.push('                        <span style="' + (datas[i].discount != '0' ? 'text-decoration:line-through;' : '') + '">' + tmpPrice + '<span>');
        itemsHTML.push(tmpBtn);
        itemsHTML.push('                </p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        if (datas[i].isfree != '1') {
            itemsHTML.push('            <div class="row no-margin">');
            itemsHTML.push('                <div class="col no-padding text-12">');
            tmpPrice = (datas[i].discount == '0' ? '无' : parseInt(datas[i].price * 100).toFixed(2));
            itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">折扣: ' + tmpPrice + '</p>');
            itemsHTML.push('                </div>');
            itemsHTML.push('            </div>');
        }

        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join(''), 'course_package'));
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    $('.img-course-item-detail').on('click', function (eventObj) {
        ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getlessonslist, { course_name: $(eventObj.currentTarget).attr('data-target') }), '', buildDetail_Course);
    });
    $('.btn-course-item-buy').on('click', showCourseBuyModal);

    bindHorizontalListEvent(containerHeight, width, space, itemCount, 'course_package');
    ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getlessonslist, { course_name: datas[0].name }), '', buildDetail_Course);
};

function showCourseBuyModal(eventObj) {
    var courseId = $(eventObj.currentTarget).attr('data-target');
    var data = {
        course: "逻辑课程",
        discount: "0",
        id: "1",
        isfree: "1",
        name: "A",
        price: "0"
    };

    var tmpPrice = '';
    if ($('#modal_Course_Buy').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Course_Buy" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog modal-lg" role="document">');
        tmpHTMLStr.push('        <div class="modal-content h-100">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title font-16" id="exampleModalLabel">购买课程</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('<div class="container-fluid">');
        tmpHTMLStr.push('   <div class="row">');
        tmpHTMLStr.push('       <div class="col-4">');
        tmpHTMLStr.push('           <div class="container-fluid">');
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-padding">');
        tmpHTMLStr.push('                       <img class="img-fluid" src="' + _gCourseImgMap[data.name.trim()].img + '"/>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-paddingfont-weight-bold">');
        tmpHTMLStr.push('                       <p class="text-center">' + data.course + '</p>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        tmpPrice = (data.isfree == '1' ? '免费' : parseInt(data.price).toFixed(2));
        tmpHTMLStr.push('               <div class="row no-margin">');
        tmpHTMLStr.push('                   <div class="col no-padding">');
        tmpHTMLStr.push('                       <p class="text-center">价格: ');
        tmpHTMLStr.push('                           <span style="' + (data.discount != '0' ? 'text-decoration:line-through;' : '') + '">' + tmpPrice + '<span>');
        tmpHTMLStr.push('                       </p>');
        tmpHTMLStr.push('                   </div>');
        tmpHTMLStr.push('               </div>');
        if (data.isfree != '1') {
            tmpHTMLStr.push('               <div class="row no-margin">');
            tmpHTMLStr.push('                   <div class="col no-padding text-12">');
            tmpPrice = (data.discount == '0' ? '无' : parseInt(data.price * 100).toFixed(2));
            tmpHTMLStr.push('                       <p class="text-center">折扣: </p>');
            tmpHTMLStr.push('                   </div>');
            tmpHTMLStr.push('               </div>');
        }

        tmpHTMLStr.push('           </div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('       <div class="col-8">');
        tmpHTMLStr.push('<div class="card text-center">');
        tmpHTMLStr.push('   <div class="card-header">');
        tmpHTMLStr.push('       <ul class="nav nav-tabs card-header-tabs">');
        tmpHTMLStr.push('           <li class="nav-item">');
        tmpHTMLStr.push('               <a class="nav-link active" href="#">课程简介</a>');
        tmpHTMLStr.push('           </li>');
        tmpHTMLStr.push('           <li class="nav-item">');
        tmpHTMLStr.push('               <a class="nav-link" href="#">课程设置</a>');
        tmpHTMLStr.push('           </li>');
        tmpHTMLStr.push('       </ul>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('   <div class="card-body">');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('   </div>');
        tmpHTMLStr.push('</div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-success btn-sm">确定购买</button>');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-light btn-sm" data-dismiss="modal">取消购买</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    $('#modal_Course_Buy').modal('show');
};

function buildDetail_Course(response) {
    //<root itemcount="1">
    //<row index="1" id="1" course_name="A" lesson_title="模式识别" isfree="1" lesson_code="A_01_001" steam="s" udba="l" totalsteps="4" exp="100"></row>
    //</root>
    var items = $(response).find('row');
    var datas = [];
    var currItem = null;
    for (var i = 0; i < items.length; i++) {
        currItem = $(items[i]);
        datas.push({
            symbol: currItem.attr('lesson_code'),
            title: currItem.attr('lesson_title'),
            steps: currItem.attr('totalsteps'),
            complete: typeof currItem.attr('complete') == 'undefined' ? '0' : currItem.attr('complete'),
            steam: currItem.attr('steam'),
            type: currItem.attr('udba'),
            course: currItem.attr('course_name')
        });
    }

    var tmpHTMLArr = [];
    tmpHTMLArr.push('    <div class="row align-items-center row-courses-group-item-list">');
    tmpHTMLArr.push('        <div class="col no-padding">');
    tmpHTMLArr.push('<table class="table table-hover table-sm">');
    tmpHTMLArr.push('   <thead>');
    tmpHTMLArr.push('       <tr>');
    tmpHTMLArr.push('           <th scope="col col-course-state" style="width: 50px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-title" style="height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-step" style="width: 50px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-steam" style="width: 150px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-type" style="height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-course-run" style="width: 80px;height: 1px;padding: 0px;"></th>');
    tmpHTMLArr.push('       </tr>');
    tmpHTMLArr.push('   </thead>');
    tmpHTMLArr.push('   <tbody>');

    var tmpState;
    for (var i = 0; i < datas.length; i++) {
        tmpState = (datas[i].complete == datas[i].steps ? 'star' : 'star-half-alt');
        tmpHTMLArr.push('       <tr>');
        tmpHTMLArr.push('           <td class="text-center"><i class="fas fa-' + tmpState + ' course-state"></i></td>');
        tmpHTMLArr.push('           <td>' + datas[i].title + '</td>');
        tmpHTMLArr.push('           <td><span class="course-step-complete">' + datas[i].complete + '</span>/<span class="course-step-total">' + datas[i].steps + '</span></td>');
        tmpHTMLArr.push('           <td>' + buildSTEAMHTML(datas[i].steam) + '</td>');
        tmpHTMLArr.push('           <td>' + buildCourseTypeHTML(datas[i].type) + '</td>');
        tmpHTMLArr.push('           <td>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-link course-start" data-target="' + datas[i].symbol + '|' + datas[i].complete + '">');
        tmpHTMLArr.push('                   <i class="far fa-hand-point-right cursor-hand"></i>');
        tmpHTMLArr.push('               </button>');
        tmpHTMLArr.push('           </td>');
        tmpHTMLArr.push('       </tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    $('.row-courses-group-item-list').remove();
    $('.row-courses-group-list').after($(tmpHTMLArr.join('')));
    $('.row-courses-group-item-list .course-start').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget).attr('data-target').split('|');
        window.open("workplatform.html?scene=" + target[0] + '&step=' + target[1]);
    });
};

function buildSTEAMHTML(steam) {
    var tmpHTMLArr = [];
    var tmpObj;
    for (var i = 0; i < steam.length; i++) {
        tmpObj = _gSTEAMMap[steam[i].toLowerCase()];
        tmpHTMLArr.push('<span class="course-staem-' + steam[i].toLowerCase() + ' steam-char" title="' + tmpObj.title + '">' + steam[i].toUpperCase() + '</span>');
    }

    return tmpHTMLArr.join('');
};

function buildCourseTypeHTML(courseType) {
    var tmpHTMLArr = [];
    var tmpObj;
    for (var i = 0; i < courseType.length; i++) {
        tmpObj = _gCourseTypeMap[courseType[i].toLowerCase()];
        tmpHTMLArr.push('<i class="' + tmpObj.icon + ' course-type-icon" title="' + tmpObj.title + '"></i>');
    }

    return tmpHTMLArr.join('');
};

function buildContent_Exp(items) {
    var orgContainerHeight = 235;
    var orgHeight = 225;
    var orgWidth = 155;
    var orgImgHeight = 140;
    var orgSpace = 35;
    var availableHeight = $('.col-content').height();
    var scale = availableHeight / _orgAvailableHeight;

    var containerHeight = Math.floor(scale * orgContainerHeight);
    var height = Math.floor(scale * orgHeight);
    var width = Math.floor(scale * orgWidth);
    var imgHeight = Math.floor(scale * orgImgHeight);
    var padding = Math.floor((containerHeight - height) / 2);
    var space = Math.floor(scale * orgSpace);

    var datas = [];
    var tmpItem = null;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        datas.push({ id: tmpItem.attr('id'), name: tmpItem.attr('name'), course: tmpItem.attr('title'), price: tmpItem.attr('price'), isfree: tmpItem.attr('isfree'), discount: tmpItem.attr('discount') });
    }

    var itemCount = datas.length;
    var tmpHTMLArr = [];
    var tmpStyle = '';
    var tmpPrice = '';
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-experiment-content">');
    tmpHTMLArr.push('    <div class="row align-items-center row-experiment-group-list">');
    tmpHTMLArr.push('        <div class="col">');
    var itemsHTML = [];
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '" data-target="' + datas[i].name + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgHeight + 'px;';
        itemsHTML.push('                    <img class="img-fluid" src="' + _gCourseImgMap[datas[i].name.trim()].img + '" style="' + tmpStyle + '" />');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin" style="padding-top: 8px;">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'color:' + _gCourseImgMap[datas[i].name.trim()].color + ';font-size:12px';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + datas[i].course + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpPrice = (datas[i].isfree == '1' ? '免费' : parseInt(datas[i].price).toFixed(2));
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">价格: <span style="' + (datas[i].discount != '0' ? 'text-decoration:line-through;' : '') + '">' + tmpPrice + '<span></p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        if (datas[i].isfree != '1') {
            itemsHTML.push('            <div class="row no-margin">');
            itemsHTML.push('                <div class="col no-padding">');
            tmpPrice = (datas[i].discount == '0' ? '无' : parseInt(datas[i].price * 100).toFixed(2));
            itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">折扣: ' + tmpPrice + '</p>');
            itemsHTML.push('                </div>');
            itemsHTML.push('            </div>');
        }

        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join(''), 'course_package'));
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    $('.horizontal-list-item').on('click', function (eventObj) {
        ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getlessonslist, { course_name: $(eventObj.currentTarget).attr('data-target') }), '', buildDetail_Exp);
    });

    bindHorizontalListEvent(containerHeight, width, space, itemCount, 'course_package');
    ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getlessonslist, { course_name: datas[0].name }), '', buildDetail_Exp);
};

function buildDetail_Exp(response) {
    var datas = [
       {
           id: 1,
           date: '2017-10-3',
           author: 'Teacher Zhang',
           status: '',
           title: '模式识别',
           content: '想一想，试一试，如何让吃豆人运行到附件图中的位置.',
           attach: ['image/Experimental/e_1.png', 'image/Experimental/e_2.png', 'image/Experimental/e_3.png'],
           course: '',
           lesson: ''
       }
    ];

    var tmpHTMLArr = [];
    tmpHTMLArr.push('    <div class="row align-items-center text-14 row-experiment-group-item-list">');
    tmpHTMLArr.push('        <div class="col no-padding">');
    tmpHTMLArr.push('<table class="table table-hover table-sm">');
    tmpHTMLArr.push('   <thead>');
    tmpHTMLArr.push('       <tr>');
    tmpHTMLArr.push('           <th scope="col col-experiment-state" style="width: 50px; min-width:50px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-title" style="width: 100px; min-width:50px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-content" style="height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-attach" style="width: 60px; min-width:60px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-author" style="width: 120px; min-width:120px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('           <th scope="col col-experiment-date" style="width: 120px; min-width:120px; height: 1px; padding: 0px;"></th>');
    tmpHTMLArr.push('       </tr>');
    tmpHTMLArr.push('   </thead>');
    tmpHTMLArr.push('   <tbody>');

    var tmpState;
    for (var i = 0; i < datas.length; i++) {
        tmpState = (datas[i].status == '1' ? 'star' : 'star-half-alt');
        tmpHTMLArr.push('       <tr style="line-height: 30px;">');
        tmpHTMLArr.push('           <td class="text-center"><i class="fas fa-' + tmpState + ' course-state"></i></td>');
        tmpHTMLArr.push('           <td class="text-bold">' + datas[i].title + '</td>');
        tmpHTMLArr.push('           <td><div class="experiment-content-text">' + datas[i].content + '</div></td>');
        tmpHTMLArr.push('           <td><button type="button" class="btn btn-outline-info btn-sm experiment-attach-btn" data-target="' + datas[i].id + '">View</button></td>');
        tmpHTMLArr.push('           <td>' + datas[i].author + '</td>');
        tmpHTMLArr.push('           <td>' + datas[i].date + '</td>');
        tmpHTMLArr.push('       </tr>');
    }

    tmpHTMLArr.push('   </tbody>');
    tmpHTMLArr.push('</table>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    $('.row-experiment-group-item-list').remove();
    $('.row-experiment-group-list').after($(tmpHTMLArr.join('')));
    $('.experiment-attach-btn').on('click', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var attachs = [];
        for (var i = 0; i < datas.length; i++) {
            if (dataId == datas[i].id) {
                showExperimentAttachs(datas[i]);
            }
        }
    });
};

function showExperimentAttachs(data) {
    if ($('#modal_Experiment_Attachs').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Experiment_Attachs" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog modal-lg" role="document">');
        tmpHTMLStr.push('        <div class="modal-content h-100">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title font-16" id="exampleModalLabel">题目详情</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
        tmpHTMLStr.push('<div class="container-fluid wrap-circle">');
        tmpHTMLStr.push('   <div class="row">');
        tmpHTMLStr.push('       <div class="col">');
        tmpHTMLStr.push('                <div id="carousel_Experiment_Attachs" class="carousel slide h-100" data-ride="carousel" data-interval="90000" data-keyboard="true" data-wrap="false" data-ride="true">');
        tmpHTMLStr.push('                    <div class="carousel-inner h-100">');
        tmpHTMLStr.push('                    </div>');
        tmpHTMLStr.push('                    <a class="carousel-control-prev" href="#carousel_Experiment_Attachs" role="button" data-slide="prev">');
        //tmpHTMLStr.push('                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <i class="fas fa-angle-left fa-2x" aria-hidden="true"></i>');
        tmpHTMLStr.push('                        <span class="sr-only" style="color:darkred">Previous</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                    <a class="carousel-control-next" href="#carousel_Experiment_Attachs" role="button" data-slide="next">');
        //tmpHTMLStr.push('                        <span class="carousel-control-next-icon" aria-hidden="true"></span>');
        tmpHTMLStr.push('                        <i class="fas fa-angle-right fa-2x" aria-hidden="true"></i>');
        tmpHTMLStr.push('                        <span class="sr-only">Next</span>');
        tmpHTMLStr.push('                    </a>');
        tmpHTMLStr.push('                </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('    <div class="row">');
        tmpHTMLStr.push('       <div class="col">');
        tmpHTMLStr.push('           <p class="padding-10">' + data.content + '</p>');
        tmpHTMLStr.push('       </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-footer">');
        tmpHTMLStr.push('                <button type="button" class="btn btn-outline-primary btn-sm" data-dismiss="modal">关闭</button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('        </div>');
        tmpHTMLStr.push('    </div>');
        tmpHTMLStr.push('</div>');

        $('body').append($(tmpHTMLStr.join('')));
    }

    $('#carousel_Experiment_Attachs .carousel-inner').empty();
    var tmpItemStr = '';
    for (var i = 0; i < data.attach.length; i++) {
        tmpItemStr += '<div class=" h-100 carousel-item ' + (i == 0 ? 'active' : '') + '">';
        tmpItemStr += '   <img class="d-block h-100" src="' + data.attach[i] + '" style="margin: auto;">';
        tmpItemStr += '</div>';
    }

    $('#carousel_Experiment_Attachs .carousel-inner').append($(tmpItemStr));
    $('#modal_Experiment_Attachs').modal('show');
};

function buildContent_Circle_Old() {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];

    var dataSystem = [];
    for (var i = 0; i < 20; i++) {
        dataSystem.push({
            "userName": names[i % 13],
            "header": "image/header/" + (i % 10) + ".jpg",
            "userId": i
        });
    }

    var dataUser = [];
    for (var i = 0; i < 150; i++) {
        var tmpIdx = randomInt(0, 149);
        dataUser.push({
            "userName": names[tmpIdx % 13],
            "header": "image/header/" + (tmpIdx % 10) + ".jpg",
            "userId": i
        });
    }

    var dataSearch = { value: [] };
    for (var i = 0; i < 12; i++) {
        dataSearch.value.push({
            "userName": names[i],
            "shortAccount": shortAccount[i],
            "userId": i
        });
    }

    var defaultOptions = {
        url: null,                      //请求数据的 URL 地址
        jsonp: null,                  //设置此参数名，将开启jsonp功能，否则使用json数据结构
        data: dataSearch,                              //提示所用的数据，注意格式
        indexId: 0,                     //每组数据的第几个数据，作为input输入框的 data-id，设为 -1 且 idField 为空则不设置此值
        indexKey: 0,                    //每组数据的第几个数据，作为input输入框的内容
        idField: 'userId',                    //每组数据的哪个字段作为 data-id，优先级高于 indexId 设置（推荐）
        keyField: 'userName',                   //每组数据的哪个字段作为输入框内容，优先级高于 indexKey 设置（推荐）

        /* 搜索相关 */
        autoSelect: true,               //键盘向上/下方向键时，是否自动选择值
        allowNoKeyword: true,           //是否允许无关键字时请求数据
        getDataMethod: 'data',    //获取数据的方式，url：一直从url请求；data：从 options.data 获取；firstByUrl：第一次从Url获取全部数据，之后从options.data获取
        delayUntilKeyup: false,         //获取数据的方式 为 firstByUrl 时，是否延迟到有输入时才请求数据
        ignorecase: true,              //前端搜索匹配时，是否忽略大小写
        effectiveFields: [],            //有效显示于列表中的字段，非有效字段都会过滤，默认全部。
        effectiveFieldsAlias: { userName: "姓名" },       //有效字段的别名对象，用于 header 的显示
        searchFields: [],               //有效搜索字段，从前端搜索过滤数据时使用，但不一定显示在列表中。effectiveFields 配置字段也会用于搜索过滤
        clearable: true,

        multiWord: false,               //以分隔符号分割的多关键字支持
        separator: ',',                 //多关键字支持时的分隔符，默认为半角逗号

        /* UI */
        autoDropup: false,              //选择菜单是否自动判断向上展开。设为 true，则当下拉菜单高度超过窗体，且向上方向不会被窗体覆盖，则选择菜单向上弹出
        autoMinWidth: false,            //是否自动最小宽度，设为 false 则最小宽度不小于输入框宽度
        showHeader: false,              //是否显示选择列表的 header。为 true 时，有效字段大于一列则显示表头
        showBtn: true,                  //是否显示下拉按钮
        inputBgColor: '',               //输入框背景色，当与容器背景色不同时，可能需要该项的配置
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
        },                              //列表的样式控制
        listAlign: 'left',              //提示列表对齐位置，left/right/auto
        listHoverStyle: 'background: #07d; color:#fff', //提示框列表鼠标悬浮的样式
        listHoverCSS: 'jhover',         //提示框列表鼠标悬浮的样式名称

        /* methods */
        //fnProcessData: null,     //processData 格式化数据的方法，返回数据格式参考 data 参数
        //fnGetData: null,             //getData获取数据的方法，无特殊需求一般不作设置
        //fnAdjustAjaxParam: null,        //调整 ajax 请求参数方法，用于更多的请求配置需求。如对请求关键字作进一步处理、修改超时时间等
        //fnPreprocessKeyword: null       //搜索过滤数据前，对输入关键字作进一步处理方法。注意，应返回字符串
    };

    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-circle">');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col">');
    tmpHTMLArr.push('           <div class="input-group w-100 wrap-circle-search">');
    //tmpHTMLArr.push('               <i class="clearable glyphicon glyphicon-remove" style="position: absolute; top: 12px; right: 12px; z-index: 4; cursor: pointer; font-size: 12px; display: none;"></i>');
    tmpHTMLArr.push('               <input type="text" class="form-control form-control-sm" id="search_Circle" style="border-radius:5px; border-color:rgb(17,138,195);" autocomplete="off" placeholder="Search" data-id="" alt="a">');
    tmpHTMLArr.push('               <div class="input-group-btn">');
    tmpHTMLArr.push('                   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="" style="display: none;">');
    tmpHTMLArr.push('                       <span class="caret"></span>');
    tmpHTMLArr.push('                   </button>');
    tmpHTMLArr.push('                   <ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col">');
    tmpHTMLArr.push('       <table class="w-100"><tr>');
    tmpHTMLArr.push('       <td style="width:10%;">');
    tmpHTMLArr.push('           <hr class="w-100" style="height:1px;border:none;border-top:1px solid rgba(0,0,0,0.3);"/>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       <td style="white-space: nowrap;">');
    tmpHTMLArr.push('           <span style="line-height: 30px;">系统及顾问</span>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       <td style="width:85%;">');
    tmpHTMLArr.push('           <hr class="w-100" style="height:1px;border:none;border-top:1px solid rgba(0,0,0,0.3);"/>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       </tr></table>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row no-wrap">');
    tmpHTMLArr.push('       <div class="col no-wrap" style="overflow:auto;">');
    var orgContainerHeight = 100;
    var orgHeight = 80;
    var orgWidth = 70;
    var orgSpace = 10;
    var orgImgHeight = 50;
    var availableHeight = $('.col-content').height();
    var scale = availableHeight / _orgAvailableHeight;
    var containerheight = Math.floor(scale * orgContainerHeight);
    var height = Math.floor(scale * orgHeight);
    var width = Math.floor(scale * orgWidth);
    var padding = Math.floor((containerheight - height) / 2);
    var imgheight = Math.floor(scale * orgImgHeight);
    var space = Math.floor(scale * orgSpace);
    var itemsHTML = [];
    var itemCount = dataSystem.length;
    var tmpStyle = '';
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px; padding-top:' + padding + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '" data-target="' + dataSystem[i].userId + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgheight + 'px; width:' + imgheight + 'px;';
        itemsHTML.push('                    <img class="img-fluid circle-item-header" src="' + dataSystem[i].header + '" style="' + tmpStyle + '" />');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'font-size:12px';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + dataSystem[i].userName + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join(''), "system"));
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row">');
    tmpHTMLArr.push('       <div class="col">');
    tmpHTMLArr.push('       <table class="w-100"><tr>');
    tmpHTMLArr.push('       <td style="width:10%;">');
    tmpHTMLArr.push('           <hr class="w-100" style="height:1px;border:none;border-top:1px solid rgba(0,0,0,0.3);"/>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       <td style="white-space: nowrap;">');
    tmpHTMLArr.push('           <span style="line-height: 30px;">我的小伙伴</span>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       <td style="width:85%;">');
    tmpHTMLArr.push('           <hr class="w-100" style="height:1px;border:none;border-top:1px solid rgba(0,0,0,0.3);"/>');
    tmpHTMLArr.push('       </td>');
    tmpHTMLArr.push('       </tr></table>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row no-wrap row-circle-friend-wrap justify-content-center">');
    tmpHTMLArr.push('       <div class="col col-circle-friend-wrap" style="overflow:auto; padding:15px;">');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.col-main-content').append($(tmpHTMLArr.join('')));
    $("#search_Circle").bsSuggest(defaultOptions);
    $('.horizontal-list-item').on('click', function (eventObj) {
        buildDetail_Course($(eventObj.currentTarget).attr('data-target'));
    });

    bindHorizontalListEvent(containerheight, width, space, dataSystem.length, "system");
    $('.row-circle-friend-wrap').height($('.col-main-content').height() - $('.wrap-circle').height());
    itemsHTML = [];
    itemCount = dataUser.length;
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-top:' + padding + 'px; width:' + width + 'px;';
        itemsHTML.push('<div class="text-center" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;';
        itemsHTML.push('        <div class="container-fluid no-wrap horizontal-list-item" style="' + tmpStyle + '" data-target="' + dataUser[i].userId + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'height:' + imgheight + 'px; width:' + imgheight + 'px;';
        itemsHTML.push('                    <img class="img-fluid circle-item-header" src="' + dataUser[i].header + '" style="' + tmpStyle + '" />');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col no-padding">');
        tmpStyle = 'font-size:12px';
        itemsHTML.push('                   <p class="text-center" style="' + tmpStyle + '">' + dataUser[i].userName + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }
    $('.col-circle-friend-wrap').append($(itemsHTML.join('')));
};

function buildContent_Circle() {
    var successFn = function (reponsse) {
        if (_getExcuted(reponsse)) {
            buildContent_Circle_Do(reponsse);
        } else {
            _showGlobalMessage('获取朋友列表失败，请重试!', 'warning', 'alert_GetFriendList_Error');
        }
    };

    //ajaxFn('GET', _getRequestURL(_gURLMapping.circle.getfriends, {}), '', successFn);
    buildContent_Circle_Do();
}

function buildContent_Circle_Do(reponsse) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('   <div class="row h-100 no-wrap">');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-sidetoolbar">');
    circleBuildSideToolbar(tmpHTMLArr);
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
    tmpHTMLArr.push(circleBuildFriendPart());
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-message-list">');
    tmpHTMLArr.push(circleBuildMessagePart());
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.col-main-content').append($(tmpHTMLArr.join('')));
    //resize message input row and history row height
    var tmpObj = circleCalcMessageHeight(-1);
    $(".col-circle-message-input").height(tmpObj.input);
    $(".col-circle-message-history").height(tmpObj.history);
    //load messages
    webSocketGetCiecleHistory('-1');
    //circleLoadMessageHistory();
    //init events
    initEvents_Circle();
};

function circleBuildSideToolbar(tmpHTMLArr) {
    tmpHTMLArr.push('<div class="btn-group-vertical">');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item active" data-target="chat" title="聊天">');
    tmpHTMLArr.push('       <i class="far fa-comment"></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item">1</i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item" data-target="address" title="通讯录">');
    tmpHTMLArr.push('       <i class="far fa-address-book"></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item">1</i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('   <button type="button" class="btn btn-outline-secondary btn-circle-stb-item" data-target="collect" title="收藏">');
    tmpHTMLArr.push('       <i class="far fa-star "></i>');
    tmpHTMLArr.push('       <div class="alert-circle-stb-item">1</i>');
    tmpHTMLArr.push('   </button>');
    tmpHTMLArr.push('</div>');
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
    tmpHTMLArr.push('                   <ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>');
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

function circleBuildFriendPart() {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid circle-user-list-group">');
    for (var j = 0; j < _gCiecleUsers.length; j++) {
        circleBuildFriendItem(tmpHTMLArr, _gCiecleUsers[j]);
    }

    tmpHTMLArr.push('</div>');
    return tmpHTMLArr.join('');
};

function circleBuildFriendItem(tmpHTMLArr, item) {
    tmpHTMLArr.push('<div class="row row-circle-user-list-item" data-target="' + item.userId + '" data-type="' + item.type + '">');
    tmpHTMLArr.push('   <div class="col-1 col-circle-user-list-item-header">');
    if (item.type == 'group') {
        var imgStyle = (item.items.length <= 4 ? 'width:15px;height:15px;' : '');
        var wrapStyle = (item.items.length > 4 && item.items.length < 7 ? 'style="padding: 5px 0px;"' : '');
        var marginStyle = '';
        tmpHTMLArr.push('       <div class="group-header-wrap" ' + wrapStyle + '>');
        for (var j = 0; j < item.items.length && j < 9; j++) {
            marginStyle = '';
            if (j > 0) {
                if ((item.items.length > 4 && j > 3) || (item.items.length <= 4 && j > 2)) {
                    marginStyle += 'margin-top:1px;';
                }

                if ((item.items.length > 4 && j % 3 != 0) || (item.items.length <= 4 && j % 2 != 0)) {
                    marginStyle += 'margin-left:1px;';
                }
            }

            tmpHTMLArr.push('           <img class="circle-group-item-header" src="' + item.items[j].header + '" style="' + imgStyle + marginStyle + '">');
        }

        tmpHTMLArr.push('       </div>');
    } else {
        tmpHTMLArr.push('       <img class="img-fluid circle-user-list-item-header" src="' + item.header + '">');
    }

    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="col">');
    tmpHTMLArr.push(item.userName);
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="col-1 col-circle-user-list-item-msg">');
    tmpHTMLArr.push('       <div class="circle-user-list-item-msg">0</div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
};

function circleBuildMessagePart() {
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
    tmpHTMLArr.push('           <div class="row row-split">');
    tmpHTMLArr.push('               <div class="col col-split"></div>');
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
    return tmpHTMLArr.join('');
};

function circleUpdateMsgHistory(userSymbol) {
    var isDisplay = (typeof (userSymbol) == 'string' ? false : true);
    var currUserId = (isDisplay ? $('.label-circle-message-history-user').attr('data-target') : userSymbol);
    var currUserType = (isDisplay ? $('.label-circle-message-history-user').attr('data-type') : 'user');
    var currUserObj = circleGetUserObj(currUserId);
    var currHistory = _gCirleMessages[currUserId];
    if (!isDisplay) {
        $('.container-circle-message-history').empty();
        $('.label-circle-message-history-user').text(currUserObj.userName);
        $('.label-circle-message-history-user').attr('data-target', currUserId);
        $('.label-circle-message-history-user').attr('data-type', currUserObj.type);
    }

    var existCount = $('.row-message-item').length;
    for (var i = existCount; i < currHistory.length; i++) {
        circleAddMsgItem(currHistory[i]);
    }
};

function circleAddMsgItem(msgItem) {
    $('.container-circle-message-history').append(msgItem);
    var colHeight = $('.col-circle-message-history').height();
    var containerHeight = $('.container-circle-message-history').height();
    if (containerHeight > colHeight) {
        $('.col-circle-message-history').scrollTop(containerHeight - colHeight);
    }

    $('.circle-message-input-field').html('');
};

function circleBuildEmojiPopover() {
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
}

function circleBuildMessageItem(content, type, userInfo) {
    userInfo = (typeof (userInfo) == 'string' ? circleGetUserObj(userInfo.split('|')[0], userInfo.split('|')[1]) : userInfo);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="row row-message-item">');
    if (type == -1) {
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <img class="img-fluid user-header" src="' + userInfo.header + '" />');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-9">');
        tmpHTMLArr.push('       <div class="message-item-wrap">');
        tmpHTMLArr.push('           <div class="arrow-back arrow-left"></div>');
        tmpHTMLArr.push('           <div class="arrow-front arrow-left"></div>');
        tmpHTMLArr.push('           <div class="message-item-content">' + content + '</div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
    } else {
        tmpHTMLArr.push('   <div class="col-2"></div>');
        tmpHTMLArr.push('   <div class="col-9">');
        tmpHTMLArr.push('       <div class="message-item-wrap msg-item-wrap-right">');
        tmpHTMLArr.push('           <div class="message-item-content">' + content + '</div>');
        tmpHTMLArr.push('           <div class="arrow-back arrow-right"></div>');
        tmpHTMLArr.push('           <div class="arrow-front arrow-right"></div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-1">');
        tmpHTMLArr.push('       <img class="img-fluid user-header" src="' + userInfo.header + '" />');
        tmpHTMLArr.push('   </div>');
    }

    tmpHTMLArr.push('</div>');
    return tmpHTMLArr.join('');
};

function circleGetUserObj(userId) {
    var tmpObj = null;
    for (var i = 0; i < _gCiecleUsers.length; i++) {
        if (_gCiecleUsers[i].userId == userId) {
            tmpObj = _gCiecleUsers[i];
            break;
        }
    }

    return tmpObj;
};

function circleCalcMessageHeight(top) {
    var retObj = null;
    top = (top == -1 ? $('.row-footer').offset().top - 200 : top);
    if (circleCheckMsgDragScope(top, true)) {
        var containerHeight = $(".col-circle-message-list").height() - 10 - 39;
        var minHeight = containerHeight * 25 / 100;
        var tmpHeight = $("body").height() - top - 30 - 39;
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

function initEvents_Circle() {
    $('.btn-circle-stb-item').on('click', function (eventObj) {
        $($(eventObj.currentTarget).find('.alert-circle-stb-item')).empty().hide();
        var tmpSymbol = $(eventObj.currentTarget).attr('data-target');
        if (!$(eventObj.currentTarget).hasClass('active')) {
            $('.btn-circle-stb-item').removeClass('active');
            $(eventObj.currentTarget).addClass('active');
            $('.col-circle-itemlist-container').empty();
            $('.col-circle-message-list').empty();
            switch (tmpSymbol) {
                case 'address':
                    circleBuildSection_Address();
                    break;
                case 'chat':
                    circleBuildSection_Chat();
                    break;
                case 'collect':
                    alert('Coming Soon!');
                    break;
            }
        }
    });

    initEvents_Circle_Chat();
};

function initEvents_Circle_Chat() {
    var defaultOptions = {
        url: null,                             //请求数据的 URL 地址
        jsonp: null,                         //设置此参数名，将开启jsonp功能，否则使用json数据结构
        data: _circleDataSearch,      //提示所用的数据，注意格式
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
        listAlign: 'left',               //提示列表对齐位置，left/right/auto
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

    $('#switch_DND_For_User').wrap('<div class="switch" />').parent().bootstrapSwitch();
    $('#switch_Top_For_User').wrap('<div class="switch" />').parent().bootstrapSwitch();

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

    bindContentEditableEvent($('.circle-message-input-field'));

    $('.circle-message-input-type.input-type-file').on('click', function () {
        alert('Function for transfer file, Coming Soon!');
    });

    $('.circle-message-input-type.input-type-history').on('click', function () {
        alert('Function for pop up a window to display all chatting records, Coming Soon!');
    });

    $('.circle-message-input-type.input-type-emoji').popover({
        html: true,
        content: circleBuildEmojiPopover()
    });

    $('.circle-message-input-type.input-type-emoji').on('shown.bs.popover', function () {
        circleChangeEmojiGroup(null);
        $('.emoji-groups-item').on('click', circleChangeEmojiGroup);
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
        if (!circleCheckEmptyInput()) {
            var msg = circleBuildMessageItem($('.circle-message-input-field').html(), 0, _gUserInfoObj);
            var tmpSymbol = $('.label-circle-message-history-user').attr('data-target');
            if (typeof _gCirleMessages[tmpSymbol] == undefined || !$.isArray(_gCirleMessages[tmpSymbol])) {
                _gCirleMessages[tmpSymbol] = [];
            }

            _gCirleMessages[tmpSymbol].push(msg);
            webSocketSend('send', msg);
            circleUpdateMsgHistory();
        }
    });

    $('.row-circle-user-list-item').on('click', function (eventObj) {
        circleClickUserItem($(eventObj.currentTarget));
    });

    $('.row-circle-user-list-item').on('dblclick', function (eventObj) {
        circleDBClickUserItem(eventObj);
    });

    $('#search_Circle').on('onSetSelectValue', function () {
        var user = arguments[2];
        circleUpdateMsgHistory(user.id);
        $('.row-circle-user-list-item').removeClass('active');
        var currItem = $(eventObj.currentTarget);
        currItem.addClass('active');
    });

    $('.col-circle-message-history-button .btn.btn-sm').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        if (target.attr('data-type') != 'channel') {
            circleShowSettingBar(target.attr('data-target'), target.attr('data-type'));
        } else {
            circleBuildChannelPop(eventObj);
        }
    });

    $('.setting-bar-chatter .user-header').on('click', circleBuildUserPop);

    $('.setting-bar-chatter .btn-add-user-to-group').on('click', function (eventObj) {
        circleShowAddToGroupPop($(eventObj.currentTarget).attr('data-target'));
    });
};

function circleBuildUserPop(eventObj) {
    if ($('.user-popover-wrap').length > 0 && $('.user-popover-wrap').css('display') != 'none') {
        $('.user-popover-wrap').hide();
    } else {

        var target = $(eventObj.currentTarget);
        var userId = target.attr('data-target');
        var current = circleGetUserObj(userId);
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
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-add-friend" title="加为好友" data-taget="">');
            tmpHTMLArr.push('                   <i class="far fa-plus-square"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-share-friend" title="推荐朋友" data-taget="">');
            tmpHTMLArr.push('                   <i class="far fa-share-square"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('               <button type="button" class="btn btn-sm btn-user-popover btn-send-msg" title="开始聊天" data-taget="">');
            tmpHTMLArr.push('                   <i class="far fa-comment"></i>');
            tmpHTMLArr.push('               </button>');
            tmpHTMLArr.push('           </div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('</div>');
            container.append($(tmpHTMLArr.join('')));
            $('.user-popover-wrap .btn-user-popover').on('click', circleClickUserPopBtn);
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

function circleClickUserPopBtn(eventObj) {
    var btn = $(eventObj.currentTarget);
    var userId = btn.attr('data-taget');
    if (btn.hasClass('btn-add-friend')) {
        alert('Add Friend to Create a Group!');
    } else if (btn.hasClass('btn-share-friend')) {
        alert('Share Friend to Other Friend!');
    } else if (btn.hasClass('btn-send-msg')) {
        circleSwitchToTalk(userId, 'user');
    }
};

function circleShowSettingBar(userId, userType) {
    var userObj = circleGetUserObj(userId);
    var settingBar = $('.setting-bar-chatter');
    if (settingBar.css('display') != 'none') {
        $('.col-main-content').css('overflow', 'hidden');
        $('.user-popover-wrap').hide();
        settingBar.animate({
            right: '-250px',
            opacity: '0'
        }, 500, function () { settingBar.hide(); });
    } else {
        $('.setting-bar-chatter .user-header').attr('src', userObj.header);
        $('.setting-bar-chatter .user-header').attr('data-target', userObj.userId);
        $('.setting-bar-chatter .user-name').text(userObj.userName);
        settingBar.show();
        settingBar.animate({
            right: '0px',
            opacity: '1'
        }, 500, function () { $('.col-main-content').css('overflow', 'auto'); });
    }
};

function circleBuildSection_Chat(id, type) {
    $('.col-circle-itemlist-container').append($(circleBuildFriendPart()));
    $('.col-circle-message-list').append($(circleBuildMessagePart()));
    var tmpObj = circleCalcMessageHeight(-1);
    $(".col-circle-message-input").height(tmpObj.input);
    $(".col-circle-message-history").height(tmpObj.history);
    //load messages
    var chatterId = (arguments.length == 2 ? id : _gCurrentChatter.id == '' ? '-1' : _gCurrentChatter.id);
    var chatterType = (arguments.length == 2 ? type : _gCurrentChatter.type == '' ? 'user' : _gCurrentChatter.type);
    webSocketGetCiecleHistory(chatterId, chatterType);
    initEvents_Circle_Chat();
};

function circleBuildSection_Address() {
    $('.col-circle-itemlist-container').append($(circleBuildFriendPart_Address()));
    $('.col-circle-message-list').append($(circleBuildMessagePart_Address()));
    $('.col-circle-message-history').height($("body").height() - 30 - 35 - 39 - 5);
    initEvents_Circle_Address();
};

function circleBuildFriendPart_Address() {
    _gCircleGroups = [
        { id: 'new', title: '新朋友', items: [{ userName: "新朋友", header: "image/tmpheader.jpg", userId: "-2" }] },
        { id: 'channel', title: '频道', items: [{ userName: "频道", header: "image/tmpheader.jpg", userId: "-3" }] },
        { id: 'group', title: '讨论组', items: initGroupForTest() }
    ];
    var tmpArr = [];
    for (var i = 0; i < _gCiecleUsers.length; i++) {
        if (_gCiecleUsers[i].type == 'user') {
            tmpArr.push(_gCiecleUsers[i]);
        }
    }

    _gCircleGroups = _gCircleGroups.concat(_GroupSortArray(tmpArr, 'userName'));

    var tmpHTMLArr = [];
    for (var i = 0; i < _gCircleGroups.length; i++) {
        if (_gCircleGroups[i].items.length > 0) {
            tmpHTMLArr.push('<div class="container-fluid circle-user-list-group">');
            if (i > 0) {
                tmpHTMLArr.push('   <div class="row"><div class="col" style="height:10px;"></div></div>');
            }

            tmpHTMLArr.push('   <div class="row row-circle-address-group-title">');
            tmpHTMLArr.push('       <div class="col">');
            tmpHTMLArr.push(_gCircleGroups[i].title);
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            for (var j = 0; j < _gCircleGroups[i].items.length; j++) {
                circleBuildFriendItem(tmpHTMLArr, _gCircleGroups[i].items[j]);
            }

            tmpHTMLArr.push('</div>');
        }
    }

    return tmpHTMLArr.join('');
};

function circleBuildMessagePart_Address() {
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
    return tmpHTMLArr.join('');
};

function initEvents_Circle_Address() {
    var defaultOptions = {
        url: null,                             //请求数据的 URL 地址
        jsonp: null,                         //设置此参数名，将开启jsonp功能，否则使用json数据结构
        data: _circleDataSearch,      //提示所用的数据，注意格式
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
        listAlign: 'left',               //提示列表对齐位置，left/right/auto
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
    $('.row-circle-user-list-item').on('click', circleClickAddressItem);
    circleClickAddressItem(null);
};

function circleClickAddressItem(eventObj) {
    var currentTarget = (eventObj != null ? $(eventObj.currentTarget) : $('.row-circle-user-list-item[data-target="-2"]'));
    var userId = currentTarget.attr('data-target');
    $('.row-circle-user-list-item').removeClass('active');
    currentTarget.addClass('active');
    var currUserObj = null;
    var currType = 'user';
    if (userId == '-2') {
        currUserObj = { userName: "新朋友", header: "image/tmpheader.jpg", userId: "-2" };
        var newFriendFn = function (response) {
            var newFriends = initNewFriendsForTest();
            circleBuildNewFriendsList(newFriends);
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.circle.getguests, {}), '', newFriendFn);
        $('.row-circle-message-part-2').hide();
        $('.row-circle-message-part-1').show();
    } else if (userId == '-3') {
        currType = 'channel';
        currUserObj = { userName: "频道", header: "image/tmpheader.jpg", userId: "-3" };
        var channelFn = function (response) {
            var channels = initChannelForTest();
            circleBuildChannelList(channels);
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.circle.getguests, {}), '', channelFn);
        $('.row-circle-message-part-2').hide();
        $('.row-circle-message-part-1').show();
    } else {
        if (currentTarget.attr('data-type') == 'group') {
            currType = 'group';
            $('.row-circle-message-part-1').show();
            $('.row-circle-message-part-2').hide();
            currUserObj = getCurrentGroup(userId);
            circleBuildGroupDetail(userId);
        } else {
            currUserObj = circleGetUserObj(userId);
            circleBuildFriendDetail(currUserObj);
        }
    }

    $('.label-circle-message-history-user').text(currUserObj.userName);
    $('.label-circle-message-history-user').attr('data-target', currType);
};

function circleBuildNewFriendsList(friends) {
    var container = $('.container-circle-message-history');
    var tmpHTMLArr = [];
    for (var i = 0; i < friends.length; i++) {
        tmpHTMLArr.push('<div class="row row-circle-address-new-friend-item">');
        tmpHTMLArr.push('   <div class="col-1 col-new-friend-header">');
        tmpHTMLArr.push('       <img class="img-fluid circle-address-new-friend-header" src="' + friends[i].header + '" data-target="' + friends[i].userId + '">');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col col-new-friend-content">');
        tmpHTMLArr.push('       <div class="container container-fluid">');
        tmpHTMLArr.push('           <div class="row">');
        tmpHTMLArr.push('               <div class="col">' + friends[i].userName + '</div>');
        tmpHTMLArr.push('           </div>');
        for (var j = 0; j < 2 && j < friends[i].msg.length; j++) {
            tmpHTMLArr.push('           <div class="row">');
            tmpHTMLArr.push('               <div class="col text-999999">' + friends[i].msg[j] + '</div>');
            tmpHTMLArr.push('           </div>');
        }

        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div class="col-1 d-flex align-items-center col-new-friend-accept">');
        if (friends[i].accecpt == '1') {
            tmpHTMLArr.push('已添加');
        } else {
            tmpHTMLArr.push('       <button type="button" class="btn btn-success btn-sm btn-new-friend-accept" data-target="' + friends[i].userId + '">接受</button>');
        }

        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    container.empty();
    container.append($(tmpHTMLArr.join('')));
    $('.circle-address-new-friend-header').on('click', function (eventObj) {
        var userObj = circleGetUserObj($(eventObj.currentTarget).attr('data-target'));
        circleBuildFriendDetail(userObj);
    });

    $('.btn-new-friend-accept').on('click', function (eventObj) {
        var target = $(eventObj.currentTarget);
        var userObj = circleGetUserObj(target.attr('data-target'));
        userObj.accecpt = '1';
        circleAcceptFriendRequest(userObj.userId);
        var parent = target.parent();
        parent.empty();
        parent.text('已添加');
    });
};

function circleAcceptFriendRequest(userId) {

};

function circleBuildChannelList(channels) {
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

function circleBuildChannelPop(eventObj) {
    var channels = initChannelForTest();
    var target = $(eventObj.currentTarget);
    var channelId = target.attr('data-target');
    var current = null;
    for (var i = 0; i < channels.length; i++) {
        if (channels[i].userId == channelId) {
            current = channels[i];
            break;
        }
    }

    var container = $('.container-circle-message-history');
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

    var tmpTop = eventObj.pageY - container.offset().top + 5;
    var tmpLeft = eventObj.pageX - container.offset().left + 15;
    if (tmpTop + $('.channel-popover-wrap').height() > $('.col-circle-message-history').height()) {
        tmpTop -= $('.channel-popover-wrap').height();
    }

    if (tmpLeft + $('.channel-popover-wrap').width() > $('.col-circle-message-history').width()) {
        tmpLeft -= $('.channel-popover-wrap').width();
    }

    $('.channel-popover-wrap').css('top', tmpTop + 'px');
    $('.channel-popover-wrap').css('left', tmpLeft + 'px');
};

function circleBuildFriendDetail(userObj) {
    if (userObj != null) {
        var titleLab = $('.label-circle-message-history-user');
        var detailWrap = $('.row-circle-message-part-2');
        var listWrap = $('.row-circle-message-part-1');
        detailWrap.show();
        listWrap.hide();
        var isNew = (userObj.accecpt == '1');
        if (isNew) {
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
            tmpHTMLArr.push('           <button type="button" class="btn btn-success btn-sm btn-circle-friend-item-detail-talk">发消息</button>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('       <div class="col text-right col-circle-friend-item-detail-reply">');
            tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-friend-item-detail-replay" title="回复" data-taget="">');
            tmpHTMLArr.push('               <i class="fas fa-reply-all"></i>');
            tmpHTMLArr.push('           </button>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('</div>');
            $('.row-circle-message-part-2 .col').append($(tmpHTMLArr.join('')));
            $('.btn-circle-friend-item-detail-talk').on('click', function () {
                circleSwitchToTalk($(arguments[0].currentTarget).attr('data-target'), 'user');
            });

            $('.btn-circle-friend-item-detail-replay').on('click', function () {
                circleOpenRelpayPop($(arguments[0].currentTarget).attr('data-target'));
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
        $('.container-circle-friend-item-detail .circle-friend-item-detail-header').attr('src', userObj.header);
        $('.container-circle-friend-item-detail .p-circle-friend-item-detail-note').text(userObj.note);
        $('.container-circle-friend-item-detail #txt_Circle_Friend_Item_Detail_Comment').val(userObj.comment);
        $('.container-circle-friend-item-detail .col-circle-friend-item-detail-address').text(userObj.address);
        $('.container-circle-friend-item-detail .col-circle-friend-item-detail-symbol').text(userObj.userId);

        if (isNew) {
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk').hide();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply').show();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk .btn-circle-friend-item-detail-talk').attr('data-target', '');
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply .btn-circle-friend-item-detail-replay').attr('data-target', userObj.userId);
        } else {
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk').show();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply').hide();
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-talk .btn-circle-friend-item-detail-talk').attr('data-target', userObj.userId);
            $('.container-circle-friend-item-detail .col-circle-friend-item-detail-reply .btn-circle-friend-item-detail-replay').attr('data-target', '');
        }
    }
};

function circleSwitchToTalk(chatterId, chatterType) {
    $('.btn-circle-stb-item').removeClass('active');
    $('.btn-circle-stb-item[data-target="chat"]').addClass('active');
    $('.col-circle-itemlist-container').empty();
    $('.col-circle-message-list').empty();
    circleBuildSection_Chat(chatterId, chatterType);
    $('.row-circle-user-list-item').removeClass('active');
    $('.row-circle-user-list-item[data-target="' + chatterId + '"]').addClass('active');
    _gCurrentChatter.id = chatterId;
    _gCurrentChatter.type = chatterType;
};

function circleOpenRelpayPop(chatterId) {
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
        tmpHTMLArr.push('               <button type="button" class="btn btn-primary btn-sm btn-replay-msg-send" style="padding: 0px 10px;" data-target="' + chatterId + '">确定</button>');
        tmpHTMLArr.push('               <button type="button" class="btn btn-secondary btn-sm" style="padding: 0px 10px;" data-dismiss="modal">取消</button>');
        tmpHTMLArr.push('           </div>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $('body').append(tmpHTMLArr.join(''));
        $('#modal_Circle_Guest_Replay .btn-replay-msg-send').on('click', function () {
            alert('Replay Message to Guest!');
            $('#modal_Circle_Guest_Replay').modal('hide');
        });
    }

    $('#modal_Circle_Guest_Replay').modal('show');
};

function circleBuildGroupDetail(groupId) {
    var currGroup = getCurrentGroup(groupId);
    for (var i = 0; i < _testGroups.length; i++) {
        if (groupId == _testGroups[i].userId) {
            currGroup = _testGroups[i];
            break;
        }
    }

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
    $('.circle-address-group-item-header').on('click', circleBuildGroupItemPop);
    $('.btn-circle-address-group-item-talk').on('click', function () {
        circleSwitchToTalk($(arguments[0].currentTarget).attr('data-target'), 'group');
    });
};

function circleBuildGroupItemPop(eventObj) {
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
        tmpHTMLArr.push('           <button type="button" class="btn btn-sm btn-circle-group-user-popover" title="推荐朋友"><i class="far fa-share-square"></i></button>');
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

function circleClickGroupItemPopBtn(eventObj) {
    $('.group-item-popover-wrap').hide();
    var target = $(eventObj.currentTarget);
    var action = $($(eventObj.currentTarget).find('svg'));
    if (action.hasClass('fa-share-square')) {
        alert('Share Friend with Other People!');
    } else if (action.hasClass('fa-comment')) {
        circleSwitchToTalk(target.attr('data-target'), 'user');
    } else if (action.hasClass('fa-plus-square')) {
        alert('Add User to Be My Friend!');
    }
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

function circleClickUserItem(currentTarget) {
    var tmpSymbol = currentTarget.attr('data-target');
    $('.row-circle-user-list-item').removeClass('active');
    currentTarget.addClass('active');
    //webSocketGetCiecleHistory(tmpSymbol);
    testswebSocketGetCiecleHistory(tmpSymbol);
    $('.label-circle-message-history-user').attr('data-target', tmpSymbol);
    $('.col-circle-message-history-button .btn.btn-sm').attr('data-target', tmpSymbol);
    $('.col-circle-message-history-button .btn.btn-sm').attr('data-type', currentTarget.attr('data-type'));
    $('.setting-bar-chatter').hide();
    $('.user-popover-wrap').hide();
    var symbolEl = $(currentTarget.find('.circle-user-list-item-msg')[0]);
    symbolEl.text('0');
    symbolEl.hide();
};

function circleDBClickUserItem(eventObj) {
    var tmpSymbol = $(eventObj.currentTarget).attr('data-target');
    $('#modalCircleUserInfor').modal('show');
};

function circleCheckEmptyInput() {
    var tmpContent = $('.circle-message-input-field').html();
    var isEmptyContent = false;
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
            if (tmpObj.text().trim().length == 0) {
                if (tmpObj.find('img').length == 0) {
                    isEmptyContent = true;
                }
            }
        }
    } catch (ex) {

    }

    return isEmptyContent;
}

function circleInsertEmoji(eventObj) {
    var emojiId = $(eventObj.currentTarget).attr('data-target');
    var img = '';
    for (var i = 0; i < _gCurrentEmojiGroup.emoji.length; i++) {
        if (_gCurrentEmojiGroup.emoji[i].id == emojiId) {
            img = _gCurrentEmojiGroup.emoji[i].img;
            break;
        }
    }

    circleInsertContent($('<img class="img-fluid emoji-item-in-field" src="' + img + '"/>'));
    $('.circle-message-input-type.input-type-emoji').popover('hide');
};

function circleGetIndexOfNode(node, parentNode) {
    var childNodes = parentNode.childNodes;
    var index = 0;
    var prevNode = node;
    if (node.nodeName == '#text') {
        prevNode = node.previousSibling;
    }

    if (prevNode != null) {
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].isEqualNode(prevNode)) {
                index = i
                break;
            }
        }
    }

    if (node.nodeName == '#text' && prevNode != null) {
        index++;
    }

    return index;
};

function circleInsertContentPrepareRange(range, inputFieldEl) {
    try {
        var comContainer = range.commonAncestorContainer;
        var endContainer = range.endContainer;
        var startContainer = range.startContainer;
        var tmpNodeVal = '';
        if (comContainer.nodeName == '#text' && startContainer.nodeName == '#text' && endContainer.nodeName == '#text') {
            var tmpNodeVal = startContainer.nodeValue;
            startContainer.nodeValue = tmpNodeVal.substring(0, range.startOffset) + tmpNodeVal.substring(0, range.endOffset);
        } else if (comContainer.nodeName != '#text') {
            var startIdx = 0;
            var endIdx = 0;
            var orgStart = range.startOffset;
            if (startContainer.nodeName == '#text') {
                tmpNodeVal = startContainer.nodeValue;
                startContainer.nodeValue = tmpNodeVal.substring(0, range.startOffset);
                startIdx = circleGetIndexOfNode(startContainer, inputFieldEl) + 1;
                range.setStart(startContainer, orgStart);
            } else {
                startIdx = range.startOffset;
            }

            if (endContainer.nodeName == '#text') {
                tmpNodeVal = endContainer.nodeValue;
                endContainer.nodeValue = tmpNodeVal.substring(range.endOffset);
                endIdx = circleGetIndexOfNode(endContainer, inputFieldEl) - 1;
            } else {
                endIdx = range.endOffset;
            }

            var childNodes = inputFieldEl.childNodes;
            if (startIdx <= endIdx && startIdx >= 0 && endIdx < childNodes.length) {
                for (var i = endIdx; i >= startIdx; i--) {
                    childNodes[i].remove();
                }
            }
        }

        range.collapse(true);
        return true;
    } catch (ex) {
        return false;
    }
};

function circleInsertContentCreateObject(content) {
    var contentEl = [];
    var newImageId = "";
    var imgIds = [];
    var contentType = typeof (content);
    if (contentType != 'string') {
        newImageId = [];
        var tmpString = '';
        var tmpEl = null;
        for (var i = 0; i < content.length; i++) {
            tmpEl = $(content[i])[0];
            contentEl.push(tmpEl);
            if (tmpEl.tagName == "IMG") {
                $(tmpEl).css('vertical-align', 'baseline');
                newImageId = "img_" + _GUID();
                imgIds.push();
                $(tmpEl).attr('id', newImageId);
                tmpEl.onload = function () {
                    circleResizeImage(arguments[0].srcElement);
                };
            }

            tmpString += tmpEl.outerHTML;
        }

        content = tmpString;
    } else {
        contentEl.push(document.createTextNode(content));
    }

    return { type: contentType, string: content, el: contentEl, id: imgIds };
};

function circleInsertContent(contentString) {
    var contentObj = circleInsertContentCreateObject(contentString);
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
    var prepare = (selection.type == 'Range' ? circleInsertContentPrepareRange(range, inputFieldEl) : true);
    var chrenCount = inputFieldEl.childNodes.length;
    //如果插入位置不是在text中
    if (selection.anchorNode.nodeName != '#text') {
        //如果输入框里有多个子节点，并且插入位置不在末尾
        if (chrenCount > 0 && selection.anchorOffset < chrenCount) {
            var tmpNode = inputFieldEl.childNodes[selection.anchorOffset];
            for (var i = contentObj.el.length - 1; i >= 0 && tmpNode != null; i--) {
                inputFieldEl.insertBefore(contentObj.el[i], tmpNode);
                tmpNode = contentObj.el[i];
            }
        } else {
            for (var i = 0 ; i < contentObj.el.length ; i++) {
                inputFieldEl.appendChild(contentObj.el[i]);
            }
        }

        circleInsertContentSetRangeStart(inputFieldEl, contentObj);
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

            circleInsertContentSetRangeStart(inputFieldEl, contentObj);
        }
    }

    _gLastEditRange = selection.getRangeAt(0);
}

function circleInsertContentSetRangeStart(inputFieldEl, contentObj) {
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

function circleResizeImage(image) {
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

function circleChangeEmojiGroup(eventObj) {
    var groupId = (eventObj == null ? $($('.emoji-groups-item')[0]).attr('data-target') : $(eventObj.currentTarget).attr('data-target'));
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
    $('.emoji-item').on('click', circleInsertEmoji);
};

function buildContent_Setting() {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="card h-100 text-center card-settings">');
    tmpHTMLArr.push('   <div class="card-header">');
    tmpHTMLArr.push('       <ul class="nav nav-tabs card-header-tabs">');
    tmpHTMLArr.push('           <li class="nav-item setting-nav-item-infor">');
    tmpHTMLArr.push('               <div class="nav-link active"><i class="far fa-user-circle nav-item-icon"></i>个人信息</div>');
    tmpHTMLArr.push('           </li>');
    tmpHTMLArr.push('           <li class="nav-item setting-nav-item-change">');
    tmpHTMLArr.push('               <div class="nav-link"><i class="fas fa-unlock-alt nav-item-icon"></i>修改密码</div>');
    tmpHTMLArr.push('           </li>');
    tmpHTMLArr.push('       </ul>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="card-body h-100 body-settings-card">');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    settingBuildInfors();
    initEvents_Settings();
};

function initEvents_Settings() {
    $('.card-settings .card-header-tabs .nav-item').on('click', function (eventObj) {
        $('.card-settings .card-header-tabs .nav-item .nav-link').removeClass('active');
        var currentItem = $(eventObj.currentTarget)
        $(currentItem.find('.nav-link')[0]).addClass('active');
        if (currentItem.hasClass('setting-nav-item-infor')) {
            settingBuildInfors();
        } else {
            settingBuildChange();
        }
    });
};

function settingBuildInfors() {
    $('.body-settings-card').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('   <div class="row justify-content-start align-items-center">');
    tmpHTMLArr.push('       <div class="col-10 offset-1">');
    tmpHTMLArr.push('           <form class="my-3">');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="img_Settings_Profile_Header_B" class="col-2 col-form-label">头像</label>');
    tmpHTMLArr.push('                   <div class="col text-left wrap-settings-profile-header">');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_B" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_M" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_S" src="image/circles.svg" data-toggle="modal" data-target="#modalCustomHeader"/>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_NickName" class="col-2 col-form-label">昵称</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_NickName" placeholder="请输入昵称">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_Name" class="col-2 col-form-label">姓名</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_Name" placeholder="请输入姓名">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label class="col-2 col-form-label">性别</label>');
    tmpHTMLArr.push('                   <div class="col-2">');
    tmpHTMLArr.push('                       <div class="form-check">');
    tmpHTMLArr.push('                           <label class="form-check-label">');
    tmpHTMLArr.push('                               <input type="radio" class="form-check-input" name="settings_profile_gender" id="rb_Settings_Profile_Gender_Male" value="1" checked>男');
    tmpHTMLArr.push('                           </label>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col-2">');
    tmpHTMLArr.push('                       <div class="form-check">');
    tmpHTMLArr.push('                           <label class="form-check-label">');
    tmpHTMLArr.push('                               <input type="radio" class="form-check-input" name="settings_profile_gender" id="rb_Settings_Profile_Gender_Female" value="0">女');
    tmpHTMLArr.push('                           </label>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="dt_Settings_Profile_Birthday" class="col-2 col-form-label">生日</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input class="form-control" type="date" value="' + formatDate(new Date()) + '" id="dt_Settings_Profile_Birthday">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row row-settings-form-city">');
    tmpHTMLArr.push('                   <label class="col-2 col-form-label">所在城市</label>');
    tmpHTMLArr.push('                   <div class="col-3">');
    tmpHTMLArr.push('                       <select class="form-control" id="sel_Settings_Profile_Province">');
    for (var i = 0; i < _gCitys.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[i].p + '">' + _gCitys[i].p + '</option>');
    }

    tmpHTMLArr.push('                       </select>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <label class="col-1 symbol-label" id="title_Settings_Profile_Province">省</label>');
    tmpHTMLArr.push('                   <div class="col-3 no-padding">');
    tmpHTMLArr.push('                       <select class="form-control" id="sel_Settings_Profile_City">');
    for (var i = 0; i < _gCitys[0].c.length; i++) {
        tmpHTMLArr.push('                            <option value="' + _gCitys[0].c[i] + '">' + _gCitys[0].c[i] + '</option>');
    }

    tmpHTMLArr.push('                        </select>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <label class="col-1 symbol-label" id="title_Settings_Profile_City">' + _gCitys[0].ct + '</label>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_Profile_School" class="col-2 col-form-label">就读学校</label>');
    tmpHTMLArr.push('                   <div class="col-8">');
    tmpHTMLArr.push('                       <input type="text" class="form-control" id="txt_Settings_Profile_School" placeholder="请输入就读的学校名称">');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row">');
    tmpHTMLArr.push('                   <div class="col text-center">');
    tmpHTMLArr.push('                       <button type="button" class="btn btn-outline-primary col-3" id="btn_Settings_Profile_Save_Profile">保存</button>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </form>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.body-settings-card').append($(tmpHTMLArr.join('')));

    $("#sel_Settings_Profile_Province").change(function () {
        var pVal = $("#sel_Settings_Profile_Province").val();
        var item = {};
        for (var i = 0; i < _gCitys.length; i++) {
            item = _gCitys[i];
            if (item.p == pVal) {
                break;
            }
        }

        var tmpPt = (item.pt && item.pt != '' ? item.pt : '省');
        var tmpCt = (item.ct && item.ct != '' ? item.ct : '市');
        $("#title_Settings_Profile_Province").text(tmpPt);
        $("#title_Settings_Profile_City").text(tmpCt);
        var tmpHTMLArr = [];
        for (var i = 0; i < item.c.length; i++) {
            tmpHTMLArr.push('<option value="' + item.c[i] + '">' + item.c[i] + '</option>');
        }

        $("#sel_Settings_Profile_City").empty();
        $("#sel_Settings_Profile_City").append(tmpHTMLArr.join(''));
    });

    $("#btn_Settings_Profile_Save_Profile").click(function () {
        settingUpdateProfile();
    });

    settingsLoadUserProfile();
};

function settingsLoadUserProfile() {
    $('#img_Settings_Profile_Header_B').attr('src', _gUserInfoObj.header);
    $('#img_Settings_Profile_Header_M').attr('src', _gUserInfoObj.header);
    $('#img_Settings_Profile_Header_S').attr('src', _gUserInfoObj.header);
    $('#txt_Settings_Profile_NickName').val(_gUserInfoObj.nickName);
    $('#txt_Settings_Profile_Name').val(_gUserInfoObj.userName);
    _gUserInfoObj.gender = (_gUserInfoObj.gender == '' ? '1' : _gUserInfoObj.gender);
    $("[name='settings_profile_gender']").each(function () {
        $(this).removeAttr("checked");
        if ($(this).attr("value") == _gUserInfoObj.gender) {
            $(this).prop("checked", true);
        }
    });

    $('#dt_Settings_Profile_Birthday').val(_gUserInfoObj.birthday);
    _gUserInfoObj.province = (_gUserInfoObj.province == '' ? '广东' : _gUserInfoObj.province);
    $('#sel_Settings_Profile_Province').val(_gUserInfoObj.province);
    $('#sel_Settings_Profile_Province').trigger("change");
    _gUserInfoObj.city = (_gUserInfoObj.city == '' ? '深圳' : _gUserInfoObj.city);
    $('#sel_Settings_Profile_City').val(_gUserInfoObj.city);
    $('#txt_Settings_Profile_School').val(_gUserInfoObj.school);
};

function settingBuildChange() {
    $('.body-settings-card').empty();
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid wrap-settings-change-pwd">');
    tmpHTMLArr.push('   <div class="row justify-content-start align-items-center">');
    tmpHTMLArr.push('       <div class="col-10 offset-1">');
    tmpHTMLArr.push('           <form class="my-3">');
    tmpHTMLArr.push('               <div class="form-inline row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_Old_PWD"  id="lb_Settings_PWD_Old_PWD" class="col-3 col-form-label">旧密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Old_PWD" type="password" placeholder="请输入旧密码"> ');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_Old_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-inline row my-2">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_New_PWD" class="col-3 col-form-label">新密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_New_PWD" type="password" placeholder="请输入新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_Settings_New_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-inline row">');
    tmpHTMLArr.push('                   <label for="txt_Settings_PWD_Confirm_PWD" class="col-3 col-form-label">确认新密码</label>');
    tmpHTMLArr.push('                   <div class="input-group col">');
    tmpHTMLArr.push('                       <input class="form-control js-password-settings-control" id="txt_Settings_PWD_Confirm_PWD" type="password" placeholder="请确认新密码">');
    tmpHTMLArr.push('                       <div class="input-group-addon js-password-settings-btn">');
    tmpHTMLArr.push('                           <i class="label-pwd-intension" id="lb_SignUp_Pwd_Intension"></i>');
    tmpHTMLArr.push('                           <i class="far fa-eye-slash" name="btn_Settings_Show_Hide_Pwd"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="form-group row my-3">');
    tmpHTMLArr.push('                   <div class="col text-center">');
    tmpHTMLArr.push('                       <button type="button" class="btn btn-outline-primary col-3" id="btn_Settings_PWD_Save_PWD">保存</button>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </form>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.body-settings-card').append($(tmpHTMLArr.join('')));

    $(".js-password-settings-btn").on('click', function () {
        if ($(".js-password-settings-control").attr("type") == 'text') {
            $(".js-password-settings-control").attr("type", "password");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye-slash');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye');
        } else {
            $(".js-password-settings-control").attr("type", "text");
            $("[name='btn_Settings_Show_Hide_Pwd']").addClass('fa-eye');
            $("[name='btn_Settings_Show_Hide_Pwd']").removeClass('fa-eye-slash');
        }
    });

    $("#txt_Settings_PWD_New_PWD").on('blur', function () {
        _checkPwdIntension($("#txt_Settings_PWD_New_PWD").val().trim(), $('#lb_Settings_New_Pwd_Intension'));
    });

    $("#btn_Settings_PWD_Save_PWD").on('click', function () {
        if ($("#txt_Settings_PWD_Old_PWD").val().trim() == "") {
            _showGlobalMessage('请输入旧密码', 'danger', 'alert_Settings_OldPWD');
            return;
        }

        if ($("#txt_Settings_PWD_New_PWD").val().trim() == "") {
            _showGlobalMessage('请输入密码', 'danger', 'alert_Settings_PWD');
            return;
        } else {
            var checkVal = _checkPassword($("#txt_Settings_PWD_New_PWD").val().trim());
            if (checkVal < 0) {
                _showGlobalMessage('密码不符合要求，请重新输入!', 'danger', 'alert_Settings_PWD');
                return;
            }
        }

        if ($("#txt_Settings_PWD_Confirm_PWD").val() != $("#txt_Settings_PWD_New_PWD").val()) {
            _showGlobalMessage('两次输入的密码不一致，请重新输入', 'danger', 'alert_Settings_Confirm');
            return;
        }

        var successFn = function (response) {
            var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
            if (success) {
                _showGlobalMessage('修改密码成功!', 'success', 'alert_ForgetPWD_Success');
            } else {
                _showGlobalMessage('修改密码失败, 请联系客服!', 'danger', 'alert_ForgetPWD_Error');
            }

            $("#txt_Settings_PWD_Old_PWD").val('');
            $("#txt_Settings_PWD_New_PWD").val('');
            $("#txt_Settings_PWD_Confirm_PWD").val('');
        };

        var data = { oldpwd: $("#txt_Settings_PWD_Old_PWD").val(), newpwd: $("#txt_Settings_PWD_New_PWD").val() };
        ajaxFn('GET', _getRequestURL(_gURLMapping.account.updatepwd, data), '', successFn);
    });
};

function settingUpdateProfile() {
    var tSex = '1';
    $('[name="settings_profile_gender"]').each(function () {
        if ($(this).is(':checked')) {
            tSex = $(this).val();
        }
    });

    var newVal = {
        sex: tSex,
        nickname: $('#txt_Settings_Profile_NickName').val(),
        realname: $('#txt_Settings_Profile_Name').val(),
        birthday: $('#dt_Settings_Profile_Birthday').val(),
        state: $('#sel_Settings_Profile_Province').val(),
        city: $('#sel_Settings_Profile_City').val(),
        school: $('#txt_Settings_Profile_School').val(),
        country: 'China'
    };

    var successFn = function (response) {
        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        if (success) {
            _CookieUtils.set("logined_user_nickname", $('#txt_Settings_Profile_NickName').val());
            _gUserInfoObj.nickName = $('#txt_Settings_Profile_NickName').val();
            updateUserInfo();
        } else {
            _showGlobalMessage('更新个人信息失败，请重试!', 'warning', 'alert_UpdateProfile_Error');
        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.setinfo, newVal), '', successFn);
};

function buildContent_Report() {
    var data = {
        user: {
            header: _gUserInfoObj.header,
            name: _gUserInfoObj.nickName,
            title: _gUserInfoObj.level,
            exp: 2.5,
            over: 25,
            course: 1,
            date: '2017-10-20',
            qr: 'image/qr_wechat.png'
        },
        achieve: [
            { id: 1, title: '初步接触编程', content: '顺利完成了计算机原理的所有基础课程，对现代计算机的系统组成，运行方式和编程原理有了系统性的认知；' },
            { id: 2, title: '分享小达人', content: '分享了18个已完成作品， 这些作品已被565人次浏览；' },
            { id: 3, title: '计算机小专家', content: '顺利完成了计算机原理的所有基础课程，对现代计算机的系统组成，运行方式和编程原理有了系统性的认知；' }
        ],
        ability: {
            type: [
                { name: '科学', value: 700 },
                { name: '技术', value: 400 },
                { name: '工程', value: 550 },
                { name: '数学', value: 700 },
                { name: '语言', value: 450 }
            ],
            course: 1,
            time: 21,
            items: [
                '模式设别'
            ]
        },
        time: {
            over: 0,
            total: 21,
            times: [
                { date: "2017-10-1", time: 1 },
                { date: "2017-10-2", time: 2 },
                { date: "2017-10-3", time: 1 },
                { date: "2017-10-4", time: 3 },
                { date: "2017-10-5", time: 2 },
                { date: "2017-10-6", time: 2 },
                { date: "2017-10-7", time: 1 },
                { date: "2017-10-8", time: 2 },
                { date: "2017-10-9", time: 1 }
            ],
            course: [
                { id: '1', rate: 2.5, name: '初级课程' },
                { id: '２', rate: 50, name: '中级课程' },
                { id: '３', rate: 0, name: '高级课程' },
                { id: '4', rate: 16, name: '拓展课程' },
                { id: '1', rate: 23.5, name: '初级课程' },
                { id: '２', rate: 10, name: '中级课程' }
            ]
        },
        potential: [
            { name: '科学', value: 100 },
            { name: '数学', value: 80 },
            { name: '技术', value: 55 },
            { name: '工程', value: 20 },
            { name: '语言', value: 10 }
        ]
    }

    var successFn = function (response) {
        //var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //if (success) {
        //reportFormatData(response);       
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div class="container-fluid w-100 h-100 wrap-report">');
        tmpHTMLArr.push('    <div class="row row-report-section">');
        tmpHTMLArr.push('        <div class="col col-report-overview"></div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('    <div class="row row-report-section">');
        tmpHTMLArr.push('        <div class="col col-report-achieve"></div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('    <div class="row row-report-section">');
        tmpHTMLArr.push('        <div class="col col-report-ability"></div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('    <div class="row row-report-section">');
        tmpHTMLArr.push('        <div class="col col-report-time"></div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('    <div class="row row-report-section">');
        tmpHTMLArr.push('        <div class="col col-report-attention"></div>');
        tmpHTMLArr.push('    </div>');
        tmpHTMLArr.push('</div>');

        $('.col-main-content').append($(tmpHTMLArr.join('')));

        reportBuildOverview(data.user);
        reportBuildAchieve(data.achieve);
        reportBuildAbility(data.ability);
        reportBuildTime(data.time);
        reportBuildAttention(data.user);
        //} else {
        //    _showGlobalMessage('无法获取报告，请联系技术支持！', 'warning', 'alert_GetReport_Error');
        //}
    };

    $('.col-main-content').empty();
    //ajaxFn('GET', _getRequestURL(_gURLMapping.account.gethtmlreport, {}), '', successFn);
    successFn();
};

function reportFormatData(response) {
    var tmpNode = $($(response).find('overview')[0]);
    var basicData = {
        header: _gUserInfoObj.header,
        name: tmpNode.attr('usr_nickname') == '' ? $.cookie('logined_user_nickname') : tmpNode.attr('usr_nickname'),
        title: tmpNode.attr('usr_title'),
        exp: parseInt(tmpNode.attr('exprate')),
        over: parseInt(tmpNode.attr('overrate')),
        course: parseInt(tmpNode.attr('finish')),
        date: $($(response).find('report')[0]).attr('date'),
        qr: 'image/qr_wechat.png'
    };

    var tmpNodes = $(response).find('honor').find('item');
    var honorData = [];
    for (var i = 0; i < tmpNodes.length; i++) {
        tmpNode = $(tmpNodes[i]);
        honorData.push({
            id: i + 1,
            title: tmpNode.attr('name'),
            content: typeof tmpNode.attr('content') == 'undefined' ? '' : tmpNode.attr('content')
        });
    }

    tmpNode = $($(response).find('ability')[0]);
    var abilityData = {
        type: [],
        items: [],
        course: isNaN(tmpNode.attr('course')) ? 0 : parseInt(tmpNode.attr('course')),
        time: isNaN(tmpNode.attr('time')) ? 0 : parseInt(tmpNode.attr('time')),
    };

    tmpNode = $($(response).find('ability').find('steml')[0]);
    for (var key in _distributionMap) {
        abilityData.type.push({
            name: _distributionMap[key].name,
            value: tmpNode.attr(key.toLowerCase())
        });
    }

    tmpNodes = $(response).find('ability').find('finishedcourse').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        abilityData.items.push($(tmpNodes[i]).attr('title'));
    }

    tmpNode = $($(response).find('level')[0]);
    var timeData = {
        over: isNaN(tmpNode.attr('over')) ? 0 : parseInt(tmpNode.attr('over')),
        total: isNaN(tmpNode.attr('total')) ? 0 : parseInt(tmpNode.attr('total')),
        times: [],
        course: []
    };

    tmpNodes = $(response).find('level').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        timeData.course.push({
            id: $(tmpNodes[i]).attr('id'),
            rate: $(tmpNodes[i]).attr('value') == '' ? 0 : parseInt($(tmpNodes[i]).attr('value')),
            name: typeof $(tmpNodes[i]).attr('name') == 'undefined' ? $(tmpNodes[i]).attr('id') : $(tmpNodes[i]).attr('name')
        });
    }

    tmpNodes = $(response).find('codetimes').find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        timeData.times.push({
            date: $(tmpNodes[i]).attr('date'),
            time: new Number($(tmpNodes[i]).attr('value')).toFixed(2)
        });
    }

    tmpNode = $($(response).find('codetimes')[0]);
    var tmpVal = isNaN(tmpNode.attr('totaltime')) ? 0 : new Number(tmpNode.attr('totaltime'));
    timeData.total = (Math.round(tmpVal / 60 * 100) / 100).toFixed(2);
    var data = {
        user: basicData,
        achieve: honorData,
        ability: abilityData,
        time: timeData
    };

    return data;
};

function reportBuildOverview(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col text-right">');
    tmpHTMLArr.push('            <p class="report-date-text">报告生成日期: ' + data.date + '</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <p class="report-section-title">概览</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col col-report-overview-graph">');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-report-overview').append($(tmpHTMLArr.join('')));

    var wrapWidth = $('.col-report-overview-graph').width() - 250;
    tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container" style="width:' + wrapWidth + 'px; max-width:' + wrapWidth + 'px;">');
    tmpHTMLArr.push('   <div class="row row-report-overview-header">');
    reportBuildOverviewHeader(data, tmpHTMLArr);
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="row justify-content-center">');
    var retObj = reportBuildOverviewGraph(data, tmpHTMLArr);
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');


    $('.col-report-overview-graph').append($(tmpHTMLArr.join('')));
    var left = $('.report-overview-rank-part-1').parent().parent().parent().position().left + retObj.pw_1 + retObj.sw / 2;
    var tmpPos = $('.img-report-overview-header').position().left + $('.img-report-overview-header').width() / 2;
    $('.wrap-report-overview-header').css('left', (left - tmpPos - 7.5) + 'px');
};

function reportBuildOverviewHeader(data, tmpHTMLArr) {
    tmpHTMLArr.push('<div class="d-flex align-items-center wrap-report-overview-header">');
    tmpHTMLArr.push('   <div class="text-13 text-right">');
    tmpHTMLArr.push('       超越<span class="text-21 text-fc8823">' + data.over + '%</span>的全国学员');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="padding-10">');
    tmpHTMLArr.push('       <img class="img-report-overview-header" src="' + _gUserInfoObj.header + '"  />');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div>');
    tmpHTMLArr.push('       <div class="container-fluid no-padding">');
    tmpHTMLArr.push('           <div class="row no-margin">');
    tmpHTMLArr.push('               <div class="col no-padding">');
    tmpHTMLArr.push('                   <p class="text-10">' + data.name + ',' + data.title + '</p>');
    tmpHTMLArr.push('                   <p class="text-10" style="min-width: 120px;">');
    tmpHTMLArr.push('                       当前课程经验值: ');
    tmpHTMLArr.push('                       <span class="text-12 text-fc8823">' + data.exp + '%</span>');
    tmpHTMLArr.push('                   </p>');
    tmpHTMLArr.push('                   <hr class="hr-report-overview-header"/>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row no-margin">');
    tmpHTMLArr.push('               <div class="col-10 no-padding text-left">');
    tmpHTMLArr.push('                   <p class="text-10">已经完成的课程:</p>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="col-2 no-padding">');
    tmpHTMLArr.push('                   <p class="text-10 text-fc8823 text-center">' + data.course + '</p>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
};

function reportBuildOverviewGraph(data, tmpHTMLArr) {
    var wrapWidth = $('.col-report-overview-graph').width() - 300;
    var orgSize = { w: 33, h: 76, sw: 50, sh: 115, sp: 0.2 };
    var newSize = { w: 33, h: 76, sw: 50, sh: 115, sp: 0.3 };
    newSize.sw = (wrapWidth) / (19 * (orgSize.w - orgSize.sp) / orgSize.sw + 1);
    newSize.sh = orgSize.sh / orgSize.sw * newSize.sw;
    newSize.w = orgSize.w / orgSize.sw * newSize.sw;
    newSize.h = orgSize.h / orgSize.w * newSize.w;
    newSize.sp = newSize.w / orgSize.w * newSize.sp;
    var tmpCount = Math.round(data.over / 5);
    var tmpWidth = (newSize.w - newSize.sp) * tmpCount;
    var retObj = { pw_1: tmpWidth, sw: newSize.sw };
    tmpHTMLArr.push('<div class="col">');
    tmpHTMLArr.push('   <div class="d-flex align-items-baseline">');
    var tmpWidth = 'width:' + tmpWidth + 'px;max-width:' + tmpWidth + 'px;min-width:' + tmpWidth + 'px';
    var bgSize = 'background-size:' + newSize.w + 'px ' + newSize.h + 'px; height:' + newSize.h + 'px;';
    tmpHTMLArr.push('       <div class="report-overview-rank-part-1" style="' + tmpWidth + '">');
    tmpHTMLArr.push('           <div class="report-overview-rank-part-div" style="' + bgSize + '"></div>');
    tmpHTMLArr.push('       </div>');
    tmpWidth = 'width:' + newSize.sw + 'px;max-width:' + newSize.sw + 'px;min-width:' + newSize.sw + 'px; height: ' + newSize.sh + 'px;';
    bgSize = 'background-size:' + newSize.sw + 'px ' + newSize.sh + 'px; height:' + newSize.sh + 'px';
    tmpHTMLArr.push('       <div class="report-overview-rank-part-2" style="' + tmpWidth + '">');
    tmpHTMLArr.push('           <div class="report-overview-rank-part-div" style="' + bgSize + '"></div>');
    tmpHTMLArr.push('       </div>');
    tmpWidth = (newSize.w - newSize.sp) * (19 - tmpCount);
    tmpWidth = 'width:' + tmpWidth + 'px;max-width:' + tmpWidth + 'px;min-width:' + tmpWidth + 'px';
    tmpHTMLArr.push('       <div class="report-overview-rank-part-3" style="' + tmpWidth + '">');
    bgSize = 'background-size:' + newSize.w + 'px ' + newSize.h + 'px; height:' + newSize.h + 'px';
    tmpHTMLArr.push('           <div class="report-overview-rank-part-div" style="' + bgSize + '"></div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    return retObj;
}

function reportBuildAchieve(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <p class="report-section-title">成就</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    var tmpItemWidth = $('.report-section-title').width() / 3 - 30;
    var tmpIdxWidth = tmpItemWidth / 12 * 4;
    var idxFontStyle = '';
    for (var i = 150; i > 50; i--) {
        if (testTextWidth("99", i + 'px', 'bolder', '微软雅黑', '') < tmpIdxWidth) {
            idxFontStyle = 'font-size: ' + i + 'px; line-height: ' + i + 'px; font-weight: bold;';
            break;
        }
    }

    for (var i = 0; i < data.length; i++) {
        var tmpId = (data[i].id < 10 ? '0' + data[i].id : data[i].id);
        tmpHTMLArr.push('        <div class="col-4">');
        tmpHTMLArr.push('            <div class="container-fluid no-padding">');
        tmpHTMLArr.push('                <div class="row no-margin">');
        tmpHTMLArr.push('                    <div class="col-4 no-padding text-eaeaea" style="' + idxFontStyle + '">' + tmpId + '</div>');
        tmpHTMLArr.push('                    <div class="col-8">');
        tmpHTMLArr.push('                        <p class="text-13 text-90c553">' + data[i].title + '</p>');
        tmpHTMLArr.push('                        <p class="text-10">' + data[i].content + '</p>');
        tmpHTMLArr.push('                    </div>');
        tmpHTMLArr.push('                </div>');
        tmpHTMLArr.push('            </div>');
        tmpHTMLArr.push('        </div>');
    }
    tmpHTMLArr.push('</div>');

    $('.col-report-achieve').append($(tmpHTMLArr.join('')));
};

function reportBuildAbility(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <h2 class="report-section-title">能力</h2>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-7">');
    tmpHTMLArr.push('            <div class="container-fluid">');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col">');
    tmpHTMLArr.push('                        <p class="text-10">');
    tmpHTMLArr.push('                            基于艾酷为中国孩子开发的STEML课程体系，目前您的孩子已经进行了');
    tmpHTMLArr.push('                               <span>' + data.type.length + '</span>');
    tmpHTMLArr.push('                                   大类，');
    tmpHTMLArr.push('                               <span>' + data.course + '</span>');
    tmpHTMLArr.push('                               个课程');
    tmpHTMLArr.push('                               ，');
    tmpHTMLArr.push('                               <span>' + data.time + '</span>');
    tmpHTMLArr.push('                               个课时的学习；在');
    var tmpStr = [];
    for (var i = 0; i < data.type.length - 1; i++) {
        tmpStr.push(data.type[i].name);
    }

    tmpStr = tmpStr.join('、');
    if (tmpStr.length > 0) {
        tmpStr += '和' + data.type[data.type.length - 1].name;
    }

    tmpHTMLArr.push(tmpStr);
    tmpHTMLArr.push('等各个领域都获得了显著的能力提升。');
    tmpHTMLArr.push('                        </p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col">');
    tmpHTMLArr.push('                        <p class="text-13 text-90c553" style="padding-top:50px;">已完成课程列表</p>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('                <div class="row">');
    tmpHTMLArr.push('                    <div class="col">');
    tmpHTMLArr.push('                        <div class="container-fluid">');
    tmpHTMLArr.push('                            <div class="row" style="padding-top:10px;">');
    for (var i = 0; i < data.items.length; i++) {
        tmpHTMLArr.push('                                <div class="col-4 text-10"><span>');
        tmpHTMLArr.push('                                    【' + (i + 1) + '】' + data.items[i]);
        tmpHTMLArr.push('                                </span></div>');
    }

    tmpHTMLArr.push('                            </div>');
    tmpHTMLArr.push('                        </div>');
    tmpHTMLArr.push('                    </div>');
    tmpHTMLArr.push('                </div>');
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-5">');
    tmpHTMLArr.push('            <canvas id="canvas_Report_Ability"></canvas>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-report-ability').append($(tmpHTMLArr.join('')));
    reportDrawAbilityGraph(data.type);
};

function reportDrawAbilityGraph(datas) {
    //var fontSize = 28;
    //var valFontSize = 20;
    var fontSize = 20;
    var valFontSize = 16;
    var canvas = document.getElementById('canvas_Report_Ability');
    var parent = $($(canvas).parent());
    var height = parent.height() - 10;
    var width = parent.width();
    var tmpSize = (height > width ? width : (width > 300) ? 300 : width);
    canvas.width = tmpSize;
    canvas.height = tmpSize;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, tmpSize, tmpSize);
    var tmpSpaceUnit = Math.ceil(fontSize / 10) * 10;
    var tmpCtxWidth = tmpSize - tmpSpaceUnit * 4;
    //var border = (tmpCtxWidth / 2) / Math.sin(Math.PI / 180 * 54);
    var radius = (tmpCtxWidth / 2) / Math.sin(Math.PI / 180 * 72);
    var lightStyle = 'rgb(247,247,247)';
    var boldStyle = 'rgb(230,230,230)';
    var centerX = tmpSize / 2;
    var centerY = tmpSize / 2;
    var maxValue = datas[0].value;
    for (var i = 0; i < datas.length; i++) {
        maxValue = (maxValue < datas[i].value ? datas[i].value : maxValue);
    }

    maxValue = maxValue == 0 ? 200 : maxValue;
    maxValue = Math.ceil(maxValue / 100) * 100;
    var tmpSteps = maxValue / 20;
    var tmpRadius = radius / tmpSteps;
    var vertex = [];
    for (var i = 1; i <= tmpSteps; i++) {
        var tmpStyle = lightStyle;
        if (i % 5 == 0) {
            tmpStyle = boldStyle;
        }

        vertex.push(reportDrawPolygon(context, datas.length, centerX, centerY, tmpRadius * i, 0, false, null, tmpStyle));
    }

    var tmpX, tmpY, tmpTextWidth;
    for (var i = 0; i < datas.length; i++) {
        tmpX = vertex[vertex.length - 1][i].x;
        tmpY = vertex[vertex.length - 1][i].y;
        switch (i) {
            case 0:
                tmpX -= fontSize;
                tmpY -= fontSize / 2;
                break;
            case 1:
                tmpX += 2;
                tmpY += fontSize / 2;
                break;
            case 2:
                tmpY += fontSize;
                break;
            case 3:
                tmpX -= tmpSpaceUnit * 2;
                tmpY += fontSize;
                break;
            case 4:
                tmpX -= fontSize * 2;
                tmpY += fontSize / 2;
                break;
        }

        context.font = fontSize + "px '微软雅黑'";
        context.fillStyle = "rgb(86,86,86)";
        context.fillText(datas[i].name, tmpX, tmpY);
        context.restore();
    }

    var tmpVertex = [];
    for (var i = 0; i < datas.length; i++) {
        var tmpIdx = Math.floor(datas[i].value / 20);
        if (tmpIdx > 0) {
            tmpVertex.push(vertex[tmpIdx - 1][i]);
        } else {
            tmpVertex.push(vertex[0][i]);
        }
    }

    context.strokeStyle = 'rgb(64,112,196)';
    context.lineWidth = 3;
    context.font = valFontSize + "px '微软雅黑'";
    context.fillStyle = "rgb(252,136,35)";
    context.beginPath();
    context.moveTo(tmpVertex[0].x, tmpVertex[0].y);
    tmpTextWidth = testTextWidth(datas[0].value, valFontSize + 'px', '', '微软雅黑', '');
    tmpX = tmpVertex[0].x - tmpTextWidth / 2;
    tmpY = tmpVertex[0].y - 3;
    context.fillText(datas[0].value, tmpX, tmpY);
    for (var i = 1; i < tmpVertex.length; i++) {
        context.lineTo(tmpVertex[i].x, tmpVertex[i].y);
        tmpTextWidth = testTextWidth(datas[i].value, valFontSize + 'px', '', '微软雅黑', '');
        switch (i) {
            case 1:
                tmpX = tmpVertex[i].x + 3;
                tmpY = tmpVertex[i].y + 3;
                break;
            case 2:
                tmpX = tmpVertex[i].x + 3;
                tmpY = tmpVertex[i].y + valFontSize / 2;
                break;
            case 3:
                tmpX = tmpVertex[i].x - tmpTextWidth - 3;
                tmpY = tmpVertex[i].y + valFontSize / 2;
                break;
            case 4:
                tmpX = tmpVertex[i].x - tmpTextWidth - 3;
                tmpY = tmpVertex[i].y + 3;
                break;
        }

        context.fillText(datas[i].value, tmpX, tmpY);
    }
    context.closePath();
    context.stroke();
};

function reportDrawPolygon(context, n, x, y, r, a, c, fillStyle, strokeStyle) {
    var angle = a || 0;
    var counterclockwise = c || false;
    var vertex = [];
    if (fillStyle) {
        context.fillStyle = fillStyle;
    }

    if (strokeStyle) {
        context.strokeStyle = strokeStyle;
    }

    var tmpX = x + r * Math.sin(angle);
    var tmpY = y - r * Math.cos(angle);
    context.moveTo(tmpX, tmpY);
    vertex.push({ x: tmpX, y: tmpY });
    context.beginPath();
    var delta = 2 * Math.PI / n;
    for (var i = 0; i < n; i++) {
        angle += counterclockwise ? -delta : delta;
        tmpX = x + r * Math.sin(angle);
        tmpY = y - r * Math.cos(angle);
        context.lineTo(tmpX, tmpY);
        vertex.push({ x: tmpX, y: tmpY });
    }

    context.closePath();
    if (strokeStyle) {
        context.stroke();
    }

    if (fillStyle) {
        context.fill();
    }

    context.restore();
    return vertex;
};

function reportBuildTime(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <p class="report-section-title">时间</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <p class="text-10">');
    tmpHTMLArr.push('               到今天为止，您的孩子已经累计学习编程 ');
    tmpHTMLArr.push('               <span class="text-16 text-fc8823">' + data.total + '</span>');
    tmpHTMLArr.push('                小时');
    tmpHTMLArr.push('            </p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row padding-30-0">');
    tmpHTMLArr.push('        <div class="col text-center text-13 text-90c553">');
    tmpHTMLArr.push('            本月学习时间及趋势');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row row-report-time-timebar">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('           <div class="container-fluid no-padding">');
    tmpHTMLArr.push('               <div class="row align-items-center">');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-arrow">');
    tmpHTMLArr.push('                       <div class="text-center report-time-arrow-left timebar">');
    tmpHTMLArr.push('                           <i class="fas fa-chevron-left"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-timebar">');
    tmpHTMLArr.push('                       <div class="wrap-report-time-timebar-graph">');
    tmpHTMLArr.push('                           <canvas id="canvas_Report_Time_TimeBar"></canvas>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-arrow">');
    tmpHTMLArr.push('                       <div class="text-center report-time-arrow-right timebar">');
    tmpHTMLArr.push('                           <i class="fas fa-chevron-right"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>')
    tmpHTMLArr.push('    <div class="row padding-30-0">');
    tmpHTMLArr.push('        <div class="col text-center text-13 text-90c553">');
    tmpHTMLArr.push('            各级课程完成率');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row row-report-time-piechat">');
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('           <div class="container-fluid no-padding">');
    tmpHTMLArr.push('               <div class="row align-items-center">');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-arrow">');
    tmpHTMLArr.push('                       <div class="text-center report-time-arrow-left piechat">');
    tmpHTMLArr.push('                           <i class="fas fa-chevron-left"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-piechat">');
    tmpHTMLArr.push('                       <div class="wrap-report-time-piechat-graph">');
    tmpHTMLArr.push('                           <canvas id="canvas_Report_Time_Course"></canvas>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('                   <div class="col no-padding col-report-time-arrow">');
    tmpHTMLArr.push('                       <div class="text-center report-time-arrow-right piechat">');
    tmpHTMLArr.push('                           <i class="fas fa-chevron-right"></i>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-report-time').append($(tmpHTMLArr.join('')));
    reportDrawTimeGraph(data);
};

function reportDrawTimeGraph(data) {
    var timeBarStep = reportDrawTimeBarGraph(data.times, 'canvas_Report_Time_TimeBar');
    var pieChatStep = reportDrawTimeCompleteRate(data.course, 'canvas_Report_Time_Course');
    if ($('#canvas_Report_Time_TimeBar').width() <= $('.wrap-report-time-timebar-graph').width()) {
        $('.wrap-report .col-report-time .col-report-time-arrow .timebar').hide();
    } else {
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-right.timebar').on('click', { cls: "#canvas_Report_Time_TimeBar", step: timeBarStep }, listMovePrev);
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-left.timebar').on('click', { cls: "#canvas_Report_Time_TimeBar", step: timeBarStep }, listMoveNext);
    }

    if ($('#canvas_Report_Time_Course').width() <= $('.wrap-report-time-piechat-graph').width()) {
        $('.wrap-report .col-report-time .col-report-time-arrow .piechat').hide();
    } else {
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-left.piechat').on('click', { cls: "#canvas_Report_Time_Course", step: pieChatStep }, listMovePrev);
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-right.piechat').on('click', { cls: "#canvas_Report_Time_Course", step: pieChatStep }, listMoveNext);
    }
};

function reportDrawTimeBarGraph(datas, canvasId) {
    var barWidth = 24;
    var barSpace = 14;
    var lineWidth = 1;
    var canvas = document.getElementById(canvasId);
    var parent = $(canvas).parent();
    parent.width($('.col-report-time').width() - 15 * 2 - 30 * 2);
    var width = Math.max(Math.floor((barWidth + barSpace) * datas.length), parent.width());
    var height = parent.height();
    canvas.width = width;
    canvas.height = height;
    $(canvas).width(width);
    $(canvas).height(height);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    var maxValue = 0;
    for (var i = 0; i < datas.length; i++) {
        maxValue = Math.max(maxValue, datas[i].time);
    }

    var unit = (maxValue == 0 ? 0 : Math.floor((height - 30) / maxValue));
    var startX = 0;
    var startY = height - 15;
    var linearGradient, barHeight, barX, tmpX, tmpY, lineRTX, lineRTY, tmpDate, tmpMonth, tmpTextWidth;
    for (var i = 0; i < datas.length; i++) {
        if (datas[i].time > 0) {
            //draw bar
            barHeight = datas[i].time * unit;
            barX = startX + barSpace / 2;
            lineRTX = barX + barWidth;
            lineRTY = startY - barHeight;
            linearGradient = context.createLinearGradient(barX, lineRTY, 0, barHeight);
            linearGradient.addColorStop(0, "rgb(98,163,54)");
            linearGradient.addColorStop(1, "rgb(128,184,95)");
            context.fillStyle = linearGradient;
            context.fillRect(barX, lineRTY, barWidth, barHeight);
            //draw border
            context.strokeStyle = 'rgba(210,210,210,0.5)';
            context.lineWidth = lineWidth;
            context.moveTo(barX, startY);
            context.lineTo(barX, lineRTY);
            context.lineTo(lineRTX, lineRTY);
            context.lineTo(lineRTX, startY);
            context.stroke();
            //draw time label
            //tmpX = barX + 4;
            tmpTextWidth = testTextWidth(datas[i].time, '10px', 'bold', '微软雅黑', '');
            tmpX = startX + (barWidth + barSpace - tmpTextWidth) / 2;
            tmpY = lineRTY - 2;
            context.font = "normal normal normal 10px \"微软雅黑\"";
            context.fillStyle = "rgb(97,97,97)";
            context.fillText(datas[i].time, tmpX, tmpY);
            //draw date label
            tmpX = startX + 5;
            tmpY = startY + 12;
            context.font = "normal normal normal 10px \"微软雅黑\"";
            context.fillStyle = "rgb(97,97,97)";
            tmpDate = new Date(datas[i].date);
            tmpMonth = (tmpDate.getMonth() + 1 < 10 ? '0' + (tmpDate.getMonth() + 1) : tmpDate.getMonth() + 1);
            tmpDate = (tmpDate.getDate() < 10 ? '0' + tmpDate.getDate() : tmpDate.getDate());
            context.fillText(tmpMonth + '-' + tmpDate, tmpX, tmpY);
        }

        startX += barWidth + barSpace;
    }
    //draw base line
    context.strokeStyle = 'rgba(210,210,210,0.5)';
    context.lineWidth = lineWidth;
    context.moveTo(0, startY);
    context.lineTo(canvas.width, startY);
    context.stroke();
    return (barWidth + barSpace) * 3;
};

function reportDrawTimeCompleteRate(datas) {
    var lineWidth = 16;
    var rateFontSize = 20;
    var textFontSize = 16;
    var id = 'canvas_Report_Time_Course';
    var canvas = document.getElementById(id);
    var parent = $(canvas).parent();
    parent.width($('.col-report-time').width() - 15 * 2 - 30 * 2);
    var height = Math.floor(parent.height());
    var width = height * datas.length;
    canvas.width = width;
    canvas.height = height
    $(canvas).width(width);
    $(canvas).height(height);
    var itemWidth = height;
    var radius = (height - textFontSize - 20) / 2 - lineWidth;
    var context = canvas.getContext('2d');
    for (var i = 0; i < datas.length; i++) {
        var centerX = itemWidth * i + itemWidth / 2;
        var centerY = radius + lineWidth / 2 + 10;
        var startRadian = 0
        var endRadian = Math.PI * 2;
        context.lineWidth = lineWidth;
        context.strokeStyle = 'rgb(230,230,230)';
        context.beginPath();
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.stroke();
        context.closePath();
        startRadian = Math.PI * 2 * 3 / 4;
        endRadian = startRadian + datas[i].rate / 100 * Math.PI * 2;
        context.strokeStyle = 'rgb(124,218,36)';
        context.beginPath();
        context.arc(centerX, centerY, radius, startRadian, endRadian);
        context.stroke();
        context.closePath();
        var tmpTextWidth = testTextWidth(datas[i].rate + '%', rateFontSize + 'px', 'bold', '微软雅黑', '');
        var tmpX = centerX - tmpTextWidth / 2;
        var tmpY = centerY + rateFontSize / 2;
        context.font = "normal normal bolder " + rateFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(105,105,105)";
        context.fillText(datas[i].rate + '%', tmpX, tmpY);

        tmpTextWidth = testTextWidth(datas[i].name, textFontSize + 'px', 'bold', '微软雅黑', '');
        tmpX = centerX - tmpTextWidth / 2;
        tmpY = radius * 2 + lineWidth + textFontSize + 20;
        context.font = "normal normal bold " + textFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(61,61,61)";
        context.fillText(datas[i].name, tmpX, tmpY);
    }

    return itemWidth;
};

function reportBuildAttention(data) {
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid">');
    tmpHTMLArr.push('    <div class="rowl">')
    tmpHTMLArr.push('        <div class="col">');
    tmpHTMLArr.push('            <p class="report-section-title">关注</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('    <div class="row">');
    tmpHTMLArr.push('        <div class="col-6 padding-l-30">');
    tmpHTMLArr.push('            <p class="text-10">感谢您阅读' + data.name + '的鹏博学习报告。我们为您孩子的进步和成就感到同样骄傲。</p>');
    tmpHTMLArr.push('            <p class="text-10 padding-20-0">您可以通过点击下面的链接下载本报告全文。</p>');
    tmpHTMLArr.push('            <p class="text-center"><img src="image/pdf.png" class="report-attention-pdf-button" width="60" height="80" /></p>');
    tmpHTMLArr.push('            <p class="text-10 text-center report-attention-pdf-button">' + data.name + '的鹏博学习报告</p>');
    tmpHTMLArr.push('            <p class="text-center text-10 padding-30-0">或者，您可以扫描添加鹏博微信号，让我们可以第一时间把孩子的信息推送到您的指尖。</p>');
    tmpHTMLArr.push('            <p class="text-center"><img src="' + data.qr + '" width="100" height="100" /></p>');
    tmpHTMLArr.push('            <p class="text-center text-10 text-90c553">鹏博教育，为中国孩子学习编程而生</p>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-6 padding-l-30">');
    tmpHTMLArr.push('            <img src="image/iphone7.png" class="img-fluid report-attention-bakcground" />');
    tmpHTMLArr.push('            <img src="' + _gUserInfoObj.header + '"  class="report-attention-header header-img"/>');
    tmpHTMLArr.push('            <div class="report-attention-header header-point"></div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-report-attention').append($(tmpHTMLArr.join('')));
    $('.report-attention-pdf-button').on('click', function () {
        alert('start download report');
    });

    reportAttentionAdjustImg();
};

function reportAttentionAdjustImg() {
    var currWidth = $('.report-attention-bakcground').parent().width();
    var position = $('.report-attention-bakcground').position();
    var headImg = $('.report-attention-header.header-img');
    var pointer = $('.report-attention-header.header-point');
    var rate = currWidth / 360;
    var size = rate * 60;
    var left = rate * 15 + position.left;
    var top = rate * 50 + position.top;
    headImg.width(size);
    headImg.height(size);
    headImg.css('left', left + 'px');
    headImg.css('top', top + 'px');
    size = rate * 15;
    left = left - rate * 5;
    top = top - rate * 5;
    pointer.width(size);
    pointer.height(size);
    pointer.css('left', left + 'px');
    pointer.css('top', top + 'px');
};

function initData() {
    var successFn = function (response) {
        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        var formatFn = function (attrName) {
            var item = $(response).find('item[attr="' + attrName + '"]');
            var retVal = '';
            if (item.length > 0) {
                retVal = $(item).attr('value');
            }

            return retVal;
        };

        if (success) {
            var resObj = $(response);
            _gUserInfoObj = {
                userName: formatFn('username'),
                header: '',
                userId: formatFn('userid'),
                nickName: formatFn('nickname'),
                level: formatFn('level'),
                birthday: formatFn('birthday'),
                country: formatFn('country'),
                gender: formatFn('gender'),
                province: formatFn('province'),
                city: formatFn('city'),
                school: formatFn('school')
            };

            _CookieUtils.set("logined_user_nickname", _gUserInfoObj.nickName);
        }

        var headerFn = function (response_header) {
            var success_header = ($($(response_header).find('executed')[0]).text() == 'true' ? true : false);
            if (success_header) {
                var tmpImg = $($(response_header).find('msg')[0]).text();
                if (tmpImg.indexOf('.') < 0) {
                    tmpImg = 'image/tmpheader.jpg';
                }

                _gUserInfoObj.header = tmpImg;
            } else {
                _gUserInfoObj.header = 'image/tmpheader.jpg';
            }

            _CookieUtils.set("logined_user_header", _gUserInfoObj.header);
            updateUserInfo();
            var checkOnFn = function (response_checkon) {
                var success = ($($(response_checkon).find('executed')[0]).text() == 'true' ? true : false);
                if (success) {
                    $('#btn_Student_SignIn .mood-text').text('已签到');
                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.profile.getcheckon, {}), '', checkOnFn);
        }

        ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', headerFn);
        //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getCircleNews, {}), '', function () {
        //    var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //    if (success) {
        //        updateCircleNews();
        //    }
        //});
        buildCategoryContent();
        hideLoadingMask();
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo, {}), '', successFn);
    initFriendsForTest();
};

function updateUserInfo() {
    $('#img_Siderbar_Header').attr('src', _gUserInfoObj.header);
    $('#txt_Siderbar_NickName').text(_gUserInfoObj.nickName);
    $('#txt_Siderbar_UserTitle').text(_gUserInfoObj.level);
};

function buildHorizontalList(listItemsHTML, symbol) {
    var tmpSymbol = (typeof symbol == 'undefined' ? '' : symbol)
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid horizontal-list" id="Horizontal_List_' + tmpSymbol + '">');
    tmpHTMLArr.push('    <div class="row h-100 align-items-center">');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="horizontal-list-arrow arrow-left" id="Horizontal_List_Arrow_Left_' + tmpSymbol + '">');
    tmpHTMLArr.push('               <i class="fas fa-chevron-left"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-10 h-100 horizontal-list-wrap">');
    tmpHTMLArr.push('            <div class="h-100 horizontal-list-container" id="Horizontal_List_Container_' + tmpSymbol + '">');
    tmpHTMLArr.push(listItemsHTML);
    tmpHTMLArr.push('            </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('        <div class="col-1 text-center">');
    tmpHTMLArr.push('           <div class="horizontal-list-arrow arrow-right" id="Horizontal_List_Arrow_Right_' + tmpSymbol + '">');
    tmpHTMLArr.push('               <i class="fas fa-chevron-right"></i>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    return tmpHTMLArr.join('');
};

function bindHorizontalListEvent(containerHeight, itemWidth, itemSpace, itemCount, symbol) {
    var tmpSymbol = (typeof symbol == 'undefined' ? '' : symbol)
    $('#Horizontal_List_' + tmpSymbol).height(containerHeight);
    var tmpWidth = itemWidth + itemSpace + 3;
    $('#Horizontal_List_Container_' + tmpSymbol).width(tmpWidth * itemCount - itemSpace);
    var funData = { cls: ".horizontal-list-container", step: tmpWidth };
    $('#Horizontal_List_Arrow_Left_' + tmpSymbol).on('click', funData, listMovePrev);
    $('#Horizontal_List_Arrow_Right_' + tmpSymbol).on('click', funData, listMoveNext);
    if ($('#Horizontal_List_' + tmpSymbol).width() > $('#Horizontal_List_Container_' + tmpSymbol).width()) {
        $('#Horizontal_List_Arrow_Left_' + tmpSymbol).hide();
        $('#Horizontal_List_Arrow_Right_' + tmpSymbol).hide();
    }
};

var _gLastEditRange;
function bindContentEditableEvent(element) {
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
            return;
        }

        var preventDefault = true;
        var contentString = '';
        if (data.types.length == 1) {
            //pure text or image
            if (data.types[0] == 'text/plain') {
                preventDefault = false;
            } else if (data.types[0] == 'Files') {
                if (data.items[0].kind === 'file' && data.items[0].type === 'image/png') {
                    contentString = new Image();
                    contentString.src = window.URL.createObjectURL(data.items[0].getAsFile().slice());
                    contentString = [contentString];
                }
            } else if (data.types[0] == 'text/html') {
                if (data.items[0].kind === 'string' && data.items[0].type === 'text/html') {
                    contentString = data.getData('text/html').replace(/\n|\r|\n\r/g, '');
                    var tmpNodes = $(contentString);
                    if (tmpNodes.text().trim() == '') {
                        if (tmpNodes.length > 0) {
                            contentString = [];
                            for (var i = 0; i < tmpNodes.length; i++) {
                                if (tmpNodes[i].nodeName == "IMG") {
                                    contentString.push(tmpNodes[i]);
                                } else if (tmpNodes[i].nodeName != "#comment") {
                                    contentString = "";
                                    break;
                                }
                            }

                            contentString = (contentString.length == 0 ? "" : contentString);
                        } else {
                            contentString = '';
                        }
                    } else {
                        contentString = tmpNodes.text().trim().replace(/\n|\r|\n\r/g, '');
                    }
                }
            }
        } else if (data.types.length == 2) {
            //form web page
            if (data.types[0] == 'text/plain' && data.types[1] == "text/html") {
                if (data.items[0].kind === 'string' && data.items[0].type === 'text/plain') {
                    contentString = data.getData('text/plain').replace(/\n|\r|\n\r/g, '');
                }
            } else if (data.types[0] == 'text/html' && data.types[1] == "Files") {
                if (data.items[0].kind === 'file' && data.items[0].type === 'image/png') {
                    contentString = new Image();
                    contentString.src = window.URL.createObjectURL(data.items[0].getAsFile().slice());
                    contentString = [contentString];
                }
            }
        } else if (data.types.length == 3) {
            //from application, like word
            if (data.types[0] == 'text/plain' && data.types[1] == "text/html" && data.types[1] == "text/rtf") {
                contentString = data.getData('text/plain').replace(/\n|\r|\n\r/g, '');
            }
        }

        if (preventDefault) {
            if (contentString != '') {
                circleInsertContent(contentString);
            }

            eventObj.preventDefault();
        }
    });
};

function formatDate(date) {
    if (typeof (date) == 'number' || typeof (date) == 'string') {
        date = new Date(date);
    }

    if (date == 'Invalid Date') {
        date = new Date();
    }

    var dateArr = [date.getFullYear().toString()];
    var tmpVal = date.getMonth() + 1;
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    tmpVal = date.getDate();
    if (tmpVal < 10) {
        tmpVal = '0' + tmpVal;
    }

    dateArr.push(tmpVal);
    return dateArr.join('-');
};

function _checkPassword(pwd) {
    pwd = pwd.trim();
    if (pwd.length < 8) {
        if (pwd.length == 0) {
            return -100;
        } else {
            return -200;
        }
    } else if (pwd.length > 16) {
        return -300;
    } else {
        if (/^((?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+){8}$/.test(pwd)) {
            return 3;
        } else if (/^((?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+){8}$/.test(pwd)) {
            return 2;
        } else if (/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){8}$/.test(pwd)) {
            return 1;
        } else {
            return -1;
        }
    }
};

function _checkPwdIntension(value, lbField) {
    var checkVal = _checkPassword(value);
    if (checkVal == 1) {
        lbField.text('弱');
        lbField.css('color', 'rgb(255,0,0)');
    } else if (checkVal == 2) {
        lbField.text('中');
        lbField.css('color', 'rgb(255,215,0)');
    } else if (checkVal == 3) {
        lbField.text('强');
        lbField.css('color', 'rgb(50,205,50)');
    } else if (checkVal == -100) {
        lbField.html('&nbsp;&nbsp;&nbsp;&nbsp;');
        lbField.css('color', 'rgb(255,255,255)');
    } else if (checkVal == -200) {
        lbField.text('过短');
        lbField.css('color', 'rgb(255,0,0)');
    } else if (checkVal == -300) {
        lbField.text('过长');
        lbField.css('color', 'rgb(255,0,0)');
    }
};

function initCustomHeaderImg(path) {
    var successFn = function () {
        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        if (success) {
            var tmpImg = $($(response_header).find('msg')[0]).text();
            if (tmpImg.indexOf('.') < 0) {
                tmpImg = 'image/tmpheader.jpg';
            }

            _gUserInfoObj.header = tmpImg;
            var canvas = document.getElementById("canvas_CustomHeader");
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 320, 320);
            var image = new Image();
            image.src = (typeof path == 'string' ? path : _gUserInfoObj.header);
            image.onload = function () {
                var tmpSize = calcExhibitionSize(image);
                ctx.drawImage(image, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
                fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
                $('#progress_HeaderUpload').hide();
            };

            image.onerror = function () {
                var tmpSize = calcExhibitionSize(_currentHeaderImage);
                ctx.drawImage(_currentHeaderImage, 0, 0, tmpSize.w, tmpSize.h, (320 - tmpSize.nw) / 2, (320 - tmpSize.nh) / 2, tmpSize.nw, tmpSize.nh);
                fnImageCropRot(_currentHeaderImage, { w: tmpSize.nw, h: tmpSize.nh });
                $('#progress_HeaderUpload').hide();
            };

            var tmpSize = calcExhibitionSize(image);
            fnImageCropRot(image, { w: tmpSize.nw, h: tmpSize.nh });
        } else {
            $('#progress_HeaderUpload').hide();
            $('#warnning_HeaderUpload').show();
            $('#wrap_CropBox_Header').show();
        }
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', successFn);
}

var _eventBinded = false;
var fnImageCropRot = function (o, newSize) {
    var ID = function (id) {
        return document.getElementById(id);
    };

    var oCanvas = ID("canvas_CustomHeader");
    oCanvas.onselectstart = function () {
        return false;
    };

    var oCreateImg = o;
    var iOrigWidth = (oCreateImg.width > 320 ? 320 : oCreateImg.width);
    var iOrigHeight = (oCreateImg.height > 320 ? 320 : oCreateImg.height);
    if ($('#wrap_CropBox_Header').length == 0) {
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<div id="wrap_CropBox_Header" style="width:' + iOrigWidth + 'px; height:' + iOrigHeight + 'px;">');
        tmpHTMLArr.push('   <div id="CropBox_Header">');
        tmpHTMLArr.push('       <div id="DragBg_Header"></div>');
        tmpHTMLArr.push('       <div id="dragRightBot" ></div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
        $("#canvas_CustomHeader").after(tmpHTMLArr.join(""));
    }

    var tmpParams = {
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        currentX: 0,
        currentY: 0,
        flag: false,
        kind: "drag"
    };
    $('#wrap_CropBox_Header').show();
    var cropWidth = (iOrigWidth > 100 ? 100 : iOrigWidth);
    var cropHeight = (iOrigHeight > 100 ? 100 : iOrigHeight);
    var orgLeft = (320 - cropWidth) / 2;
    var orgTop = (320 - cropHeight) / 2;
    $("#CropBox_Header").width(cropWidth);
    $("#CropBox_Header").height(cropHeight);
    $("#CropBox_Header").css('top', orgTop + "px");
    $("#CropBox_Header").css('left', orgLeft + "px");
    showSampleImage(o, orgLeft, orgTop, cropWidth, cropHeight, newSize);
    startDrag.image = o;
    startDrag.newSize = newSize;
    if (!_eventBinded) {
        startDrag(ID("DragBg_Header"), ID("CropBox_Header"), "drag", tmpParams);
        startDrag(ID("dragRightBot"), ID("CropBox_Header"), "se", tmpParams);
        _eventBinded = true;
    }
};

var startDrag = function (point, target, kind, params) {
    params.width = $(target).width();
    params.height = $(target).height();
    params.left = $(target).position().left;
    params.top = $(target).position().top;

    point.onmousedown = function (event) {
        params.kind = kind;
        params.flag = true;
        if (!event) {
            event = window.event;
        }

        var e = event;
        params.currentX = e.clientX;
        params.currentY = e.clientY;
        point.onselectstart = function () {
            return false;
        }

        return false;
    };

    document.onmouseup = function () {
        params.flag = false;
        params.left = $(target).position().left;
        params.top = $(target).position().top;
        params.width = $(target).width();
        params.height = $(target).height();
        showSampleImage(startDrag.image, params.left, params.top, params.width, params.height, startDrag.newSize);
    };

    document.onmousemove = function (event) {
        var e = event ? event : window.event;
        if (params.flag) {
            var nowX = e.clientX, nowY = e.clientY;
            var disX = nowX - params.currentX;
            var disY = nowY - params.currentY;
            var tmpWidth = parseInt(params.width);
            var tmpHeighth = parseInt(params.height);
            var tmpLeft = parseInt(params.left);
            var tmpTop = parseInt(params.top);
            if (params.kind === "se") {
                var newWidth = tmpWidth + disX;
                var newHeight = tmpHeighth + disX;
                newWidth = (newWidth + tmpLeft > 320 ? 320 - tmpLeft : newWidth);
                newHeight = (newHeight + tmpTop > 320 ? 320 - tmpTop : newHeight);
                if (newWidth != newHeight) {
                    return;
                }

                $(target).width(newWidth);
                $(target).height(newHeight);
            } else {
                var newLeft = tmpLeft + disX;
                var newTop = tmpTop + disY;
                newLeft = (newLeft < 0 ? 0 : newLeft);
                newTop = (newTop < 0 ? 0 : newTop);
                newLeft = (newLeft + tmpWidth > 320 ? 320 - tmpWidth : newLeft);
                newTop = (newTop + tmpHeighth > 320 ? 320 - tmpHeighth : newTop);
                $(target).css('left', newLeft + "px");
                $(target).css('top', newTop + "px");
            }
        }
    }
};

startDrag.image = null;
startDrag.newSize = null;
function calcExhibitionSize(image) {
    var imgHeight = image.height;
    var imgWidth = image.width;
    var newWidth = imgWidth;
    var newHeight = imgHeight;
    var scaleX = imgWidth / 320;
    var scaleY = imgHeight / 320;
    if (imgHeight > imgWidth) {
        newHeight = 320;
        newWidth = imgWidth / imgHeight * newHeight;
    } else {
        newWidth = 320;
        newHeight = imgHeight / imgWidth * newWidth;
    }

    return { w: imgWidth, h: imgHeight, nw: newWidth, nh: newHeight };
};

function transCropBoxSizeToRealSize(image, left, top, width, height, newSize) {
    var tmpSpaceH = (320 - newSize.w) / 2;
    var tmpSpaceV = (320 - newSize.h) / 2;
    var tmpLeft = left - tmpSpaceH;
    var tmpTop = top - tmpSpaceV;
    var tmpWidth = width;
    var tmpHeight = height;
    if (tmpLeft < 0) {
        tmpWidth = tmpWidth + tmpLeft;
        tmpLeft = 0;
    }

    if (tmpWidth > newSize.w) {
        tmpWidth = newSize.w;
    } else if (tmpLeft + tmpWidth > newSize.w) {
        tmpWidth = tmpWidth - (tmpLeft + tmpWidth - newSize.w);
    }

    if (tmpTop < 0) {
        tmpHeight = tmpHeight + tmpTop;
        tmpTop = 0;
    }

    if (tmpHeight > newSize.h) {
        tmpHeight = newSize.h;
    } else if (tmpTop + tmpHeight > newSize.h) {
        tmpHeight = tmpHeight - (tmpTop + tmpHeight - newSize.h);
    }

    var scaleX = image.width / newSize.w;
    var scaleY = image.height / newSize.h;
    left = tmpLeft * scaleX;
    top = tmpTop * scaleY;
    width = tmpWidth * scaleX;
    height = tmpHeight * scaleY;
    return { l: left, t: top, w: width, h: height };
};

function showSampleImage(image, left, top, width, height, newSize) {
    var sizeObj = transCropBoxSizeToRealSize(image, left, top, width, height, newSize)
    var ctx = document.getElementById("canvas_Sample_1").getContext('2d');
    ctx.clearRect(0, 0, 100, 100);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 100, 100);
    ctx = document.getElementById("canvas_Sample_2").getContext('2d');
    ctx.clearRect(0, 0, 64, 64);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 64, 64);
    ctx = document.getElementById("canvas_Sample_3").getContext('2d');
    ctx.clearRect(0, 0, 24, 24);
    ctx.drawImage(image, sizeObj.l, sizeObj.t, sizeObj.w, sizeObj.h, 0, 0, 24, 24);
    $('#btn_CustomHeader_Save').attr('data-content', sizeObj.l + ',' + sizeObj.t + ',' + sizeObj.w + ',' + sizeObj.h)
};

function getCircleToken() {
    return;
    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function () {
        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        if (success) {
            _gToken = '';
            webSocketCreate();
        } else {

        }
    });
};

function webSocketCreate() {
    _gSocket = new WebSocket("ws://localhost:9998/echo");
    //建立websocket连接成功
    _gSocket.onopen = function () {
    };

    //接收服务端数据时
    _gSocket.onmessage = function (evt) {
        webSocketReceiveCircle(evt);
    };

    //断开websocket连接成功
    _gSocket.onclose = function () {
    };
};

function webSocketGetCiecleHistory(userSymbol) {
    return;
    webSocketSend("gethistory");
}

function webSocketSend(msg) {
    return;
    var tmpMsg = [];
    tmpMsg.push('<root>');
    tmpMsg.push('   <token>');
    tmpMsg.push(_gToken);
    tmpMsg.push('   </token>');
    tmpMsg.push('   <msg>');
    tmpMsg.push(msg);
    tmpMsg.push('   </msg>');
    tmpMsg.push('</root>');
    if (_gSocket.readyState == 1) {
        _gSocket.send(tmpMsg);
    } else if (_gSocket.readyState == 2) {
        window.setTimeout("webSocketSend(" + tmpMsg + ")", 1000);
    } else {
        webSocketCreate();
        _gSocket.onopen = function () {
            webSocketSend(tmpMsg);
        };
    }
};

function webSocketClose() {
    _gSocket.close();
};

function webSocketReceiveCircle(evt) {
    var receiveObj = webSocketFormatMsg(evt);
    //list/new/guest
    if (receiveObj.type == 'new' || receiveObj.type == 'guest') {
        $('.category-item-attr.circle-attr').show();
    }

    if (typeof _gCirleMessages[receiveObj.symbol] == undefined || !$.isArray(_gCirleMessages[receiveObj.symbol])) {
        _gCirleMessages[receiveObj.symbol] = [];
    }

    var targetMsgs = _gCirleMessages[receiveObj.symbol];
    var targetUserEl = $('.row-circle-user-list-item[data-target="' + receiveObj.symbol + '"]');
    var targetUserObj = circleGetUserObj(receiveObj.symbol);
    if (targetUserEl.length == 0) {
        tmpHTMLArr = [];
        circleBuildFriendItem(tmpHTMLArr, targetUserObj);
        targetUserEl = $(tmpHTMLArr.join(''));
        $('#collapse_Circle_' + targetUserGroupID + ' .circle-user-list-group .container-fluid').append(targetUserEl);
        targetUserEl.on('click', function (eventObj) {
            circleClickUserItem($(eventObj.currentTarget));
        });
        targetUserEl.on('dblclick', function (eventObj) {
            circleDBClickUserItem(eventObj);
        });
    }

    var currUserSymbol = $('.label-circle-message-history-user').attr('data-target');
    var currUserObj = circleGetUserObj(currUserSymbol);
    var targetUserNoteEl = $('.row-circle-user-list-item[data-target="' + receiveObj.symbol + '"] .col-circle-user-list-item-msg .circle-user-list-item-msg');
    var isDisplay = (currUserSymbol == receiveObj.symbol ? true : false);
    var newMsgItem;
    for (var i = 0; i < receiveObj.items.length; i++) {
        newMsgItem = circleBuildMessageItem(receiveObj.items[i].content, receiveObj.items[i].type, (receiveObj.items[i].type == -1 ? targetUserObj : _gUserInfoObj));
        targetMsgs.push(newMsgItem);
    }

    if (receiveObj.type == 'new' && !isDisplay) {
        targetUserNoteEl.show();
        targetUserNoteEl.text(parseInt(targetUserNoteEl.text()) + receiveObj.items.length);
    }

    if (isDisplay) {
        circleUpdateMsgHistory();
    }
};

function webSocketFormatMsg(msgs) {
    //{ type: 'new', items: [{ user: { type: 'system', id: 1 }, msg: 'aaaaa' }] }
    var userSymbol = msgs.userType + '|' + msgs.userId;
    if (typeof _gCirleMessages[userSymbol] == 'undefined' || !$.isArray(_gCirleMessages[userSymbol])) {
        _gCirleMessages[userSymbol] = [];
    }

    var tmpItem = null;
    var newItems = [];
    for (var i = 0; i < msgs.msg.length; i++) {
        tmpItem = { type: -1, content: 'Apply a CSS fade transition to the popover' };
        _gCirleMessages[userSymbol].push(tmpItem);
        newItems.push(tmpItem);
    }

    return { type: 'list', symbol: userSymbol, items: newItems };
};

function initFriendsForTest() {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];
    _circleDataSearch = { value: [] };
    _gCiecleUsers = [{ userName: '系统消息', header: 'image/tmpheader.jpg', userId: '-1' }];
    for (var i = 0; i < 20; i++) {
        var tmpIdx = randomInt(0, 19);
        var newUser = {
            "userName": names[tmpIdx % 13],
            "header": "image/header/" + (tmpIdx % 10) + ".jpg",
            "userId": i + 99,
            "msg": ['申请成文好友的信息：' + i],
            "accecpt": tmpIdx % 5 % 2,
            "gender": tmpIdx % 2,
            "address": 'Address ' + i,
            "comment": 'Comment ' + i,
            "note": 'Note ' + i,
            "type": 'user'
        };

        _circleDataSearch.value.push(newUser);
        _gCiecleUsers.push(newUser);
    }

    _gCiecleUsers = _gCiecleUsers.concat(initGroupForTest());
    _gCiecleUsers = _gCiecleUsers.concat(initChannelForTest());
};

function initNewFriendsForTest() {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];
    var result = [];
    for (var i = 0; i < 20; i++) {
        var tmpIdx = randomInt(0, 19);
        var newUser = {
            "userName": names[tmpIdx % 13],
            "header": "image/header/" + (tmpIdx % 10) + ".jpg",
            "userId": i + 99,
            "msg": ['申请成为好友的信息：' + i],
            "accecpt": tmpIdx % 5 % 2,
            "gender": tmpIdx % 2,
            "address": 'Address ' + i,
            "comment": 'Comment ' + i,
            "note": 'Note ' + i,
            "type": 'user'
        };

        result.push(newUser);
    }

    return result;
};

var _testGroups = [];
function initGroupForTest() {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];
    var users = [];
    for (var i = 0; i < 13; i++) {
        var newUser = {
            "userName": names[i],
            "header": "image/header/" + (i % 10) + ".jpg",
            "userId": i + 99,
            "gender": i % 2,
            "address": 'Address ' + i,
            "comment": 'Comment ' + i,
            "note": 'Note ' + i,
            "isnew": randomInt(0, 12) % 2
        };

        users.push(newUser);
    }

    var result = [];
    for (var i = 0; i < 5; i++) {
        var tmpIdx = randomInt(3, 12);
        var newGroup = { userId: 'group_' + i, items: [], userName: '', type: 'group' };
        var tmpName = [];
        for (var j = 0; j < tmpIdx; j++) {
            newGroup.items.push(users[j]);
            tmpName.push(users[j].userName);
        }

        newGroup.userName = (i % 3 == 0 ? '讨论组 ' + i : tmpName.join(','));
        result.push(newGroup);
    }

    _testGroups = result;
    return result;
};

function getCurrentGroup(groupId) {
    var currGroup = null;
    for (var i = 0; i < _testGroups.length; i++) {
        if (groupId == _testGroups[i].userId) {
            currGroup = _testGroups[i];
            break;
        }
    }

    return currGroup;
}

function initChannelForTest() {
    var names = ["C#讲堂", "JAVA讲堂", "Node.JS讲堂", "JavaScript讲堂", "Python讲堂", "C++讲堂", "Windows讲堂", "Lunix讲堂", "HTML5讲堂", "CSS3讲堂", "Three3D讲堂"];
    var result = [];
    for (var i = 0; i < names.length; i++) {
        var newChannel = {
            "userName": names[i],
            "userId": 'channel-' + i,
            "header": "image/header/" + (i % 10) + ".jpg",
            "comment": "频道：" + names[i] + " 的简介",
            "type": 'channel'
        };

        result.push(newChannel);
    }

    return result;
};

function testswebSocketGetCiecleHistory(userSymbol) {
    var tmpDatas = [
        { type: -1, content: '哪种好主要看具体需求了,innerHTML和crea' },
        { type: -1, content: '可创建文本节点。 此方法可返回 Text 对象' },
        { type: 1, content: '2017年9月13日 - 用法: innerHTML的用法 Object.innerHTML createTextNode的用法 document.createTextNode(data)         parendNode.' },
        { type: -1, content: '最佳答案: 哪种好主要看具体需求了,innerHTML和createTextNode都可以把一段内容添加到一个节点中,区别是如果这段内容中有html标签' },
        { type: 1, content: '美媒称，主要的汽车生产国将在没有美国的情况下举行会谈' },
        { type: 1, content: '据彭博社7月29日报道，三位知情人士称，来自欧盟、加拿大、墨西' },
        { type: -1, content: '日本的代表将于7月31日在日内瓦召开会议' },
        { type: 1, content: '车关税的国际协议的可能性，但另外两名官员表示这不' },
        { type: -1, content: '报道称，尽管欧盟委员会主席容克和美国总统特朗普为避免“单边行动”而达成贸易协定，' },
        { type: 1, content: '彭博社的报道称，“总统指示我们继续调查并汇总材料' }
    ];

    var targetUserEl = $('.row-circle-user-list-item[data-target="' + userSymbol + '"]');
    var targetUserObj = circleGetUserObj(userSymbol);
    if (targetUserEl.length == 0) {
        tmpHTMLArr = [];
        circleBuildFriendItem(tmpHTMLArr, targetUserObj);
        targetUserEl = $(tmpHTMLArr.join(''));
        $('#collapse_Circle_' + targetUserGroupID + ' .circle-user-list-group .container-fluid').append(targetUserEl);
        targetUserEl.on('click', function (eventObj) {
            circleClickUserItem($(eventObj.currentTarget));
        });
        targetUserEl.on('dblclick', function (eventObj) {
            circleDBClickUserItem(eventObj);
        });
    }

    var currUserSymbol = $('.label-circle-message-history-user').attr('data-target');
    if (typeof (currUserSymbol) == 'undefined') {
        currUserSymbol = 'system|1';
    }

    var currUserObj = circleGetUserObj(currUserSymbol);
    var targetUserNoteEl = $('.row-circle-user-list-item[data-target="' + userSymbol + '"] .col-circle-user-list-item-msg .circle-user-list-item-msg');
    var isDisplay = (currUserSymbol == userSymbol ? true : false);
    var newMsgItem;
    _gCirleMessages[userSymbol] = [];
    for (var i = 0; i < tmpDatas.length; i++) {
        newMsgItem = circleBuildMessageItem(tmpDatas[i].content, tmpDatas[i].type, (tmpDatas[i].type == -1 ? targetUserObj : _gUserInfoObj));
        _gCirleMessages[userSymbol].push(newMsgItem);
    }

    circleUpdateMsgHistory(userSymbol);
}