var mbox11 = document.querySelector("#Cbox2-1");
var image = document.querySelector(".Cbox-Full2>img");
var text1 = document.querySelector(".Cbox3-text");
var mbox12 = document.querySelector("#Cbox2-2");
var mbox13 = document.querySelector("#Cbox2-3");
var mbox14 = document.querySelector("#Cbox2-4");
var mbox15 = document.querySelector("#Cbox2-5");

var cbox32 = document.querySelector("#Cbox3-2");

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
    state = 2;
});

//오각박스1 클릭 시
mbox11.addEventListener('click', function(){
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/YNH.png");
        text1.innerHTML = 
        '<H1>유나현</H1><H4>"내가 서현이를 지켜줘야 하니까."</H4><br>'+
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

        // text2.innerHTML = 
        // '<H3>정령술사에 대하여</H3><br>'+
        // '<span style=" font-style: italic; color: white;">그들은 붉은 두루마기를 입고 오묘한 빛을 발하는 노리개를 몸에 지녔다.</span><br><br>'+
        // '<p>자신의 업으로 인해 친우가 가족을 잃은 후 꿈의 신 오네이로스는 네 정령들을 창조하여 정령석에 담아 환웅의 아들 단군에게 주었다.<br>'+
        //     '단군은 이를 받아 노리개를 제작하게 되었으니, 노리개는 정령술사의 상징이자 계승의 의미로써 후일 나현의 손에 들어오게 된다.<br><br>'+
        //     '정령술사들은 정령들을 다루며 울프의 봉인을 유지하며<br>'+
        //     '정령술사의 대를 계승하는 사명을 지니고 있다.<br><br>'+
        //     '본디 나현의 어머니인 이경이 당대 정령술사로 봉인을 담당하고 있었으나, 오랜 시간이 지난 탓에 생긴 봉인의 틈을 이용한 울프에 의해 사망하게 된다.<br>'+
        //     '이에 2년간의 공석 이후 그의 딸인 유나현이 정령술사의 자리를 계승하게 된다.</P>';

        cbox32.style.display = "block";
    }
    //신 상태일 때
    else if (state==1){
        // '신' 캐릭터 정보 업데이트
        image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>오네이로스</h1><p>꿈의 신이자 울프 그리고 정령들의 창조주</p><BR>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>나이: 불명<br>' +
            '키/몸무게: 237/측정불가<br><br>' +
            '밤의 여신 닉스의 아들로 꿈의 신이자 정령과 악령의 신이다.<br><br>'+
            '어느 것에도 쉬이 관심을 주지 않는 무심한 성격에 푹 눌러쓴 후드에 의해 폐쇄적으로 보인다.<br>'+
            '여타 다른 신들이 그러하듯 염세적이고 오만하며 변덕스럽다.<br><br>'+
            '그런 그에게도 친구라 부를 존재가 있었으니. <br><br>'+
            '그는 천상신 환웅과 친분을 쌓기 시작하며 여러 감정을 바라보고 정령들을 만들게 된다.<br>'+
            '그러나 인간 태초에 악몽인 울프를 창조하고서 버려두었던 것이 화근이 되어<br>'+
            '환웅의 아내 웅녀를 죽게 만든다.</p>';
        cbox32.style.display = "none";
    }
    //악몽 상태
    else if (state==2){
        image.setAttribute("src","../webproimg/W.png"); // '악몽' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>울프</h1><p>세상을 공포에 물들여 사람을 악몽 속으로 집어삼키는 탐욕</p><br>' +
            // '악몽' 캐릭터에 대한 정보 업데이트
            '<p>나이: 불명<br>' +
            '키/몸무게: 198/92<br><br>' +
            '하잘 것 없던 작은 존재가 탐욕을 알게 된 순간 세계는 어둠의 공포를 알게 되었다.<br>'+
            '세계는 안개에 휩싸이듯 악에 의해 침식되고 있었으며,<br>'+
            '점차 현실로 기어 나오기 시작한 악몽에 저항할 수 없었다.<br><br>'+
            '인간의 두려움이 커질수록 악몽은 그것을 집어삼키며 막을 길 없이 커져가는 것 같았으나<br>'+
            '결국 악은 패하고 정의가 승리하였으니.<br>'+
            '제 창조주의 일생 두 번째 시선 아래에서 악몽은 봉인된다.<br><br>'+
            '탐욕 다음으로 알게 된 것은 증오.<br>'+
            '3211년의 시간 동안 키워온 그것과 함께 다시 세상 밖으로 나온 악몽에 맞서 동생을 구해야 한다.</p>';
            cbox32.style.display = "none";
    }
});

