import React, { useState, useEffect, Component } from "react";
import "./css/Recent.css";

function Recent() {
  const [brews, setBrews] = useState(JSON.parse(localStorage.getItem("brews")));

  return (
    <div id="results-box">
      {brews.map((brew) => (
        <div className="brew-container">
          <div className="beans-info">
            <span>{brew.roaster}</span>
            <span>{brew.origin}</span>
            <span>{brew.coffee}</span>
          </div>

          <div className="grind-info">
            <span>{brew.method}</span>
            <span>{brew.grinder}</span>
            <span>grind size: {brew.grindsize}</span>
          </div>

          <div className="brew-info">
            <span>
              {brew.coffeegrams}g coffee, {brew.watergrams}g water (1:
              {(brew.watergrams / brew.coffeegrams).toFixed(0)})
            </span>
            <span>
              {brew.minutes > 1
                ? brew.minutes + " minutes "
                : brew.minutes + " minute "}
                
            {brew.seconds}s
            </span>
          </div>

          <div className="flavor-info">
              {brew.descriptors.map((descriptor) => (
                  <div>{descriptor}</div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recent;
