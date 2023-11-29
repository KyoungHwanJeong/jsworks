// time.js
//시계 생성
// setInterval이 window 함수여서 먼저 실행된다
setInterval(myWatch, 1000);

function myWatch(){
  const now = new Date(); //날짜와 시간 함께 생성
  let time = now.toLocaleTimeString(); //시간만 출력하기
  console.log(time);

  let watch = document.getElementById("show");
  // watch.innerHTML = time;
  
  watch.style.color = "blue";

  // 오전, 오후 나누기
  if(now.getHours() <= 12){
    watch.innerHTML = time.replace("오전", "am");
  }else{
    watch.innerHTML = time.replace("오후", "pm");
  }
 }