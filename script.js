const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill"
  ];
  
  const quoteText = document.getElementById('quote-text');
  const newQuoteButton = document.getElementById('new-quote-button');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  newQuoteButton.addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    quoteText.textContent = randomQuote;
  });
  
  // Initial quote on page load
  quoteText.textContent = getRandomQuote();
  
