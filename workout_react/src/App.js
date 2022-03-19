import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateWorkoutPage from './pages/CreateWorkoutPage';
import EditWorkoutPage from './pages/EditWorkoutPage';
import { useState } from 'react';
import Navigation from './components/Navigation.js'

function App() {

  const [workoutToEdit, setWorkoutToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Elliott's Workout Tracker</h1>
          <p>This is a workout tracker app.</p>
        </header>
      <Navigation />
        <main>
          <Route path="/" exact>
            <HomePage setWorkoutToEdit={setWorkoutToEdit}/>
          </Route>
          <Route path="/create-workout">
            <CreateWorkoutPage />
          </Route>
          <Route path="/edit-workout">
            <EditWorkoutPage workoutToEdit = {workoutToEdit}/>
          </Route>
        </main>
        <footer>
         <p>&copy; 2022 Elliott Larsen</p>
      </footer>
      </Router>
    </div>
  );
}

export default App;