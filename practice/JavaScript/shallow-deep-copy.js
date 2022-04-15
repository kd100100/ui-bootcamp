/**
 * Shallow Copy
 */

const shallowCopy = () => {
    console.warn("Shallow Copy");

    const func1 = () => {
        const func2 = () => {
            return "Hi";
        }
        return func2;
    }
    const arr1 = [1, 2, 3, 4]
    const arr2 = [4, 5, 6]
    arr1.push(arr2)

    const obj = {
        arr: arr1,
        func: func1
    };
    console.log("obj:")
    console.log(obj)

    console.log();

    copiedObj = obj;
    copiedObj.arr[4].push(10);
    console.log("copiedObj: ")
    console.log(copiedObj);
}

/**
 * Spread Copy
 */

const spreadCopy = () => {
    console.warn("Spread Copy");

    const func1 = () => {
        const func2 = () => {
            return "Hi";
        }
        return func2;
    }
    const arr1 = [1, 2, 3, 4]
    const arr2 = [4, 5, 6]
    arr1.push(arr2)

    const obj = {
        arr: arr1,
        func: func1
    };
    console.log("obj:")
    console.log(obj)

    console.log();

    copiedObj = { ...obj };
    copiedObj.arr[4].push(10);
    console.log("copiedObj: ")
    console.log(copiedObj);
}

/**
 * Deep Copy using JSON.stringify
 */

const deepCopy = () => {
    console.warn("Deep Copy");

    const func1 = () => {
        const func2 = () => {
            return "Hi";
        }
        return func2;
    }
    const arr1 = [1, 2, 3, 4]
    const arr2 = [4, 5, 6]
    arr1.push(arr2)

    const obj = {
        arr: arr1,
        func: func1
    };
    console.log("obj:")
    console.log(obj)

    console.log();

    copiedObj = JSON.parse(JSON.stringify(obj));
    copiedObj.arr[4].push(10);
    console.log("copiedObj: ")
    console.log(copiedObj);
}


shallowCopy();
spreadCopy();
deepCopy();