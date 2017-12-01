// 지오로케이션
if ("geolocation" in navigator) {
  /* 지오로케이션 사용 가능 */
  console.log("사용가능");
} else {
  /* 지오로케이션 사용 불가능 */
  console.log("사용불가");
}

// 사용자 위치 확인 -> do_something() 실행
navigator.geolocation.getCurrentPosition(function(position) {
  do_something(position.coords.latitude, position.coords.longitude);
});
