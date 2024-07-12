function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Retrieve user data from local storage
  var userData = JSON.parse(localStorage.getItem('userData'));

  if (!userData) {
    alert('User not registered. Please register first.');
    return;
  }

  if (!userData.verified) {
    alert('Email not verified. Please check your email for verification.');
    return;
  }

  if (userData.email === email && userData.password === password) {
    // Successful login
    alert('Login successful!');
    window.location.href = 'maps.html';
  } else {
    // Invalid credentials
    alert('Invalid email or password. Please try again.');
  }
}

function verifyEmail() {
  var verificationToken = prompt('Please enter your verification code (check your email):');

  // Retrieve user data from local storage
  var userData = JSON.parse(localStorage.getItem('userData'));

  if (userData && userData.verificationToken === verificationToken) {
    // Mark email as verified
    userData.verified = true;
    localStorage.setItem('userData', JSON.stringify(userData));

    alert('Email verified!');
  } else {
    alert('Invalid verification code. Please check and try again.');
  }
}
