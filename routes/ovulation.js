var express = require('express');
var router = express.Router();
const db= require("../model/helper");

// get workouts
router.get('/', async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM ovulation;`
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
      `INSERT INTO ovulation (workout, video, embed id) VALUES ("${req.body.workout}", "${req.body.video}", "${req.body.embedid}");`
    );
    const result = await db("SELECT * FROM ovulation ORDER by id ASC");
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get workout by id
router.get("/:id", async (req, res, next) => {
  try {
    const result = await db(
      `SELECT * FROM ovulation WHERE id = ${req.params.id};`
    );
    res.send(result.data);
  } catch (err) {
    res.status(500).send(err);
  }
}); 

//delete by id
router.delete("/:id", async (req, res, next) => {
    try {
      await db(`DELETE FROM ovulation WHERE id = ${req.params.id}`);
      const result = await db("SELECT * FROM ovulation ORDER BY id ASC");
      res.send(result.data);
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;