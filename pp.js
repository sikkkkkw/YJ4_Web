function filterContent() {
    var searchValue = document.getElementById('searchInput').value.toLowerCase();
    var articles = document.querySelectorAll('.main_article');

    articles.forEach(function(article) {
        var title = article.querySelector('h1').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
