/**Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) {
        return false
    }

    let s1Map = new Array(26).fill(0)
    let s2Map = new Array(26).fill(0)

    for(let i = 0; i < s1.length; i++) {
        s1Map[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
        s2Map[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    let count = 0
    for(let i = 0; i < 26; i++) {
        if(s1Map[i] == s2Map[i]) {
            count++
        }
    }

    for(let i = 0; i < s2.length - s1.length; i++) {
        if(count == 26) {
            return true
        }
        let r = s2.charCodeAt(i + s1.length) - 'a'.charCodeAt(0)
        let l = s2.charCodeAt(i) - 'a'.charCodeAt(0)

        s2Map[r]++
        if(s2Map[r] == s1Map[r]) {
            count++
        } else if(s2Map[r] == s1Map[r] + 1) {
            count--
        }

        s2Map[l]--
        if(s2Map[l] == s1Map[l]) {
            count++
        } else if(s2Map[l] == s1Map[l] - 1) {
            count--
        }
    }

    return count == 26
};