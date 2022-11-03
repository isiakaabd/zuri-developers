const searchBox = document.getElementById("search");
const balls = document.querySelector(".balls");
const gridContainer = document.querySelector(".grid-container");
const cards = Array.from(gridContainer.querySelectorAll(".card"));
const cardsStore = [...cards];

searchBox.addEventListener("keyup", ({ target: { value } }) => {
  if (value === "") {
    gridContainer.innerHTML = null;
    gridContainer.append(...cardsStore);
  }
  filteredCards = cards.filter((card) =>
    card
      .querySelector(".full-name")
      .innerText.toLocaleLowerCase()
      .includes(value.toLocaleLowerCase())
  );
  gridContainer.innerHTML = null;
  if (filteredCards.length > 0) {
    gridContainer.append(...filteredCards);
  } else {
    gridContainer.innerHTML = "<h2>No person with that name on the list</h2>";
  }
});

cards.forEach((card) => {
  // i just wanted to remove the hyphen before the gender
  card.querySelector(".container").removeChild(card.querySelector(".postx").nextSibling);


  // adds the shimmer element to the card
  const shimmer = document.createElement("span");
  shimmer.className = "shimmer";
  card.prepend(shimmer);
});

// generates an array with 10 elements, the elements are used to create the balls
// and randomly disperses them in the main element
// although this is not perfect as balls can overlap each other
Array.from(Array(10).keys()).map(() => {
  const ball = document.createElement("span");
  ball.className = "ball";
  ball.style.top = Math.floor(Math.random() * document.body.scrollHeight) + "px";
  ball.style.left = Math.floor(Math.random() * document.body.scrollWidth) + "px";

  balls.append(ball);
});
