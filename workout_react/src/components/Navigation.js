import React from 'react';
import { Link } from 'react-router-dom';

function Navigation () {
    return (
        <nav>
            <Link to = "/" exact>Home</Link>
            <Link to = "/create-workout">Create</Link>
        </nav>
    );
}

export default Navigation;