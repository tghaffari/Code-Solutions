function solution(inputArray) {
  var productArray = [];
  for (var i = 1; i < inputArray.length; i++) {
    var product = inputArray[i] * inputArray[i - 1];
    productArray.push(product);
  }
  productArray.sort(function (a, b) { return b - a; });

  var largestProduct = productArray[0];
  return largestProduct;
}

solution([3, 6, -2, -5, 7, 3]);

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//   Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.
