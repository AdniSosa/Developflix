import peliculas from './peliculas.js'

//1-Tengo que determinar en cada genre_ids las categorías que incluye
//Hacer constantes con el id de las categorías. 
//2- Usar filter().

const genderContainer = document.querySelectorAll('.genero-container');
const divAction = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAdventure = document.getElementById('genero-12');
const actionId = 28;
const thrillerId = 53;
const adventureID = 12;
const imagePath = 'https://image.tmdb.org/t/p/w500'
let movies = [];
let covers = [];


function movieFilter(ids) {
    for (let i = 0; i < peliculas.length; i++) {
        for(let j = 0; j < peliculas[i].genre_ids.length; j++) {
            if (peliculas[i].genre_ids[j] === ids) {
            const movie = peliculas[i].original_title;
            const cover = imagePath + peliculas[i].backdrop_path;
            //console.log(cover);
            movies.push(movie);
            covers.push(cover);
            }
        }
    }
}


function moviesSelected(id, div) {
    movieFilter(id);
    const actionMovies = movies;
    const actionCovers = covers;
    
    for (let i = 0; i < actionMovies.length; i++) {
        const movieTitle= document.createElement('p');
        const movieCover = document.createElement('img');
        const movieDiv = document.createElement('div');
        
        div.appendChild(movieDiv);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieCover);
       
        movieTitle.textContent = actionMovies[i];
        movieCover.src = actionCovers[i];
        movieCover.alt = 'Portada de la película ' + actionMovies[i];
    }
}


moviesSelected(actionId, divAction);
moviesSelected(thrillerId, divThriller);
moviesSelected(adventureID, divAdventure);


// for (let i = 0; i < peliculas.length; i++) {
//     for(let j = 0; j < peliculas[i].genre_ids.length; j++) {
//         if (peliculas[i].genre_ids[j] === 53) {
//         const thrillerMovies = peliculas[i].original_title;
//         }
//     }
// }

// for (let i = 0; i < peliculas.length; i++) {
//     for(let j = 0; j < peliculas[i].genre_ids.length; j++) {
//         if (peliculas[i].genre_ids[j] === 12) {
//         const AdMovies = peliculas[i].original_title;
//         }
//     }
// }

