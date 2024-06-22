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
let translateDiv = document.querySelector('.translate');
function hideTranslateBar() {
    window.setTimeout(function() {
        translateDiv.classList.remove('show_translate_bar');
    }, 12000);
};
function showTranslateBar() {
    translateDiv.classList.add('show_translate_bar');
    return hideTranslateBar();
};
window.addEventListener('load', showTranslateBar);
function handleKeyboard(event) {
    let spanContato = document.querySelector('.contact span');
    let h1Banner = document.querySelector('.slide_title');
    let firstH1Info = document.querySelector('.what_you_need');
    let secondH1Info = document.querySelector('.how_i_work');
    let firstInfo = document.querySelector('.first_info');
    let secondInfo = document.querySelector('.second_info');
    let rights = document.querySelector('.rights');
    let draw = document.querySelector('.draw');
    let artefact = document.querySelector('.artefact');
    let code = document.querySelector('.code');
    let eventKey = event.key;
    switch (eventKey) {
        case "e":
            spanContato.textContent = "Contact";
            h1Banner.textContent = "Innovation start's here...";
            firstH1Info.textContent = "What you need";
            secondH1Info.textContent = "How i work";
            firstInfo.textContent = "With almost 4 years of learning, everything I do is with perfectionism and attention. Each line of code was crafted with care and attention. No messy code either. Exactly what you need!";
            secondInfo.textContent = "I make a light mental assessment of your business. Based on this, I proceed with a design in Figma to present it to you. If everything is in order, I proceed to the code.";
            rights.innerHTML = "<strong>Some</strong> rights <strong>reserved</strong>";
            translateDiv.classList.remove('show_translate_bar');
            artefact.textContent = "Final Artifact";
            code.textContent = "Code";
            draw.textContent = "Draw";
            break;
        case "p":
            spanContato.textContent = "Contato";
            firstH1Info.textContent = "O que você precisa.";
            secondH1Info.textContent = "Como trabalho";
            h1Banner.textContent = "Inovação começa aqui";
            firstInfo.innerHTML = "Com quase 4 anos de aprendizado, tudo o que faço é com <strong>perfeccionismo</strong> e atenção. Cada linha de código foi feita com carinho e <strong>atenção</strong>. Nada de <strong>código</strong> borrado (também). <strong>Exatamente</strong> o que você <strong>precisa</strong>!";
            secondInfo.innerHTML = "Faço um leve <strong>levantamento</strong> mental do seu <strong>negócio</strong>. Com base neste sigo em frente com um desenho no Figma te apresentando este. Se tudo estiver de <strong>acordo</strong> prossigo pro código.";
            rights.innerHTML = "<strong>Alguns</strong> direitos <strong>reservados</strong>";
            artefact.textContent = "Artefato Final";
            code.textContent = "Código";
            draw.textContent = "Desenho";
            translateDiv.classList.remove('show_translate_bar');
            break;
        default:
            translateDiv.classList.remove('show_translate_bar');
    };
    function barCount() {
        let barHeight = document.querySelector('.bar_count');
        window.addEventListener('scroll', function() {
            let heightScroll = window.scrollY;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (heightScroll / height) * 100;
            barHeight.style.width = `${scrolled}%`;
        });
    };
    barCount();
};
addEventListener('keydown', handleKeyboard);