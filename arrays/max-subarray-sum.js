const arr = [-2, -3, 4, -1, -2, 1, 5, -3]

function printAllSubArrays(arr){
    for(i = 0 ; i< arr.length ; i++){
        for(j = i ; j < arr.length; j++){
            console.log(arr.slice(i,j+1));
        }
    }
}
//printAllSubArrays(arr);

function maxSubArraySum(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];
    let currentStart = 0;
    let final = [0,0]
    for(i= 1; i<arr.length;i++){

        const newSum = currentSum + arr[i];
        //if current element is grater than sum of current + previous sum current sum  = current element, update start and end as i;
        if(arr[i] > newSum ){
            currentSum = arr[i]
           currentStart = i;
        }else {
            currentSum = newSum;
           
        }
       
       // currentSum = Math.max(arr[i], newSum);
        if(currentSum > maxSum){
            final = [currentStart, i];
        }
        maxSum = Math.max(maxSum, currentSum);
        
    }
    console.log(arr.slice(final[0], final[1]+1))
    return maxSum;
}

console.log(maxSubArraySum(arr));