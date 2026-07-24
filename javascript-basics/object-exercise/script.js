
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