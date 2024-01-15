// main.html에 연결
$(document).ready(function(){
  //alert("안녕~");
  //scrollTop() 값 얻기
  $(window).scroll(function(){
    console.log($(this).scrollTop());
    // 스크롤 좌표가 100이 넘어가면 함수가 실행된다
    if($(this).scrollTop() > 100){
      $("#up").addClass("on");  // on class를 생성한다
    }else{
      $("#up").removeClass("on"); // on class를 삭제한다
    }

    //top 메뉴를 클릭하면 스크롤바가 맨 위로 올라가게...
    $("#up a").click(function(){
      $(window).scrollTop(0); //y좌표를 0으로 설정한다
    })
  });

})