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



  