
 // Swiper Initialization
 const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});


// Mobile Menu Toggle
const body = document.body;
const navMenu = document.querySelector('.menu-content');
const navOpenBtn = document.querySelector('.navOpen-btn');
const navCloseBtn = document.querySelector('.navClose-btn');

navOpenBtn.addEventListener('click', () => {
    navMenu.classList.add('open');
    body.style.overflowY = 'hidden';
});

navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('open');
    body.style.overflowY = 'auto';
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


document.addEventListener("DOMContentLoaded", function () {
    // to make the header shown while scrolling
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".header");
        if (window.scrollY > 100) { 
            header.classList.add("scrolled"); // ki nskroliw
            
        } else {
            header.classList.remove("scrolled"); // ki nwlo fo9
            
            
        }
    });
});

//colornav
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav-link");

    // When the user scrolls
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;

        // Toggle class on header
        if (scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Toggle class on all nav links
        navLinks.forEach(link => {
            if (scrollY > 100) {
                link.classList.add("nav-link-scroll");
            } else {
                link.classList.remove("nav-link-scroll");
            }
        });
    });
});

//window.addEventListener('scroll', () => {
   // const navlink = document.querySelector('.nav-link');
  //  nav-link.classList.toggle('scrolled', window.scrollY > 50);
//});


//document.addEventListener("DOMContentLoaded", function () {
    // to make the nav-link shown while scrolling
    //window.addEventListener("scroll", function () {
        //let navlink = document.querySelector(".nav-link");
       // if (window.scrollY > 100) { 
          //  nav-link.classList.add("scrolled"); // ki nskroliw
            
       // } else {
            //nav-link.classList.remove("scrolled"); // ki nwlo fo9
            
            
       // }
   // });
//});





// Search Functionality (Basic Example)
const searchInput = document.getElementById('search-input');
const sections = document.querySelectorAll('.section');
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });
});


/*
// Active Nav Link Highlighting
const navLinks = document.querySelectorAll('.nav-link');
const observerOptions = {
    root: null,
    threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active-navlink');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active-navlink');
                }
            });
        }
    });
}, observerOptions);*/






//correct one (active nav link hughlighting)

const navLinks = document.querySelectorAll('.nav-link');
const observerOptions = {
    root: null,
    threshold: 0.3,  //detect the section 
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active-navlink');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active-navlink');
                }
            });
        }
    });
}, observerOptions);


document.querySelectorAll("section").forEach(section => observer.observe(section));


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("nav a[href='#home']").classList.add("active-navlink");
});


window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        navLinks.forEach(link => link.classList.remove('active-navlink'));
        document.querySelector("nav a[href='#home']").classList.add("active-navlink");
    }
});


//animated text effect

swiper.on('slideChangeTransitionStart', function () {
    document.querySelectorAll('.animation').forEach((p) => {
       p.classList.remove('active');
    });
});






swiper.on('slideChangeTransitionEnd', function () {
    let activeSlide = document.querySelector('.swiper-slide-active .animation');
    if (activeSlide) {
        activeSlide.classList.add('active');
    }
});


//this one for making the effect start since the page is open
document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animation");
    animatedElements.forEach(element => {
        element.classList.add("active"); 
    });
});



//the effect of swiper button in the home section


document.querySelectorAll('.swiper img').forEach(img => {
    const button = img.closest('.swiper').querySelector('.swiper-button-next');

    img.addEventListener('touchstart', function () {
        button.style.opacity = "1"; 
    });

    img.addEventListener('touchend', function () {
        setTimeout(() => {
            button.style.opacity = "0"; 
        }, 1500); 
    });
});


document.querySelectorAll('.swiper img').forEach(img => {
    const button = img.closest('.swiper').querySelector('.swiper-button-prev');

    img.addEventListener('touchstart', function () {
        button.style.opacity = "1"; // showing the button 
    });

    img.addEventListener('touchend', function () {
        setTimeout(() => {
            button.style.opacity = "0"; 
        }, 1500); 
    });
});








//second swiper work (discover section)

document.addEventListener("DOMContentLoaded", function () {
    
    var discoverSwiper = new Swiper(".discover-swiper", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: ".discover-button-next",
            prevEl: ".discover-button-prev",
        },
        pagination: {
            el: ".discover-pagination",
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
        }
    });
});




document.querySelectorAll('.discover-card-content h3').forEach(title => {
    title.addEventListener('click', function() {
        const link = this.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
