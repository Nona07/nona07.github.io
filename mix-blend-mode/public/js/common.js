'use strict';

$(function(){
  // トップページで入れ替え
	// $(window).on('load', function(){
  //   //  if($('body').hasClass('top')){
  //   //    $('#js-header').before($('.p-mainvisual'));
  //   //  }	
  // });
  const windowWidth = $(window).width(),
        scrollHeight = $(document).height(),
        windowHeight = $(window).height(),       
        scrollPosition = $(window).height() + $(window).scrollTop(),
        footHeight = $(".l-footer").height(),
        header    = $("#js-header"),
        headerLogo    = $("#js-header__logo"),
        headerMenu    = $("#js-header__menu"),
        headerMenuList = $("#js-header__menu-list"),
        bodyContainer = $("#js-body-container");

  $(window).on('load scroll',function () {   
  //スクロールが発生したら開始    
    // if(windowWidth > 950) { 
      if($('body').hasClass("top")){
        var commitmentHeight = $("#js-commitment").offset().top;     
        if($(window).scrollTop() >= commitmentHeight) { 
          header.addClass('is-active');
          headerLogo.removeClass('is-hidden');
          headerMenu.removeClass('is-full');
          headerMenuList.removeClass('is-active');
        } else {
          header.removeClass('is-active');
          headerLogo.addClass('is-hidden');
          headerMenu.addClass('is-full');
          headerMenuList.addClass('is-active');
        }
      }else{
        if ($(window).scrollTop() < 300) {
          header.removeClass('is-active');          
        } else {
          header.addClass('is-active');
        }
      }
    // }
  });

  // アンカーリンクの高さ調整
  var headerHeight = $('.l-header').outerHeight();
  var urlHash = location.hash;
  if(urlHash) {
      $('body,html').stop().scrollTop(0);
      setTimeout(function(){
          var target = $(urlHash);
          var position = target.offset().top - headerHeight;
          $('body,html').stop().animate({scrollTop:position}, 500);
      }, 100);
  }
  $('#js_anchor a[href^="#"]:not([href="#"])').click(function() {
      var href= $(this).attr("href");
      var target = $(href);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500);   
  });


  var headerBtn = $("#js-header__button");

  $(window).scroll(function () {
    if($('body').hasClass("top")){
      var commitmentHeight = $("#js-commitment").offset().top;    
      if($(window).scrollTop() >= commitmentHeight) {
        header.css('top',"0");
      }else{
        header.css('top',"0");
      };
    }
  });

  headerBtn.on('click',function(){
    if(windowWidth < 950) {
      if($('body').hasClass("top")){  
        var commitmentHeight = $("#js-commitment").offset().top;   
        if($(window).scrollTop() <= commitmentHeight) { 
          if(headerBtn.hasClass("is-active")){
            header.removeClass("is-active");
          }else{
            header.addClass("is-active");
          }
        }
      }
    }
  });
  headerBtn.on('click',function(){
    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
      $('#js-header__menu').removeClass('is-active');
      // if(windowWidth < 950) {
      //   $('#js-header').css({
      //     'position':'fixed',
      //     'top':'0'
      //   });
      //   $('#js-mainvisual').css({
      //     'margin-top':'50px'
      //   });
      // }else{
      //   // $('#js-header').css({
      //   //   'position':'static',
      //   //   'top':'auto'
      //   // });
      //   // $('#js-header').before($('.p-mainvisual'));
      //   // $('#js-mainvisual').css({
      //   //   'margin-top':'120px'
      //   // });
      // }
    }else{
      $(this).addClass('is-active');
      $('#js-header__menu').addClass('is-active');
      // if(windowWidth < 950) {
      //   $('#js-header').css({
      //     'position':'fixed',
      //     'top':'0'
      //   });
      //   if($('#js-header__button').hasClass('is-active')){
      //     // $('#js-mainvisual').css({
      //     //   'margin-top':'50px'
      //     // });          
      //   }
      //   // $('#js-mainvisual').css({
      //   //   'margin-top':'50px'
      //   // });
      // }else{
      //   // $('#js-header').css({
      //   //   'position':'static',
      //   //   'top':'auto'
      //   // });
      //   // $('#js-header').before($('.p-mainvisual'));
      //   // $('#js-mainvisual').css({
      //   //   'margin-top':'120px'
      //   // });
      // }
    };
  });

  // FAQ

  $('.js-faq__button-detail').on('click',function(){
    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
      $(this).parent().next('.js-faq__block-answer').slideUp();
    }else{
      $(this).addClass('is-active');
      $(this).parent().next('.js-faq__block-answer').slideDown();
    }
  });

  $(window).on('resize', function() {
    if(windowWidth < 950) {
      $('#js-header__button').removeClass('is-active');
      $('#js-header__menu').removeClass('is-active');
    }else{
      // $('#js-mainvisual').css('margin-top','120px');
      $('#js-header').before($('.p-mainvisual'));
    }
  });
});

$(document).ready(function(){
     if($('body').hasClass('top')){
       $('#js-header').before($('.p-mainvisual'));
     }
});

$(document).ready(function(){
  $('#js-mainvisual__slide').slick({
    infinite: true,
    speed: 1000,
    arrows:false,
    autoplay:true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
    responsive: [
			{
				breakpoint: 767,
				settings: {
          speed: 2000,
					autoplaySpeed: 6000,
				}
			}
		]
  });
});