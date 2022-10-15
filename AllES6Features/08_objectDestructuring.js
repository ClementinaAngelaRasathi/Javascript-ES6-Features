const student1 = {

    sname:'amutheswaran',
    age:23,
    hobby:'teaching',
    country:'india'

}

// older approach to extract all the student details

// const sname = student1.name;
// const age = student1.age;
// const hobby = student1.hobby;
// const country = student1.country;


// console.log(sname, age, hobby, country);


// ES6 approach

const { sname, age, hobby, country } = student1;
console.log(sname, age, hobby, country);

// to extract only sname
// const {sname} = student1;
// console.log(sname);

// to extract only sname to a different variable name
// const {sname: st } = student1
// console.log(st);


