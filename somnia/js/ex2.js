let mbox11 = document.querySelector("#namebox1-1");
// let image = document.querySelector(".namebox2-bigimg>img");
let text1 = document.querySelector(".Cbox3-text");

let mbox12 = document.querySelector("#namebox1-2");

let mbox13 = document.querySelector("#namebox1-3");



//img 변경
mbox11.addEventListener('click', function(){
    text1.innerHTML = 
        '<H1>유나현</H1><br>'+
        '<p>나이: 18세<br>'+
            '키: 165cm<br>'+
            '몸무게: 57kg<br><br>'+
            '소지품: 국궁과 두루마기<br><br>'+
            '편모가정에서 자라 16세의 어린 나이에 어머니를 잃고<br>'+
            '18세 생일이 지난 다음날 동생마저 차례로 악몽에 먹혀버리고 만다.<br>'+
            '동생을 아끼는 다정한 언니로 유대관계가 좋은 자매였으며, <br>'+
            '동생을 구하기 위해 정령술사의 운명을 받아들인다.<br><br>'+
            '청소년 양궁부에서 활약하고 있으며 이를 토대로<br>'+
            '악몽에 들어가서도 활을 이용한 전투를 한다.<br><br>'+
            '여러 두려움에 맞서 싸워야 하는 상황에 두려움을<br>'+
            '느끼지만, 선천적으로 지닌 용감한 성격으로 이를 이겨내며 나아간다.</p>';
})


mbox12.addEventListener('click', function(){
    text1.innerHTML =
    '<H1>폐교</H1><br>'+
    '<p>서현이 현재 재학 중인 초등학교이자 나현의 모교이다<br>'+
    '기존의 밝고 평화로운 분위기의 조경이 전부 무너져 기이한 형태가 되었으며,<br>'+
    '서현이 들어온 여러 괴담들이 얽혀 있기도 한 공간이다.<br><br>'+
    '울프에게 소화되는 중인 두 번째 공포로 불리는 인간이자 인간으로 부를 수 없는 것들이 기거하며,<br>'+
    '교만 (2장 보스 이름)을 물리치고 나아가야 한다.</p>';
})


mbox13.addEventListener('click', function(){
    text1.innerHTML =
    '<H1>놀이동산</H1><br>'+
    '<p>폐교 뒤편 오솔길을 따라 언덕 위로 오르면 한눈에 담기는 밝은 빛.<br>'+
    '나현의 18살 생일 당시 함께 놀러 왔던 곳이자 가장 최근의 행복했던 기억이 담긴 장소이다.<br>'+
    '밝은 빛 아래 쓸쓸히 선 캐릭터 표지판을 지나면 한 서린 고요함만이 존재하고,<br>'+
    '더욱 짙어진 안개와 멀리서 들리는 누군가의 울음소리, 더해 각종 기구들이 삐걱이는 소리가 적막을 깰 뿐이다.<br><br>'+
    '세 번째 절망, 그리고 나태 (3장 보스 이름). 이들을 죽이고 울프에게 다가가자.</p>';
})

