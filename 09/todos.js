//start...
console.log("연결");

var inputStringField = document.getElementById('inputString');
var todoString = "";
var lists = document.getElementById('list');

console.log(lists);

// div.container -> ul 안에 새로운 li 추가
function addli()
{
  console.log('add li!');

  var str = '';

  str += '<li>';
  str += '<button class=\"delete\">×</button>';
  str += '<input type=\"checkbox\" class=\"toggle-checked\">';
  str += '<span class=\"text\">' + todoString + '</span>';
  str += '</li>';

  lists.innerHTML = str;
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
