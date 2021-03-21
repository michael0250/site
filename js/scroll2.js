const menutopico = document.querySelectorAll(".lista a[href^='#']");

function getScrollTopByHref(element){
    const id= element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollPosition(to) {
    smothScrollTo(O, to);
}

function scrollIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) -80;
    scrollPosition(to);
}

menutopico.forEach(intem=>{
    intem.addEventListener('click');
});
/* estou com problemas daqui a diante*/

function smothScrollTo( endX, endY, duration){
    var startX = window.scroll ||
    window.pageXOffset;
    const startY = window.scroll||
    window.pageXOffset; 
    const diistanceX = endX - startX;
    const diistanceY = endY - startY;
    const diistanceTime = new Date().getTime();

    duration =typeof duration !== 'undefined' ?
    duration: 400;}