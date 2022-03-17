const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

//Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText= message;

}

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}

//Check email is valid
function checkEmail (input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regexEmail.test(input.value.trim())) {
      showSuccess(input);
  }
  else { 
      showError(input, 'Email is not a valid email');
  }
}

//Check required fields
function checkRequired(inputArr) { 
    let isRequired = false;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, 'Khong duoc de trong');
            isRequired = true;
        } else {
            showSuccess(input)
            
        }
        return isRequired
    })
}

//Check input length
function checkLength (input, min, max) {
    if (input.value.length < min) {
        showError(input, `Phai co it nhat ${min} ki tu`)
    }
    else if (input.value.length > max) {
        showError(input, `Khong duoc qua ${max} ki tu`)
    }
    else {
        showSuccess(input)
    }
    
}

//Check Password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value.length !== input2.value.length) {
        showError(input2, 'Password does not match')
    }
}



form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!checkRequired([username, email, password, passwordConfirmation])) {
        checkLength(username, 3, 15)
        checkLength(email, 3, 15)
        checkEmail(email)
        checkPasswordsMatch(password,passwordConfirmation)
    }

})