//오각박스2 클릭 시
mbox12.addEventListener('click', function(){
    cbox32.style.display = "none";
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/Mom.png");
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
        image.setAttribute("src","../webproimg/Ho.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>환웅</h1><p>오네이로스의 친구이자 한반도를 돌보기 위해 인간계로 내려온 신</p><BR>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>나이: 불명<br>' +
            '키/몸무게: 188/측정불가<br><br>' +
            '‘널리 인간을 이롭게 하라’<br><br>'+
            '이념을 갖고 인간계로 내려온 별종이라 불리던 신으로,<br>'+
            '자신과 정반대의 성격을 지닌 오네이로스와 친구이다.<br><br>'+
            '웅녀와 결혼하여 슬하에 단군이라는 아들을 두었으며<br>'+
            '신 답지 않게 유한한 생명의 죽음을 슬퍼하는 면모를 가지고 있는 탓에<br>'+
            '웅녀의 죽음에도 크게 상심하며 슬퍼했다.</p>';
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
    cbox32.style.display = "none";
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/YSH.png");
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
        image.setAttribute("src","../webproimg/Fairy_Full.png"); // '신' 캐릭터 이미지 경로로 수정
        text1.innerHTML = 
            '<h1>델루</h1><p>용기의 정령</p><br>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>138cm<br><br>' +
            '정령들 중 첫째. 용감하고 정의로우며 전투에 가장 능하다.<br>'+
            '활동적이고 낙천적인 성격으로 무엇이든 쉽게 웃어넘기지만 약한 존재를 가만히 두지 못하는<br>'+
            '오지랖 넓은 점도 지니고 있다. <br>'+
            '이 탓에 막내인 알리즈를 적잖이 걱정하고 종종 닦달하기도 하여 에리드와 티격대는 일이 잦다.<br>'+
            '그럼에도 에리드와 가장 단짝처럼 붙어다니며 이따금 함께 사고를 일으킨다.<br><br>'+
            '정령들 중 키가 가장 작은데, 스스로 이것을 단점이라 생각하지는 않지만<br>'+
            '막내로 오해받는 일이 잦아 가끔 욱하는 것이 보인다. </p><br><br>'+
            '<h3>능력</h3>'+
            '<p>검을 이용한 강한 공격과 작은 지속 피해를 주며 플레이어에게 공격력 증가 버프를 부여한다.</p>'+
            '<br><br><br><br><br>'+

            '<h1>에리드</h1><p>희망의 정령</p><br>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>145cm<br><br>' +
            '정령들 중 셋째. 어떠한 상황에서든 희망을 전하는 성격으로, 타고난 운이 좋은 편이다.<br>'+
            '가장 웃음이 많은 편으로 밝고 긍정적인 기운을 지녀 좋건 나쁘건 <br>'+
            '주변인에게 끼치는 영향이 지대하다.<br><br>'+
            '무엇이건 좋은 것을 먼저 보는 성향이 강해 울프의 봉인 당시에도<br>'+
            '약간의 측은지심을 느낄 정도로 여린 면이 있다.<br>'+
            '세상에 희망을 나누는 것으로 봉인의 주축을 맡고 있음에도<br>'+
            '언젠가는 울프 또한 회개할 수 있으리라 믿는다.</p><br><br>'+
            '<h3>능력</h3>'+
            '<p>올리브 나무를 이용하여 방어를 하며 올리브 주변에 있으면 작은 치유를 받는다.<br>'+
            '더해 플레이어에게 받는 피해 감소 버프를 부여한다.</p>'+

            '<br><br><br><br><br><br>'+

            '<h1>로지</h1><p>지혜의 정령</p><br>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>179cm<br><br>' +
            '정령들 중 둘째. 정령들 중 가장 지혜로우며 항상 온화하게 웃는 낯을 유지한다.<br>'+
            '침착하고 조용한 성격으로 보이지만 은근히 숨기는 것도 많은 미스터리한 성격. <br>'+
            '여태 화난 모습을 보인적 없음에도 가장 화나게 하면 안 되는 존재 중 하나로 손꼽힌다.<br><br>'+
            '정령들 중 가장 말을 잘하여 첫째인 델루가 있음에도 대표로 인식되어 나서는 경우가 잦고,<br>'+
            '종종 델루가 이것에 투덜거리기는 하지만 그 또한 로지를 의지하고 있음을 인정했다.<br><br>'+
            '<h3>능력</h3>'+
            '<p> 지식과 통찰력을 이용하여 적의 약점을 알아내고 적에게 받는 피해량 증거 디버프를 부여한다.</p>'+

            '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>'+

            '<h1>알리즈</h1><p>치유의 정령</p><br>' +
            // '신' 캐릭터에 대한 정보 업데이트
            '<p>168cm<br><br>' +
            '정령들 중 넷째. 막내인 덕에 모두에게 사랑받지만, 겁이 많고 소심한 탓에<br>'+
            '자신을 뽐내거나 드러낼 줄 모른다.<br>'+
            '그러나 치유라는 가장 강한 능력을 가지고 있기에 전투에서도 도움이 될 수 있도록 항상 노력하고 있다.<br><br>'+
            '생각과 행동이 약간 굼뜬 경향이 있으며, 자신의 능력은 강하고 유용하지만<br>'+
            '그만큼 악용될 여지가 있다는 것을 인지하여 확실한 상황이 아니라면 <br>'+
            '결코 능력을 함부로 사용하거나 드러내지 않는다.</p><br><br>'+
            '<h3>능력</h3>'+
            '<p>생명의 힘을 이용하여 파티원 전체를 치유하는 능력이 있으며 강한 단일 치유 능력을 가지고 있다.</p>';

            
    }
    //악몽 상태 -> x
});

