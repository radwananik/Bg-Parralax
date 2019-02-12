(function ($) {
"use strict";  

$(window).scroll(function () {
            var scrollh = $(this).scrollTop();
            if (scrollh == 0) {
                $(".navbar-default").css({
                    'padding': '15px',
                    'transition': '.5s',
                    'background-color':'transparent'
                    
                 });
                $(".navbar-brand ").css({
                    'margin-top': '0px'
                    ,'transition': '.5s'
                , });
                $(".navbar-default .navbar-nav > li > a  ").css({
                      'margin-top': '0px'
                    , 'transition': '.5s'
                , });
                $(".navbar-brand > img ").css({
                    'display': 'block'
                    , 'height': '32px'
                , });
            }
            else {
                $(".navbar-default").css({
                    'padding': '10px',
                    'transition': '.5s',
                      'background-color':'#222'
                , });
                $(".navbar-brand").css({
                    'margin-top': '0px'
                    , 'transition': '.5s'
                , });
                $(".navbar-default .navbar-nav > li > a  ").css({
                    'margin-top': '0px'
                    , 'transition': '.5s'
                , });
                $(".navbar-brand > img ").css({
                    'display': 'block'
                    , 'height': '20px'
                , });
            }
        });
    })
(jQuery);	