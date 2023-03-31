import Person from './person.js';
import Student from './student.js';
import Teacher from './teacher.js';

const person = new Person('name', 123);
const student = new Student('name', 123, 'specialty', 'studentId');
const teacher = new Teacher('name', 123, 0, []);

console.log(person, student, teacher);
