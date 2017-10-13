// 할 일 입력 Field
var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;
var listDom = getDom('todoList');

todoStringField.addEventListener('keyup', addTodo);

// 삭제버튼 이벤트 잡기 위해 상위에서 이벤트 listen 하기
listDom.addEventListener('click', checkDelete);

// 처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
listDom.innerHTML = loadData();
