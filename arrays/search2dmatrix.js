const matrix = [
 [1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]
]

function searchIn2DMatrixBrute(matrix, target){
    let rows = matrix.length;
    for(let i = 0 ; i<rows; i++){
        let cols = matrix[i].length -1;
        if(matrix[i][0] <= target && matrix[i][cols] >= target ){
            if(matrix[i].indexOf(target) !== -1) return true;
        }
        else continue;
    }
    return false;
}

function searchIn2DMatrix(matrix, target){
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0; 
    let right = rows * cols -1;
    while(left <= right){
        console.log(left, right)
        const mid = Math.floor((left + right) / 2);
        //now need to find i and j of matrix
        //row = mid / cols;
        //col = mid % cols;
        //eg: 5 will be row = 5/4 = 1 col = 5%4 = 1, so 5th element in 2d will be [1][1] rows 1 cols 1
        let element = matrix[Math.floor(mid/cols)][mid%cols];
        console.log(element)
        if(element === target) return true;
        else if(element < target) left = mid + 1;
        else right = mid - 1;
    }
    return false
}
console.log(searchIn2DMatrix(matrix, 3))