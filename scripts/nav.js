let toggleBtn = document.getElementById("navToggleBtn");
toggleBtn.addEventListener("click", (eve) => {
  let sideManu = document.getElementById("sideManu");
  if (sideManu.classList.contains("showManu")) {
    sideManu.classList.remove("showManu");
    sideManu.classList.add("hideManu");
  } else {
    sideManu.classList.remove("hideManu");
    sideManu.classList.add("showManu");
  }
});
