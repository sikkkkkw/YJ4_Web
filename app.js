const imgElem = document.querySelector(".video-img");

let loadedImagesCount = 0;
let totalImageCount = 2243;
let videoImages = [];
let currentFrame = 0;

function loadImage() {
    for (let i = 0; i < totalImageCount; i++) {
        let img = new Image();
        img.src = `./frame/frame_${i}.jpg`;
        videoImages.push(img);

        img.addEventListener("load", function () {
            loadedImagesCount++;
            if (loadedImagesCount === totalImageCount) {
                console.log("이미지 로드 완료");
                init();
            }
        });
    }
}

loadImage();

function init() {
    const container = document.querySelector(".container");
    window.addEventListener("scroll", function () {
        progress = window.scrollY / (container.offsetHeight - this.window.innerHeight);
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        requestAnimationFrame(function () {
            currentFrame = Math.round(totalImageCount * progress);
            imgElem.src = videoImages[currentFrame].src;
        });
    });
}