//Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Simulate a delay of 3 seconds before hiding the loader
  setTimeout(() => {
    loader.classList.add("loader--hidden");
  }, 800); // Adjust the time in milliseconds (3000 ms = 3 seconds)

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});


//For the LOGIN Page
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



















//For the actual Login Page

// Default credentials
let defaultUsername = 'admin';
let defaultPassword = '1234';

// Function to check if the user is logged in (simulated logic)
function isLoggedIn() {
    // Replace this with your actual logic to check if the user is logged in
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Function to update login/logout button text and behavior
function updateLoginLogoutButton() {
    const loginLogoutButton = document.getElementById('loginLogoutButton');
    const loginLink = '<a class="nav-link" href="./login.html" style="color: #006dc5;"><i class="ri-user-fill"></i>Login</a>';
    const logoutLink = '<a class="nav-link" href="#" style="color: #006dc5;" onclick="logout()"><i class="ri-user-fill"></i>Logout</a>';

    if (isLoggedIn()) {
        loginLogoutButton.innerHTML = logoutLink;
    } else {
        loginLogoutButton.innerHTML = loginLink;
    }
}

// Function for login action
document.querySelector('.sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.querySelector('.sign-in-form input[type="text"]').value;
    const password = document.querySelector('.sign-in-form input[type="password"]').value;
    let message = document.querySelector('.sign-in-form .message');

    // If there's already a message element, remove it
    if (message) {
        message.remove();
    }

    // Create a new message element
    message = document.createElement('div');
    message.classList.add('message');

    // Retrieve user-entered credentials from localStorage or use defaults
    const storedUsername = localStorage.getItem('username') || defaultUsername;
    const storedPassword = localStorage.getItem('password') || defaultPassword;

    if (username === storedUsername && password === storedPassword) {
        // Set isLoggedIn to true in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to the home page
        window.location.href = 'index.html';
    } else {
        // Show an error message
        message.textContent = 'Incorrect username or password';
        message.style.color = 'red';
        document.querySelector('.sign-in-form').appendChild(message);
    }

    // Update login/logout button in navbar
    updateLoginLogoutButton();
});

// Function for logout action
function logout() {
    // Clear isLoggedIn in localStorage
    localStorage.removeItem('isLoggedIn');
    // Update login/logout button in navbar
    updateLoginLogoutButton();
}

// Call updateLoginLogoutButton when the page loads
window.addEventListener('load', function() {
    updateLoginLogoutButton();
});







