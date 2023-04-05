// // on our demo application a user will add the movie title and its extra information and be able to search
// // in the movies that are there.
// const addMovieBtn = document.querySelector('#add-movie-btn');
// const searchBtn = document.querySelector('#search-btn');
// const movies = [];

// // now lets create the the function to render the movie list to the UI
// const renderMovies = (filter ='') =>{
//   const movieList = document.querySelector('#movie-list');
//   if(movies.length === 0){
//     movieList.classList.remove('visible');
//     return;
//   } else{
//     movieList.classList.add('visible');
//   }
//   movieList.innerHTML = '';

//   let filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

//   filteredMovies.forEach((movie) =>{
//     const movieEl = document.createElement('li');
//     let movieContent = movie.info.title + ' - ';
//     for(const key in movie.info){
//       if(key !== 'title'){
//         movieContent += `${key} ${movie.info[key]}`;
//       }
//     }
//     movieEl.textContent = movieContent;
//     movieList.prepend(movieEl); 
//   });
// }

// // lets create the function to grab user in puts
// const addMovieHandler = () =>{
//   const title = document.querySelector('#title').value;
//   const extraName = document.querySelector('#extra-name').value;
//   const extraValue = document.querySelector('#extra-value').value;
//   if(title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
//     return;
//   }

//   const newMovie = {
//   info:{
//     title,
//     [extraName]: extraValue
//   },
//   id:Math.random()
//   }
//   movies.push(newMovie);
//   renderMovies();
//   console.log(newMovie);
// }

// // we are going to create the function to filter the movies to get the right movie resulted from the input user entered.
// const searchMovieHandler = () =>{
//   const filterInput = document.querySelector('#filter-title').value;
//   renderMovies(filterInput);
// }

// addMovieBtn.addEventListener('click', addMovieHandler);
// searchBtn.addEventListener('click', searchMovieHandler);

// lets first target the inputs
const addMovieBtn = document.querySelector('#add-movie-btn');
const searchMovieBtn = document.querySelector('#add-movie-btn');
const formInputs = document.querySelector('#user-input');
const inputs = formInputs.querySelectorAll('input');
console.log(inputs);
// lets create the array to store a movie object
const movies = [];


// now let create the function to get the user inputs

const addMovieHandler = () => {
  // let target the inputs first
  let movieTitle = document.querySelector('#title').value;
  let extraName = document.querySelector('#extra-name').value;
  let extraValue = document.querySelector('#extra-value').value;

  // lets check the inputs in case they are empty then we return

  if (movieTitle.trim() === '' || extraName === '' || extraValue === '') {
    return;
  }
  // since we have the array to store our object nw we can create the object to store the movie

  const newMovie = {
    info: {
      title: movieTitle,
      [extraName]: extraValue
    },
    id: Math.random()
  }
  movies.push(newMovie); // here we are pushing the movie object in the array movies we created.
  renderMovieHandler();
  inputs.forEach((input) =>{
    input.value = '';
  })
  console.log(newMovie); // here we are consol logging the object created based on the movie.
}

// lets create a function to reset the input values after adding the movie to the Ui
const resetInputs = () =>{

}
// lets now create the function to add the values to the user interface

const renderMovieHandler = (filter='') =>{
  const movieList = document.querySelector('#movie-list');
  if(movies.length === 0){
    movieList.classList.remove('visible')
    return
  } else{
    movieList.classList.add('visible');
  }
  movieList.innerHtml = '';

  // lets create  a movieContent variable to hold all the contents of the added movie.
  
  movies.forEach((movie) =>{
    const movieElement = document.createElement('li');
    let movieContent = movie.info.title + ' - ';
    for(const key in movie.info){
      if(key != 'title'){
        movieContent+= `${key}: ${movie.info[key]}`;
      }
    }
  movieElement.textContent = movieContent;
  movieList.prepend(movieElement);
})
}

//lets add the function to filter the movie according to what the user searched in the filter input

const filteredMovieHandler = () =>{
  const filterInput = document.querySelector('#filter-title').value;
  renderMovieHandler(filterInput);
}

addMovieBtn.addEventListener('click', addMovieHandler);

