const express = require('express');
const app = express();
const pool = require('./modules/pool');

//routers
const bodyParser = require('body-parser');
const timeEntry = require('./routes/timeEntry.route.js');
const manPro = require('./routes/manPro.route.js');
const home = require('./routes/home.route.js');

//uses 
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/projects', manPro);
app.use('/timeEntry', timeEntry);
app.use('/home', home);
//ports
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`listening on PORT`, port);
});