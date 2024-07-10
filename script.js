//Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Simulate a delay of 3 seconds before hiding the loader
  setTimeout(() => {
    loader.classList.add("loader--hidden");
  }, 300); // Adjust the time in milliseconds (3000 ms = 3 seconds)

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
