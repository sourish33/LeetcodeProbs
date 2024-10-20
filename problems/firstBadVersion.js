/**
 * You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

 */

// Simulate the first bad version (e.g., version 4 is the first bad one)
const firstBad = 2; // This is the known "bad" version for testing

// The isBadVersion function simulates the API
const isBadVersion = function(version) {
    return version >= firstBad; // Versions 4 and after are bad
};

// Now you can pass this function to your solution and test it
// const solution = function(isBadVersion) {
//     return function(n) {
//         let i = 1;
//         let j = n;
        
//         while (i < j) {
//             let mid = Math.floor((i + j) / 2);
//             if (isBadVersion(mid)) {
//                 j = mid; // Narrow the search to the left half
//             } else {
//                 i = mid + 1; // Narrow the search to the right half
//             }
//         }
//         return i; // The first bad version
//     };
// };

const solution = function(isBadVersion) {
    return function(n) {
        let i = 1
        let j = n

        while (i < j) {
            let mid = Math.floor( (i+j)/2 )
            if (isBadVersion(mid)) {
                j = mid
            } else {
                i = mid +1 
            }
        }
        return i
    }
}

// Test the solution with n versions
const n = 10; // Let's assume we have 10 versions
console.log(solution(isBadVersion)(n)); // Should print 4, since that's the first bad version
