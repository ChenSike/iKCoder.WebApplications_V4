'use strict';

function buildContent_Report() {
    /*
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
    }*/

    var successFn = function (response) {
        var success = ($(response).find('sumary').length == 1 ? true : false);
        if (success) {
            var data = reportFormatData(response);
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
        } else {
            _showGlobalMessage('无法获取报告，请联系技术支持！', 'warning', 'alert_GetReport_Error');
        }
    };

    $('.col-main-content').empty();
    ajaxFn('GET', _getRequestURL(_gURLMapping.report.getreport, {}), '', successFn);
    //successFn();
};

function reportFormatData(response) {
    /*
<root gdate="2018-11-27">
	<sumary exp="220" over="92" finished="3"/>
	<achieved>
		<item title="逻辑探索先驱" content="恭喜你，你已经开始了奇妙的编程之旅，奇妙的大门为你打开，从现在开始，你已经是一名数字斗士，为了战胜数字世界的敌人而继续努力吧。"/>
	</achieved>
	<ability>
		<lstlessons>
			<item lesson_title="认识计算机-A"/>
			<item lesson_title="认识计算机-B"/>
			<item lesson_title="模式识别"/>
		</lstlessons>
		<steam>
			<E>200</E>
			<T>100</T>
		</steam>
	</ability>
	<coursefinished>
		<item name="A" title="逻辑课程" count_finished="" count_total="23" rate="0"/>
		<item name="B " title="HTML" count_finished="0" count_total="1" rate="0"/>
		<item name="C" title="JavaScript" count_finished="0" count_total="1" rate="0"/>
		<item name="D" title="Python" count_finished="0" count_total="1" rate="0"/>
		<item name="E" title="C#" count_finished="0" count_total="1" rate="0"/>
		<item name="F" title="Java" count_finished="0" count_total="1" rate="0"/>
		<item name="G" title="IOS" count_finished="0" count_total="1" rate="0"/>
	</coursefinished>
	<timeline>
		<item hours="0" minutes="0" dt="2018-11-15"/>
		<item hours="0" minutes="0" dt="2018-11-15"/>
		<item hours="0" minutes="0" dt="2018-11-27"/>
		<item hours="0" minutes="0" dt="2018-11-27"/>
		<item hours="0" minutes="0" dt="2018-11-27"/>
		<item hours="0" minutes="0" dt="2018-11-24"/>
		<item hours="0" minutes="0" dt="2018-11-27"/>
		<item hours="0" minutes="1" dt="2018-11-25"/>
	</timeline>
</root>
*/
    var doc = $(response);
    var summaryNode = $(doc.find('sumary')[0]);
    var basicData = {
        header: _gUserInfoObj.header.indexOf('?') < 0 ? _gUserInfoObj.header + '?rnd=' + Date.now() : _gUserInfoObj.header,
        name: _gUserInfoObj.nickName == '' ? _gUserInfoObj.userName : _gUserInfoObj.nickName,
        title: _gUserInfoObj.level,
        exp: parseInt(summaryNode.attr('exp')),
        over: parseInt(summaryNode.attr('over')),
        course: parseInt(summaryNode.attr('finished')),
        date: doc.attr('gdate'),
        qr: 'image/qr_wechat.png'
    };

    var achieveNodes = $(doc.find('achieved')[0]).find('item');
    var honorData = [];
    var tmpNode, tmpNodes;
    for (var i = 0; i < achieveNodes.length; i++) {
        tmpNode = $(achieveNodes[i]);
        honorData.push({
            id: i + 1,
            title: tmpNode.attr('title'),
            content: typeof tmpNode.attr('content') == 'undefined' ? '' : tmpNode.attr('content')
        });
    }

    var timelineNode = $(doc.find('timeline')[0]);
    var timeItemNodes = timelineNode.find('item');
    var timeData = { times: [], total: 0, course: [] };
    var tmpTimeObj = reportFormatTimelineData(timeItemNodes);
    timeData.times = tmpTimeObj.times;
    timeData.total = tmpTimeObj.total;
    tmpNode = $($(response).find('coursefinished')[0]);
    tmpNodes = tmpNode.find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        tmpNode = $(tmpNodes[i]);
        timeData.course.push({
            id: tmpNode.attr('name'),
            title: tmpNode.attr('title'),
            total: parseInt(tmpNode.attr('count_total')),
            finish: tmpNode.attr('count_total') == '' ? 0 : parseInt(tmpNode.attr('count_total')),
            rate: parseFloat(tmpNode.attr('rate'))
        });
    }

    var abilityNode = $(doc.find('ability')[0]);
    var ablLessonNode = $(abilityNode.find('lstlessons')[0]);
    var ablSteamNode = $(abilityNode.find('steam')[0]);
    var abilityData = {
        type: [],
        items: [],
        course: ablLessonNode.find('item').length,
        time: parseInt(timeData.total / 60)
    };

    for (var key in _gSTEAMMap) {
        tmpNodes = ablSteamNode.find(key.toUpperCase());
        abilityData.type.push({
            name: _gSTEAMMap[key].name,
            value: tmpNodes.length == 0 ? 0 : parseInt($(tmpNodes[0]).text())
        });
    }

    tmpNodes = ablLessonNode.find('item');
    for (var i = 0; i < tmpNodes.length; i++) {
        abilityData.items.push($(tmpNodes[i]).attr('lesson_title'));
    }

    var data = {
        user: basicData,
        achieve: honorData,
        ability: abilityData,
        time: timeData
    };

    return data;
};

