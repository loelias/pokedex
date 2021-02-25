import React from "react";

import { SearchBoxField } from "./search-box.styles.jsx";

export default function SearchBox({ placeholder, handleChange }) {
  return (
    <SearchBoxField
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
