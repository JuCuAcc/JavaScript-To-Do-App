// Write your code here

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