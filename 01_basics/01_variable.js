const accountID = 23146008   // const means do not change value
let accountEmail = "sainijai071@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;     // output is undefined
// accountID = 2   not allowed 

accountEmail = "sainijai663@gmail.com"
accountPassword = "789456"
accountCity = "Haridwar"

console.log(accountID);

/*
prefer not to use var 
beacuse of issue in block scope and functional scope
*/

console.table([accountEmail, accountID, accountPassword, accountCity, accountState])