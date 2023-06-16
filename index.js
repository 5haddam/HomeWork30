const currentDay = new Date();
const currentYear = currentDay.getFullYear();

class Student {
  constructor(firstName, lastName, birthYear, arrayWithMarks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.arrayWithMarks = arrayWithMarks;
    this.attendance = Array.from({length: 25}, () => undefined);
  }
  getStudentAge() {
    return currentYear - this.birthYear;
  }
  getAverageMark() {
    return this.arrayWithMarks.reduce((previusValue, currentValue) => previusValue + currentValue) / this.arrayWithMarks.length;
  }
  present() {
    if (this.attendance.indexOf(undefined) !== -1) {
      this.attendance[this.attendance.indexOf(undefined)] = true;
    }
    return this;
  }
  absent() {
    if (this.attendance.indexOf(undefined) !== -1) {
      this.attendance[this.attendance.indexOf(undefined)] = false;
    }
    return this;
  }
  summary() {
    const averageAttendance = this.attendance.reduce((previusValue, currentValue) => +previusValue + +currentValue) / 25;
    return this.getAverageMark() > 90 && averageAttendance > 0.9 ? "Молодець!" :
      this.getAverageMark() > 90 || averageAttendance > 0.9 ? "Добре, але можна краще" :  "Редиска!";
  }
}

const goodStudent = new Student('Misha', 'Novicenko', 1999, [100, 85]);
goodStudent.present().absent().present().absent().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present();
console.log(goodStudent);
console.log(goodStudent.summary());
console.log(goodStudent.getStudentAge());

const averageStudent = new Student('Ivan', 'Petrov', 2003, [100, 80, 91]);
averageStudent.present().absent().present().absent().present().present().present().present().absent().absent()
  .absent().absent().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present().present().present().present().present()
  .present().present().present().present().present().present();
console.log(averageStudent);
console.log(averageStudent.summary());
console.log(averageStudent.getStudentAge());

const badStudent = new Student('Olga', 'Sidorova', 2005, [60, 55, 65]);
badStudent.absent().absent().absent().absent().absent().absent().present().absent().absent().present().present()
  .absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent().absent();
console.log(badStudent);
console.log(badStudent.summary());
console.log(badStudent.getStudentAge());