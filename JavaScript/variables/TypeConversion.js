/*
		There are two ways to convert a number to String.
		
		1) surround the number with String()
		2) first write the number in (). following with toString() as in line 32.
*/

let value;

value= 545;

console.log(value);
console.log(typeof value);

//Converting the number to a string now.

value = String(234);
console.table({output:value, dataType:typeof value, length: value.length});


//Boolean to a String

value = String(false);
console.table({output: value, dataType: typeof value, length: value.length});

//Date to string
value = String(new Date());
console.log({op: value, size: value.length, dataType: typeof value});

//number to String

value = (15).toString();
console.log({op:value, dataType:typeof value, size: value.length});


/*
		Converting Number to String is similar to the vice versa.
		
		1) surround the string with Number('hello');
		

*/


//number to string

value = Number('5');
 console.log({op:value, dataType:typeof value, size: value.toFixed()});
 
 value = parseInt('125');
 console.log({op:value, dataType:typeof value, size: value.toFixed()});
 
 value = parseFloat(0.09);
 console.log({op:value, dataType:typeof value, size: value.toFixed()});