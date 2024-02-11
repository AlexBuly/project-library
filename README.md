# project-library

This is Project: Library. This project creates a library app using a object constructors. The user adds a book to the libray by clicking a button and then inputing book author, title, number of pages, and whether or not the book has been read. Books can also be removed from the library. 

<b>The Constructor</b>
The first step in this project was creating a constructer function to initialize objects. A function called Book passes the 4 arguments needed and a method is created to return these values.

<b>Book Data</b>
In order for the user to add a book to the library, a form is created. To prevent the form from submitting the data, event.preventDefault is used turn off the submit button's default behavior. After the form is submitted, the values are pushed into an array and the arrat items are passed into the Book function using the keyword new to create a new instance of an object. 

To prevent the issue of forms being repeated before a new book is added, the button is hidden when the form is active by changing its visibility to hidden. After the book is submitted and the form is removed, the button is changed to visible again. 

If any field is empty, an error message will occur and will prevent the book from being submitted.

<b>Book Buttons</b>
Within the book cards, there are 2 button: a button to toggle the book's read status and a delete button. The toggle button switches the read instance between read and not read. This is done by creating a new method called toggle in the constructor function that is identical to the first execpt that it excludes the read instance. The value returned for the read parameter is read using a function called toggleOn and not read using a function called toggleOff. 

Finally the delete button removes a card when clicked. 

<b>Styling</b>
The styling is not super detailed currently. I've been super busy lately and I wanted to just move on from this project. Grid is used to properly align items in the form. To handle responsiveness, flex-wrap is applied to the bookCards class so the cards do not overflow the screen. 