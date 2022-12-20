const u1 = require("./users/u1");
const u2 = require("./users/u2");
const u3 = require("./users/u3");
const u4 = require("./users/u4");
const u5 = require("./users/u5");

const uArray = [u1, u2, u3, u4, u5];

// a) 
let ageRray = [];
function olderThan20(input) {
    ageRray = input.filter(user => user.age > 20);
}
olderThan20(uArray);
console.log(ageRray);

// b)
let adminRay = [];
function isAdmin(input) {
    adminRay = input.filter(user => user.isAdmin);
}
isAdmin(uArray);
console.log(adminRay);

// c)
let cArray = [];
function u50Admin(input) {
    input.forEach(function(element) {
        console.log(element.name)
        if (element.isAdmin ==true && element.age < 50) {
            cArray.push(element);
        }
    }) 
}
u50Admin(uArray);
console.log(cArray);

// d)
function sortByName (input) {
    input.sort(function(a, b){
        if (a.name > b.name) {
            return 1;
        } else if (b.name > a.name) {
            return -1;
        } else {
            return 0;
        }
    })
    return input;
}
console.log(sortByName(uArray));

// e)
function sortByAge (input) {
    return input.sort(function(a, b) {
        if(a.age < b.age) {
            return 1;
        } else if (a.age > b.age) {
            return -1;
        } else return 0;
    });
}
console.log(sortByAge(uArray));