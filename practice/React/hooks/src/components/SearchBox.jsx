import React from "react";

function SearchBox() {
    const [searchValue, setSearchValue] = React.useState("");

    const onSearch = (syntheticEvent) => {
        setSearchValue(syntheticEvent.target.value);
    };

    return <input type="text" value={searchValue} onChange={onSearch} />;
}

export default SearchBox;
