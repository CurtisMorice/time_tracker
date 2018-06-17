const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', function(req, res) {
    const queryText = 'SELECT * FROM projects ORDER BY id DESC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(`in router.get`, err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('In manPro POST router ', req.body);
    let newEntry = req.body;
    const queryText = `INSERT INTO "projects" ("project")
VALUES($1);`;
    pool.query(queryText, [newEntry.project])
        .then((result) => {
            console.log(`successful adding of newEntry aka req.body!`, newEntry);
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        });

}); // end POST

router.put('/', (req, res) => {
    const entryId = req.params.id;
    console.log('in manPro.route PUT to update');
    const queryText = 'UPDATE "entries" WHERE "id"=$1;';
    poll.query(queryText, [entryId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log(`Error in manPro PUT`, error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const entryId = req.params.id;
    console.log('In manPro.route DELETE router ', req.params.id);
    const queryText = 'DELETE FROM entries WHERE "id"=$1;';
    pool.query(queryText, [entryId])
        .then((result) => {
            console.log(`successful DELETE of manPro`, result);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error DELETE`, error);
            res.sendStatus(500);
        });
}); //end DELETE


module.exports = router;