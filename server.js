const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.json({
//         'success': true
//     });
// });

app.use('/api', api);

if ( process.env.NODE_ENV === 'production' ) {
    // Express vai entregar os assets de produção
    // Como por exempo: main.js ou o main.css
    app.use(express.static('frontend/build'));

    // Express vai entregar o index.html, se não reconhecer a rota
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT_BACKEND;
app.listen(PORT);