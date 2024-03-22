document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const signupContainer = document.getElementById('signup-container');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    
    signupLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginContainer.style.display = 'none';
      signupContainer.style.display = 'block';
    });
  
    loginLink.addEventListener('click', function(event) {
      event.preventDefault();
      loginContainer.style.display = 'block';
      signupContainer.style.display = 'none';
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // Perform login validation
      if (email && password) {
        // Mock login success
        alert('Login successful!');
      } else {
        alert('Please enter valid email and password.');
      }
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;
      const name = document.getElementById('signup-name').value;
      // Perform signup validation
      if (email && password && name) {
        // Mock signup success
        alert('Sign up successful! Welcome, ' + name + '!');
      } else {
        alert('Please fill in all the fields.');
      }
    });
  });
  