

// array of quote objects
var quotes = [
  {
    quote: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.",
    source: "Dr Suess",
  },
  {
    quote: "Get busy living or get busy dying.",
    source: "Stephen King",
  },
  {
    quote: "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    source: "Mark Caine",
  },
  {
    quote: "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
    source: "Helen Keller",
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: "Mark Twain",
  },
  {
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    source: "Eleanor Roosevelt",
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F. Kennedy",
  },
];


// function that picks a random object from an array that is passed in
function getRandomQuote(array) {
return array[Math.floor(Math.random() * array.length)];
}


// prints your quote when called
function printQuote() {
var print = getRandomQuote(quotes);
var display = "",
display = "<p class='quote'>" + print.quote + "</p>";
display += "<p class= 'source'>" + print.source;
display += "</p>";
document.getElementById('quote-box').innerHTML = display;
}






// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
