document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const brandImage = document.querySelector(".navbar-brand img"); // Selecting the image inside navbar-brand
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const transparentImageSrc = "https://cdn.media.amplience.net/i/cebupacificair/ProjectSunrise-LinearWhite-Resized-206x67?fmt=auto&maxW=1920&maxH=1920&w=206&h=67&sm=c&&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}";
    const solidImageSrc = "https://cdn.media.amplience.net/i/cebupacificair/ProjectSunrise-LinearColored-Resized-206x67?fmt=auto&maxW=1920&maxH=1920&w=206&h=67&sm=c&&poi={$this.metadata.pointOfInterest.x},{$this.metadata.pointOfInterest.y},{$this.metadata.pointOfInterest.w},{$this.metadata.pointOfInterest.h}";
    const advisory = document.querySelector('.advisory');
    const logInButton = document.querySelector(".btn-outline-light");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-solid");
            navbar.classList.remove("bg-transparent");
            brandImage.src = solidImageSrc;
            navLinks.forEach(link => link.classList.add("dark"));
            advisory.style.backgroundColor = "rgb(26, 110, 200)";
            logInButton.classList.add("btn-outline-primary");
            logInButton.classList.remove("btn-outline-light");
        } else {
            navbar.classList.remove("bg-solid");
            navbar.classList.add("bg-transparent");
            brandImage.src = transparentImageSrc;
            navLinks.forEach(link => link.classList.remove("dark"));
            advisory.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            logInButton.classList.add("btn-outline-light");
            logInButton.classList.remove("btn-outline-primary");
        }
    });
});
