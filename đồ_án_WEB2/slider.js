// Slide hiện tại
var slideIndex=0;

//Thời gian đổi slide (1s = 1000)
var time = 5000;

// Danh sách slides
let slides = document.getElementsByClassName('slide');

function ShowSlide(slideIndex){
    let i;
    
    let dots = document.getElementsByClassName("dot");
    
    for( i=0 ;i< slides.length;i++){
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }                                                           
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].className += " active";
}

ShowSlide(slideIndex);
function currentSlide(n){
    slideIndex = n;
    ShowSlide(slideIndex);
}


const next = document.getElementById('next')
const prev = document.getElementById('prev')

next.onclick = function(){
    ++slideIndex;
    if (slideIndex > slides.length-1) {slideIndex = 0};
    ShowSlide(slideIndex)
}

prev.onclick = function(){
    --slideIndex;
    if (slideIndex < 0) {slideIndex = slides.length-1}
    ShowSlide(slideIndex);
}

// Tự động đổi Slide    
setInterval(function(){
    next.click();
},time)


