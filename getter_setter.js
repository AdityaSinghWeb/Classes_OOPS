class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}GTA`;
  }
  set password(value) {
    this._password = value;
  }
}

const outputOne = new User("gtasa@.com", "abc");
console.log(outputOne.email);
console.log(outputOne.password);

//property based
function userDetails(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}
const outputTwo = new userDetails("Two@.com", "Two");
console.log(outputTwo.email);

//object based
const input = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const outputThree = Object.create(input);
console.log(outputThree.email);
