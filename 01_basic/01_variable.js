const accountId = 144553
let accountEmail = "monika@google.com"
accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// accountId = 2//not allowed
accountEmail = "hc@hc.com"
accountPassword = "25874"
accountCity = "bikaner"

/*
prefer not to use var
because issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])