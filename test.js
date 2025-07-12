var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;
console.log("You have " + days + " days," + weeks + "weeks, and " + months + " monthss left.");





function bmiCalculator(wight, height){
    var bmi = weight /(height * height);
    return bmi;
}

function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}