

const artworks = [
    {
        artist: "Марсель Руссо",
        title: "Охота Амура",
        medium: "Холст, масло",
        dimensions: "(50х80)",
        price: "14 500 руб",
        image: './assets/images/1.jpg'
    },
    {
        artist: "Анри Селин",
        title: "Дама с собачкой",
        medium: "Акрил, бумага",
        dimensions: "(50х80)",
        price: "16 500 руб",
        image: './assets/images/2.jpg'
    },
    {
        artist: "Франсуа Дюпон",
        title: "Процедура",
        medium: "Цветная литография",
        dimensions: "(40х60)",
        price: "20 000 руб",
        image: './assets/images/3.jpg'
    },
    {
        artist: "Луи Детуш",
        title: "Роза",
        medium: "Бумага, акрил",
        dimensions: "(50х80)",
        price: "12 000 руб",
        image: './assets/images/4.jpg'
    },
    {
        artist: "Франсуа Дюпон",
        title: "Птичья трапеза",
        medium: "Цветная литография",
        dimensions: "(40х60)",
        price: "22 500 руб",
        image: './assets/images/5.jpg'
    },
    {
        artist: "Пьер Моранж",
        title: "Пейзаж с рыбой",
        medium: "Цветная литография",
        dimensions: "(40х60)",
        price: "20 000 руб",
        image: './assets/images/6.jpg'
    }
];

function renderArtworks() {
    const container = document.querySelector('.artworks-container');
    const artworkCards = artworks.map(artwork => `
    <div class="art-card">
      <img src="${artwork.image}" alt="${artwork.title}">
      <p class="artist">${artwork.artist}</p>
      <h2>${artwork.title}</h2>
      <p class="medium">${artwork.medium} ${artwork.dimensions}</p>
      <p class="price">${artwork.price}</p>
      <button class="button-outline full-widght">В корзину</button>
    </div>
  `).join('');

    container.innerHTML = artworkCards;
}

document.addEventListener('DOMContentLoaded', renderArtworks);
