import React from 'react';
//import { Link } from 'react-router-dom';
import WorkoutList from '../components/WorkoutList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setWorkoutToEdit}) {

    const [workouts, setWorkouts] = useState([]);
    const history = useHistory()

    const onDelete = async _id => {
        const response = await fetch(`/workouts/${_id}`, {method: "DELETE"});
        if (response.status === 204) {
            const newWorkouts = workouts.filter(m => m._id !== _id);
            setWorkouts(newWorkouts);
        } else{
            console.error(`Failed to delete workout with _id = ${_id}, status code = ${response.status}`);
        }
    };


    const onEdit = workout => {
        setWorkoutToEdit(workout);
        history.push("/edit-workout");
    }

    const loadWorkouts = async () => {
        const response = await fetch('/workouts');
        const data = await response.json();
        setWorkouts(data);

    }

    useEffect(()=> {
        loadWorkouts();
    }, []);

    return (
        <>
            <h2>List of Workouts</h2>
            <WorkoutList workouts={workouts} onDelete = {onDelete} onEdit = {onEdit}></WorkoutList>
        </>
    );
}

export default HomePage;