window.addEventListener('load', (event) => {
    animator();
    setInterval(createRandomText, 3000);
});

function updateImageSources(count) {
    const maskedImages = document.querySelectorAll('.masked_imgage');

    maskedImages.forEach((masked, index) => {
        const newSrc = index === 0 ? `./assets/images/NFT/${count}.png` : `./assets/images/NFT/${89 - count}.png`;
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
    const animationContainer2 = document.getElementById('animationContainer_2');
    const logoHeader = document.querySelector('.header_logo');
    const buttonHeader = document.querySelector('.header_function button');
    const logoHeaderRect = logoHeader.getBoundingClientRect();
    const buttonHeaderRect = buttonHeader.getBoundingClientRect();

    for (let i = 0; i < 4; i++) {
        const existingTexts = document.querySelectorAll('.animated_text');
        console.log(existingTexts);
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







