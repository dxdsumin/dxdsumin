// '악몽' 캐릭터에 대한 HTML 요소 선택
let mbox31 = document.querySelector("#Cbox2-1");
let image3 = document.querySelector(".Cbox-Full2>img");
let text3 = document.querySelector(".Cbox3-text");

// 다른 '악몽' 캐릭터에 대한 변수 선택
let mbox32 = document.querySelector("#Cbox2-2");
let mbox33 = document.querySelector("#Cbox2-3");
let mbox34 = document.querySelector("#Cbox2-4");

// '악몽' 캐릭터를 클릭했을 때 정보 업데이트
mbox31.addEventListener('click', function(){

    // '악몽' 캐릭터 정보 업데이트
    image2.setAttribute("src","../webproimg/W1.png"); // '신' 캐릭터 이미지 경로로 수정
    text3.innerHTML = 
        '<h1>울프</h1><p>악몽 캐릭터에 대한 설명</p>' +
        // '악몽' 캐릭터에 대한 정보 업데이트
        '<p>나이: 신의 나이<br>' +
        '키/몸무게: 신의 키/몸무게<br>' +
        '기타 신에 대한 정보</p>';
});

mbox32.addEventListener('click', function(){
    // '악몽' 캐릭터 2에 대한 정보 업데이트
    // ...
});

mbox33.addEventListener('click', function(){
    // '악몽' 캐릭터 3에 대한 정보 업데이트
    // ...
});
