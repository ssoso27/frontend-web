// 할 일 입력 Field
var todoStringField = getDom('todoString');
var todoTemplateHtml = getDom('todoTemplate').innerHTML;

todoStringField.addEventListener('keyup', addTodo);
