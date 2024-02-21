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
        threshold: 0.3,
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


var fadeIn = () => {
    const elementsToLoadIn = new Set([...document.querySelectorAll(".whole"), ...document.querySelectorAll("#title"), ...document.querySelectorAll(".buttonhold")])
    elementsToLoadIn.forEach((el) => {
        el.classList.add('loadin');
    });

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

const triggerElement = document.getElementById('wh2')
const targetElements = document.querySelectorAll('.inner')

const topbar = document.querySelector('.navhold')
const bottombar = document.querySelector('.foothold')

function checkTriggerElementHeight() {

    if (triggerElement.clientHeight + topbar.clientHeight + bottombar.clientHeight > window.innerHeight) {
        targetElements.forEach(element => element.style.scrollSnapAlign = '');
    } else {
        targetElements.forEach(element => element.style.scrollSnapAlign = 'start');
    }
}

function checkAfterContentLoaded() {
    checkTriggerElementHeight();
    window.removeEventListener('DOMContentLoaded', checkAfterContentLoaded);
    window.removeEventListener('load', checkAfterContentLoaded);
}

window.addEventListener('DOMContentLoaded', checkAfterContentLoaded);

window.addEventListener('load', checkAfterContentLoaded);

window.addEventListener('resize', checkTriggerElementHeight);


// document.addEventListener("DOMContentLoaded", function () {
modeswitch()
idColor()
fadeIn()
// })