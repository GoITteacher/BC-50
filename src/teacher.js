import Person from './person';

export default class Teacher extends Person {
  #rating;
  #coursesTaught;
  constructor(name, age, rating, coursesTaught) {
    super(name, age);
    this.#rating = rating;
    this.#coursesTaught = coursesTaught;
  }

  get rating() {
    return this.#rating;
  }

  set rating(newRating) {
    this.#rating = newRating;
  }

  get coursesTaught() {
    return this.#coursesTaught;
  }

  set coursesTaught(newListOfCourses) {
    if (newListOfCourses.length < 20) {
      this.#coursesTaught = newListOfCourses;
    }
  }

  addNewCourse(newCourse) {
    this.#coursesTaught.push(newCourse);
  }

  removeCourse(course) {
    this.#coursesTaught = this.#coursesTaught.filter(el => el !== course);
  }
}
