// Sample game data with the updated structure
const games = [
  {
    title: 'Rocoblox',
    description: `Rocoblox is a great game to play with your friends! Play multiple games!`,
    image: 'images/IMG_2823.jpeg',
    url: 'https://s.julianseditor.com/6YMxMO'
  },
  {
    title: 'Animals And Invaders',
    description: `Animals and invaders is a great game about escaping the aliens that try to stop you, in an amazing parkour game.`,
    image: 'images/IMG_2824.jpeg',
    url: 'https://s.julianseditor.com/PJr8ro'
  },
  {
    title: 'Better Frontpage',
    description: `Clear the cringy front page and get games without any bias!`,
    image: 'images/IMG_2828.jpeg',
    url: 'https://s.julianseditor.com/6YMxVL'
  },
  {
    title: 'BMI Calculator',
    description: `Who knew you can now track your BMI in Julian's Editor! Calculate your BMI instantly.`,
    image: 'images/IMG_2829.jpeg',
    url: 'https://s.julianseditor.com/6rxdpR'
  }
];
// Function to create a game card dynamically
function createGameCard(game) {
    const card = document.createElement('div');
    card.classList.add('game-card');
    
    // Card content
    card.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h2>${game.name}</h2>
        <p>${game.description}</p>
    `;
    
    // Make the entire card clickable
    card.addEventListener('click', () => {
        window.open(game.url, '_blank'); // Open game URL in a new tab
    });

    return card;
}

// Array to keep track of games that have already been displayed
let displayedGames = [];

// Function to load a random game that hasn't been displayed yet
function loadRandomGame() {
    // If all games have been shown, reset the displayed games array
    if (displayedGames.length === games.length) {
        displayedGames = [];
    }

    // Pick a random game from the available games
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * games.length);
    } while (displayedGames.includes(randomIndex)); // Ensure the game hasn't been displayed yet

    // Mark the game as displayed
    displayedGames.push(randomIndex);

    // Create and append the game card
    const game = games[randomIndex];
    const gameCard = createGameCard(game);
    document.getElementById('game-container').appendChild(gameCard);
}

// Infinite scroll logic
window.addEventListener('scroll', () => {
    // Check if the user has scrolled to the bottom
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        loadRandomGame(); // Load a random game when scrolled to the bottom
    }
});

// Initial load
loadRandomGame(); // Load the first random game