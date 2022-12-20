// #1
function printAfterFive(num) {
    setTimeout(function() {
        console.log(num);
    }, 5000)
}

printAfterFive(19);

// #2
function printEveryFive(num) {
    setInterval(function() {
        console.log(num);
    }, 5000)
}

printEveryFive(8);