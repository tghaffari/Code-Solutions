function solution(inputString) {

  var i = 0;
  var a = inputString.length - 1;
  while (i < inputString.length) {
    if (inputString[i] !== inputString[a]) {
      return false;
    }
    i++;
    a--;
  }
  return true;
}

solution('abac');

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
