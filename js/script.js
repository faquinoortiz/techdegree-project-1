function getrandomQuotes (){
const quotes =[
  {
  quotes:"The way I see it you want the rainbow you got to put up with the rain",
  source: "Dolly Parton",
  },
  {
  quotes: "Self-care is how you take your power back",
  source: "Lalah Delia",
  },
  {
  quotes: "Success is falling nine times and getting up ten",
  source: "Jon Bon Jovi"
  },
  {
  quotes: "We've heard  a lot about the internet of Things. I think we need an Internet of Women",
  source:  "Christine Lagarda", 
  year:  "2016",
  },
  {
  quotes: "You can't put a limit on anything. The more you dream, the further you get",
  source: "Michael Phelps"
  },
];
  console.log(quotes);
 
  const randomIndex =  Math.floor (Math.random()* quotes.length);
  const randomQuote = quotes[randomIndex]; 
  return randomQuote;
  }
 const randomQuote = getRandomQuote();
  console.log(randomQuote);

function printQuote(){
  const randomQuote = getRandomQuote();
let htmlString = `<p class="quote">quote text</p>`;
 `<p class="source">quote source`;
}
if (randomQuote.citation){
<span class="citation">quote citation</span>;
  htmlString += '<span class="year">quote year</span>';
}
 if (randomQuote.year){
    htmlString +=`</p>`;
  document.getElementById('quote.box').innerHTML = htmlString;
 }
document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote();