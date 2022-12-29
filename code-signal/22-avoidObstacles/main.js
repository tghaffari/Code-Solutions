// Javascript program to find length of a jump
// to reach end avoiding all obstacles

function avoidObstacles(obs) {
  // Insert all array elements in a hash table
  // and find the maximum value in the array
  const hs = new Set();
  let max = obs[0];
  for (let i = 0; i < obs.length; i++) {
    hs.add(obs[i]);
    max = Math.max(max, obs[i]);
  }

  // checking for every possible length which
  // yield us solution
  for (let i = 1; i <= max; i++) {
    let j;
    for (j = i; j <= max; j = j + i) {

      // if there is obstacle, break the loop.
      if (hs.has(j)) { break; }
    }

    // If above loop did not break
    if (j > max) { return i; }
  }

  return max + 1;
}

// Sort the inpur array in asending order

// You are given an array of integers representing coordinates of obstacles situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.You are allowed only to make jumps of the same length represented by some integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

//   Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// solution(inputArray) = 4.
