//exercise1
function checkifprime (number) {
    let is_not_prime = false;
    for (let i = 2 ; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            is_not_prime = true;
        }
    }
    return is_not_prime;
}

// console.log(checkifprime(43));

//exercise2
function numbers (x, y){
    let result = [];
    for (let i=x; i <= y; i++){
        if (checkifprime(i) !== true){
          result.push(i);
        }
    }
    return result;
}

console.log(numbers(5,13));
// console.log (result);

// if (checkifprime() == true) {
    // if (numbers(5,17));
    // console.log(result);
// }  
// else {
//     console.log("it is prime")
// }

    // if (numbers(5,17));
    // console.log(result);
