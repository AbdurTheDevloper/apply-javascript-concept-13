// var year = 2022;
// console.log(year/4);


// if(year% 4 == 0){
//     console.log('it is a leeap year ');
// }else{
//     console.log(' not a leep year')
// }

// with function 

// function isLeepyear(year){
//    var result = year % 4 ;
//    if(result == 0){
//        console.log(' is leep year ');
//    }else{
//        console.log(' not a leep year ')
//    }
// };

// isLeepyear(2024)


// function isLeepyear(year){
//     var result = year % 4 ;
//     if(result == 0){
//         return ' is leep year ';
//     }else{
//          return ' not a leep year ';
//     }
//  };
 
//  var totalResult =  isLeepyear(2024);
//  console.log(totalResult)


// function isLeepyear(year){
//     var result = year % 4 ;
//     if(result == 0){
//          return true;
//     }else{
//        return false;
//     }
//  };
 
//  var finalResul = isLeepyear(2024);
//  console.log(finalResul)


var year = 3855 ;
if(year% 400 == 0  && year % 100 ==0 ){
      console.log(year + ' is a leep year');
}  else{
    console.log(year + ' not a leep year ')
}