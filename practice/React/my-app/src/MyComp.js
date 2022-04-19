import React from "react";

function MyComp(props) {
    const { title, func } = props;

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => func("Button Clicked")}>Click Me</button>
        </div>
    );
}

export default MyComp;
