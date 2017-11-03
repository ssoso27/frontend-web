//start...
console.log("연결");

var inputStringField = document.getElementById('inputString');
var todoString ="";

inputStringField.addEventListener('keyup', function(event)
{
  console.log("keyup");

  // 엔터 -> tosoString에 저장 
  if (event.keyCode === 13)
  {
    var inputKey = event.currentTarget.value;
    todoString = inputKey;
  }

  console.log(todoString);
});
