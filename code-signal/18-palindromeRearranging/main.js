
function solution(inputString) {

  const stringObject = {};

  for (let i = 0; i < inputString.length; i++) {
    if (stringObject[inputString[i]] === undefined) {
      stringObject[inputString[i]] = 1;
    } else {
      stringObject[inputString[i]] = stringObject[inputString[i]] + 1;
    }
  }

  let count = 0;
  for (const key in stringObject) {
    if (stringObject[key] % 2 !== 0) {
      count++;
    }
  }

  if (count > 1) return false;
  return true;
}

solution('aabb');

// Create a map of the input string
// Create a var to hold count
// If the letter type isn't even, increment count
// If count is greate than 1, return false
// Otherwise return true

// Given a string, find out if its characters can be rearranged to form a palindrome.

//   Example

// For inputString = "aabb", the output should be
// solution(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] string inputString

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 50.

// [output] boolean

// true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
