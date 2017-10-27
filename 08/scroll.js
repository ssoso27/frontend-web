console.log('연결');

var $body = $(document.body);
var $goTop = '';

// 위로가기 만들기
$goTop = $('<div>') //div 를 만들고
        .addClass('goTop') //top className을 주고
        .hide() //처음에는 숨겨둔다
        .click(function () {  // 클릭 이벤트 할당
          $body.animate({scrollTop: 0}); //animation효과로 scollTop=0으로 이동
        })
        .appendTo($body); // body에 top을 넣는다

// 보여주기 (기준 : window의 스크롤 위치)
$(window).scroll(function()
{
  var y = $(this).scrollTop();

  if (y>=100) {
    $goTop.fadeIn();
  } else {
    $goTop.fadeOut();
  }
});
