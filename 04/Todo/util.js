// id에 해당하는 document를 return
function getDom(id)
{
  return document.getElementById(id);
}

// todo를 저장하는 함수
function addTodo(event)
{
 // 엔터 입력 -> 새로운 todo값 저장
 if (event.keyCode === 13)
 {
   console.log(todoStringField.value);

   var newTodo = todoStringField.value;
   todoStringField.value = "";

   console.log('새로운 todo : ', newTodo);

   // innerHTML로 집어넣기
   var listDom = getDom('todoList');

   listDom.innerHTML += '\
   <li>\
     <button class="delete">x</button>\
     <input type="checkbox" class="toggle-checked">\
     <span class="text"> ' + newTodo + ' </span>\
   </li>'
 }
}
