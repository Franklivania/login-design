
const btn = document.querySelector("#submit")

btn.addEventListener("click", function(e) {
  e.preventDefault();

  let content = document.querySelector("#error")
  if (content) {
    content.classList.add("active");
    content.innerHTML = "you can not log in to  this account from your current location";
  }
});