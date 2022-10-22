
// function start(fn) {
//     console.log("we are in start function");
//     fn();
// }


// function end() {
//     console.log("we are in end function");
// }


// calling start function and passing end function as an argument 
// start(end);

// Using arrow function
const start = (fn) => {
    console.log("we are in start function");
    fn();
}

const end = () => {
    console.log("we are in end function");
}

// calling start function and passing end function as an argument 
start(end);
// end();









