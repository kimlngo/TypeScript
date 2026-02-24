function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Ngo" });

//function with return type as an object
function randomCoordinates(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

console.log(randomCoordinates());

//Excess properties
//printName({ first: "Mig", last: "Rus", age: 23 }); //not allowed
const person = { first: "Mig", last: "Rus", age: 23, isAlive: true };
printName(person); //ok

//type alias
type Point = { x: number; y: number };
function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

console.log(doublePoint({ x: 3, y: 5 })); //{x: 6, y: 10}

//Nested objects
//Optional properties (?)
//readonly
type Student = {
  readonly id: number;
  first: string;
  last: string;
  age: number;
  favoriteSport?: string;
  parent: {
    mom: string;
    dad: string;
  };
};

function printStudent(student: Student) {
  console.log(`Student: ${student.first} ${student.last} - ${student.age}`);
}

function printStudentParent(student: Student) {
  console.log(
    `Parent of student ${student.first}: Father: ${student.parent.dad} Mother: ${student.parent.mom}`,
  );
}

const student: Student = {
  id: 1,
  first: "Mike",
  last: "Thompson",
  age: 23,
  parent: {
    mom: "Jessie",
    dad: "Bob",
  },
};

printStudent(student); //Student: Mike Thompson - 23
printStudentParent(student); //Parent of student Mike: Father: Bob Mother: Jessie
//student.id = 10; //not allow

//type intersection
type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type ColorfulCircle = Circle & Color;
type Icon = Circle & Color & { price: number };

const happyFace: ColorfulCircle = {
  radius: 5,
  color: "yellow",
};
console.log(happyFace); //{ radius: 5, color: 'yellow' }

const happyFaceIcon: Icon = {
  radius: 5,
  color: "yellow",
  price: 10,
};
console.log(happyFaceIcon); //{ radius: 5, color: 'yellow', price: 10 }
