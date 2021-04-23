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

const collapsibles = document.querySelectorAll(".nav__list");
collapsibles.forEach((item) => {
  console.log(item.parentElement.classList);
  item.addEventListener("click", function () {
    this.parentElement.classList.toggle("collapsible--expanded");
  })
});


// toggle the nav menu
try {
  const navMenuCollapsed = document.querySelector(".nav__menu");
// console.log(navMenuCollapsed);
// console.log(navMenuCollapsed.parentElement.classList);
  navMenuCollapsed.addEventListener("click", function() {
  navMenuCollapsed.parentElement.classList.toggle("collapsible--expanded");
})

} catch (error) {
  
}


// toggle the collapsibles
try {
  const collapsibles = document.querySelectorAll("section.collapsible");
  console.log(collapsibles);
  collapsibles.forEach((item) => {
    console.log(item.classList.value);
    // if (item.classList.value.includes("collapsible__header")) {
      item.addEventListener("click", function() {
        // item.parentElement.parentElement.classList.toggle("collapsible--expanded")
        item.classList.toggle("collapsible--expanded")
      })
    // }
  });
} catch (error) {
  
}
