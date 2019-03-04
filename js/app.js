'use strict';

// Get the cahced image form the DOM
var catalogue = document.getElementById('catalogue');

// Make an array to capture images
var fullCatalogue = [];

// Create a constructor function for catalogue photos

funciton BusMall(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views=0;
  this.clicks=0;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);
}

//Run the constructor function with our catalogue

new BusMall('img');

function showRandomItems(){
  // Make a fn that will generate 3 items from our list at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

  var random=Math.floor(Math.random()*fullCatalogue.length);

  // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

  catalogue.src=fullCatalogue[random].filepath;
  catalogue.alt=fullCatalogue[random].name;
  catalogue.title=fullCatalogue[random].name;

  // Now that the image is comign into view we need ot count the views

  fullCatalogue[random].views++;

  console.log('current item is ', fullCatalogue[random]);
}

showRandomItems();

catalogue.addEventListener('click', theClickHandler);

function theClickHandler(event) {
  console.log('target', event.target)
  showRandomItems();
}

