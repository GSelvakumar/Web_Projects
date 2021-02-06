function bmiCalculator(weight, height) {
    var x = weight;
    var y = Math.pow(height, 2);
    var result = x / y;
    BMI = Math.round(result);

    if(BMI < 18.5) {
        return ("Your BMI is "+BMI+", so you are underweight.");
    }
    if(BMI >= 18.5 && BMI <= 24.9) {
        return ("Your BMI is "+BMI+", so you have a normal weight.");
    }
    if(BMI > 24.9) {
        return ("Your BMI is "+BMI+", so you are overweight.");
    }
    
}

bmiCalculator(65, 1.8); 
