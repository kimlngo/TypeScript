//union types
let age: number | string = 21;
age = 23;
age = "thirty";

type Point = {
  x: number;
  y: number;
};

type Coordinate = {
  lat: number;
  long: number;
};

let loc: Point | Coordinate = { x: 1, y: 3 };
console.log(loc);
loc = { lat: 20.123, long: 43.213 };
console.log(loc);

//union type with function
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

console.log(calculateTax(45, 0.07));
console.log(calculateTax("$45", 0.07));

//union type and array
const things: (number | string)[] = [1, 2, 3, "one", "two", "three"];
console.log("things: " + things);

let others: number[] | string[] = [1, 2, 3];
console.log("others: " + others);

others = ["one", "two", "three"];
console.log("others: " + others);
// others = [1, "one"]; //not allow

let points: (Point | Coordinate)[] = [];
points.push({ x: 1, y: 3 });
points.push({ lat: 20.123, long: 43.213 });
console.log("points: " + points);

//literal types
let zero: 0 = 0;
// zero = 1; //not allow

let mood: "Happy" | "Sad";
mood = "Happy";
mood = "Sad";
// mood = "Don't know"; //not allow

type DayofWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayofWeek = "Friday";

//type with input argument
function response(answer: "OK" | "Good" | "Fine"): void {
  console.log(`I am ${answer}`);
}

response("Fine");
response("Good");
response("OK");
// response("Not Good"); //not allow
