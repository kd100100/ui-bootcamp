console.log(
    "%c\n Assignment 1 ",
    "background: #bada55; color: #000; font-size: 2em;"
);
console.log(
    "%cWrite a function to check if 2 objects containing only primitive values or nested objects contain exactly the same values, i.e. they are the same. ",
    "background: #bada55; color: #000; font-size: 1.3em; padding: 0.5em;"
);

const combineTwoArrayUniqueValues = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    let set = new Set(newArr);
    return [...set];
};

const compareTwoObjects = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);
    const objectKeys = combineTwoArrayUniqueValues(obj1Keys, obj2Keys);

    for (let i = 0; i < objectKeys.length; i++) {
        let key = objectKeys[i];

        if (obj1[key] !== obj2[key]) {
            if (typeof obj1[key] !== "object") return false;
            if (!compareTwoObjects(obj1[key], obj2[key])) return false;
        }
    }
    return true;
};

// Success Case
const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: "Hello :)",
    },
};
const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: "Hello :)",
    },
};

console.log("Success Case: ", compareTwoObjects(obj1, obj2));

// Failure Case
const obj3 = {
    a: 1,
    b: 2,
    c: {
        d: "Hello :)",
    },
};
const obj4 = {
    a: 3,
    b: 4,
    c: {
        d: "Hello :)",
        e: "Hello :(",
    },
};

console.log("Failure Case: ", compareTwoObjects(obj3, obj4));
