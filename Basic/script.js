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
//console.log(largestNumber); //print out the largest end value 

//exercise 3
var Number = Math.floor(Math.random() * 36) - 10; //defines a random number between -10 and 30
console.log(Number);
var hot= 'The weather is hot';
var med= 'The weather is moderate';
var cold= 'The weather is cold';

if (Number > 20) { //displays image through javascript with inline css code. Text has been modified in the external css file under body (technically cheating)
  document.write('<img src="img/desert-1654439_640.jpg" alt="desert" style="height: 10em; width: auto;">'+'<br>'+ hot)
} else if (Number > 15 && Number > 0){
  document.write('<img src="img/field-533541_640.jpg" alt="desert" style="height: 10em; width: auto;">'+'<br>'+ med);
} else {
  document.write('<img src="img/iceberg-404966_640.jpg" alt="desert" style="height: 10em; width: auto;">'+'<br>'+ cold);
}