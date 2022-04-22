// crete an object using function
const initializeCounter = () => {
    let ref = {
        current: 0,
    };
    const decrement = () => {
        ref.current--;
    };
    const increment = () => {
        ref.current++;
    };
    const currentValue = () => {
        return ref.current;
    };
    return {
        decrement,
        increment,
        currentValue,
        ref,
    };
};

// crete an object using class
class Counter {
    ref = {
        current: 0,
    };
    current = 0;
    decrement = () => this.current--;
    increment = () => this.current++;
    currentValue = () => this.current;
}

const a = new Counter();
