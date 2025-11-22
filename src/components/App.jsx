import React, { useState } from "react";
import Nav from "./Nav";
import FilterBar from "./Filter";
import HogList from "./HogList";
import NewHogForm from "./NewHogForm";
import hogData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hidden, setHidden] = useState(new Set());

  //Hide hog
  const hideHog = (name) => {
    setHidden((prev) => {
      const next = new Set(prev);
      next.add(name);
      return next;
    });
  };

  //Add hog
  const addHog = (hog) => {
    setHogs([...hogs, hog]);
  };

  //Apply hiding + filtering
  let visibleHogs = hogs.filter((hog) => !hidden.has(hog.name));

  if (filterGreased) {
    visibleHogs = visibleHogs.filter((hog) => hog.greased);
  }

  //Sorting logic
  if (sortBy === "name") {
    visibleHogs = [...visibleHogs].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortBy === "weight") {
    visibleHogs = [...visibleHogs].sort((a, b) => a.weight - b.weight);
  }

  return (
    <div className="App">
      <Nav />

      <FilterBar
        filterGreased={filterGreased}
        setFilterGreased={setFilterGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <NewHogForm onAddHog={addHog} />
      <HogList hogs={visibleHogs} onHide={hideHog} />

    </div>
  );
}

export default App;