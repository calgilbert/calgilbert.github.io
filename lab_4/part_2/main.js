/*
Name: Calvin Gilbert
File: index.html
Date: 03 April 2024
Assignment 4: Part 2: Image Gallery
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alttext = {
    'pic1.jpg' : 'Closeup of a human eye', 'pic2.jpg' : 'Earth', 'pic3.jpg' : 'Flowers', 'pic4.jpg' : 'Hieroglyphs', 'pic5.jpg' : 'Moth'
    }

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', `alttext/${image}`);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', event => {
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
    })

}

/* Wiring up the Darken/Lighten button */
