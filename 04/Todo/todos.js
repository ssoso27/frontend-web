// id에 해당하는 document를 return
function getDom(id)
{
  return document.getElementById(id);
}

// 할 일 입력 Field
var todoStringField = getDom('todoString');
todoStringField.addEventListener('keyup', function(event)
{
  console.log('todoStringField keyup!');

  // 엔터 입력 -> 새로운 todo값 저장
  if (event.keyCode === 13)
  {
    console.log(todoStringField.value);

    var newTodo = todoStringField.value;
    todoStringField.value = "";

    console.log('새로운 todo : ', newTodo);
  }
});
