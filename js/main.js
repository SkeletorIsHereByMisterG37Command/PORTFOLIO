/******************************************************************************* 
 * This will hangle the projects filtering
 *******************************************************************************/
const filter_btns = document.querySelectorAll(".filter-btn");
filter_btns.forEach(btn => btn.addEventListener("click", () => {

    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add("active");

    let filter_value = btn.dataset.filter;
    $(".grid").isotope({
        filter: filter_value
    });
}));

// isotop js library jQuery initialization 
$('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    transitionDuration: "0.6s",
});

/******************************************************************************* 
 * This will hangle the skills progress bar animation with percantage count
 *******************************************************************************/
$(".skill-per").each(function () {

    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width", per + '%');
    $({
        animatedValue: 0
    }).animate({
        animatedValue: per
    }, {

        duration: 7000,
        step: function () {

            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function () {

            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
    });
});


/******************************************************************************* 
 * This will hangle the circle attributes progress bar percantage count
 *******************************************************************************/
let percent_multitasking = document.querySelector(".multitasking");
let percent_communication = document.querySelector(".communication");
let percent_team_work = document.querySelector(".team-work");
let count1 = 0;
let count2 = 0;
let count3 = 0;
setInterval(() => {

    if (count2 === 100) {
        clearInterval();
    } else {

        count2 = count2 + 1;
        percent_communication.innerHTML = count2 + '%';
    }
    if (count3 === 100) {
        clearInterval();
    } else {

        count3 = count3 + 1;
        percent_team_work.innerHTML = count3 + '%';
    }
}, 60.77);
setInterval(() => {

    if (count1 === 77) {
        clearInterval();
    } else {

        count1 = count1 + 1;
        percent_multitasking.innerHTML = count1 + '%';
    }
}, 68.69);


/****************************************************************************** 
 *   This will handle the taker-gong audio   
 *******************************************************************************/
const relevant_img = document.querySelector(".about-section-img");
const taker_gong = document.querySelector(".taker-gong");
relevant_img.addEventListener("mouseover", () => {

    taker_gong.play();
});
relevant_img.addEventListener("mouseout", () => {

    taker_gong.pause();
    taker_gong.currentTime = 0;
});

/******************************************************************************* 
 *   This will handle the swiper.js testimonials stuff
 *******************************************************************************/
let my_swiper = new Swiper(".swiper", {

    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {

        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/***************************************************************************************** 
 * This will keep the footer input text visible when clicking outside the input field
 ******************************************************************************************/
const footer_input = document.querySelector(".footer-input");
footer_input.addEventListener("focus", () => {

    footer_input.style.color = "#ffdb3a";
});
footer_input.addEventListener("blur", () => {

    if (footer_input.value != "") {
        footer_input.style.color = "#ffdb3a";
        return;
    } else {

        footer_input.style.color = "#333";
    }
});


/***************************************************************************** 
 *   This will handle the hamburger button
 ******************************************************************************/
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const navbar_links = document.querySelectorAll(".links a");

function close_menu() {

    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}
hamburger_menu.addEventListener("click", () => {

    if (!navbar.classList.contains("open")) {

        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {

        close_menu();
    }
});

navbar_links.forEach(link => link.addEventListener("click", () => close_menu()));