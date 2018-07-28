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
    { id: 'experiment', icon: 'fa-flask', text: '实验', attr: ['new'] },
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
var orgAvailableHeight = 890;

function initPage() {
    globalResize();
    showLoadingMask();
    buildCategorys();
    buildCategoryContent('circle');
    initEvents();
    initData();
    //initEvents_Circle();
};

function initEvents() {
    $(window).resize(globalResize);
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
        tmpHTMLArr.push('<div class="category-item-attr ' + cateObj.id + '-attr">');
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
            initEvents_Circle();
            break;
        case 'report':
            buildContent_Report();
            break;
        case 'settings':
            buildContent_Setting();
            break;
        case 'studio':
            buildContent_Studio();
            break;
        case 'appshop':
            buildContent_AppShop();
            break;
        case 'teamsuit':
            buildContent_TeamSuit();
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
    var scale = availableHeight / orgAvailableHeight;

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
        var target = $(eventObj.currentTarget);
        buildDetail_Course(target.attr('data-target'));
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
    var scale = availableHeight / orgAvailableHeight;
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

    tmpHTMLArr.push(buildHorizontalList(itemsHTML.join(''), "System"));
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

    bindHorizontalListEvent(containerheight, width, space, dataSystem.length, "System");
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

    var groups = [
    { id: 'System', title: '助手和顾问', items: dataSystem },
    { id: 'Friend', title: '我的小伙伴', items: dataUser },
    { id: 'Guest', title: '新朋友', items: dataNew }
    ];
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<div class="container-fluid h-100 no-wrap">');
    tmpHTMLArr.push('   <div class="row h-100 no-wrap">');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-user-list">');
    tmpHTMLArr.push('           <div id="accordion">');
    tmpHTMLArr.push('               <div class="card">');
    tmpHTMLArr.push('                   <div class="card-header header-circle-user-search">');
    tmpHTMLArr.push('                       <div class="input-group w-100 wrap-circle-search">');
    tmpHTMLArr.push('                           <!--<i class="clearable glyphicon glyphicon-remove" style="position: absolute; top: 12px; right: 12px; z-index: 4; cursor: pointer; font-size: 12px; display: none;"></i>-->');
    tmpHTMLArr.push('                           <input type="text" class="form-control form-control-sm" id="search_Circle" style="border-radius:5px; border-color:rgb(17,138,195);" autocomplete="off" placeholder="Search" data-id="" alt="a">');
    tmpHTMLArr.push('                           <div class="input-group-btn">');
    tmpHTMLArr.push('                               <button type="button" class="btn btn-default dropdown-toggle" data-toggle="" style="display: none;">');
    tmpHTMLArr.push('                                   <span class="caret"></span>');
    tmpHTMLArr.push('                               </button>');
    tmpHTMLArr.push('                               <ul class="dropdown-menu dropdown-menu-right" role="menu"></ul>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
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

    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('       <div class="col h-100 no-wrap col-circle-message-list">');
    tmpHTMLArr.push('           <div class="card text-center">');
    tmpHTMLArr.push('               <div class="card-header">');
    tmpHTMLArr.push('                   <ul class="nav nav-tabs card-header-tabs container-circle-message-list-user-header"></ul>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('               <div class="card-body h-100" style="padding:5px;">');
    tmpHTMLArr.push('                   <div class="container-fluid h-100 wrap-circle-message">');
    tmpHTMLArr.push('                       <div class="row">');
    tmpHTMLArr.push('                           <div class="col col-circle-message-history">');
    tmpHTMLArr.push('                               <div class="container-fluid h-100 container-circle-message-history"></div>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                       <div class="row">');
    tmpHTMLArr.push('                           <div class="col" style="padding: 0px;"><div class="circle-input-drag"></div></div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                       <div class="row">');
    tmpHTMLArr.push('                           <div class="col col-circle-message-input">');
    tmpHTMLArr.push('                               <div class="container-fluid h-100">');
    tmpHTMLArr.push('                                   <div class="row row-circle-message-input-type">');
    tmpHTMLArr.push('                                       <div class="col-1">');
    tmpHTMLArr.push('                                           <div class="circle-message-input-type input-type-emoji" data-placement="top" data-toggle="popover" title="" data-content="">');
    tmpHTMLArr.push('                                               <i class="far fa-smile"></i>');
    tmpHTMLArr.push('                                           </div>');
    tmpHTMLArr.push('                                       </div>');
    tmpHTMLArr.push('                                       <div class="col-1"><div class="circle-message-input-type input-type-file"><i class="far fa-folder-open"></i></div></div>');
    tmpHTMLArr.push('                                       <div class="col-1"><div class="circle-message-input-type input-type-history"><i class="far fa-comments"></i></div></div>');
    tmpHTMLArr.push('                                   </div>');
    tmpHTMLArr.push('                                   <div class="row row-circle-message-input-field">');
    tmpHTMLArr.push('                                       <div class="col h-100 text-left circle-message-input-field" contenteditable="true"></div>');
    tmpHTMLArr.push('                                   </div>');
    tmpHTMLArr.push('                                   <div class="row row-circle-message-input-button">');
    tmpHTMLArr.push('                                       <div class="col"></div>');
    tmpHTMLArr.push('                                       <div class="col-2">');
    tmpHTMLArr.push('                                           <button type="button" class="btn btn-outline-primary btn-sm circle-message-input-send">');
    tmpHTMLArr.push('                                               <span>发送</span><i class="far fa-envelope"></i>');
    tmpHTMLArr.push('                                           </button>');
    tmpHTMLArr.push('                                       </div>');
    tmpHTMLArr.push('                                   </div>');
    tmpHTMLArr.push('                               </div>');
    tmpHTMLArr.push('                           </div>');
    tmpHTMLArr.push('                       </div>');
    tmpHTMLArr.push('                   </div>');
    tmpHTMLArr.push('               </div>');
    tmpHTMLArr.push('           </div>');
    tmpHTMLArr.push('           <div class="circle-input-drag-proxy"></div>');
    tmpHTMLArr.push('       </div>');
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</div>');

    $('.col-main-content').append($(tmpHTMLArr.join('')));
    //resize message input row and history row height
    var tmpObj = calcCircleMessageHeight(-1);
    $(".col-circle-message-input").height(tmpObj.input);
    $(".col-circle-message-history").height(tmpObj.history);
    //init search suggest
    $('#search_Circle').bsSuggest(defaultOptions);
    //init events
    $('.row-circle-user-list-item').on('click', function (eventObj) {
        alert($(eventObj.currentTarget).attr('data-target'));
    });
    //load messages
    loadCircleMessageHistory();
};

function buildCircleEmojiPopover() {
    var emoji = [];
    for (var i = 0; i < 20; i++) {
        emoji.push("image/header/" + (i % 10) + ".jpg");
    }

    var popoverHTML = [];

    popoverHTML.push('<div class="container-fluid aaaaa" style="width:300px; ">');
    popoverHTML.push('  <div class="row">');
    popoverHTML.push('      <div class="col" style="padding:10px 10px 5px 10px; overflow:auto;height:200px;">');
    popoverHTML.push('          <div class="container-fluid" style=" border-radius:5px;">');
    popoverHTML.push('              <div class="row">');
    popoverHTML.push('                  <div class="col" style="padding:0px;">');
    for (var i = 0; i < 20; i++) {
        popoverHTML.push('<img class="img-fluid" src="' + emoji[i] + '" style="width:30px;cursor:pointer;margin-bottom:5px;">');
    }

    popoverHTML.push('                  </div>');
    popoverHTML.push('              </div>');
    popoverHTML.push('          </div>');
    popoverHTML.push('      </div>');
    popoverHTML.push('  </div>');
    popoverHTML.push('  <div class="row" style="height:30px;">');
    popoverHTML.push('      <div class="col" style="width: calc(100% - 70px);">');
    popoverHTML.push('          <div>');
    popoverHTML.push('              <img class="img-fluid " src="image/header/1.jpg" style="width:25px;">');
    popoverHTML.push('          </div>');
    popoverHTML.push('      </div>');
    popoverHTML.push('      <div class="col" style="max-width: 70px;    padding: 2px">');
    popoverHTML.push('          <button type="button" class="btn btn-outline-info btn-sm" style="line-height: 17px;">');
    popoverHTML.push('              <i class="fas fa-chevron-left"></i>');
    popoverHTML.push('          </button>');
    popoverHTML.push('          <button type="button" class="btn btn-outline-info btn-sm" style="line-height: 17px;">');
    popoverHTML.push('              <i class="fas fa-chevron-right"></i>');
    popoverHTML.push('          </button>');
    popoverHTML.push('      </div>');
    popoverHTML.push('  </div>');
    popoverHTML.push('</div>');

    return popoverHTML.join('');
}

function loadCircleMessageHistory(userInfo) {
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
    if (typeof (userInfo) == 'string' && userInfo.split('|') == 2) {
        currType = userInfo.split('|')[0];
        currId = userInfo.split('|')[1];
    }

    var userObj = getCircleUserObj(currType, currId);
    var tmpHTMLArr = [];
    tmpHTMLArr.push('<li class="nav-item" data-target="system|1">');
    tmpHTMLArr.push('   <div class="nav-link active container-fluid">');
    tmpHTMLArr.push('       <img class="img-fluid" src="' + userObj.header + '" />' + userObj.userName);
    tmpHTMLArr.push('   </div>');
    tmpHTMLArr.push('</li>');
    $('.container-circle-message-list-user-header').append($(tmpHTMLArr.join('')));
    var selfObj = { "userName": 'Terry', "header": "image/tmpheader_1.jpg", "userId": 88 };
    tmpHTMLArr = [];
    for (var i = 0; i < dataMsg.length; i++) {
        tmpHTMLArr.push('<div class="row row-message-item">');
        if (dataMsg[i].type == -1) {
            tmpHTMLArr.push('   <div class="col-1">');
            tmpHTMLArr.push('       <img class="img-fluid" src="' + userObj.header + '" />');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="col-9">');
            tmpHTMLArr.push('       <div class="message-item-wrap">');
            tmpHTMLArr.push('           <div class="arrow-back arrow-left"></div>');
            tmpHTMLArr.push('           <div class="arrow-front arrow-left"></div>');
            tmpHTMLArr.push('           <div class="message-item-content">' + dataMsg[i].content + '</div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
        } else {
            tmpHTMLArr.push('   <div class="col-2"></div>');
            tmpHTMLArr.push('   <div class="col-9">');
            tmpHTMLArr.push('       <div class="message-item-wrap msg-item-wrap-right">');
            tmpHTMLArr.push('           <div class="message-item-content">' + dataMsg[i].content + '</div>');
            tmpHTMLArr.push('           <div class="arrow-back arrow-right"></div>');
            tmpHTMLArr.push('           <div class="arrow-front arrow-right"></div>');
            tmpHTMLArr.push('       </div>');
            tmpHTMLArr.push('   </div>');
            tmpHTMLArr.push('   <div class="col-1">');
            tmpHTMLArr.push('       <img class="img-fluid" src="' + selfObj.header + '" />');
            tmpHTMLArr.push('   </div>');
        }

        tmpHTMLArr.push('</div>');
    }

    $('.container-circle-message-history').append($(tmpHTMLArr.join('')));
};

function getCircleUserObj(userType, userId) {
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

function calcCircleMessageHeight(top) {
    var retObj = null;
    top = (top == -1 ? $('.row-footer').offset().top - 220 : top);
    if (checkCircleMsgDragScope(top, true)) {
        var containerHeight = $(".col-circle-message-list").height() - 40 - 10;
        var minHeight = containerHeight * 30 / 100;
        var tmpHeight = $("body").height() - top - 30;
        tmpHeight = (tmpHeight < minHeight ? minHeight : tmpHeight);
        retObj = { input: tmpHeight - 5, history: containerHeight - tmpHeight };
    }

    return retObj;
};

function checkCircleMsgDragScope(top, chekcSize) {
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
            var tmpObj = calcCircleMessageHeight(dragProxy.offset().top);
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
            if (!checkCircleMsgDragScope(top, false)) {
                mouseUpFn();
            }
        });
    };

    $('.circle-message-input-type.input-type-emoji').popover({
        html: true,
        content: buildCircleEmojiPopover()
    });

    $('.circle-message-input-type').on('click', function () {

    });
};


function buildContent_Report() { };
function buildContent_Setting() { };
function buildContent_Studio() { };
function buildContent_AppShop() { };
function buildContent_TeamSuit() { };

function initData() {
    var successFn = function (response) {
        hideLoadingMask();
    };

    //ajaxFn('GET', _getRequestURL(_gURLMapping.account.updatepwd, {}), '', successFn);
    successFn();
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