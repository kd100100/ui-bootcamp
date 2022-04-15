/**
 * 1. Write a JavaScript function to create an array of objects from an array of strings in the format:
 const input = ['Dirk', 'Plato', 'Gwen'];
    const output = [
        {
            index: 0,
            name: 'Dirk',
        },
        {
            index: 1,
            name: 'Plato',
        },
        {
            index: 2,
            name: 'Gwen',
        },
    ];
 */
const assignment1 = () => {
    console.warn("Assignment 1");

    const input = ["Dirk", "Plato", "Gwen"];

    const output = input.map((name, index) => {
        return {
            index,
            name,
        };
    });

    console.log(output);
};

assignment1();

/**
 * 2. Write a function to calculate the total amount donated to a charity by all donors.
 * The data is presented in an array of objects:
 */
const assignment2 = () => {
    console.warn("Assignment 2");

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

    const totalAmount = donorsInfo.reduce((total, donor) => {
        return total + donor.amount;
    }, 0);

    console.log(totalAmount);
};

assignment2();

/**
 * 3. Write a Function in JS to get all the keys of an object in an array in lowercase.
const object = {
    firstName: "val",
    lastName: "val",
};
const outputLowerCase = ["firstname", "lastname"];
 */

const keysInLowercase = (object) => {
    var keys = [];
    for (const key of Object.keys(object)) {
        if (typeof object[key] != "object") keys.push(key.toLowerCase());
        else {
            nestedKeys = keysInLowercase(object[key]);
            keys.push(nestedKeys);
        }
    }
    return keys;
};

const assignment3 = () => {
    console.warn("Assignment 3");

    const object = {
        firstName: "val",
        lastName: "val",
        name: {
            firstName: "val",
            lastName: "val",
        },
    };

    const keys = keysInLowercase(object);

    console.log(keys);
};

assignment3();

/**
 * 4. Write a JS Function to get the first index of the 3rd largest element in an array.
 */

const assignment4 = () => {
    console.warn("Assignment 4");

    const array = [3, 3, 4, 5, 6, 1, 23, 5, 6, 10, 2, 3, 4, 9];
    const sortedArray = array.sort((a, b) => {
        return a - b;
    });
    const set = new Set(sortedArray);
    const uniqueArray = [...set];
    const thirdLargest = uniqueArray[uniqueArray.length - 3];
    const index = array.indexOf(thirdLargest);

    console.log(index);
};

assignment4();

/**
 * 5. Write a JavaScript function to find the unique elements from two arrays
 */

const assignment5 = () => {
    console.warn("Assignment 5");

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [2, 3, 4, 5, 6];

    const combinedArray = [...array1, ...array2];
    const set = new Set(combinedArray);
    const uniqueArray = [...set];

    console.log(uniqueArray);
};

assignment5();
