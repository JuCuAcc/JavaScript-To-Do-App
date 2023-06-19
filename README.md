
# Javascript To Do App

## Initial UI
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (515).png>)

## Hover on task show remove button
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (516).png>)

## If input field is empty then error effect is shown
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (517).png>)

## Inserting task in the input field
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (518).png>)

## Task Added
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (519).png>)

## Click on task make it done
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (520).png>)

## Done task are blured and crossed
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (521).png>)

## Remove button remove the task from the list.
![To Do UI](<javascript-project-to-do-list/Screenshots/Screenshot (522).png>)

### HTML

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Simple To Do List - Practical JavaScript</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="todolist">
        <div class="head">
          <h3>To Do List</h3>
          <form class="todo">
            <input type="text" autocomplete="off" name="task" placeholder="What do you want to do?">
            <button type="submit" name="submit">+</button>
          </form>
        </div>
        <div class="body">
          <ul>
            <li><span class="remove">X</span>7 minutes exercise</li>
            <li><span class="remove">X</span>Buy some chocolates</li>
            <li class="done"><span class="remove">X</span>Make a Project</li>
            <li><span class="remove">X</span>Buy a Jacket</li>
            <li class="done"><span class="remove">X</span>Math Homework</li>
            <li><span class="remove">X</span>Start React Native</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <ul>
          <li>জাভাস্ক্রিপ্ট প্র্যাকটিস প্রজেক্ট</li>
          <li><a href="https://github.com/JuCuAcc/">মোঃ জসীম উদ্দিন</a></li>
        </ul>
      </div>
    </div>
    <script src="script.js" charset="utf-8"></script>
  </body>
</html>

```
### CSS

```CSS
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,900');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  margin: 0;
  padding: 0;
  line-height: 1;
}

body {
  min-height: 100vh;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: center;
  display: flex;
  color: #333;
  align-items: center;
  background-image: url(cover.jpg);
  background-color: #f2f2f2;
  background-size: cover;
  background-position: center;
}

ul {
  list-style: none;
}

body>div {
  flex: 1;
}

.todolist {
  background: #fff;
  padding: 30px 15px;
  width: 320px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 2px 2px 15px -5px rgba(0, 0, 0, 0.5);
}

.head h3 {
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 25px;
  color: rgba(0, 0, 0, 0.5);
}

.todo {
  display: flex;
  border-radius: 40px;
  margin-bottom: 25px;
  padding: 8px;
  box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.5);
}

.todo.error {
  box-shadow: 0 0 30px -5px #F44336;
}

.todo>* {
  flex: 5;
}

.todo input {
  padding: 10px 15px;
  font-family: 'Roboto', sans-serif;
  border: none;
  font-size: 16px;
}

.todo input:focus {
  outline: none;
}

.todo button[name=submit] {
  flex: 1;
  background: #4CAF50;
  font-size: 38px;
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 40px;
}

.remove {
  visibility: hidden;
  position: absolute;
  left: 0;
  display: inline-block;
  background: #F44336;
  color: #fff;
  font-size: 13px;
  padding: 2px 5px;
  border-radius: 34px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.2s all;
}

.body ul {
  padding: 0 20px;
}

.body ul li {
  position: relative;
  font-size: 18px;
  padding: 10px 0;
  text-align: left;
  transition: all 0.5s;
}

.body ul li:hover {
  padding-left: 30px;
}

.body ul li:hover .remove {
  visibility: visible;
}

.body ul li.done {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}

.copyright {
  margin-top: 45px;
}

.copyright ul {
  margin: 0;
  list-style: none;
  padding: 0;
}

.copyright ul li {
  display: inline-block;
  margin: 0 5px;
  font-weight: 900;
  font-size: 13px;
}

.copyright ul li a {
  text-decoration: none;
  padding: 3px 8px;
  border-radius: 4px;
  background: #333;
  color: #fff;
}

```

### Javascript


```Javascript

const selectItem = document.querySelector('.body ul');
const selectForm = document.querySelector('.todo');

selectItem.addEventListener('click', (e) => {
    if(e.target.tagName==='LI'){                    // Carefull about capital 'LI'
        if(e.target.classList.contains('done')){
            e.target.classList.remove('done');
        } else{
            e.target.classList.add('done');
        }
    }

    // To check remove button is clicked or not in the list
    if(e.target.classList.contains('remove')){
        e.target.parentNode.remove();
    }
});

// To handle Form submission 
selectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = e.target.task.value;

    if(validateInput(input, e.target.task)){
        selectItem.insertAdjacentElement('afterbegin', newItem(e.target.task.value));
        e.target.task.value = '';
    }
});

// Defining validateInput Function
const validateInput = (input, element) =>{
    if(input){
        element.parentNode.classList.remove('error');
        return true; 
    } else{
        element.parentNode.classList.add('error');
        return false; 
    }
}

// Defining newItem Function
const newItem = (content) => {
    const createAItem = document.createElement('li');
    createAItem.textContent = content;
    createAItem.insertAdjacentElement('afterbegin', removeButton());
    return createAItem;
}

// Defining removeButton Function

const removeButton = () => {
    const createRemoveBtn = document.createElement('span');
    createRemoveBtn.classList.add('remove');
    createRemoveBtn.textContent = 'X';
    return createRemoveBtn;
}
```
---
Let's break down the code into sections and explain its functionality:

# HTML Section:
*	The code starts with the HTML document declaration (\<!DOCTYPE html>).
*	The \<html> tag represents the root of an HTML document.
*	The \<head> section contains metadata about the document, such as the character encoding, title, and stylesheet  reference.
*	The \<body> section contains the visible content of the document.

  ## Within the \<body> section:
*	The content is organized using various \<div> elements with specific class names for styling purposes.
*	The to-do list items are represented as \<li> (list item) elements within an unordered list (\<ul\>).
*	Each to-do list item consists of a remove button (represented by \<span class="remove">X\</span>) and a description text.

# JavaScript Section:

*	The JavaScript code starts with the line // Write your code here.
*	It selects the HTML elements using the document.querySelector() method and assigns them to variables for further manipulation.
*	An event listener is added to the selectItem element (the \<ul\> element representing the to-do list). It listens for a click event on  the list items (\<li\> elements) and performs actions based on the clicked item.
*	If a list item is clicked (identified by checking if the clicked element's tag name is 'LI'), it toggles the 'done' class on the item.   This class is used for styling completed items.
*	If the remove button (\<span class="remove">X\</span>) within a list item is clicked, it removes the corresponding list item from the DOM.
*	Another event listener is added to the selectForm element (the form element for adding new to-do items). It listens for a form         
  submission event and performs actions based on the submitted data.
*	It prevents the default form submission behavior to avoid page refresh.
*	It retrieves the value entered in the input field (e.target.task.value) and assigns it to the input variable.
*	It calls the validateInput function to check if the input is not empty.
*	If the input is valid, it creates a new list item using the newItem function, inserts it at the beginning of the list 
  (selectItem.insertAdjacentElement('afterbegin', ...)) and clears the input field.

# Additional CSS Section:

*	The code includes CSS styles for the various elements used in the HTML document.
*	The styles define the appearance, layout, and behavior of the to-do list and its components.
  Overall, the code creates a basic to-do list application with the ability to add new items, mark items as completed, and remove items 
  from the list. The JavaScript code handles the interactivity and behavior of the application, while the CSS styles define the visual 
  presentation.

