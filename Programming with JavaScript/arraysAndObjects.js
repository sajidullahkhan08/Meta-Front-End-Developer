// Exercise: Arrays and Objects in JavaScript
var clothes = [];
clothes.push("shirt");
clothes.push("pants");
clothes.push("jacket");
clothes.push("shoes");
clothes.push("hat");
clothes.push("scarf");
clothes.push("gloves");

clothes.pop("shoes");
console.log(clothes);
clothes.push("socks");
console.log(clothes);

console.log(clothes[2]);

var favCar = {};
favCar.color = "blue";
favCar.make = "Toyota";
favCar.convertible = true;

console.log(favCar);