//union types
var age = 21;
age = 23;
age = "thirty";
var loc = { x: 1, y: 3 };
console.log(loc);
loc = { lat: 20.123, long: 43.213 };
console.log(loc);
//union type with function
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(45, 0.07));
console.log(calculateTax("$45", 0.07));
//union type and array
var things = [1, 2, 3, "one", "two", "three"];
console.log("things: " + things);
var others = [1, 2, 3];
console.log("others: " + others);
others = ["one", "two", "three"];
console.log("others: " + others);
// others = [1, "one"]; //not allow
var points = [];
points.push({ x: 1, y: 3 });
points.push({ lat: 20.123, long: 43.213 });
console.log("points: " + points);
//literal types
var zero = 0;
// zero = 1; //not allow
var mood;
mood = "Happy";
mood = "Sad";
var today = "Friday";
//type with input argument
function response(answer) {
    console.log("I am ".concat(answer));
}
response("Fine");
response("Good");
response("OK");
// response("Not Good"); //not allow
