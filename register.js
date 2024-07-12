function register() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;

  // Check if the email is already registered
  var existingUserData = localStorage.getItem('userData');
  if (existingUserData) {
    existingUserData = JSON.parse(existingUserData);
    if (existingUserData.email === email) {
      alert("This email is already registered. Please use a different email.");
      return;
    }
  }

  if (password !== confirmPassword) {
    alert("Passwords don't match. Please try again.");
    return;
  }

  // Generate verification token (for simulation)
  var verificationToken = generateToken();

  // Save user data and verification token to local storage
  var userData = { email: email, password: password, verified: false, verificationToken: verificationToken };
  localStorage.setItem('userData', JSON.stringify(userData));

  // Simulate sending verification email (for demonstration)
  simulateEmailVerification(email, verificationToken);

  alert('Registration successful! Check your email for verification.');
  window.location.href = 'index.html'; // Redirect to login page after registration
}

function generateToken() {
  // Generate a random token (for simulation)
  return Math.random().toString(36).substr(2, 6); // Adjust length of token as needed
}

function simulateEmailVerification(email, verificationToken) {
  // Simulate sending email (for demonstration)
  console.log(`Verification email sent to ${email}. Token: ${verificationToken}`);
}
