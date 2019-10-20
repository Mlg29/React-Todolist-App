import React from "react";

function SearchBox(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <input
        className="searchBox"
        type="search"
        placeholder="Search monsters"
        onChange={props.handleChange}
      />
    </div>
  );
}

export default SearchBox;
