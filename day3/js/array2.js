// array2.js
// 배열 사용
// 순서가 0번부터 시작함
let num = new Array();  // 빈 배열 생성
console.log(num);
console.log(num.length + "개");

//저장(입력)
num[0] = 10;
num[1] = 20;
num[2] = 30;

console.log(num);

//특정 요소 1개 조회
console.log(num[0]);

//수정
num[1] = 40;

//전체 요소 검색
for(let i=0; i<= num.length; i++){
  console.log(num[i]);
}

//for in문 사용
/*
for(let 변수 in 배열이름){
  console.log(배열이름[변수])
}
*/
console.log("for~ in문 검색(향상 for문)");
for(let n in num){
  console.log(num[n]);
}

//연산
console.log("인덱스로 연산하기");
console.log(num[1] - num[2]);
console.log(num[1] <= num[2]);

//합계 및 평균
let sum = 0;
let avg;
for(let i = 0; i < num.length; i++){
  // sum = sum + num[i];
  sum += num[i];  // 누적 합계
}
avg = sum / num.length; // 평균 = 합계 / 개수
console.log(sum);
console.log(avg.toFixed(2));