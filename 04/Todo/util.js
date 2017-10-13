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
   var newTodo = todoStringField.value;
   todoStringField.value = "";

   // innerHTML로 집어넣기
   listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});
   saveData(listDom.innerHTML);
 }
}

// 저장소의 데이터 로드
function loadData()
{
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}

// 저장소에 데이터 저장
function saveData(html)
{
  console.log('saveData()');
  localStorage.setItem('todoHtml', html);
}
