// 1. a) Declare and initialise an array with the below 5 names and ages (hint: each array item will be its own array like [[202, "Barbara", 31], ...])
//  i. 202,"Barbara", 31
//  ii. 203,"David", 22
//  iii. 204,"Alex", 35
//  iv. 205,"Sue", 24
// b) Log the length of the array
// c) Log the last element in the array
// d) Add John who is 45 years old with id 206 to the end of the array (on a new line, without just writing it into the initial array)
// e) Remove the first item from the array (on a new line, without just going up above and editing the code of the initial array)


// Come back to challenges if rest of work is all complete
// Challenge - Use a for loop through the array to search for ID = 205 and update Sue’s name to Susan
// Challenge - Remove an item from the middle of the array. ID=204


let nestedArray = [[201, "Sophia", 26], [202, "Barbara", 31], [203, "David", 22], [204, "Alex", 35], [205, "Sue", 24]];
console.log(nestedArray.length);
console.log(nestedArray[nestedArray.length - 1]);
nestedArray.push([206, "Joh", 45]);
nestedArray.shift(nestedArray[0]);
console.log(nestedArray)


//Challenges
for (let i = 0; i < nestedArray.length; i++) {
  if (nestedArray[i][0] === 205) {
    nestedArray[i][1] = "Susan";
    console.log(nestedArray);

  } else if (nestedArray[i][0] === 204) {
    //nestedArray.splice(i, 1); // remove the id = 204
  }
  console.log(nestedArray);

}
