import React, { useEffect, useState } from "react";

function Effect() {
    const [buttonText1, setButtonText] = useState("Button text 1");
    const [buttonText2, setButtonText2] = useState("Button text 2");
    const [buttonText3, setButtonText3] = useState("Button text 3");

    useEffect(() => {
        console.log("buttonText1 or buttonText3 changed");
        return () => {
            console.log("cleanup for buttonText1 or buttonText3");
        }
    }, [buttonText1, buttonText3]);

    useEffect(() => {
        console.log("buttonText2 changed");
        return () => {
            console.log("cleanup for buttonText2");
        }
    }, [buttonText2]);

    return (
        <div>
            <br />
            <h1>Effect</h1>

            <button onClick={() => setButtonText("Button text 1 changed")}>
                {buttonText1}
            </button>
            <button onClick={() => setButtonText2("Button text 2 changed")}>
                {buttonText2}
            </button>
            <button onClick={() => setButtonText3("Button text 3 changed")}>
                {buttonText3}
            </button>

            <br />
            <hr />
        </div>
    );
}

export default Effect;
