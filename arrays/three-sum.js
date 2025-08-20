function threeSum(arr){
    const array = arr.sort((a,b) => a- b );
    let result = [];
    for(let  i = 0 ; i < array.length - 2; i++){
        if(i > 0 && array[i] === array[i-1]) continue;
        let start = i+1;
        let end = array.length -1;
        while(start<end){
            const sum = array[i] + array[start] + array[end];
            if(sum === 0) {
                result.push([array[i] , array[start] , array[end]]);
                while(start < end && array[start+1] === array[start]) start++ ;
                while(start < end && array[end-1] === array[end]) end--;
                start++
                end--
            }
            else if(sum < 0) start++;
            else end--;
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))