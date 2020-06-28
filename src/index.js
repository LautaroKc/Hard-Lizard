const homePage = require('./homePage');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');
const sucursales = require('./sucursales');
const contacto = require('./contacto');
const preguntasFrencuentes = require('./preguntasFrecuentes');

let index = {
    homePage: function(res) {
        res.write(homePage.titulo)
        res.write(`\n\n¡Hay ${homePage.cantidad()} peliculas en cartelera! \n\n`)
        res.write('---------------------------------\n')
        res.write('Peliculas disponibles:\n\n')

        let titleMovies = homePage.listarPelis();
        for (title of titleMovies) {
        res.write(`${title} \n`)}
        res.write('---------------------------------\n')
        res.end();
    },
    enCartelera: function(res) {
        res.write(`${enCartelera.titulo}: ${homePage.cantidad()} \n\n`);
        res.write('----------------------\n')
        res.write('Peliculas en cartelera\n')
        res.write('----------------------\n')
        let movies = enCartelera.listarPelis();
        movies.forEach(function(movie) {
            res.write('\n\n---------------------------------\n')
            res.write(`${movie.title} \n\n${movie.overview}`)
        })
        res.end()
    },
    masVotadas: function(res) {
        res.write(masVotadas.titulo);
        res.write(`\n\nTotal de películas en cartelera: ${masVotadas.cantidad()}\n`)
        res.write('\nPeliculas con Mayor Rating:')
        let movies = masVotadas.listarPelis();
        movies.forEach(function(movie) {
        res.write(`\n\n${movie.title}: ${movie.vote_average}\n${movie.overview}\n`)
        res.write('---------------------------------\n')
        })
        res.end()
    },
    sucursales: function(res) {
        res.write(sucursales.titulo)
        res.write(`\n\n\nTotal de películas en cartelera: ${sucursales.cantidad()}\n\n`)
        res.write('---------------------------------\n')
        res.write('Listado de Salas disponibles\n')
        res.write('---------------------------------\n')
        let theathers = sucursales.listarCines();
        theathers.forEach(function(theather) {
        res.write(`${theather.name}\n${theather.address}\n\n${theather.description}\n`)
        res.write('----------------\n\n')
        })
        res.end()
    },
    contacto: function(res) {
        res.write(`${contacto.titulo}\n\n`);
        res.write(contacto.contenido)
        res.end()
    },
    preguntasFrencuentes: function(res) {
        res.write(preguntasFrencuentes.titulo)
        res.write(`\n\nTotal de preguntas: ${preguntasFrencuentes.cantidad()}\n`)
        res.write(`Listado de preguntas frecuentes:\n`)

        let faqs = preguntasFrencuentes.listarFaqs();
        for (faq of faqs) {
        res.write('---------------\n')
        res.write(`Pregunta: ${faq.faq_title} \nRespuesta: ${faq.faq_answer}\n\n`)
        }
        res.write('\n')

        res.end()
    }

}
module.exports = index