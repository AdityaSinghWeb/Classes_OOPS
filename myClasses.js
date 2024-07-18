class user {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}ab`;
  }
  changeUsername() {
    return `${this.userName.toUpperCase()}`;
  }
}
const outputOne = new user("aman", "aman@.com", "12445");
console.log(outputOne);
console.log(outputOne.encryptPassword());
console.log(outputOne.changeUsername());

//behind the scene using prototype
function userTwo(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}
userTwo.prototype.encryptPassword = function () {
  return `${this.password}ad`;
};
userTwo.prototype.changeUsername = function () {
  return `${this.userName.toUpperCase()}`;
};
const outputTwo = new userTwo("aman", "aman@.com", "12445");
console.log(outputTwo);
console.log(outputTwo.encryptPassword());
console.log(outputTwo.changeUsername());

//Inheritance by using  classes
class student {
  constructor(userName, score) {
    this.userName = userName;
    this.score = score;
  }
  print() {
    console.log(`${this.userName} scored ${this.score} marks in final exam`);
  }
}
class teacher extends student {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
  details() {
    console.log(`Name is ${this.userName}, email is ${this.email}`);
  }
}

const result = new teacher("Aman", "aman@.com", "1212");
const resultTwo = new student("Naman", 81);
console.log(result);
console.log(resultTwo);
result.print();
resultTwo.print();
result.details();
//resultTwo.details();  this will give error
console.log(result instanceof student);
