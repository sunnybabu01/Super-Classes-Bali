document.addEventListener('DOMContentLoaded', () => {
    // Select buttons
    const signupButton = document.querySelector('.signup');
    const loginButton = document.querySelector('.login');
  
    // Select modals
    const signupModal = document.getElementById('signupModal');
    const loginModal = document.getElementById('loginModal');
  
    // Select close buttons
    const closeButtons = document.querySelectorAll('.close');
    
    // Open Signup Modal
    signupButton.addEventListener('click', () => {
      signupModal.style.display = 'flex';
    });
  
    // Open Login Modal
    loginButton.addEventListener('click', () => {
      loginModal.style.display = 'flex';
    });
  
    // Close modals
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        signupModal.style.display = 'none';
        loginModal.style.display = 'none';
      });
    });
  
    // Signup form submission
    document.getElementById('signupForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('signupUsername').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
  
      // Send to backend (e.g., using fetch)
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })
      .then(response => response.json())
      .then(data => {
        alert('Signup Successful');
        signupModal.style.display = 'none'; // Close modal
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
    });
  
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Send to backend (e.g., using fetch)
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then(response => response.json())
      .then(data => {
        alert('Login Successful');
        loginModal.style.display = 'none'; // Close modal
      })
      .catch(error => {
        alert('Error: ' + error.message);
      });
    });
  });
  