//string in TypeScript
let movieName: string = "Black Hawk Down";
movieName = "The Accountant";
//movieName = 10; not allowed
//console.log(movieName.upper()); error as upper() does not exist
console.log(movieName.toUpperCase());

//Number
let age: number = 30;
age++;
//age = "thirty-one"; not allowed

//Boolean
let isBoy: boolean = true;
isBoy = false;
// isBoy = "true"; not allowed

//Type Inference
let favTVShow = "Fun with Steve";
favTVShow = "Who is it?";
// favTVShow = 5; not allowed

let isFunny = true;
isFunny = false;
// isFunny = 5; not allowed

//the any type
let thing: any = "hello";
thing = 1; //no complain
thing = true; //no complain
thing.print(); //no complain

//type annotation required situation
const movies = ["A", "B", "C", "D"];
let foundMovie: string;

for (let m of movies) {
  if (m === "D") {
    foundMovie = m;
  }
}
