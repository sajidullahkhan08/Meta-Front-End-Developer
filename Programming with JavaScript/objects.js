var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
table.newProperty = "new value";
console.log(table);
table.legs = 4;
console.log(table);
table["color"] = "black";
console.log(table);
table["priceUSD"] = 120;
console.log(table);
table["newProperty"] = "updated value";
console.log(table);
table["Spaced Property"] = "value with spaces";
console.log(table);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}