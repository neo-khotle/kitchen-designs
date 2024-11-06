/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    
    slidesPerView: 3,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // triggers to update the main background
    // when doing the next slide
    swiper.on('slideNextTransitionStart', () => {
        updateMainBackground()
    }),

    //triggers to update the main background
    //when doing the previous slide
    swiper.on('slidePrevTransitionStart', () => {
        updateMainBackground()
    }),

    function updateMainBackground(){
        // Get the currently active slide element
        const activeSlide = document.querySelector('.swiper-slide-active')
        //Get the main container element
        const mainContainer = document.querySelector('.main-slides')
        // update the backgrouhd style of the main container
        // to match the active slide
        mainContainer.style.background = activeSlide.style.background
    }
  }); 
  
  */
/*
  // Initialize Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,  // Corrected typo
    centeredSlides: true,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});

// Bind event listeners to Swiper
swiper.on('slideNextTransitionStart', () => {
    updateMainBackground();
});

swiper.on('slidePrevTransitionStart', () => {
    updateMainBackground();
});

// Function to update the main background
function updateMainBackground() {
    // Get the currently active slide element
    const activeSlide = document.querySelector('.swiper-slide-active');
    // Get the main container element
    const mainContainer = document.querySelector('.main-slides');
    // Update the background style of the main container to match the active slide
    if (activeSlide && mainContainer) {
        mainContainer.style.background = activeSlide.style.background;
    }
}
*/

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true, // Optional: makes slides loop
});

// Event listeners to update the main background
swiper.on('slideNextTransitionStart', updateMainBackground);
console.log("Updating background 1..."); // For debugging;

// Function to update the main background
function updateMainBackground() {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const mainContainer = document.querySelector('.main-slides');
    if (activeSlide && mainContainer) {
        console.log("Updating background..."); // For debugging
        mainContainer.style.background = activeSlide.style.background;
    }
}
