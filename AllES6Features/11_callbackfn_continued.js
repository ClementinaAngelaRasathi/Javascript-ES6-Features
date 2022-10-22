//setTimeout
// setTimeout(() => {

//     console.log(`printed after 5 secs`);

// }, 5000);

                        //passing second as an argument to delay the print
const delayingThePrint = (seconds) => {

    setTimeout(() => {
        console.log(`printed after ${seconds} secs`);
    }, seconds * 1000);

}

delayingThePrint(7);

delayingThePrint(5);