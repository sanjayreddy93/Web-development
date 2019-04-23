/*
1) var,let,const are used to define variables in javascript.
	let and const are added in ES6; THE LATEST VERSION OF javascript.
	
2) A variable can start with letters, numbers, _ and $. A variable cannot start with a number.

3)  	Multi wording declaration:-

	I) ** Camel case convention. First word Lowercase and inner word UPPER CASE. Ex: firstName, secondName.
   II) Pascal case. First word and every inner word is written UPPER CASE. Ex: FirstName, SecondName,
4) It is not mandatory to have a ; termination at the end of every statement. But it is recommended to have it.

*/

let name1;
name = 'Thor';
console.log(name);

 name = "Hulk";
console.log(name);

const val = "alex";
console.log(val);

/*
	Const has to be initialized with a value.
	

*/


const team= {
	name: "barcelona",
	playerName: "Marc andre Ter Stegen",       //This is a team object with const type, that has different attributes. The AATRIBUTES in the const object can be changed as done below.
	kitNumber: '1'
}

console.log(team);

team.playerName= 'Lionel Messi';
team.kitNumber= '10';					// The team values are updated. We can add new ATTRIBUTES that are not declared during the time of object creation.
team.position= 'forward';   		   // New attribute position is added which is not present in team before. 


console.log(team);