function scrollToId(id) {
    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}