function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `Hey ${person}, how's it going?`;
}

const describePerson = (person: string, age: number, isStudent: boolean) => {};

square(3.4);
greet("Mike Thompson");

describePerson("Mike", 65, true);

//default parameter
function greetWithDefault(person: string = "there") {
  return `Hey ${person}, how's it going?`;
}

greetWithDefault();
greetWithDefault("James");

//return type
//return type can be inferred but sometimes it's helpful to put
//an expected return type to catch careless error
function addOne(num: number): number {
  return num + 1;
}

//void
function printTwice(name: string): void {
  console.log(name);
  console.log(name);
}

//never type
const giveError = (msg: string): never => {
  throw new Error(msg);
};

const keepLooping = (): never => {
  while (true) {
    console.log("hello");
  }
};