function reportFormatTimelineData(timeNodes) {
    var tmpMin, tmpNode, tmpNode_1, tmpDate, dateExist, newItem;
    var total = 0;
    var times = [];
    var tmpTimes = [];
    for (var i = 0; i < timeNodes.length; i++) {
        tmpNode = $(timeNodes[i]);
        tmpDate = tmpNode.attr('dt');
        dateExist = false;
        for (var k = 0; k < tmpTimes.length; k++) {
            if (tmpTimes[k].date == tmpDate) {
                dateExist = true;
                break;
            }
        }

        if (!dateExist) {
            newItem = { date: tmpDate, time: 0 };
            for (var j = 0; j < timeNodes.length; j++) {
                tmpNode_1 = $(timeNodes[j]);
                if (tmpDate == tmpNode_1.attr('dt')) {
                    tmpMin = Math.abs(parseFloat(tmpNode.attr('minutes')));
                    tmpMin += Math.abs(parseFloat(tmpNode.attr('hours')) * 60);
                    newItem.time += tmpMin;
                }
            }

            tmpTimes.push(newItem);
        }
    }

    tmpTimes.sort(function (a, b) {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    });

    for (var i = 0; i < tmpTimes.length; i++) {
        total += tmpTimes[i].time;
    }

    var endIdx = new Date().getDate();
    var tmpDateStr = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    for (var i = endIdx - 29; i <= endIdx ; i++) {
        tmpDate = new Date(tmpDateStr).setDate(i);
        tmpMin = 0;
        for (var j = 0; j < tmpTimes.length; j++) {            
            if (new Date(tmpTimes[j].date).valueOf() == tmpDate) {
                tmpMin = tmpTimes[j].time;
                break;
            }
        }

        tmpDate = new Date(tmpDate);
        times.push({ date: tmpDate.getFullYear() + '-' + (tmpDate.getMonth() + 1) + '-' + tmpDate.getDate(), time: tmpMin });
    }

    return { total: total, times: times };
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
    tmpHTMLArr.push('                   <p class="text-10 text-fc8823">' + data.name);
    tmpHTMLArr.push('                       <span class="text-000000">,</span>');
    tmpHTMLArr.push('                       <span class="text-90c553">' + data.title + '</span>');
    tmpHTMLArr.push('                   </p>');
    tmpHTMLArr.push('                   <p class="text-10" style="min-width: 120px;">');
    tmpHTMLArr.push('                       当前课程经验值: ');
    tmpHTMLArr.push('                       <span class="text-12 text-fc8823">' + data.exp + '</span>');
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
    tmpHTMLArr.push('               <span class="text-16 text-fc8823">' + (new Number(data.total / 60).toFixed(2)) + '</span>');
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
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-right.timebar').on('click', { cls: "#canvas_Report_Time_TimeBar", step: timeBarStep }, listMoveNext);
        $('.wrap-report .col-report-time .col-report-time-arrow .report-time-arrow-left.timebar').on('click', { cls: "#canvas_Report_Time_TimeBar", step: timeBarStep }, listMovePrev);        
        $('#canvas_Report_Time_TimeBar').css('margin-left', $('.wrap-report-time-timebar-graph').width() - $('#canvas_Report_Time_TimeBar').width());
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
        if (datas[i].time >= 0) {
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
            tmpTextWidth = testTextWidth((datas[i].time / 60).toFixed(2), '10px', 'bold', '微软雅黑', '');
            tmpX = startX + (barWidth + barSpace - tmpTextWidth) / 2;
            tmpY = lineRTY - 2;
            context.font = "normal normal normal 10px \"微软雅黑\"";
            context.fillStyle = "rgb(97,97,97)";
            context.fillText((datas[i].time / 60).toFixed(2), tmpX, tmpY);
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
    context.beginPath();
    context.strokeStyle = 'rgba(210,210,210,0.5)';
    context.lineWidth = lineWidth;
    context.moveTo(0, startY);
    context.lineTo(canvas.width, startY);
    context.closePath();
    context.stroke();

    //draw the curve    
    context.beginPath();
    context.strokeStyle = 'rgb(234,84,19)';
    context.lineWidth = 2;
    startX = 0;
    context.moveTo(startX, startY);
    for (var i = 0; i < datas.length; i++) {
        if (datas[i].time >= 0) {
            tmpY = startY - datas[i].time * unit;
            tmpX = startX + barWidth / 2 + barSpace/2;
        }

        context.lineTo(tmpX, tmpY);
        startX += barWidth + barSpace;
    }

    context.lineTo(startX, startY);
    context.stroke();

    //context.stroke();

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

        tmpTextWidth = testTextWidth(datas[i].title, textFontSize + 'px', 'bold', '微软雅黑', '');
        tmpX = centerX - tmpTextWidth / 2;
        tmpY = radius * 2 + lineWidth + textFontSize + 20;
        //context.lineWidth = 1;
        //context.strokeStyle = 'rgb(0,0,0)';
        //context.beginPath();
        //context.moveTo(centerX, 0);
        //context.lineTo(centerX, tmpY * 2);
        //context.stroke();
        //context.closePath();
        context.font = "normal normal bold " + textFontSize + "px \"微软雅黑\"";
        context.fillStyle = "rgb(61,61,61)";
        context.fillText(datas[i].title, tmpX, tmpY);
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