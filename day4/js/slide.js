// slide.js
window.onload = function(){

  let picture = ["images/cup-1.jpg", "images/cup-2.jpg",
          "images/cup-3.jpg"];
  let picIdx = 0;

  showSlide();

  function showSlide(){
    // 이미지 경로  - src 속성 사용
    document.getElementById("pic").src = picture[picIdx];
    picIdx += 1;
    if(picIdx == picture.length){
      picIdx = 0;
    }

    // 2초에 한번씩 그림이 바뀐다
    setTimeout(showSlide, 2000);
  }
}