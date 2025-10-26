import React from "react";

export default function CategoryFilter({ categories, category, setCategory }) {
  return (
    <select
      className="select"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="all">All Categories</option>
      {categories.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}
