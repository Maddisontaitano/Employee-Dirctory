import React from 'react';
// import "./Search.css";

function SearchForm(props) {
    return (
        <div className="search-form">
            <form>
                <input 
                value={props.value}
                name="search"
                type="text"
                className="search-input"
                placeholder="Enter a Name!"
                aria-label="Search"
                onChange={props.changeHandler}
                />
                <button 
                className="searchBtn"
                type="search">Search</button>


            </form>
        </div>
    )
}

export default SearchForm;

