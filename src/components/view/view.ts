import { IRelatedFilm, IView } from '../../types/base/types';
import { Film } from '../model/data';

export class View implements IView {
    title: HTMLElement = document.querySelector('.film__title');
    animeBackground= document.querySelector('.hero__background') as HTMLImageElement;
    description: HTMLElement = document.querySelector('.film__description');
    rating: HTMLElement = document.querySelector('.film__rating');
    episodes: HTMLElement = document.querySelector('.film__episodes');
    genres: HTMLElement = document.querySelector('.film__tags');
    gallery: HTMLElement = document.querySelector('.gallery');

    async renderTitle(callback: Promise<Film>) {
        const anime = await callback;
        try {
            this.title.textContent = anime.name;
            this.description.textContent = anime.description;
            this.rating.textContent = anime.score;
            this.episodes.textContent = `${anime.episodes} серий`;
            this.genres.textContent = anime.genres.join(' | ');
            this.animeBackground.src = anime.screenshots;
        } catch (error) {
            console.error(error);
        }
    }

    async renderRelatedTittles(callback: Promise<IRelatedFilm[] | null>) {
        const animeList :IRelatedFilm[] = await callback;
        animeList.forEach(anime => {
            this.render(anime);
        })
    }

    render(anime: IRelatedFilm) {
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
        this.gallery.append(card);
    }

}
