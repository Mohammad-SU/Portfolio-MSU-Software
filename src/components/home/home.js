/*
- favicon SVG?
- Change demo links to google drive/dropbox, embed videos?
- Netlify custom success page?
*/

function homeFadeIn() {
    if ($(window).scrollTop() < 500 || viewportVis($("#home"))) {
        $("#particles-home, #home-heading__line-1, #home-heading__line-2, #home-cta").addClass("home__fade-in")
    }
}
$(window).scroll(homeFadeIn)
homeFadeIn()

function windowResizeHome() {
    if ($(window).width() < 610) {
        $("#home-heading__greeting").text("Hi!")
    }
    else {
        $("#home-heading__greeting").text("Welcome!")
    }

    let homeHeadingFontSize = $("#home-heading__line-2").css("font-size")
    let homeCtaScale = parseFloat(homeHeadingFontSize)/100*1.8 // Make home-cta smaller than home heading
    if ($(window).width() <= 425) {
        homeCtaScale = parseFloat(homeHeadingFontSize)/100*2
    }
    document.querySelector("#home-cta").style.scale = String(homeCtaScale)

    let homeParticleNum = 105
    let homeParticleDistance = 115

    switch (true) {
        case $(window).width() <= 1440 && $(window).width() > 1024:
            homeParticleNum = 105
            homeParticleDistance = 115
            break
        case $(window).width() <= 1024 && $(window).width() > 768:
            homeParticleNum = 90
            homeParticleDistance = 95
            break
        case $(window).width() <= 768 && $(window).width() > 580:
            homeParticleNum = 80
            homeParticleDistance = 90
            break
        case $(window).width() <= 580 && $(window).width() > 430:
            homeParticleNum = 65
            homeParticleDistance = 78
            break
        case $(window).width() <= 430 && $(window).width() > 375:
            homeParticleNum = 64
            homeParticleDistance = 75
            break
        case $(window).width() <= 375 && $(window).width() > 320:
            homeParticleNum = 58
            homeParticleDistance = 78
            break
        case $(window).width() <= 320:
            homeParticleNum = 60
            homeParticleDistance = 75
            break
    }

    tsParticles.load("particles-home", {
        fpsLimit: 60,
        particles: {
            number: {
                value: homeParticleNum
            },
            color: {
                value: "#00ff00"
            },
            size: {
                value: 0
            },
            line_linked: {
                enable: true,
                opacity: 1,
                distance: homeParticleDistance,
                color: "#00ff00",
                width: 1,
                triangles: {
                    opacity: 0.3,
                    enable: true,
                    color: "#00ff00"
                }
            },
            move: {
                enable: true,
                speed: 4,
                random: false,
                straight: false
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: false
                },
                resize: true
            },
            modes: {
                repulse: {
                    distance: 200,
                },
            }
        },
        detectRetina: false,
    })
}
windowResizeHome() // Called on resize in global.js

const particles_home = tsParticles.domItem(1)

$(window).scroll(function() {
    if ($(window).scrollTop() > $('#home-cont').height()) {
        particles_home.pause()
    }
    else {
        particles_home.play()
    }
})

$("#home-cta, #nav-item__about").on("click", function() {
    setTimeout(function() { // Causes site to scroll down from "about" heading for better view of "about" content if conditions filled
        if ($(window).scrollTop() < $('#about').offset().top + rem(6.25) && $(window).scrollTop() > $('#about').offset().top - rem(6.25)) {
            var scrollPosition = $("#about").offset().top + rem(9.125)
            window.scrollTo({top: scrollPosition, behavior: 'smooth'})    
        }
    }, 900)
})

