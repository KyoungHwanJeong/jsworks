// function1.js
// 함수 정의
// 매개 변수(매개변수= 입력 역할)가 없는 함수
// 매개 변수의 자료형은 생략할 수 있다(없어도 됨)
function sayHello(){
  document.write("안녕하세요~<br>");
}

// 매개 변수가 있는 함수
function sayHello2(name){
  document.write("안녕하세요~" + name + "<br>");
}

//구구단을 출력하는 함수 정의
function gugudan(dan){
  for(var i = 1; i <= 9; i++){
    document.write(dan + "x" + i + "=" + (dan*i) + "<br>")
  }
}

//함수 사용 - 호출
sayHello();
sayHello("소희");
sayHello("Elsa");

//구구단 호출
gugudan(4);