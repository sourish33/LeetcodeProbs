/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

 */

//iterative
// const search = (nums, target) => {
//     let i = 0
//     let j = nums.length-1

//     while (i <= j){
//         let mid = Math.floor((i+j)/2)
//         if (nums[mid] === target) return mid
//         if ( target < nums[mid]) {
//             j = mid-1
//         } else {
//             i = mid+1
//         }
//     }
//     return -1
// }

//recursive
const search = (nums, target, i = 0, j = nums.length - 1) => {
    if (i>j) return -1
    let mid = Math.floor((i + j) / 2)
    if (nums[mid] === target) return mid
    if (target < nums[mid]) {
        return search(nums, target, i, mid - 1)
    } else {
        return search(nums, target, mid + 1, j)
    }
}

let res = search([-1, 0, 3, 5, 9, 12], 12)
console.log(res)
