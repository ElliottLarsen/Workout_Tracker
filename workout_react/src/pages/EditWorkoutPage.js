import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const EditWorkoutPage = ({workoutToEdit}) => {

    const[name, setName] = useState(workoutToEdit.name);
    const[reps, setReps] = useState(workoutToEdit.reps);
    const[weight, setWeight] = useState(workoutToEdit.weight);
    const[unit, setUnit] = useState(workoutToEdit.unit);
    const[date, setDate] = useState(workoutToEdit.date);
    const history = useHistory();

    const editWorkout = async () => {
        const editedWorkout = {name, reps, weight, unit, date};
        const response = await fetch(`/workouts/${workoutToEdit._id}`, {method: "PUT", body: JSON.stringify(editedWorkout), headers: {"Content-Type": "application/json"}});
        if (response.status === 200) {
            alert("Successfully edited the workout")
        } else{
            alert(`Failed to edit workout, tatus code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h2>Edit Workout and Save</h2>
            <p>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Enter reps here"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select onChange={e => setUnit(e.target.value)} value={unit}>
                <option value = "lbs">lbs</option>
                <option value = "kgs">kgs</option>
            </select>

            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            </p>
            <button
                onClick={editWorkout}
            >Save</button>
        </div>
    );
}

export default EditWorkoutPage;