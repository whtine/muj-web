let p = document.querySelector('.randomquete');
let autor = document.querySelector('.autor1');

fetch('https://dummyjson.com/quotes/random')
  .then(res => res.json())
  .then(data => {
    p.textContent = data.quote;
    autor.textContent = data.author;
  });




