import React from "react";

const ListOfGoals = ({allGoals}) => {
  console.log(allGoals)
    return (
      <ul>
        {allGoals.map((data)=>{
          return <li>
            <p>My goal is to {data.goal}, by {data.by}.</p>
          </li>
        })}
      </ul>
    );
}

export default ListOfGoals;
