// '신' 캐릭터에 대한 HTML 요소 선택
let mbox21 = document.querySelector("#Cbox2-1");
let image2 = document.querySelector(".Cbox-Full2>img");
let text2 = document.querySelector(".Cbox3-text");

// 다른 '신' 캐릭터에 대한 변수 선택
let mbox22 = document.querySelector("#Cbox2-2");
let mbox23 = document.querySelector("#Cbox2-3");
let mbox24 = document.querySelector("#Cbox2-4");

// '신' 캐릭터를 클릭했을 때 정보 업데이트
mbox21.addEventListener('click', function(){

    // '신' 캐릭터 정보 업데이트
    image2.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
    text2.innerHTML = 
        '<h1>오네이로스</h1><p>신 캐릭터에 대한 설명</p>' +
        // '신' 캐릭터에 대한 정보 업데이트
        '<p>나이: 신의 나이<br>' +
        '키/몸무게: 신의 키/몸무게<br>' +
        '기타 신에 대한 정보</p>';
});

mbox22.addEventListener('click', function(){
    // '신' 캐릭터 2에 대한 정보 업데이트
    image2.setAttribute("src","../webproimg/Ho.png"); // '신' 캐릭터 이미지 경로로 수정
    text2.innerHTML = 
        '<h1>환웅</h1><p>신 캐릭터에 대한 설명</p>' +
        // '신' 캐릭터에 대한 정보 업데이트
        '<p>나이: 신의 나이<br>' +
        '키/몸무게: 신의 키/몸무게<br>' +
        '기타 신에 대한 정보</p>';
});

mbox23.addEventListener('click', function(){
    // '신' 캐릭터 3에 대한 정보 업데이트
    // ...
});
