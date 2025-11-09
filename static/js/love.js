// Rotating love quotes and floating hearts animation for DyotiVerse
const quotes = [
  "You are my today and all of my tomorrows. — Leo Christopher",
  "I look at you and see the rest of my life in front of my eyes.",
  "In all the world, there is no heart for me like yours. — Maya Angelou",
  "I love you not only for what you are, but for what I am when I am with you. — Roy Croft",
  "If I had a flower for every time I thought of you, I could walk in my garden forever. — Tennyson",
  "You are the best thing I never planned.",
  "I wish I could turn back the clock. I’d find you sooner and love you longer.",
  "I love you more than there are stars in the sky and fish in the sea.",
  "You are my sun, my moon, and all my stars. — E.E. Cummings",
  "Whatever our souls are made of, yours and mine are the same. — Emily Brontë"
];

let quoteIndex = 0;
function showNextQuote() {
  const quoteBox = document.getElementById('love-quote-box');
  if (quoteBox) {
    quoteBox.classList.remove('fade-in');
    setTimeout(() => {
      quoteBox.textContent = quotes[quoteIndex];
      quoteBox.classList.add('fade-in');
      quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 400);
  }
}
setInterval(showNextQuote, 5000);
document.addEventListener('DOMContentLoaded', () => {
  showNextQuote();
  // Floating hearts
  const heartsContainer = document.getElementById('hearts-container');
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
  setInterval(createHeart, 800);
});
