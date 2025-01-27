//functionName.call(this, name) - в functionName передає this.name в функцию

const needMoreSpace = {
    cons: function(){
        console.log(' ')
        console.log(' ')
    }
}
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
needMoreSpace.cons()



const book = {
    title: "Все про папуг",
    author: "Людина котра розберается в папугах",
    year: 2023,
    
    getSummary: function() {
      return `Книга "${this.title}", написана ${this.author} в ${this.year} році.`;
    },
  };
  

book.setYear = function(newYear) {
    this.year = newYear;
  }

  book.setYear(2025);
  console.log(book.getSummary());

  function Animal(name, type, sound) {
    this.name = name;
    this.type = type;
    this.sound = function() {
      console.log(sound);
    };
  }
  
  const dog = new Animal("Бобик", "Собака", "Гав-гав");
  const cat = new Animal("Мурка", "Кішка", "Мяу-мяу");
  
  dog.sound(); 
  cat.sound(); 

  class User {
    #password; 
  
    constructor(name) {
      this.name = name;
    }
  
    setPassword(newPassword) {
      this.#password = newPassword;
    }
  
    checkPassword(password) {
      return this.#password === password;
    }
  }
  
  const user = new User("Іван");
  
  user.setPassword("iDon`tLikeUkraineLanguageLesson");
  
  console.log(user.checkPassword("iDon`tLikeUkraineLanguageLesson"));
  console.log(user.checkPassword("wrongPassword"));
  needMoreSpace.cons()
  needMoreSpace.cons()

  console.log('GameCore 2.1v')
  class Player {
    constructor(name, activeHand) {
        this.name = name;
        this.activeHand = activeHand;
        this.actions = ['hit', 'miss'];
    }

    serve() {
        console.log(`${this.name} починає гру`);
    }

    hit() {
        console.log(`${this.name} відбиває м'яч!`);
    }

    miss() {
        console.log(`${this.name} пропускає м'яч!`);
    }

    getRandomAction() {
        return this.actions[Math.floor(Math.random() * this.actions.length)];
    }
}

class Scoreboard {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.scores = { [player1.name]: 0, [player2.name]: 0 };
    }

    addPoint(player) {
        this.scores[player.name]++;
    }

    displayScore() {
        console.log(`Рахунок: ${this.player1.name} ${this.scores[this.player1.name]} - ${this.player2.name} ${this.scores[this.player2.name]}`);
    }

    hasWinner() {
        return this.scores[this.player1.name] >= 21 || this.scores[this.player2.name] >= 21;
    }

    getWinner() {
        if (this.scores[this.player1.name] >= 21) return this.player1.name;
        if (this.scores[this.player2.name] >= 21) return this.player2.name;
        return null;
    }
}

class GameEngine {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.scoreboard = new Scoreboard(player1, player2);
    }

    play() {
        let currentPlayer = this.player1;
        let opponent = this.player2;

        currentPlayer.serve();

        while (!this.scoreboard.hasWinner()) {
            const action = currentPlayer.getRandomAction();

            if (action === 'hit') {
                currentPlayer.hit();
                this.scoreboard.addPoint(opponent);
            } else {
                currentPlayer.miss();
                this.scoreboard.addPoint(currentPlayer);
            }

            this.scoreboard.displayScore();

            [currentPlayer, opponent] = [opponent, currentPlayer];
        }

        console.log(`Переможець: ${this.scoreboard.getWinner()}!`);
    }
}

const player1 = new Player('Максим', 'ліва');
const player2 = new Player('Ігорь', 'права');
const game = new GameEngine(player1, player2);

game.play();
needMoreSpace.cons()

function calc01 (first, second){
  let test
  test = first+second
  console.log(test)
  test = first-second
  console.log(test)
  test = first/second
  console.log(test)
  test = first*second
  console.log(test)
}
calc01(0.1, 0,2)
needMoreSpace.cons()

let test

test = 0.1+0.2
console.log(test)
test = 0.1-0.2
console.log(test)
test = 0.1/0.2
console.log(test)
test = 0.1*0.2
console.log(test)

class Animal {
    constructor(type, sound) {
      this.type = type;
      this.sound = sound;
    }
  
    makeSound() {
        console.log(`${this.type} робить звук ${this.sound}`)
    }
  }
  
  const animal = new Animal("собака", "гав-гав");
  animal.makeSound();

  function timer() {
    setInterval(() => {
      console.log("Проходить секунда...");
    }, 1000); 
  }
    timer();

    class Countdown {
        static start(cd) {
          if (typeof cd !== "number" || cd < 0) {
            console.error("Будь ласка, введіть дійсне додатнє число.");
            return;
          }
      
          const minus = setInterval(() => {
            if (cd > 0) {
              console.log(cd);
              cd--;
            } else {
              clearInterval(minus);
              console.log("Відлік завершено!");
            }
          }, 1000);
        }
      }
      
    
      Countdown.start(5);
      Countdown.start(25);