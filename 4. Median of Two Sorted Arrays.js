/**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * ///brute force : 
 */
 var findMedianSortedArrays = function(nums1, nums2){
    var numbers = nums1.concat(nums2)
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}
// 1 liner
const findMedianSortedArrays = (nums1, nums2) => (
    [...nums1,...nums2].sort((a,b) => a-b).filter((x, index) => index === (Math.floor((nums1.length+nums2.length-1)/2)) || index === (nums1.length+nums2.length)/2).reduce((a,b) => a+b)/( (nums1.length+nums2.length)%2 === 0 ? 2 : 1)
);
//merge sort 
var findMedianSortedArrays = function(nums1, nums2) {
    var merged = [];
    while (nums1.length && nums2.length) {
      merged.push(nums1[0] > nums2[0] ? nums2.shift() : nums1.shift());
    }
    if (nums1.length) merged.push(...nums1);
    if (nums2.length) merged.push(...nums2);
    var length = merged.length;
  
    if (length % 2) {
      return merged[Math.floor(length / 2)];
    }
    return (merged[length / 2 - 1] + merged[length / 2]) / 2;
  };