import React from "react";

const SearchBar = ({search, onChangeSearch}) => {


    function handleChange(e) {
        onChangeSearch(e.target.value);
    }

    return (
    <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={search} onChange={handleChange} />
          <i className="search icon" />
        </div>
      </div>
    );
}

export default SearchBar;