// https://codeburst.io/javascript-essentials-arrays-2d275b9598c5

// Adding and Removing Basics
const arrTest = [1, 2, 3];

const removeLast = arrTest.pop();
console.log(removeLast);
console.log(arrTest);

const removeFirst = arrTest.shift();
console.log(removeFirst);
console.log(arrTest);

const addLast = arrTest.push(11);
console.log(addLast);
console.log(arrTest);

const addFirst = arrTest.unshift(1);
console.log(addFirst);
console.log(arrTest);

const addAndRemove = arrTest.splice(1, 1, 'added');
console.log(addAndRemove);
console.log(arrTest);

// Modify Every element in the array
const prices = [5, 10, 20, 18];

const halfPrice = prices.map(price => price / 2);
console.log(halfPrice)

const nums = [1, 2, 3, 4, 5];

const newNums = nums.map(num => num % 2 === 0 ? ++num : num)

console.log(newNums);


// Copy without mutatiting: Slice before you splice
const arr = [1, 2, 3, 4, 5];

// CAN USE SLICE
// const newArr = arr.slice();

// Can USE Spread Operator
const newArr = [...arr];

console.log(newArr);

// Find he Elements Index
const firstLargerThan = arr.find(n => n > 3);
console.log(firstLargerThan)

const firstLargerIndex = arr.findIndex(n => n > 3)
console.log(firstLargerIndex);

const largerThan = arr.filter(n => n > 3);
console.log(largerThan);


// Is this Element in the array?
const people = ['Sunny', 'Dan', 'Ryan', 'Waldo', 'Que'];

const hasWaldo = people.includes('Waldo')
console.log(hasWaldo);


// NO Duplicates
const dupes = [1, 1, 2, 2, 3, 3, ];

const uniqueSet = new Set(dupes);
console.log(uniqueSet);
const uniqueArr = [ ...uniqueSet ];
console.log(uniqueArr);


// Does "EVERY" item fulfill the requirements
const ages = [27, 30, 15, 23, 21, 19, 18, 16];

const oldEnough = ages.every(age => age >= 18)
console.log(oldEnough);


// Do the items fulfill the requirements?
const group = [16, 42, 14, 38];

const oldEnough1 = group.some(age => age >= 18);
console.log(oldEnough1);


// Populate an empty Array
const emptyArr = Array(5);
console.log(emptyArr)

emptyArr.fill(0);
console.log(emptyArr)


// Sorting 
const arr1 = [10, 5, 3, 11];
// This sort is broken
const sorted = arr1.sort()
console.log(sorted)

// Sort needs 'a and b' to be able to sort properly 
console.log(arr.sort((a, b) => a - b));


// Reverse a String
const str = 'abc';

const reversed = str.split('').reverse().join('');
console.log(reversed)


// Convert Array into an Object
const arrObj = [ ['key', 'value'],['x', 500]];

const obj = arrObj.reduce((acc, e) => {
    const [key, value] = e
    acc[key] = value 
    return acc
}, {});

console.log(obj);

const arrLoop = ['a', 'b', 'c'];


// Other ways to Loop arrays
arrLoop.forEach((val, i, arr) => {
    console.log(val, i);
});

for (let [index, val] of arrLoop.entries()) {
    console.log(val, index);
};

for (let key in arrLoop) {
    console.log(key)
};

for (let value of arrLoop) {
    console.log(value)
};