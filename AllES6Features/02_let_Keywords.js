


function printNums(){
    console.log(`loop starts here`);
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(`loop ends here`);    
    console.log(i); 
    // now when i cant be accessed here
    // so you will get the error in the console
    
    // conclusion: let keyword is block scoped


}


printNums();