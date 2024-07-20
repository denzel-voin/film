import { Api } from './base/api';
import { View } from './view/view';

const view = new View();
const api = new Api();

view.renderTitle(api.getAnime());
view.renderRelatedTittles(api.getSimilarAnime());
view.actionForm(api.getId);
