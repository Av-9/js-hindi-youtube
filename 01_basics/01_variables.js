const accountId = 144553;
let accountEmail = "honey@google.com";
let accountPassword = "12345";
let accountcity = "awanti";
let accountState;

// accountId = 2 // not allowed (const cannot be reassigned)

accountEmail = "hc@hc.com";
accountPassword = "123455443";
accountcity = "varansi";

console.log(accountId);

/*
prefer not to use var
because of issues with block scope vs function scope
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);
