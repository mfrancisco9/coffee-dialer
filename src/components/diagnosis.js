
const brewData = {
    minutes: 7,
    seconds: 30,
    coffeegrams: 10,
    watergrams: 100,
    descriptors: ['dry']
}

const diagnosis = (obj) => {
var string = "";
var ratio = obj.watergrams / obj.coffeegrams
var long = 0
var lat = 0
console.log(ratio)
// first diagnosis dose 

if (ratio < 15 ){
    string += "Your brew may be a bit too concentrated. Try using either less coffee or more water."
}
if (ratio > 18 ){
    string += "Your brew may be a bit watery. Try using either less water or more coffee."
}

// second diagnosis time

if ((obj.minutes > 6)) {
    string += ` ${obj.minutes} seems a bit long, try to shorten your brew by grinding coarser.`
}
if ((obj.minutes < 2 && obj.method !== "Aeropress")) {
    string += ` ${obj.minutes} seems a bit fast, try to extend your brew by grinding finer.`
}

// diagnosis by descriptor using long and lat
if (obj.descriptors.includes("astringent")) {
    long++
    lat--
}
if (obj.descriptors.includes("muted")) {
    long++
}
if (obj.descriptors.includes("sour")) {
    lat++
}
if (obj.descriptors.includes("dry")) {
    lat--
}
if (obj.descriptors.includes("harsh")) {
    long--
}
if (obj.descriptors.includes("watery")) {
    long++
    lat++
}
if (obj.descriptors.includes("vegetal")) {
    lat++
}
if (obj.descriptors.includes("savory")) {
    lat++
    long--
}
// converting long and lat to string
if (long > 0 && lat == 0){
    string += ``;
}
if (long > 0 && lat > 0){
    string += ``;
}
if (long > 0 && lat < 0){
    string += ``;
}


if (long < 0 && lat == 0){
    string += ``;
}
if (long < 0 && lat > 0){
    string += ``;
}
if (long < 0 && lat < 0){
    string += ``;
}

if (long = 0 && lat > 0){
    string += ``;
}
if (long = 0 && lat < 0){
    string += ``;
}




console.log(lat, long)
console.log(string)

}

diagnosis(brewData);

module.exports = diagnosis 