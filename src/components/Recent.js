import React, { useState, useEffect, Component } from "react";
import "./css/Recent.css";

function Recent() {
  const brews = JSON.parse(localStorage.getItem("brews"));
  const [collapse, toggleCollapse] = useState(true)
  
  return (
    <div id="results-box" onClick={() => {
        toggleCollapse(collapse ? false : true)
        console.log("collapse: ", collapse)}}>
      {brews.reverse().splice(0,
          collapse ? 1 : brews.length
      ).map((brew) => (
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
