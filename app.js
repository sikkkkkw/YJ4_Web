const imgElem =document.querySelector(".video-img");

let loadedImagesCount = 0;
let totallmageCount=2243;
let videoImages =[];

function loadImage(){
    for(let i=0; i<totallmageCount; i++){
        let imgElem = new Image();
        imgElem.src = `./vdieo/frame_${i}.jpg`;
        videoImages.push(imgElem);
        
        imgElem.addEventListener("load",function(){
            loadedImagesCount++;
            if(loadedImagesCount === totallmageCount){
                console.log("이미지 로드 완료");
                init();
                
            }
        })
    }
}
loadImage();

function init(){
    // alert("이미지 로드 완료 함수 호출")
    const container =document.querySelector(".container");
    window.addEventListener("scroll",function(){
        // console.log("스크롤 이벤트 발생")
        progress = window.scrollY / (container.offsetHeight - this.window.innerHeight)
        // console.log(progress);
        if(progress < 0)progress=0;
        if(progress > 1)progress=1;

        this.requestAnimationFrame(function(){
            currentFrame = Math.round(totallmageCount*progress);
            imgElem.src = videoImages[currentFrame].src
        })
    })
}