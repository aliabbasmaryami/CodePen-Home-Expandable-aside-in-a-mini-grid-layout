const container = document.querySelector(".container");
const target = document.querySelector(".aside button");

const modifiers = {
  expanded: "with-long-aside",
  shrunk: "without-long-aside"
};
let initial = true;

const toggle = () => {
  container.classList.toggle(modifiers.expanded);
  if (!initial) {
    container.classList.toggle(modifiers.shrunk);
  }
  initial = false;
};

const onKeyUp = (e) => {
  if (e.key === "ArrowUp") {
    toggle();
  }
};

target.addEventListener("click", toggle);
window.addEventListener("keydown", onKeyUp);
