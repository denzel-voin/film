import { Film } from '../../components/model/data';

export interface IFilm {
    id :number,
    name :string,
    score :string,
    episodes :number,
    description? :string,
    genres? :string[],
    videos? :{url:string}[],
    screenshots? :string,
}

export interface IRelatedFilm {
    id :number,
    russian :string,
    image :{preview:string}
}

export interface IDataResponse {
    id: number;
    genres: { russian: string; }[];
    description: string;
    russian: string;
    episodes: number;
    score: string;
    videos: {url:string}[];
    screenshots: {[value: string]: string}[];
}

export interface WebApi {
    getId(query: string): Promise<number | null>;
    getAnime(id: number): Promise<Film | null>;
    getSimilarAnime<T>(id: number): Promise<IRelatedFilm[] | null>;
}

export interface IView {
    renderTitle(callback :Promise<Film>): Promise<void>;
    renderRelatedTittles(callback: Promise<IRelatedFilm[] | null>): Promise<void>;
    render(anime :IRelatedFilm): void;
}
