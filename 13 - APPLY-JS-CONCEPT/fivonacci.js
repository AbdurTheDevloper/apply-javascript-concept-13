// example ==== ager 2 tar sumation
// fobo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1]+ fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[n] = fibo[n-2] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// var fibo = [0, 1];

// for(var i=2; i<=10 ; i++){
//       fibo[i]= fibo[i-1] + fibo[i-2];
//       console.log(fibo)
// }



var fibo = [0, 1];

for(var i=2; i<10; i++){
     fibo[i]= fibo[i-1] + fibo[i-2];
     console.log(fibo)
}