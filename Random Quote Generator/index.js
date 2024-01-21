const randomQuotes = ["I believe life is an intelligent thing: that things aren't random. Steve Jobs",
"If you so choose, each day can be filled with even more joy than the one before. If you so choose, even the most seemingly random events can work in your favor. Ralph Marston",
"We live in a culture where we're bombarded with so much noise and so much insecurity. Lisa Ling",
"You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life. Steve Jobs",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. Steve Jobs",
"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. Albert Einstein",
"We cannot solve our problems with the same thinking we used when we created them. Albert Einstein",
"A creative man is motivated by the desire to achieve, not by the desire to beat others. Ayn Rand",
"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. Henry Ford",
"If everyone is moving forward together, then success takes care of itself. Henry Ford",
"If there is any one secret of success, it lies in the ability to get the other person's point of view and see things from that person's angle as well as from your own. Henry Ford"
];





function random(){
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const quotes = randomQuotes[randomIndex];
    document.getElementById("randomQuote").textContent = quotes;
}

// Btn Function 
const btnQuotes = document.getElementById("newQuote");

btnQuotes.addEventListener("click", () => {random()})