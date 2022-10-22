const names = [`Raji`, `Amirtha`, `Clemc`, `Amuthesh`];
              //  1  <  4
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);        
// }

// console.log(names[0]);  
// console.log(names[1]);  
// console.log(names[2]);
// console.log(names[3]);    


// names.map( (name)  => {console.log(name)} )


// names.map(
//     (name)=>{ console.log(name) }
// )


const studentDetails = [
{
    "name": "Raji",
    "Class": "12th",
    "Section": "C"
    
},
{
    "name": "Amirtha",
    "Class": "8th",
    "Section": "A"
    
},
{
    "name": "Clemc",
    "Class": "4th",
    "Section": "C"
    
},
{
    "name": "Amuthesh",
    "Class": "LKG",
    "Section": "D"
    
}
];


studentDetails.map( student => (console.log(student.Section)) )