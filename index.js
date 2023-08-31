function getRandomNumber(min = 0, max = 100) {
  return parseInt(Math.random() * (max - min) + min);
}

function genInnerHtml(val) {
  return `
  <h2>${val}</h2>
  `;
}

function setTotal(element, totalVal) {
  element.innerText = `Total ${totalVal}`;
}

window.addEventListener("DOMContentLoaded", () => {
  const gridElements = document.querySelectorAll("#grid-wrapper > div");
  const totalElement = document.getElementById("total-el");

  let total = 0;

  gridElements.forEach((gridEl, idx) => {
    gridEl.id = `grid-idx-${idx}`;
    const randVal = getRandomNumber();
    total += randVal;
    gridEl.innerHTML = genInnerHtml(randVal);

    gridEl.addEventListener("click", () => {
      console.info(`${gridEl.id} clicked`);
      const curVal = parseInt(gridEl.innerText);

      total -= curVal;
      const randVal = getRandomNumber();
      total += randVal;
      setTotal(totalElement, total);

      gridEl.innerHTML = genInnerHtml(randVal);
    });

    gridEl.addEventListener("mouseover", () => {
      // hide all others numbers
      gridElements.forEach((el) => {
        if (el.id !== gridEl.id) {
          el.classList.add("hidden");
        }
      });
    });

    gridEl.addEventListener("mouseout", () => {
      // unhide all others numbers
      gridElements.forEach((el) => {
        if (el.id !== gridEl.id) {
          el.classList.remove("hidden");
        }
      });
    });

    if (idx % 2 === 0) {
      gridEl.style.background = "gold";
    }
  });

  setTotal(totalElement, total);
});
