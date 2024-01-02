
// Toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar =  document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

// =========================sticky navbar===================    
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
// =========================remove toggle=============
menuIcon.classList.remove('bx-x');
menuIcon.classList.remove('active');

// ============================typed js===========================

var typed = new Typed(".multiple-text", {
    strings: ["Fontend developer" , "Backend developer"],
    
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// =========================================more===================?

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
