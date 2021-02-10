const router = require("express").Router();
const { Workout } = require("../models");

router.get("/api/workouts", (req, res) => {
    
    Workout.find().then((workouts) => {
console.log(workouts)
        res.json(workouts);

    }).catch((err) => {

        res.status(500).json(err);

    });
});


router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    Workout.create( req.body ).then((workout) => {

        res.json(workout);

    }).catch((err) => {

        res.status(500).json(err);
        
    });

});

router.put("/api/workouts/:id", (req, res) => {

    const newExercise = req.body;
    console.log(newExercise)
    Workout.findByIdAndUpdate( req.params.id, { $push: {
        exercises: newExercise 
    }} ).then((workout) => {

        res.json(workout);

    }).catch((err) => {

        res.json(err);
        
    });

});

router.get("/api/workouts/range", (req, res) => {



});


module.exports = router;