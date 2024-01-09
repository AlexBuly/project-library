const container = document.querySelector(".container");
const bookCards = document.querySelector(".bookCards");

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

const addBooktoLibrary = () => {
    const form = document.createElement("form");
    const fieldset = document.createElement("fieldset");
    form.setAttribute("method", "post");
    form.setAttribute("action", "/");
    form.appendChild(fieldset);
    container.appendChild(form);

    const br = document.createElement("br");

    const titleInput = document.createElement("input");
    titleInput.type = "text"
    titleInput.id = "title";
    titleInput.name= "title";
    const tLabel = document.createElement("label");
    tLabel.htmlFor = "title";
    tLabel.textContent = "Title: ";
    fieldset.appendChild(tLabel)
    fieldset.appendChild(titleInput);
    fieldset.appendChild(br);

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.name = "author";
    const aLabel = document.createElement("label");
    aLabel.htmlFor = "author";
    aLabel.textContent = "Author: ";
    fieldset.appendChild(aLabel);
    fieldset.appendChild(authorInput);
    fieldset.appendChild(br.cloneNode());

    const pagesInput = document.createElement("input");
    pagesInput.type = "number";
    pagesInput.id = "pages";
    pagesInput.name = "pages";
    const pLabel = document.createElement("label");
    pLabel.htmlFor = "pages";
    pLabel.textContent = "Pages: ";
    fieldset.appendChild(pLabel);
    fieldset.appendChild(pagesInput);
    fieldset.appendChild(br.cloneNode());

    const readInput = document.createElement("input");
    readInput.type = "checkbox";
    readInput.id = "read";
    readInput.name = "read";
    //readInput.value = "read";
    const rLabel = document.createElement("label");
    rLabel.htmlFor = "read";
    rLabel.textContent = "Read: ";
    fieldset.appendChild(rLabel);
    fieldset.appendChild(readInput);
    fieldset.appendChild(br.cloneNode());

    const post = document.createElement("button");
    post.type = "sumbit";
    post.textContent = "Add book";
    fieldset.appendChild(post);

    post.addEventListener("click", (event) => {
        event.preventDefault();
        if (readInput.checked === false) {
            readInput.value = "not read"
        } else if (readInput.checked === true) {
            readInput.value = "read";
        }
        myLibrary.push(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        const addBook  = new Book(myLibrary[0], myLibrary[1], myLibrary[2], myLibrary[3]);
        myLibrary.length = 0;
        form.remove();

        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = addBook.info();
        bookCards.appendChild(card);
    }); 
}
