document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");

  // Se nella pagina non esiste il menu mobile,
  // non c'è altro da eseguire.
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("is-open");

    toggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    toggle.textContent = isOpen
      ? "Chiudi"
      : "Menu";

  });

  // Chiude automaticamente il menu
  // dopo aver selezionato una voce.
  nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("is-open");

      toggle.setAttribute(
        "aria-expanded",
        "false"
      );

      toggle.textContent = "Menu";

    });

  });

});