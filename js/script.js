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
/**
 * 
 * Quote array listed with two properties quote itself and its source. One object having 3 properties which is the year that
 */

function getRandomQuote(x){
  
  const randomIndex =  Math.floor(Math.random()* x.length);
  const randomQuote = quotes[randomIndex]; 
  return randomQuote;
}
/**
 * function gets random quote every time you call this function, 
 */
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
    // Function calls to produce a random quote, it also checks for the citation and year //
    document.getElementById('quote-box').innerHTML = htmlString;
}
 
document.getElementById('load-quote').addEventListener("click", printQuote, false);
