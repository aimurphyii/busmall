'use strict';

// Get the cahced image form the DOM
var catalogue1 = document.getElementById('catalogue1');
var catalogue2 = document.getElementById('catalogue2');
var catalogue3 = document.getElementById('catalogue3');


// Make an array to capture images, the complete catalogue of items
var fullCatalogue = [];

// Make a 25 turn counter
var iterations = 0;

// now we need a variable for our actual chart, we declare up here and change it's value later
var busMallChart;

// Make a boolean for the chart
var chartDrawn = false;


// adding some empty arrays for our chart now
var votes = [];
var titles = [];

var clicks = 'number of votes'
var countIt = [];

// this function will update our votes, we iterate through fullCatalogue array, look at each object, the votes, and the titles and add them into votes and titles above so that they show up in our chart
function updateChartArrays() {
  for (var i = 0; i < fullCatalogue.length; i++) {
    // look at our songs array, look at each object, look at the songs, get the title, and then get the matching votes. no need to push because we are changing the value of the item at that location--we are assigning values to exact locations. this takes and updates values instead of pushing on the end.
    titles[i] = fullCatalogue[i].shortname;
    votes[i] = fullCatalogue[i].clickedOn;
  }
}

// Create a constructor function for catalogue photos. This is my image maker. It will stock my array.

function BusMallProduct(shortname, name, filepath, index) {
  this.shortname = shortname;
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.clickedOn = 0;
  this.index = index;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);
}

//Run the constructor function with our catalogue, so we have a full catalogue of items to run through. Now these guys are in my array, the bus mall's catalogue.

new BusMallProduct('r2 rollbag', 'R2D2 Rolly Bag', 'img/bag.jpg', '0');
new BusMallProduct('\'nanaslicer','Banana Slicer', 'img/banana.jpg', '1');
new BusMallProduct('toiletcaddy','Toilet Caddy', 'img/bathroom.jpg', '2');
new BusMallProduct('sandalboots','Sandal Boots', 'img/boots.jpg', '3');
new BusMallProduct('breakfastbud','Breakfast Buddy', 'img/breakfast.jpg', '4');
new BusMallProduct('meatgum','Meat Gum', 'img/bubblegum.jpg', '5');
new BusMallProduct('rudechair','Passive Aggressive Chair', 'img/chair.jpg', '6');
new BusMallProduct('thulhu','Shakathulhu', 'img/cthulhu.jpg', '7');
new BusMallProduct('quackle','Quacker Muzzle', 'img/dog-duck.jpg', '8');
new BusMallProduct('d-meat','Canned Dragon', 'img/dragon.jpg', '9');
new BusMallProduct('pens','Picnic Pens', 'img/pen.jpg', '10');
new BusMallProduct('petsweeps','Probably More Mess Than Good', 'img/pet-sweep.jpg', '11');
new BusMallProduct('pizzcors','Pizza Scissors', 'img/scissors.jpg', '12');
new BusMallProduct('shark','Sharky Sleeper', 'img/shark.jpg', '13');
new BusMallProduct('babesweep','Build Baby\'s Immune System', 'img/sweep.jpg', '14');
new BusMallProduct('tautaun','Traditional Hoth Sleepingbag', 'img/tauntaun.jpg', '15');
new BusMallProduct('u-meat','Canned Unicorn for the depraved', 'img/unicorn.jpg', '16');
new BusMallProduct('usb','Suggestive Tentacle', 'img/usb.gif', '17');
new BusMallProduct('water','Water Mess', 'img/water-can.jpg', '18');
new BusMallProduct('wine','Straw Not Included', 'img/wine-glass.jpg', '19');

// an array to store the indexes of the items displayed
var displayItem = [];

