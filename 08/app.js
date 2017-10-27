// $('div').css('background-color', 'black')
// console.log( $('div').height() ); // getter (인자 없음)
// $('div').height(200); // setter (인자 존재)
//
// console.log($('div').offset());
//
// $('#red')addClass('blue');
//
// console.log($('input').val(););

// var div = $('div').addClass('blue');
// div.html('<h2>div</h2');
// <div>요소를 #box에 추가해

// $('<span>').appendTo( $('div') )
//         .text("난 div 요소")
//         .addClass("ra")
//         .css("background-color","yellow");

// div를 1000ms동안 현재 위치 -> top 200으로 이동
$('#btn').on('click', function() {
  $('div').animate({left: 200}, 1000);
})

$('#login1').on('click', function(){
  // window.open('https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fredirect_uri%3Dkakaojs%26response_type%3Dcode%26state%3Dyqxsjspud4gj4wvqj2gfs%26proxy%3DeasyXDM_Kakao_n12pn3fip8k_provider%26client_id%3Dd10838164fe04a4e6da8e1f6d9972096%26approval_type%3Dproject', 'login', 'width=400, height=400');
  window.open('currentTarget').attr()
})
