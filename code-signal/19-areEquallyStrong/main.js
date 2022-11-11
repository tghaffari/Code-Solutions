
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const me = [yourLeft, yourRight];
  const friend = [friendsLeft, friendsRight];

  if (me[0] === friend[0]) {
    friend.splice(0, 1);
  } else if (me[0] === friend[1]) {
    friend.splice(1, 1);
  }

  if (me[1] === friend[0]) {
    friend.splice(0, 1);
  }

  if (friend.length === 0) return true;
  return false;

}

solution(10, 15, 15, 10);

// check if first number exists in the other array, if it does, remove it
// check the next number.

// if there's two matches, return true, otherwise return false

// Call two arms equally strong if the heaviest weights they each are able to lift are equal.

// Call two people equally strong if their strongest arms are equally strong(the strongest arm can be both the right and the left), and so are their weakest arms.

// Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

//   Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// solution(yourLeft, yourRight, friendsLeft, friendsRight) = false.
//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] integer yourLeft

// A non - negative integer representing the heaviest weight you can lift with your left arm.

// Guaranteed constraints:
// 0 ≤ yourLeft ≤ 20.

// [input] integer yourRight

// A non - negative integer representing the heaviest weight you can lift with your right arm.

// Guaranteed constraints:
// 0 ≤ yourRight ≤ 20.

// [input] integer friendsLeft

// A non - negative integer representing the heaviest weight your friend can lift with his or her left arm.

// Guaranteed constraints:
// 0 ≤ friendsLeft ≤ 20.

// [input] integer friendsRight

// A non - negative integer representing the heaviest weight your friend can lift with his or her right arm.

// Guaranteed constraints:
// 0 ≤ friendsRight ≤ 20.

// [output] boolean

// true if you and your friend are equally strong, false otherwise.
