import React, { useState, useEffect } from 'react';
import {useNavigate,createSearchParams} from 'react-router-dom'
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const navigate=useNavigate() 
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:9000/api/movies');
      const payload = await response.json();
      console.log(payload)
      setMovies(payload);
    }
    getData();
  }, []);

  function handleabout(val){
    navigate({
        pathname:'/about',
        search:createSearchParams({
            object:JSON.stringify({
                    id:val
            })
        }).toString()
    })
}

  return (
   <>
   <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center', padding:'20px'}}>
   {
    Array.from(movies).map((obj,idx)=>(
    <div class="card" style={{width: "200px", margin:'10px', cursor:'pointer'}} onClick={()=>handleabout(obj.id)} >
      <div class="card-body">
        <h5 class="card-title">{obj.title}</h5>
        <p class="card-text">{obj.tagline}</p>
        <p class="card-text">Vote average: {obj.vote_average}</p>
      </div>
    </div>
    ))
   }
  </div>
   </>
  );
}

export default App;
