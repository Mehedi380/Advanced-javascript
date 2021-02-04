const students = [
    {id: 38, name: 'Mehedi Hasan'},
    {id: 41, name: 'Sunny'},
    {id: 63, name: 'Abir Hasan'},
    {id: 12, name: 'Afia jannat'},
]

const names = students.map( s => s.name);
const ids = students.map( s => s.id);

console.log(names);
console.log(ids);

const there = students.filter( s => s.id>40);
console.log(there);

const there1 = students.find( s => s.id>40);
console.log(there1);