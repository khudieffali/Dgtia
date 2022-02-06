// $("#header .nav-right .menu-bar").click(function(){
//     $("#header .all-header .nav-left .nav-menu ul li").classList.add("d-block")
// })
// var menuBar=document.getElementsByClassName(".menu-bar")
// var navBar=document.getElementById("navBar")

// menuBar.onclick=function MyFunction(){
// navBar.style.display="block"
// }


// window.onload=function(){
//     setTimeout(()=>{
//     document.querySelector("#preloader").classList.add("d-none")
//      document.body.style="overflow-y:scroll"
//     },1000)
// }
// window.onscroll=function(){

//     if(scrollY>120){
//     ("#header")

//     }
// }
 

// var slide_index=1;
// SlideMove(slide_index)
// function SlideMove(e){
//    var i;
//    var sliders=document.getElementsByClassName("slider-ghost");
//    if(e>sliders.length) {slide_index=1}
//    if(e<1) {slide_index=sliders.length}
//    for (let i = 0; i < sliders.length; i++) {
//        sliders[i].style.display="none";
//    }
//    sliders[slide_index-1].style.display="block"

// }
// function nextSlide(e){
//     SlideMove(slide_index+=e)
// }
// function currentSlide(e){
//     SlideMove(slide_index=e)
// }
var slide_index=1;
SlideMove(slide_index)
function SlideMove(e){
   var i;
   var sliders=document.getElementsByClassName("slider-ghost");
   if(e>sliders.length) {slide_index=1}
   if(e<1) {slide_index=sliders.length}
   for (let i = 0; i < sliders.length; i++) {
       sliders[i].style.display="none";
   }
   sliders[slide_index-1].style.display="block"

}
function nextSlide(e){
    SlideMove(slide_index+=e)
}
function currentSlide(e){
    SlideMove(slide_index=e)
}

// var slide=$("#valuable .ghost .slider-ghost");
// var leftClick=$("#valuable .ghost .left-icon");
// var rightClick=$("#valuable .ghost .right-icon");


