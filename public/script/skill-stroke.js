document.addEventListener("DOMContentLoaded", () => {
  const stroke = document.querySelector(".skills-stroke");
  const strokeWidth = stroke.scrollWidth;

  // Dupliceer de inhoud tweemaal om een naadloze animatie te creëren
  stroke.innerHTML += stroke.innerHTML + stroke.innerHTML;

  gsap.to(stroke, {
    x: `-=${strokeWidth}`,
    duration: strokeWidth / 100, // Pas de snelheid hier aan
    ease: "none",
    repeat: -1,

    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % strokeWidth),
    },
  });
});
