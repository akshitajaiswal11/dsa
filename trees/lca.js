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

function lowestCommonAncestor(root, p ,q){
    if(root == null || root.val == p || root.val == q) return root;

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p ,q);

    if(left && right){
        //means p & q are in left and right subtree
        return root.val;
    }
    return left ? left : right;
}

console.log(lowestCommonAncestor(root, 4, 5));