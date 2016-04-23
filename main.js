var prompt = require("prompt");

var Bus = require("./bus.js");


prompt.start();

var myBus = new Bus("Bill", "blue", "full");
var myBus2 = new Bus("Bill", "orange", "full");

console.log(myBus);
console.log(myBus2);

myBus.studentEntersBus("spencer","M","B",3.5,14,true,"yo man");
myBus2.studentEntersBus("tommy","F","A",4.1,4,true,"sup");


console.log(myBus);
console.log(myBus2);