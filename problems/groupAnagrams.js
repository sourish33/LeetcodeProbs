/**
 * Leetcode 49
 * Given an array of strings strs, group the
anagrams
together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

    There is no string in strs that can be rearranged to form "bat".
    The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 */

// const generateAlphabetObj = () => {
//     const letters = "abcdefghijklmnopqrstuvwxyz"

//     let alphabetObj = {}
//     for (let letter of letters){
//         alphabetObj[letter] = 0
//     }
//     return alphabetObj
// }

// const encode = (word) => {
//     const alphabetObj = generateAlphabetObj()
//     for (let letter of word){
//         alphabetObj[letter] +=1
//     }
//     return Object.values(alphabetObj).join("-")
// }

// const groupAnagrams = (strs) => {

//     if (strs.length === 1) return [strs]

//     let groups = {}
//     for (let str of strs) {
//         let encodedStr = encode(str)
//         if (groups[encodedStr] === undefined) {
//             groups[encodedStr] = [str]
//         } else {
//             groups[encodedStr].push(str)
//         }
//     }
//     return Object.values(groups)
// }

const primeMapping = {
    a: 2,
    b: 3,
    c: 5,
    d: 7,
    e: 11,
    f: 13,
    g: 17,
    h: 19,
    i: 23,
    j: 29,
    k: 31,
    l: 37,
    m: 41,
    n: 43,
    o: 47,
    p: 53,
    q: 59,
    r: 61,
    s: 67,
    t: 71,
    u: 73,
    v: 79,
    w: 83,
    x: 89,
    y: 97,
    z: 101,
}


// const encode = (str) => str.split("").reduce((acc, cur) => acc * primeMapping[cur], 1,)

// const encode = (str) =>{
//     let acc = 1
//     for (let letter of str){
//         acc*=primeMapping[letter]
//     }
//     return acc
// }

// const encode = (str) => str.split("").sort().join("")

// const groupAnagrams = (strs) => {
//     const groups = {}
//     for (let word of strs) {
//         let encoded = encode(word)
//         if (encoded in groups){
//             groups[encoded].push(word)
//         } else {
//             groups[encoded] = [word]
//         }
//     }
//     return Object.values(groups)
// }



const encode = (word) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let charObj = {}
    for (let char of alphabet) {
        charObj[char] = 0
    }
    for (let char of word){
        charObj[char] += 1
    }
    return Object.values(charObj).join("-")

}

const groupAnagrams = (words) => {
    const anagrams = {}
    for (let word of words) {
        let encoded = encode(word)
        if (encoded in anagrams) {
            anagrams[encoded].push(word)
        } else {
            anagrams[encoded] = [word]
        }
    }
    console.log(anagrams)
    return Object.values(anagrams)
}

// console.log(encode("bdddddddddd"))
// console.log(encode("act"))

// console.log(groupAnagrams( ["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))
