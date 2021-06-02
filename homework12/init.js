function Student(name, faculty, marks) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;
  this.getAvgMark = getAvgMark;
  this.getMaxMark = getMaxMark;
  this.getMinMark = getMinMark;
  this.getTotal = getTotal;
  this.getInfo = getInfo;
}
const students = [
  new Student("Albus Dumbledore", "Gryffindor", [100, 99, 75, 22]),
  new Student("Filius Flitwick", "Ravenclaw", [22, 52, 12, 43]),
  new Student("Pomona Sprout", "Hufflepuff", [45, 37, 48, 42]),
  new Student("Severus Snape", "Slytherin", [100, 99, 80, 45]),
  new Student("Rick Flair", "NatureBoy", [97, 63, 84, 55]),
  new Student("Undertaker", "soloWrestler", [98, 55, 95, 58]),
];
students.forEach((e) => {
  console.log(e.getInfo());
});

//functions
function getAvgMark() {
  let avg = this.getTotal() / this.marks.length;
  return `Avg mark is: ${avg}`;
}
function getMaxMark() {
  let maxMark = this.marks[0];
  for (let i = 0; i < this.marks.length; i++) {
    if (this.marks[i] > maxMark) {
      maxMark = this.marks[i];
    }
  }
  return `Max mark is : ${maxMark}`;
}
function getMinMark() {
  let minMark = this.marks[0];
  for (let i = 0; i < this.marks.length; i++) {
    if (this.marks[i] < minMark) {
      minMark = this.marks[i];
    }
  }
  return `Min mark is : ${minMark}`;
}
function getTotal() {
  let total = this.marks.reduce(function (total, element) {
    return total + element;
  });
  return total;
}
function getInfo() {
  return `${this.name} from ${this.faculty} have ${this.getTotal()} points `;
}