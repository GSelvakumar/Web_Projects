function bmiCalculator(weight, height) {
    var x = weight;
    var y = Math.pow(height, 2);
    var result = x / y;
    return result;
}

var bmi = bmiCalculator(65, 1.8); 
console.log("Your bmi is, " + bmi);