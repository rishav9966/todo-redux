var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//import todo api
var todos = require('./routes/api/Todos');

const app = express();

app.use(bodyParser.json());

const db = require('./config/keys').mongiURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(error));

//Use routes
app.use('/api/todos', todos);

const port = process.env.PORT || 5000;

app.listen(port,
    () => console.log('Server running at port', port)
)