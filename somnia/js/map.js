let mbox11 = document.querySelector("#mbox1-1");
let image = document.querySelector(".Mbox2-bigimg>img");
let text1 = document.querySelector(".Mbox3-text");

let mbox12 = document.querySelector("#mbox1-2");

let mbox13 = document.querySelector("#mbox1-3");

let mbox14 = document.querySelector("#mbox1-4");


//img 변경
mbox11.addEventListener('click', function(){
    image.setAttribute("src","../webproimg/W1.png");
    text1.innerHTML = 
        '<H1>버려진 동네</H1><br>'+
        '<p>악몽의 초입으로, 꿈의 주인이었던 서현의 기억이 섞여<br>'+
            '나현이 살던 동네와 유사한 형태를 띄고 있다.<br>'+
            '그러나 버려진 동네라는 이름처럼 여기저기 폐허가 된 집들과 상가가 보이며<br>'+
            '안개가 자욱하게 껴 음산한 분위기가 감돈다.<br><br>'+
            '첫 번째 악이자 울프가 집어삼킨 후 도로 뱉어낸 찌꺼기들이 기생하며 살아간다.<br>'+
            '그것들은 형태 없는 사념체들에 가까우며, <br>'+
            '동네에서 빠져나가기 위해서는 분노(1장보스 이름 지정)를 제압해야 한다.</p>';
})


mbox12.addEventListener('click', function(){
    image.setAttribute("src","../webproimg/R1.png");
    text1.innerHTML =
    '<H1>폐교</H1><br>'+
    '<p>서현이 현재 재학 중인 초등학교이자 나현의 모교이다<br>'+
    '기존의 밝고 평화로운 분위기의 조경이 전부 무너져 기이한 형태가 되었으며,<br>'+
    '서현이 들어온 여러 괴담들이 얽혀 있기도 한 공간이다.<br><br>'+
    '울프에게 소화되는 중인 두 번째 공포로 불리는 인간이자 인간으로 부를 수 없는 것들이 기거하며,<br>'+
    '교만 (2장 보스 이름)을 물리치고 나아가야 한다.</p>';
})


mbox13.addEventListener('click', function(){
    image.setAttribute("src","../webproimg/M1.png");
    text1.innerHTML =
    '<H1>놀이동산</H1><br>'+
    '<p>폐교 뒤편 오솔길을 따라 언덕 위로 오르면 한눈에 담기는 밝은 빛.<br>'+
    '나현의 18살 생일 당시 함께 놀러 왔던 곳이자 가장 최근의 행복했던 기억이 담긴 장소이다.<br>'+
    '밝은 빛 아래 쓸쓸히 선 캐릭터 표지판을 지나면 한 서린 고요함만이 존재하고,<br>'+
    '더욱 짙어진 안개와 멀리서 들리는 누군가의 울음소리, 더해 각종 기구들이 삐걱이는 소리가 적막을 깰 뿐이다.<br><br>'+
    '세 번째 절망, 그리고 나태 (3장 보스 이름). 이들을 죽이고 울프에게 다가가자.</p>';
})


mbox14.addEventListener('click', function(){
    image.setAttribute("src","../webproimg/P1.png");
    text1.innerHTML =
    '<H1>숲 속</H1><br>'+
    '<p>섬찟하게 들려오는 짐승 우짖는 소리. 짙은 안개를 뚫는 살기, 살의.<br>'+
    '악이자 공포. 절망 그리고 악몽.<br><br>'+
    '그것들의 신.<br><br>'+
    '아슬히 놓인 길을 따라 나아가며 이것이 길인지 길이 아닌지 점차 알 수 없게 되는 순간에<br>'+
    '당신은 태초의 탐욕을 마주하게 될 것이다.</p>';
})
