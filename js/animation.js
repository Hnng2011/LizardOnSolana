window.addEventListener('load', (event) => {
    animator();
    setInterval(createRandomText, 3000);
});

function updateImageSources(count) {
    console.log('count', count);
    const maskedImages = document.querySelectorAll('.masked_imgage');

    maskedImages.forEach((masked, index) => {
        const newSrc = index === 0 ? `./assets/images/NFT/${count}.png` : `./assets/images/NFT/${89 - count}.png`;
        console.log(`Setting src for maskedImages[${index}] to ${newSrc}`);
        masked.src = newSrc;
    });

    return count === 89 ? 0 : count + 1;
}

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
    mainHeading.querySelector('.header_describe').classList.add('active');
    mainHeading.querySelectorAll('.header_function button').forEach((button, index) => {
        button.classList.add('active');
    });

    setInterval(() => {
        count = updateImageSources(count);
    }, 1000);

    window.addEventListener('scroll', function () {
        const networkHero = document.querySelector('.network_hero');
        if (isElementInViewport(networkHero)) {
            networkHero.querySelectorAll('h1, h2,.list img').forEach(element => {
                element.classList.add('active');
            });
            window.removeEventListener('scroll', this);
        }
    });
}

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomText() {
    const textArray = ['Buy LOS!!!', 'To Da Moonnnn !!!!', 'Welcome to LOS!!', 'Mintingggg'];
    const animationContainer = document.getElementById('animationContainer');

    const numberOfTexts = getRandomValue(1, 3);

    for (let i = 0; i < numberOfTexts; i++) {
        const randomText = document.createElement('div');
        randomText.classList.add('animated-text');
        randomText.textContent = textArray[getRandomValue(0, textArray.length - 1)];

        const randomTop = getRandomValue(0, window.innerHeight);
        const randomLeft = getRandomValue(0, window.innerWidth);
        const randomRotation = getRandomValue(0, 45);

        randomText.style.top = `${randomTop}px`;
        randomText.style.left = `${randomLeft}px`;
        randomText.style.rotate = `${getRandomValue(0, 1) === 0 ? `-${randomRotation}` : `+${randomRotation}`}deg`;

        animationContainer.appendChild(randomText);

        randomText.addEventListener('animationend', () => {
            animationContainer.removeChild(randomText);
        });
    }
}





