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
            } else {
                switchlogo.src = './assets/ic4a.png'
                switchlogo.classList.remove('darkmode')
                switchlogo.classList.add('lightmode')
                document.querySelectorAll('.inner').forEach(element => {
                    element.style.backgroundColor = '#E9F1F5'
                })
            }
        })
    }
}

var links = [document.querySelector('#link1'), document.querySelector('#link2'), document.querySelector('#link3'), document.querySelector('#link4')]

// let observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry, i) => {
//         if (entry.isIntersecting) {
//             links[i].style.color = '#b10404'
//         } else {
//             links[i].style.color = ''
//         }
//     });
// }, { threshold: [0.1] });


var idColor = () => {

    var screens = [document.querySelector('#one'), document.querySelector('#two'), document.querySelector('#three'), document.querySelector('#four')]

    // observer.observe(screens)
}


var fadeIn = () => {
    const elementsToLoadIn = new Set([...document.querySelectorAll(".whole"), ...document.querySelectorAll("#title")])
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


document.addEventListener("DOMContentLoaded", function () {
    modeswitch()
    idColor()
    fadeIn()
})