import Person from './person.js';

export default class Student extends Person {
  #specialty;
  #studentId;

  constructor(name, age, specialty, studentId) {
    super(name, age);
    this.#specialty = specialty;
    this.#studentId = studentId;
  }

  get specialty() {
    return this.#specialty;
  }

  set specialty(spec) {
    this.#specialty = spec;
  }

  get studentId() {
    return this.#studentId;
  }
}
