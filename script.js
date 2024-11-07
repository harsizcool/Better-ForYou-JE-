// Paste Game Data Here (something for me to keep track on the games)

const games = [
  {
    name: 'Rocoblox',
    description: `Rocoblox is a great game to play with your friends! Play multiple games!`,
    image: 'images/IMG_2823.jpeg',
    url: 'https://s.julianseditor.com/6YMxMO'
  },
  {
    name: 'Animals And Invaders',
    description: `Animals and invaders is a great game about escaping the aliens that try to stop you, in an amazing parkour game.`,
    image: 'images/IMG_2824.jpeg',
    url: 'https://s.julianseditor.com/PJr8ro'
  },
  {
    name: 'Better Frontpage',
    description: `Clear the cringy front page and get games without any bias!`,
    image: 'images/IMG_2828.jpeg',
    url: 'https://s.julianseditor.com/6YMxVL'
  },
  {
    name: 'BMI Calculator',
    description: `Who knew you can now track your BMI in Julian's Editor! Calculate your BMI instantly.`,
    image: 'images/IMG_2829.jpeg',
    url: 'https://s.julianseditor.com/6rxdpR'
  }
];

// ends here

function makeCard(game) {
    const card = document.createElement('div');
    card.classList.add('game-card');
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h2>${game.name}</h2>
        <p>${game.description}</p>
    `;
    
    card.addEventListener('click', () => {
        window.open(game.url, '_blank');
    });

    return card;
}

let shownGames = [];

function loadRandom() {
    if (shownGames.length === games.length) {
        shownGames = [];
    }

    let randIdx;
    do {
        randIdx = Math.floor(Math.random() * games.length);
    } while (shownGames.includes(randIdx));

    shownGames.push(randIdx);

    const game = games[randIdx];
    const card = makeCard(game);
    document.getElementById('game-container').appendChild(card);
}

// Load more games when scrolled to bottom
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 100) {
        loadRandom();
    }
});

loadRandom();