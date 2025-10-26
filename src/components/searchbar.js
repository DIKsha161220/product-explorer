import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
