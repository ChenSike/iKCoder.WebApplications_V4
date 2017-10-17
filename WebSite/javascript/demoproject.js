﻿function initPage() {
    $('.navbar.navbar-expand-lg.navbar-light').css('background-color', 'rgb(246,246,246)');
    $('.nav-item')[1].remove();
    $('.img-header-logo').attr('src', 'image/logo-new-gray.png');
    $('#wrap_Left').height($('body').height() - $('nav').height() - $('footer').height());

    var data = {
        img: 'image/tankback.jpg',
        name: '坦克大战',
        id: '1',
        author: 'Tom',
        adviser: '教师 1',
        date: '2017-10-01',
        type: '游戏',
        desc: '《坦克大战》是由日本南梦宫Namco游戏公司开发的一款平面射击游戏，于1985年发售。游戏以坦克战斗及保卫基地为主题，属于策略型联机类。同时也是FC平台上少有的内建关卡编辑器的几个游戏之一，玩家可自己创建独特的关卡，并通过获取一些道具使坦克和基地得到强化。'
    };

    var projectImg = new Image();
    projectImg.src = data.img;
    projectImg.onload = function () {
        $('#img_Project').attr('src', projectImg.src);
        $('#img_Project').css('margin-top', ($('#wrap_Left').height() - $('#img_Project').height()) / 2 + 'px');
    }

    $('#lb_Project_Name').text('项目名称 : ' + data.name);
    $('#lb_Project_Author').text('项目作者 : ' + data.author);
    $('#lb_Project_Adviser').text('指导老师 : ' + data.adviser);
    $('#lb_Project_Date').text('提交时间 : ' + data.date);
    $('#lb_Project_Type').text('项目类型 : ' + data.type);
    $('#lb_Project_Description').text('项目简介 : ' + data.desc);
};
