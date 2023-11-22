const express = require("express");
const app = express();
const methodOverride = require('method-override');
const path = require("path");

const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log('open');
    })
    .catch((err) => {
        console.log("error: ",err);
    });



app.set('view engine','ejs');
   
app.set("views", path.join(__dirname,"/views"));
    
app.use(express.urlencoded( { extended : true}))
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('home', {products});
    } else {
        const products = await Product.find({});
        res.render('home', {products});
    }
   
});

app.get('/products/create', async (req, res) => {
    res.render('create', {categories});
});


app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    // find item from database given info
    const product = await Product.findById(id);
    if(product){
        res.render('show', {product});
    } 
});

app.get('/products/:id/edit', async (req, res) => {
    const {id} = req.params;
    // find item from database given info
    const product = await Product.findById(id);
   
    res.render('edit', {product, categories});
});

app.post('/products', async (req, res) => {

    const newP = new Product(req.body);
    await newP.save();
    res.redirect('/products');
});

app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
    res.redirect(`/products/${product._id}`);
});

app.delete('/products/:id', async (req, res) => {
    const {id} = req.params;
    const deleted = await Product.findByIdAndDelete(id, req.body, {runValidators:true, new:true});
    res.redirect(`/products/`);
});

app.listen(3000,() => {
    console.log("the post id is 3000");
});


