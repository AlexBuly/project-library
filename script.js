const container = document.querySelector(".container");
const bookCards = document.querySelector(".bookCards");
const newButon = document.querySelector(".new");
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
    this.toggle = () => {
        return `${this.title}, ${this.author}, ${this.pages}`;
    }
}

const addBooktoLibrary = () => {
    bookCards.style.height = "30%";
    bookCards.style.visibility = "hidden"
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

    newButon.style.visibility = "hidden";

    post.addEventListener("click", (event) => {
        event.preventDefault();
        if (readInput.checked === false) {
            readInput.value = "not read"
        } else if (readInput.checked === true) {
            readInput.value = "read";
        }
        
        myLibrary.push(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        const addBook  = new Book(myLibrary[myLibrary.length - 4], myLibrary[myLibrary.length - 3], myLibrary[myLibrary.length - 2], myLibrary[myLibrary.length - 1]);
        if (titleInput.value === "") {
            const titleError = document.createElement("div");
            titleError.classList.add("titleError");
            titleError.textContent = "Title cannot be empty";
            titleError.style.color = "white";
            titleError.style.backgroundColor = "red";
            titleInput.insertAdjacentElement("afterend", titleError);
            
            newButon.style.visibility = "hidden";
            } else if (authorInput.value === "") {
                const authorError = document.createElement("div")
                authorError.classList.add("authorError");
                authorError.textContent = "Author cannot be empty";
                authorError.style.color = "white";
                authorError.style.backgroundColor = "red";
                authorInput.insertAdjacentElement("afterend", authorError);
            } else if (pagesInput.value === "") {
                const pageError = document.createElement("div");
                pageError.classList.add("pageError");
                pageError.textContent = "Pages cannot be emtpy";
                pageError.style.color = "white";
                pageError.style.backgroundColor = "red";
                pagesInput.insertAdjacentElement("afterend", pageError);
            } else {
                form.remove();
                bookCards.style.visibility = "visible";

                const card = document.createElement("div");
                card.classList.add("card");
                card.style.display = "block";
                card.textContent = addBook.info();
                card.appendChild(br.cloneNode());
                bookCards.appendChild(card);
                bookCards.style.height = "75%";

                const toggleOn = document.createElement("button");
                toggleOn.classList.add("toggleOn");
                toggleOn.textContent = "Mark read"
    
                const toggleOff = document.createElement("button");
                toggleOff.classList.add("toggleOff");
                toggleOff.textContent = "Mark unread";

                const del = document.createElement("button");
                del.classList.add("delCard");
                del.textContent = "Delete";
                card.appendChild(del);

                del.addEventListener("click", () => {
                    card.remove();
                });

                toggleOff.addEventListener("click", () => {
                    card.textContent = `${addBook.toggle()} , not read`;
                    card.appendChild(br.cloneNode());
                    card.appendChild(del);
                    card.appendChild(toggleOn);
                });


                toggleOn.addEventListener("click", () => {
                    card.textContent = `${addBook.toggle()} , read`;
                    card.appendChild(br.cloneNode());
                    card.appendChild(del);
                    card.appendChild(toggleOff);
                });

                if (readInput.checked === false) {
                    card.appendChild(toggleOn);
                } else if (readInput.checked === true) {
                    card.appendChild(toggleOff);
                }
                newButon.style.visibility = "visible";
                }
            });
        }

            
        /*form.remove();
        bookCards.style.visibility = "visible";

        const card = document.createElement("div");
        card.classList.add("card");
        card.style.display = "block";
        card.textContent = addBook.info();
        card.appendChild(br.cloneNode());
        bookCards.appendChild(card);
        bookCards.style.height = "75%";*/
        
        
//}
