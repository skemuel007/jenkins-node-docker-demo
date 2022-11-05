const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const startupDebugger = require('debug')('app:startup');


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());

app.use(morgan('tiny'));
startupDebugger('Debugger is enabled');

app.get('/', (req, res) => {
    return res.send('Hello World');
});

const port = process.env.PORT || 3003 // config.get('PORT');
app.listen(port, () => console.log(`Server is running on port ${port}`));