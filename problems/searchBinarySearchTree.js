/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. 
If such a node does not exist, return null.

*/

const searchBST = (root, key) => {
    if (!root) return null

    if (key === root.key) return root
    if (key < root.key) return searchBST(root.left, key)
    if (key > root.key) return searchBST(root.right, key)

}