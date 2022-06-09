const efeitoRipple = document.querySelector('.Meu-site');

function mousePositionCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty("--x", posX + "px");
    element.style.setProperty("--y", posY + "px");

}

efeitoRipple.addEventListener('click', (e) => {
    mousePositionCustomProp(e, efeitoRipple);
    efeitoRipple.classList.add("pulse");
    efeitoRipple.addEventListener('animationend', () =>{
        efeitoRipple.classList.remove('pulse');
    },
    { once: true});
}) 

