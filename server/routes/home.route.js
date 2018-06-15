const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function(req, res) {
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase) {
            console.log('error', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM entries ORDER BY id;', function(errorMakingDatabaseQuery, result) {
                done();
                if (errorMakingDatabaseQuery) {
                    console.log('error', errorMakingDatabaseQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.post('/', (req, res) => {
    console.log('In TimeEntry POST router ', req.body);
    let newEntry = req.body;
    const queryText = `INSERT INTO entries ("project_id", "date", "hours")
VALUES($1, $2, $3);`;
    pool.query(queryText, [newEntry.project_id, newEntry.date, newEntry.hours])
        .then((result) => {
            console.log(`successful adding of newEntry aka the req.body!`, req.body);
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });

}); // end POST

router.put('/', (req, res) => {
    const entryId = req.params.id;
    console.log('in timeEntry PUT to update');
    const queryText = 'UPDATE entries WHERE id-$1';
    poll.query(queryText, [entryId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in timeEntry PUT`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const entryId = req.params.id;
    console.log('In timeEntry.route DELETE ', req.params.id);
    const queryText = 'DELETE FROM entries WHERE id=$1';
    pool.query(queryText, [entryId])
        .then((result) => {
            console.log(`successful DELETE of listing`, result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error DELETE`, error);
            res.sendStatus(500);
        });
}); //end DELETE


module.exports = router;