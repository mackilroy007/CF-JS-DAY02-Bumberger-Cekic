var Grade = [76, 85, 65, 93, 81];
var y = [];
var x = [0];
for (i = 0; i < Grade.length; i++) {
  console.log(Grade[i]);
  if (Grade[i] < 60) {
    y.push('F');
  } else if (Grade[i] > 60 && Grade[i] < 70) {
    y.push('D');
  } else if (Grade[i] > 70 && Grade[i] < 80) {
    y.push('C');
  } else if (Grade[i] > 80 && Grade[i] < 90) {
    y.push('B');
  } else {
    y.push('A');
  }
}
console.log(Grade);
console.log(y);
