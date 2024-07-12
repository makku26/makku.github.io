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

let defaultUsername = 'admin';
let defaultPassword = '1234';

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
        // Redirect to the home page
        window.location.href = 'index.html';
    } else {
        // Show an error message
        message.textContent = 'Incorrect username or password';
        message.style.color = 'red';
        document.querySelector('.sign-in-form').appendChild(message);
    }
});

document.querySelector('.sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.querySelector('.sign-up-form input[type="text"]').value;
    const email = document.querySelector('.sign-up-form input[type="email"]').value;
    const password = document.querySelector('.sign-up-form input[type="password"]').value;
    let message = document.querySelector('.sign-up-form .message');

    // If there's already a message element, remove it
    if (message) {
        message.remove();
    }

    // Create a new message element
    message = document.createElement('div');
    message.classList.add('message');

    // Store user-entered credentials in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Update default credentials if user has changed them during signup
    defaultUsername = username;
    defaultPassword = password;

    // Example logic to handle sign-up (You would typically send this data to your server)
    if (username && email && password) {
        message.textContent = 'Sign-up successful!';
        message.style.color = 'green';
        document.querySelector('.sign-up-form').appendChild(message);
    } else {
        message.textContent = 'Please fill in all fields';
        message.style.color = 'red';
        document.querySelector('.sign-up-form').appendChild(message);
    }
});
