const brewData = {
  minutes: 8,
  seconds: 15,
  coffeegrams: 50,
  watergrams: 160,
  descriptors: ["dry"],
};

const doseDiagnosis = (obj) => {
  var string = "";
  var ratio = obj.watergrams / obj.coffeegrams;

  if (ratio < 15) {
    string +=
      "Your brew may be a bit too concentrated. Try using either less coffee or more water.";
  }
  if (ratio > 18) {
    string +=
      "Your brew may be a bit watery. Try using either less water or more coffee.";
  }
  return string;
};
const timeDiagnosis = (obj) => {
  var string = "";
  if (obj.minutes > 6) {
    string += `${obj.minutes} minutes seems a bit long, try to shorten your brew by grinding coarser.`;
  }
  if (obj.minutes < 2 && obj.method !== "Aeropress") {
    string += `${obj.minutes} seems a bit fast, try to extend your brew by grinding finer.`;
  }
  return string;
};
const latLong = (obj) => {
  var lat = 0;
  var long = 0;
  var arr = [];

  if (obj.descriptors.includes("astringent")) {
    long++;
    lat--;
  }
  if (obj.descriptors.includes("muted")) {
    long++;
  }
  if (obj.descriptors.includes("sour")) {
    lat++;
  }
  if (obj.descriptors.includes("dry")) {
    lat--;
  }
  if (obj.descriptors.includes("harsh")) {
    long--;
  }
  if (obj.descriptors.includes("watery")) {
    long++;
    lat++;
  }
  if (obj.descriptors.includes("vegetal")) {
    lat++;
  }
  if (obj.descriptors.includes("savory")) {
    lat++;
    long--;
  }

  return (arr = [lat, long]);
};

const compassFunction = (obj) => {
  var lat = latLong(obj)[0];
  var long = latLong(obj)[1];
  var string = "";

  const makeString = (lat, long) => {
    string = "";

    if (long > 0 && lat === 0) {
        string = `Use more coffee (or less water!).`;
    } else 
    if (long > 0 && lat > 0) {
      string = `Try extracting more by using a finer grind or longer brew time.`;
    } else
    if (long > 0 && lat < 0) {
      string = `Try extracting less (coarser grind or shorter brew time) and using more coffee (or less water).`;
    } else
    
    if (long < 0 && lat === 0) {
      string = `Use less coffee (or more water!).`;
    } else
    if (long < 0 && lat > 0) {
      string = `Try extracting more (finer grind or longer brew) and using less coffee (or more water).`;
    } else
    if (long < 0 && lat < 0) {
      string = `Try extracting less (coarser grind or shorter brew).`;
    } else
    
    if ((long === 0 && lat > 0)) {
      string = `Extract more (finer grind or longer brew) with less coffee (or more water).`;
    } else
    if ((long === 0 && lat < 0)) {
      string = `Extract less (coarser grind or shorter brew) with more coffee (or less water).`;
    }
return string
}
    return makeString(lat, long) 
};

const diagnosis = (obj) => {
  var string = "";
  var doseString = doseDiagnosis(obj);
  var timeString = timeDiagnosis(obj);
  var compassString = compassFunction(obj);

  console.log("dose string ", doseString);
  console.log("compass string ", compassString);
  console.log("timeString ", timeString);

string = (doseString != "" ? doseString + " ": "") + (timeString != "" ? timeString + " " : "") + (compassString != "" ? compassString + " " : "")
console.log(`final string: ${string}`)
  return string;
};

diagnosis(brewData);

module.exports = diagnosis;
