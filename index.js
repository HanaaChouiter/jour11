var fs = require("fs");

//  01 - File System

// Dans le fichier `index.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console

// fs.readFile("jour07.txt", function (err, data) {
//     if (err) {
//        console.error(err);
//        return;
//     }
 
//     console.log( data.toString());
// });

// Modifier le contenu du fichier et l'afficher

fs.writeFile("jour07.txt", "The dark knight",  function(err) {
    if (err) {
       return console.error(err);
    }
 
    //console.log("Et voilà ! Voyons le résultat :");
 
    fs.readFile("jour07.txt", function (err, data) {
       if (err) {
          return console.error(err);
       }
 
       //console.log(data.toString());
    });
});

// Supprimer le fichier

// fs.unlink("jour07.txt", function(err) {
//     if (err) {
//        return console.error(err);
//     }
// });

//  02 - Map Double

var array = [1, 2, 3, 4, 5,]
var double = array.map(function(num){
    return num * 2;
})

//console.log(double)

// 03 - Map Names

var longNames= [
	{
        firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

var shortNames = longNames.map(function(person){
    return  {names: `${person.firstName} ${person.lastName}`}
})

//console.log(shortNames)

//  04 - Filter Numbers

var array = [1, "Toto", 34, "javascript", 8]
var numbers = array.filter(function(element){
    return  Number(element)
})

//console.log(numbers)

// 05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
var even = numbers.filter(function(num){
    return num % 2 === 0
})

//console.log(even)

// 06 - Cakes

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolate = cakes.filter(function(element){
    return element.flavor === "chocolate"
})

// console.log(chocolate)

var soldOut = chocolate.map(function(element){
    return  {names: element.name ,
            flavor: element.flavor,
            status: "sold out!"}
})

//console.log(soldOut)

// var gateauxAuxChocolats = chocolate
// console.log(gateauxAuxChocolats)



