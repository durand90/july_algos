

/* given an array of integers "nums" and an "target", return indices 
of the two numbers such that they add up to the target. */

/* you may assume that each input would have exactly one solution, and \
you may not use the same element twice. 
you can return the answer in any order.*/


var nums = [2,7,11,15,13];
var target = 9;

var twoSums = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        for (let j = 0; j < nums.length; j++) {
            let item2 = nums[j];
            let sum = item + item2;
            if (sum === target) {
                return [i, j];
            }
        }
    }
}

console.log(twoSums(nums, target));