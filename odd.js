//iife

(function oddNum() {
    for(i=0;i<oddNum.length;i++){
        if(oddNum[i]%2!=0){
            console.log(oddNum[i]);
        }
    }
})([1,2,3,4,5,6]);

//anonymous function
const arr=[1,2,3,4,5,6,7,8,9,10];
var sampleNum=function() {
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
};

//arrow function
()=>{
    for(i=0;i<oddNum.length;i++){
        if(oddNum[i]%2!=0){
            console.log(oddNum[i]);
        }
    }
};