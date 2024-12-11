
const btn = document.querySelector("#submit")

btn.addEventListener("click", function(e) {
  e.preventDefault();

  let content = document.querySelector("#error")
  if (content) {
    content.classList.add("active");
    content.innerHTML = "Er-117: You can not login from your current location.";
  }
});