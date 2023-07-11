// Object to be destructured
const student = {
  id: 1,
  name: 'Van Tien',
  age: 20,
  grade: 'A'
};

// Destructuring the student object
const { id, name, age, grade } = student;


console.log(id);    
console.log(name);  
console.log(age);   
console.log(grade); 


//console.log(student.id);    
//console.log(student.name);  
//console.log(student.age);   
//console.log(student.grade); 


const numbers = [1, 2, 3, 4, 5, 6, 7];

const [first, second, , fourth,...rest] = numbers;

console.log(first);   
console.log(second);  
console.log(fourth);  
console.log(rest);
