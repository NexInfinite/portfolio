function scrollToId(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}

function showBackToTop() {
    let backToTop = document.getElementById('back-to-top');
    backToTop.hidden = false;
}

function hideBackToTop() {
    let backToTop = document.getElementById('back-to-top');
    backToTop.hidden = true;
}