/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest
palindrome
 that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

 */

var longestPalindrome = function(s) {
    let freqs = {}
    for (let char of s) {
        freqs[char] = (freqs[char] || 0) + 1
    }
    let foundOdd = false
    let longestPalindrome = 0
    for (let freq of Object.values(freqs)){
        if (freq%2 === 0){
            longestPalindrome += freq
        } else {
            longestPalindrome += freq-1
            foundOdd = true
        }
    }
    longestPalindrome += foundOdd?1:0
    return longestPalindrome
    
};

/** ChatGPT suggested optimizations
 * var longestPalindrome = function(s) {
    let freqs = {}
    for (let char of s) {
        freqs[char] = (freqs[char] || 0) + 1
    }
    let longestPalindrome = 0
    for (let freq of Object.values(freqs)){
        longestPalindrome += freq - (freq % 2) // Add even part directly
    }
    return longestPalindrome < s.length ? longestPalindrome + 1 : longestPalindrome
};

 */