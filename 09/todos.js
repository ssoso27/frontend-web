//start...
console.log("연결");

var inputStringField = document.getElementById('inputString');
var todoString ="";
var lists = document.getElementsByClassName('.container ul');

console.log(lists);

// div.container -> ul 안에 새로운 li 추가
function addli()
{
  console.log('add li!');

}

inputStringField.addEventListener('keyup', function(event)
{
  console.log("keyup");

  // 엔터 -> tosoString에 저장
  if (event.keyCode === 13)
  {
    var inputKey = event.currentTarget.value;
    todoString = inputKey;

    // todo : todoString을 div.container -> ul 안의 새 li를 만들어서 넣기
    addli();
  }

  console.log(todoString);
});
