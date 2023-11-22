const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('open');
    })
    .catch((err) => {
        console.log("error: ",err);
    });

const personSchema = new mongoose.Schema({
    first:String,
    last:String
})

// virtuals: properties not in database, but derived from database
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

// middleware
personSchema.pre('save', async function() {
    console.log("about to save");
})

personSchema.post('save', async function() {
    console.log("finished saving");
})

const Person = mongoose.model('Person', personSchema);

const c=3;
