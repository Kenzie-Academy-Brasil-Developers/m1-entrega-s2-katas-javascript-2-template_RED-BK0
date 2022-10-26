function add(num1, num2){
    return num1 + num2
 };
 console.log(add());

 function multipy (num1, num2){
    let resultMultiply = 0
    for (let i = 1; i <= num2; i++){
 
        resultMultiply =  add(resultMultiply, num1) 
    };
    return resultMultiply;
 };
 console.log(multipy());
 function power (x, n){
    let resultPower = 1;
    for (let index = 0; index < n; index++){      
        resultPower =  multipy(resultPower, x) 
    };
    return resultPower
 };
 console.log(power());

 function factorial(number){
    let result = number;
    for (let index = 1; index < number; index++){
        result = multipy(result, number - index)
    }
    return result 
 };
 console.log(factorial());