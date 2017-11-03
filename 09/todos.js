//start...
var inputStringField = document.getElementById('inputString');
var todoString = "";
var lists = document.getElementById('list');
var btn_delete = document.getElementByClassName('delete');

// div.container -> ul 안에 새로운 li 추가
function addlist()
{
  var str = '';

  str += '<li>';
  str += '<button class=\"delete\">×</button>';
  str += '<input type=\"checkbox\" class=\"toggle-checked\">';
  str += '<span class=\"text\">' + todoString + '</span>';
  str += '</li>';

  lists.innerHTML += str;
}

function addTodo(event)
{
  // 엔터 -> tosoString에 저장
  if (event.keyCode === 13)
  {
    var inputKey = event.currentTarget.value;
    todoString = inputKey;

    addlist();
  }
};

function deleteTodo(event)
{

}

inputStringField.addEventListener('keyup', addTodo);
btn_delete.addEventListener('click', deleteTodo);
