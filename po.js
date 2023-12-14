function showContent(category) {
    var articles = document.getElementsByClassName('main_article');
    for (var i = 0; i < articles.length; i++) {
        articles[i].style.display = 'none';
    }
    var content = document.getElementsByClassName(category);
    for (var i = 0; i < content.length; i++) {
        content[i].style.display = 'block';
    }
}
function redirectToLink(link) {
// JavaScript에서 페이지 이동하는 방법
    window.location.href = link;
}