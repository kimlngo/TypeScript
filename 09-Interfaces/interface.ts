//interface is only applicable to object
interface Point {
  x: number;
  y: number;
}

const point: Point = { x: 12, y: 34 };
console.log('Point ' + JSON.stringify(point));

//readonly and optional properties
interface Person {
  readonly id: number;
  first: string;
  middle?: string;
  last: string;

  // adding method to an interface
  //sayHi - method declare #1
  sayHi: () => string;

  //greet - method declare #2
  greet(): string;
}

const thomas: Person = {
  id: 500,
  first: 'Thomas',
  last: 'Ngo',
  middle: 'N/A',
  //method 1:
  sayHi: () => {
    return 'Hello!';
  },

  //method 2
  greet() {
    return `Greetings!`;
  },
};
// thomas.id = 1234; //not allow
console.log('Thomas: ' + JSON.stringify(thomas));
console.log('Thomas says: ' + thomas.sayHi());
console.log('Thomas greets: ' + thomas.greet());

//method with input argument
interface Product {
  readonly id: number;
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const carToy: Product = {
  id: 1234,
  name: 'Fast & Furious Car',
  price: 50,
  applyDiscount(discount: number) {
    this.price = this.price * (1 - discount);
    return this.price;
  },
};

console.log(`Car Toy before discount: ${JSON.stringify(carToy)}`);
carToy.applyDiscount(0.3);
console.log(`Car Toy after discount: ${JSON.stringify(carToy)}`);

//add more into an existing interface
interface Student {
  readonly id: string;
  first: string;
  last: string;
}

//re-open an interface
interface Student {
  age: number;
  sayHi(): string;
}

const johnson: Student = {
  id: '500',
  first: 'Johnson',
  last: 'Smith',

  //newly added properties
  age: 15,
  sayHi() {
    return `Hi, I'm ${this.first} ${this.last} - ${this.age} years old`;
  },
};

console.log(JSON.stringify(johnson));
console.log(johnson.sayHi());

//Inheritance (extending interfaces)
interface HighSchoolStudent extends Student {
  favoriteSport: 'Soccer' | 'Volleyball' | 'Badminton';
  tellMeYourFavoriteSport(): string;
}

const steve: HighSchoolStudent = {
  id: '600',
  first: 'Steve',
  last: 'K',
  age: 17,
  sayHi() {
    return `Hi, I'm ${this.first} ${this.last} - ${this.age} years old`;
  },
  favoriteSport: 'Soccer',
  tellMeYourFavoriteSport() {
    return `My favorite sport is: ${this.favoriteSport}`;
  },
};

console.log(JSON.stringify(steve));
console.log(steve.tellMeYourFavoriteSport());

//extending multiple interfaces
interface Vehicle {
  transportationType: 'Land' | 'Air' | 'Sea';
}

interface Car {
  make: string;
  model: string;
  year: number;
}

interface Chevrolet extends Vehicle, Car {
  advertise(): string;
}

const myEquinox: Chevrolet = {
  make: 'Chevrolet',
  model: 'Equinox',
  year: 2012,
  transportationType: 'Land',
  advertise() {
    return `My equinox is: ${JSON.stringify(this)}`;
  },
};

console.log(myEquinox.advertise());
