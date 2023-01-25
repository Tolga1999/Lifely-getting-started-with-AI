// buttons
let nextButton = document.querySelector("#next-button");
let previousButton = document.querySelector("#previous-button");

// step containers
let step1Container = document.querySelector(".step-1-container");
let step2Container = document.querySelector(".step-2-container");

// next button
nextButton.addEventListener('click', function () {
    step2Container.classList.add("display-next-container");
    step1Container.classList.add("remove-previous-container");
    // check previous button
    previousButton.classList.remove("disable-button");
    previousButton.disabled = false;

})

// previous button
previousButton.addEventListener('click', function () {
    step2Container.classList.remove("display-next-container");
    step1Container.classList.remove("remove-previous-container");

    // check previous button
    previousButton.classList.add("disable-button");
    previousButton.disabled = true;
})