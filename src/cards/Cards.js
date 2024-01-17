const maxCard = 13;
const maxSymbol = 4;

const SYMBOL = {
    CLUB: {
        name: "club",
        value: 1,
        sign: "C",
        logo: "./club.svg"
    },
    DIAMOND: {
        name: "diamond",
        value: 2,
        sign: "D",
        logo: "./diamond.svg"
    },
    HEART: {
        name: "heart",
        value: 3,
        sign: "H",
        logo: "./heart.svg"
    },
    SPADE: {
        name: "spade",
        value: 4,
        sign: "S",
        logo: "./spade.svg"
    },
};

const CARD_ORDER = [
    {
        display: "A",
        value: 1
    },
    {
        display: "2",
        value: 2
    },
    {
        display: "3",
        value: 3
    },
    {
        display: "4",
        value: 4
    },
    {
        display: "5",
        value: 5
    },
    {
        display: "6",
        value: 6
    },
    {
        display: "7",
        value: 7
    },
    {
        display: "8",
        value: 8
    },
    {
        display: "9",
        value: 9
    },
    {
        display: "X",
        value: 10
    },
    {
        display: "J",
        value: 11
    },
    {
        display: "Q",
        value: 12
    },
    {
        display: "K",
        value: 13
    }
];

export const generateDeck = () => {
    let cards = [];
    for(let i = 1; i <= maxSymbol; i++) //loop 4 time for every symbol
    {
        cards = [...cards, ...generateCard(i)];
    }
    return cards;
}

const generateCard = (symbol) => {
    let cards = [];
    let _symbol = {};

    for(let i = 0; i < maxCard; i++) //loop 13 times for each symbol
    {
        switch (symbol) { 
            case SYMBOL.CLUB.value: 
                _symbol = SYMBOL.CLUB; // get symbol info (declared in line 4) by checking "symbol" value send by the function
                break;
            case SYMBOL.DIAMOND.value:
                _symbol = SYMBOL.DIAMOND;
                break;
            case SYMBOL.HEART.value:
                _symbol = SYMBOL.HEART;
                break;
            default:
                _symbol = SYMBOL.SPADE;
          }

          const obj = { //create new obj for card info and symbol info to push to the new array
            display: `${_symbol.sign}-${CARD_ORDER[i].display}`,
            value: CARD_ORDER[i].value,
            symbolInfo: _symbol
          }
          
          cards.push(obj);
    }

    return cards;
}