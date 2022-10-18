function solution(a) {

  const treesIndex = [];
  const heights = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treesIndex.push(i);
    } else {
      heights.push(a[i]);
    }
  }

  const sortedHeights = heights.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < treesIndex.length; i++) {
    sortedHeights.splice(treesIndex[i], 0, -1);
  }

  return sortedHeights;

}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);

// Some people are standing in a row in a park.There are trees between them
// which cannot be moved.Your task is to rearrange the people by their
// heights in a non - descending order without moving the trees.People can
// be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// Loop over the given array
//  if the number is equal to -1, store that index in an array
// if it isn't a  tree, push the value into a new array
// Sort the values in the new array in ascending order.

// Using the saved indexes add the trees back into their respective positions
// in the sorted array
