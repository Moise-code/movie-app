// on our demo application a user will add the movie title and its extra information and be able to search
// in the movies that are there.
const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');
const movies = [];

// now lets create the the function to render the movie list to the UI
const renderMovies = () =>{
  const movieList = document.querySelector('#movie-list');
  if(movies.length === 0){
    movieList.classList.remove('visible');
    return;
  } else{
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
  movies.forEach((movie) =>{
    const movieEl = document.createElement('li');
    let movieContent = movie.info.title + ' - ';
    for(const key in movie.info){
      if(key !== 'title'){
        movieContent += `${key} ${movie.info[key]}`;
      }
    }
    movieEl.textContent = movieContent;
    movieList.prepend(movieEl); 
  });
}

// lets create the function to grab user in puts
const addMovieHandler = () =>{
  const title = document.querySelector('#title').value;
  const extraName = document.querySelector('#extra-name').value;
  const extraValue = document.querySelector('#extra-value').value;
  if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
  info:{
    title,
    [extraName]: extraValue
  },
  id:Math.random()
  }
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
}

addMovieBtn.addEventListener('click', addMovieHandler);
