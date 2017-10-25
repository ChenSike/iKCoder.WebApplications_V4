'use strict';

function initHeader() {
    buildTopAppItems();
    buildNewestAppItems();
    buildPopulationAppItems();

};

function initFooter() {

};

function initPage() {
};

function buildCardItemsHTML(data) {
    var tmpHTMLArr = [];
    for (var i = 0; i < data.length; i++) {
        tmpHTMLArr.push('<div class="card">');
        tmpHTMLArr.push('   <img class="card-img-top" src="' + data[i].img + '" alt="Card image cap">');
        tmpHTMLArr.push('   <div class="card-block" style="padding: 5px 15px;">');
        //tmpHTMLArr.push('       <h4 class="card-title">Card title</h4>');
        tmpHTMLArr.push('       <p class="card-text" style="margin-bottom: 0px;">');
        for (var j = 0; j < data[i].star; j++) {
            tmpHTMLArr.push('       <i class="fa fa-star" style="color:Gold;"></i>');
        }

        tmpHTMLArr.push('       </p>');
        tmpHTMLArr.push('       <p class="card-text" style="font-weight:bold; color:#5f5f5f;margin-bottom: 10px;">' + data[i].type.name + '</p>');
        tmpHTMLArr.push('       <p class="card-text" style="margin-bottom: 10px; text-align:right; padding-right:10px;"><button type="button" class="btn btn-sm btn-primary">开始运行</button></p>');
        tmpHTMLArr.push('   </div>');
        tmpHTMLArr.push('</div>');
    }

    return tmpHTMLArr.join('');
};

function buildTopAppItems() {
    var data = [
        {
            id: '1',
            name: 'Application 1',
            img: 'image/appshop/game_1.jpg',
            star: 3,
            type: {
                id: '1',
                name: 'Game'
            }
        }, {
            id: '2',
            name: 'Application 2',
            img: 'image/appshop/app_1.png',
            star: 5,
            type: {
                id: '2',
                name: 'App'
            }
        }, {
            id: '3',
            name: 'Application 3',
            img: 'image/appshop/game_2.jpg',
            star: 4,
            type: {
                id: '1',
                name: 'Game'
            }
        }
    ];

    $('#cardDeck_TopAPP').append($(buildCardItemsHTML(data)));
};

function buildNewestAppItems() {
    var data = [
        {
            id: '9',
            name: 'Application 1',
            img: 'image/appshop/game_6.jpg',
            star: 3,
            type: {
                id: '1',
                name: 'Game'
            }
        }, {
            id: '10',
            name: 'Application 2',
            img: 'image/appshop/app_4.jpg',
            star: 5,
            type: {
                id: '2',
                name: 'App'
            }
        }, {
            id: '11',
            name: 'Application 3',
            img: 'image/appshop/game_7.jpg',
            star: 4,
            type: {
                id: '1',
                name: 'Game'
            }
        }, {
            id: '12',
            name: 'Application 2',
            img: 'image/appshop/app_5.png',
            star: 5,
            type: {
                id: '2',
                name: 'App'
            }
        }, {
            id: '13',
            name: 'Application 3',
            img: 'image/appshop/game_8.jpg',
            star: 4,
            type: {
                id: '1',
                name: 'Game'
            }
        }
    ];

    $('#cardDeck_NewestAPP').append($(buildCardItemsHTML(data)));
};

function buildPopulationAppItems() {
    var data = [
        {
            id: '4',
            name: 'Application 1',
            img: 'image/appshop/game_3.jpg',
            star: 3,
            type: {
                id: '1',
                name: 'Game'
            }
        }, {
            id: '5',
            name: 'Application 2',
            img: 'image/appshop/app_2.jpg',
            star: 5,
            type: {
                id: '2',
                name: 'App'
            }
        }, {
            id: '6',
            name: 'Application 3',
            img: 'image/appshop/game_4.jpg',
            star: 4,
            type: {
                id: '1',
                name: 'Game'
            }
        }, {
            id: '7',
            name: 'Application 2',
            img: 'image/appshop/app_3.jpg',
            star: 5,
            type: {
                id: '2',
                name: 'App'
            }
        }, {
            id: '8',
            name: 'Application 3',
            img: 'image/appshop/game_5.jpg',
            star: 4,
            type: {
                id: '1',
                name: 'Game'
            }
        }
    ];

    $('#cardDeck_PopulationAPP').append($(buildCardItemsHTML(data)));
};