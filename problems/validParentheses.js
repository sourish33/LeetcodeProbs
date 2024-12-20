/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

 */

/**
 * Blurb
 * create matchingBraces
 * Create a stack
 * Loop over all elements in the string
 * if an element is in matchingBraces
 *      if stack is empty or the last element in stack is not the correct matchingBrace, return
 *      pop the tack
 * else:
 *  push into the stack
 * return true if stack is empty
 */


//Better Version
const isValid = (s) => {
    const stack = []
    const matchingBrackets = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let el of s) {
        if (el in matchingBrackets){
            if (stack.length === 0 || stack[stack.length-1] !== matchingBrackets[el]) return false
            stack.pop()
        } else{
            stack.push(el)
        }

    }
    console.log(stack)
    return stack.length === 0

}

let res = isValid("()")
console.log(res)