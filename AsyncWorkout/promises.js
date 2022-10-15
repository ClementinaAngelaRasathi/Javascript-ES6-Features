
// let p = new Promise((resolve, reject) => { 
   
//     let a = 2 + 1

//     if (a == 2)
//     {
//         resolve("sucesss")
//     }
//     else 
//     {
//         reject('failed')
//     }

//  })



//  p
//  .then((message)=>{
//     console.log("This is in the then " + message );
//  })

//  .catch((message)=>{
//     console.log("This is in the catch " + message );
//  })



// const promise = new Promise((resolve, reject) => { 
    
//     const a = 3

//     if (a == 2 ) {
        
//         console.log("promise Fullfiled");
    
//         resolve({data: "some data"})
    
        
//     } else {
        
//         console.log("promise Failed");
    
//         reject(new Error("server not found"))
    
    
//     }


// })

// promise.then(response => {
//     console.log(response);
// })

// .catch(err=> {
//     console.log(err);
// })




// const getFromapi = fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => console.log(res))


function promiseFn(num) {

    return new Promise((resolve, reject) => {  

        if (num == 10)
        {
            console.log("success");
            resolve({data: {username: "hello", pwd: "1234"}});
        }

    else
        {
            console.log("Failed");
            reject({data: {message: '404 Not Found'}})
        }


    });
           
}


// return new Promise((resolve, reject) => {  })


promiseFn(11)
.then(response => console.log(response))
.catch(error=> console.log(error))
