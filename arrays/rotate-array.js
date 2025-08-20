function rotateArrayBrute(nums, k){
    k = k%nums.length;
    console.log(k)
    for(i = 1 ; i<=k;i++){
        let lastElement = nums[nums.length-1];
        for(j=nums.length-1; j>0; j--){
            nums[j] = nums[j-1];
        }
        nums[j] = lastElement;
    }
    console.log(nums);
}

function rotateArray(nums, k){
   

    function reverse(arr, left, right){
        while(left < right){
            [arr[left], arr[right]] = [arr[right],arr[left]];
            left ++;
            right--;
        }
    }

    reverse(nums, 0, nums.length-1);
    
     k = k % nums.length;
    reverse(nums, 0, k-1);
    
    reverse(nums, k,nums.length-1)
    console.log(nums);
}
rotateArray([1,2,3,4,5,6,7], 3)