var fs = require('fs');

// 비동기. 콜백 사용. -> (복잡한 프로그램의 경우) callback hell 위험
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

//동기
// var file = fs.writeFile('message.txt', 'Hello Node', function (err)
