const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('open');
    })
    .catch((err) => {
        console.log("error: ",err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String

});

const Movie = mongoose.model('Movie', movieSchema);

//const frozen = new Movie ({title:"Frozen", year:2013, score:7.4, rating:"G"});
/*
Movie.insertMany([
    {title:"Snow White", year:1934, score:7.6, rating:"G"},
    {title:"Wreck-it-Ralph", year:2012, score:9.2, rating:"G"},
    {title:"Barbie", year:2023, score:8.4, rating:"PG-13"}
])
.then((data) => {
    console.log("worked", data);
})
*/


const x=5;