import React, { useState } from "react";

function State() {
    const [string, setString] = useState("Hello World!");

    const buttonHandler = () => {
        setString("Hello ReactJS!");
    };

    return (
        <div>
            <br />
            <h1>State</h1>
            <h1>{string}</h1>
            <button onClick={buttonHandler}>Change It</button>
            <br />
            <hr />
        </div>
    );
}

export default State;
