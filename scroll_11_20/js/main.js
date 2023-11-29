// main.js

// main.html에 연결
$(document).ready(function(){
  //alert("안녕~");
  //scrollTop() 값 얻기
  $(window).scroll(function(){
    console.log($(this).scrollTop());
  
    if($(this).scrollTop() > 100){
      $("#up").addClass("on");  // on class를 생성한다
    }else{
      $("#up").removeClass("on");// on class를 삭제한다
    }

    // TOP 메뉴를 클릭하면 스크롤바가 맨 위로 올라가게
    $("#up a").click(function(){
      $(window).scrollTop("0"); //y좌표를 0으로 설정한다
    })
  });
})
