// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var count = 0;
    for(var i = 0; i< arr.length - 1; i++){
        if(arr[i] > 4){
            count =(count + 1);
        }
    }
    return count
}
var result = greaterThanY([1,6,8,3,5,2], 4);
console.log(result);


