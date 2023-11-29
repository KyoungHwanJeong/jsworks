// greet.js
//window.onload = function() 창이 열리면 가장 먼저 실행된다
window.onload = function(){
  let message = ["오늘도 좋은 하루!!", "행운을 빌어요",
                        "잘 지내니?"];


  // 인사하기 밑에 message 띄우기
  //document.getElementById("demo").innerHTML = message[1];

  //2초 간격으로 인사말이 변경되게 함
  //콜백함수 기능 - 자기가 부르는 재귀적 용법
  //배열의 인덱스가 1증가하면 인사말이 바뀐다
  let msgIdx = 0;

  myGreeting();   //함수 호출

  function myGreeting(){
    let msg = document.getElementById("demo")
    msg.innerHTML = message[msgIdx];
    msg.style.color = "blue";
    msgIdx++;   //1증가
    if(msgIdx == message.length){  // 인덱스 번호 제한
      msgIdx = 0;
    }
    setTimeout(myGreeting, 2000);   //myGreating() 호출
  }
}