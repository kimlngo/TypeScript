var point = { x: 12, y: 34 };
console.log('Point ' + JSON.stringify(point));
var thomas = {
    id: 500,
    first: 'Thomas',
    last: 'Ngo',
    middle: 'N/A',
    //method 1:
    sayHi: function () {
        return 'Hello!';
    },
    //method 2
    greet: function () {
        return "Greetings!";
    },
};
// thomas.id = 1234; //not allow
console.log('Thomas: ' + JSON.stringify(thomas));
console.log('Thomas says: ' + thomas.sayHi());
console.log('Thomas greets: ' + thomas.greet());
var carToy = {
    id: 1234,
    name: 'Fast & Furious Car',
    price: 50,
    applyDiscount: function (discount) {
        this.price = this.price * (1 - discount);
        return this.price;
    },
};
console.log("Car Toy before discount: ".concat(JSON.stringify(carToy)));
carToy.applyDiscount(0.3);
console.log("Car Toy after discount: ".concat(JSON.stringify(carToy)));
var johnson = {
    id: '500',
    first: 'Johnson',
    last: 'Smith',
    //newly added properties
    age: 15,
    sayHi: function () {
        return "Hi, I'm ".concat(this.first, " ").concat(this.last, " - ").concat(this.age, " years old");
    },
};
console.log(JSON.stringify(johnson));
console.log(johnson.sayHi());
var steve = {
    id: '600',
    first: 'Steve',
    last: 'K',
    age: 17,
    sayHi: function () {
        return "Hi, I'm ".concat(this.first, " ").concat(this.last, " - ").concat(this.age, " years old");
    },
    favoriteSport: 'Soccer',
    tellMeYourFavoriteSport: function () {
        return "My favorite sport is: ".concat(this.favoriteSport);
    },
};
console.log(JSON.stringify(steve));
console.log(steve.tellMeYourFavoriteSport());
var myEquinox = {
    make: 'Chevrolet',
    model: 'Equinox',
    year: 2012,
    transportationType: 'Land',
    advertise: function () {
        return "My equinox is: ".concat(JSON.stringify(this));
    },
};
console.log(myEquinox.advertise());
