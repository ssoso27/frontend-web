console.log('todos.js');

// id에 해당하는 document를 return
function getDom(id)
{
  return document.getElementById(id);
}

var todoStringField = getDom('todoString');

console.log(todoStringField);
