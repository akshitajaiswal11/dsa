function twoSum(array, target){
    const map = new Map();

    for(i = 0 ; i<array.length ; i++){
        const complement = target - array[i];
        if(map.has(complement)){
            return [i, map.get(complement)]
        }
        map.set(array[i], i);
    }
    return null;
}
const array = [2,6,8,4];
console.log(twoSum(array,12));