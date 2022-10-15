

function promiseFn(num)
    {
        return new Promise((resolve, reject) => { 

        if (num == 10)
        {
            resolve({data:{userName: "suman", pwd:1234}})
        }
        
        else
        {
            reject("404 Not found")
        }

         })   
    }


promiseFn(11)
.then(res=>console.log(res))
.catch(err=>console.log(err))

