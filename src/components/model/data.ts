import { IDataResponse, IFilm } from '../../types/base/types';

export class Film implements IFilm {
	id;
	name;
	score;
	episodes;
	description?;
	genres?;
	videos?;
	screenshots?;

	constructor(data: IDataResponse) {
		this.id = data.id;
		this.genres = data.genres.map((el: { russian: string; }) => el.russian);
		this.description = data.description;
		this.name = data.russian;
		this.episodes = data.episodes;
		this.score = data.score;
		this.videos = data.videos;
		this.screenshots = `https://shikimori.one${data.screenshots[0].original}`;
	}

}

