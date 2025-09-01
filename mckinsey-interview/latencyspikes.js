// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]



function minimumAbsDifference(arr){
    arr = arr.sort((a,b) => a-b);
    let result = [];
    let minDiffernce = Infinity;
    for(let i = 0 ; i <arr.length-1 ;i++){
        let difference = arr[i+1] - arr[i];
        if(difference < minDiffernce){
            minDiffernce = difference;
            result = [[arr[i], arr[i+1]]]
        }else if(difference === minDiffernce){
            result.push([arr[i], arr[i+1]])
        }
    }
    return result;
}

console.log(minimumAbsDifference([4,2,1,3]));