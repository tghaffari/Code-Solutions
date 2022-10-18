function solution(s1, s2) {
  let sum = 0;

  const s1Object = {};
  const s2Object = {};

  for (let i = 0; i < s1.length; i++) {
    if (s1Object[s1[i]] === undefined) {
      s1Object[s1[i]] = 0;
    } else {
      s1Object[s1[i]] = s1Object[s1[i]] + 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (s2Object[s2[i]] === undefined) {
      s2Object[s2[i]] = 0;
    } else {
      s2Object[s2[i]] = s1Object[s2[i]] + 1;
    }
  }

  for (const key in s1Object) {
    if (s2Object[key] !== undefined) {
      if (s1Object[key] <= s2Object[key]) {
        sum += s1Object[key];
      } else if (s2Object[key] <= s1Object[key]) {
        sum += s2Object[key];
      }
    }
  }
  return sum;
}

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// make a sum variable to hold the number of common characters
// Make an object for s1's characters and count how many of each there are
// using a for loop
//    if the letter doesn't exist, the property will be undefined.
//    if if it does exist (doesn't equal undefined), add one to it's existing value
// Do the same for S2
// Compare the properties of s1 to s2. If they share the property,
// add the smaller value to sum
