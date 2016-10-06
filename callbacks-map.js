// Implement your own version of the built-in array map function.

// Yours will take in two arguments.
// The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.
// note The map() method creates a new array with the results of calling a provided
// function on every element in this array.



function myMap(array, callback) {
  //return a copy of the list where all elements have been
  // modified with callback.

  var arrayCopy = [];
  array.forEach(function(item, _index, _array){
    // 1. apply callback to get transformation
    var transformedItem = callback(item);

    // 2. push the transformed value into the copied list
    arrayCopy.push(transformedItem);
  })

  return arrayCopy;
}

// parameters in function call given as exercise
// arrow notation (param1, param2, …, paramN) => { statements }
var result = myMap(["ground", "control", "to", "major", "tom"], (elm) => { return elm.length });

console.log(result);
// expected results:
// [6, 7, 2, 5, 3]





// note: An arrow function expression has a shorter syntax compared to function expressions
// and does not bind its own this, arguments, super, or new.target.
// Arrow functions are always anonymous. These function expressions are best suited for
// non-method functions and they can not be used as constructors. (from mdn)