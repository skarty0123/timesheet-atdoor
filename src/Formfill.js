import React from 'react';
import "./stylish.css";
import { useState } from 'react';

export default function Formfill() {
  
const [candid, setCandid]=React.useState('AD2K220014');
const [date,setDate]=useState();
const[task,setTask]=useState('');
const[work,setWork]=React.useState('Work');
const[eff,setEff]=useState('');

const handChange=(e)=>{
  setCandid(e.target.value)
}
const handSub=(e)=>{
e.preventDefault();
 alert(`Thanks! \n Your response was submitted \n Candidate ID: ${candid}\n Date: ${date} \n Work Done: ${task} \n Work Type: ${work} \nEfforts in Hours: ${eff}`);
}
  return (
    <><div>
      <h1>Timesheet</h1>
    </div><form onSubmit={handSub}>
        <div>
          <label htmlFor='candid'> Roll no: </label>
          <input type="radio" name="candid" value='AD2K220014' checked={candid==='AD2K220014'} onChange={handChange}/>AD2K220014 <br />
          <input type="radio" name="candid" value='AD2K220015' checked={candid==='AD2K220015'} onChange={handChange}/>AD2K220015 <br />
          <input type="radio" name="candid" value='AD2K220016' checked={candid==='AD2K220016'} onChange={handChange}/>AD2K220016 <br />
          <input type="radio" name="candid" value='AD2K220017' checked={candid==='AD2K220017'} onChange={handChange}/>AD2K220017 <br />
          <input type="radio" name="candid" value='AD2K220018' checked={candid==='AD2K220018'} onChange={handChange}/>AD2K220018 <br />
          <input type="radio" name="candid" value='AD2K220019' checked={candid==='AD2K220019'} onChange={handChange}/>AD2K220019 <br />
        </div>
        <div>
          <label htmlFor='date'> Date </label> 
          <input type="date"  onChange={e=>setDate(e.target.value)} /><br />
        </div>

        <div>
          <label htmlFor='work'> Task / List of Activities Completed </label> 
          <input type="text" name="work" id='work' placeholder="Enter the activities completed " onChange={event => setTask(event.target.value)}/> <br />
        </div>
        <div>
          <label htmlFor='work'> Type of Work: </label>
          <input type="radio" name="wtyp" value='Work' checked={work==='Work'} onChange={e=>setWork(e.target.value)}/>Work<br />
          <input type="radio" name="wtyp" value='Leave' checked={work==='Leave'} onChange={e=>setWork(e.target.value)}/>Leave <br />
          <input type="radio" name="wtyp" value='Holiday' checked={work==='Holiday'} onChange={e=>setWork(e.target.value)}/>Holiday <br />
          <input type="radio" name="wtyp" value='Learning' checked={work==='Learning'} onChange={e=>setWork(e.target.value)}/>Learning <br />
        </div>
        <div>
          <label htmlFor='eff'> Effort in hours </label>
          <input type="text" name="eff" id='eff' placeholder="Enter in hours" onChange={event => setEff(event.target.value)}/> <br />
        </div>
      <div id="submit">
        <br/>
      
        <input type="submit" value="Submit"  id="sbut"  />
        
      </div>
      </form> </>
      
  )
}
