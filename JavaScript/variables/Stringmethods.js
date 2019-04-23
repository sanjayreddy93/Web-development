
/*
		String methods and Concatenation, Append...
*/

const firstName = "Lionel";
const lastName = "Messi";

let val;

val = firstName + lastName ;

console.log(val);

// concatention Adding a space character

	val = firstName + ' ' + lastName;

		console.log(val)
		
//Appending:

val = 'Luis ';
val += 'Suarez';  //+= appends the string to the previous value and not replaces it.
console.log(val);		

//Escaping a '
val = ' I can\'t believabe, it\'s just good' //  Cannot read property 'log' of undefined if there is a . at the end of the sentence out of the '' . 
console.log(val);  //Throws a unexpected identifier error. This can be avoided either by using " " or by using a \'t and continue the sentence.