const thumbs = document.querySelectorAll(".thumb");
const rates = document.querySelectorAll(".rate");
thumbs.forEach((thumb) => {
  thumb.addEventListener("mouseenter", () => {
    thumb.querySelector(".play").classList.add("active");
  });

  thumb.addEventListener("mouseleave", () => {
    thumb.querySelector(".play").classList.remove("active");
  });
});

rates.forEach((rate) => {
  rate.addEventListener("mouseenter", () => {
    rate.classList.add("active");
  });
});

rates.forEach((rate) => {
  rate.addEventListener("mouseleave", () => {
    rate.classList.remove("active");
  });
});
