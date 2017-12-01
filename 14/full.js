function fullScreen()
{
  if (screenfull.enabled) {
  	screenfull.request(document.querySelector('img'));
  }
}

document.getElementById("fullBtn").addEventListener("click", fullScreen);

if ("geolocation" in navigator) {
  /* 지오로케이션 사용 가능 */
  console.log("사용가능");
} else {
  /* 지오로케이션 사용 불가능 */
  console.log("사용불가");
}
