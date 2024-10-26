/**
 * Leetcode 125
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

 
 */

// const isPalindrome = (str) => {

//     const letters = "abcdefghijklmnopqrstuvwxyz0123456789"
//     let i = 0
//     let j = str.length-1

    
//     const strLower = str.toLowerCase()

//     while (j>=i) {

//         while(!letters.includes(strLower[i]) && i<str.length){
//             i++
//         }
//         while(!letters.includes(strLower[j]) && j>=0){
//             j--
//         }

//         if (!letters.includes(strLower[i])) i++
//         if (!letters.includes(strLower[j])) j--
        
//         if (strLower[i] === strLower[j]){
//             i++
//             j--
//         } else {
//             return false
//         }
//     }
//     return true
// }

//Better

var isPalindrome = function(s) {
    let alphanum = "0123456789abcdefghijklmnopqrstuvwxyz"

    let i = 0
    let j = s.length-1

    let str = s.toLowerCase()

    while (i < j) {
        if (!alphanum.includes(str[i])){
            i++
            continue
        }
        if (!alphanum.includes(str[j])){
            j--
            continue
        }
        if (str[i] !== str[j]) return false

        i++
        j--
    
    }

    return true  
};
const s = " "
console.log(isPalindrome(s))

