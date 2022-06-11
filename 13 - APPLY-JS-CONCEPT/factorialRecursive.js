// such as example of recursive 
// 2! = 1*2 
// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5;
// 6! = 1*2*3*4*5*6
// 7! = 6!*7;
// 8! = 7!*8;
// 9! = (9-1)!* 9
// 10! = (10-1)!* 10;
// n! = (n-1)!* n;

// function factorial(n){
//     if(n==0){
//         return 1;
//     }else{
//        return n * factorial(n-1);
//     }
// };

// var result  = factorial(10);
// console.log(result)

function factorial(n){
    if(n==0){
        return 1;
    }else{
     return n*factorial(n-1);
    }
};

var result1 = factorial(5);
var result2 = factorial(3);
var total = result1 + result2;
console.log(result1 + " + " + result2 + ' = ' + total);