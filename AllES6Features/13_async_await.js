function sentOtp() {
    
    return new Promise((resolve, reject) => { 
        setTimeout(() => {resolve(`OTP sent..`)}, 3000);
        
     })
}


async function verifyotp() {
    let promise = await sentOtp();
    console.log(promise); 
    // console.log(sentOtp());
    console.log(`otp verified`);
}

verifyotp();

// sentOtp();
