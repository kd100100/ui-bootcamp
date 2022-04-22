import React from "react";
import ContextChild1 from "./ContextChild1";
import ContextChild2 from "./ContextChild2";

function ContextIntermediate() {
    return (
        <div>
            <ContextChild1 />
            <hr />
            <ContextChild2 />
        </div>
    );
}

export default ContextIntermediate;
