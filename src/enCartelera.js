let fs = require('fs');

let cartelera = {
    bd: './data/movies.json',
    titulo: "En Cartelera",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    cantidad: function() {
        return this.leerJSON().total_movies
    },
    listarPelis: function() {
        let bd = this.leerJSON();
        let movies = [];
        bd.movies.forEach(function(movie) {
            movies.push(movie)
        })
        return movies
    }

}
module.exports = cartelera