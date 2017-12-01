// 지오로케이션
function do_something(latitude, longitude)
{
  console.log("do_something");
  console.log(latitude);
}

if ("geolocation" in navigator) {
  /* 지오로케이션 사용 가능 */
  console.log("사용가능");
} else {
  /* 지오로케이션 사용 불가능 */
  console.log("사용불가");
}

// 사용자 현재 위치 확인 -> do_something() 실행
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});

// 현재 위치 갱신
var warchID = navigator.geolocation.watchPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
})

// 갱신 종료
// navigator.geolocation.clearWatch(watchID);
