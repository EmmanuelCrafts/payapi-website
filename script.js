const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu-slide');
});

closeBtn.addEventListener("click", ()=> {
    menu.classList.remove('menu-slide');  
}) 

// Form Validation
const form = document.getElementById('contact-form');
const { fullName, email, companyName, title, message } = form.elements;
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const companyNameError = document.getElementById('companyName-error');
const titleError = document.getElementById('title-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const companyNameValue = companyName.value.trim();
    const titleValue = title.value.trim();
    const messageValue = message.value.trim();

    // name validation
    if (nameValue.length === 0) {
        nameError.textContent = "This field can't be empty";
    } 

      else if(nameValue.length < 3) {
        nameError.textContent = 'name must be at least 3 characters long.';
    } 

      else {
        nameError.textContent = '';
    }
   
    // email validation
    if (emailValue.length === 0) {
        emailError.textContent = "This field can't be empty";
    } 
    
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
    } 
      else {
        emailError.textContent = '';
    }

    // company name validation
    if (companyNameValue.length === 0) {
        companyNameError.textContent = "This field can't be empty";

    } else if(companyNameValue.length < 3) {
        companyNameError.textContent = 'Company name must be at least 3 characters long.';

    } else {    
        companyNameError.textContent = '';
    }

    // title validation
    if (titleValue.length === 0) {
        titleError.textContent = "This field can't be empty";

    } else if(titleValue.length < 5) {
        titleError.textContent = 'Title must be at least 5 characters long.';

    } else {
        titleError.textContent = '';
    }

    // message validation
    if (messageValue.length === 0) {
        messageError.textContent = "This field can't be empty";

    } else if (messageValue.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
    } else {
        messageError.textContent = '';
    }

    // Submit the form if all fields are valid
    if (
        nameError.textContent === '' &&
        emailError.textContent === '' &&
        companyNameError.textContent === '' &&
        titleError.textContent === '' &&
        messageError.textContent === ''
        ) {
        form.submit();
    }
});