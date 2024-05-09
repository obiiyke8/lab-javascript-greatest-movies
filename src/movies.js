// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 // Iteration 1.1: Clean the array of directors
    let uniqueDirectors = [];
// Loopm thorugh the movies using the map method
movies.map((movie) => {
    // Check if the director of the current movie is already in the uniqueDirectors array
    if (!uniqueDirectors.includes(movie.director)) {
      // If not, add the director to the uniqueDirectors array
      uniqueDirectors.push(movie.directors);
    }
  });
  // Return the array of unique directors
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
// Check if movies array is empty
if (!movies.length) return 0;
// should return 0 if none of the movies in the array were directed by Steven Spielberg
// Filter drama movies out of array of objects
let stevenDrama = movies.filter((movie) => {
  return (
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
});
// store the count in a var
let dramaMovies = stevenDrama.length;
console.log(dramaMovies);
return dramaMovies;


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  // check if movies arr if empty
  if (!movies.length) return 0;
  // Calculate the total score of all movies
  let score = movies.reduce((accumulator, currentValue) => {
    //  Check if the movie has a score
    if (currentValue.score) {
      // Add the score to the accumulator
      return accumulator + currentValue.score;
    } else {
      // If the movie has no score, return the accumulator unchanged
      return accumulator;
    }
  }, 0);
  //  Calculate the average score with 2 decimal places
  let averageNotFixed = score / movies.length;
  let averageFixed = (score / movies.length).toFixed(2);
  let averageFixedWithNumber = Number(averageFixed);

  console.log(averageNotFixed);
  console.log(typeof averageFixed);
  console.log(typeof averageFixedWithNumber);

  // Convert the average to a number and return it
  return averageFixedWithNumber;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
     // Check if movies array is empty
  if (!movies.length) return 0;
  // Filter drama movies
  let dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
  //console.log(dramaMovies.length);
  // Return the average score of drama movies
  console.log(scoresAverage(dramaMovies));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
      // Create a copy of the movies array
  let moviesInnerCopy = movies.map((movie) => movie);

  // Sort the movies by year in ascending order
  moviesInnerCopy.sort((movieA, movieB) => {
    if (movieA.year > movieB.year) {
      return movieA.year - movieB.year;
    } else if (movieA.year < movieB.year) {
      return movieA.year - movieB.year;
    } else return movieA.title.localeCompare(movieB.title);
  });

  // Return the sorted movies array
  //console.table(moviesInnerCopy);
  return moviesInnerCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    // Map the movies to an array of titles, sort them alphabetically, and return the first 20 titles
  let response = movies
  .map((movie) => movie.title)
  .sort()
  .slice(0, 20);
console.log(response);
return response;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return movies.map((movie) => {
        const durationParts = movie.duration.split(' ');
        const hours = parseInt(durationParts[0].replace('h', ''));
        const minutes = parseInt(durationParts[1].replace('min', ''));
        movie.duration = hours * 60 + minutes;
        return movie;
    }
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let yearScores = {};
    let bestYear = '';
    let bestAvg = 0;
  
    for (let i = 0; i < moviesArray.length; i++) {
      let movie = moviesArray[i];
      let year = movie.year;
      let score = movie.score;
  
      if (!yearScores[year]) {
        yearScores[year] = [];
}
