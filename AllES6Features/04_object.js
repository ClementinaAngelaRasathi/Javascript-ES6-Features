// objects are key value pairs
// Look at this below student object

const student = {
    name: `ammu`,
    class: `8th`,
    section: `C`
}

// here name is the key and ammu is the value

// how to access members of an object?

// using . notation
student.name
console.log(student.name);

// using [] notaion
student['name']
console.log(student['name']);



//To update the value in an object;
student['name'] = 'amutheswaran'
console.log(student['name']);
console.log(student);


// const study = student.study.bind(student);
// study();


