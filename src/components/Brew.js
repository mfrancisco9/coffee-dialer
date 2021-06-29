import React, { useState, useEffect } from "react";
import "./css/Box.css";

function Brew() {
  // info for dropdowns
  const origins = [
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
    "Zambia"
  ];
  const methods = ["Kalita", "V60", "Aeropress", "Automatic", "French Press"];
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
if(localStorage.getItem("brews") === null){
  localStorage.setItem("brews", '[]');

}
})

const submit = () => {

  var old = JSON.parse(localStorage.getItem('brews'))
  old.push(brewData)
  localStorage.setItem('brews', JSON.stringify(old))

}


  return (
    <div id="main-box">
      <div id="beans">
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
          onChange={(event) =>
            setBrewData({ ...brewData, origin: event.target.value })
          }
        >
          {origins.map((origin) => (
            <option>{origin}</option>
          ))}
        </select>
        <input
          type="text"
          name="coffee"
          id="coffee"
          placeholder="anaerobic pink bourbon"
          onChange={(event) =>
            setBrewData({ ...brewData, coffee: event.target.value })
          }
        />
      </div>

      <div id="brew">
        <div id="brew1">
          <div id="brew-method">
            <span>brew method:</span>
            <select
              name="method"
              id="method"
              onChange={(event) =>
                setBrewData({ ...brewData, method: event.target.value })
              }
            >
              {methods.map((method) => (
                <option>{method}</option>
              ))}{" "}
            </select>
          </div>

          <span>grinder:</span>
          <input
            name="grinder"
            id="grinder"
            placeholder="baratza encore"
            onChange={(event) =>
              setBrewData({ ...brewData, grinder: event.target.value })
            }
          />

          <input
            type="number"
            name="grindsize"
            id="grind-size"
            placeholder="5"
            onChange={(event) =>
              setBrewData({ ...brewData, grindsize: event.target.value })
            }
          />
        </div>

        <div id="brew2">
          <div className="time">
            <input
              type="number"
              name="minutes"
              id="minutes"
              min="0"
              max="60"
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
              onChange={(event) =>
                setBrewData({ ...brewData, seconds: event.target.value })
              }
            />
            <span>seconds</span>
          </div>

          <div id="masses">
            <span>coffee: </span>
            <input
              type="number"
              name="coffeegrams"
              id="coffeegrams"
              min="0"
              max="2000"
              onChange={(event) =>
                setBrewData({ ...brewData, coffeegrams: event.target.value })
              }
            />
            <span>grams, </span>

            <span>water: </span>
            <input
              type="number"
              name="watergrams"
              id="watergrams"
              min="0"
              max="9999"
              onChange={(event) =>
                setBrewData({ ...brewData, watergrams: event.target.value })
              }
            />
            <span>grams</span>
            <span>
              {brewData.watergrams > 1 && brewData.coffeegrams > 1
                ? " (1:" +
                  (brewData.watergrams / brewData.coffeegrams).toFixed(1) +
                  " ratio)"
                : null}
            </span>
          </div>
        </div>
      </div>

      <div id="flavor">
        <input
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
        <label for="astringent"> astringent</label>
        <input
          type="checkbox"
          id="muted"
          name="muted"
          value="muted"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="astringent"> muted</label>
        <input
          type="checkbox"
          id="sour"
          name="sour"
          value="sour"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="sour"> sour</label>
        <input
          type="checkbox"
          id="dry"
          name="dry"
          value="dry"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="dry"> dry</label>
        <input
          type="checkbox"
          id="harsh"
          name="harsh"
          value="harsh"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="harsh"> harsh</label>
        <input
          type="checkbox"
          id="watery"
          name="watery"
          value="watery"
          onChange={(event) => {
            let newArray = [...brewData.descriptors, event.target.value];
            if (brewData.descriptors.includes(event.target.id)) {
              newArray = newArray.filter((adj) => adj !== event.target.value);
            }
            setBrewData({ ...brewData, descriptors: newArray });
          }}
        />
        <label for="watery"> watery</label>
      </div>

      <div id="submit">
        <button id="submit-btn" onClick={() => submit()}>submit</button>
      </div>
    </div>
  );
}

export default Brew;
