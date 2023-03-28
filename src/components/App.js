import React, { useState } from 'react'
import '../styles/App.css';
import GoalForm from './GoalForm';
import ListOfGoals from './ListOfGoals';

const App = () => {

  const [allGoals, setAllGoals] = useState([]);
  console.log(allGoals)
  return (
    <div id="main">
      <GoalForm allGoals={allGoals} setAllGoals={setAllGoals} />
      <ListOfGoals allGoals={allGoals}/>
    </div>
  )
  
}


export default App;
