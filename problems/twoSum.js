/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 */

/**
 * Blurb
 * First loop through the nums array and create a complements object which stores complements as keys and indices of elements as values
 * Write another loop over nums to see if any element is in complements. If so return the index of the element and its complement.
 * Combine the two loops
 */

// const twoSum = (nums, target) => {
//     const complements = {}

//     for (let i=0;i<nums.length;i++){
//         let el = nums[i]
//         if (el in complements && i !== complements[el]) {
//             return [i, complements[el]]
//         }
//         let complement = target - el
//         complements[complement] = i
//     }

// }

var twoSum = function(nums, target) {
    
    let complements = {}
    for (let i=0;i<nums.length;i++) {
        let num = nums[i]
        if (num in complements) return [i, complements[num]]
        let complement = target - num
        complements[complement] = i
    }

    // for (let i=0;i<nums.length; i++ ){
    //     let num = nums[i]
    //     if (num in complements && i!==complements[num]) return [i, complements[num]]
    // }

};

console.log(twoSum([3,2,4], 6))