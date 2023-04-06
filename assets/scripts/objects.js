// on our demo application a user will add the movie title and its extra information and be able to search
// in the movies that are there.
const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');
const form = document.querySelector('#user-input');
const formInputs = form.querySelectorAll('input');
const movies = [];

// now lets create the the function to render the movie list to the UI
const renderMovies = (filter ='') =>{
  const movieList = document.querySelector('#movie-list');
  if(movies.length === 0){
    movieList.classList.remove('visible');
    return;
  } else{
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  let filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) =>{
    const movieEl = document.createElement('li');
    let movieContent = movie.getFormattedTitle()+ ' - ';
    for(const key in movie.info){
      if(key !== 'title'){
        movieContent += `${key} ${movie.info[key]}`;
      }
    }
    movieEl.textContent = movieContent;
    movieList.prepend(movieEl);
    formInputs.forEach((input) =>{
      input.value = '';
    })
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
  id:Math.random(),
  getFormattedTitle: function() {
    return this.info.title.toUpperCase(); 
  }
  }
  movies.push(newMovie);
  renderMovies();
  console.log(newMovie);
}

// we are going to create the function to filter the movies to get the right movie resulted from the input user entered.
const searchMovieHandler = () =>{
  const filterInput = document.querySelector('#filter-title').value;
  renderMovies(filterInput);
}

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

