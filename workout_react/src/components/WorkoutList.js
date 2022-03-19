import React from 'react';
import Workout from './Workout';

function WorkoutList({ workouts, onDelete, onEdit }) {
    return (
        <table id="workouts">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {workouts.map((workout, i) => <Workout workout={workout}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default WorkoutList;
