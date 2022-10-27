function solution(inputArray) {
  let count = 0;
  let i = 1;

  while (i < inputArray.length) {
    if (inputArray[i - 1] < inputArray[i]) {
      i++;
    } else {
      inputArray[i] = inputArray[i] + 1;
      count++;
    }
  }
  return count;
}

solution([1, 1, 1]);

// You are given an array of integers.On each move you are allowed to increase
// exactly one of its element by one.Find the minimal number of moves required
// to obtain a strictly increasing sequence from the input.

//   Example

// For inputArray = [1, 1, 1], the output should be
// solution(inputArray) = 3.

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.integer inputArray

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
//   -105 ≤ inputArray[i] ≤ 105.

//   [output] integer

// The minimal number of moves needed to obtain a strictly increasing sequence
// from inputArray.
//   It's guaranteed that for the given test cases the answer always fits signed
// 32-bit integer type.
