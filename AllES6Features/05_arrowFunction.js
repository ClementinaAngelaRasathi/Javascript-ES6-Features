

//Declaring a normal function
const add2Nums = function(num1 , num2){
    console.log(num1 + num2);
}

add2Nums(1,2);


//arrow function
const addTwoNums = (num1 , num2) => console.log(num1 + num2);

addTwoNums(2,5);


// const jobs = [ 
//     {id:0, isActive: true },
//     {id:1, isActive: true },
//     {id:2, isActive: false },
// ];

// const activeJobs = jobs.filter(job => job.isActive == false);
// console.log(activeJobs);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number.valueOf(number)%2 == 0  )
console.log(evenNumbers);

const oddNumbers = numbers.filter(number => number.valueOf(number)%2 != 0  )
console.log(oddNumbers);