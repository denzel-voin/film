import {getAnime} from './base/api'
import {title, animeBackground, description, rating, episodes, genres} from "./view/view";


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
