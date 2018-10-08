function getMovies() {
    const fs = require('fs');
    let movies = fs.readFileSync('./films.txt', 'utf8');
    return movies;
}

let movies = getMovies();
console.log(movies.trim());

