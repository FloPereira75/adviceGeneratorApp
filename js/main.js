const quote = document.querySelector('.quote');
const quoteNb = document.querySelector('.advice-nb');
const btnNewQuote = document.querySelector('.btn-new-quote');

const getQuote = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        quote.innerHTML = '"' +  data.slip.advice + '"';
        quoteNb.innerHTML = data.slip.id;
    });
}

btnNewQuote.addEventListener("click", () => getQuote());