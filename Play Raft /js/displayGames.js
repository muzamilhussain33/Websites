document.addEventListener("DOMContentLoaded", () => {
    const gamesGrid = document.getElementById("gamesGrid");
    const categoryButtons = document.querySelectorAll(".category-buttons button");
  
    function displayGames(gamesToDisplay) {
      gamesGrid.innerHTML = "";
      gamesToDisplay.forEach(game => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.innerHTML = `
          <a href="${game.link}" style="background-image: url('${game.image}')">
            <div class="game-image" ></div>
            <div class="game-name">${game.name}</div>
          </a>
        `;
        gamesGrid.appendChild(card);
      });
    }
  
    displayGames(games);
  
    // categoryButtons.forEach(button => {
    //   button.addEventListener("click", () => {
    //     const category = button.getAttribute("data-category");
    //     const filtered = category === "All"
    //       ? games
    //       : games.filter(game => game.category === category);
    //     displayGames(filtered);
    //   });
    // });
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
          // Update active class
          categoryButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
      
          const category = button.getAttribute("data-category");
          const filtered = category === "All"
            ? games
            : games.filter(game => game.category === category);
          displayGames(filtered);
        });
      });
  });

  

  