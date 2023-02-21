


/* about me picture rotation 
referred back to the corgi carousel */
let currentImageIndex = 0;
let previousImageIndex = 0;

const images = document.getElementsByClassName('images');

images[currentImageIndex].style.display = 'block';


const next = document.querySelector('#aboutMeButton') 
next.addEventListener('click', () => {
    previousImageIndex = currentImageIndex
    //using ++ makes it go to the next page
    currentImageIndex++
    images[previousImageIndex].style.display = 'none';
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    images[currentImageIndex].style.display = 'block'
})

const previous = document.querySelector('#previousImage')
previous.addEventListener('click', () => {
    previousImageIndex = currentImageIndex
    // using -- makes it go back a image
    currentImageIndex--
    images[previousImageIndex].style.display = 'none'
    if (currentImageIndex < 0) {
        currentImageIndex = images.length -1;
    }
    images[currentImageIndex].style.display = 'block'
})

/*--------------------------------------------------------------------------------
           POP UP MESSAGE CODE WILL GO HERE   
           referred back to the Modals lesson  */

window.onload = function() {
    let popUpMessage = document.getElementById('popUpMessage');
    let closeEnjoy = document.getElementById('popUpMessageButton')

    popUpMessage.style.display = 'block';

    closeEnjoy.onclick = function () {
        popUpMessage.style.display = 'none';

        window.onclick = function(event) {
            if (event.target === popUpMessage) {
                popUpMessage.style.display = 'none';
            }
        }
    }
};

