const first = [1, 2, 3];
const second = [4, 5, 6];
// const dupsecond = [4, 5, 6];

//Older approach
const combined = first.concat(second);
console.log(combined);

//ES6 Approach
const combined2 = [...first, ...second];
console.log(combined2);

// Adding value in the middle
const combined2Mid = [...first, 3.5,...second];
console.log(combined2Mid);

const cloneSecond = [...second];
console.log(cloneSecond);


// Objects

const obj1 = {name: `ammu`};
const obj2 = {age: 23};

//combing the above 2 objects and adding a new element
// const combinedobj = {...obj1, ...obj2, location: `India`};
// console.log(combinedobj);

