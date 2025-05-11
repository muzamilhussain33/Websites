const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const hero = document.querySelector('.hero');
const categoryCards = document.querySelectorAll('.category-card');
const gameCards = document.querySelectorAll('.game-card');

// Toggle the "show" class when the hamburger menu is clicked
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const images = [
  'images/game1.jpg',
  'images/game2.jpg',
  'images/game3.jpg'
];

let current = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Change image every 5 seconds
setInterval(changeBackground, 5000);

// Set initial image
changeBackground();



categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedCategory = card.getAttribute('data-category');

    gameCards.forEach(game => {
      const gameCategory = game.getAttribute('data-category');

      if (selectedCategory === 'all' || gameCategory === selectedCategory) {
        game.style.display = 'block';
      } else {
        game.style.display = 'none';
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");

  menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  searchIcon.addEventListener("click", () => {
    searchBar.style.display = searchBar.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const gameCards = document.querySelectorAll(".game-card");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    gameCards.forEach(card => {
      const gameName = card.querySelector(".game-name").textContent.toLowerCase();
      card.style.display = gameName.includes(query) ? "block" : "none";
    });
  });
});


const searchInput = document.getElementById("searchInput");
const heroSection = document.querySelector(".hero");
const categoriesSection = document.querySelector(".categories");
const featuredSection = document.querySelector(".featured");
const featuredHeading = featuredSection.querySelector("h2"); // Select the heading
const gamesGrid = document.getElementById("gamesGrid");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();

  if (query.length > 0) {
    heroSection.style.display = "none";
    categoriesSection.style.display = "none";
    featuredHeading.style.display = "none"; // Hide heading
    featuredSection.style.display = "block";
  } else {
    heroSection.style.display = "block";
    categoriesSection.style.display = "block";
    featuredHeading.style.display = "block"; // Show heading back
    featuredSection.style.display = "none";
  }

  const gameCards = document.querySelectorAll(".game-card");
  let anyVisible = false;

  gameCards.forEach(game => {
    const gameName = game.querySelector(".game-name").textContent.toLowerCase();
    const match = gameName.includes(query);

    game.style.display = match ? "block" : "none";

    if (match) anyVisible = true;
  });

  // If no results, you can optionally display a message here too
});


