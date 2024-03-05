function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }

Person.prototype.greet = function(){
    console.log("Hello " + this.firstName + " " + this.lastName + ", aged " + this.age);
}

Person.prototype.age=0;
var jorge = new Person("Jorge", "Andrade", 28);
jorge.age=28;
jorge.greet();

var luis = new Person("Luis", "Miguel", 25);
luis.age=24;
luis.greet();


console.log(jorge.__proto__);
console.log(luis.__proto__);
console.log(jorge.__proto__ == luis.__proto__);