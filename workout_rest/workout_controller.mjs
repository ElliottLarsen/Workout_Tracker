import * as workouts from "./workout_model.mjs";
import express from 'express';

const PORT= 3000;
const app = express();

app.use(express.json());

// Create a new entry.
app.post('/workouts', (req, res) => {
    workouts.createWorkout(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(workout => {
            res.status(201).json(workout);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: "Request failed"});
        });
});

// Retrieve workouts.
app.get('/workouts', (req, res) => {
    let filter = {};
    workouts.findWorkout(filter, '', 0)
        .then(workouts => {
            res.send(workouts);
        })
        .catch(error => {
            console.error(error);
            res.send({Error: "Request failed"});
        });
});

// Edit/Update workouts.
app.put('/workouts/:_id', (req, res) => {
    workouts.replaceWorkout(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1){
                res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date})
            } else {
                res.status(404).json({Error: "Resource not found"})
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({Error: "Request failed"});
        });
});

// Delete workouts.
app.delete('/workouts/:_id', (req, res) => {
    workouts.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({Error: "Resource not found"});
            }
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});