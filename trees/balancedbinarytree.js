class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);
//root.right.right.right = new Node(11);

function isBalancedBinaryTree(root){
    if(!root) return 0;

    const leftHeight = isBalancedBinaryTree(root.left);
    if(leftHeight == -1) return leftHeight;
    
    const rightHeight = isBalancedBinaryTree(root.right);
    if(rightHeight == -1) return rightHeight;

    const heightDiff = Math.abs(leftHeight - rightHeight);
    if(heightDiff > 1) return -1;
    else return Math.max(leftHeight, rightHeight) + 1;
}

console.log(isBalancedBinaryTree(root) == -1 ? false : true)