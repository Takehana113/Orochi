$(function () {
  $(window).scroll(function () {
    scroll_effect();
  });

  $('.top').bgSwitcher({
    images: ['./img/bg-slide1.jpg', './img/bg-slide2.jpg', './img/bg-slide3.jpg', './img/bg-slide4.jpg', './img/bg-slide5.jpg'], // 切り替える背景画像を指定
    interval: 4500, // 背景画像を切り替える間隔を指定 3000=3秒
    loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
    shuffle: false, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
    effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
    duration: 1500, // エフェクトの時間を指定します。
    easing: "swing" // エフェクトのイージングをlinear,swingから指定
  });

  $('.menu-trigger').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active');
    }
    // メニュー表示/非表示
    $('.nav-bar').animate({
      width: 'toggle'
    }, 'normal')
  });

//ループスライダー
  $('#loopslider').each(function(){
    var loopsliderWidth = $(this).width();
    var loopsliderHeight = $(this).height();
    $(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

    var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
    var listCount = $('#loopslider_wrap').children('ul').children('li').length;

    var loopWidth = (listWidth)*(listCount);

    $('#loopslider_wrap').css({
        top: '0',
        left: '0',
        width: ((loopWidth) * 2),
        height: (loopsliderHeight),
        overflow: 'hidden',
        position: 'absolute'
    });

    $('#loopslider_wrap ul').css({
        width: (loopWidth)
    });
    loopsliderPosition();

    function loopsliderPosition(){
        $('#loopslider_wrap').css({left:'0'});
        $('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},45000,'linear');
        setTimeout(function(){
            loopsliderPosition();
        },45000);
    };

    $('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
});

});

//スクロールでふわっと表示させる関数
function scroll_effect() {
  var tt = $(window).scrollTop();
  var hh = $(window).height();
  $('.scroll-up').each(function () {
    var yy = $(this).offset().top + 100;//効果発生開始タイミングを操作したい場合は数値を変更する
    if (tt > yy - hh) {
      $(this).addClass('done');
    }
  });
}


  //parallax
  let rellax = new Rellax('.rellax', {
    speed: -5,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });