function solution(a) {
  const team1 = [];
  const team2 = [];

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1.push(a[i]);
    } else {
      team2.push(a[i]);
    }
  }

  const team1weight = (team1.length === 0)
    ? 0
    : team1.reduce((prevValue, currValue) => prevValue + currValue);
  const team2weight = (team2.length === 0)
    ? 0
    : team2.reduce((prevValue, currValue) => prevValue + currValue);

  console.log(team1weight, team2weight);
  return [team1weight, team2weight];

}

solution([50, 60, 60, 45, 70]);
// Several people are standing in a row and need to be divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third
// goes into team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.
// Return an array of two integers, where the first element is the total weight
// of team 1, and the second element is the total weight of team 2 after the division is complete.

//   Example

// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105]

// Loop over the array.
//    If its index is even, push it to one array.
//    If it's odd, push it to the other array
// Sum the total of each array using reduce
// Push the reduced values to a new array and return that from the solution
