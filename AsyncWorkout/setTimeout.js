

function PrintingMyName() {

    setTimeout(() => {
        console.log("Amutheswaran");
    }, 2000);

}



async function PrintingYourName(name, cb) {

    
     setTimeout(() => {
        
        console.log(name);
        
    }, 3000);

    await cb();
}



// function PrintingYourName(name, cb) {

    
//     setTimeout(() => {
       
//        console.log(name);
       
//    }, 3000);

//    cb();
// }



PrintingYourName("Ammu",PrintingMyName)
// PrintingMyName("AmuthesWaran")

// PrintingMyName("Amutheswaran")
// PrintingYourName("Ammu", PrintingMyName)