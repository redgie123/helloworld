// Use Async await 
// Nodejs 8

const fetch = require('node-fetch');
const util = require('util');

const url = 'https://api.hearthstonejson.com/v1/15590/enUS/cards.collectible.json';

const findCard = (cardName, deck) => {
    return deck.filter(card => card.name === cardName)[0];
};

const pickRandomCard = (deck) => {
    const index = Math.floor(Math.random() * deck.length);
    return deck[index];    
};

const main = async () => {
    const data = await fetch(url);
    const cards = await data.json();
    console.log(`Total number of cards = ${cards.length}`);
    const randomCard = pickRandomCard(cards);
    console.log(`Random card: ${util.inspect(randomCard)}`);

    const theCard = findCard(randomCard.name, cards);
    console.log(`Pick a card by name: ${randomCard.name}: ${util.inspect(theCard)}`);
};

main().then(() => console.log('Done')).catch(error => console.log(error));
