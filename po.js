document.addEventListener("DOMContentLoaded", function () {
    var titleDiv = document.getElementById("title");

    titleDiv.addEventListener("click", function () {
        console.log("Title clicked. Reloading the page.");
        // 페이지 새로고침을 수행하는 코드
        // location.reload();
    });
});

function showContent(category, event) {
    var articles = document.getElementsByClassName('main_article');
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }
    var content = document.getElementsByClassName(category);
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'block';
    }
    // 기본 동작 막기
    event.preventDefault();
}