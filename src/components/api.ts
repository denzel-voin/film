const baseUrl :string = "https://api.jikan.moe/v4";

function getAnimeInfo(animeId :number)   {
    return fetch(`${baseUrl}/anime/${animeId}`)
        // .catch(error => console.error(error))
}

export {getAnimeInfo}
