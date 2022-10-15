const topics = [`setTimeout`, `callback`, `arrow function`, `3 ways to declare a variable`, `string literals`, `template literals` ]

let addATopics = new Promise((resolve, reject) => { 
    setTimeout(() => {
        topics.push('async await')
        resolve(topics);
    }, 4000);
    

 })



async function getAllTopics() {

    let res = await addATopics
    console.log(res);    
    // console.log(topics);

}


getAllTopics();