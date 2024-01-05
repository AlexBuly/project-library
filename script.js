const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

const myLibrary = ["The Hobbitt","J.J.R. Tolkien", "295", "not read yet"]; // Book items 

function Book(title, author, pages, read) {
    // author, title, pages, read
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${this.title}, ${this.author}, ${this.pages}, ${this.read}`;
    }
}

const theHobbit = new Book(myLibrary[0], myLibrary[1], myLibrary[2], myLibrary[3]);
card1.textContent = theHobbit.info();

const harryPotter = new Book("Harry Potter and the Goblet of Fire ", "J.K. Rowling", "636", "read");
card2.textContent = harryPotter.info();

const hungerGames = new Book("The Hunger Games", "Suzanne Collins", "374", "read");
card3.textContent = hungerGames.info();

const forestGump = new Book("Forest Gump", "Winston Groom", "228", "read");
card4.textContent = forestGump.info();

function addBooktoLibrary() {
    /* A button is used to add a new book to the library. 
    Form input includes author, title, pages and read */
}
// loop through array
// contents of form or array returned from the constructor
// delete book 