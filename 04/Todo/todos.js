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
});
