function solution(inputString) {
  let str = inputString;
  const re = /\([A-Za-z]*\)/g;

  while (re.test(str)) {
    str = str.replace(re, substr => substr.slice(1, substr.length - 1).split('').reverse().join(''));
  }

  return str;
}

solution(('bar'));
// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well - formed with matching()s.

//   Example

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
//   Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
