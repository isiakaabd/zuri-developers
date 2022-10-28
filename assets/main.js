const searchBox = document.getElementById("search");
const gridContainer = document.querySelector(".grid-container");
const cards = Array.from(gridContainer.querySelectorAll(".card"));
const cardsStore = [...cards];

searchBox.addEventListener("keyup", ({ target: { value } }) => {
  if (value === "") {
    gridContainer.innerHTML = null;
    gridContainer.append(...cardsStore);
  }
  filteredCards = cards.filter((card) => {
    const valid = card
      .querySelector(".full-name")
      .innerText.toLocaleLowerCase()
      .includes(value.toLocaleLowerCase());
    console.log(valid);
    return valid;
  });
  gridContainer.innerHTML = null;
  if (filteredCards.length > 0) {
    gridContainer.append(...filteredCards);
  } else {
    gridContainer.innerHTML = "<h2>No person with that name on the list</h2>";
  }
});
