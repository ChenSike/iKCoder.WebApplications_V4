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
        name: '坦克大战',
        id: '1',
        author: 'Alice',
        adviser: '教师 1',
        date: '2017-10-01',
        type: '游戏',
        knowlage: '致羚商务皮套华为荣耀9手机壳 荣耀9手机套硅胶翻盖防摔保护套皮套男女款外壳 商务钱',
        desc: '《坦克大战》是由日本南梦宫Namco游戏公司开发的一款平面射击游戏，于1985年发售。游戏以坦克战斗及保卫基地为主题，属于策略型联机类。同时也是FC平台上少有的内建关卡编辑器的几个游戏之一，玩家可自己创建独特的关卡，并通过获取一些道具使坦克和基地得到强化。'
    };
    switch (projectId) {
        case '2':
            data = {
                img: 'image/demoimage/2.png',
                name: 'Project 2',
                id: '2',
                author: 'Alice',
                adviser: '教师 2',
                date: '2017-10-02',
                type: '故事',
                knowlage: '致羚商务皮套华为荣耀9手机壳 荣耀9手机套硅胶翻盖防摔保护套皮套男女款外壳 商务钱',
                desc: '《坦克大战》是由日本南梦宫Namco游戏公司开发的一款平面射击游戏，于1985年发售。游戏以坦克战斗及保卫基地为主题，属于策略型联机类。同时也是FC平台上少有的内建关卡编辑器的几个游戏之一，玩家可自己创建独特的关卡，并通过获取一些道具使坦克和基地得到强化。'
            };
            break;
        case '3':
            data = {
                img: 'image/team-temp.png',
                name: 'Project 3',
                id: '3',
                author: 'Alice',
                adviser: '教师 3',
                date: '2017-10-03',
                type: '游戏',
                knowlage: '致羚商务皮套华为荣耀9手机壳 荣耀9手机套硅胶翻盖防摔保护套皮套男女款外壳 商务钱',
                desc: '《坦克大战》是由日本南梦宫Namco游戏公司开发的一款平面射击游戏，于1985年发售。游戏以坦克战斗及保卫基地为主题，属于策略型联机类。同时也是FC平台上少有的内建关卡编辑器的几个游戏之一，玩家可自己创建独特的关卡，并通过获取一些道具使坦克和基地得到强化。'
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
    $('#lb_Project_Knowlage').html('<span style="font-weight:bold;">相关知识 : </span>' + data.knowlage);
    $('#lb_Project_Type').html('<span style="font-weight:bold;">项目类型 : </span>' + data.type);
    $('#lb_Project_Description').html('<span style="font-weight:bold;">项目简介 : </span>' + data.desc);
    $('#btn_StartDemo').attr('data-target', data.id);
};
