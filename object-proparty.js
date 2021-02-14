const student = [
    {id:31, name: 'monirul'},
    {id:42, name:'rafi'},
    {id: 23, name:'sabbir'}

];

const name = student.map(s => s.name);
 const ids = student.map(s=> s.id);
 console.log(ids);
 const filters = student.filter(s => s.id<32);
 const finder = student.find(s => s.id >32);
 console.log(finder);