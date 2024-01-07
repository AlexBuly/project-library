const container = document.querySelector(".container")
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");

const myLibrary = []; // Book items

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
card1.textContent = theHobbit.info()

const harryPotter = new Book("Harry Potter and the Goblet of Fire ", "J.K. Rowling", "636", "read");
card2.textContent = harryPotter.info();

const hungerGames = new Book("The Hunger Games", "Suzanne Collins", "374", "read");
card3.textContent = hungerGames.info();

const forestGump = new Book("Forest Gump", "Winston Groom", "228", "read");
card4.textContent = forestGump.info();

const form = document.createElement("form");
const fieldset = document.createElement("fieldset");
form.setAttribute("method", "post");
form.setAttribute("action", "/");
form.appendChild(fieldset);
container.appendChild(form);

const br = document.createElement("br");

const title = document.createElement("input");
title.type = "text"
title.id = "title";
title.name= "title";
const tLabel = document.createElement("label");
tLabel.htmlFor = "title";
tLabel.textContent = "Title: ";
fieldset.appendChild(tLabel)
fieldset.appendChild(title);
fieldset.appendChild(br);

const author = document.createElement("input");
author.type = "text";
author.id = "author";
author.name = "author";
const aLabel = document.createElement("label");
aLabel.htmlFor = "author";
aLabel.textContent = "Author: ";
fieldset.appendChild(aLabel);
fieldset.appendChild(author);
fieldset.appendChild(br.cloneNode());

const pages = document.createElement("input");
pages.type = "number";
pages.id = "pages";
pages.name = "pages";
const pLabel = document.createElement("label");
pLabel.htmlFor = "pages";
pLabel.textContent = "Pages: ";
fieldset.appendChild(pLabel);
fieldset.appendChild(pages);
fieldset.appendChild(br.cloneNode());

const read = document.createElement("input");
read.type = "text";
read.id = "read";
read.name = "read";
const rLabel = document.createElement("label");
rLabel.htmlFor = "read";
rLabel.textContent = "Read: ";
fieldset.appendChild(rLabel);
fieldset.appendChild(read);
fieldset.appendChild(br.cloneNode());

const post = document.createElement("button");
post.type = "sumbit";
post.textContent = "Add book";
fieldset.appendChild(post);

post.addEventListener("click", (event) => {
    document.querySelectorAll("input").forEach(input => myLibrary.push(input.value));
    event.preventDefault();

});


