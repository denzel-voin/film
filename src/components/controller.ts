import {getAnime, getSimilarAnime} from './base/api'
import {title, animeBackground, description, rating, episodes, genres, render} from "./view/view";
import {RelatedFilm} from "../types/base/api";


async function displayAnimeTitle() {
    try {
        const anime = await getAnime();
        if (anime) {
            title.textContent = anime.name;
            description.textContent = anime.description;
            rating.textContent = anime.score;
            episodes.textContent = `${anime.episodes} серий`
            genres.textContent = anime.genres.join(' | ');
            animeBackground.src = anime.screenshots
        } else {
            console.error("Anime data is null");
        }
    } catch (error) {
        console.error("Error fetching anime:", error);
    }
}

displayAnimeTitle();

async function displayRelatedTittles(): Promise<void> {
    try {
        const animes :RelatedFilm[] = await getSimilarAnime();
        animes.forEach(anime => {
            render(anime);
        })
    } catch (error) {
        console.error("Error fetching anime:", error);
    }
}

displayRelatedTittles();
