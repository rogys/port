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
    let mainBanner = document.querySelector('.contact_me');
    let labelSubject = document.querySelector('.subject');
    let labelMensage = document.querySelector('.mensage');
    let button = document.querySelector('.send_mensage');
    let eventKey = event.key;
    switch (eventKey) {
        case "e":
            mainBanner.textContent = "Contact me:";
            labelMensage.textContent = "Mensage";
            labelSubject.textContent = "Subject";
            button.textContent = "Send!";
            translateDiv.classList.remove('show_translate_bar');
            break;
        case "p":
            mainBanner.textContent = "Entre em contato comigo:";
            labelMensage.textContent = "Mensagem";
            labelSubject.textContent = "Assunto";
            button.textContent = "Enviar!";
            translateDiv.classList.remove('show_translate_bar');
            break;
        default:
            translateDiv.classList.remove('show_translate_bar');
    };
};
addEventListener('keydown', handleKeyboard);