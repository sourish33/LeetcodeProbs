/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

 */

const canConstruct = (ransomNote, magazine) => {
    const magObj = {}
    for (let char of magazine){
        magObj[char] = (magObj[char] || 0) + 1
    }

    for (let char of ransomNote) {
        if (!magObj[char] || magObj[char] === 0) return false
        magObj[char]--
    }

    return true
}
console.log(canConstruct("aa", "ab"))