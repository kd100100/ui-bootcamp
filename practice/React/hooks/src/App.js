/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import State from "./components/State";
import Ref from "./components/Ref";
import RefAssignment from "./components/RefAssignment";
import Effect from "./components/Effect";
import SearchBox from "./components/SearchBox";
import ContextParent from "./context/ContextParent";
import MemoParent from "./memo/MemoParent";

function App() {
    const [shouldShowEffect, setShouldShowEffect] = useState(true);

    return (
        <>
            {/* <State />
            <Ref />
            <RefAssignment />
            {shouldShowEffect && <Effect />}
            <button
                onClick={() => {
                    setShouldShowEffect(!shouldShowEffect);
                }}
            >
                Toggle Effect
            </button>
            <hr />
            <SearchBox />
            <hr />
            <br /> 
            <ContextParent />   */}
            <MemoParent />
        </>
    );
}

export default App;
