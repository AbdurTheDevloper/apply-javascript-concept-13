// var n = 13;

// for(var i=2 ;i<n ; i++){
//       console.log(i + ' / ' + n + ' = ' + n/i)
// }

// 2 

// var n = 18;

// for(var i=2 ;i<n ; i++){
//       console.log(i + ' / ' + n + ' = ' + n%i)
// }

// 3 

// var n = 77;

// for(var i=2 ;i<n ; i++){
//     console.log(i + ' / ' + n + ' = ' + n%i)
//      if( n % i == 0){
//         console.log(n + ' not a prime numebr ');
//         break;
//      } 
// }

//  var n = 77;

// for(var i=2 ;i<n ; i++){
//     console.log(i + ' / ' + n + ' = ' + n%i)
//      if( n % i == 0){
//         console.log(n + ' not a prime numebr ');
//         break;
//      } 
// }

function checkPrime(n){
    for(var i=2 ; i<n ; i++){
         if( n % i == 0){
            return n + ' not a prime numebr ';
         } 
    }
     console.log(' prime number ')
}
var result  = checkPrime(139);
console.log(result);