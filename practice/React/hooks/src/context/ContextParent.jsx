import React, { useState } from "react";
import { Context } from "./Context";
import ContextIntermediate from "./ContextIntermediate";

function ContextParent() {
    const [value, setValue] = useState("Value from ContextParent");

    const setChange = () => {
        setValue("Value from ContextParent");
    };

    return (
        <Context.Provider value={{
            value: value,
            setValue: setValue
        }}>
            <ContextIntermediate />
            <button onClick={setChange}>Change Value from parent context</button>
        </Context.Provider>
    );
}

export default ContextParent;
