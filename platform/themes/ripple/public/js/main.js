$((function(){var s=$(".main__slick");s.slick({fade:!0,autoplay:!0,autoplaySpeed:9e3,speed:0,pauseOnHover:!1,pauseOnFocus:!1,swipe:!1,swipeToSlide:!1,slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!1,infinite:!0}).on("beforeChange",(function(s,i,o){var e=$(this).parents();e.find(".slick-slide").removeClass("slick-continue"),e.find(".slick-active").addClass("slick-continue")}));var i=s.find(".slick-slide:nth-child(1)");i.removeClass("slick-active"),window.setTimeout((function(){i.addClass("slick-active")}),1)})),$((function(){$('a[href^="#"]').click((function(){var s=$(this).attr("href"),i=$("#"==s||""==s?"html":s).offset().top;return $("body,html").animate({scrollTop:i},400,"swing"),!1}))})),$((function(){$(".banner-slider").slick({slidesToShow:4,arrows:!0,responsive:[{breakpoint:991.98,settings:{slidesToShow:3}},{breakpoint:767.98,settings:{slidesToShow:1}}]})})),$((function(){$(".products-slick .big").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,autoplay:!1,asNavFor:".products-slick .small",responsive:[{breakpoint:767.98,settings:{asNavFor:null,dots:!0}}]})})),$((function(){$(".products-slick .small").slick({accessibility:!0,autoplay:!0,arrows:!1,infinite:!0,autoplay:!1,slidesToShow:3,slidesToScroll:1,slidePerRow:1,asNavFor:".products-slick .big",focusOnSelect:!0,responsive:[{breakpoint:767.98,settings:{asNavFor:null}}]})})),$((function(){var s=0;$("a.sp-hum").on("click",(function(){0==s?(s=1,event.preventDefault(),$("a.sp-hum span").toggleClass("closed"),$(".sp-navigation").toggleClass("open"),setTimeout((function(){s=0}),100)):event.preventDefault()}))})),$((function(){$((function(){if(window.matchMedia("(max-width: 767.98px)").matches){var s=$("#header__main").height();$("body").css("margin-top",s),$(".sp-navigation").css("margin-top",s)}}))})),$((function(){var s=$(".page-top");s.hide(),$(window).scroll((function(){$(this).scrollTop()>200?s.fadeIn():s.fadeOut()})),s.click((function(){return $("body, html").animate({scrollTop:0},500),!1}))}));
