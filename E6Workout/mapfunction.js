const names = [`Raji`, `Amirtha`, `Clemc`, `Amuthesh`];



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

];


studentDetails.map( student => (console.log(student.Section)) )