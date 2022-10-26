const student1 = {

    sname:'amutheswaran',
    age:23,
    hobby:'teaching',
    country:'india'

}

//  const sname = student1.sname;
//  console.log(sname);

const {sname: student_name , age, hobby, country} = student1;

console.log(student_name);
console.log(age);
console.log(hobby);
console.log(country);


