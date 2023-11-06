import lax from "lax.js";

lax.init()

lax.addDriver("scrollY", () => window.scrollY);

lax.addElements(".first-name", {
  scrollY: {
    opacity: [
      [0, "screenHeight/2"],
      ["Math.random() * (0.7 - 0.3) + 0.3", 1],
    ],
    rotate: [
      [0, "screenHeight/2"],
      ["Math.random() * (180 - (-180)) + (-180)", 0],
    ],
    scale: [
      [0, "screenHeight/2"],
      ["Math.random() * (3 - 0.5) + 0.5", 1],
    ],
    translateY: [
      [0, "screenHeight/2"],
      ["Math.random() * ((screenHeight-40)*(-1) - (elHeight+80)*(-1)) + (elHeight+80)*(-1)", 0],
    ],
    translateX: [
      [0, "screenHeight/2"],
      ["Math.random() * (((screenWidth - (elWidth+40)*5)/2) - ((screenWidth - (elWidth+40)*5)/2)*(-1)) + ((screenWidth - (elWidth+40)*5)/2)*(-1)", 0],
    ]
  }
});

lax.addElements(".last-name", {
  scrollY: {
    opacity: [
      [0, "screenHeight/2"],
      ["Math.random() * (0.7 - 0.3) + 0.3", 1],
    ],
    rotate: [
      [0, "screenHeight/2"],
      ["Math.random() * (180 - (-180)) + (-180)", 0],
    ],
    scale: [
      [0, "screenHeight/2"],
      ["Math.random() * (3 - 0.5) + 0.5", 1],
    ],
    translateY: [
      [0, "screenHeight/2"],
      ["Math.random() * ((screenHeight+elHeight)*(-1) - (elHeight*2+120)*(-1)) + (elHeight*2+120)*(-1)", 0],
    ],
    translateX: [
      [0, "screenHeight/2"],
      ["Math.random() * (((screenWidth - (elWidth+40)*6)/2) - ((screenWidth - (elWidth+40)*6)/2)*(-1)) + ((screenWidth - (elWidth+40)*6)/2)*(-1)", 0],
    ]
  }
});