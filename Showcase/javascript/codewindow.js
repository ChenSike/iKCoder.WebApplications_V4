'use strict';

var _gCodeFilePaths = [];

function showCodeButton(scripts) {
    var html = '<div class="code-button">C</br>O</br>D</br>E</div>';
    $('body').append($(html));
    $('.code-button').on('click', showCodeWindow);
    _gCodeFilePaths = scripts;
};

function showCodeWindow() {
    if ($('.code-window').length == 0) {
        var html = '<div class="code-window"><iframe id="iframe_CoreCode" src="codeviewer.html" width="100%" height="100%" frameborder="1" scrolling="auto" style="border-radius: 8px;border: none;"></iframe></div>';
        $('body').append($(html));
    }
    
    if ($('.code-window').css('display') != 'none') {
        $('.code-window').hide('slow');
    } else {
        $('.code-window').show('slow', function () {
            $('#iframe_CoreCode')[0].contentWindow.loadScripts(_gCodeFilePaths);
        });
    }    
};