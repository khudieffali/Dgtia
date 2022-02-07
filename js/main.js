$("#header .menu-bar").click(function(){
    $("#header .nav-menu").stop().slideToggle()
})

var myBtn = document.getElementById("scroll");
window.onscroll = function() {
    scrollFunction()
};
myBtn.onclick=function(){
    topFunction();
}

function scrollFunction() {
  if (scrollY>120) {
    myBtn.style.display = "block";
   } 
  else {
    myBtn.style.display = "none";
  }
 }
 function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


window.onload=function(){
    setTimeout(()=>{
    document.querySelector("#preloader").classList.add("d-none")
     document.body.style="overflow-y:scroll"
    },1000)
}

$('.bottom-all').slick({
    centerMode: true,
    centerPadding: '10px',
    autoplay:"true",
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
