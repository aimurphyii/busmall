// JSON.stringify(); var to string
// JSON.parse(); string to var
// localStorage.getItem(); retrieves from localStorage
// localStorage.setItem(); stores to localStorage


// typeof is an operator, not a method or operator
var foo = {
  foo:1,
  bar: 2,
  baz: 3,
};
console.log('type of foo', typeof foo);

// stringify, then store
var fooString = JSON.stringify(foo);
console.log('type of fooString ', typeof fooString);



// get out of storage, then parse
var fooStringObject = JSON.parse(fooString);

console.log('type of foostringobj is ', typeof fooStringObject);

// send it to local storage
localStorage.setItem('ourthingy', fooString)

// 
var retrievedData = localStorage.getItem('ourthingy');
// instead of above you could also go
// localStorage.ourthingy = fooString;

var retrievedData2 = localStorage.ourthingy
// ourthingy is a key

// retrive and set t back to object
var retrievedDataParsed = JSON.parse(retrievedData);
console.log('retrievedDataParsed, ', retrievedDataParsed)