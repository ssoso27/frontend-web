var blackBoxs = document.getElementsByClassName('black');
var whiteBoxs = document.getElementsByClassName('white');

var divs = document.querySelectorAll('#board div');

var beforeTarget = divs[0];
var beforeColor;

function checkRed(event)
{
  console.log("-----------------");
  console.log("check");

  // beforeTarget의 색 돌려놓기
  if (beforeColor)
  {
    console.log(beforeColor + "로 돌리기");
    beforeTarget.style.backgroundColor = beforeColor;
  }
  else {
    console.log("beforeColor가 없습니다.");
  }

  // beforeTarget update
  beforeTarget = event.currentTarget;
  if (event.currentTarget.className == 'black')
    beforeColor = 'black';
  else if (event.currentTarget.className == 'white')
    beforeColor = 'white';

  console.log("타겟 : " + beforeTarget);
  console.log("타겟컬러 : " + beforeColor);



  // currentTarget의 색 red로 전환
  event.currentTarget.style.backgroundColor = 'red';
}

for (var i = 0; i < blackBoxs.length; i++)
  blackBoxs[i].addEventListener('click', checkRed);
for (var i = 0; i < whiteBoxs.length; i++)
  whiteBoxs[i].addEventListener('click', checkRed);
