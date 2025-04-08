let formData = document.querySelector('.form')
let submittButton = document.querySelector('.button')
let errorMessages = document.querySelectorAll('.error-message')
let firstName,lastName,email,password;
let field;

for(let errorMessage of errorMessages){
    errorMessage.classList.add('d-none')
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
    
})