const openSidebar = document.querySelectorAll(".open-sidebar");
const leftSidebar = document.querySelector(".left-sideBar");
openSidebar.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(3);

    leftSidebar.classList.toggle("left-sideBar-active");
  });
});
