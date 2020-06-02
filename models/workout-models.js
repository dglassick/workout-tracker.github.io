const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        type: {
            type: String,
            trim: true,
            required: 'Select type of exercise'
        },
        name: {
            type: String,
            trim: true,
            require: 'Please enter a name for exercise.'
        },
        duration: {
            type: Number,
            requried: 'Please enter minutes exercised.'
        },
        weight: {
            type: Number,
            required: 'Please enter amount of weight used.'
        },
        reps: {
            type: Number,
            required: 'Please enter amount of reps completed.'
        },
        sets: {
            type: Number,
            required: 'Please enter amount of sets completed.'
        },
        distance: {
            type: Number,
            required: 'Please enter distance ran.'
        },
    }]
});

// possibly going to add function that totals the amount of time worked out.
// workout.methods.durationExercise = function(){
//     this.totalDuration = 
// }

const workout = mongoose.model('workout', workoutSchema);

module.exports = workout