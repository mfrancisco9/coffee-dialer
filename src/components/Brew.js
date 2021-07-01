import React, { useState, useEffect } from "react";
import "./css/Brew.css";
import diagnosis from './diagnosis';

function Brew() {
  // info for dropdowns
  const origins = [
    "Other/blends",
    "Bolivia",
    "Brazil",
    "Burundi",
    "Cameroon",
    "China",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Democratic Republic of the Congo",
    "Dominican Republic",
    "Eduador",
    "El Salvador",
    "Ethiopia",
    "Guatemala",
    "Haiti",
    "Honduras",
    "India",
    "Indonesia",
    "Jamaica",
    "Kenya",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Papau New Guinea",
    "Peru",
    "Phillipines",
    "Rwanada",
    "Tanzania",
    "Uganda",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
  ];
  const methods = ["Kalita", "Chemex", "V60", "Aeropress", "Automatic", "French Press", "Siphon", "Pour over", "Moka Pot"].sort();
  const flavors = ["astringent", "muted", "sour", "dry", "harsh", "watery", "fruity", "sweet"].sort();
  //  state for submission & local storage
  const [brewData, setBrewData] = useState({
    roaster: "",
    origin: "",
    coffee: "",
    method: "",
    grinder: "",
    grindsize: "",
    minutes: "0",
    seconds: "",
    coffeegrams: "",
    watergrams: "",
    descriptors: [],
  });

  useEffect(() => {
    if (localStorage.getItem("brews") === null) {
      localStorage.setItem("brews", "[]");
    }
  });

  const submit = () => {
    var old = JSON.parse(localStorage.getItem("brews"));

    if (brewData.roaster == "" || 
        brewData.origin == "" ||
        brewData.coffee == "" ||
        brewData.method == "" ||
        brewData.grinder == "" ||
        brewData.grindsize == "" ||
        brewData.coffeegrams == "" ||
        brewData.watergrams == ""
        ) {
          alert("please submit all data")
        } else {
    old.push(brewData);
    alert((diagnosis(brewData) !== "" ? diagnosis(brewData) : "Thank you and please enjoy your coffee!"));
    localStorage.setItem("brews", JSON.stringify(old)); }
  };

  return (
    <form id="main-box">
  
      <div id="row1">
        <input
          name="roaster"
          id="roaster"
          placeholder="roaster"
          onChange={(event) =>
            setBrewData({ ...brewData, roaster: event.target.value })
          }
        />

        <select
          name="origin"
          id="origin"
          required
          onChange={(event) =>
            setBrewData({ ...brewData, origin: event.target.value })
          }
        >
          {" "}
          <option value="" disabled selected>
            select an origin
          </option>
          {origins.map((origin) => (
            <option>{origin}</option>
          ))}
        </select>
        <input
          type="text"
          name="coffee"
          id="coffee"
          placeholder="farm/variety/process/etc"
          required
          onChange={(event) =>
            setBrewData({ ...brewData, coffee: event.target.value })
          }
        />
      </div>

      <div id="row2">
        <div id="gear">
          <div>
            <select
              name="method"
              id="method"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, method: event.target.value })
              }
            ><option value="" disabled selected>select a brew device</option>
              {methods.map((method) => (
                <option>{method}</option>
              ))}
            </select>
          </div>
          <div>
            <input
              name="grinder"
              id="grinder"
              placeholder="grinder (ie 'baratza encore')"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, grinder: event.target.value })
              }
            />
          </div>
          <div>
            <input
              type="number"
              name="grindsize"
              id="grind-size"
              required
              placeholder="grind size"
              onChange={(event) =>
                setBrewData({ ...brewData, grindsize: event.target.value })
              }
            />
          </div>
        </div>

        <div id="specs">
          <div className="time">
            <input
              type="number"
              name="minutes"
              id="minutes"
              min="0"
              max="60"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, minutes: event.target.value })
              }
            />
            <span>minutes </span>
            <input
              type="number"
              name="seconds"
              id="seconds"
              min="0"
              max="60"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, seconds: event.target.value })
              }
            />
            <span>seconds</span>
          </div>

          <div id="masses">
            <input
              type="number"
              name="coffeegrams"
              id="coffeegrams"
              min="0"
              max="2000"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, coffeegrams: event.target.value })
              }
            />
            <span>grams coffee </span>

            <input
              type="number"
              name="watergrams"
              id="watergrams"
              min="0"
              max="9999"
              required
              onChange={(event) =>
                setBrewData({ ...brewData, watergrams: event.target.value })
              }
            />
            <span>grams water</span>
          </div>
          {brewData.watergrams > 0 && brewData.coffeegrams > 0 ? <div>1:{(brewData.watergrams / brewData.coffeegrams).toFixed(1)} ratio</div> : <div> </div> }

        </div>
      </div>

      <div id="row3">
        {/* <input
          type="checkbox"
          id="astringent"
          name="astringent"
          value="astringent"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="astringent"> astringent</label> */}
       {flavors.map((flavor) => 
       <div>
       <input
       type="checkbox"
       id={flavor}
       name={flavor}
       value={flavor}
       onChange={(event) => {
         let newArray = [...brewData.descriptors, event.target.value];
         if (brewData.descriptors.includes(event.target.id)) {
           newArray = newArray.filter((adj) => adj !== event.target.value);
         }
         setBrewData({...brewData, descriptors: newArray});
       }} 
       />
       <label for={flavor}>{flavor}</label>
       </div>
       )}
      </div>

      <div id="submit">
        <input type="submit" onClick={() => submit()} />
      </div>
    </form>
  );
}

export default Brew;
