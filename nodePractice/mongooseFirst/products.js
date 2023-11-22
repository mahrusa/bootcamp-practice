// stuff to connect to mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('open');
    })
    .catch((err) => {
        console.log("error: ",err);
    });

// creating new schema for database.
const productSchema = new mongoose.Schema({
    
    // basic properties
    name: {
        type : String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    onSale: {
        type: Boolean,
        default: false
    },

    // can have array of strings too
    categories: [String],

    // can have objects inside of objects
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
});


// instance methods on each instance of class
productSchema.methods.toggleSale = function() {
    this.onSale = !this.onSale;
    this.save();
}

// static methods on class as whole
productSchema.statics.fireSale = function(){
    return this.updateMany({}, {onSale:true, price:1});
}

// the class in database
const Product = mongoose.model('Product', productSchema);

Product.fireSale().then(res => console.log(res));


/*
const bike = new Product({name:"tire pump", price:19.50, categories:["bikes"]});

bike.save()
.then((data) => {
    console.log("yay", data);
})
.catch((err) => {
    console.log("noo", err.errors.name.properties.message);
}); */

const x=5;