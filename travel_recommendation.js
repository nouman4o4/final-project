document.getElementById("year").textContent = new Date().getFullYear();

const searchForm = document.querySelector("#searchForm");
const searchInp = document.querySelector("#searchBar");
const cards = document.querySelector("#recommendationCards");

searchForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    cards.style.display = "flex";
    cards.innerHTML = "";
    const res = await fetch("travel_recommendation_api.json");
    const travels = await res.json();

    console.log(travels.countries);

    if (Object.values(travels).length < 1) {
      cards.innerHTML = "<div class='form-warnings'>No Recommendations</div>";
      return;
    }

    let foundedCards = [];
    switch (searchInp.value.toLowerCase()) {
      case "country":
        for (let i = 0; i < travels.countries.length; i++) {
          foundedCards = foundedCards.concat(travels.countries[i].cities);
        }
        break;
      case "temple":
        foundedCards = travels.temples;
        break;
      case "beach":
        foundedCards = travels.beaches;
        break;
      default:
        break;
    }

    foundedCards.forEach((card) => {
      cards.innerHTML += `
        <div class="recommendation-card">
            <img src="${card.imageUrl}" width="100px" height="50px" />
            <h4>${card.name}</h4>
            <p>${card.description}</p>
        </div>`;
    });
  } catch (err) {
    console.log("error: ", err);
  }
});

searchForm.addEventListener("reset", (e) => {
  cards.innerHTML = "";
  cards.style.display = "none";
});
