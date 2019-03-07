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

// this function will update our votes, we iterate through fullCatalogue array, look at each object, the votes, and the titles and add them into votes and titles above so that they show up in our chart
function updateChartArrays() {
  for (var i = 0; i < fullCatalogue.length; i++) {
    // look at our songs array, look at each object, look at the songs, get the title, and then get the matching votes. no need to push because we are changing the value of the item at that location--we are assigning values to exact locations. this takes and updates values instead of pushing on the end.
    titles[i] = fullCatalogue[i].name;
    votes[i] = fullCatalogue[i].clicks;
  }
}

// Create a constructor function for catalogue photos. This is my image maker. It will stock my array.

function BusMallProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.views = 0;
  this.clicks = 0;

  // At this point object will have been built so now we can push into the array...
  fullCatalogue.push(this);
}

//Run the constructor function with our catalogue, so we have a full catalogue of items to run through. Now these guys are in my array, the bus mall's catalogue.

new BusMallProduct('bag', 'img/bag.jpg');
new BusMallProduct('banana', 'img/banana.jpg');
new BusMallProduct('bathroom', 'img/bathroom.jpg');
new BusMallProduct('boots', 'img/boots.jpg');
new BusMallProduct('breakfast', 'img/breakfast.jpg');
new BusMallProduct('bubblegum', 'img/bubblegum.jpg');
new BusMallProduct('chair', 'img/chair.jpg');
new BusMallProduct('cthulhu', 'img/cthulhu.jpg');
new BusMallProduct('dog-duck', 'img/dog-duck.jpg');
new BusMallProduct('dragon', 'img/dragon.jpg');
new BusMallProduct('pen', 'img/pen.jpg');
new BusMallProduct('pet-sweep', 'img/pet-sweep.jpg');
new BusMallProduct('scissors', 'img/scissors.jpg');
new BusMallProduct('shark', 'img/shark.jpg');
new BusMallProduct('sweep', 'img/sweep.jpg');
new BusMallProduct('tauntaun', 'img/tauntaun.jpg');
new BusMallProduct('unicorn', 'img/unicorn.jpg');
new BusMallProduct('usb', 'img/usb.gif');
new BusMallProduct('water-can', 'img/water-can.jpg');
new BusMallProduct('wine-glass', 'img/wine-glass.jpg');

var currentGroup = [
  catalogue1,
  catalogue2,
  catalogue3,
];
// To control the duplication assign the original to comapre against, and then reassign as you go along, cache the currentgroup as a past group and compare to new current group
var recentGroup = [
  0, 1, 2,
];
var deadGroup = [];

// lets run some random, but unique objects

function showRandomItems() {
 
  // Make a function that will generate 3 items from our catalogue at random. Math.random gives us a value between 0 and 1. We can multiply that value by the length of our array in order to call an index from our array. We will need to use Math.floor, so that we get integers and not decimal values.

  while (random1 === random2 || random1 === random3 || random2 === random3) {
    var random1 = Math.floor(Math.random() * fullCatalogue.length);
    var random2 = Math.floor(Math.random() * fullCatalogue.length);
    var random3 = Math.floor(Math.random() * fullCatalogue.length);
  }
// else if(recentGroup.indexOf(currentGroup[0] !== -1) || recentGroup.indexOf(currentGroup[1] !== -1) || recentGroup.indexOf(currentGroup[2] !== -1)){
// }
// for ( var i = 0; i < recentGroup.length; i++ ){
//   for ( var e = 0; e < currentGroup.length; e++){if (recentGroup[i]===currentGroup[e]){


  // || recentGroup.includes(currentGroup[0])


  // Now we will get our cached image from the DOM and chage the source attribute so it's file path will randomize... giving us random images.

  catalogue1.src = fullCatalogue[random1].filepath;
  catalogue1.alt = fullCatalogue[random1].name;
  catalogue1.title = fullCatalogue[random1].name;

  catalogue2.src = fullCatalogue[random2].filepath;
  catalogue2.alt = fullCatalogue[random2].name;
  catalogue2.title = fullCatalogue[random2].name;

  catalogue3.src = fullCatalogue[random3].filepath;
  catalogue3.alt = fullCatalogue[random3].name;
  catalogue3.title = fullCatalogue[random3].name;

  // Now that the image is coming into view we need to count the views

  fullCatalogue[random1].views++
  console.log('current item is ', fullCatalogue[random1]);
  fullCatalogue[random2].views++;
  console.log('current item is ', fullCatalogue[random2]);
  fullCatalogue[random3].views++;
  console.log('current item is ', fullCatalogue[random3]);

  
  // We also want to count how many times it is chosen
  catalogue1.addEventListener('click', theClickHandler);
  // fullCatalogue[random1].clicks++;
  catalogue2.addEventListener('click', theClickHandler);
  fullCatalogue[random2].clicks++;
  catalogue3.addEventListener('click', theClickHandler);
  fullCatalogue[random3].clicks++;


  // we will update it here, immediately after tallying votes
  updateChartArrays();

  // Here the new items get named so I can put them in array for comparisson
  var currentItem1 = fullCatalogue[random1]
  var currentItem2 = fullCatalogue[random2]  
  var currentItem3 = fullCatalogue[random3]
  

  // moving items in, taking them out, so 3 per current and recent arrays, so we can check against repeats later
  currentGroup.unshift(currentItem1.name, currentItem2.name, currentItem3.name);
  recentGroup.unshift(currentGroup[3], currentGroup[4], currentGroup[5]);
  currentGroup.pop();
  currentGroup.pop();
  currentGroup.pop();
  recentGroup.pop();
  recentGroup.pop();
  deadGroup.fill(recentGroup.pop());
  console.log('currentGroup is ', currentGroup);
  console.log('recentGroup is ', recentGroup);
  console.log('deadgroup is ', deadGroup);


  // Click through to results
  iterations++;
  if (iterations === 25) {
    showResults();
    drawChart();
  }
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
    listline.textContent = fullCatalogue[i].name + ' was chosen ' + fullCatalogue[i].clicks + ' times.';
    // attach it to our cached DOM list element
    racknstack.appendChild(listline);
  }
}


function theClickHandler(event) {
  console.log('target', event.target);
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
