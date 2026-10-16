const accountId = 221212;
let accountName = "utsav poudel";
var accountBalance = 1000.50;
 address = "kapilvastu municipality 10 , bikuli kapilvastu"; 


// changing the value of accountName
accountName = "Manish";

// changing the value of accountBalance
accountBalance += 500; // adding 500 to the existing balance

// changing the value of address
address = "Pokhara Nepal"; 

console.table ({
  accountId,
  accountName,
  accountBalance,
  address
});        


/* not to use var for variable declaration in modern JavaScript, as it has function scope and can lead to unexpected behavior. Use let or const instead. */ 