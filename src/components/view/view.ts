import {RelatedFilm} from "../../types/base/api";

const title = document.querySelector('.film__title');
const animeBackground = document.querySelector('.hero__background') as HTMLImageElement;
const description = document.querySelector('.film__description');
const rating = document.querySelector('.film__rating');
const episodes = document.querySelector('.film__episodes');
const genres = document.querySelector('.film__tags');
const gallery = document.querySelector('.gallery');

const render = (anime :RelatedFilm) => {
    const card = document.createElement('button');
    card.id = `${anime.id}`;
    card.classList.add('card');
    const cardImage = document.createElement('img');
    cardImage.src = `https://shikimori.one${anime.image.preview}`;
    cardImage.classList.add('card__image');
    const cardTitle = document.createElement('span');
    cardTitle.textContent = anime.russian;
    cardTitle.classList.add('card__text');
    card.append(cardImage, cardTitle);
    gallery.append(card);
}

export {title, animeBackground, description, rating, episodes, genres, render}
