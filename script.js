// EXERCISE 1: Selecting Elements
// TODO: Select the element with the ID 'mainTitle' and log it to the console.

let mainTitle = document.getElementById('mainTitle');

console.log(mainTitle);

// Exercise 2: Changing HTML Content
// TODO: Select all paragraph elements and change the content of the second paragraph to "This paragraph has been changed."
let paragraphsList = document.getElementsByTagName('p');
paragraphsList[1].textContent = "This paragraph has been changed.";

// Exercise 3: Changing CSS Styles
// TODO: Select the first list item and change its text color to red
let firstListItem = document.querySelector('li');

if (firstListItem) {
    firstListItem.style.color = 'red';
}

// Exercise 4: Adding/Removing Classes
// TODO: Add the "highlight" class to the first paragraph
// TODO: Remove the "highlight" class from the first paragraph after 3 seconds
let firstParagraph = document.querySelector('p');

firstParagraph.classList.add('highlight');

setTimeout(() => {
    firstParagraph.classList.remove('highlight');
}, 3000);

// Exercise 5: Creating and Appending Elements
// TODO: Create a new list item with the text "Item 4" and append it to the existing list
let list = document.querySelector('ul');

let newItem = document.createElement('li');

newItem.textContent = 'Item 4';

list.appendChild(newItem);

// Exercise 6: Removing Elements
// TODO: Remove the last list item from the unordered list

list.removeChild(list.lastElementChild);

// Exercise 7: Handling Events
// TODO: Add a click event listener to the button that displays an alert saying "Button clicked!"

let formButton = document.querySelector('button');

formButton.addEventListener('click', () => {
    alert('Button clicked!');
});

// Exercise 8: Working with Input
// TODO: Add an input event listener to the input field that displays the current input value in the result div
let inputField = document.querySelector('input');
let resultDiv = document.querySelector('#result');

inputField.addEventListener('input', () => {
    resultDiv.textContent = inputField.value;
});
// Exercise 9: Toggling Visibility
// TODO: Add a click event listener to the button that toggles the visibility of the content div

const Button = document.querySelector('button');
const contentDiv = document.querySelector('#content');

button.addEventListener('click', () => {
    contentDiv.classList.toggle('hidden');
});

// Exercise 10: Modifying Attributes
// TODO: Select the input field and change its placeholder text to "Enter your name"
const InputField = document.querySelector('input');

inputField.placeholder = 'Enter your name';
