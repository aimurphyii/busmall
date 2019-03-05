'use strict';

// Get the cahced image form the DOM
var catalogue1 = document.getElementById('catalogue1');
var catalogue2 = document.getElementById('catalogue2');
var catalogue3 = document.getElementById('catalogue3');
// Make an array to capture images
var fullCatalogue = [];
// To control the duplication assign the original to comapre against, and then reassign as you go along, cache the currentgroup as a past group and compare to new current group
var recentGroup = 0;

// Make a 25 turn counter
var iterations = [];
// Make a group catcher


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

function renderIteration() {
  var currentGroup = [];

  function showRandomItem1() {
    // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

    var random = Math.floor(Math.random() * fullCatalogue.length);


    // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

    catalogue1.src = fullCatalogue[random].filepath;
    catalogue1.alt = fullCatalogue[random].name;
    catalogue1.title = fullCatalogue[random].name;

    // Now that the image is coming into view we need to count the views

    fullCatalogue[random].views++;
    console.log('current item is ', fullCatalogue[random]);


    catalogue1.addEventListener('click', theClickHandler);
    fullCatalogue[random].clicks++;

    var currentItem1 = fullCatalogue[random]
    console.log('currentItem1 is', currentItem1.name);

    currentGroup.push(currentItem1.name);

  }

  function showRandomItem2() {
    // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

    var random = Math.floor(Math.random() * fullCatalogue.length);
  

    // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

    catalogue2.src = fullCatalogue[random].filepath;
    catalogue2.alt = fullCatalogue[random].name;
    catalogue2.title = fullCatalogue[random].name;

    // Now that the image is coming into view we need to count the views

    fullCatalogue[random].views++;
    console.log('current item is ', fullCatalogue[random]);


    catalogue2.addEventListener('click', theClickHandler);
    fullCatalogue[random].clicks++;

    var currentItem2 = fullCatalogue[random];

    currentGroup.push(currentItem2.name);
  }

  function showRandomItem3() {
    // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

    var random = Math.floor(Math.random() * fullCatalogue.length);

    // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

    catalogue3.src = fullCatalogue[random].filepath;
    catalogue3.alt = fullCatalogue[random].name;
    catalogue3.title = fullCatalogue[random].name;

    // Now that the image is coming into view we need to count the views

    fullCatalogue[random].views++;
    console.log('current item is ', fullCatalogue[random]);


    catalogue3.addEventListener('click', theClickHandler);
    fullCatalogue[random].clicks++;

    var currentItem3 = fullCatalogue[random];

    currentGroup.push(currentItem3.name);
  }

    showRandomItem1();
    catalogue1.addEventListener('click', theClickHandler);

    showRandomItem2();
    catalogue2.addEventListener('click', theClickHandler);

    showRandomItem3();
    catalogue3.addEventListener('click', theClickHandler);

    console.log('currentGroup is ', currentGroup)

    // Make sure that random1 2 and 3 do not equal
    if (currentGroup[0] === currentGroup[1] || currentGroup[0] === currentGroup[2]){
      showRandomItem1();
    }
    console.log('currentGroup is ', currentGroup);


    function theClickHandler(event) {
      console.log('target', event.target);
      showRandomItem1();
      showRandomItem2();
      showRandomItem3();
    }

    // var currentGroup = recentGroup;
    // showRandomItem1();
    // catalogue1.addEventListener('click', theClickHandler);

    // showRandomItem2();
    // catalogue2.addEventListener('click', theClickHandler);

    // showRandomItem3();
    // catalogue3.addEventListener('click', theClickHandler);

    // if (currentGroup.includes(recentGroup)){
    //   renderIteration();
    // }

  

  }

  renderIteration();




