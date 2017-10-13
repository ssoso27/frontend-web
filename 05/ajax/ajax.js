var btn = document.getElementById('btn');
btn.addEventListener('click', load);

// ajax 모듈화
function ajax(url, callback, data, x) {
  try {
    x = new(this.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
    x.open(data ? 'POST' : 'GET', url, 1);
    x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () {
      x.readyState > 3 && callback && callback(x.responseText, x);
    };
    x.send(data)
  } catch (e) {
    window.console && console.log(e);
  }
};

function done(responseText)
{
  console.log('done: ', responseText);
}

function load()
{
  console.log();
  ajax('http://1boon.kakao.com/issue.json?callback=done', done);
}

// function load()
// {
//   console.log('log');
//
//   var request = new XMLHttpRequest();
//
//   // get 방식으로 json data 불러옴. (외부 도메인 - 실패)
//   request.open('GET', 'http://1boon.kakao.com/index.html', true);
//
//   request.onreadystatechange = function()
//   {
//     if(request.readyState === 4)
//     {
//       if(request.status === 200) // 성공이면
//       {
//         console.log(request.responseText);
//       }
//
//     }
//   }
//
//   request.send();
//   console.log('send');
// }
