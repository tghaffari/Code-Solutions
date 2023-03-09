
function longestCommonPrefix(strs) {

  let commonPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    if (strs.every(word => word[i] === strs[0][i])) {
      commonPrefix += strs[0][i];
    } else break;
  }

  return commonPrefix;

}

console.log('["cir","car"]:', longestCommonPrefix(['cir', 'car']));

console.log('["flower","flow","flight"]:', longestCommonPrefix(['flower', 'flow', 'flight']));
console.log('["dog","racecar","car"]:', longestCommonPrefix(['dog', 'racecar', 'car']));

// start with the first word
// get the first letter of the first word
// check it against the letter in each subsequent word
// if it doesn't match, break
// if it matches, add to holder variable  ``
// if there are no matches, return empty string

// 14. Longest Common Prefix
// Easy
// 12.9K
// 3.8K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//   Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
