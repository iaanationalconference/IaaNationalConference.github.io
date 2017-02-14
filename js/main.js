/*
* ----------------------------------------------------------------------------------------
Author       : Manjunath G (MJN)
Template Name: NCIT - 2017
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/

$(function () {

    'use strict';

    $('html').removeClass('no-js').addClass('js');

    $('span.scrollTo').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $("#main").offset().top + 2
        }, 1000);
        e.preventDefault();
    });

    // new WOW().init();

    // $('.sidebar > ul > li > a:not(.download)').on("click",function (e) {
    //     $('html, body').stop().animate({
    //         scrollTop: $('#main').offset().top + 2
    //     }, 500);
    //     e.preventDefault();
    // });

    $('.deptsList > li > a').on("click",function (e) {
        $('html, body').stop().animate({
            scrollTop: $('#main').offset().top + 2
        }, 500);
        e.preventDefault();
    });


    $(window).load(function () {
        setTimeout(function(){ 
            $('html, body').stop().animate({
                scrollTop: $("#main").offset().top + 2
            }, 1000);
        }, 5000); 
    })

    $('ul.deptsList li a').click(function(e){
        
        e.preventDefault();
        var tab_id = $(this).attr('href');

        $('ul.deptsList li a').removeClass('active');
        $('.main > .contaner').removeClass('active');

        $(this).addClass('active');
        $(tab_id).addClass('active');

        $(tab_id).find(".sidebar ul > li > a").removeClass('active');
        $(tab_id).find(".content > section").removeClass('active');

        $(tab_id).find(".sidebar ul > li > a[href='#home']").addClass('active');
        $(tab_id).find(".content > section#home").addClass('active');

        // console.log($(this));
        // console.log(tab_id);

    })


});