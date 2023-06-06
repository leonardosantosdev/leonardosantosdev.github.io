document.addEventListener("DOMContentLoaded", function () {
  const sobreMenuItem = document.getElementById("sobre-menu-item");
  const aboutSection = document.getElementById("about");

  sobreMenuItem.addEventListener("click", function (event) {
    event.preventDefault();

    const yOffset =
      aboutSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  });

  const inicioMenuItem = document.getElementById("inicio-menu-item");
  const mainSection = document.getElementById("main-section");

  inicioMenuItem.addEventListener("click", function (event) {
    event.preventDefault();

    const yOffset =
      mainSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  });

  const logo = document.getElementById("logo");

  logo.addEventListener("click", function (event) {
    event.preventDefault();

    const yOffset =
      mainSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yOffset, behavior: "smooth" });
  });
});
