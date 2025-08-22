class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

function countLeafNodes(root){
    if(!root) return 0;
    if(root.left == null && root.right == null) return 1;
    return countLeafNodes(root.left) + countLeafNodes(root.right);
}

console.log(countLeafNodes(root));