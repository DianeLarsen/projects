import React from "react";

export default function SearchArea(props) {
  return (
    <div className="search-area">
      <h1>Welcome to the bookstore, what are you looking for?</h1>
      <form onSubmit={props.searchBooks}>
        <div className="search-area-input">
       
        <input id="search" type="text" onChange={props.handleSearch} />
        <button className="search-area-search-btn"type="submit"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg></button>
        </div>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
}



