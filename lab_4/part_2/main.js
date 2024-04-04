/*
Name: Calvin Gilbert
File: index.html
Date: 29 March 2024
Assignment 4: Part 1: Silly Story Generator
*/
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alttext = {
'pic1.jpg' : 'Eye', 'pic2.jpg' : 'Earth', 'pic3.jpg' : 'Flowers', 'pic4.jpg' : 'Hieroglyphs', 'pic5.jpg' : 'Moth'
}

/* Declaring the alternative text for each image file */

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
