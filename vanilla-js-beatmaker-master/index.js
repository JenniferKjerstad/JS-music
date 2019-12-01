window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#cae7b9",
    "#f3de8a",
    "#eb9486",
    "#7e7f9a",
    "#97a7b3",
    "#7AB9EF",
    "#97a7b3"
  ];
  console.log("----BEWlow ")
console.log(sounds)
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      console.log("BELOW IS THE SOUND INDEX")
      console.log(sounds)
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
