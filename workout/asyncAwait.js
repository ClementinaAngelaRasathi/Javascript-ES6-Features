const topics = [`setTimeout`, `callback`, `arrow function`, `3 ways to declare a variable`, `string literals`, `template literals` ]

const getAllTopics = () => {

    setTimeout(() => {
        for (let i = 0; i < topics.length; i++) {
            console.log(topics[i]); 
        }
    }, 2000);

}



async function addATopics(topic, cb) {

    

    setTimeout(() => {
        topics.push(topic);
    }, 1000);

    await cb();

    // console.log(settime);
   
}

addATopics(`Async Await`, getAllTopics);

// getAllTopics();