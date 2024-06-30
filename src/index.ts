import './sass/styles.sass'
import {getAnimeInfo} from "./components/api";


getAnimeInfo(1)
    .then(respone => respone.json())
    .then(result => {
        console.log(result.data.title)
    })
