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

function getRandomQuote(x){
  
  const randomIndex =  Math.floor(Math.random()* x.length);
  const randomQuote = quotes[randomIndex]; 
  return randomQuote;
}

function printQuote(){
  const randomQuote = getRandomQuote(quotes);
  let htmlString = `
    <p class="quote">${randomQuote.quotes}</p>;
    <p class="source">${randomQuote.source}`;
    if (randomQuote.citation){
      htmlString += `<span class="citation">${randomQuote.citation}</span>`;
      }
    if (randomQuote.year){
        htmlString += `<span class="year">${randomQuote.year}</span>`;
       }
      `</p>`;
    document.getElementById('quotebox').innerHTML = htmlString;
}
 
document.getElementById('load-quote').addEventListener("click", printQuote, false);
