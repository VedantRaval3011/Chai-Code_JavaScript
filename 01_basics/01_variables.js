const accountId = 144553;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345"; //var is not used nowadays because it donot follow scope
let accountCity = "Gujarat";
let accountState;
accountEmail = "hc@hc.com";
accountPassword = "sdms";
accountCity = "Bangalore";

//accountId = 2 //TypeError: Assignment to constant variable.
const account = [
  {
    email: accountEmail,
    id: accountId,
    password: accountPassword,
    city: accountCity,
    state: accountState,
  },
];

/*
Prefer not to use var
because of issue in block and function scope
*/

console.table(account);
