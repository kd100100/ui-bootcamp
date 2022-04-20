import React from "react";

function Header({ searchValue, setSearchValue, isAscending, setIsAscending }) {
    const handleChange = (syntheticEvent) => {
        setSearchValue(syntheticEvent.target.value);
    };

    const handleOrderChange = () => {
        setIsAscending(!isAscending);
    };

    const orderText = isAscending ? "Change to Descending Order" : "Change to Ascending Order";

    return (
        <header>
            <h1>Latest Movies</h1>
            <button onClick={handleOrderChange}>{orderText}</button>
            <input type="text" value={searchValue} onChange={handleChange} placeholder="Search Movie" />
        </header>
    );
}

export default Header;
