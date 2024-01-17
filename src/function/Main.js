// const getRandom = (max) => {
//     return Math.floor(Math.random() * max);
// }

// const isFloat = (n) => {
//     return Number(n) === n && n % 1 !== 0;
// }

// export const getCard = () => {
//     const randomIndex = getRandom(cards.length);
//     return cards[randomIndex];
// }

export const distributeCard = (deck, people) => {
    deck = shuffle(deck); 
    const maxCards = deck.length;
    const chunkSize = maxCards / people;

    console.log(chunkSize)
    
    let dc = [];
    for (let i = 0; i < maxCards; i += chunkSize) {
        dc.push(deck.slice(i, i + chunkSize));
    }

    return dc;
}

export const distributeCardV2 = (deck, people) => {
    deck = shuffle(deck); //shuffle the cards every time this function is called
    let dc = [];
    let step = 1;
    while(deck.length > 0) {
        for (let i = 0; i < people; i++) {
            if(deck.length <= 0) break;
            if(dc[i] === undefined || dc[i] === null) dc[i] = [];
            const obj = deck.slice(0, 1)[0]; //slice always 0 since we remove one value in line 43 using splice

            if(step === 1 && i === 0) obj.seperated = true; // seperate card for first person on the first row
            if(step === 2 && i === 1) obj.seperated = true; // seperate card for second person on the second row
            
            dc[i].push(obj); 
            deck.splice(0, 1); //remove array value index 0
        }
        step++;
    }

    return dc;
}

export const shuffle = (deck) => { 
    for (let i = deck.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); //Math.floor to make sure the value is int
      [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }

    return deck; 
}; 