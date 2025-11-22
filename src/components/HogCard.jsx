import React, { useState } from "react";

function HogCard({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div className="image">
        <img src={hog.image} alt={"Photo of " + hog.name} />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <div className="description">
            <p>{`Specialty: ${hog.specialty}`}</p>
            <p>{`Weight: ${hog.weight}`}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{`Medal: ${hog["highest medal achieved"]}`}</p>
          </div>
        )}
      </div>

      <button
        className="ui pink button"
        onClick={(e) => {
          e.stopPropagation();
          onHide(hog.name);
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default HogCard;