function showRandomItems() {

  // I'm going to assign this number and create a total of 6 unique numbers so there will be no conflicts of repeated images

  while (displayItem.length < 6) {
    var catalogueItem = Math.floor(Math.random() * fullCatalogue.length);
    if (displayItem.indexOf(catalogueItem) === -1) displayItem.push(catalogueItem);
  }
  console.log('displayItem at contains ', displayItem[0], displayItem);
  // the first 3 of my 6 numbers will be displayed, and they'll replace 3 at a time with each mouse-click selection... push 3 in, shift the top 3 out
  var first = displayItem[0];
  var second = displayItem[1];
  var third = displayItem[2];

  // Change src and path of the cached imgs to my random display numbers array, display item names, and track their views
  // I also added display names for users to read, and I also added inexes to track my items, and ulitmate used these indexes to keep track of my clicks! AND THEY WORK!!!!

  catalogue1.src = fullCatalogue[first].filepath;
  catalogue1.alt = fullCatalogue[first].name;
  catalogue1.title = fullCatalogue[first].name;
  catalogue1.index = fullCatalogue[first].index;
  catalogue1.clickedOn = fullCatalogue[first].clickedOn;
  blurb1.textContent = fullCatalogue[first].name;
  fullCatalogue[first].views++;
  fullCatalogue[first].clickedOn;

  catalogue2.src = fullCatalogue[second].filepath;
  catalogue2.alt = fullCatalogue[second].name;
  catalogue2.title = fullCatalogue[second].name;
  catalogue2.index = fullCatalogue[second].index;
  catalogue2.clickedOn = fullCatalogue[second].clickedOn;
  blurb2.textContent = fullCatalogue[second].name;
  fullCatalogue[second].views++;
  fullCatalogue[second].clickedOn;

  catalogue3.src = fullCatalogue[third].filepath;
  catalogue3.alt = fullCatalogue[third].name;
  catalogue3.title = fullCatalogue[third].name;
  catalogue3.index = fullCatalogue[third].index;
  catalogue3.clickedOn = fullCatalogue[third].clickedOn;
  blurb3.textContent = fullCatalogue[third].name;
  fullCatalogue[third].views++;


  // This was the hardest part and it is still not perfect, but at least there aren't double logged clicks. This is an issue od WHEN registered... bubble or capture. Need to fine tune
  catalogue1.addEventListener('click', theClickHandler);
  catalogue2.addEventListener('click', theClickHandler);
  catalogue3.addEventListener('click', theClickHandler);
  


  // updateChartArrays();
  // This is going to kick out the top3 that we see, so our array becomes less than 6 and has to restock.
  displayItem.shift();
  displayItem.shift();
  displayItem.shift();
  console.log(countIt);

  // Click through to results
  iterations++;
  if (iterations === 25) {
    showResults();
    drawChart();
  }
  updateChartArrays();
}

// Calling all that stuff I just wrote. omg plz work~
showRandomItems();


// These make sure the clicks register with our DOM elements

// catalogue1.addEventListener('click', theClickHandler);
// catalogue2.addEventListener('click', theClickHandler);
// catalogue3.addEventListener('click', theClickHandler);

// Write a function to render results of the clicking in the form of a list with the effect of "3 votes for the Banana Slicer!"
function showResults() {
  // cache from DOM
  var racknstack = document.getElementById('results');
  // create dynamically
  racknstack.innerHTML = '';
  // iterate through all the item objects and their properties
  for (var i = 0; i < fullCatalogue.length; i++) {
    var listline = document.createElement('li');
    // looking at the object we are on
    listline.textContent = fullCatalogue[i].name + ' was chosen ' + fullCatalogue[i].clickedOn + ' times.';
    // attach it to our cached DOM list element
    racknstack.appendChild(listline);
  }
}


function theClickHandler(event) {
  console.log('target', event.target);
  fullCatalogue[event.target.index].clickedOn += 1;
  console.log(event.target.clickedOn);
  countIt.push(event.target.index);
  console.log(countIt);
  showRandomItems();
  // edit the handler to turn off listeners and end voting
  if (iterations === 25) {
    document.getElementById("catalogue1").removeEventListener("click", theClickHandler);
    document.getElementById("catalogue2").removeEventListener("click", theClickHandler);
    document.getElementById("catalogue3").removeEventListener("click", theClickHandler);
  }
}

// now we are going to build out the data object for our chart

var data = {
  labels: titles,
  datasets: [
    {
      data: votes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
    }
  ]
};
// we are going to make the chart
function drawChart() {
  // we decalred context and looking for the id on the chart, and now we are getting 2d context--grabbing mychart adn using ctx to make it a chart
  var ctx = document.getElementById("myChart").getContext("2d");

  // now we are going to build the chart with all the stuff we collected for it like songChart and ctx... new Chart is able to run because we linked to it in the script src in head
  // params are ctx and a big damn object with at least type and data
  
  busMallChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    // might need more options

  });
  // change the boolean now that we drew our chart
  chartDrawn = true;
}
