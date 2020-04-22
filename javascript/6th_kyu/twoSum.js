// two loops
// outer loop locks in the first number
// inner loop then goes through remaining numbers and adds to the base number to check if it equals the target
// complexity: n2

// is there a more efficient way?

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}

console.log(twoSum([1,2,3], 4)); // [0, 2]
console.log(twoSum([2,2,3], 4)); // [0, 1]

// faster implementation
// loop through numbers
// check if target minus current exists in the object
// if it does not exist in the object, add it to the object

function twoSumFaster(numbers, target) {
    let store = {};

    for (let i = 0; i < numbers.length; i++) {
        if (store[target - numbers[i]]) { // check if target - current element exists in the store
            return [numbers.indexOf(target - numbers[i]), i];
        } else { // add the number to the store
            store[numbers[i]] = true;
        }
    }
}

console.log(twoSumFaster([1,2,3], 4)); // [0, 2]
console.log(twoSumFaster([2,2,3], 4)); // [0, 1]
