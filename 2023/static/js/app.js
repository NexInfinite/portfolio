function stopScrolling() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function checkIfPhone() {
    let isPhone = false;
    if (window.innerWidth <= 768) {
        isPhone = true;
    }
    return isPhone;
}