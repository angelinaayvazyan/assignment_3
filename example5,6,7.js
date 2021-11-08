//exercise5


function make_arr(num){
    num_arr = [];
    length = num.length
    for (let i = 0; i <= length-1; i++){
        num_arr.push(parseInt(num.charAt(i)));
    }
    return(num_arr);
}

function binarysum (num1,num2){
    let num1_arr = make_arr(num1);
    let num2_arr = make_arr(num2);
    let numsum_arr = [];
    let length1 = num1_arr.length;
    let length2 = num2_arr.length; 
    let carry_dig = 0;
     
    // if(length1>length2){
    //     num2_arr.push(0);
    // }
    // else{
    //     num1_arr.push(0);
    // }
    while (length1-1 >= 0 || length2-1 >= 0 ) {
                carry_dig = carry_dig + (num1_arr[length1-1] || 0) + (num2_arr[length2-1] || 0);
                numsum_arr.unshift(carry_dig % 2);
                carry_dig = Math.floor(carry_dig / 2);
                (length1) -- ;
                (length2) -- ;
            }
            return numsum_arr;
        }
        
        // console.log(binarysum('1100', '1001'));

//exercise6
function find_inverse (binary){
    inverse_binary = [];
    for(let i=0; i<= binary.length-1; i++) {
        if(binary.charAt(i)=='0'){
            inverse_binary.push('1');
        }
        if(binary.charAt(i)=='1'){
            inverse_binary.push('0');
        }
        
    }
    return inverse_binary;
}
//    find_inverse(1100);

//exercise7
function twos_complement(number){
    inversed_number = find_inverse(number).join('');
    console.log(binarysum(inversed_number, '1'))
}

twos_complement('0011');
//inverse('1100');






