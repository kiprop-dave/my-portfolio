const tabs = document.getElementById("tabs");
const button = document.getElementById("tbutton");

button.addEventListener("click", () => {
  tabs.classList.toggle("active");
});
