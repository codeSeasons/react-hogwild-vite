import React from "react";

function FilterBar({ filterGreased, setFilterGreased, sortBy, setSortBy }) {
  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="greasedCheck">Greased Pigs Only?</label>
        <input
          id="greasedCheck"
          type="checkbox"
          checked={filterGreased}
          onChange={(e) => setFilterGreased(e.target.checked)}
        />
      </div>

      <div className="field">
        <label htmlFor="sortSelect">Sort by:</label>
        <select
          id="sortSelect"
          className="ui dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;