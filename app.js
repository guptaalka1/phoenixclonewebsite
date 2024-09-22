import { TechImages } from './TechImages.js';
/**
 * 1. remove active class from currentActiveButton
 * 2. update the currentActiveButton with new view
 * 3. add active class to the new currentActiveButton
 * 4. get the images for the currentActiveButton
 * 5. create the tech cards(string ke html)
 * 6. update the displayImagesContainer with the new tech cards
 */

const displayImagesContainer = document.getElementById('display-window');
let currentActiveButton = null;
const updateView = (view) =>{
    if (currentActiveButton === view) return;
    currentActiveButton !== view;
    if (currentActiveButton)
        document.getElementById(currentActiveButton).classList.remove('active-tech-button');
    document.getElementById(view).classList.add('active-tech-button');
    currentActiveButton = view;
    const techImages = TechImages[currentActiveButton];
    let techCards = '';
    techImages.forEach((techImageItem) => {
        techCards += `
                <div class="tech-card">
                    <div class="tect-image-container">
                        <img src="${techImageItem.src}" alt="${techImageItem.alt}"  />
                    </div>
                    <h3 class="tech-title">
                        ${techImageItem.title}
                    </h3>
                </div>

        `;
    })
    displayImagesContainer.innerHTML = techCards;
}

updateView('low-code');
const techButtons = document.querySelectorAll('.technology-btn');
techButtons.forEach((techButton) => {
    techButton.addEventListener('click', (event) => {
        updateView(event.target.id);
    });
});





