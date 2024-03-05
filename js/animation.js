window.addEventListener('load', (event) => {
    animator();
    setInterval(createRandomText, 3000);

    const backgroundImages = document.querySelectorAll('.background_imgage');
    backgroundImages.forEach(function (image) {
        moveElementRandomly(image);
        console.log(image);
        setInterval(function () {
            moveElementRandomly(image);
        }, 10000);
    });
});


function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
        rect.top <= windowHeight / 1.3 &&
        rect.bottom >= 0
    );
}

function animator() {
    let count = 0;
    const mainHeading = document.querySelector('.main_header');
    mainHeading.querySelector('.header_logo').classList.add('active');
    mainHeading.querySelectorAll('.header_function button').forEach((button, index) => {
        button.classList.add('active');
    });

    const networkHero = document.querySelector('.network_hero');
    if (isElementInViewport(networkHero)) {
        networkHero.querySelectorAll('h2, h3,.list img').forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        window.addEventListener('scroll', function () {
            if (isElementInViewport(networkHero)) {
                networkHero.querySelectorAll('h2, h3,.list img').forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    };

    const roadmapHero = document.querySelector('.roadmap_hero');
    if (isElementInViewport(roadmapHero)) {
        roadmapHero.querySelectorAll('.roadmap_item , .roadmap_head').forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        window.addEventListener('scroll', function () {
            if (isElementInViewport(roadmapHero)) {
                roadmapHero.querySelectorAll('.roadmap_head, .roadmap_item').forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    };

    const aboutHero = document.querySelector('.about_hero');
    if (isElementInViewport(aboutHero)) {
        aboutHero.querySelectorAll('p , h2 , img').forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        window.addEventListener('scroll', function () {
            if (isElementInViewport(aboutHero)) {
                aboutHero.querySelectorAll('p , h2 , img').forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    };

    const tokennomicsHero = document.querySelector('.tokennomics_hero');
    if (isElementInViewport(tokennomicsHero)) {
        tokennomicsHero.querySelectorAll('h2 , .tokenomics_item , .chart_item').forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        window.addEventListener('scroll', function () {
            if (isElementInViewport(tokennomicsHero)) {
                tokennomicsHero.querySelectorAll('h2 , .tokenomics_item , .chart_item').forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    };

    const socialHero = document.querySelector('.social_hero');
    if (isElementInViewport(socialHero)) {
        socialHero.querySelectorAll('h2 , h3 , button , img').forEach(element => {
            element.classList.add('active');
        });
    }
    else {
        window.addEventListener('scroll', function () {
            if (isElementInViewport(socialHero)) {
                socialHero.querySelectorAll('h2 , h3 , button , img').forEach(element => {
                    element.classList.add('active');
                });
            }
        });
    };
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomText() {
    const textArray = ['Buy LOS!!!', 'To Da Moonnnn !!!!', 'Welcome to LOS!!', 'Mintingggg'];
    const animationContainer = document.getElementById('animationContainer');
    const animationContainer2 = document.getElementById('animationContainer_2');
    const logoHeader = document.querySelector('.header_logo');
    const buttonHeader = document.querySelector('.header_function button');
    const logoHeaderRect = logoHeader.getBoundingClientRect();
    const buttonHeaderRect = buttonHeader.getBoundingClientRect();

    for (let i = 0; i < 3; i++) {
        const existingTexts = document.querySelectorAll('.animated_text');
        const randomText = document.createElement('div');
        randomText.classList.add('animated_text');
        randomText.textContent = textArray[getRandomValue(0, textArray.length - 1)];

        let isOverlapping = false;
        do {
            isOverlapping = false;
            const randomTop = getRandomValue(0, window.innerHeight);
            const randomLeft = getRandomValue(0, window.innerWidth);
            const randomRotation = getRandomValue(0, 45);

            randomText.style.top = `${randomTop}px`;
            randomText.style.left = `${randomLeft}px`;
            randomText.style.rotate = `${getRandomValue(0, 1) === 0 ? `-${randomRotation}` : `+${randomRotation}`}deg`;
            animationContainer2.appendChild(randomText);

            const randomRect = randomText.getBoundingClientRect();


            if (
                randomRect.top <= buttonHeaderRect.bottom &&
                randomRect.bottom >= logoHeaderRect.top &&
                randomRect.left <= logoHeaderRect.right &&
                randomRect.right >= logoHeaderRect.left
            ) {
                isOverlapping = true;
            }

            existingTexts.forEach(existingText => {
                const existingRect = existingText.getBoundingClientRect();

                if (
                    randomRect.top <= existingRect.bottom &&
                    randomRect.bottom >= existingRect.top &&
                    randomRect.left <= existingRect.right &&
                    randomRect.right >= existingRect.left
                ) {
                    isOverlapping = true;
                }
            });

        } while (isOverlapping);

        animationContainer2.removeChild(randomText)
        animationContainer.appendChild(randomText);
        randomText.addEventListener('animationend', () => {
            animationContainer.removeChild(randomText);
        });
    }
}


function moveElementRandomly(element) {
    const topValue = getRandomValue(0, 90) + '%';
    const leftValue = getRandomValue(0, 100) + '%';

    element.style.top = topValue;
    element.style.left = leftValue;
}

function scrollContainer(direction) {
    const scrollContainer = document.querySelector('.roadmap_list');
    const leftButton = document.querySelectorAll('.button_scroll_roadmap button')[0];
    const rightButton = document.querySelectorAll('.button_scroll_roadmap button')[1];

    if (direction === 'left' && scrollContainer.scrollLeft > 0) {
        scrollContainer.scrollLeft -= 300;
        rightButton.style.opacity = '1';
        rightButton.style.pointerEvents = 'auto';
        leftButton.style.opacity = '0';
        leftButton.style.pointerEvents = 'none';
    } else if (direction === 'right' && scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft += 300;
        leftButton.style.opacity = '1';
        leftButton.style.pointerEvents = 'auto';
        rightButton.style.opacity = '0';
        rightButton.style.pointerEvents = 'none';
    }
}

