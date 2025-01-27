function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Дані завантажено!");
      }, 3000); 
    });
  }
  
  fetchData().then((message) => {
    console.log(message); 
  });