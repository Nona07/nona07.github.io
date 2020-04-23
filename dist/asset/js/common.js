'use strict';

$(function(){

  // 定数
  const windowWidth = $(window).width(),
        scrollHeight = $(document).height(),
        windowHeight = $(window).height(),       
        scrollPosition = $(window).height() + $(window).scrollTop(),
        footHeight = $(".l-footer").height(),
        header    = $("#js-header"),
        headerOverlay    = $("#js-header__overlay"),
        headerBtn   = $("#js-header__button"),
        headerLogo    = $("#js-header__logo"),
        headerMenu    = $("#js-header__menu"),
        headerMenuList = $("#js-header__menu-list"),
        bodyContainer = $("#js-body-container");

  //iOS
  var $w = $(window), $target = $('a');
    $target.on('touchstart', function(){
      var $this = $(this), isScrolling = false;
      $w.on('scroll', function(){
        isScrolling = true;
      });
      $this.on('touchend', function(){
        if(!isScrolling){
          var url = $this.find('a').attr('href');
          if(url){
            window.location.href = url;
          }
        }
        isScrolling = false;
        $this.off('touchend');
      });
    });
  

  //	toggle menu
	headerBtn.click(function() {
		$(this).toggleClass('is-active');
		if($(this).hasClass('is-active')) {
      header.addClass('is-active');
      headerOverlay.addClass('is-active');
      headerLogo.addClass('is-active');
      headerMenu.addClass('is-active');
      headerMenuList.addClass('is-active');
		} else {
      header.removeClass('is-active');
      headerOverlay.removeClass('is-active');
      headerLogo.removeClass('is-active');
      headerMenu.removeClass('is-active');
      headerMenuList.removeClass('is-active');
		}
  });
  
  // SP時のサブメニューオープン
  $('.js-acc_btn').on('click',function(){
    if($(this).hasClass('is-active')){
      $(this).removeClass('is-active');
      $(this).parent().removeClass('is-active');
      $(this).next().slideUp();
    }else{
      $(this).addClass('is-active');
      $(this).parent().addClass('is-active');
      $(this).next().slideDown();
    }
  });

	$(".js-modal-open").click(function(){
    event.preventDefault();
    var getId = $(this).attr('id');
    console.log(getId);
    var baloon = $('.p-lineup__modal-article').hasClass(getId);
    var getModal = $('.p-lineup__modal');
    console.log(getModal);
    // if(getId == getArticleId){
    //   $('.p-lineup__modal-article').css('display','block');
    // }else{
    //   $('.p-lineup__modal-article').css('display','none');
    // };
    var scrollPosition;
    $(".modalOpner").on("click", function() {
      scrollPosition = $(window).scrollTop();
      $('body').addClass('is-hidden').css({'top': -scrollPosition});
    });
    $(".modalCloser").on("click", function() {
      $('body').removeClass('is-hidden').css({'top': 0});
      window.scrollTo( 0 , scrollPosition );
    });
    if($('.p-lineup__modal').hasClass('is-active')){
      $('.p-lineup__modal').removeClass('is-active');
      $('.l-wrapper').removeClass('is-hidden');
    }else{
      $('.p-lineup__modal').addClass('is-active');
      $('.l-wrapper').addClass('is-hidden');
    }
    if(baloon == true){
      $(getModal).find(getId).addClass('is-active');
    }else{
      $(getModal).find(getId).removeClass('is-active');
    }
  });

  $('.js-rooms01_01').on('click',function(e){
    e.preventDefault();
    $('.rooms01_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms01_01').removeClass('is-active');
    });
  });
  $('.js-rooms01_02').on('click',function(e){
    e.preventDefault();
    $('.rooms01_02').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms01_02').removeClass('is-active');
    });
  });
  $('.js-rooms01_03').on('click',function(e){
    e.preventDefault(); 
    $('.rooms01_03').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms01_03').removeClass('is-active');
    });
  });
  $('.js-rooms03_01').on('click',function(e){
    
    $('.rooms03_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms03_01').removeClass('is-active');
    });
  });
  $('.js-rooms04_01').on('click',function(e){
    
    $('.rooms04_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms04_01').removeClass('is-active');
    });
  });
  $('.js-rooms04_02').on('click',function(e){
      $('.rooms04_02').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.rooms04_02').removeClass('is-active');
    });
  });


  $('.js-toilet01_01').on('click',function(e){
    
    $('.toilet01_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.toilet01_01').removeClass('is-active');
    });
  });
  $('.js-toilet01_03').on('click',function(e){
    
    $('.toilet01_03').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.toilet01_03').removeClass('is-active');
    });
  });
  $('.js-toilet02_01').on('click',function(e){
    
    $('.toilet02_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.toilet02_01').removeClass('is-active');
    });
  });
  $('.js-car01_01').on('click',function(e){
    
    $('.car01_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.car01_01').removeClass('is-active');
    });
  });
  $('.js-car02_01').on('click',function(e){
    
    $('.car02_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.car02_01').removeClass('is-active');
    });
  });
  $('.js-car03_01').on('click',function(e){
    
    $('.car03_01').addClass('is-active'); 
    $('.js-modal-close-btn').on('click',function(){
        $('.car03_01').removeClass('is-active');
    });
  });
  
	$(".js-modal-close-btn").click(function(){
    if($('.p-lineup__modal').hasClass('is-active')){
      $('.p-lineup__modal').removeClass('is-active');
      $('.l-wrapper').removeClass('is-hidden');
    }else{
      $('.p-lineup__modal').addClass('is-active');
      $('.l-wrapper').addClass('is-hidden');
    }
  });

  // アンカーリンクの高さ調整
  // var headerHeight = $('.l-header').outerHeight();
  // var urlHash = location.hash;
  // if(urlHash) {
  //     $('body,html').stop().scrollTop(0);
  //     setTimeout(function(){
  //         var target = $(urlHash);
  //         var position = target.offset().top - headerHeight;
  //         $('body,html').stop().animate({scrollTop:position}, 500);
  //     }, 100);
  // }
  // $('#js-anchor a[href^="#"]:not([href="#"])').click(function() {
  //     var href= $(this).attr("href");
  //     var target = $(href);
  //     var position = target.offset().top - headerHeight;
  //     $('body,html').stop().animate({scrollTop:position}, 500);   
  // });

  // FAQ
  // $('.js-faq__button-detail').on('click',function(){
  //   if($(this).hasClass('is-active')){
  //     $(this).removeClass('is-active');
  //     $(this).parent().next('.js-faq__block-answer').slideUp();
  //   }else{
  //     $(this).addClass('is-active');
  //     $(this).parent().next('.js-faq__block-answer').slideDown();
  //   }
  // });

  // page Top
