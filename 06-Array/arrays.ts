//array annotation
const names: string[] = ["James", "John"];
names.push("Peter");
// names[0] = 123; not allow
console.log(names[0]);

const luckyNumbers: number[] = [6, 9];
console.log(luckyNumbers);
console.log(luckyNumbers.pop());
console.log(luckyNumbers);

//alternative syntax
const planeTypes: Array<string> = [];
planeTypes.push("Bomber");
planeTypes.push("Figher");
planeTypes.push("Intercepter");

console.log(planeTypes);

const winningNumbers: Array<number> = [];
winningNumbers.push(13);
winningNumbers.push(29);
winningNumbers.push(36);
winningNumbers.push(52);
console.log(winningNumbers);

//Array of custom type
type Person = {
  name: string;
  age: number;
};

const family: Array<Person> = [];
family.push({ name: "John Smith", age: 23 });
console.log(family);

//2-D array
const board: string[][] = [
  ["x", "o", "x"],
  ["x", "o", "x"],
  ["x", "o", "x"],
];

console.log(board);
