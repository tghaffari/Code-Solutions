function solution(n) {

  const numConversion = num => Number(num);
  const nArray = Array.from(String(n), numConversion);

  const firstHalf = nArray.slice(0, nArray.length / 2);
  const secondHalf = nArray.slice(nArray.length / 2);

  const firstSum = firstHalf.reduce((previousValue, currentValue) => previousValue + currentValue);
  const secondSum = secondHalf.reduce((previousValue, currentValue) => previousValue + currentValue);

  if (firstSum === secondSum) {
    return true;
  } else {
    return false;
  }
}

solution(1230);

// Ticket numbers usually consist of an even number of digits.A ticket number is
// considered lucky if the sum of the first half of the digits is equal to the
// sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

// Conver the input to an array
// Use slice to split it in half
// Use reduce on each half to get the sum
// Compare the sums.
//    if equal, return true.
//    otherwise, return false
