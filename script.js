// Image URLs
const imageUrls = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
];

// Function to dynamically create image cards
function createImageCards() {
    const row = $('.row');
    imageUrls.forEach(url => {
        const imageCard = $('<div>').addClass('col-md-4 image-card');
        const image = $('<img>').attr('src', url);
        const iconOverlay = $('<div>').addClass('icon-overlay');
        const icon = $('<img>').attr('src', 'icon.png'); // Replace 'icon.png' with your icon image
        iconOverlay.append(icon);
        imageCard.append(image, iconOverlay);
        row.append(imageCard);
    });
}

// Document ready function
$(document).ready(function () {
    createImageCards();
});
