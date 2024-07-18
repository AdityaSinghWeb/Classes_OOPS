function user(userName, score) {
  this.userName = userName;
  this.score = score;
}
user.prototype.increment = function () {
  this.score++;
};
user.prototype.printMe = function () {
  console.log(`${this.userName} Score is ${this.score}`);
};
const outputOne = new user("Aman", 81);
const outputTwo = new user("Naman", 51); //if we don't use new keyword it gives error

outputOne.increment();
outputOne.printMe();
outputTwo.increment();
outputTwo.printMe();
//--
let heros = ["thor", "spiderman"];
let heroPowers = {
  thor: "Hammer",
  spiderman: "Sling",
  getThorPowers: function () {
    console.log(`thor power is ${this.thor}`);
  },
};
Object.prototype.aman = function () {
  console.log("Aman is present in all object");
};
Array.prototype.heyAman = function () {
  console.log("hello aman");
};
heros.aman();
heroPowers.aman();
heros.heyAman();
// heroPowers.heyAman()  this will give error

//Inheritance in prototype
//Example-
const UserProfile = {
  name: "Aman",
  email: "Aman@.com",
};
const Teacher = {
  makeVideo: true,
};
const teachingSupport = {
  isAvailable: false,
};
const TAsupport = {
  fullTime: true,
  __proto__: teachingSupport,
};
Teacher.__proto__ = UserProfile;

//Modern Syntax--
Object.setPrototypeOf(teachingSupport, Teacher);
//means that the 'teachingSupport' object will have its prototype set to 'Teacher'
//'teachingSupport' will inherit properties and methods from object 'Teacher'

//--
let name = "Naman          ";
console.log(name);
console.log(name.length);
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`); //true length of name variable
};
name.trueLength();
"Aman     ".trueLength(); //true length of Aman
