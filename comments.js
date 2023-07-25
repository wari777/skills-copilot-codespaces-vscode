// Create web server
 const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create web server
const app = express();

// Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.get('/posts/:id/comments', (req, res) => {
    res.send([
        {
            id: 1,
            comment: 'Hello world'
        },
        {
            id: 2,
            comment: 'Hi there'
        },
        {
            id: 3,
            comment: 'How are you?'
        }
    ]);
});

// Listen web server
app.listen(4001, () => {
    console.log('Listening on port 4001');
});
