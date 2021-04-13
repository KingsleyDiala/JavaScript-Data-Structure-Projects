// a program that will register runners for the race and give them instructions on race day.


let raceNumber = Math.floor(Math.random() * 1000);

const regRunnerEarly = false;
let runnerAge = 18
// Adding 1000 to the runners above 17 if registered and above the age 18
if (regRunnerEarly && runnerAge >= 18) {
  raceNumber += 1000;
}
// checking if runner is registered early and is above the age of 17
if (regRunnerEarly && runnerAge >= 18) {
  console.log(`You will race at 9:30 am. Your Race Number is: ${raceNumber}`)
}
// if runner is not registered early but above the age 17
else if (!regRunnerEarly && runnerAge >= 18) {
  console.log(`You will race at 11:00 am. Your race number is: ${raceNumber}`)
}
// if runner is under age 18
else if(runnerAge < 18) {
  console.log(`You will race at 12:30 pm. Your race number is: ${raceNumber}`)
}