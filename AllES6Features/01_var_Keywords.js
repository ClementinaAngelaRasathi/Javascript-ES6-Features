


function printNums(){
    console.log(`loop starts here`);
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(`loop ends here`);    
    console.log(i);
    console.log(`i is still accessible outside the for loop`);

    console.log(`conclusion: var keyword is accessible inside the function where it is defined`);
    // conclusion: var keyword is function scoped

}


printNums();