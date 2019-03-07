'use strict';

// Get the cached images from DOM
var catalogue1 = document.getElementById('catalogue1');
var catalogue2 = document.getElementById('catalogue2');
var catalogue3 = document.getElementById('catalogue3');

var blurb1 = document.getElementById('blurb1');
var blurb2 = document.getElementById('blurb2');
var blurb3 = document.getElementById('blurb3');

// Make an array to house the complete collection of products we want to see
var fullCatalogue = [];

// This will count up how many choices have been made
var iterations = 0;

// Create a constructor function for catalogue photos. This is my image maker. It will stock my catalogue array.
function BusMallProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.clickedOn = 0;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);
}


//Run the constructor function with our catalogue, so we have a full catalogue of items to run through. Now these guys are in my array, the bus mall's catalogue.

new BusMallProduct('R2D2 Rolly Bag', 'img/bag.jpg');
new BusMallProduct('Banana Slicer', 'img/banana.jpg');
new BusMallProduct('Toilet Caddy', 'img/bathroom.jpg');
new BusMallProduct('Sandal Boots', 'img/boots.jpg');
new BusMallProduct('Breakfast Buddy', 'img/breakfast.jpg');
new BusMallProduct('Meat Gum', 'img/bubblegum.jpg');
new BusMallProduct('Passive Aggressive Chair', 'img/chair.jpg');
new BusMallProduct('Our Lord', 'img/cthulhu.jpg');
new BusMallProduct('Quacker Muzzle', 'img/dog-duck.jpg');
new BusMallProduct('Canned Dragon', 'img/dragon.jpg');
new BusMallProduct('Picnic Pens', 'img/pen.jpg');
new BusMallProduct('Probably More Mess Than Good', 'img/pet-sweep.jpg');
new BusMallProduct('Pizza Scissors', 'img/scissors.jpg');
new BusMallProduct('Sharky Sleeper', 'img/shark.jpg');
new BusMallProduct('Build Baby\'s Immune System', 'img/sweep.jpg');
new BusMallProduct('Traditional Hoth Sleepingbag', 'img/tauntaun.jpg');
new BusMallProduct('Canned Unicorn for the depraved', 'img/unicorn.jpg');
new BusMallProduct('Suggestive Tentacle', 'img/usb.gif');
new BusMallProduct('Water Mess', 'img/water-can.jpg');
new BusMallProduct('Straw Not Included', 'img/wine-glass.jpg');

// an array to store the indexes of the items displayed
var displayItem = [];

// I'm going to create a random number, between 1 and 20 (for the 20 items in the catalogue)
// var catalogueItem = Math.floor(Math.random() * fullCatalogue.length);

function showMeBusMall(){
// I'm going to assign this number and create a total of 6 unique numbers so there will be no conflicts of repeated images
while (displayItem.length<6){
  var catalogueItem = Math.floor(Math.random() * fullCatalogue.length);
  if(displayItem.indexOf(catalogueItem) === -1) displayItem.push(catalogueItem);
}
console.log('displayItem contains ', displayItem[0], displayItem);

// the first 3 of my 6 numbers will be displayed, and they'll replace 3 at a time with each mouse-click selection... push 3 in, shift the top 3 out
var first = displayItem[0]; 
var second = displayItem[1];
var third = displayItem[2];

// Change src and path of the cached imgs to my random display numbers array, display item names, and track their views

catalogue1.src = fullCatalogue[first].filepath;
catalogue1.alt = fullCatalogue[first].name;
catalogue1.title = fullCatalogue[first].name;
blurb1.textContent = fullCatalogue[first].name;
fullCatalogue[first].views++;


catalogue2.src = fullCatalogue[second].filepath;
catalogue2.alt = fullCatalogue[second].name;
catalogue2.title = fullCatalogue[second].name;
blurb2.textContent = fullCatalogue[second].name;
fullCatalogue[second].views++;

catalogue3.src = fullCatalogue[third].filepath;
catalogue3.alt = fullCatalogue[third].name;
catalogue3.title = fullCatalogue[third].name;
blurb3.textContent = fullCatalogue[third].name;
fullCatalogue[third].views++;

// This was the hardest part and it is still not perfect, but at least there aren't double logged clicks. This is an issue od WHEN registered... bubble or capture. Need to fine tune
catalogue1.addEventListener('click', theClickHandler, false);
catalogue2.addEventListener('click', theClickHandler, false);
catalogue3.addEventListener('click', theClickHandler, false);

// If the event happens on 1, log clicks on 1, and so forth...
if (catalogue1.event) {
  fullCatalogue[first].clickedOn++;
} else if (catalogue2.event) {
  fullCatalogue[second].clickedOn++;
} else {
  fullCatalogue[third].clickedOn++;
}

// This is going to kick out the top3 that we see, so our array becomes less than 6 and has to restock.
displayItem.shift();
displayItem.shift();
displayItem.shift();

// Up to 25 clicks can be made, then show the results
iterations++;
if (iterations === 25){
  showMeResults();
}
}
showMeBusMall();

// Write a function to bring the survey to a close and display the results
function showMeResults(){
  // Brign to a close by turning off the event handler
  document.getElementById("catalogue1").removeEventListener("click", theClickHandler);
  document.getElementById("catalogue2").removeEventListener("click", theClickHandler);
  document.getElementById("catalogue3").removeEventListener("click", theClickHandler);

  // get the <ul> element from the DOM so we can anchor our result list
  var busMallFavorites = document.getElementById('results');

  // Assign content as empty string so we can dynamically create
  busMallFavorites.innerHTML = '';
  var header = document.createElement('tr');
  header.innerHTML = '<td>item name</td><td>times chosen</td><td>times seen</td>'
  // Attach it, or it won't show up:
  busMallFavorites.appendChild(header);

  // and display the raw numbers
  for (var i=0; i<fullCatalogue.length; i++){
    var itemDetails = document.createElement('tr');

    // We are iterating through objects and grabbing data to display
    itemDetails.innerHTML = '<td>' + fullCatalogue[i].name + '</td>'+'<td>' + fullCatalogue[i].clickedOn  + '</td>'+ '<td>' + fullCatalogue[i].views  + '</td>'

    // Make it show by attaching to the list element
    busMallFavorites.appendChild(itemDetails);
  }
}

// Create an event handler to react to click events
function theClickHandler(event) {
  console.log('target, ', event.target)
  showMeBusMall();
}