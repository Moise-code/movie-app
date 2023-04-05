// on our demo application a user will add the movie title and its extra information and be able to search
// in the movies that are there.
const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');
const movies = [];

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
  console.log(newMovie);
}

addMovieBtn.addEventListener('click', addMovieHandler);
