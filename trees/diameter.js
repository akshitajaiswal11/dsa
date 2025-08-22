class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(5);
root.left = new Node(8);
root.right = new Node(6);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(9);

let diameter = 0;

function height(root) {
    if (!root) return 0;

    const left = height(root.left, diameter);
    const right = height(root.right, diameter);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
}

height(root);
console.log(diameter);