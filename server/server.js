const express = require('express');
const app = express();
const pool = require('./modules/pool');
const bodyParser = require('body-parser');

//routers

const timeEntry = require('./routes/timeEntry.route.js');
const manPro = require('./routes/manPro.route.js');
const home = require('./routes/chart.route.js');

//uses 
app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/projects', manPro);
app.use('/entries', timeEntry);
app.use('/chart', home);
//ports
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`listening on PORT`, port);
});