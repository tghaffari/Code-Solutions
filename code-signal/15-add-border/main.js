function solution(picture) {
  const borderLength = picture[0].length + 2;
  const borderPicture = [];

  const border = new Array(borderLength).fill('*').join('');

  for (let i = 0; i < picture.length; i++) {
    const borderedWord = `*${picture[i]}*`;
    borderPicture.push(borderedWord);
  }

  borderPicture.unshift(border);
  borderPicture.push(border);

  return borderPicture;
}

solution(['abc', 'ded']);

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example

// For

// picture = ["abc",
//   "ded"]
// the output should be

// solution(picture) = ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]

// Input / Output

// [execution time limit]4 seconds(js)

// [input] array.string picture

// A non - empty array of non - empty equal - length strings.

// Guaranteed constraints:
// 1 ≤ picture.length ≤ 100,
//   1 ≤ picture[i].length ≤ 100.

//   [output] array.string

// The same matrix of characters, framed with a border of asterisks of width 1.
