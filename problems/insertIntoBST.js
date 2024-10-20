/**
 * You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
 * Return the root node of the BST after the insertion. 
 * It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

const insertIntoBST = (root, val) => {
    if (!root) return new TreeNode(val)
    if (val === root.val) return root

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val)
    } else if (val > root.val) {
        root.right = insertIntoBST(root.right, val)
    }
    return root
}
