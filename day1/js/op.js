// op.js
let num1 = 8, num2 = 5;
let result;
// 산술 연산
/*
result = num1 + num2;
console.log(result);

result = num1 - num2;
console.log(result);

result = num1 * num2;
console.log(result);

result = num1 / num2;
console.log(result);

result = num1 % num2;
console.log(result);
*/

// 비교 연산
result = num1 > num2;
console.log(result);          // true
console.log(typeof(result));  // boolean

result = (num1 == num2);        // false
console.log(result);

result = num1 !== num2;        // true
console.log(result);

// 논리 연산
// 논리 곱 - and
result = (num1 == num2) && (num1 >= num2);  // false
console.log(result);

// 논리 합 - or
result = (num1 == num2) || (num1 >= num2);  // true
console.log(result);

// 논리 부정 - not
result = !(num1 == num2)
console.log(result);

// 조건 연산자
result = (num1 < num2) ? 'T' : 'F';       // 'F'
console.log(result);

// 짝수/홀수 판정
result = (num1 % 2 == 0) ? "짝수" : "홀수";
console.log(result);
// alert은 window 소속이지만 생략해도 된다
//window.alert("판정 결과: " + result)// 실행될 때 "짝수"
// 안쪽에는 작은 ' ' 따옴표
document.write("<span class='acess'>판정 결과: " + 
        result + "</span>");