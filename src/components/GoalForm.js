import React, { useState } from "react";

const GoalForm = ({setAllGoals,allGoals}) => {
    const [formData, setFormData] = useState({
      goal: "",
      by: ""
    });
    function handleSubmit(e){
      
      e.preventDefault();
      setAllGoals([...allGoals,formData])
      setFormData({...formData,by:"",goal:""})
    }
    return (
      <>
        <h1>My Goals</h1>
        <form>
          <input 
            type="text" 
            name='goal' 
            placeholder='Goal...' 
            value={formData.goal}
            onChange={(e)=>setFormData({...formData, goal: e.target.value})}
          />
          <input 
            type="text"
            name="by"
            placeholder='By...'
            value={formData.by}
            onChange={(e)=>setFormData({...formData, by: e.target.value})}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
      </>
    )
}

export default GoalForm;
