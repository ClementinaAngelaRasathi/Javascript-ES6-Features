// const posts  = [
//     {title:'Post 1', body: 'this is post 1'},
//     {title:'Post 2', body: 'this is post 2'}
// ]

// function getPosts() {
    
//     setTimeout(() => {
//         let output = ""
//         posts.forEach((post, index) => {
//             output = output + post.title + "\n";
            
//         });
//         console.log(output);

//     }, 1000);
// }

// function createPost(post, callback) {
//         setTimeout(() => {
//             posts.push(post);
//             callback();
//         }, 2000);
        
// }



// createPost(
//     {
//         title:'Post 3',
//         body: "this is post 3"
//     },getPosts
// )

// getPosts();



// function verifyOtp() {

//     console.log("Verification PIN Sent");

//     setTimeout(() => {
//         console.log("PIN Verified");    
//     }, 5000);
  
// }

// verifyOtp("AmuthesWaran")



function sendOTP() {
    console.log("OTP Sent");
}

function verify(callback) {

    callback();
    console.log("PIN Verified");

}


verify(sendOTP);
