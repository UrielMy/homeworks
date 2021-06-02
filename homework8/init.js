function Student(name, faculty, marks) {
   this.name = name;
   this.faculty = faculty;
   this.marks = marks;
}


const student = new Student();

function getAvgMarks() {
	return `${this.marks}`
}
// Методы
student.getAvgMark(); // средняя оценка студента
student.getMaxMark(); // максимальная оценка
student.getMinMark(); // минимальная оценка
student.getTotal(); // сумма оценок
student.getInfo(); // информация о студенте в виде name + faculty + total