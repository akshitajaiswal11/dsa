class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertNode(root, val) {
        if (!root) {
            return new Node(val);  // create new node if current spot is empty
        }

        if (val < root.val) {
            root.left = this.insertNode(root.left, val);  // recursive left
        } else if (val > root.val) {
            root.right = this.insertNode(root.right, val);  // recursive right
        }
        // if val == root.val, do nothing (no duplicates)
        return root;
    }

    insert(val) {
        this.root = this.insertNode(this.root, val);  // start from root
    }

    deleteNode(root, val) {
        if (!root) return null;
        else if (val < root.val) {
            root.left = this.deleteNode(root.left, val)
        } else if (val > root.val) {
            root.right = this.deleteNode(root.right, val)
        } else if (val === root.val) {
            if (!root.left && !root.right) return null;
            else if (!root.left) return root.right;
            else if (!root.right) return root.left;
            else {
                let minVal = this.findMin(root.right);
                root.val = minVal;
                root.right = this.deleteNode(root.right, minVal);
            }
        }
        return root;
    }

    delete(val){
        this.root = this.deleteNode(this.root, val);
    }

    search(val){
        if(!this.root) return false;
        if(this.root.val === val) return true;
        let current = this.root;
        while(current){
            if(current.val === val) return true;
            else if(val < current.val){
                current = current.left
            }else if( val > current.val){
                current = current.right
            }
        }
        return false;
    }

    findMin(node) {
        if (!node) return null;
        while (node.left) node = node.left
        return node.val;
    }
    print() {
        const result = [];


        function preOrder(node) {
            if (!node) {
                //result.push(null)
                return;
            }
            result.push(node.val);
            preOrder(node.left);
            preOrder(node.right);
        }
        preOrder(this.root);
        console.log(result)
    }
}

const tree = new BST();
tree.insert(2);
tree.insert(5);
tree.insert(1)
tree.insert(10);
tree.print();
console.log(tree.findMin(tree.root))
console.log(tree.search(5))

console.log(tree.search(15))

console.log(tree.search(1))

tree.delete(5);
tree.print();
tree.delete(1);
tree.print();
tree.delete(2);
tree.print();
tree.delete(10);
tree.print();
