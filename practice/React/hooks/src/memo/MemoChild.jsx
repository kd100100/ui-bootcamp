import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

function MemoChild({ parentCounter, multiplier, index }) {
    console.log("MemoChild render");

    const [state, setState] = useState(0);
    const renderCount = useRef(0);

    const updateChildState = () => {
        setState(state + 1);
    };

    const expensiveCalculation = () => {
        for (var i = 0; i < index; i++);
        return parentCounter * multiplier;
    };

    const result = useMemo(expensiveCalculation, [
        index,
        parentCounter,
        multiplier,
    ]);

    const { current } = renderCount;

    const callbackToMemomised = () => {
        console.log("Mmory drain funtion called", current);
        return result + " Hello World";
    };

    const memomisedCallback = useCallback(callbackToMemomised, [parentCounter]);

    const finalResult = memomisedCallback();

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <div>
            <h1>Memo Child</h1>
            <p>
                <b>Current Child Count: </b>
                {state}
            </p>
            <p>
                <b>Expensive Calculation Result: </b>
                {result}
            </p>
            <p></p>
            <p>
                <b>Current Parent Count: </b>
                {parentCounter}
            </p>

            <button onClick={updateChildState}>Update Child State</button>
        </div>
    );
}

export default React.memo(MemoChild);
