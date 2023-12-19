document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector('.container');
    var header = document.getElementById('main_header');

    window.addEventListener('scroll', function () {
        // 스크롤 위치 확인
        var scrollPosition = window.scrollY;

        // 스크롤 위치가 특정 값 이상이면 .container에 hidden 클래스 추가, 그렇지 않으면 제거
        if (scrollPosition > 500) {
            container.style.opacity = 0; // 숨김
            header.classList.add('header-fixed'); // 헤더를 고정
        } else {
            container.style.opacity = 1; // 표시
            header.classList.remove('header-fixed'); // 헤더를 고정 해제
        }
    });
});