//exercise 1
/*var Number = Math.floor(Math.random() * 31) - 5;
console.log(Number);
if (Number > 10) {
  document.write('The weather is moderate');
} else {
  document.write('The weather is cold');
}*/

// OR: create random number between -5 and -1; and random number between 0 and 25; display randomly between the two numbers

//exercise 2
var Arr = [11, 21, 31, 0, -51, 61, 71, 81, 9];
var largestNumber = Arr[0]; //takes first index 0 value and compare them with the array
  for (var i = 0; i < Arr.length; i++){
    //console.log(Arr[i]);  //show all of the idex values of the array
        if (largestNumber < Arr[i]){  //if the largestNumber value is smaller then the given I index value 
      largestNumber = Arr[i]; //make largestNumber equal the value of the given index
      }
}
console.log(largestNumber); //print out the largest end value 
