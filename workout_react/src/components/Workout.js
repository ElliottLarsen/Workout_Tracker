import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

function Workout({ workout, onDelete, onEdit }) {
    return (
        <tr>
            <td>{workout.name}</td>
            <td>{workout.reps}</td>
            <td>{workout.weight}</td>
            <td>{workout.unit}</td>
            <td>{workout.date}</td>
            <td>< MdEdit onClick = {() => onEdit(workout)} /></td>
            <td>< MdDeleteForever onClick = {() => onDelete(workout._id)} /></td>
        </tr>
    );
}

export default Workout;