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


// error message elements
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
        fullName.parentElement.classList.add('error');
    } 

      else if(nameValue.length < 3) {
        nameError.textContent = 'name must be at least 3 characters long.';
        fullName.parentElement.classList.add('error');
    } 

      else {
        nameError.textContent = '';
        fullName.parentElement.classList.remove('error');
    }
   
    // email validation
    if (emailValue.length === 0) {
        emailError.textContent = "This field can't be empty";
        email.parentElement.classList.add('error');
    } 
    
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        email.parentElement.classList.add('error');
    } 
      else {
        emailError.textContent = '';
        email.parentElement.classList.remove('error');
    }

    // company name validation
    if (companyNameValue.length === 0) {
        companyNameError.textContent = "This field can't be empty";
        companyName.parentElement.classList.add('error');

    } else if(companyNameValue.length < 3) {
        companyNameError.textContent = 'Company name must be at least 3 characters long.';
        companyName.parentElement.classList.add('error');
    } else {    
        companyNameError.textContent = '';
        companyName.parentElement.classList.remove('error');
    }

    // title validation
    if (titleValue.length === 0) {
        titleError.textContent = "This field can't be empty";
        title.parentElement.classList.add('error');
    } else if(titleValue.length < 5) {
        titleError.textContent = 'Title must be at least 5 characters long.';
        title.parentElement.classList.add('error');
    } else {
        titleError.textContent = '';
        title.parentElement.classList.remove('error');
    }

    // message validation
    if (messageValue.length === 0) {
        messageError.textContent = "This field can't be empty";
        message.parentElement.classList.add('error');   
    } else if (messageValue.length < 10) {
        messageError.textContent = 'Message must be at least 10 characters long.';
        message.parentElement.classList.add('error');
    } else {
        messageError.textContent = '';
        message.parentElement.classList.remove('error');
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