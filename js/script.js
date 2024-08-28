gsap.from('.loader h1', 1, { // Reduced duration
    x: 800,
    ease: "power2.out"
}, 'start');
gsap.from('.loader h2', 1, { // Reduced duration
    x: -800,
    ease: "power2.out"
}, 'start');
gsap.from('.logo span', 0.5, { // Reduced duration
    delay: 1.5, // Reduced delay
    scale: 0,
    ease: 'ease.out'
});
gsap.from('nav ul li', 0.5, { // Reduced duration
    delay: 1.5, // Reduced delay
    y: -250,
    ease: Expo.easeOut,
    stagger: 0.2 // Reduced stagger
});
gsap.from('.h1 h1', 1, { // Reduced duration
    delay: 2.5, // Reduced delay
    y: 250,
    skewY: 20,
    stagger: 0.4 // Reduced stagger
});
gsap.from('.content p', 0.5, { // Reduced duration
    delay: 2.8, // Reduced delay
    y: -30,
    opacity: 0
});
gsap.from('.content > a', 0.5, { // Reduced duration
    ease: Expo.easeOut,
    delay: 3,
    x: innerWidth * -1,
    opacity: 0
});
gsap.from('.social ul li a', 0.5, { // Reduced duration
    ease: Expo.easeOut,
    delay: 3.2, // Reduced delay
    y: 250,
    opacity: 0,
    stagger: 0.3 // Reduced stagger
});
gsap.from('.one', 0.5, { // Reduced duration
    delay: 3.5, // Reduced delay
    x: innerWidth * 1
});
gsap.from('.two', 0.5, { // Reduced duration
    delay: 3.6, // Reduced delay
    y: -100,
    opacity: 0
});
gsap.from('.three', 0.5, { // Reduced duration
    delay: 3.7, // Reduced delay
    y: 100,
    opacity: 0
});
gsap.to('.one .bg', 0.5, { // Reduced duration
    ease: Expo.easeOut,
    delay: 4,
    height: '0%'
});
gsap.from('.one img', 0.5, { // Reduced duration
    delay: 4.2, // Reduced delay
    scale: 1.5
});
gsap.to('.two .bg2', 0.5, { // Reduced duration
    ease: Expo.easeOut,
    delay: 4.4, // Reduced delay
    height: '0%'
});
gsap.from('.two img', 0.5, { // Reduced duration
    delay: 4.6, // Reduced delay
    scale: 1.5
});
gsap.to('.three .bg3', 0.5, { // Reduced duration
    ease: Expo.easeOut,
    delay: 4.8, // Reduced delay
    height: '0%'
});
gsap.from('.three img', 0.5, { // Reduced duration
    delay: 5, // Reduced delay
    scale: 1.5
});
