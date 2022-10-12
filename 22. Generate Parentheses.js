/**Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const solution = []
    function generateCombo(leftPCount, rightPCount, partial){
        if(leftPCount > rightPCount) return
        if(!leftPCount && !rightPCount ) solution.push(partial)
        if(leftPCount > 0 ) generateCombo (leftPCount -1, rightPCount, partial + '(')
        if(rightPCount > 0 ) generateCombo (leftPCount, rightPCount - 1, partial + ')')
        
    }
    generateCombo(n,n,'')
    return solution
};

//time O(2n) space O(2n)