import peliculas from './peliculas.js'


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
            const cover = imagePath + peliculas[i].poster_path;
            //console.log(cover);
            movies.push(movie);
            covers.push(cover);
            }
        }
    }
}


function moviesSelection(id, div) {
    movieFilter(id);
    const moviesSelected = movies;
    const moviesCovers = covers;
    
    for (let i = 0; i < moviesSelected.length; i++) {
        const movieTitle= document.createElement('p');
        const movieCover = document.createElement('img');
        const movieDiv = document.createElement('div');
        
        div.appendChild(movieDiv);
        movieDiv.appendChild(movieTitle);
        movieDiv.appendChild(movieCover);
        movieDiv.classList.add('movie-div')
       
        movieTitle.textContent = moviesSelected[i];
        movieCover.src = moviesCovers[i];
        movieCover.alt = `Portada de la película ${moviesSelected[i]}`;
        //console.log(movieCover.alt)
    }
}


moviesSelection(actionId, divAction);
moviesSelection(thrillerId, divThriller);
moviesSelection(adventureID, divAdventure);



