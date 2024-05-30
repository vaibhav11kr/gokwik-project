function SumSquares(array) {
    let sum = 0;

    function helper(arr){
       for(let el of arr){
           if(Array.isArray(el)){
               helper(el);
           }else{
               sum += (el*el);
           }
       }
    }
    helper(array);
    return sum;
}

var l = [1, 2, 3];
console.log(SumSquares(l)); 

l = [[1, 2], 3];
console.log(SumSquares(l)); 

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); 

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); 
