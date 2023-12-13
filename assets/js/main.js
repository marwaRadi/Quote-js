var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    author: `― Albert Einstein`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
    author: `― Bernard M. Baruch`,
  },
  {
    quote: `
“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
    author: `― Dr. Seuss`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
    author: `― Robert Frost`,
  },
  {
    quote: `“Don’t walk in front of me… I may not follow
Don’t walk behind me… I may not lead
Walk beside me… just be my friend”`,
    author: `― Albert Camus`,
  },
  {
    quote: `“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”`,
    author: `― Suzanne Collins, The Hunger Games`,
  },
  {
    quote: `“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”
`,
    author: `― Jane Austen, Pride and Prejudice`,
  },
];
console.log(quotes);
var randomNum;
var randArrNum = [];
var prvNum;

function generateRandom() {
  randomNum = Math.floor(Math.random() * quotes.length);
  if (randomNum == prvNum) {
    generateRandom();
  } else {
    document.getElementById("quote").innerHTML = quotes[randomNum].quote;
    document.getElementById("quote__author").innerHTML =
      quotes[randomNum].author;
    randArrNum.push(randomNum);
  }
}

var createQuote = function () {
  randomNum = Math.floor(Math.random() * quotes.length);
  if (randArrNum.length > 0) {
    prvNum = randArrNum.pop();
    if (randomNum == prvNum) {
      generateRandom();
    } else {
      document.getElementById("quote").innerHTML = quotes[randomNum].quote;
      document.getElementById("quote__author").innerHTML =
        quotes[randomNum].author;
      randArrNum.push(randomNum);
    }
  } else {
    document.getElementById("quote").innerHTML = quotes[randomNum].quote;
    document.getElementById("quote__author").innerHTML =
      quotes[randomNum].author;
    randArrNum.push(randomNum);
  }
};
