setTimeout(myCalculator, 3000);

function myDisplayer (something){
    
    console.log(something);
}

function myCalculator(num1, num2, myfunction){
    let total = num1 + num2
    myfunction(total)
}

myCalculator(5,6,myDisplayer)