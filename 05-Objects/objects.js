function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: "Thomas", last: "Ngo" });
//function with return type as an object
function randomCoordinates() {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinates());
//Excess properties
//printName({ first: "Mig", last: "Rus", age: 23 }); //not allowed
var person = { first: "Mig", last: "Rus", age: 23, isAlive: true };
printName(person); //ok
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
console.log(doublePoint({ x: 3, y: 5 })); //{x: 6, y: 10}
function printStudent(student) {
    console.log("Student: ".concat(student.first, " ").concat(student.last, " - ").concat(student.age));
}
function printStudentParent(student) {
    console.log("Parent of student ".concat(student.first, ": Father: ").concat(student.parent.dad, " Mother: ").concat(student.parent.mom));
}
var student = {
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
var happyFace = {
    radius: 5,
    color: "yellow",
};
console.log(happyFace); //{ radius: 5, color: 'yellow' }
var happyFaceIcon = {
    radius: 5,
    color: "yellow",
    price: 10,
};
console.log(happyFaceIcon);
