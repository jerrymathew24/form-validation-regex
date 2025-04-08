let formData = document.querySelector('.form')
let submittButton = document.querySelector('.button')
let errorMessages = document.querySelectorAll('.error-message')
let emptyFieldMessage = document.querySelectorAll('.empty-field')
let firstName,lastName,email,password;
let field;

let nameRegex = /^[a-zA-Z]+$/; // Only alphabets allowed
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex 
let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, at least one letter and one number

for(let errorMessage of errorMessages){
    errorMessage.classList.add('d-none')
}

for(let element of emptyFieldMessage){
    element.classList.add('d-none')
}

formData.addEventListener('keyup', (event) => {
    event.preventDefault()
    field  =event.target.dataset.key 
    //so here we are getting the data-key from the input field
    //so here in the switch if we have a field with data-key="firstName" it will be equal to firstName
    switch(field){
        case 'firstName':
            firstName = event.target.value
            break;
        case 'lastName':
            lastName = event.target.value
            break;
        case 'email':
            email = event.target.value
            break;
        case 'password':
            password = event.target.value
            break;
        default:
            firstName,lastName,email,password = ''
            break;
    }
})

submittButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(firstName,lastName,email,password);
    
    if(firstName){
        if(!nameRegex.test(firstName)){
            console.log('Name must contain only alphabets');
        }else{
            console.log('Name is valid');
        }
    }else{
        console.log('Please enter your first name');
        
    }

    if(lastName){
        if(!nameRegex.test(lastName)){
            console.log('Last name must contain only alphabets');
        }else{
            console.log('Last name is valid');
        }
    }else{
        console.log('Please enter your last name');
    }

    if(email){
        if(!emailRegex.test(email)){
            console.log('Invalid email address');
        }else{
            console.log('Email is valid');
        }
    }else{
        console.log('Please fill the email field');
    }


    if(password){
        if(!passwordRegex.test(password)){
            console.log('Password must be at least 8 characters long and contain at least one letter and one number');
        }else{
            console.log('Password is valid');
        }
    }else{
        console.log('Please fill the password field');
    }
})