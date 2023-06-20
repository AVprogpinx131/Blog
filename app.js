const navigation = () => {
  const menu = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards ${
          index / 3 + 0.5
        }s`;
      }
    });
    menu.classList.toggle("toggle");
  });
};

const pageContent = () => {
  const text = document.querySelector("#my-id");

  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
};

navigation();

pageContent();
