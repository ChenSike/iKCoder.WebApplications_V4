'use strict';

var _gSocket = null;
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
var _gCurrCateId = 'courses';
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
    a: { icon: 'fas fa-robot', title: 'AI' },
    //a: { icon: 'fas fa-brain', title: 'AI' },
    //a: { icon: 'fas fa-code-branch', title: 'AI' },
    b: { icon: 'fab fa-bimobject', title: 'BBBB' },
    d: { icon: 'fas fa-database', title: 'Database' },
    m: { icon: 'fas fa-square-root-alt', title: 'Math' }
};
var _gCourseImgMap = {
    A: { img: 'image/course/course_logic.png', color: 'rgb(86,181,34)' },
    B: { img: 'image/course/course_html.png', color: 'rgb(100,124,185)' },
    C: { img: 'image/course/course_js.png', color: 'rgb(86,181,34)' },
    D: { img: 'image/course/course_python.png', color: 'rgb(100,124,185)' },
    E: { img: 'image/course/course_cs.png', color: 'rgb(86,181,34)' },
    F: { img: 'image/course/course_java.png', color: 'rgb(100,124,185)' },
    G: { img: 'image/course/course_ios.png', color: 'rgb(86,181,34)' }
};
var _gCourseTimeout = '';
var _orgAvailableHeight = 890;
var _gUserInfoObj = { userName: '', header: '', userId: '', nickName: '', level: '', birthday: '', country: '', gender: '', province: '', city: '', school: '' };
var _gSTEAMMap = {
    s: { icon: 'js-square', title: 'Science', name: '科学', color: 'rgb(36,90,186)' },
    t: { icon: 'python', title: 'Technology', name: '技术', color: 'rgb(236,15,33)' },
    e: { icon: 'java', title: 'Engineering', name: '工程', color: 'rgb(165,165,165)' },
    a: { icon: 'node-js', title: 'Arts', name: '艺术', color: 'rgb(71,143,208)' },
    m: { icon: 'html5', title: 'Mathematics', name: '数学', color: 'rgb(255,191,0)' }
};

function initPage() {
    globalResize();
    showLoadingMask();
    buildCategorys();
    initEvents();
    initData();
    webSocketCreate();
    _gCourseTimeout = window.setTimeout('refereshCourseState()', 1000);
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

    $('#btn_Student_SignOut').on('click', function () {
        var signOutFn = function (response) {
            if (_getExcuted(response)) {
                _signOut("http://www.ikcoder.com/index.html");
            } else {
                _showGlobalMessage('暂时无法安全退出，请重试!', 'warning', 'alert_SignOut_Error');
            }
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.account.signout, {}), '', signOutFn);
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

    $('#file_Upload').on('change', function (eventObj) {
        //initCustomHeaderImg('image/tmpclip.jpg');
        //return;
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
                url: _getRequestURL(_gURLMapping.account.setheader, {}),
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
                    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getheader, {}), '', function (response_header) {
                        var success = ($($(response_header).find('executed')[0]).text() == 'true' ? true : false);
                        if (success) {
                            var tmpImg = $($(response_header).find('msg')[0]).text();
                            if (tmpImg.indexOf('.') < 0) {
                                tmpImg = 'image/tmpheader.jpg';
                            } else {
                                tmpImg = (tmpImg.indexOf('http://') != 0 ? 'http://' + tmpImg : tmpImg) + '?rnd=' + (new Date()).valueOf();
                                var img = new Image();
                                //img.setAttribute('crossOrigin', 'anonymous');
                                img.src = tmpImg;
                                img.onerror = function () {
                                    _gUserInfoObj.header = 'image/tmpheader.jpg';
                                    _CookieUtils.set("logined_user_header", _gUserInfoObj.header);
                                    $('#img_Siderbar_Header').attr('src', _gUserInfoObj.header);
                                    $('#img_Settings_Profile_Header_B').attr('src', _gUserInfoObj.header);
                                    $('#img_Settings_Profile_Header_M').attr('src', _gUserInfoObj.header);
                                    $('#img_Settings_Profile_Header_S').attr('src', _gUserInfoObj.header);
                                };
                            }

                            _gUserInfoObj.header = tmpImg.indexOf('?') < 0 ? tmpImg + '?rnd=' + Date.now() : tmpImg;
                            _CookieUtils.set("logined_user_header", _gUserInfoObj.header);
                            $('#img_Siderbar_Header').attr('src', _gUserInfoObj.header);
                            $('#img_Settings_Profile_Header_B').attr('src', _gUserInfoObj.header);
                            $('#img_Settings_Profile_Header_M').attr('src', _gUserInfoObj.header);
                            $('#img_Settings_Profile_Header_S').attr('src', _gUserInfoObj.header);
                        }
                    });
                } else {
                    _showGlobalMessage('处理头像信息失败!', 'danger', 'alert_Save_CustHead_Error');
                }
            };

            var data64 = document.getElementById("canvas_Sample_1").toDataURL().split(',');
            var tmpHead = data64.shift();
            ajaxFn('POST', _getRequestURL(_gURLMapping.account.setheader64, {}), { data: data64.join(',') }, successFn);
        }
    });
};

