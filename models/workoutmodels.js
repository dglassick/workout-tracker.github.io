const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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
            type: Number
        },
        reps: {
            type: Number      
        },
        sets: {
            type: Number     
        },
        distance: {
            type: Number    
        }
    }]
});

// possibly going to add function that totals the amount of time worked out.
// workout.methods.durationExercise = function(){
//     this.totalDuration = 
// }

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout