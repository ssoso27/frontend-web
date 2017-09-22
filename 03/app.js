// // Id로 element 받아오고, 그 문구(?) 변경
// var log = document.getElementById('log');
// debugger // 잠시 장치 중단
// console.log(log);
// log.innerHTML = '안녕'; // log에게 '안녕'을 넣음

var log = document.getElementById('log');
console.log(log);

// // 모든 log > a 찾기
// var a = document.querySelectorAll('#log a')
// console.log(a)

// // element 생성
// var div = document.createElement('div');
// div.style.border = "1px solid red";
// div.innerHTML = "hello!!";
// document.body.appendChild(div);

// // log html 변경
// log.innerHTML = '<div style="color:blue">goodbye</div>'

// // 외부 라이브러리 받을 때 등에 사용
// var head = document.getElementsByTagName("head")[0];
// var script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = 'test.js';
// head.appendChild(script);

// // // 이벤트
// //프로퍼티로 주기. 다시 정의 불가.
// window.load=function(){
//     alert("load");
// };

// //DOM 레벨2. 리스너에 더하는 식.
// window.addEventListener('load', function(){
//     alert("1번째 ");
// });
//
// window.addEventListener('load', function(){
//     alert("2번째 ");
// });

// 클릭 이벤트
// // addEventListener(이벤트명, 함수)
// log.addEventListener('click', function()
// {
//   alert("log 클릭!");
// })

// event : 마우스 클릭 이벤트 정보를 담은 객체
// function printLog(event)
// {
//   console.log('print log~~~');
//   // debugger;
// }
//
// log.addEventListener('click', printLog());

// 매개변수로 event
var divs = document.querySelectorAll('#wrap div');
console.log(divs);

function changeBg(event)
{

  console.log('changeBg');

  // divs[0].style.backgroundColor ='blue';
  // console.log(event.currentTarget);
  event.currentTarget.style.backgroundColor = 'blue';
}

for (var i = 0; i < divs.length; i++)
{
  divs[i].addEventListener('click', changeBg);
}

var stopspan = document.querySelectorAll('span');
stopspan[0].addEventListener('click', function(event)
{
   event.stopPropagation();
});

// 콜백함수
// var clickCount = 0;
// function popup(event){
//     console.log(++clickCount);
//     console.log(arguments, this ,event ,event.type,event.currentTarget);
// }
// document.body.addEventListener('click', popup);
//
// document.body.addEventListener('click', function(){
//     console.log("click");
// });
