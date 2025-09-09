function findDuplicatesUsingSort(arr){
    arr.sort((a,b) => a - b);

    for(let i = 0 ; i < arr.length - 1; i++){
        if(arr[i+1] == arr[i]) return true;
    }
    return false;
}

console.log(findDuplicatesUsingSort([5,1,4,2,3]));

function findDuplicatesUsingSet(arr){
    let set = new Set();
    for(let elem of arr){
        if(set.has(elem)) return true;
        else set.add(elem)
    }
    return false;
}

console.log(findDuplicatesUsingSet([7,4,6,3,9,2]));
