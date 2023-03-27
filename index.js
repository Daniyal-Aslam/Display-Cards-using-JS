// // GLOBAL VARIABLE BEGIN
let cardName = document.getElementById('card-name'); 
let cards = document.querySelectorAll('.d_card'); 
 
 
const getUserinfo = () => {
    const inputText = cardName.value;
    cards.forEach(card => {
        const heading = card.querySelector('h2');
        const parent = heading.closest('.d_card'); // replace with your parent class or ID
        parent.style.display = heading.textContent === inputText ? "block" : "none" ; 
      });
  }  