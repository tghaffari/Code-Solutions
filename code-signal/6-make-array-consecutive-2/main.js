function solution(statues) {
  var sortedStatues = statues.sort(function (a, b) {
    return (a - b);
  });
  var firstNumber = statues[0];
  var lastNumber = statues[statues.length - 1];
  var missingStatues = [];

  for (var i = firstNumber; i <= lastNumber; i++) {
    if (sortedStatues.includes(i) !== true) {
      missingStatues.push(i);
    }
  }

  return missingStatues.length;

}
solution([6, 2, 3, 8]);

// Ratiorg got statues of different sizes as a present from CodeMaster for his
// birthday, each statue having an non - negative integer size.Since he likes to
// make things perfect, he wants to arrange them from smallest to largest so that
// each statue will be bigger than the previous one exactly by 1. He may need some
// additional statues to be able to accomplish that.Help him figure out the minimum
// number of additional statues needed.

//   Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.
