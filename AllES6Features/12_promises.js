
//here promise will resolve if success is true

// const success = true

                        //here status is a boolean
const callingThePromise = (status) => {

return new Promise((resolve, reject) => {
    if(status){
        resolve('Your Promise got resolved')
    }
    else{
        reject('Your Promise got rejected')
    }
})

}


callingThePromise(false)
.then(response=>console.log(response))
.catch(error=>console.log(error))