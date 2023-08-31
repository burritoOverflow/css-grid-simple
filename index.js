function getRandomNumber(min = 0, max = 100) {
  return parseInt(Math.random() * (max - min) + min);
}

function genInnerHtml(val) {
  return `
  <h2>${val}</h2>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  const gridElements = document.querySelectorAll("#grid-wrapper > div");
  gridElements.forEach((gridEl, idx) => {
    gridEl.id = `grid-idx-${idx}`;
    gridEl.innerHTML = genInnerHtml(getRandomNumber());
    gridEl.addEventListener("click", () => {
      console.info(`${gridEl.id} clicked`);
      gridEl.innerHTML = genInnerHtml(getRandomNumber());
    });
  });
});
