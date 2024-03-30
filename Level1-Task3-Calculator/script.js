let buttons = document.querySelectorAll(".buttons span");
let value = document.getElementById("value");
let toggleBtn = document.querySelector(".toggleBtn");
let body = document.querySelector("body");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (this.innerHTML === "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML === "Clear") { // "Clear" should match the case in the HTML
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    });
}

toggleBtn.onclick = function () {
    body.classList.toggle("dark");
};
