// main-js.js
// 입장객 수에 따른 행과 열, 줄수 계산
let customer, colNum, rowNum;

// customer = 21;
// colNum = 5;
// 입력 받아서 좌석 배치하기
customer = prompt("입장객 수 입력: ");
colNum = prompt("좌석 열 수 입력: ");

// 나머지의 유무에 따른 조건문
if(customer % colNum == 0){
  rowNum = customer / colNum; // 몫
}else{
  rowNum = parseInt(customer / colNum) + 1;
}

// 좌석 번호 배치(21까지만 출력하기)
document.write("<table>")
for(let i = 0; i <= rowNum; i++){
  document.write("<tr>");
  for(let j = 1; j <= colNum; j++){
    let seatNum = colNum * i + j;
    // 좌석번호가 고객수보다 크면 빠져나옴
    if(seatNum > customer){
      break;
    }
    document.write("<td>좌석" + seatNum + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>")
