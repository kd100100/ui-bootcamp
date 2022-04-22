import React, { useState } from "react";
import MemoChild from "./MemoChild";

function MemoParent() {
    console.log("MemoParent render");

    const [state, setState] = useState(0);
    const [paretCounter, setParentCounter] = useState(0);

    const updateParentState = () => {
        setState(state + 1);
    };

    const updateParentCounter = () => {
        setParentCounter(paretCounter + 1);
    };

    return (
        <div>
            <h1>Memo Parent</h1>
            <p>
                <b>Current Parent Count: </b>
                {state}
            </p>
            <button onClick={updateParentState}>Update Parent State</button>
            <button onClick={updateParentCounter}>Update Parent Counter</button>
            <hr />
            <MemoChild parentCounter={paretCounter} multiplier={10} index={1000000000} />
        </div>
    );
}

export default MemoParent;
