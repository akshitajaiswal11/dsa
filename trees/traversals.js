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

//DFS Traversals
function inOrder(root){
    //LNR
    if(!root) return;
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}
 
function preOrder(root){
    //NLR
    if(!root) return;
    console.log(root.val);
    preOrder(root.left);  
    preOrder(root.right);
}

function postOrder(root){
    //LRN
    if(!root) return;
    postOrder(root.left);  
    preOrder(root.right);
    console.log(root.val);
}

console.log("Inorder ->")
inOrder(root)

console.log("Prorder ->")
preOrder(root)

console.log("Postorder ->");
postOrder(root);

//BFS Traversal
function leverlOrder(root){
    if(!root) return;

    let queue = [root];
    while(queue.length){
        let element = queue.shift();
        console.log(element.val);
        if(element.left) queue.push(element.left);
        if(element.right) queue.push(element.right);
    }
}

console.log("BFS Level Order ->")
leverlOrder(root);