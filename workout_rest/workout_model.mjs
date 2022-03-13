// Get the mongoose object.
import mongoose from 'mongoose';

// Prepare the database 'workouts' in the MongoDB server running locally on port 27017.
mongoose.connect(
    "mongodb://localhost:27017/workouts",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to the database.
const db = mongoose.connection;
// When the database connection successfullly opoens.
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

// Define the schema.
const workoutsSchema = mongoose.Schema({
    name: {type: String, required: true},
    reps: {type: Number, required: true},
    weight: {type: Number, required: true},
    unit: {type: String, required: true},
    date: {type: String, required: true}
});

// Complie the model from the schema.
const Workout = mongoose.model("Workout", workoutsSchema);

// Create an entry.
const createWorkout = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Workout.
    const workout = new Workout({name: name, reps: reps, weight: weight, unit: unit, date: date});
    // Call save() to persist this object as a document in MongoDB.
    return workout.save();
}

// Retrieve workouts based on the filter, projection, and limit parameters.
const findWorkout = async (filter, projection, limit) => {
    const query = Workout.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

// Search for the workout by ID.
const findWorkoutById = async (_id) => {
    const query = Workout.findById(_id);
    return query.exec();
}

// Replace the properties of the entry with the values provided.
const replaceWorkout = async (_id, name, reps, weight, unit, date) => {
    const result = await Workout.replaceOne({_id: _id}, 
        {name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.modifiedCount;
}

// Delete the entry with provided id value.
const deleteById = async (_id) => {
    const result = await Workout.deleteOne({_id: _id});
    return result.deletedCount;
}

export {createWorkout, findWorkout, findWorkoutById, replaceWorkout, deleteById};