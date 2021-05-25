//ripple
var val = 0;
window.addEventListener("scroll", function () {
  val = window.scrollY;
});

const buttons = document.querySelectorAll(".rippleBtn");
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY + val - e.target.offsetTop;

    let ripples = document.createElement("p");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
