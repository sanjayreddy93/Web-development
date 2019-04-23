/*
	In JavaScript there are two types of dataTypes.
	
	1) Primitive DataTypes:  1.String, 2. Numbers (integers, floats and doubles are numbers), 3.boolean, 4.Null, 5.Undefined(If a variable is declared and not 
								initialized then it is UNDEFINED.), 6.Symbols(ES6)
		
		I) The data is stored directly in the Location that the variable accesses. 
	   II) Generally stored in a STACK MEMORY.
	  III) The variable is accessed by its actual value.

	2) Reference DataTypes:    1. Arrays, 2. Object literals, 3. Functions, 4. Dates, 5. Anything Else..... 
			
			These are OBJECTS, that are accessed by reference. 
	
		I) Accessed by reference.
	   II) The data is stored in a HEAP MEMORY. It is DYNAMICALLY ALLOCATED memory.
	  III) There is a POINTER, to store a memory location.

*/

/*
		1. A JavaScript is a dynamically typed language.
		2. A Type in JS is associated with values but not variables.
		3. The same variable can hold multiple types.
		4. ** We donot need to specify types.
		5. 


*/

const name = "chris Hemsworth"; //name is a String type, but we didnot specify it as a String name.
console.log(name);

const age = 23;
console.log(typeof age);

const address = {
	city: 'Magdeburg',
	pincode: '39106'
}
console.log(address);
console.log(typeof address);

const present= new Date();
console.log(present);
console.log(typeof present);