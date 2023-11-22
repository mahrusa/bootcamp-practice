const express = require("express");
const app = express();
const methodOverride = require('method-override');
const path = require("path");
const { v4: uuid } = require("uuid");


// parsing middleware, data from forms
app.use(express.urlencoded( { extended : true}))

app.use(methodOverride('_method'));

app.set('view engine','ejs');
// templates in views directory
app.set("views", path.join(__dirname,"/views"));

let comments = [
    {
        username: "Joe",
        text: "Good morning!",
        id: uuid()
    },
    {
        username: "Susan",
        text: "im sleepy..",
        id: uuid()
    },
    {
        username: "Anonymous",
        text: "haha i am so mysterious",
        id: uuid()
    }
];


app.get('/comments', (req, res) => {
    res.render("all",{ comments });
    //res.send("please work");
});

app.get('/comments/new', (req, res) => {
    res.render("form");
})


app.post('/comments', (req, res) => {
    //request body, can extract data from it
    const {username, text} = req.body;
    const id = uuid();;
    comments.push({username, text, id});
    res.redirect('/comments');
});

app.get('/comments/:id',(req, res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id)
    if(comment){
        res.render("show", {comment});
    } else {
        res.render("notFound", {id});
    }
    
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const match = comments.find(c => c.id === id);
    res.render("edit", { match });
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCmt = req.body.comment;
    const match = comments.find(c => c.id === id);
    match.text = newCmt;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () =>{
    console.log("Listening");
});

// post and patch requests use req.body (can be from form or json)
// use method-override to override post verbs into patch/del