/**
 * Given a binary tree, determine if it is
height-balanced.
 */

//Blurb
// Write a helper function to keep track of both depth and balance

const isBalanced = (root) => {
    if (!root) return false

    const checkDepthAndBalance = (root) => {
        if (!root) return 0

        let leftDepth = checkDepthAndBalance(root.left)
        let rightDepth = checkDepthAndBalance(root.right)
        if (leftDepth === -1 || rightDepth === -1) return -1
        
        if (Math.abs(leftDepth - rightDepth) > 1) return -1

        return 1 + Math.max(leftDepth, rightDepth)
    }

    return checkDepthAndBalance(root) !== -1
}