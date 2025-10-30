function revealElements() {
  const reveals = document.querySelectorAll(".reveal-up, .reveal-down, .reveal-left, .reveal-right");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("load", revealElements);
window.addEventListener("scroll", revealElements);
