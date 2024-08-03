
function showSidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.style.display = "none";
}








// let levels = 8;
// let pyramid = "";
// for (let i = levels; i >= 1; i--){
//   let spaces = " ".repeat(levels - i);
//   let hashtags = "#".repeat(2 * i - 1);
//   pyramid += spaces + hashtags + "\n";
// }
// console.log(pyramid);






function getAverage(scores){
  let sum = 0;
  for (let i = 0; i < scores.length; i++){
    sum += scores[i];
  }2
  let average = sum / scores.length;
  return average;
 } 
// console.log(getAverage[2,5,10,55,5]);


function getGrade(score) {
 if (score === 100){
  return "A++";
} else if (score >= 90){
  return "A";
} else if (score >= 80){
  return "B";
} else if (score >= 70){
  return "C";
  } else if (score >= 60){
  return "D";
} else {
  return "F";
   }
}

// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(56));

//this code is to message the student with the results 
function studentMsg(totalScores, studentScore) {
  let classAverage = getAverage(totalScores);
  let studentsGrade = getGrade(studentScore);
  let studentMsg = "Class average: " + classAverage +". Your grade: "+ studentsGrade +"."
  if (studentScore != "F" ){
    studentMsg +=  "You passed the course."
  } else {
    studentMsg +=  "You failed the course."
  };
  return studentMsg;
  };

  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));