
let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};
let users = [john, pete, mary];

let names = users.map(user => user.name);
console.log("1. " + names);



let john2 = {name: "John", surname: "Smith", id: 1};
let pete2 = {name: "Pete", surname: "Hunt", id: 2};
let mary2 = {name: "Mary", surname: "Key", id: 3};
let users2 = [john2, pete2, mary2];

let usersMapped = users2.map(user => ({
    name: `${user['name']} ${user['surname']}`,
    id: user['id'],
}));
console.log(usersMapped);



let john3 = {name: "John", age: 25};
let pete3 = {name: "Pete", age: 30};
let mary3 = {name: "Mary", age: 28};
let arr = [pete3, john3, mary3];

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age)
};

sortByAge(arr);
console.log(arr);



let john4 = {name: "John", age: 25};
let pete4 = {name: "Pete", age: 30};
let mary4 = {name: "Mary", age: 29};
let arr2 = [john4, pete4, mary4];

function getAverageAge(arr) {
  return arr.reduce((total, current) => total + current.age, 0) / arr.length
}
console.log("4. " + getAverageAge(arr2));



let users3 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users) {
  return users.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {}
)};

let usersById = groupById(users3);
console.log(usersById)