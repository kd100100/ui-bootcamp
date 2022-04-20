import React, { useRef, useState } from "react";

function RefAssignment() {
    const alertRef = useRef(false);
    const timeoutRef = useRef(null);
    const inputRef = useRef();
    const [input, setInput] = useState("");
    const [buttonText, setButtonText] = useState(
        "Click me to show alert after 5 seconds"
    );

    const showAlert = () => {
        alertRef.current = true;
        setButtonText("Clicked!");
        timeoutRef.current = setTimeout(() => {
            if (alertRef.current) {
                alert("Input Text: " + inputRef.current.value);
                setButtonText("Click me to show alert after 5 seconds");
            }
        }, 5000);
    };

    const cancelAlert = () => {
        alertRef.current = false;
        clearTimeout(timeoutRef.current);
        setButtonText("Click me to show alert after 5 seconds");
        console.log("Alert Cancelled");
    };

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return (
        <>
            <br />
            <h1>Ref Assignment</h1>
            <input value={input} onChange={handleInputChange} ref={inputRef} />
            <button onClick={showAlert}>{buttonText}</button>
            {alertRef.current && (
                <button onClick={cancelAlert}>Cancel Alert</button>
            )}
            <br />
            <hr />
        </>
    );
}

export default RefAssignment;
