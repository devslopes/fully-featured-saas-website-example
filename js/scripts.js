let isMenuOn = false;

// alert('Browser ww = ' + window.innerWidth);

window.onscroll = () => {
    const stickyHeader = document.getElementById('sticky-header');
    const backToTopButton = document.getElementById('backToTopButton');
    const imageMovable = document.getElementById('img-movable');
    const pricingInfo = document.querySelectorAll('.pricing-info');
    const headerExtender = document.getElementById('header-extender-on-roll-out');
    const topLinkHome = document.getElementById('top-link-home');
    const topLinkFeatures = document.getElementById('top-link-features');
    const topLinkLearn = document.getElementById('top-link-learn');
    const topLinkPricing = document.getElementById('top-link-pricing');
    const topLinkHireUs = document.getElementById('top-link-hire-us');
    let windowWidth = window.innerWidth;
    let topOffset = window.pageYOffset || document.body.scrollTop;

    if (windowWidth >= 1024) {
        if (topOffset >= 800) {
            imageMovable.classList.add("appear-on-scroll");
        }
        if (topOffset >= 2900 && !pricingInfo[0].classList.contains('animated-pricing')) {
            pricingInfo.forEach(item => {
                item.classList.add("animated-pricing");
            })
        }
    }

    if (topOffset >= 600 && !isMenuOn) {
        stickyHeader.classList.add("main-grid-sticky-header");
        headerExtender.classList.add("header-extender");
        stickyHeader.classList.remove("header-close");
        backToTopButton.classList.remove('invisible');
        backToTopButton.classList.remove('back-to-top-button-close');
        backToTopButton.classList.add('back-to-top-button-open');
    } else if ((topOffset < 600) && (scroll >= 200)) {
        stickyHeader.classList.add("header-close");
    } else {
        stickyHeader.classList.remove("main-grid-sticky-header");
        headerExtender.classList.remove("header-extender");
        stickyHeader.classList.remove("header-close");
        backToTopButton.classList.remove('back-to-top-button-open');
        if (!(backToTopButton.classList.contains('invisible'))) {
            backToTopButton.classList.add('back-to-top-button-close');
        }
    }

    if (windowWidth >= 720) {
        if (topOffset >= 600) {
            topLinkHome.classList.remove("active");
        } else {
            topLinkHome.classList.add("active");
        }

        if ((topOffset > 599) && (topOffset <= 1700)) {
            topLinkFeatures.classList.add("active");
        } else {
            topLinkFeatures.classList.remove("active");
        }

        if ((topOffset > 1699) && (topOffset <= 3370)) {
            topLinkLearn.classList.add("active");
        } else {
            topLinkLearn.classList.remove("active");
        }

        if ((topOffset > 3369) && (topOffset <= 4020)) {
            topLinkPricing.classList.add("active");
        } else {
            topLinkPricing.classList.remove("active");
        }
        if (topOffset > 4020) {
            topLinkHireUs.classList.add("active");
        } else {
            topLinkHireUs.classList.remove("active");
        }
    } else if (windowWidth <= 719) {
        addTopMenuLinksAction()
    }
}

const topMenu = document.getElementById('mobileTopMenu');
const links = document.querySelectorAll('[data-link]');
const header = document.getElementById('sticky-header');

function addTopMenuLinksAction() {
    links.forEach( item => {
        item.addEventListener('click', () => {
            topMenu.style.display = 'none';
            trigram.innerHTML = '<i class="fas fa-bars"></i>';
            header.classList.remove('main-grid-sticky-header-trigram');
            isMenuOn = false;
        })
    })
}

const trigram = document.getElementById('trigram');

trigram.addEventListener('click', () => {
    if (topMenu.style.display !== 'flex') {
        topMenu.style.display = 'flex';
        trigram.innerHTML = '<i class="fas fa-times"></i>';
        header.classList.add('main-grid-sticky-header-trigram');
        isMenuOn = true;
    } else {
        topMenu.style.display = 'none';
        trigram.innerHTML = '<i class="fas fa-bars"></i>';
        header.classList.remove('main-grid-sticky-header-trigram');
        isMenuOn = false;
    }
})

