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

// hide label on focus
const inputs = [fullName, email, companyName, title, message];

inputs.forEach(input => {
    const label = input.previousElementSibling;

    input.addEventListener('focus', () => {
        label.classList.add('hidden');
    });

    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            label.classList.remove('hidden');
        }
    });
});

// helper function 
const validateInput = (input, errorElement, min , text) => {
    const value = input.value.trim();

    if (value.length === 0) {
        input.parentElement.classList.add('error');
        errorElement.textContent = "This field can't be empty";
        return false;
    }

     if (value.length < min) {
        input.parentElement.classList.add('error');
        errorElement.textContent = text;
        return false;
    }
 
    errorElement.textContent = '';
    input.parentElement.classList.remove('error');
    return true;
    
}

// email validation
const validateEmail = (input, errorElement) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
   const emailValue = input.value.trim();

   if (emailValue.length === 0) {
        input.parentElement.classList.add('error');
        errorElement.textContent = "This field can't be empty";
        return false;
    }

    if (!pattern.test(emailValue)) {
        input.parentElement.classList.add('error');
        errorElement.textContent = 'Please enter a valid email address.';
        return false;
    }

    errorElement.textContent = "";
    input.parentElement.classList.remove('error');
    return true;
}

// blur event listeners for real-time validation
fullName.addEventListener('blur', () => {
    validateInput(fullName, nameError, 3, 'name must be at least 3 characters long.');
});

companyName.addEventListener('blur', () => {
    validateInput(companyName, companyNameError, 3, 'name must be at least 3 characters long.');
});

title.addEventListener('blur', () => {
    validateInput(title, titleError, 5, 'name must be at least 5 characters long.');
});

message.addEventListener('blur', () => {
    validateInput(message, messageError, 10, 'name must be at least 10 characters long.');
});

email.addEventListener('blur', () => {
    validateEmail(email, emailError);
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameValid = validateInput(fullName, nameError, 3, 'name must be at least 3 characters long.');
    const CompanyNameValid = validateInput(companyName, companyNameError, 3, 'name must be at least 3 characters long.');
    const titleValid = validateInput(title, titleError, 5, 'name must be at least 5 characters long.');
    const messageValid = validateInput(message, messageError, 10, 'name must be at least 10 characters long.');
    const emailValid = validateEmail(email, emailError);

    if (nameValid && CompanyNameValid && titleValid && messageValid && emailValid) {
        form.submit();
    }
});