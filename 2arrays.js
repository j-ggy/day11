const vArray = [9, false, 13, "george", false, "YELLING", 3333, "true", true];
let arrayOne = [];

// a)
function stringFindAndSort(input) {
    input.forEach(function(element) {
        if(typeof element === "string") {
            arrayOne.push(element);
        }
    })
    return arrayOne.sort(function(a,b) {
        if(a.toLowerCase() > b.toLowerCase()) {
            return 1;
        } else {
            return -1;
        }
    })
} console.log("a) " + stringFindAndSort(vArray));

//b)
let arrayTwo = [];
let arrayThree = [];
function numFindAndSort(input, order) {
    if (order === "sort") {
        input.forEach(function(element) {
            if(typeof element === "number") {
                arrayTwo.push(element);
            }
        })
        return (arrayTwo.sort(function(a, b){return a-b}));
    } else if (order === "reverse") {
        input.forEach(function(element) {
            if(typeof element === "number") {
                arrayThree.push(element);
            }
        })
        return (arrayThree.reverse(function(a, b){return a-b}));
    }
    
} 
console.log("b) " +numFindAndSort(vArray, "sort"));

//c)
console.log("c) " + numFindAndSort(vArray, "reverse"));

//d)
let arrayFour = [];
function stringFindAndLower(input) {
    input.forEach(function(element) {
        if(typeof element === "string") {
            arrayFour.push(element.toLowerCase());
        }
    })
    return arrayFour;
}
console.log("d) " + stringFindAndLower(vArray));