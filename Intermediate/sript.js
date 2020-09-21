total = 0;
var Grade = [76, 85, 65, 93, 81]; //grade results of the 5 students in %

for (var i = 0; i < Grade.length; i++) { //we want to sum up all of the values in the array
  total += Grade[i];  //as long as there is a value within the array, it will be summed up together
}
//console.log(total); //output should be 400
var classAvg = (total / Grade.length); //calculating the class avarage 

Grade.push(classAvg);             //last value in array will be the class avg
var avgGrade = [];                //empty array for the grade results in letters

var x = [0];                      //empty var to assume the values of array Grade
for (var i = 0; i < Grade.length; i++) {  //asume one value of the array Grade and stop after the last one
  //console.log(Grade[i]);  //test to see if the correct values have been taken
  if (Grade[i] < 60) {       //for values below 60%
    avgGrade.push('F');       //insert f into the avgGrade array at the end
  } else if (Grade[i] >= 60 && Grade[i] < 70) {//<= to prevent it from giving A to values 60,70,80
    avgGrade.push('D');
  } else if (Grade[i] >= 70 && Grade[i] < 80) {
    avgGrade.push('C');
  } else if (Grade[i] >= 80 && Grade[i] < 90) {
    avgGrade.push('B');
  } else {
    avgGrade.push('A');
  }
}
//  console.log(Grade);
// console.log(avgGrade); 

//assign array values to variables
var MartingGrd = avgGrade[0];
var ThomasgGrd = avgGrade[1];
var KlausgGrd = avgGrade[2];
var MariagGrd = avgGrade[3];
var DavidgGrd = avgGrade[4];
var ClassGrd = avgGrade[5];

//print out results on the screen
document.write("The class avarage is " + ClassGrd + "<br>");
document.write("Martin's grade is " + MartingGrd + "<br>");
document.write("Thomases grade is " + ThomasgGrd + "<br>");
document.write("Klauses grade is " + KlausgGrd + "<br>");
document.write("Marias grade is " + MariagGrd + "<br>");
document.write("Davids grade is " + DavidgGrd + "<br>");

//intermediat 2 
//thanks to the help of a colleague
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { //if the modolo of 3 & 5 are strict equal to 0 then apply output rule
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {   //if only modolo 3 
    console.log("Fizz");
  } else if (i % 5 === 0) { //if only modolo 5
    console.log("Buzz");
  } else {                //if not divisable by 3 or 5 then output given number
    console.log(i);
  }
}

//excercise 3
//thanks again to the input of the colleagues

var star = "";  //emptly star var

for (var i = 0; i <= 5; i++) {
  star += "*";
  document.write(star + "<br>");
}

//or
var star2 = "";
do {
  star2 += "*";
  document.write(star2 + "<br>");
} while (star2.length < 6);
