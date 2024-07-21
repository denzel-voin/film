import { Api, getAnime, getSimilarAnime } from './base/api';
import { View } from './view/view';

const form: HTMLFormElement = document.querySelector('.form');
const input: HTMLInputElement = document.querySelector('.form_input');
const gallery: HTMLFormElement = document.querySelector('.gallery');

const view = new View();
const api = new Api();

view.renderTitle(api.getAnime());
view.renderRelatedTittles(api.getSimilarAnime());

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const inputValue = input.value;
	const id = await api.getId(inputValue);
	await view.renderTitle(getAnime(id));
	gallery.innerHTML = '';
	await view.renderRelatedTittles(getSimilarAnime(id));
	form.reset();
});

gallery.addEventListener('submit', (e) => {
	e.preventDefault();
	const id = Number(e.submitter.id);
	view.renderTitle(getAnime(id));
	gallery.innerHTML = '';
	view.renderRelatedTittles(getSimilarAnime(id));
});
