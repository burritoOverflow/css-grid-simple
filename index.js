window.addEventListener("DOMContentLoaded", () => {
  const gridElements = document.querySelectorAll("#grid-wrapper > div");
  gridElements.forEach((gridEl, idx) => {
    gridEl.id = `grid-idx-${idx}`;
    gridEl.addEventListener("click", () => {
      console.info(`${gridEl.id} clicked`);
    });
  });
});
