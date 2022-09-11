import * as React from "react"

import "./mystyles.scss"
const IndexPage = () => {
  const [workouts, setWorkouts] = React.useState([]);
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [reps, setReps] = React.useState('');

  const [load,setLoad] = React.useState(0);
  const [sets,setSets] = React.useState(0);

  const pushItFunction = () => {
    setWorkouts([...workouts, { name: name, weight: weight, reps: reps }]);

    setLoad(load+(weight*reps));
    setSets(workouts.length+1);
  }
  const exportAsExcel = () => {
    // Export as excel function here
  }
  return (
    <div className="container has-background-warning">
      <div className="columns  p-2">
        <div className="column ">
          <h2 className="subtitle is-2">Log</h2>
          <p className="content">
            <input placeholder="Workout name" value={name} onChange={(e) => setName(e.target.value)} className="input m-1"></input>
           
            <input placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} className="input m-1" type='number'></input>
         
            <input placeholder="Reps" value={reps} onChange={(e) => setReps(e.target.value)} className="input m-1" type='number'></input>
          </p>
          <button onClick={pushItFunction} className="button is-primary p-2 m-2">Push it!</button>
          <button onClick={exportAsExcel} className="button is-success p-2 m-2">Export it!</button>
        </div>
        <div className="column is-four-fifths">
          <div className="columns">
            <div className="column">
            <h2 className="subtitle is-2">Streak </h2>
          
          <p className="content">
            <div>
              {workouts.map((workout) =>
                <div className="card p-2 m-1">
                  <p className="subtitle">{workout.name} / {workout.weight} KG x {workout.reps} </p>
                </div>
              )}
            </div>
          </p>
            </div>
            <div className="column">
              <p className="is-size-5">Load</p>
              <p className="is-size-1">{load} KG</p>
              <p className="is-size-5">Sets</p>
              <p className="is-size-1">{sets} Set</p>
             
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hero-Workout</title>
