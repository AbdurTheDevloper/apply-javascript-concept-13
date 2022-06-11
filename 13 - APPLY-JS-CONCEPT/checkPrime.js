// 1 

var num = 49; 

for(var i= 2; i<num ; i++){
    console.log(i);
    if(num%2== 0){
        console.log( num + ' not a prime number ');
        break;
    }else{
        console.log(num + ' is a prime Number ');
        break;
    } 
}