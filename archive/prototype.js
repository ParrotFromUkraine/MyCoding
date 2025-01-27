
//Practic on lesson 
function Vehicle(type, speed) {
    this.type = type;
    this.speed = speed;
}

Vehicle.prototype.move = function(){
    console.log(`${this.type} їзде зі швидкістю ${this.speed}`);
}

const car = new Vehicle('Car', 100);
car.move();

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function(){
    console.log(`Привіт!) ${this.name}`);
}

const parrot = new Person('Inokentij');

needMoreSpace.cons()
parrot.greet();
needMoreSpace.cons()

function Student(name, study) {
    this.name = name 
    this.study = study; 
}


Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.studySubject = function(){
    console.log(`Студент ${this.name} вивчає ${this.study}`);
}

const student1 = new Student('Ivan', 'Math');
student1.studySubject(); 
const student2 = new Student('Parrot', 'JS');
student2.studySubject(); 
const student3 = new Student('Marat', 'UkrLit');
student3.studySubject(); 
const student4 = new Student('Ihor', 'memes');
student4.studySubject(); 
//by parrot