// const collapsibles = document.querySelectorAll(".collapsible");
// collapsibles.forEach((item) =>
// item.addEventListener("click", function () {
//   this.classList.toggle("collapsible--expanded");
// })
// );

// const collapseIcon = document.querySelector(".collapsible__arrow");
// console.log(collapseIcon);
// console.log(collapseIcon.parentElement.classList);
// collapseIcon.addEventListener("click", function() {
//   collapseIcon.parentElement.classList.toggle("collapsible--expanded");
// })

const navMenuCollapsed = document.querySelector(".nav__menu");
// console.log(navMenuCollapsed);
// console.log(navMenuCollapsed.parentElement.classList);
navMenuCollapsed.addEventListener("click", function() {
  navMenuCollapsed.parentElement.classList.toggle("collapsible--expanded");
})