function refereshCourseState() {
    if ($('.row-category-item[data-target="courses"]').hasClass('active-item')) {
        var target = $('.img-course-item-detail.active');
        if (target.length == 1) {
            ajaxFn('GET', _getRequestURL(_gURLMapping.course.getlessonslist, { course_name: target.attr('data-target') }), '', function (response) {
                buildDetail_Course(response);
                _gCourseTimeout = window.setTimeout('refereshCourseState()', 100000);
            });
        }
    }
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
    window.clearTimeout(_gRefreshCourseCode);
    getCurrentCategoryObj(categoryId);
    $('.col-main-content').empty();
    var successFn;
    switch (_gCurrCateId) {
        case 'courses':
            successFn = function (response) {
                var items = $(response).find('item');
                if (items.length > 0) {
                    if ($('.row-category-item[data-target="courses"]').hasClass('active-item')) {
                        $('.col-main-content').empty();
                        buildContent_Courses(items);
                    }
                } else {
                    _showGlobalMessage('无法加载课程列表，请重试!', 'warning', 'alert_CourseList_Error');
                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.course.getcoursepackage, {}), '', successFn);
            break;
        case 'experiment':
            successFn = function (response) {
                var items = $(response).find('item');
                if (items.length > 0) {
                    buildContent_Exp(items);
                } else {
                    _showGlobalMessage('无法加载实验列表，请重试!', 'warning', 'alert_ExpList_Error');
                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.course.getcoursepackage, {}), '', successFn);
            break;
        case 'circle':
            buildContent_Circle();
            break;
        case 'report':
            buildContent_Report();
            break;
        case 'settings':
            successFn = function (response) {
                if (_getExcuted(response)) {
                    buildContent_Setting(response);
                } else {
                    _showGlobalMessage('无法加载个人信息，请重试!', 'warning', 'alert_Settings_Error');
                }
            };

            ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo, {}), '', successFn);
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
                userId: formatFn('uid'),
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

        var levelFn = function (levelResponse) {
            _gUserInfoObj.level = $($(levelResponse).find('root')[0]).text();
            if (_gUserInfoObj.level == '') {
                _gUserInfoObj.level = '初级程序员';
            }

            var headerFn = function (response_header) {
                var success_header = ($($(response_header).find('executed')[0]).text() == 'true' ? true : false);
                if (success_header) {
                    var tmpImg = $($(response_header).find('msg')[0]).text();
                    var tmpFile = tmpImg.split('/');
                    tmpFile = tmpFile[tmpFile.length - 1];
                    if (tmpFile.indexOf('.') < 0) {
                        tmpImg = 'image/tmpheader.jpg';
                    } else {
                        tmpImg = (tmpImg.indexOf('http://') != 0 ? 'http://' + tmpImg : tmpImg);
                    }

                    var img = new Image();
                    img.src = tmpImg;
                    img.onerror = function () {
                        _gUserInfoObj.header = 'image/tmpheader.jpg';
                        _CookieUtils.set("logined_user_header", _gUserInfoObj.header);
                        updateUserInfo();
                    };

                    _gUserInfoObj.header = tmpImg.indexOf('?') < 0 ? tmpImg + '?rnd=' + Date.now() : tmpImg;
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
        };

        ajaxFn('GET', _getRequestURL(_gURLMapping.profile.gettitle, {}), '', levelFn);
        buildCategoryContent();
        hideLoadingMask();
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.account.getinfo, {}), '', successFn);
};

function updateUserInfo() {
    $('#img_Siderbar_Header').attr('src', _gUserInfoObj.header.indexOf('?') < 0 ? _gUserInfoObj.header + '?rnd=' + Date.now() : _gUserInfoObj.header);
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

function getCircleWSActions() {
    var actionFn = function (response) {
        var actions = $(response).find('item');
    };

    ajaxFn('GET', _getRequestURL(_gURLMapping.circle.getaction, { operator: 'ikcoder_operator' }), '', actionFn, actionFn);
};

function _checkGUID(guid) {
    var guidReg = /[?a-zA-Z0-9]{8}-[?a-zA-Z0-9]{4}-[?a-zA-Z0-9]{4}-[?a-zA-Z0-9]{4}-[?a-zA-Z0-9]{12}/;
    if (!guidReg.test(guid)) {
        return false;
    } else {
        return true;
    }
};

$(window).on('unload', function () {
    webSocketClose();
});