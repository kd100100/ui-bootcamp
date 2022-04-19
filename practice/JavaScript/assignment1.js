console.log("\n-------ques 1-------");
/**
 * 1. Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */
const input = ["Dirk", "Plato", "Gwen"];
const output = [
    {
        index: 0,
        name: "Dirk",
    },
    {
        index: 1,
        name: "Plato",
    },
    {
        index: 2,
        name: "Gwen",
    },
];

const objectArray = input.map((name, index) => ({ index: index, name: name }));
console.log(objectArray);


console.log("\n-------ques 2-------");
/**
 * 2. Write a one liner function to calculate the total amount donated to a charity by all donors.
 * The data is presented in an array of objects:
 */
const donorsInfo = [
    {
        name: "Donor1",
        amount: 500,
    },
    {
        name: "Donor1",
        amount: 500,
    },
    {
        name: "Donor1",
        amount: 500,
    },
];
const total = donorsInfo.reduce((total, donor) => total + donor.amount, 0);
console.log(total);


console.log("\n-------ques 3-------");
/**
 * 3. Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
 */
const object = {
    firstName: "val",
    lastName: "val",
};
const outputLowerCase = ["firstname", "lastname"];

console.log(Object.keys(object).map((key) => key.toLowerCase()));

console.log("\n-------ques 4-------");
/**
 * 4. Write a JS Function to get the first and last index of the nth largest element in an array that satisfies a condition.
 * EG:
 * In an array of donors as below:
 */
const donorsInfo2 = [
    {
        name: "Donor1",
        amount: 1500,
    },
    {
        name: "Donor1",
        amount: 2500,
    },
    {
        name: "Donor1",
        amount: 5500,
    },
    {
        name: "Donor1",
        amount: 5300,
    },
];
/**
 * Consider only the donors who have donated more than 5000 and find the first index of the nth largest donor.
 */
let n = 2;
const sortedMoreThan5000 = donorsInfo2
    .filter((donor) => donor.amount > 5000)
    .sort((a, b) => b.amount - a.amount)[n - 1];
console.log(sortedMoreThan5000);


console.log("\n-------ques 5-------");
/**
 * 5. Write a JavaScript function to find the largest level of nesting for arrays.
 * Assume that we do not have circular references.
 */
const myNestedArray = [[[1, 2, 3]], 4, 5, 6, [[[[[7, 8, [9, [10]]]]]]]];
// Answer: 8

var max = 0;
const findNesting = (element, nestedAmount) => {
    nestedAmount++;
    element.map((el) => {
        if (Array.isArray(el)) {
            nestedAmount = findNesting(el, nestedAmount);
            max = max > nestedAmount ? max : nestedAmount;
            nestedAmount--;
        }
    });

    return nestedAmount;
};

findNesting(myNestedArray, 0);
console.log(max);


console.log("\n-------ques 6-------");
/**
 * 6. Write a JavaScript program to get the index of the function in an array of functions
 * which executed the fastest.
 * You cannot run a function more than once.
 */

const funcArr = [
    () => {
        for (var i = 0; i < 100000000; i++);
    },
    () => {
        for (var i = 0; i < 10000000; i++);
    },
    () => {
        for (var i = 0; i < 1000000000; i++);
    },
    () => {
        for (var i = 0; i < 1000000; i++);
    },
    () => {
        for (var i = 0; i < 10000000000; i++);
    },
];
let executionFastestIndex = { index: 0, time: 0 };
funcArr.map((func, index) => {
    var start = Date.now();
    func();
    var end = Date.now();

    console.log(index, "=>",end - start);
    executionFastestIndex =
        executionFastestIndex.time < end - start
            ? { index: index, time: end - start }
            : executionFastestIndex;
});
console.log(executionFastestIndex.index);


// console.log("\n-------ques 7-------");
/**
 * 7. Write a JS Function (2 liner??) to get the the nth largest element
 * in an array of objects based on a sort function. This index must be only among those
 * elements that satisfy a condition as provided by a callbackFn
 * Where the sortfunction, the `n` and the condition are params.
 * eg:
 */
const donorsInfo3 = [
    {
        name: "Donor1",
        amount: 1500,
    },
    {
        name: "Donor1",
        amount: 2500,
    },
    {
        name: "Donor1",
        amount: 5500,
    },
];
const getNthIndex = (n, sortFunction, conditionCallBack) => {
    conditionCallBack(elem);
    return arr[n];
};
