const array=[1,2,3,4,5,6,7,8,9,10];
var dupArr=function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  };
  dupArr();