// node2.js
function addP(){
  //p태그 생성
  let newP = document.createElement("p");
  //텍스트 추가하기
  let newText = document.createTextNode("숨겨진 텍스트입니다.");
  newP.appendChild(newText);  //p태그에 내용 추가

  //div 태그에 p태그 추가
  let div = document.getElementById("info");
  div.appendChild(newP);
}