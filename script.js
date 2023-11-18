document.getElementById('magicButton').addEventListener('click', function() {
    document.getElementById('magicText').innerHTML = ' Abra-cadabra, alakazam! ';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('colorChangeButton').addEventListener('click', function() {
        // Change the font color of the paragraph
        document.getElementById('colorChangeText').style.color = 'red'; // Change 'blue' to any color you prefer
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('imageRevealButton').addEventListener('click', function() {
        // Replace the paragraph content with an image
        var img = document.createElement('img');
        img.src = 'cool-tada-magic-trick-comic-style-magicians-gift-womens-t-shirt.jpg'; // Replace with the actual path to your image
        img.alt = 'Magical Image'; // Alternative text for the image

        var container = document.getElementById('imageRevealText');
        container.innerHTML = '';
        container.appendChild(img);
    });
});