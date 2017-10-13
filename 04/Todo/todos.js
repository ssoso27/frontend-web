// 할 일 입력 Field
var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;
var listDom = getDom('todoList');

todoStringField.addEventListener('keyup', addTodo);

// 처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
listDom.innerHTML = loadData();
