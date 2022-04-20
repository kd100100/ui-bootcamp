import React, { useRef, useState } from "react";

function Ref() {
    const ref = useRef(false);
    const [buttonText, setButtonText] = useState("Click to show alert");

    const showAlert = () => {
        ref.current = true;
        setButtonText("Clicked!");
        console.log(ref.current);
        setTimeout(() => {
            if (ref.current) {
                alert("ref.current is " + ref.current);
            }
        }, 1000);
    };

    const cancelAlert = () => {
        ref.current = false;
    };

    return (
        <>
            <br />
            <h1>Ref</h1>
            <button onClick={showAlert}>{buttonText}</button>
            {ref.current && <button onClick={cancelAlert}>Cancel Alert</button>}
            <br />
            <hr />
        </>
    );
}

export default Ref;
