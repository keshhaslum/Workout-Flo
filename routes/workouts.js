var express = require('express');
var router = express.Router();
const db= require("../model/helper");

// get workouts
router.get('/', async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM workouts;`
      );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//insert a new lowerbody workout
router.post('/', async (req, res, next) => {
  try {
    await db(
      `INSERT INTO workouts (type, workout, reps, sets) VALUES ("${req.body.type}", "${req.body.workout}", "${req.body.reps}", "${req.body.sets}");`
    );
    const result = await db("SELECT * FROM workouts ORDER by id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get workout by id
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM workouts WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
}); 


module.exports = router;
