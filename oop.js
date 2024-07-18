function user(userName, loginCount, login) {
  this.userName = userName;
  this.loginCount = loginCount;
  this.login = login;
  this.greeting = function () {
    console.log(`Welcome ${(this, userName)}`);
  };
  return this;
}
const outputOne = new user("Aman", 11, true);
const outputTwo = new user("Naman", 18, false);
console.log(outputOne);
console.log(outputTwo);
console.log(outputOne.constructor);
outputOne.greeting();
outputTwo.greeting();
