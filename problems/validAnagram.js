/**
 * Given two strings s and t, return true if t is an
anagram
of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 */

//Not a good solution as its nlogn 
// const isAnagram = (s,t) => {
//     const sortedS = s.split('').sort().join('')
//     const sortedT = t.split('').sort().join('')
//     return sortedS === sortedT
// }

// const isAnagram = (s,t) => {
//     let charCount = {}
//     for (let char of s){
//         charCount[char] = (charCount[char] || 0) + 1
//     }

//     for (let char of t){
//         if (charCount[char] == undefined) return false
//         charCount[char]--
//     }
//     for (let char in charCount){
//         if (charCount[char] !== 0) return false
//     }
//     return true
    
// }



console.log(isAnagram("anagram", "nagaram"))