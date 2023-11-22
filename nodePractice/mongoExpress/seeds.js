const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('open');
    })
    .catch((err) => {
        console.log("error: ",err);
    });

/*
const p = new Product({
    name:"Grapefruit", 
    price:1.99, 
    category:'fruit'
});

p.save().then(p => {
    console.log(p)
})
.catch(e => {
    console.log("error", e);
}) */

const seedProducts = [
    {
        name:"Watermelon",
        price: 5.99,
        category:"fruit"
    },
    {
        name: "Milk",
        price: 2.99,
        category: "dairy"
    },
    {
        name: "Celery",
        price: 4.99,
        category:"vegetable"
    }
]

Product.insertMany(seedProducts)
.then(p => {
    console.log(p)
})
.catch(e => {
    console.log("error", e);
})