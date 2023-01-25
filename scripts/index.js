// buttons
let previousButton = document.querySelector("#previous-button");
let nextButton = document.querySelector("#next-button");

// step containers
let step1Container = document.querySelector(".step-1-container");
let step2Container = document.querySelector(".step-2-container");
let step3Container = document.querySelector(".step-3-container");
let step4Container = document.querySelector(".step-4-container");
let step5Container = document.querySelector(".step-5-container");

// times buttons clicked
let nextButtonClicked = 0

// previous button
previousButton.addEventListener('click', function () {
    nextButtonClicked--;

    if (nextButtonClicked === 0) {
        step1Container.classList.remove("left-position-container");
        step2Container.classList.remove("normal-position-container");

        // check previous button
        previousButton.classList.add("disable-button");
        previousButton.disabled = true;
    }

    if (nextButtonClicked === 1) {
        step2Container.classList.remove("left-position-container");
        step3Container.classList.add("right-position-container");
    }

    if (nextButtonClicked === 2) {
        step3Container.classList.remove("left-position-container");
        step4Container.classList.add("right-position-container");
    }

    if (nextButtonClicked === 3) {
        step4Container.classList.remove("left-position-container");
        step5Container.classList.add("right-position-container");

        // check previous button
        nextButton.classList.remove("disable-button");
        nextButton.disabled = false;
    }
})

// next button
nextButton.addEventListener('click', function () {
    nextButtonClicked++;

    step1Container.classList.add("left-position-container");
    step2Container.classList.add("normal-position-container");

    // check previous button
    previousButton.classList.remove("disable-button");
    previousButton.disabled = false;


    if (nextButtonClicked === 2) {
        step2Container.classList.add("left-position-container");
        step3Container.classList.add("normal-position-container")
        step3Container.classList.remove("right-position-container")
    }

    if (nextButtonClicked === 3) {
        step3Container.classList.add("left-position-container");
        step4Container.classList.add("normal-position-container")
        step4Container.classList.remove("right-position-container")
    }

    if (nextButtonClicked === 4) {
        step4Container.classList.add("left-position-container");
        step5Container.classList.add("normal-position-container")
        step5Container.classList.remove("right-position-container")

        // check previous button
        nextButton.classList.add("disable-button");
        nextButton.disabled = true;
    }
})