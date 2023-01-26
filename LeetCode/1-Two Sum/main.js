
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let difference;
  const answerArray = [];

  for (let i = 0; i < nums.length; i++) {
    difference = target - nums[i];

    if (nums.includes(difference)) {
      const secondIndex = nums.indexOf(difference);
      if (secondIndex !== i) {
        answerArray.push(i);
        answerArray.push(secondIndex);
        return answerArray;
      }
    }
  }
};

console.log(twoSum);

// start with the first number
// find the difference between the first number and the target
// see if the array includes that number
// if it does, push the indexes into an array
// return that array

// 1. Two Sum
// Easy
// 42.6K
// 1.4K
// Companies
// Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.

// You can return the answer in any order.

//   Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//   Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// Constraints:

// 2 <= nums.length <= 104
//   - 109 <= nums[i] <= 109
//   - 109 <= target <= 109
// Only one valid answer exists.
