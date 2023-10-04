var mbox11 = document.querySelector("#Cbox2-1");
var image = document.querySelector(".Cbox-Full2>img");
var text1 = document.querySelector(".Cbox3-text");
var mbox12 = document.querySelector("#Cbox2-2");
var mbox13 = document.querySelector("#Cbox2-3");
var mbox14 = document.querySelector("#Cbox2-4");

var state = 0;

let nbox1 = document.querySelector("#namebox1-1");
let nbox2 = document.querySelector("#namebox1-2");
let nbox3 = document.querySelector("#namebox1-3");

// window.onload(turnToHuman());
nbox1.addEventListener('click', function(){
    turnToHuman();
    console.log("click1");
    state = 0;
});
nbox2.addEventListener('click', function(){
    turnTOGod();
    console.log("click2");
    state = 1;
});
nbox3.addEventListener('click', function(){
    turnToNM();
    console.log("click3");
    state = 3;
});

//오각박스1 클릭 시
mbox11.addEventListener('click', function(){
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/YNH.png");
        text1.innerHTML = 
        '<H1>유나현</H1><p>"내가 서현이를 지켜줘야 하니까."</p><br>'+
        '<p>나이: 18세<br>'+
            '키/몸무게: 165/57<br>'+
            '소지품: 국궁과 두루마기<br><br>'+
            '편모가정에서 자라 16세의 어린 나이에 어머니를 잃고<br>'+
            '18세 생일이 지난 다음날 동생마저 차례로 악몽에 먹혀버리고 만다.<br>'+
            '동생을 아끼는 다정한 언니로 유대관계가 좋은 자매였으며, <br>'+
            '동생을 구하기 위해 정령술사의 운명을 받아들인다.<br><br>'+
            '청소년 양궁부에서 활약하고 있으며 이를 토대로 악몽에 들어가서도 활을 이용한 전투를 한다.<br><br>'+
            '여러 공포에 맞서 싸워야 하는 상황에 두려움을 느끼지만,<br>'+
            '선천적으로 지닌 용감한 성격으로 이를 이겨내며 나아간다.</p>';
    }
    //신 상태일 때
    else if (state==1){
        // '신' 캐릭터 정보 업데이트
        image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>오네이로스</h1><p>신 캐릭터에 대한 설명</p>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
    //악몽 상태
    else if (state==2){
        image.setAttribute("src","../webproimg/W1.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>울프</h1><p>악몽 캐릭터에 대한 설명</p>' +
            // '악몽' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
});

//오각박스2 클릭 시
mbox12.addEventListener('click', function(){
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/M.png");
        text1.innerHTML =
        '<H1>이경</H1><P>생전 소방관이자 당대 정령술사였던 존재</p><br>'+
        '<p>나이: 34세<br>'+
        '키/몸무게: 172/75<br><br>'+
        '당대 정령술사이자 나현과 서현의 어머니로<br>'+
        '울프에 의해 살해당하기 직전까지 소방관으로 일하며 사람을 구하는 일을 하고 있었다.<br><br>'+
        '불이 난 건물 안, 이경이 사람들을 구하고 있던 도중<br>'+
        '봉인이 허술해진 틈을 탄 울프가 한 인간을 조종하여 문고리를 고장 냈고,<br>'+
        '이로 인해 이경을 포함한 많은 사람들이 죽음에 이르게 되었다.<br><br>'+
        '현장에서는 마지막까지 사람들을 구하기 위해 저항한 흔적이 남아있으며,<br>'+
        '딸들과 함께 찍은 가족사진을 쥔 모습으로 발견되었다.</p>';
    }
    //신 상태일 때 -> 업데이트 필요
    else if (state==1){
        // '신' 캐릭터 정보 업데이트
        image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>오네이로스</h1><p>신 캐릭터에 대한 설명</p>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
    //악몽 상태 -> 업데이트 필요
    else if (state==2){
        image.setAttribute("src","../webproimg/W1.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>울프</h1><p>악몽 캐릭터에 대한 설명</p>' +
            // '악몽' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
});

//오각박스3 클릭 시
mbox13.addEventListener('click', function(){
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/SH.png");
        text1.innerHTML =
        '<H1>유서현</H1><p>나현의 동생이자 솜니아 신드롬의 희생자</p><br>'+
        '<p>나이: 11<br>'+
        '키/몸무게: 147/35<br><br>'+
        '편모가정에서 자라 자신을 아껴주는 어머니와 언니 아래에서 조용히 이르게 철이 들었다.<br><br>'+
        '언니인 나현이 무사히 18세의 생일을 맞이하였을 때<br>'+
        '순수히 함께 기뻐하며 생일 파티를 했고, <br>'+
        '놀이공원에 다녀와 잠든 것이 현실에서의 마지막 기억으로 남아있다.<br><br>'+
        '나현이 악몽 속에 들어가 마주하는 공간은 서현의 기억에 많이 의존하고 있으며,<br>'+
        '현재는 악몽 속에 갇혀 떠돌아다니고 있다.</p>';
    }
    //신 상태일 때 -> 업데이트 필요
    else if (state==1){
        // '신' 캐릭터 정보 업데이트
        image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>오네이로스</h1><p>신 캐릭터에 대한 설명</p>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
    //악몽 상태 -> 업데이트 필요
    else if (state==2){
        image.setAttribute("src","../webproimg/W1.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>울프</h1><p>악몽 캐릭터에 대한 설명</p>' +
            // '악몽' 캐릭터에 대한 정보 업데이트
            '<p>나이: 신의 나이<br>' +
            '키/몸무게: 신의 키/몸무게<br>' +
            '기타 신에 대한 정보</p>';
    }
});

//오각박스4 클릭 시
mbox14.addEventListener('click', function(){
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/D.png");
        text1.innerHTML =
        '<H1>단군</H1><p>환웅과 웅녀의 아들이자 고조선의 초대 군주</p><br>'+
        '<p>나이: 불명<br>'+
        '키/몸무게: 177/79<br><br>'+
        '초대 정령술사이자 울프의 봉인을 주도한 인물이다.<br><br>'+
        '신인 아버지와 반인반수인 어머니 사이에서 태어나 인간임에도 강력한 힘을 지녔으며<br>'+
        '어머니인 웅녀를 외, 내적으로 많이 닮았다고 전해진다.<br><br>'+
        '울프의 봉인을 지속시키기 위해 정령석으로 만든 노리개를<br>'+
        '자신의 힘을 담은 붉은 두루마기와 함께 후손들에게 물려주며 정령술사의 맥을 이어나가도록 했다.</p>';
    }
    //신 상태일 때 -> 없어서 뺌
    //악몽 상태 -> 없어서 뺌
});


function turnToHuman(){
    console.log("success인간");
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_4.style.display = 'block'; // **보이기**
    // if (cbox2_4) {
    //     cbox2_4.style.display = 'block';}

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/YNH1.png"); // 새 이미지 경로로 변경
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***
    

    // 유나현 캐릭터정보
    image.setAttribute("src","../webproimg/YNH.png");
    text1.innerHTML = 
        '<H1>유나현</H1><p>"내가 서현이를 지켜줘야 하니까."</p><br>'+
        '<p>나이: 18세<br>'+
            '키/몸무게: 165/57<br>'+
            '소지품: 국궁과 두루마기<br><br>'+
            '편모가정에서 자라 16세의 어린 나이에 어머니를 잃고<br>'+
            '18세 생일이 지난 다음날 동생마저 차례로 악몽에 먹혀버리고 만다.<br>'+
            '동생을 아끼는 다정한 언니로 유대관계가 좋은 자매였으며, <br>'+
            '동생을 구하기 위해 정령술사의 운명을 받아들인다.<br><br>'+
            '청소년 양궁부에서 활약하고 있으며 이를 토대로 악몽에 들어가서도 활을 이용한 전투를 한다.<br><br>'+
            '여러 공포에 맞서 싸워야 하는 상황에 두려움을 느끼지만,<br>'+
            '선천적으로 지닌 용감한 성격으로 이를 이겨내며 나아간다.</p>';
    
};

function turnTOGod() {
    console.log("success신")
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_4.style.display = 'none'; // **숨기기**
    // if (cbox2_4) {
    //     cbox2_4.style.display = 'none';}

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/On1.png"); // 새 이미지 경로로 변경
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***
    
    
    // '신' 캐릭터 정보 업데이트
    image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
    text1.innerHTML = 
        '<h1>신</h1><p>신 캐릭터에 대한 설명</p>' +
        // '신' 캐릭터에 대한 정보 업데이트
        '<p>나이: 신의 나이<br>' +
        '키/몸무게: 신의 키/몸무게<br>' +
        '기타 신에 대한 정보</p>';
};


function turnToNM(){
    console.log("success악몽");
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_4.style.display = 'none'; // **숨기기**
    // if (cbox2_4) {
    //     cbox2_4.style.display = 'none'; }

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/W1.png");
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***
    
    
    // '악몽' 캐릭터 정보 업데이트
    image.setAttribute("src","../webproimg/W.png");
    text1.innerHTML = 
        '<h1>악몽</h1><p>악몽 캐릭터에 대한 설명</p>' +
        // '신' 캐릭터에 대한 정보 업데이트
        '<p>나이: 신의 나이<br>' +
        '키/몸무게: 신의 키/몸무게<br>' +
        '기타 신에 대한 정보</p>';
};
