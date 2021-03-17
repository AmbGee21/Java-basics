// var favoriteFoods = ["Pounded yam", "Jollof rice", "Fish", "Eba"]; 
// console.log (favoriteFoods)
// console.log (favoriteFoods[1]);
// favoriteFoods[3] = "Egusi";
// console.log (favoriteFoods)
// console.log (favoriteFoods.splice(0,2)[1]);
// var formerFavoriteFoods = ["Pounded yam"]
// console.log (favoriteFoods)
// favoriteFoods.push ("Amala")
// console.log (favoriteFoods)
// favoriteFoods.unshift ("Bread")
// console.log (favoriteFoods)
// var foods = []
// foods.pop ()
// console.log (foods)
// var numbers = [2, 3, 4, 5]
// console.log (numbers)
// numbers.splice (1,1)
// console.log (numbers)
// var names = ["alpha", "gamma", "delta"]
// console.log (names)
// names.splice (1,1, "betta", "gamma");
// console.log (names)
// var numero = [10,-10,-5,-3,2,1]
// console.log (numero)
// numero.splice (1, 3, 9, 8, 7, 6, 5, 4, 3)
// console.log (numero)
// var arr = []
// console.log (arr)
// arr.push("Gladness")
// console.log (arr)
// arr.push("Olotu")
// console.log (arr)
// arr.push("Black")
// console.log (arr)
// var arr2 = [7]
// console.log (arr2)
// arr2.push("JavaScript")
// console.log (arr2)
// arr2.indexOf (7)
// var combinedArr = arr.concat (arr2)
// console.log (combinedArr)

// 1
let people = ["Greg", "Mary", "Devon", "James"];
for(let p= 0; p<people.length; p++) 
{console.log(people[p]);}

// 2
people.shift()
console.log(people)

// 3
people.pop()
console.log(people)

// 4
people.unshift("Matt")
console.log(people)

// 5
people.push("Gladness")
console.log(people)

// 6
for(let p= 0; p<people.length; p++) 
{if(p > 1){break;}
console.log(people[p]);}

// 7
people.slice(2,1);
// newpeople= people.shift()
console.log(people)
// console.log(newpeople)

// 8
console.log(people.indexOf("Mary"));

// 9 
console.log(people.indexOf("Foo"));

//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth", "Artie");
console.log(people)

//11
let withBob = people.concat(["Bob"]);
console.log(withBob)