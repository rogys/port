window.onload = function() {
    let buttonMenu = document.querySelector('.button_menu');
    buttonMenu.addEventListener('click', function() {
        let contactSpan = document.querySelector('.contact');
        contactSpan.classList.toggle('active_contact_button');
    });
    let contentToAnimate = document.querySelectorAll('.content_animate');
    function animateStart() {
        contentToAnimate.forEach(element => {
            element.classList.add('start_up');
        });
    };
    animateStart();
    function write() {
        let text = "Inovação começa aqui";
        let h1Banner = document.querySelector('.slide_title');
        let i = 0;
        let intervalId = window.setInterval(() => {
            h1Banner.textContent += `${text[i++]}`;
            if(i >= text.length) {
                clearInterval(intervalId);
            };
        }, 100);
    };
    write();
    function secondAnimation() {
        let h2Animate = document.querySelectorAll('.about_info_title');
        let imgSvg = document.querySelectorAll('.icon_misc');
        h2Animate.forEach(element => {
            element.classList.add('primaty_animation');
        });
        imgSvg.forEach(element => {
            element.classList.add('active_img');
        });
    };
    secondAnimation();
};
window.onscroll = function() {
    function stickyHeader() {
        let header = document.querySelector('.header');
        let headerOffset = header.offsetTop;
        if (window.scrollY > headerOffset + 50) {
            header.classList.add('sticky_header');
        } else {
            header.classList.remove('sticky_header');
        }
    };
    stickyHeader();
};