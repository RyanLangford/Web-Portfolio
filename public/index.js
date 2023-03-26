if (typeof window === "object") {
    // code is running in a browser environment
    console.log("browser")
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
        console.log("slide next");
        const slideWidth = slide.clientWidth;
        console.log('scrolling ' + slideWidth + ' pixels right')
        slidesContainer.scrollLeft += slideWidth;
    });
    prevButton.addEventListener("click", () => {
        console.log("slide prev");
        const slideWidth = slide.clientWidth;
        console.log('scrolling ' + slideWidth + ' pixels left')
        slidesContainer.scrollLeft -= slideWidth;
    });
} else {
    // code is running in a non-browser environment
    console.log("non-browser")
}