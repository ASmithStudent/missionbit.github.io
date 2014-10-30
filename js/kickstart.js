/*jslint browser: true*/

window.jQuery(function ($) {
    'use strict';

    var widthCheck = $(window).width();
    var elem1 = $('#kick-hey');
    var elem2 = $('.kick-welcome-intro');
    var elem3 = $('#kick-thx');
    var elem4 = $('#thx-words');
    if (widthCheck <= 889) {
        if (elem1[0]) {
            $('#kick-hey').remove();
            var elem1 = $('#kick-hey');
        }
        if (elem2[0]) {
            $('.kick-welcome-intro').remove();
        }
        if (elem3[0]) {
            $('#kick-thx').remove();
        }
        if (elem4[0]) {
            $('#thx-words').remove();
        }
    }  
    $(window).on('resize', function () {
        // event.preventDefault();
        var widthCheck = $(window).width();
        console.log(widthCheck);
        if (widthCheck <= 889) {
            var elem1 = $('#kick-hey');
            var elem2 = $('.kick-welcome-intro');
            var elem3 = $('#kick-thx');
            var elem4 = $('#thx-words');
            if (elem1[0]) {
                $('#kick-hey').remove();
            }
            if (elem2[0]) {
                $('.kick-welcome-intro').remove();
            }
            if (elem3[0]) {
                $('#kick-thx').remove();
            }
            if (elem4[0]) {
                $('#thx-words').remove();
            }

        }
    })
    console.log(widthCheck);
    var url = 'http://www.kickstarter.com/projects/tysonium/666429819?token=dfd637b2',
        encodedURL = encodeURIComponent(url),
        title = encodeURIComponent('The Hacker Lab, a space for kids to explore, learn and hack with volunteer engineers by @missionbit & MHS'),
        buttons = $.makeArray($('.actions button').data('clicked', 0)),
        $percent = $('.progress .progress-bar'),
        $number = $('.progress .number');
    function clickFold(acc, el) {
        return acc + $(el).data('clicked');
    }
    function newWin(url) {
        var w = 1200,
            h = 1000,
            left = (screen.width - w) / 2,
            top = (screen.height - h) / 2,
            opts = ['toolbar=0, location=0, directories=0, status=0, menubar=0, scrollbars=0, resizable=0, copyhistory=0',
                    ', width=', w,
                    ', height=', h,
                    ', top=', top,
                    ', left=', left].join('');
        window.open(url, '', opts);
    }
    function popup(url) {
        var w = 580,
            h = 300,
            left = (screen.width - w) / 2,
            top = (screen.height - h) / 2,
            opts = ['toolbar=0, location=0, directories=0, status=0, menubar=0, scrollbars=0, resizable=0, copyhistory=0',
                    ', width=', w,
                    ', height=', h,
                    ', top=', top,
                    ', left=', left].join('');
        window.open(url, '', opts);
    }
    $('.actions button').on('click', function buttonClick(event) {
        event.preventDefault();
        $(this).data('clicked', 1).blur();
        var clicks = buttons.reduce(clickFold, 0),
            percent = Math.min(100, Math.round(100 * (clicks / buttons.length)));
        $percent.width(percent + '%').attr('area-valuenow', percent);
        $number.text(percent + '%');
    });
    $('.actions button.facebook').on('click', function fbClick(event) {
        popup('http://www.facebook.com/share.php?u=' + encodedURL);
    });
    $('.actions button.twitter').on('click', function twitterClick(event) {
        popup(['http://twitter.com/share',
               '?text=', title,
               '&url=', encodedURL].join(''));
    });
    $('.actions button.play').on('click', function playClick(event) {
        newWin(url);
    });
});