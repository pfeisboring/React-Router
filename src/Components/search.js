import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <label>
        <h4>Search for a Movie : </h4>{" "}
      </label>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
};

export default Search;
