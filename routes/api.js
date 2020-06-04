const {Workout} = require('../models');

console.log(Workout)

module.exports = function (app) {
    
    app.get('/api/workouts', ({body}, res) => {
        console.log('Get workouts');
        Workout.find({}).then(workoutdb => {
            res.json(workoutdb)
        }).catch(err => {
            res.json(err);
        })
    })

    app.post('/api/workouts', ({body}, res)=>{
        console.log('workout logged');
        console.log(body)
        Workout.create(body).then(workoutdb =>{
            console.log('is this being hit')
            res.json(workoutdb)
        }).catch(err => {
            res.json(err)
        })
    });

    app.put('/api/workouts/:id', (req, res) => {
        console.log('workout id');
        Workout.update({_id: req.params.id}, { $push:{ exercises: req.body}})
        .then(workoutdb =>{
            res.json(workoutdb)
        }).catch(err => {
            res.json(err)
        })
    })

    app.get('/api/workouts/range', ({body}, res) =>{
        console.log('graph is here');
        Workout.find({})
        .then( range => {
            res.json(range)
        }).catch(err=>{
            res.json(err)
        })
    })
}