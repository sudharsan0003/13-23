'use strict';
//1,
const removeVowels = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      continue;
    }
    result += str[i];
  }
  return result;
};
console.log(removeVowels('javascript'));
//2,
function isPangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetSet = new Set(alphabet);

  for (const letter of str) {
    alphabetSet.add(letter);
  }
  return alphabetSet.size === 26;
}
console.log(isPangram('hello'));

//3,
function getUniqueValues(i) {
  const uniqueValues = [];
  for (const value of i) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
}
console.log(getUniqueValues(['a', 'b', 'a', 'c', 'b']));

//4,
function findCommonElements(arr1, arr2) {
  const commonElements = [];
  for (const value of arr1) {
    if (arr2.includes(value)) {
      commonElements.push(value);
    }
  }
  return commonElements;
}
console.log(
  findCommonElements([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [0, 2, 4, 6, 8, 10])
);

//6,
var countdown = 60;
var timerInterval;
function updateTimer() {
  countdown--;
  document.querySelector('.countdown-timer').innerHTML = countdown;

  if (countdown <= 0) {
    clearInterval(timerInterval);
    document.querySelector('.countdown-timer').innerHTML = "Time's is Over!";
  }
}

timerInterval = setInterval(updateTimer, 100);

//7,
/* about ,project,skill sec.*/
