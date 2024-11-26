class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.availability = true;
  }

  borrowBook() {
    if (this.availability) {
      this.availability = false;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`Sorry, "${this.title}" is already borrowed.`);
    }
  }

  returnBook() {
    if (!this.availability) {
      this.availability = true;
      console.log(`You returned "${this.title}".`);
    } else {
      console.log(`"${this.title}" was not borrowed.`);
    }
  }

  displayInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Available: ${
        this.availability ? "Yes" : "No"
      }`
    );
  }
}
  
class Library {
  constructor() {
    this.books = []; 
  }

  addBook(title, author, genre) {
    const newBook = new Book(title, author, genre);
    this.books.push(newBook);
    console.log(`"${title}" added to the library.`);
  }

  searchBook(title) {
    const book = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
      book.displayInfo();
    } else {
      console.log(`"${title}" not found in the library.`);
    }
  }

  displayBooks() {
    console.log("Available Books in the Library:");
    this.books.forEach((book) => {
      if (book.availability) {
        console.log(`- ${book.title}`);
      }
    });
  }
}
  
const myLibrary = new Library();


myLibrary.addBook("Throne of the glass", "Sarah J Maas", "Fiction");
myLibrary.addBook("Noli Me Tangere", "Jose Rizal", "Fiction");
myLibrary.addBook("The God of the Woods", "Liz Moore", "2024");
myLibrary.searchBook("Throne of the glass");
myLibrary.books[1].borrowBook();
myLibrary.searchBook("2024");
myLibrary.books[1].borrowBook();
myLibrary.books[1].returnBook();
myLibrary.displayBooks();
