//exercise3

function findreverse (number){
    let reversenumber = " ";
    while (number != 0){
        let remainder = number % 10;
        reversenumber = reversenumber*10 + remainder;
        number = Math.floor(number/10)
    }
    console.log (`The reverse number is ${reversenumber}`);
    return reversenumber;
}

findreverse(478);

//exercise4
function maybe_polyndrome (number){
    reversenumber = findreverse(number);
    if (number == reversenumber){
        console.log ('It is a polyndrome');
    }
    else {
        console.log ("It is not a polyndrome");
    }
}

// maybe_polyndrome(478);
