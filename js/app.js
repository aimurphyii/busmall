'use strict';

// Get the cahced image form the DOM
var catalogue1 = document.getElementById('catalogue1');
var catalogue2 = document.getElementById('catalogue2');
var catalogue3 = document.getElementById('catalogue3');

// This is a starting array, that will get updated with each iteration
var displayed = [
  catalogue1,
  catalogue2,
  catalogue3,
]

// Make an array to capture the entire pool of images
var fullCatalogue = [];

// To control the duplication assign the original to compare against, and then reassign as you go along, cache the displayed as a past group and compare to new current group
var recentGroup = [];

// Make a 25 turn counter
var iterations = 0;

// Create a constructor function for catalogue photos. This is my image maker. It will stock my array.

function BusMallProduct(name) {
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);
}

//Run the constructor function with our catalogue, so we have a full catalogue of items to run through. Now these guys are in my array, the bus mall's catalogue.

new BusMallProduct('bag');
new BusMallProduct('banana');
new BusMallProduct('bathroom');
new BusMallProduct('boots');
new BusMallProduct('breakfast');
new BusMallProduct('bubblegum');
new BusMallProduct('chair');
new BusMallProduct('cthulhu');

// Now we want to restock our display items at random but unique from eachother

// function renderIteration() {
  // i is the position in the array of display items, we want to push new random items in
  var i;
  for (i = 0; i < displayed.length; i++) {
    recentGroup = displayed.shift(0,1,2);

    var random = Math.floor(Math.random() * fullCatalogue.length) + 1;
    if (displayed.indexOf(random) === -1) displayed.push(random);}
    function showRandomItem() {
      // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

     
      console.log('random this time is ', random)
      console.log('random displayed is ',displayed);
      // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

      displayed[i].src = fullCatalogue[random].filepath;
      displayed[i].alt = fullCatalogue[random].name;
      displayed[i].title = fullCatalogue[random].name;

      // Now that the image is coming into view we need to count the views

      fullCatalogue[random].views++;
      console.log('current item is ', fullCatalogue[random]);

      displayed[i].addEventListener('click', theClickHandler);
      fullCatalogue[random].clicks++;

      var currentItem = fullCatalogue[random]
      console.log('currentItem1 is', currentItem.name);

      // displayed.push(currentItem.name);
    }
    showRandomItem();
    displayed[i].addEventListener('click', theClickHandler);
    console.log('displayed is ', displayed)

    // Make sure that random1 2 and 3 do not equal
    if (displayed[0] === displayed[1] || displayed[0] === displayed[2]) {
      showRandomItem();
    }
    console.log('displayed is ', displayed);


    function theClickHandler(event) {
      console.log('target', event.target);
      showRandomItem();
    }

// }

// renderIteration();