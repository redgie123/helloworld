const fetch = require('node-fetch');

const url = 'https://api.hearthstonejson.com/v1/15590/enUS/cards.collectible.json';

const findCard = (cardName, deck) => {
    return deck.filter(card => card.name === cardName)[0];
};

const NAME = 'Shadow Madness';

fetch(url)
.then(data => data.json())
.then(cards => {
    console.log(`Total number of cards = ${cards.length}`);
    const index = Math.floor(Math.random() * cards.length);
    const card = cards[index];
    console.log(card.name);

    const thisCard = findCard(process.argv[2], cards);
    console.dir(thisCard);
    //cards.map(card => console.log(card.name));
})
.catch(error => {
    console.log(error);
});

