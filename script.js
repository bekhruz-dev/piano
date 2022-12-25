const keys = document.querySelectorAll(".key");

function playNota(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransiton(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransiton));
window.addEventListener("keydown", playNota);
