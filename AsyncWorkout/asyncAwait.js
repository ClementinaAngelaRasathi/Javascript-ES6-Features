
const es6 = ['arrow function', 'callbacks', 'promises', 'set timeout']


function getAllTopics() {
    
    setTimeout(() => {
        for (let i = 0; i < es6.length; i++) {
            console.log(es6[i]);
            
        }    
    }, 2000);
    
}


function addATopics(topic) {
    
    setTimeout(() => {
        
        es6.push(topic)


    }, 4000);
}

addATopics('Async Await')
getAllTopics();