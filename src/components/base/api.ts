import {Film} from "../../types/base/api";
export async function getAnime(): Promise<Film> | null {
    const url = 'https://shikimori.one/api/animes/20';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const anime :Film = {
            id: data.id,
            genres: data.genres.map((el: { russian: string; }) => el.russian),
            description: data.description,
            name: data.russian,
            episodes: data.episodes,
            score: data.score,
            videos: data.videos,
            screenshots: `https://shikimori.one${data.screenshots[0].original}`
        }

        return anime
    } catch (error) {
        console.error('Error fetching data:', error);
        return null
    }
}


interface RelatedAnime {
    id: number;
    name: string;
    russian: string;
    url: string;
    image: {
        original: string;
        preview: string;
        x96: string;
        x48: string;
    };
}

