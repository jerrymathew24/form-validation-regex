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
            errorMessages[0].classList.remove('d-none')
        }else{
            errorMessages[0].classList.add('d-none')
        }
    }else{
        console.log('Please fill the firstName field');
    }

    if(lastName){
        if(!nameRegex.test(lastName)){
            errorMessages[1].classList.remove('d-none')
        }else{
            errorMessages[1].classList.add('d-none')
        }
    }else{
        console.log('Please fill the lastName field');
    }

    if(email){
        if(!emailRegex.test(email)){
            errorMessages[2].classList.remove('d-none')
        }else{
            errorMessages[2].classList.add('d-none')
        }
    }else{
        console.log('Please fill the email field');
    }


    if(password){
        if(!passwordRegex.test(password)){
            errorMessages[3].classList.remove('d-none')
        }else{
            errorMessages[3].classList.add('d-none')
        }
    }else{
        console.log('Please fill the password field');
        
    }
})