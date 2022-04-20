import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import "./assets/movie.css";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        console.log(searchValue);
    }, [searchValue]);

    return (
        <div>
            <Header
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                isAscending={isAscending}
                setIsAscending={setIsAscending}
            />
            <Movies searchValue={searchValue} isAscending={isAscending} />
        </div>
    );
}

export default App;
