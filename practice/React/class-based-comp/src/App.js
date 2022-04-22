import { useState } from "react";
import ClassBasedComponent from "./components/ClassBasedComponent";
import { Component1 } from "./components/Component1";

function App() {
    const [shouldRender, setShouldRender] = useState(false);

    const handleClick = () => {
        setShouldRender(!shouldRender);
    };

    return (
        <div>
            {/* <button onClick={handleClick}>
                {shouldRender ? "Hide" : "Show"}
            </button>
            {shouldRender && <ClassBasedComponent sampleProp="Sample Prop" />}
             */}
            <Component1 />
        </div>
    );
}

export default App;
