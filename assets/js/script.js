function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        let icon = document.querySelector('.icon');
        if (icon) {
            icon.src = "/assets/images/menu.png";
        }
    } else {
        menuMobile.classList.add('open');
        let icon = document.querySelector('.icon');
        if (icon) {
            icon.src = "/assets/images/menu.png";
        }
    }
}