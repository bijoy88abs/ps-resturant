require('dotenv').config();
const routes = require('./routes/routes');
var cors = require('cors')

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

var bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(cors())
app.use('/api', routes);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});


var port = (process.env.PORT || '3000');
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})