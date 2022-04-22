import React from "react";
import { Context } from "./Context";

function ContextChild1() {
    const context = React.useContext(Context);
    const myInputRef = React.useRef(Context);

    const changeParentState = () => {
        const { value } = myInputRef.current;
        value.setState({
            value: "Value from ContextChild1",
        });
    };

    return (
        <div>
            <h1>Context Child 1</h1>
            <p>
                The value of context received <strong>{context.value}</strong>
            </p>
            <input type="text" />
            <button onClick={changeParentState}>
                Change Parent state from child
            </button>
        </div>
    );
}

export default ContextChild1;
