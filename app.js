const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config()

const apiRouter = require('./routes/api');
app.use('/', apiRouter);

const PORT = process.env.PORT || 3001

// Add middleware for handling CORS requests from index.html
app.use(cors())

// Add middware for parsing request bodies here:
app.use(bodyParser.json());

// Adding in morgan
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}`);
})