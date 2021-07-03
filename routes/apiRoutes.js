const router = require("express").Router();
const Workout = require("../models/workout");

/* getLastWorkout */
router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout);
    })
        .catch(err => {
            res.status(400).json(err);
        })

});


/* addExercise */




/* createWorkout */



/* getWorkoutsInRange */









module.exports = router;