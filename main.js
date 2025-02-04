document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is working!"); // This will log a message to the console

  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
      console.log("Collapsible clicked!"); // This will log a message when a collapsible is clicked
      this.classList.toggle("collapsible--expanded");
    })
  );
});
