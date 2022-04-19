import logo from "./logo.svg";
import "./App.css";
import MyComp from "./MyComp";
import { useEffect } from "react";

function App() {
    const propObj = {
        title: "Hello World",
        func: (msg) => {
            alert(msg);
        },
    };

    useEffect(() => {
        const runCont = setInterval(() => {
            console.log("_________");
            console.log("Hi");
            console.log("Hi2");
        }, 4000);
    }, []);

    return (
        <div className="App">
            <MyComp {...propObj} />
        </div>
    );
}

export default App;
