const router = require('express').Router();
const pool = require('../modules/pool');



router.get('/', function(req, res) {
    const queryText = 'SELECT project, projects.id, SUM(hours) as hours FROM projects LEFT JOIN entries on project_id = projects.id GROUP BY projects.id ORDER BY projects.id ASC ;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(`in router.get`, err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('In TimeEntry POST router ', req.body);
    let newEntry = req.body;
    const queryText = `INSERT INTO entries ("entry", "date", "hours","project_id")
    VALUES($1, $2, $3,$4);`;
    pool.query(queryText, [newEntry.entry, newEntry.date, newEntry.hours, newEntry.project_id])
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
    const queryText = 'UPDATE "entries" WHERE "id"=$1;';
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
    const queryText = 'DELETE FROM "entries" WHERE "id"=$1;';
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