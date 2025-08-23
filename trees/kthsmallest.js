class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);

function kthSmallest(root, k){
    let count = 0;

    let result;
    function dfs(root){
        if(!root) return null;
   
        dfs(root.left)
        count++;
        if(count === k) {
            result = root.val;
        }
        dfs(root.right)

    }
     dfs(root)
    console.log(result);
}

kthSmallest(root, 4)