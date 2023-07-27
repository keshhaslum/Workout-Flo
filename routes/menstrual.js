var express = require('express');
var router = express.Router();
const db= require("../model/helper");

// get workouts
router.get('/', async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM menstrual;`
      );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//insert a new workout
router.post('/', async (req, res, next) => {
  try {
    await db(
      `INSERT INTO menstrual (workout, video, embedid) VALUES ("${req.body.workout}", "${req.body.video}", "${req.body.embedid}");`
    );
    const result = await db("SELECT * FROM menstrual ORDER by id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get workout by id
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM menstrual WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
}); 

//delete by id
router.delete("/:id", async (req, res, next) => {
  try {
    await db(`DELETE FROM menstrual WHERE id = ${req.params.id}`);
    const result = await db("SELECT * FROM menstrual ORDER BY id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
