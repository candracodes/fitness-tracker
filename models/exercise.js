// Require necessary packages
const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new workout schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      name : {
        type : String,
        trim : true,
        required : "Please Enter Exercise name"
      },
      type : {
        type: String,
        trim : true,
        required : "Please Enter Exercise type"
      },
      distance : {
        type : Number
      },
      duration : {
        type : Number,
        required : "Please Enter Exercise duration"
      },
      weight: {
        type : Number
      },
      sets: {
        type : Number
      },
      reps: {
        type : Number
      }
    }
  ]
});

// Establish mongoose model
const Workout = mongoose.model("workout", WorkoutSchema);

// Export workout model
module.exports = Workout;