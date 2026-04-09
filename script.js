// smooth scroll for links
const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// simple button click effect
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.opacity = "0.7";

        setTimeout(() => {
            btn.style.opacity = "1";
        }, 150);
    });
});


// form submit
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Registered successfully");
});