// 　const pageTop = $("#js-pagetop");
// 	$(window).bind("scroll", function() {
// 	if ($(this).scrollTop() > 150) { 
// 		pageTop.fadeIn();
// 	} else {
// 		pageTop.fadeOut();
// 	}
	
// 	if ( scrollHeight - scrollPosition  <= footHeight ) {
// 		// var windowWidth = window.innerWidth;
//       // if (windowWidth > 736){
//       //   pageTop.css({"position":"absolute","bottom": "298px","right": "0"});
//       // }else{
//       //   pageTop.css({"position":"absolute","bottom": "0","right": "0"});
//       // }
//       pageTop.css({"position":"fixed","bottom": "10px","right": "10px","top": "auto"});
//   	} else {
// 		  pageTop.css({"position":"absolute","bottom": "10px","right": "10px"});
// 		}
//   });


  const topBtn = $('#js-pagetop');
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      const scrollHeight = $(document).height(),
            windowHeight = $(window).height(),       
            scrollPosition = $(window).height() + $(window).scrollTop(),
            footHeight = $(".l-footer").height();
      if ($(this).scrollTop() > windowHeight) {
          topBtn.fadeIn(700).css("display","block");
      } else {
          topBtn.fadeOut(700);
      }
      if ( scrollHeight - scrollPosition  <= footHeight + 30) {
      const windowWidth = window.innerWidth;
        if (windowWidth > 768){
          topBtn.css({"position":"absolute","bottom": footHeight - 36,"right": "20px"});
        }else{
          topBtn.css({"position":"absolute","bottom": footHeight - 36,"right": "8px"});
        }
      } else {
          topBtn.css({"position":"fixed","bottom": "20px","right": "20px"});
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });

});

$(document).ready(function(){

  //URLのハッシュ値を取得
  var urlHash = location.hash;
  //ハッシュ値があればページ内スクロール
  if(urlHash) {
    //スクロールを0に戻す
    $('body,html').stop().scrollTop(0);
    setTimeout(function () {
      //ロード時の処理を待ち、時間差でスクロール実行
      scrollToAnker(urlHash) ;
    }, 100);
  }

  //通常のクリック時
  $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
  });

  // 関数：スムーススクロール
  // 指定したアンカー(#ID)へアニメーションでスクロール
  function scrollToAnker(hash) {
    var target = $(hash);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, 500);
  }

  $('#slick').slick({
    // centerMode: true,
    dots: true,
    focusOnSelect: true,
    infinite: true,
    touchMove: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    cssEase: 'ease-in-out',
    responsive: [
			{
				breakpoint: 767,
				settings: {
          centerMode: false,
          speed: 2000,
					autoplaySpeed: 6000,
				}
			}
		]
  });
});