// The call method allows you to call a function with a specified 'this' value and individual arguments
// It is useful for method borrowing from one object and use them in the context of another object

function setUserName(username) {
    this.username = username;
    console.log("called");
  }
  function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
  }
  const output = new createUser("Aman", "Aman@.com", "12654");
  console.log(output);