//오각박스4 클릭 시
mbox14.addEventListener('click', function(){
    cbox32.style.display = "none";
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/Dg.png");
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

//오각박스5 클릭 시
mbox15.addEventListener('click', function(){
    cbox32.style.display = "none";
    //인간 상태일 때
    if(state==0){
        image.setAttribute("src","../webproimg/Un.png");
        text1.innerHTML =
        '<H1>웅녀</H1><p>21일 동안 쑥과 마늘만을 먹고 인간이 된 곰이자 환웅의 아내.</p><br>'+
        '<p>나이: 불명<br>'+
        '키/몸무게: 210/106<br><br>'+
        '본디 곰이었으나 쑥과 마늘을 통해 21일 후 인간이 된 반인반수의 존재이다.<br>'+
        '울프가 탐욕 이외의 감정을 갖고 죽인 첫 번째 존재이며, 그의 복수에 이용당했다.<br><br>'+
        '조용하고 인내심 많은 성격으로, 가족애도 깊으며 평소 잘 드러나지는 않지만<br><br>'+
        '아들인 단군을 많이 아끼고 소중히 여겼다.<br><br>'+
        '인간이 된 이후에도 유지된 곰이었을 때의 힘과 인맥이 울프가 웅녀를 노린 2차적 원인이 되었다.</p>';
    }
    //신 상태일 때 -> 없어서 뺌
    //악몽 상태 -> 없어서 뺌
});

//인간 클릭 시
function turnToHuman(){
    console.log("success인간");
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_3 = document.querySelector(".Cbox2-three:nth-child(2)");
    cbox2_3.style.display = 'block'; // **보이기**
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(3)");
    cbox2_4.style.display = 'block'; // **보이기**
    var cbox2_5 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_5.style.display = 'block'; // **보이기**
    var cbox2_6 = document.querySelector(".Cbox2-three:nth-child(5)");
    cbox2_6.style.display = 'block'; // **보이기**

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/YNH1.png"); // 새 이미지 경로로 변경
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***
    var cbox2_1Image = document.querySelector("#Cbox2-2 img");
    cbox2_1Image.setAttribute("src", "../webproimg/Mom1.png");
    var cbox2_1Image = document.querySelector("#Cbox2-3 img");
    cbox2_1Image.setAttribute("src", "../webproimg/YSH1.png");
    var cbox2_1Image = document.querySelector("#Cbox2-4 img");
    cbox2_1Image.setAttribute("src", "../webproimg/Dg1.png");
    var cbox2_1Image = document.querySelector("#Cbox2-5 img");
    cbox2_1Image.setAttribute("src", "../webproimg/Un1.png");
    
    

    // 유나현 캐릭터정보
    image.setAttribute("src","../webproimg/YNH.png");
    text1.innerHTML = 
    '<H1>유나현</H1><H4>"내가 서현이를 지켜줘야 하니까."</H4><br>'+
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
    
    cbox32.style.display = "block";
};

//신 클릭 시
function turnTOGod() {
    console.log("success신")
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_3 = document.querySelector(".Cbox2-three:nth-child(2)");
    cbox2_3.style.display = 'block'; // **보이기**
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(3)");
    cbox2_4.style.display = 'block'; // **숨기기**
    var cbox2_5 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_5.style.display = 'none'; // **숨기기**
    var cbox2_6 = document.querySelector(".Cbox2-three:nth-child(5)");
    cbox2_6.style.display = 'none'; // **숨기기**

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/On1.png"); // 새 이미지 경로로 변경
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***
    var cbox2_2Image = document.querySelector("#Cbox2-2 img");
    cbox2_2Image.setAttribute("src", "../webproimg/Ho1.png");
    var cbox2_3Image = document.querySelector("#Cbox2-3 img");
    cbox2_3Image.setAttribute("src", "../webproimg/Fr.png");

    
    cbox32.style.display = "none";
    
    
    // '신' 캐릭터 정보 업데이트
    image.setAttribute("src","../webproimg/On.png"); // '신' 캐릭터 이미지 경로로 수정
    text1.innerHTML = 
    '<h1>오네이로스</h1><p>꿈의 신이자 울프 그리고 정령들의 창조주</p><BR>' +
    // '신' 캐릭터에 대한 정보 업데이트
    '<p>나이: 불명<br>' +
    '키/몸무게: 237/측정불가<br><br>' +
    '밤의 여신 닉스의 아들로 꿈의 신이자 정령과 악령의 신이다.<br><br>'+
    '어느 것에도 쉬이 관심을 주지 않는 무심한 성격에 푹 눌러쓴 후드에 의해 폐쇄적으로 보인다.<br>'+
    '여타 다른 신들이 그러하듯 염세적이고 오만하며 변덕스럽다.<br><br>'+
    '그런 그에게도 친구라 부를 존재가 있었으니. <br><br>'+
    '그는 천상신 환웅과 친분을 쌓기 시작하며 여러 감정을 바라보고 정령들을 만들게 된다.<br>'+
    '그러나 인간 태초에 악몽인 울프를 창조하고서 버려두었던 것이 화근이 되어<br>'+
    '환웅의 아내 웅녀를 죽게 만든다.</p>';
};

//악몽클릭
function turnToNM(){
    console.log("success악몽");
    // Cbox2-4 요소를 숨기거나 제거 (선택적)
    var cbox2_2 = document.querySelector(".Cbox2-three:nth-child(1)");
    cbox2_2.style.display = 'block'; // **보이기**
    var cbox2_3 = document.querySelector(".Cbox2-three:nth-child(2)");
    cbox2_3.style.display = 'block';
    var cbox2_4 = document.querySelector(".Cbox2-three:nth-child(3)");
    cbox2_4.style.display = 'none'; // **숨기기**
    var cbox2_5 = document.querySelector(".Cbox2-three:nth-child(4)");
    cbox2_5.style.display = 'none';
    var cbox2_6 = document.querySelector(".Cbox2-three:nth-child(5)");
    cbox2_6.style.display = 'none';

    var cbox2_1Image = document.querySelector("#Cbox2-1 img");
    cbox2_1Image.setAttribute("src", "../webproimg/W1.png");
    var cbox2_2Image = document.querySelector("#Cbox2-2 img");
    cbox2_2Image.setAttribute("src", "../webproimg/W1.png");
    //***위 두 줄 참고해서 나머지 미니이미지 경로 변경***

    
    cbox32.style.display = "none";
    
    
    // '악몽' 캐릭터 정보 업데이트
    image.setAttribute("src","../webproimg/W.png");
    text1.innerHTML = 
    '<h1>울프</h1><p>세상을 공포에 물들여 사람을 악몽 속으로 집어삼키는 탐욕</p><br>' +
    // '악몽' 캐릭터에 대한 정보 업데이트
    '<p>나이: 불명<br>' +
    '키/몸무게: 198/92<br><br>' +
    '하잘 것 없던 작은 존재가 탐욕을 알게 된 순간 세계는 어둠의 공포를 알게 되었다.<br>'+
    '세계는 안개에 휩싸이듯 악에 의해 침식되고 있었으며,<br>'+
    '점차 현실로 기어 나오기 시작한 악몽에 저항할 수 없었다.<br><br>'+
    '인간의 두려움이 커질수록 악몽은 그것을 집어삼키며 막을 길 없이 커져가는 것 같았으나<br>'+
    '결국 악은 패하고 정의가 승리하였으니.<br>'+
    '제 창조주의 일생 두 번째 시선 아래에서 악몽은 봉인된다.<br><br>'+
    '탐욕 다음으로 알게 된 것은 증오.<br>'+
    '3211년의 시간 동안 키워온 그것과 함께 다시 세상 밖으로 나온 악몽에 맞서 동생을 구해야 한다.</p>';
};
