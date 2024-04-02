var modeswitch = () => {

    let switchlogo = document.querySelector('.modeswitch')

    if (switchlogo != null) {
        switchlogo.addEventListener('click', () => {
            if (switchlogo.classList.contains('lightmode')) {
                switchlogo.src = './assets/ic4b.png'
                switchlogo.classList.add('darkmode')
                switchlogo.classList.remove('lightmode')
                document.querySelectorAll('.inner').forEach(element => {
                    element.style.backgroundColor = '#262C2E'
                })
                localStorage.setItem('mode', 'dark')
            } else {
                switchlogo.src = './assets/ic4a.png'
                switchlogo.classList.remove('darkmode')
                switchlogo.classList.add('lightmode')
                document.querySelectorAll('.inner').forEach(element => {
                    element.style.backgroundColor = '#E9F1F5'
                })
                localStorage.setItem('mode', 'light')
            }
        })

        if (localStorage.getItem('mode') !== 'light') {
            switchlogo.click();
        }
    }
}

var idColor = () => {

    const screens = [document.querySelector('#title'), document.querySelector('#wh2'), document.querySelector('#wh3'), document.querySelector('#wh4')]
    const links = { "title": document.querySelector('#link1'), "wh2": document.querySelector('#link2'), "wh3": document.querySelector('#link3'), "wh4": document.querySelector('#link4') }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                links[entry.target.id].classList.add('activecolor')
            }
        });
    }

    function observerCallbackOut(entries) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                links[entry.target.id].classList.remove('activecolor')
            }
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const observer2 = new IntersectionObserver(observerCallbackOut, observerOptions);

    screens.forEach((el) => observer.observe(el));
    screens.forEach((el) => observer2.observe(el));
}

function isMobileBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}


var fadeIn = () => {
    const elementsToLoadIn = new Set([...document.querySelectorAll(".whole"), ...document.querySelectorAll("#title"), ...document.querySelectorAll(".buttonhold")])


    // if (isMobileBrowser()) {
    //     elementsToLoadIn.forEach((el) => {
    //         el.classList.add('loadin loaded');
    //     });
    // } else {
        elementsToLoadIn.forEach((el) => {
            el.classList.add('loadin');
        });
    // }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    };

    function observerCallback(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }

    function observerCallbackOut(entries) {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('loaded');
            }
        });
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const observer2 = new IntersectionObserver(observerCallbackOut, observerOptions);

    elementsToLoadIn.forEach((el) => observer.observe(el));
    elementsToLoadIn.forEach((el) => observer2.observe(el));
}

const triggerElements = document.querySelectorAll('.whole')
const targetElements1 = document.querySelectorAll('.inner')
const targetElements2 = document.querySelectorAll('.outer')
const targetElements3 = document.querySelectorAll('.page')

const topbar = document.querySelector('.navhold')
const bottombar = document.querySelector('.foothold')

function triggerElementHeight() {

    let maxheight = 0
    triggerElements.forEach(element => maxheight = Math.max(maxheight, element.clientHeight))

    if (maxheight + topbar.clientHeight + bottombar.clientHeight > window.innerHeight) {
        targetElements1.forEach(element => {
            element.style.scrollSnapAlign = '';
            element.style.minHeight = '';
            element.style.width = '';
        });
        targetElements2.forEach(element => {
            element.style.minHeight = '';
            element.style.width = '';
        });
        targetElements3.forEach(element => {
            element.style.marginTop = '64px';
        });
    } else {
        targetElements1.forEach(element => {
            element.style.scrollSnapAlign = 'start';
            element.style.minHeight = '100dvh';
            element.style.width = '100%';
        });
        targetElements2.forEach(element => {
            element.style.height = '100dvh';
            element.style.width = '100%';
        });
        targetElements3.forEach(element => {
            element.style.marginTop = '';
        });
    }
}

function afterContentLoaded() {
    checkTriggerElementHeight();
    window.removeEventListener('DOMContentLoaded', checkAfterContentLoaded);
    window.removeEventListener('load', checkAfterContentLoaded);
}

function checkTriggerElementHeight() {
    // Resizing bus
    triggerElementHeight()
}

function checkAfterContentLoaded() {
    // Resizing bus
    afterContentLoaded()
}

window.addEventListener('DOMContentLoaded', checkAfterContentLoaded);

window.addEventListener('load', checkAfterContentLoaded);

window.addEventListener('resize', checkTriggerElementHeight);


modeswitch()
idColor()
fadeIn()
