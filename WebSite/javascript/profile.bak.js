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
    js: { icon: 'js-square', title: 'Java Script' },
    python: { icon: 'python', title: 'Python' },
    java: { icon: 'java', title: 'Java' },
    node: { icon: 'node-js', title: 'Node.JS' },
    html5: { icon: 'html5', title: 'HTML5' },
    css3: { icon: 'css3-alt', title: 'CSS3' }
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
var _gUserInfoObj = { userName: 'Terry', header: "image/tmpheader_1.jpg", userId: 88, nickName: 'Terry', level: '初级工程师' };
var _gCirleMessages = {};

function initPage() {
    globalResize();
    showLoadingMask();
    buildCategorys();
    initEvents();
    initData();
};

function initEvents() {
    $(window).resize(globalResize);

    $('#linkBtn_Upload_HeaderFile').on('click', function () {
        $('#progress_HeaderUpload').hide();
        $('#warnning_HeaderUpload').hide();
        //$('#wrap_CropBox_Header').hide();
        $('#file_Upload').click();
    });

    $('#mWindow_customHeaderModal').on('shown.bs.modal', function () {
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
            var successFn = function (data, status) {
                var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
                if (success) {
                    $('#mWindow_customHeaderModal').modal('hide');
                    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function () {
                        var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
                        if (success) {
                            _gUserInfoObj.header = _gUserHeader = 'image/tmpheader.jpg';
                            updateUserInfo();
                        }
                    });
                } else {
                    _showGlobalMessage('处理头像信息失败!', 'danger', 'alert_Save_CustHead_Error');
                }
            };

            ajaxFn('POST', _getRequestURL(_gURLMapping.account.cheaderimg, {}), { data: document.getElementById("canvas_Sample_1").toDataURL() }, successFn);
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
        $('.row-category-item').removeClass('active-item');
        var currItem = $(arguments[0].currentTarget);
        currItem.addClass('active-item');
        buildCategoryContent(currItem.attr('data-target'));
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
    switch (_gCurrCateId) {
        case 'courses':
            buildContent_Courses();
            break;
        case 'experiment':
            buildContent_Exp();
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

function buildContent_Courses() {
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

    var datas = [
        { id: 'enlighten', title: '当前课程', course: '【B_01_002】路径跟随', img: 'image/course/course_1.png', color: 'rgb(86,181,34)', symbol: 'B_01_002' },
        { id: 'primary', title: '历史课程', course: '【B_01_001】模式识别模式识别模式识别', img: 'image/course/course_2.png', color: 'rgb(100,124,185)', symbol: 'B_01_001' },
        { id: 'enlighten', title: '当前课程', course: '【B_01_002】路径跟随', img: 'image/course/course_1.png', color: 'rgb(86,181,34)', symbol: 'B_01_002' },
        { id: 'primary', title: '历史课程', course: '【B_01_001】模式识别模式识别模式识别', img: 'image/course/course_2.png', color: 'rgb(100,124,185)', symbol: 'B_01_001' },
        { id: 'enlighten', title: '当前课程', course: '【B_01_002】路径跟随', img: 'image/course/course_1.png', color: 'rgb(86,181,34)', symbol: 'B_01_002' },
        { id: 'primary', title: '历史课程', course: '【B_01_001】模式识别模式识别模式识别', img: 'image/course/course_2.png', color: 'rgb(100,124,185)', symbol: 'B_01_001' }
    ];
    var itemCount = datas.length;
    var tmpHTMLArr = [];
    var tmpStyle = '';
    tmpHTMLArr.push('<div class="container-fluid h-100 wrap-courses-content">');
    tmpHTMLArr.push('    <div class="row align-items-center row-courses-group-list">');
    tmpHTMLArr.push('        <div class="col">');
    var itemsHTML = [];
    for (var i = 0; i < itemCount; i++) {
        tmpStyle = 'padding-right:' + (i == itemCount - 1 ? 0 : space) + 'px;';
        itemsHTML.push('<div class="text-center wrap-horizontal-list-item" style="' + tmpStyle + '">');
        itemsHTML.push('    <div class="d-flex align-items-center h-100">');
        tmpStyle = 'width:' + (width - 2) + 'px; height:' + height + 'px; cursor:pointer;';
        itemsHTML.push('        <div class="container-fluid horizontal-list-item" style="' + tmpStyle + '" data-target="' + datas[i].id + '">');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col-12 no-padding">');
        tmpStyle = 'height:' + imgHeight + 'px;';
        itemsHTML.push('                    <img class="img-fluid" src="' + datas[i].img + '" style="' + tmpStyle + '" />');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('            <div class="row no-margin">');
        itemsHTML.push('                <div class="col-12 no-padding">');
        tmpStyle = 'color:' + datas[i].color + ';font-size:12px';
        itemsHTML.push('                   <p class="text-center overview-course-item-symbol" style="' + tmpStyle + '">' + datas[i].course + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join('')));
    tmpHTMLArr.push('        </div>');
    tmpHTMLArr.push('    </div>');
    tmpHTMLArr.push('</div>');
    $('.col-main-content').append($(tmpHTMLArr.join('')));
    $('.horizontal-list-item').on('click', function (eventObj) {
        buildDetail_Course($(eventObj.currentTarget).attr('data-target'));
    });
    bindHorizontalListEvent(containerHeight, width, space, itemCount);

    buildDetail_Course(datas[0].id);
};

function buildDetail_Course(courseGroupId) {
    var datas = [
        { symbol: 'B_01_002', title: '第一课XXXXXX', steps: 4, complete: 4, steam: 's', type: ['js', 'python', 'html5', 'node', 'java'] },
        { symbol: 'B_01_002', title: '第二课XXXXXX', steps: 5, complete: 2, steam: 'ea', type: ['python', 'css3'] },
        { symbol: 'B_01_002', title: '第三课XXXXXX', steps: 4, complete: 4, steam: 'te', type: ['js'] },
        { symbol: 'B_01_002', title: '第四课XXXXXX', steps: 4, complete: 4, steam: 'sm', type: ['html5', 'java'] },
        { symbol: 'B_01_002', title: '第五课XXXXXX', steps: 6, complete: 1, steam: 'em', type: ['java'] },
        { symbol: 'B_01_002', title: '第六课XXXXXX', steps: 4, complete: 4, steam: 'ste', type: ['js', 'python', 'css3', 'node', 'java'] },
        { symbol: 'B_01_002', title: '第七课XXXXXX', steps: 3, complete: 3, steam: 'steam', type: ['js', 'html5', 'node', 'java'] },
        { symbol: 'B_01_002', title: '第八课XXXXXX', steps: 4, complete: 4, steam: 's', type: [] }
    ];

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
        tmpObj = _gSTEAMMap[steam[i]];
        tmpHTMLArr.push('<span class="course-staem-' + steam[i] + ' steam-char" title="' + tmpObj.title + '">' + steam[i].toUpperCase() + '</span>');
    }

    return tmpHTMLArr.join('');
};

function buildCourseTypeHTML(courseType) {
    var tmpHTMLArr = [];
    var tmpObj;
    for (var i = 0; i < courseType.length; i++) {
        tmpObj = _gCourseTypeMap[courseType[i]];
        tmpHTMLArr.push('<i class="fab fa-' + tmpObj.icon + ' course-type-icon" title="' + tmpObj.title + '"></i>');
    }

    return tmpHTMLArr.join('');
};

function buildContent_Exp() {
    var data = [
        {
            id: '3',
            type: '2',
            date: '2017-10-3',
            teacher: 'Teacher Zhang',
            status: '',
            title: 'B-01-001: 模式识别',
            content: '想一想，试一试，如何让吃豆人运行到附件图中的位置.',
            attach: ['image/Experimental/e_1.png', 'image/Experimental/e_2.png', 'image/Experimental/e_3.png'],
            correct: "",
            incorrect: ""
        }
    ];

    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid no-wrap wrap-experiment">');
    tmpHTMLArr.push('   <div class="row no-wrap">');
    tmpHTMLArr.push('       <div class="col-12 no-wrap" style="overflow:auto;">');
    tmpHTMLArr.push('           <div id="accordion" role="tablist">');
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<div class="card" style="border-radius: 0px;">');
        tmpHTMLArr.push('   <div class="card-header no-padding" role="tab" id="heading_' + data[i].id + '">');
        tmpHTMLArr.push('       <table class="table table-striped" style="margin-bottom: 0px;">');
        tmpHTMLArr.push('           <tbody>');
        tmpHTMLArr.push('               <tr>');
        tmpHTMLArr.push('                   <th><i class="fas fa-flask experiment-symbol"></i></th>');
        tmpHTMLArr.push('                   <td><a data-toggle="collapse" href="#collapse_' + data[i].id + '" aria-expanded="true" aria-controls="collapse_' + data[i].id + '">' + data[i].title + '</a></td>');
        tmpHTMLArr.push('                   <td class="mw-100 text-right">' + data[i].date + '</td>');
        tmpHTMLArr.push('                   <td class="mw-100 text-right">' + data[i].teacher + '</td>');
        tmpHTMLArr.push('               </tr>');
        tmpHTMLArr.push('           </tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('   <div id="collapse_' + data[i].id + '" class="collapse experiment-item" role="tabpanel" aria-labelledby="heading_' + data[i].id + '" data-parent="#accordion" data-target="' + data[i].id + '">');
        tmpHTMLArr.push('       <div class="card-block" style="padding:10px;">');
        tmpHTMLArr.push('       <table class="table table-sm">');
        tmpHTMLArr.push('           <tbody>');
        if (data[i].attach.length > 0) {
            tmpHTMLArr.push('               <tr>');
            tmpHTMLArr.push('                   <td class="mw-100 experiment-atta-title" style="border:none;">');
            tmpHTMLArr.push('                       <a href="#" class="experiment-attach-label" data-target="' + data[i].id + '">共有' + data[i].attach.length + '个附件，点击查看。</a>');
            tmpHTMLArr.push('                   </td>');
            tmpHTMLArr.push('               <tr>');
        }

        tmpHTMLArr.push('               <tr>');
        tmpHTMLArr.push('                   <td class="mw-100" style="border:none;">' + data[i].content + '</td>');
        tmpHTMLArr.push('               <tr>');
        tmpHTMLArr.push('           <tbody>');
        tmpHTMLArr.push('       </table>');
        tmpHTMLArr.push('       </div>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.col-main-content').append($(tmpHTMLArr.join('')));
    var wrap = $('.wrap-experiment');
    var availableHeight = $('.col-content').height();
    if (wrap.height() < availableHeight) {
        wrap.height(availableHeight);
    }

    $('.experiment-attach-label').on('click', function () {
        var dataId = $(arguments[0].target).attr('data-target');
        var attachs = [];
        for (var i = 0; i < data.length; i++) {
            if (dataId == data[i].id) {
                attachs = data[i].attach;
            }
        }

        showExperimentAttachs(attachs);
    });
};

function showExperimentAttachs(attachs) {
    if ($('#modal_Experiment_Attachs').length == 0) {
        var tmpHTMLStr = [];
        tmpHTMLStr.push('<div class="modal fade" id="modal_Experiment_Attachs" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">');
        tmpHTMLStr.push('    <div class="modal-dialog modal-lg" role="document">');
        tmpHTMLStr.push('        <div class="modal-content h-100">');
        tmpHTMLStr.push('            <div class="modal-header">');
        tmpHTMLStr.push('                <h5 class="modal-title font-16" id="exampleModalLabel">题目附件</h5>');
        tmpHTMLStr.push('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
        tmpHTMLStr.push('                    <span aria-hidden="true">&times;</span>');
        tmpHTMLStr.push('                </button>');
        tmpHTMLStr.push('            </div>');
        tmpHTMLStr.push('            <div class="modal-body">');
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
    for (var i = 0; i < attachs.length; i++) {
        tmpItemStr += '<div class=" h-100 carousel-item ' + (i == 0 ? 'active' : '') + '">';
        tmpItemStr += '   <img class="d-block h-100" src="' + attachs[i] + '" style="margin: auto;">';
        tmpItemStr += '</div>';
    }

    $('#carousel_Experiment_Attachs .carousel-inner').append($(tmpItemStr));
    $('#modal_Experiment_Attachs').modal('show');
};

function buildContent_Circle_1() {
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
        itemsHTML.push('                   <p class="text-center overview-course-item-symbol" style="' + tmpStyle + '">' + dataSystem[i].userName + '</p>');
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
        itemsHTML.push('                   <p class="text-center overview-course-item-symbol" style="' + tmpStyle + '">' + dataUser[i].userName + '</p>');
        itemsHTML.push('                </div>');
        itemsHTML.push('            </div>');
        itemsHTML.push('        </div>');
        itemsHTML.push('    </div>');
        itemsHTML.push('</div>');
    }
    $('.col-circle-friend-wrap').append($(itemsHTML.join('')));
};

function buildContent_Circle() {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];
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
    tmpHTMLArr.push('<div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('   <div class="row h-100 no-wrap">');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-user-list">');
    tmpHTMLArr.push('           <div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('               <div class="row no-wrap">');
    tmpHTMLArr.push('                   <div class="col no-wrap">');
    circleBuildSearchPart(tmpHTMLArr);
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="row no-wrap" style="height: calc(100% - 42px);">');
    tmpHTMLArr.push('                   <div class="col no-wrap" style="overflow: auto;">');
    tmpHTMLArr.push('                       <div id="accordion">');
    circleBuildFriendPart(tmpHTMLArr);
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-message-list">');
    circleBuildMessagePart(tmpHTMLArr)
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.col-main-content').append($(tmpHTMLArr.join('')));
    //resize message input row and history row height
    var tmpObj = circleCalcMessageHeight(-1);
    $(".col-circle-message-input").height(tmpObj.input);
    $(".col-circle-message-history").height(tmpObj.history);
    //init search suggest
    $('#search_Circle').bsSuggest(defaultOptions);
    //load messages
    circleLoadMessageHistory();
    //init events
    initEvents_Circle();
};

function circleBuildSearchPart(tmpHTMLArr) {
    tmpHTMLArr.push('<form  class="header-circle-user-search">');
    tmpHTMLArr.push('   <div class="form-group row no-margin">');
    tmpHTMLArr.push('       <div class="col col-header-circle-user-search">');
    tmpHTMLArr.push('           <div class="input-group w-100 wrap-circle-search">');
    tmpHTMLArr.push('               <input type="text" class="form-control form-control-sm" id="search_Circle" style="border-radius:5px; border-color:rgb(17,138,195);" autocomplete="off" placeholder="Search" data-id="" alt="a"/>');
    tmpHTMLArr.push('               <div class="input-group-btn">');
    tmpHTMLArr.push('                   <button type="button" class="btn btn-default dropdown-toggle" data-toggle="" style="display: none;"><span class="caret"></span></button>');
    tmpHTMLArr.push('                   <ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col no-padding col-header-circle-button-search">');
    tmpHTMLArr.push('           <button type="button" class="btn btn-outline-primary btn-sm" data-toggle="modal" data-target="#modalFindFriend"><i class="fas fa-plus"></i></button>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</form>');
};

function circleBuildFriendPart(tmpHTMLArr) {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];

    var dataSystem = [];
    for (var i = 0; i < 10; i++) {
        dataSystem.push({
            "userName": names[i % 13],
            "header": "image/header/" + (i % 10) + ".jpg",
            "userId": i
        });
    }

    var dataUser = [];
    for (var i = 0; i < 30; i++) {
        var tmpIdx = randomInt(0, 29);
        dataUser.push({
            "userName": names[tmpIdx % 13],
            "header": "image/header/" + (tmpIdx % 10) + ".jpg",
            "userId": i
        });
    }

    var dataNew = [];
    for (var i = 0; i < 5; i++) {
        dataNew.push({
            "userName": names[i],
            "header": "image/header/" + i + ".jpg",
            "userId": i
        });
    }

    var groups = [
        { id: 'system', title: '助手和顾问', items: dataSystem },
        { id: 'friend', title: '我的小伙伴', items: dataUser },
        { id: 'guest', title: '新朋友', items: dataNew }
    ];

    for (var i = 0; i < groups.length; i++) {
        tmpHTMLArr.push('               <div class="card">');
        tmpHTMLArr.push('                   <div class="card-header" id="heading_Circle_' + groups[i].id + '">');
        tmpHTMLArr.push('                       <div class="btn-primary btn-sm collapsed" data-toggle="collapse" data-target="#collapse_Circle_' + groups[i].id + '" aria-expanded="false" aria-controls="collapse_Circle_' + groups[i].id + '">');
        tmpHTMLArr.push(groups[i].title);
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('                   <div id="collapse_Circle_' + groups[i].id + '" class="collapse" aria-labelledby="heading_Circle_' + groups[i].id + '" data-parent="#accordion">');
        tmpHTMLArr.push('                       <div class="card-body circle-user-list-group">');
        tmpHTMLArr.push('                           <div class="container-fluid">');
        for (var j = 0; j < groups[i].items.length; j++) {
            tmpHTMLArr.push('                               <div class="row row-circle-user-list-item" data-target="' + groups[i].id + '|' + groups[i].items[j].userId + '">');
            tmpHTMLArr.push('                                   <div class="col-1 col-circle-user-list-item-hearder">');
            tmpHTMLArr.push('                                       <img class="img-fluid circle-user-list-item-hearder" src="' + groups[i].items[j].header + '">');
            tmpHTMLArr.push('                                   </div>');
            tmpHTMLArr.push('                                   <div class="col">');
            tmpHTMLArr.push(groups[i].items[j].userName);
            tmpHTMLArr.push('                                   </div>');
            tmpHTMLArr.push('                                   <div class="col-1 col-circle-user-list-item-msg">');
            tmpHTMLArr.push('                                       <div class="circle-user-list-item-msg">');
            tmpHTMLArr.push('22');
            tmpHTMLArr.push('                                       </div>');
            tmpHTMLArr.push('                                   </div>');
            tmpHTMLArr.push('                               </div>');
        }

        tmpHTMLArr.push('                           </div>');
        tmpHTMLArr.push('                       </div>');
        tmpHTMLArr.push('                   </div>');
        tmpHTMLArr.push('               </div>');
    }
};

function circleBuildMessagePart(tmpHTMLArr) {
    tmpHTMLArr.push('<div class="card text-center">');
    tmpHTMLArr.push('   <div class="card-header">');
    //tmpHTMLArr.push('                   <div class="wrap-circle-message-history-header">');
    tmpHTMLArr.push('       <ul class="nav nav-tabs card-header-tabs container-circle-message-list-user-header"></ul>');
    //tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('   <div class="card-body">');
    tmpHTMLArr.push('       <div class="container-fluid h-100 wrap-circle-message">');
    tmpHTMLArr.push('           <div class="row">');
    tmpHTMLArr.push('               <div class="col col-circle-message-history">');
    tmpHTMLArr.push('                   <div class="container-fluid container-circle-message-history"></div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row">');
    tmpHTMLArr.push('               <div class="col no-padding"><div class="circle-input-drag"></div></div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="row">');
    tmpHTMLArr.push('               <div class="col col-circle-message-input">');
    tmpHTMLArr.push('                   <div class="container-fluid h-100">');
    tmpHTMLArr.push('                       <div class="row row-circle-message-input-type">');
    tmpHTMLArr.push('                           <div class="col-1">');
    tmpHTMLArr.push('                               <div class="circle-message-input-type input-type-emoji" data-placement="top" data-toggle="popover" title="" data-content="">');
    tmpHTMLArr.push('                                   <i class="far fa-smile"></i>');
    tmpHTMLArr.push('                               </div>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                           <div class="col-1"><div class="circle-message-input-type input-type-file"><i class="far fa-folder-open"></i></div></div>');
    tmpHTMLArr.push('                           <div class="col-1"><div class="circle-message-input-type input-type-history"><i class="far fa-comments"></i></div></div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                       <div class="row row-circle-message-input-field">');
    tmpHTMLArr.push('                           <div class="col h-100 text-left no-padding circle-message-input-field" contenteditable="true"></div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                       <div class="row row-circle-message-input-button">');
    tmpHTMLArr.push('                           <div class="col"></div>');
    tmpHTMLArr.push('                           <div class="col-2">');
    tmpHTMLArr.push('                               <button type="button" class="btn btn-outline-primary btn-sm circle-message-input-send">');
    tmpHTMLArr.push('                                   <span>发送</span><i class="far fa-envelope"></i>');
    tmpHTMLArr.push('                               </button>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');
    tmpHTMLArr.push('<div class="circle-input-drag-proxy"></div>');
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

function circleLoadMessageHistory(userInfo) {
    var currType = 'system';
    var currId = '1';
    if (typeof (userInfo) == 'string' && userInfo.split('|').length == 2) {
        currType = userInfo.split('|')[0];
        currId = userInfo.split('|')[1];
    }

    var items = $('.container-circle-message-list-user-header .nav-item .nav-link');
    items.removeClass('active');

    items = $('.container-circle-message-list-user-header .nav-item');
    var tmpItem, tmpSymbol;
    var addNewChat = true;
    for (var i = 0; i < items.length; i++) {
        tmpItem = $(items[i]);
        tmpSymbol = tmpItem.attr('data-target').split('|');
        if (tmpSymbol.length == 2) {
            if (tmpSymbol[0] == currType && tmpSymbol[1] == currId) {
                $(tmpItem.find('.nav-link')[0]).addClass('active');
                circleBuildMessageHistory(tmpItem.attr('data-target'));
                addNewChat = false;
                break;
            }
        }
    }

    if (addNewChat) {
        var userObj = circleGetUserObj(currType, currId);
        var container = $('.container-circle-message-list-user-header');
        var tmpHTMLArr = [];
        tmpHTMLArr.push('<li class="nav-item" data-target="' + currType + '|' + currId + '">');
        tmpHTMLArr.push('   <div class="nav-link active container-fluid">');
        tmpHTMLArr.push('       <img class="img-fluid" src="' + userObj.header + '" />' + userObj.userName);
        if (items.length > 0) {
            tmpHTMLArr.push('       <button type="button" class="close circle-message-list-header-item-close"><span>&times;</span></button>');
        }

        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</li>');
        var newItem = $(tmpHTMLArr.join(''));
        container.append(newItem);
        newItem.on('click', function (eventObj) {
            $('.container-circle-message-list-user-header .nav-item .nav-link').removeClass('active');
            $($(eventObj.currentTarget).find('.nav-link')[0]).addClass('active');
            circleBuildMessageHistory($(eventObj.currentTarget).attr('data-target'));
        });
        var btn = $(newItem.find('.circle-message-list-header-item-close')[0]);
        btn.on('click', function (eventObj) {
            $(eventObj.currentTarget).parent().parent().remove();
            var firstTab = $($('.container-circle-message-list-user-header .nav-item .nav-link')[0]);
            firstTab.addClass('active');
            circleBuildMessageHistory(firstTab.attr('data-target'));
        });

        circleBuildMessageHistory(currType + '|' + currId);
    }
}

function circleBuildMessageHistory(userInfo) {
    var dataMsg = [
    { type: -1, content: 'Apply a CSS fade transition to the popover' },
    { type: -1, content: 'Example: container: "body". This option is particularly useful in that it allows you to position the popover in the flow of the document near the triggering element - which will prevent the popover from floating away from the triggering element during a window resize.' },
    { type: 1, content: 'Default content value if data-content attribute is not present.' },
    { type: -1, content: 'If a function is given, it will be called with its this reference set to the element that the popover is attached to.' },
    { type: 1, content: 'Delay showing and hiding the popover (ms) - does not apply to manual trigger type' },
    { type: 1, content: 'If a number is supplied, delay is applied to both hide/show Object structure is: delay: { "show": 500, "hide": 100 }' },
    { type: -1, content: 'Insert HTML into the popover. If false, jQuerys text method will be used to insert content into the DOM. Use text if you are worried about XSS attacks.' },
    { type: 1, content: 'How to position the popover - auto | top | bottom | left | right. When auto is specified, it will dynamically reorient the popover.' },
    { type: -1, content: 'Base HTML to use when creating the popover. The popover title will be injected into the .popover-header.' },
    { type: 1, content: '.arrow will become the popovers arrow.' }
    ];
    var currType = 'system';
    var currId = '1';
    if (typeof (userInfo) == 'string' && userInfo.split('|').length == 2) {
        currType = userInfo.split('|')[0];
        currId = userInfo.split('|')[1];
        dataMsg = [
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
    }

    var userObj = circleGetUserObj(currType, currId);
    var tmpHTMLArr = [];
    for (var i = 0; i < dataMsg.length; i++) {
        tmpHTMLArr.push(circleBuildMessageItem(dataMsg[i].content, dataMsg[i].type, (dataMsg[i].type == -1 ? userObj : _gUserInfoObj)));
    }

    $('.container-circle-message-history').empty();
    circleAddMsgItem($(tmpHTMLArr.join('')));
};

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

function circleGetUserObj(userType, userId) {
    var names = ["淳芸", "orion-01", "唐宏禹", "穆晓晨", "张欢引", "吴琼", "吴东鹏", "黄少铅", "胡运燕", "刘幸", "陈媛媛", "李大鹏", "旷东林"];
    var shortAccount = ["chunyun", "orion-01", "tanghongyu", "mUXIAOCHEN", "zhanghuanyin", "wuqiong", "wudongpeng", "huangshaoqian", "yunyan", "liuxing", "CHENYUANYUAN", "dapeng", "kuangdonglin"];

    var dataSystem = [];
    for (var i = 0; i < 10; i++) {
        dataSystem.push({
            "userName": names[i % 13],
            "header": "image/header/" + (i % 10) + ".jpg",
            "userId": i
        });
    }

    var dataUser = [];
    for (var i = 0; i < 30; i++) {
        var tmpIdx = randomInt(0, 29);
        dataUser.push({
            "userName": names[tmpIdx % 13],
            "header": "image/header/" + (tmpIdx % 10) + ".jpg",
            "userId": i
        });
    }

    var tmpDatas = (userType == 'system' ? dataSystem : dataUser);
    var tmpObj = null;
    for (var i = 0; i < tmpDatas.length; i++) {
        if (tmpDatas[i].userId == userId) {
            tmpObj = tmpDatas[i];
            break;
        }
    }

    return tmpObj;
};

function circleCalcMessageHeight(top) {
    var retObj = null;
    top = (top == -1 ? $('.row-footer').offset().top - 220 : top);
    if (circleCheckMsgDragScope(top, true)) {
        var containerHeight = $(".col-circle-message-list").height() - 40 - 10;
        var minHeight = containerHeight * 30 / 100;
        var tmpHeight = $("body").height() - top - 30;
        tmpHeight = (tmpHeight < minHeight ? minHeight : tmpHeight);
        retObj = { input: tmpHeight - 5, history: containerHeight - tmpHeight };
    }

    return retObj;
};

function circleCheckMsgDragScope(top, chekcSize) {
    var bodyHeight = $("body").height();
    var maxTop = $('.wrap-circle-message').offset().top;
    var maxBottom = $('.row-footer').offset().top;
    if (chekcSize && top > maxTop + 100 && top <= maxBottom - 220) {
        return true;
    } else if (!chekcSize && top > maxTop + 20 && top <= maxBottom - 20) {
        return true;
    }

    return false;
};

function initEvents_Circle() {
    $(".circle-input-drag").mousedown(function (e) {
        var drag = $('.circle-input-drag');
        var dragOff = $('.circle-input-drag').offset();
        if (e.pageY < dragOff.top + 5 && e.pageY > dragOff.top - 5) {
            $(document).mouseup(mouseUpFn);
            $(".circle-input-drag-proxy").css("display", "block");
            $(".circle-input-drag-proxy").css("visibility", "visible");
            $(".circle-input-drag-proxy").width(drag.width());
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
        var msg = circleBuildMessageItem($('.circle-message-input-field').html(), 0, _gUserInfoObj);
        webSocketSend(msg);
        circleAddMsgItem($(msg));
    });

    $('.row-circle-user-list-item').on('click', function (eventObj) {
        circleLoadMessageHistory($(eventObj.currentTarget).attr('data-target'));
        var symbolEl = $($(eventObj.currentTarget).find('.circle-user-list-item-msg')[0]);
        symbolEl.text('0');
        symbolEl.hide();
    });

    $($('.col-circle-user-list .collapse')[0]).collapse('show');
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
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_B" src="image/circles.svg" data-toggle="modal" data-target="#mWindow_customHeaderModal"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_M" src="image/circles.svg" data-toggle="modal" data-target="#mWindow_customHeaderModal"/>');
    tmpHTMLArr.push('                       <img id="img_Settings_Profile_Header_S" src="image/circles.svg" data-toggle="modal" data-target="#mWindow_customHeaderModal"/>');
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
    var successFn = function (response) {
        //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function () {
        //    var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //    if (success) {
        $('#img_Settings_Profile_Header_B').attr('src', _gUserInfoObj.header);
        $('#img_Settings_Profile_Header_M').attr('src', _gUserInfoObj.header);
        $('#img_Settings_Profile_Header_S').attr('src', _gUserInfoObj.header);
        $('#txt_Settings_Profile_NickName').val('Terry');
        $('#txt_Settings_Profile_Name').val('郭靖');
        //$("[name='settings_profile_gender']").each(function () {
        //    $(this).removeAttr("checked");
        //    if ($(this).attr("value") == data.gender) {
        //        $(this).prop("checked", true);
        //    }
        //});

        $('#rb_Settings_Profile_Gender_Male').prop("checked", true);
        $('#dt_Settings_Profile_Birthday').val('2007-01-15');
        $('#sel_Settings_Profile_Province').val('广东').trigger("change");
        //if (data.city != '') {
        //    $('#select_Settings_Profile_User_City_City').val(data.city);
        //}
        $('#sel_Settings_Profile_City').val('深圳')
        $('#txt_Settings_Profile_School').val('深圳市实验小学');
        //    }
        //});
    };

    //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo, {}), '', successFn);
    successFn();
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
            _CookieUtils.set("logined_user_nickname", $('#txt_Settings_Profile_NickName').val(), { path: '/', expires: 0.125 });
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
            header: 'image/tmpheader.jpg',
            name: 'Terry',
            title: 'Level 2',
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
        header: _getRequestURL(_gURLMapping.account.getheader, {}),
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
        //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function () {
        //    var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //    if (success) {
        //        _gUserInfoObj.header = _gUserHeader = 'image/tmpheader.jpg';
        //        updateUserInfo();
        //    }
        //});

        //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getCircleNews, {}), '', function () {
        //    var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //    if (success) {
        //        updateCircleNews();
        //    }
        //});

        //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getExamNews, {}), '', function () {
        //    var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //    if (success) {
        //        updateExamNews();
        //    }
        //});

        updateUserInfo();
        buildCategoryContent();
        hideLoadingMask();
    };

    //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo, {}), '', successFn);
    successFn();
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
        //var success = ($($(response).find('executed')[0]).text() == 'true' ? true : false);
        //if (success) {
        var canvas = document.getElementById("canvas_CustomHeader");
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 320, 320);
        var image = new Image();
        image.src = (typeof path == 'string' ? path : 'image/tmpheader.jpg');
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
        //} else {
        //    $('#progress_HeaderUpload').hide();
        //    $('#warnning_HeaderUpload').show();
        //    $('#wrap_CropBox_Header').show();
        //}
    };

    //ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', successFn);
    successFn();
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
        webSocketRefereshCircle(evt);
    };

    //断开websocket连接成功
    _gSocket.onclose = function () {
    };
};

function webSocketSend(msg) {
    if (_gSocket.readyState == 1) {
        var tmpMsg = [];
        tmpMsg.push('<root>');
        tmpMsg.push('   <token>');
        tmpMsg.push(_gToken);
        tmpMsg.push('   </token>');
        tmpMsg.push('   <msg>');
        tmpMsg.push(msg);
        tmpMsg.push('   </msg>');
        tmpMsg.push('</root>');
        _gSocket.send(tmpMsg);
    } else if (_gSocket.readyState == 2) {
        window.setTimeout("webSocketSend(" + msg + ")", 1000);
    } else {
        webSocketCreate();
        _gSocket.onopen = function () {
            webSocketSend(msg);
        };
    }
};

function webSocketClose() {
    _gSocket.close();
};

function webSocketRefereshCircle(evt) {
    var msgs = { type: 'new', items: [{ user: { type: 'system', id: 1 }, msg: 'aaaaa' }] };
    if (msgs.type == "list") {
        webSocketReceiveCiecleHistory(msgs);
    } else {
        if (msgs.items.length > 0) {
            webSocketRefereshCircleNew(msgs.items);
        }
    }
}

function webSocketRefereshCircleNew(msgs) {
    $('.category-item-attr.circle-attr').show();
    var msgItem, tmpEl, orgCount, tmpSymbol, tmpHeaderEl;
    for (vari = 0; i < msgs.length; i++) {
        msgItem = msgs[i];
        tmpSymbol = msgItem.user.type + '|' + msgItem.user.id;
        tmpEl = $('.row-circle-user-list-item[data-target="' + tmpSymbol + '"] .col-circle-user-list-item-msg .circle-user-list-item-msg');
        if (tmpEl.length > 0) {
            if (tmpEl.css('display') != 'none') {
                orgCount = parseInt(tmpEl.text());
            } else {
                orgCount = 0;
            }

            tmpHeaderEl = $('.container-circle-message-list-user-header li[data-target="' + tmpSymbol + '"]');
            if ($(tmpHeaderEl.find('nav-link')[0]).hasClass('active')) {
                tmpEl.text(orgCount + 1);
                tmpEl.hide();
                circleAddMsgItem($(circleBuildMessageItem(msgItem.msg, 0, tmpSymbol)));
            } else {
                tmpEl.show();
                tmpEl.text(orgCount + 1);
            }
        }
    }
};

function webSocketGetCiecleHistory() {
    _gSocket.send("gethistory");
}

function webSocketReceiveCiecleHistory(msgs) {

}
