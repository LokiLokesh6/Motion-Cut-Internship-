const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Reset previous error messages
  const errorMessages = document.querySelectorAll('.error-msg');
  errorMessages.forEach(error => error.textContent = '');

  let isValid = true;

  if (username === '') {
    document.getElementById('usernameError').textContent = 'Please enter a username.';
    isValid = false;
  }

  if (email === '') {
    document.getElementById('emailError').textContent = 'Please enter an email.';
    isValid = false;
  } else if (!validateEmail(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    isValid = false;
  }

  if (password === '') {
    document.getElementById('passwordError').textContent = 'Please enter a password.';
    isValid = false;
  }

  if (confirmPassword === '' || confirmPassword !== password) {
    document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    isValid = false;
  }

  if (isValid) {
    // Redirect to confirmation page
    window.location.href = form.getAttribute('action');
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}