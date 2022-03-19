import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateWorkoutPage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');
    const history = useHistory();

    const createWorkout = async () => {
        const newWorkout = {name, reps, weight, unit, date};
        const response = await fetch('/workouts', {method: "POST", body: JSON.stringify(newWorkout), headers: {"Content-Type": "application/json"}});
        if (response.status === 201) {
            alert("Successfully created the workout")
        } else{
            alert(`Failed to create workout, status code = ${response.status}`);
        }
        history.push('/');
    };

    return (
        <div>
            <h2>Create Workout</h2>
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
                 <option value = "lb/kg">lb/kg</option>
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
                onClick={createWorkout}
            >Create</button>
        </div>
    );
}

export default CreateWorkoutPage;