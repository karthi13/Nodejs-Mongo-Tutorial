const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/Todo');
const {User} = require('./models/User');

let app = express();

app.use(bodyParser.json());

app.post('/todo',(req,res) => {
    let todo = new Todo({
        text : req.body.text
    })

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(e);
    })
})

app.listen(3000, (req, res) => {
    console.log("server listning on port 3000");
});