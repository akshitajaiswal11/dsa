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

function findHeight(root){
    if(!root) return null;

    return 1 + Math.max(findHeight(root.left), findHeight(root.right))
}

console.log(findHeight(root));