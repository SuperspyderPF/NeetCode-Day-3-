/**Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0] 
//brute force 
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let res = []
    for(let i =0;i<temperatures.length;i++){
        let day = 0
        for(let j = i+1;j<temperatures.length;j++){
            if(temperatures[j] > temperatures[i]){
                day = j - i
                break
            }
        }
        res.push(day)
    }
    return res 
};

//time and space 0(n^2)

	/**
	 * @param {number[]} temperatures
	 * @return {number[]}
	 */
     var dailyTemperatures = function(temperatures) {
		if(temperatures.length === 1) return [0];
		let res = Array(temperatures.length).fill(0);
		//monotonicStack, this will have index of the values in the array in descending order
		let stack = [];

		for(let i = 0; i < temperatures.length; i++) {
			while(stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]) {
				let indexOfElement = stack.at(-1);
				let days = i - indexOfElement;
				res[indexOfElement] = days;
				stack.pop(); 
			}
			stack.push(i);
		}
		return res;
	};

    // time and space O(n)