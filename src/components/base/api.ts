import { Film } from '../model/data';
import { IRelatedFilm, WebApi } from '../../types/base/types';

export class Api implements WebApi {
	baseUrl = 'https://shikimori.one/api/animes/';

	async getId(query: string): Promise<number | null> {
		const id = query.split(' ');
		if (id.length > 1) id.join('&');
		const result = id.toString();
		try {
			const response = await fetch(
				`https://shikimori.one/api/animes?search=${result}`
			);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data[0].id;
		} catch (error) {
			console.error('Error fetching data:', error);
			return null;
		}
	}

	async getAnime(id = 20): Promise<Film | null> {
		try {
			const response = await fetch(this.baseUrl + id);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();

			return new Film(data);
		} catch (error) {
			console.error('Error fetching data:', error);
			return null;
		}
	}

	async getSimilarAnime(id = 20): Promise<IRelatedFilm[] | null> {
		try {
			const response = await fetch(`${this.baseUrl + id}/related`);
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const data = await response.json();
			return data
				.filter((el: { anime: Film }) => el.anime)
				.map((el: { anime: Film }) => el.anime);
		} catch (error) {
			console.error('Error fetching data:', error);
			return null;
		}
	}
}

export async function getAnime(id = 20): Promise<Film | null> {
	const url = `https://shikimori.one/api/animes/${id}`;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();

		return new Film(data);
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}

export async function getSimilarAnime<T>(id = 20): Promise<T> | null {
	const url = `https://shikimori.one/api/animes/${id}/related`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		return data
			.filter((el: { anime: Film }) => el.anime)
			.map((el: { anime: Film }) => el.anime);
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
}
