document.querySelector("#btn")?.addEventListener("click", () => {
  const text = document.querySelector("#hidden-text");
  text.classList.toggle("hidden");
});
