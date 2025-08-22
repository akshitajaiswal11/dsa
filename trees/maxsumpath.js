class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(9);
root.left = new Node(6);
root.right = new Node(-3);
root.right.left = new Node(-6);
root.right.right = new Node(2);
root.right.right.left = new Node(2);

root.right.right.left.left = new Node(-6);
root.right.right.left.right = new Node(-6);
root.right.right.left.left.left = new Node(-6);


function preOrder(root) {
    //NLR
    if (!root) return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}

preOrder(root)
let maxPath = -Infinity;
function maxSumPath(root) {
    if (root == null) return 0;

    let leftSum = maxSumPath(root.left);

    let rightSum = maxSumPath(root.right);

    if (leftSum < 0) leftSum = 0
    if (rightSum < 0) rightSum = 0;
    const allNodesSum = leftSum + rightSum + root.val;
    maxPath = Math.max(allNodesSum, maxPath)
    const sum = Math.max(leftSum, rightSum) + root.val;

    return sum;
}

maxSumPath(root);
console.log(maxPath)