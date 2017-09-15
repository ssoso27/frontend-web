// 응용문제
// 1. 1부터 100까지 출력하는 프로그램을 작성
console.log("1번 문제");
for (var i = 1; i <= 100; i++) console.log(i);

// 2. 1~100사이의 홀수(짝수)를 출력하는 프로그램을 작성
console.log("2번 문제");
for (var i = 1; i <= 100; i++)
{
  if (i % 2 === 1)
    console.log(i);
}

// 3. 구구단 프로그램 작성
console.log("1번 문제");
for (var i = 2; i <= 9; i++)
{
  for (var j = 1; j <= 9; j++)
  {
    console.log(i + "*" + j + " = " + i*j);
  }
}

// 4. prompt()를 이용하여 숫자를 입력받아 그 숫자의 합을 구함
console.log("4번 문제");
// 4-1. 함수화
// 4-2. prompt()에 값이 없으면 숫자의 합 출력
function numberSum(a, b)
{
  return a+b;
}

var x = prompt("첫번째 숫자를 입력하세요");
var y = prompt("두번째 숫자를 입력하세요");

if (!x) x = "0";
if (!y) y = "0";

var i = parseInt(x);
var j = parseInt(y);

alert("두 수의 합은 " + numberSum(i, j));
