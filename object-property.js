

const students = [
    {id:12, name: "rasel"},
    {id:15, name: "abir"},
    {id:25, name: "salman"},
    {id:30, name: "shuvo"},
]

// const studentName = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     const elementName = element.name;
//     studentName.push(elementName);

// }

// const studentName = students.map( x => x.name);
const ids = students.map(s => s.id < 24);

console.log(ids);