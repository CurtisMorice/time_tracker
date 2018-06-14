const express = require('express')
const app = express();
const pool = require('./modules/pool');

//routers
const bodyParser = require('body-parser');
const timeEntry = require('./routes/timeEntry.route');
const manPro = require('./routes/manPro.route');


//uses 
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.use('/manPro', manPro);
app.use('/timeEntry', timeEntry);

//ports
const port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log(`listening on PORT`, port);
});