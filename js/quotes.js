const quotes = [
    {quote: "Laughter is timeless, Imagination has no age. And dreams are forever",
    author: "Walt Disney",
img:"1.jpeg",
},
    {
        quote: "The past can hurt, but the way I see it, you can either run from it or learn from it.",
        author: "Lion King",
        img:"2.jpeg",
    },
    {
        quote: "You must not let anyone define your limits because of where you come from. Your only limit is you soul.",
        author: "Ratatouille",
        img:"3.jpeg",
    },
    {
        quote: "Today's special moments are tomorrow's memories.",
        author: "Aladdin",
        img:"4.jpeg",
    },
    {
        quote: "Sometimes the smallest things take up the most room in your heart.",
        author: "Winnie the Pooh",
        img:"5.jpeg",
    },
    {
        quote: "It's not until you lose everything that you can truly appreciate everything",
        author: "Beauty and the beast",
        img:"6.jpeg",
    },
    {
        quote: "The only way to get what you want in this world is through hard work",
        author: "The princess and the Frog",
        img:"7.jpeg",
    },
    {
        quote: "Venture outside your comfort zone. The rewards are worth it.",
        author: "Tangled",
        img:"8.jpeg",
    },
    {
        quote: "Our fate lives within us, you only have to be brave enough to see it.",
        author: "Brave",
        img:"9.jpeg",
    },
    {
        quote: "You control your destiny. You don't need magic to do it.",
        author: "Brave",
        img:"10.jpeg",
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const number = Math.floor(Math.random()*(quotes.length));
const todayQuote=quotes[number];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

const bgImage =document.createElement("img");
bgImage.src = `img/${todayQuote.img}`;

document.body.appendChild(bgImage);
//append는 가장 뒤에, prepend는 가장 위에 오게 함.