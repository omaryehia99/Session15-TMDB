const API_KEY ='api_key=a4a6f3d2a6d8ffbbfa052b3958f7b4b5';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL='https://image.tmdb.org/t/p/w500';

const main = document.getElementById('main');


getMovies(API_URL);

function getMovies(url)
{
    fetch(url).then(res => res.json()).then(data =>{
            showMovies(data.results);
            console.log(data)
        })
}


function showMovies(data)
{
    main.innerHTML = '';
    data.forEach( movie => {
        const {title,poster_path,vote_average,overview} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}" >
        <div class="movie-info" style="text-align: center;">
            <h3>${title}</h3>
            <span>${vote_average}</span>
        </div>
<div class="description">${overview}</div>
`



      
      main.appendChild(movieElement);
    })
}