let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");
let fnFlag, lnFlag, eFlag, pFlag;
let firstname, lastname, email, password;
let fnTarget, lnTarget, eTarget, pTarget;
let field;

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let message of emptyFieldMessage) {
  message.classList.add("d-none");
}

formData.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch (field) {
    case "firstName":
      firstname = e.target.value;
      fnTarget = e.target;
      break;
    case "lastName":
      lastname = e.target.value;
      lnTarget = e.target;
      break;
    case "email":
      email = e.target.value;
      eTarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pTarget = e.target;
      break;
    default:
      firstname = lastname = email = password = "";
      break;
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(fnTarget, lnTarget, eTarget, pTarget);
  if (firstname) {
    emptyFieldMessage[0].classList.add("d-none");
    if (!nameRegex.test(firstname)) {
      fnTarget.classList.add("error");
      errorMessages[0].classList.remove("d-none");
      fnFlag = false;
    } else {
      errorMessages[0].classList.add("d-none");
      fnTarget.classList.remove("error");
      fnFlag = true;
    }
  } else {
    //Show empty field message
    emptyFieldMessage[0].classList.remove("d-none");
  }
  if (lastname) {
    emptyFieldMessage[1].classList.add("d-none");
    if (!nameRegex.test(lastname)) {
      lnTarget.classList.add("error");
      errorMessages[1].classList.remove("d-none");
      lnFlag = false;
    } else {
      errorMessages[1].classList.add("d-none");
      lnTarget.classList.remove("error");
      lnFlag = true;
    }
  } else {
    emptyFieldMessage[1].classList.remove("d-none");
  }
  if (email) {
    emptyFieldMessage[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      eTarget.classList.add("error");
      errorMessages[2].classList.remove("d-none");
      eFlag = false;
    } else {
      errorMessages[2].classList.add("d-none");
      eTarget.classList.remove("error");
      eFlag = true;
    }
  } else {
    emptyFieldMessage[2].classList.remove("d-none");
  }
  if (password) {
    emptyFieldMessage[3].classList.add("d-none");
    if (!pwdRegex.test(password)) {
      pTarget.classList.add("error");
      errorMessages[3].classList.remove("d-none");
      pFlag = false;
    } else {
      errorMessages[3].classList.add("d-none");
      pTarget.classList.remove("error");
      pFlag = true;
    }
  } else {
    emptyFieldMessage[3].classList.remove("d-none");
  }
  if (fnFlag && lnFlag && eFlag && pFlag) {
    fnTarget.value = lnTarget.value = eTarget.value = pTarget.value = "";
    window.location.href = "success.html";
  }
});

showPasswordBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (pTarget.getAttribute("type") === "text") {
    pTarget.setAttribute("type", "password");
  } else {
    pTarget.setAttribute("type", "text");
  }
});

//explaination of the code
// 1. The code starts by selecting the form, submit button, error messages, and empty field messages from the DOM.  

// 2. It initializes flags for each field (first name, last name, email, password) to track their validation status.

// 3. It defines regular expressions for validating names, email, and password formats.

// 4. It adds a keyup event listener to the form to capture user input and store it in respective variables.

// 5. It adds a click event listener to the submit button to validate the input fields when clicked.


// 6. Inside the click event, it checks if each field is filled and validates it against the defined regex patterns.

//    - If a field is empty, it shows the corresponding empty field message.
//    - If a field is filled but invalid, it adds an error class to the input and shows the error message.  

//    - If a field is valid, it removes the error class and hides the error message.
// 7. If all fields are valid, it clears the input fields and redirects to a success page.

// 8. It also adds a click event listener to the show password button to toggle the visibility of the password input field.
// 9. The code uses classes to show/hide error messages and empty field messages, and it uses the "error" class to style invalid inputs.
// 10. The code is designed to provide real-time feedback to the user as they fill out the form, ensuring a better user experience.
// 11. The regex patterns ensure that the input meets specific criteria, such as containing at least one digit, one special character, and a mix of uppercase and lowercase letters for the password.
// 12. The code is structured to be easily maintainable and extendable for future enhancements or additional validation rules.
// 13. The use of flags (fnFlag, lnFlag, eFlag, pFlag) helps in determining if all fields are valid before proceeding with the form submission.
// 14. The code is designed to be user-friendly, providing clear error messages and visual cues for invalid inputs, making it easier for users to correct their mistakes.
// 15. The use of data attributes (data-key) in the HTML allows for easy identification of input fields in the JavaScript code, making it more readable and maintainable.
// 16. The code is structured to be easily adaptable for different form structures or validation rules, allowing for flexibility in implementation.