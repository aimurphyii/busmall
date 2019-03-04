'use strict';

// Get the cahced image form the DOM
var catalogue = document.getElementById('catalogue');

// Make an array to capture images
var fullCatalogue = [];

// Create a constructor function for catalogue photos. This is my image maker. It will stock my array.

function BusMallProduct(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views=0;
  this.clicks=0;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);

}

//Run the constructor function with our catalogue, so we have a full catalogue of items to run through. Now these guys are in my array, the bus mall's catalogue.

var bag = new BusMallProduct('bag');
var banana = new BusMallProduct('banana');
var bathroom = new BusMallProduct('bathroom');
// new BusMallProduct('boots');
// new BusMallProduct('breakfast');
// new BusMallProduct('bubblegum');
// new BusMallProduct('chair');
// new BusMallProduct('cthulu');





function showRandomItem (){
  // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

  var random=Math.floor(Math.random()*fullCatalogue.length);
  

  // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

  catalogue.src=fullCatalogue[random].filepath;
  catalogue.alt=fullCatalogue[random].name;
  catalogue.title=fullCatalogue[random].name;

  // Now that the image is coming into view we need to count the views

  fullCatalogue[random].views++;
  console.log('current item is ', fullCatalogue[random]);


  catalogue.addEventListener('click', theClickHandler);
  fullCatalogue[random].clicks++;

}

showRandomItem();


catalogue.addEventListener('click', theClickHandler);

function theClickHandler(event) {
  console.log('target', event.target);
  showRandomItem();
  }

