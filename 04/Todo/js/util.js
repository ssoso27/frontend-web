// id에 해당하는 document를 return
function getDom(id)
{
  return document.getElementById(id);
}

// todo를 저장하는 함수
function addTodo(event)
{
 // 엔터키가 아니면 함수 중지\
if (event.keyCode !== 13 || todoStringField.value === "")
{
  event.stopPropagation(); // 이벤트 전파 중지
  return;
}

 var newTodo = todoStringField.value;
 todoStringField.value = "";

 // innerHTML로 집어넣기
 listDom.innerHTML += tmpl(todoTemplateHtml, {todo: newTodo});
 saveData();

}

function checkDelete(event)
{
  if(event.target.className !== 'delete') return;

  var deleteBtn = event.target;

  // 버튼의 상위 엘리멘트 <li> 제거
  deleteBtn.parentElement.remove();

  saveData();
}

// 저장소의 데이터 로드
function loadData()
{
  console.log('loadData()');
  return localStorage.getItem('todoHtml');
}

// 저장소에 데이터 저장
function saveData()
{
  console.log('saveData()');
  localStorage.setItem('todoHtml', listDom.innerHTML);
}
