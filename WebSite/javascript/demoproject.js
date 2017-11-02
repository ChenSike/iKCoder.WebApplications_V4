function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    $('.nav-item')[1].remove();
    $('.nav-item')[0].remove();
    $('.img-header-logo').attr('src', 'image/demologo.png');
    $('#wrap_Left').height($('body').height() - $('nav').height() - $('footer').height());
    $('#btn_StartDemo').on('click', function () {
        var id = $('#btn_StartDemo').attr('data-target');
        switch (id) {
            case '1':
                window.location.href = "demos/laser/index.html";
                break;
            case '2':
                window.location.href = "demos/runpixierun/index.html";
                break;
            case '3':
                window.location.href = "demos/Draw-Demo/index.html";
                break;
        }
    });

    var projectId = getQueryString('proj');
    var data = {
        img: 'image/demoimage/1.png',
        name: '激光小镇',
        id: '1',
        author: 'Alice',
        adviser: '教师 1',
        date: '2017-10-01',
        type: '趣味物理',
        knowlage: ['光线的反射', '空间几何', 'JavaScript语言及JSON数据交换格式', 'JQuery及ThreeJS Lib', '计算机图形学'],
        desc: '通过控制带有镜子的建筑物的升降来控制激光枪发出的激光的反射路径, 最终使激光射进光门, 实现此应用的重点主要为: 3D建模及其JSON序列化, 路径设计计算及事件触发和反馈, JavaScript语言及代码库的熟练使用, 基本算法、排序算法等算法的简单应用. '
    };
    switch (projectId) {
        case '2':
            data = {
                img: 'image/demoimage/2.png',
                name: '丛林历险',
                id: '2',
                author: 'Alice',
                adviser: '教师 2',
                date: '2017-10-02',
                type: '游戏',
                knowlage: ['图片处理及动画', '平面几何', 'JavaScript语言及JSON数据交换格式', 'JQuery及Pixi Lib', '计算机图形学'],
                desc: '触摸点击屏幕控制小精灵飞翔, 小精灵在茂密的丛林里奔跑，他需要经历很多的磨难，快来帮助小精灵完成这次的历险吧. 实现此应用的重点主要为: 2D建模, 2D动画的简单制作, 2D特效的实现, 路径计算及事件触发和反馈, 随机目标的生成, JavaScript语言及代码库的熟练使用.'
            };
            break;
        case '3':
            data = {
                img: 'image/demoimage/3.png',
                name: '神奇画笔',
                id: '3',
                author: 'Alice',
                adviser: '教师 3',
                date: '2017-10-03',
                type: '3D动画',
                knowlage: ['三角函数', '平面几何', '3D建模', 'JavaScript语言', 'JQuery及ThreeJS Lib', '计算机图形学'],
                desc: '展示了一只3D画笔绘制各种图形的过程, 实现此应用的重点主要为: 3D画笔的建模和实现, 2D图形的顶点计算和绘制, 3D画笔的运动, JavaScript语言及代码库的熟练使用.'
            };
            break;
    }

    var projectImg = new Image();
    projectImg.src = data.img;
    projectImg.onload = function () {
        $('#img_Project').attr('src', projectImg.src);
        $('#img_Project').css('margin-top', ($('#wrap_Left').height() - $('#img_Project').height()) / 2 + 'px');
    }

    $('#lb_Project_Name').html('<span style="font-weight:bold;">项目名称 : </span>' + data.name);
    $('#lb_Project_Author').html('<span style="font-weight:bold;">项目作者 : </span>' + data.author);
    $('#lb_Project_Adviser').html('<span style="font-weight:bold;">指导老师 : </span>' + data.adviser);
    //$('#lb_Project_Date').text('提交时间 : ' + data.date);
    $('#lb_Project_Type').html('<span style="font-weight:bold;">项目类型 : </span>' + data.type);
    $('#lb_Project_Description').html('<span style="font-weight:bold;">项目简介 : </span>' + data.desc);
    for (var i = 0; i < data.knowlage.length; i++) {
        $('#lb_Project_Knowlage_List').append($('<li>' + data.knowlage[i] + '</li>'));
    }

    $('#btn_StartDemo').attr('data-target', data.id);
};
