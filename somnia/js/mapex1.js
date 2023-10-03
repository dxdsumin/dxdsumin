// 초기 설정
const mapContent = document.querySelector('.map-content');
const background = document.querySelector('.background');
const windowHeight = window.innerHeight;
let lastScrollY = window.scrollY;

// 스크롤 이벤트 처리
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // 배경 이미지 블러 처리
    const blurAmount = Math.min(10, scrollY / 20);
    background.style.filter = `blur(${blurAmount}px)`;

    // 글의 위치 조정
    const scrollDelta = scrollY - lastScrollY;
    const currentTranslateY = parseInt(getComputedStyle(mapContent).transform.split(',')[5]);
    const maxTranslateY = 800; // 글이 최대로 올라갈 위치
    const minTranslateY = -windowHeight; // 글이 최상단 위치
    let newTranslateY = currentTranslateY - scrollDelta;

    // 글이 최대 위치와 최소 위치 사이에 고정
    newTranslateY = Math.max(minTranslateY, Math.min(maxTranslateY, newTranslateY));

    // 글의 위치 업데이트
    mapContent.style.transform = `translateY(${newTranslateY}px)`;

    // 스크롤 위치 업데이트
    lastScrollY = scrollY;
});
