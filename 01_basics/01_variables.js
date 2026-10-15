const accountId = 221212;
let accountName = "John Doe";
var accountBalance = 1000.50;
 address = "123 Main St, Anytown, USA"; 


// changing the value of accountName
accountName = "Jane Smith";

// changing the value of accountBalance
accountBalance += 500; // adding 500 to the existing balance

// changing the value of address
address = "456 Elm St, Othertown, USA"; 

console.table ({
  accountId,
  accountName,
  accountBalance,
  address
}); 


/* not to use var for variable declaration in modern JavaScript, as it has function scope and can lead to unexpected behavior. Use let or const instead. */ 