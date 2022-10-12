// Brute force but wont submit on leetcode because too slow 
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function(s){
    
    if(!s)   return []; 

    let substrings = new Set()

    for(let length = 1 ; length <= s.length; length++){
        for(let  i = 0 ; (i + length) <= s.length ; i++){
            substrings.add(s.substr(i, length));
        }
    }
    var az = Array.from(substrings)
    
    var twoJz = az.filter(v => v.length === new Set(v).size)
    var lx = twoJz[twoJz.length - 1]
    return lx.length

   
}
/** solution using hash map : 
 * @param {string} s
 * @return {number}
 */ 
 var lengthOfLongestSubstring = function(s) {
    let max = 0
    let begin = 0
    let map = {}
    for(let end = 0; end<s.length;end++){
        if(map[s[end]] !== undefined && map[s[end]] >= begin){
            begin = map[s[end]] + 1
        }
        map[s[end]]=end
        max = Math.max(max, end - begin + 1)
    }
    return max
};

//time O(n) space O(1)
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));